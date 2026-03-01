use std::fs::{self, File};
use std::io::Write;
use std::process::{Child, Command, Stdio};
#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;
use std::sync::{Arc, Mutex};
use std::time::Duration;
use tauri::{
  menu::{Menu, MenuItem},
  tray::{TrayIconBuilder, TrayIconEvent},
  Manager, RunEvent, WindowEvent,
};

struct AppState {
  #[allow(dead_code)]
  child_process: Arc<Mutex<Option<Child>>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let child_process = Arc::new(Mutex::new(None));
  let child_process_for_exit = child_process.clone();

  tauri::Builder::default()
    .manage(AppState {
      child_process: child_process.clone(),
    })
    .plugin(tauri_plugin_shell::init())
    .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
        let _ = app.get_webview_window("main").map(|w| {
           let _ = w.show();
           let _ = w.set_focus();
        });
    }))
    .setup(move |app| {
      // ─── Tray Setup ────────────────────────────────────────────────────────
      let status_i = MenuItem::with_id(app, "status", "Status: Active", false, None::<&str>)?;
      let show_i = MenuItem::with_id(app, "show", "Open Dashboard", true, None::<&str>)?;
      let admin_i = MenuItem::with_id(app, "admin", "Open Administrator Panel", true, None::<&str>)?;
      let sep = tauri::menu::PredefinedMenuItem::separator(app)?;
      let quit_i = MenuItem::with_id(app, "quit", "Quit Application", true, None::<&str>)?;
      
      let menu = Menu::with_items(app, &[&status_i, &sep, &show_i, &admin_i, &sep, &quit_i])?;
      
      let _tray = TrayIconBuilder::new()
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .show_menu_on_left_click(false) // Trigger on_tray_icon_event for Left Click
        .on_menu_event(move |app, event| {
          match event.id.as_ref() {
            "quit" => {
              app.exit(0);
            }
            "show" => {
              if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.set_focus();
              }
            }
            "admin" => {
              if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.set_focus();
                let _ = window.eval("window.location.href = 'http://localhost:3300/admin'");
              }
            }
            _ => {}
          }
        })
        .on_tray_icon_event(|tray, event| {
          if let TrayIconEvent::Click { .. } = event {
            let app = tray.app_handle();
            if let Some(window) = app.get_webview_window("main") {
              let _ = window.show();
              let _ = window.set_focus();
            }
          }
        })
        .build(app)?;

      // ─── Windows Sidecar Setup ─────────────────────────────────────────────
      #[cfg(target_os = "windows")]
      {
        setup_windows_sidecar(app, child_process.clone())?;
      }
      
      Ok(())
    })
    .on_window_event(|window, event| {
      if let WindowEvent::CloseRequested { api, .. } = event {
        window.hide().unwrap();
        api.prevent_close();
      }
    })
    .build(tauri::generate_context!())
    .expect("error while building tauri application")
    .run(move |_app_handle, event| {
      match event {
        RunEvent::Exit => {
          let mut lock = child_process_for_exit.lock().unwrap();
          if let Some(mut child) = lock.take() {
            let _ = child.kill();
          }
        }
        _ => {}
      }
    });
}

#[cfg(target_os = "windows")]
fn setup_windows_sidecar(
  app: &mut tauri::App,
  child_process: Arc<Mutex<Option<Child>>>,
) -> Result<(), Box<dyn std::error::Error>> {
  // ─── Phase 1: Persistence & Logging Initialization ────────────────────────
  let handle = app.handle();
  let local_data_dir = handle.path().app_local_data_dir()?;
  fs::create_dir_all(&local_data_dir)?;

  let log_path = local_data_dir.join("server.log");
  let db_path = local_data_dir.join("local.db");
  let sqlite_url = format!("file:{}", db_path.to_string_lossy());
  let media_dir = local_data_dir.join("media");
  fs::create_dir_all(&media_dir)?;

  // Set Global Environment
  std::env::set_var("SQLITE_URL", &sqlite_url);
  std::env::set_var("MEDIA_DIR", media_dir.to_string_lossy().to_string());
  std::env::set_var("NEXT_PUBLIC_SERVER_URL", "http://localhost:3300");
  std::env::set_var("PORT", "3300");
  std::env::set_var("HOSTNAME", "127.0.0.1"); // Explicit IPv4 loopback
  
  if std::env::var("PAYLOAD_SECRET").is_err() {
      std::env::set_var("PAYLOAD_SECRET", "864a8383b7ed11af189db510");
  }

  // Open log file in append mode so we can capture stabilizer diagnostics
  use std::fs::OpenOptions;
  let mut log_file = OpenOptions::new()
      .create(true)
      .write(true)
      .append(true)
      .open(&log_path)
      .ok();

  macro_rules! log_st {
      ($($arg:tt)*) => {
          if let Some(ref mut f) = log_file {
              let _ = writeln!(f, "[Stabilizer] {}", format!($($arg)*));
          }
      };
  }

  // ─── Phase 2: Aggressive Smart Stabilizer ──────────────────────────────────
  let port = 3300;
  log_st!("--- System Stabilizer Starting at {:?} ---", std::time::SystemTime::now());
  log_st!("Checking port {}...", port);

  let mut attempt = 0;
  let max_attempts = 3;
  let mut port_free = false;

  while attempt < max_attempts && !port_free {
      attempt += 1;
      log_st!("Verify port status (Attempt {}/{})...", attempt, max_attempts);
      
      // Verification: Try to bind to the port temporarily
      match std::net::TcpListener::bind(format!("127.0.0.1:{}", port)) {
          Ok(_) => {
              log_st!("SUCCESS: Port {} is verified FREE.", port);
              port_free = true;
          }
          Err(e) => {
              log_st!("CONFLICT: Port {} is busy ({}). Executing cleanup...", port, e);
              
              // Diagnostic: Snapshot connections
              let netstat_out = Command::new("cmd")
                  .args(&["/C", &format!("netstat -ano | findstr :{}", port)])
                  .output();
              if let Ok(out) = netstat_out {
                  log_st!("Current connections:\n{}", String::from_utf8_lossy(&out.stdout));
              }

              // Kill: Use a single PowerShell script that:
              //  1. Parses netstat output directly (avoids CMD 'for /f' quoting bugs)
              //  2. Uses $portPid (NOT $pid - that's a reserved PS variable!)
              //  3. Taskkills by PID with /F /T (force + tree)
              let ps_cmd = format!(
                  "$portPid = (netstat -ano | Select-String ':{} .*LISTENING').Line.Trim() -split '\\s+' | Select-Object -Last 1; if ($portPid -and $portPid -match '^\\d+$') {{ Write-Host \"Killing PID $portPid\"; taskkill /F /T /PID $portPid }}",
                  port
              );
              let ps_out = Command::new("powershell")
                  .args(&[
                      "-NoProfile",
                      "-ExecutionPolicy", "Bypass",
                      "-Command", &ps_cmd
                  ])
                  .creation_flags(0x08000000).output();
              if let Ok(out) = ps_out {
                  if !out.stdout.is_empty() { log_st!("Kill Stdout: {}", String::from_utf8_lossy(&out.stdout)); }
                  if !out.stderr.is_empty() { log_st!("Kill Stderr: {}", String::from_utf8_lossy(&out.stderr)); }
              }
              
              log_st!("Wait for OS socket release (2.0s cooldown)...");
              std::thread::sleep(Duration::from_millis(2000));
          }
      }
  }

  if !port_free {
      log_st!("CRITICAL: Port {} is STILL in use after {} attempts. Startup may fail.", port, max_attempts);
      
      // Final desperation: Log what this process actually is
      let info_out = Command::new("cmd")
          .args(&["/C", &format!("netstat -ano | findstr :{} | findstr LISTENING", port)])
          .output();
      if let Ok(out) = info_out {
          let line = String::from_utf8_lossy(&out.stdout);
          log_st!("Final listener state: {}", line);
          if let Some(pid) = line.split_whitespace().last() {
              let task_out = Command::new("tasklist").args(&["/FI", &format!("PID eq {}", pid)]).output();
              if let Ok(tout) = task_out {
                  log_st!("Process Detail:\n{}", String::from_utf8_lossy(&tout.stdout));
              }
          }
      }
  }

  let server_url = "http://localhost:3300";
  let mut cmd_name = "bun";
  
  // In release mode, prioritize Node.js if available, as Next.js standalone
  // is officially built for the Node runtime and resolve issues on Windows/Bun.
  if !cfg!(debug_assertions) {
      if Command::new("node")
          .arg("-v")
          .stdout(Stdio::null())
          .stderr(Stdio::null())
          .status()
          .map(|s| s.success())
          .unwrap_or(false) 
      {
          cmd_name = "node";
      }
  }

  let mut cmd = Command::new(cmd_name);

  // ─── Module Hunting (Simplified with Resource Map) ───
  if cfg!(debug_assertions) {
    cmd.args(["run", "dev"]);
  } else {
    // Release mode logic
    let resource_dir = handle.path().resource_dir()?;
    
    // We now have a fixed target "server/" from tauri.conf.json
    let server_path = resource_dir.join("server").join("server.js");

    if server_path.exists() {
        let parent = server_path.parent().unwrap();
        
        // Strip UNC prefix from parent directory for Bun/Node compatibility on Windows
        let clean_parent = parent.to_string_lossy().replace("\\\\?\\", "");
        println!("Setting working directory to: {}", clean_parent);
        cmd.current_dir(std::path::PathBuf::from(clean_parent));
        
        println!("Found Payload server at: {:?}", server_path);
        
        // Use clean string path to avoid UNC issues (the \\?\ prefix)
        let clean_path = server_path.to_string_lossy().replace("\\\\?\\", "");
        cmd.arg(clean_path);
    } else {
        // Log the failure in detail to aid diagnosis
        let log_path = local_data_dir.join("server.log");
        if let Ok(mut f) = File::create(&log_path) {
            let _ = writeln!(f, "CRITICAL: server.js NOT FOUND at {:?}", server_path);
            let _ = writeln!(f, "Resource Directory: {:?}", resource_dir);
            if let Ok(entries) = fs::read_dir(&resource_dir) {
                let _ = writeln!(f, "Contents of {:?}:", resource_dir);
                for entry in entries.flatten() {
                  let tp = if entry.path().is_dir() { "DIR " } else { "FILE" };
                  let _ = writeln!(f, "  [{}] {:?}", tp, entry.path());
                }
            }
        }
        
        let clean_resource_root = resource_dir.to_string_lossy().replace("\\\\?\\", "");
        cmd.current_dir(std::path::PathBuf::from(clean_resource_root));
        cmd.arg("server.js"); 
    }
    
    cmd.env("NODE_ENV", "production");
  }

  // ─── Windows GUI Mode (Suppress Console Window) ───
  // Prevents a secondary terminal window from appearing when the server starts.
  #[cfg(target_os = "windows")]
  cmd.creation_flags(0x08000000); // CREATE_NO_WINDOW

  // ─── Logging Redirect & Sidecar Spawn ───
  // Drop the stabilizer diagnostic handle so Sidecar can inherit the log file
  drop(log_file);

  if let Ok(file) = OpenOptions::new().create(true).append(true).open(&log_path) {
    let error_file = file.try_clone().unwrap_or_else(|_| {
        OpenOptions::new().create(true).append(true).open(local_data_dir.join("server.err.log")).unwrap()
    });
    
    if let Ok(mut f) = file.try_clone() {
        let _ = writeln!(f, "\n--- Sidecar Execution Report at {:?} ---", std::time::SystemTime::now());
        let _ = writeln!(f, "Working Directory: {:?}", cmd.get_current_dir());
        let _ = writeln!(f, "Execution Command: {:?}", cmd);
    }

    cmd.stdout(Stdio::from(file));
    cmd.stderr(Stdio::from(error_file));
  }

  let child = cmd.spawn();

  match child {
    Ok(c) => {
      *child_process.lock().unwrap() = Some(c);
      println!("Sidecar process spawned successfully.");
    }
    Err(e) => {
      eprintln!("Failed to spawn Payload server: {}. Make sure Bun is installed.", e);
      return Err(e.into());
    }
  }

  // ─── Webview Redirect ───
  let app_handle = app.handle().clone();
  std::thread::spawn(move || {
    let mut ready = false;
    let start_time = std::time::Instant::now();
    let timeout = Duration::from_secs(120);

    while start_time.elapsed() < timeout {
      std::thread::sleep(Duration::from_millis(500));
      if let Ok(response) = reqwest::blocking::get(server_url) {
        if response.status().is_success() {
          ready = true;
          std::thread::sleep(Duration::from_millis(2500)); // Final stability pause
          break;
        }
      }
    }

    if ready {
      println!("Payload server is ready! Redirecting webview...");
    } else {
      println!("Warning: Server poll timed out or failed. Redirecting anyway...");
    }

    if let Some(window) = app_handle.get_webview_window("main") {
      let _ = window.eval(&format!("window.location.href = '{}'", server_url));
    }
  });

  Ok(())
}
