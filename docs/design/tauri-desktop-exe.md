# Tauri 2.0 — Windows Desktop (.exe) Implementation Plan

## Overview

Transform this Next.js + Payload CMS codebase into a **versatile, multi-target application** that can:

1. **Deploy to Vercel** (cloud, as today)
2. **Run as a Windows `.exe`** (local desktop, no hosting cost)

The two targets share 100% of the same application code. Runtime behavior is controlled
entirely by environment variables. Tauri adds only a `src-tauri/` folder and does not
modify any existing Next.js or Payload source files.

---

## Architecture Summary

```
Same codebase
├── bun run build        → Vercel deployment (cloud)
└── bun run tauri:build  → Windows .exe installer (local)
```

```
Windows .exe Runtime
┌───────────────────────────────────────────────────────┐
│  Tauri Shell (.exe)                                   │
│  ├── Manages process lifecycle                        │
│  ├── Sets SQLITE_URL → AppData\Local\AppName\local.db │
│  ├── Spawns: bun run start (Payload on :3000)         │
│  └── WebView → http://localhost:3000                  │
└───────────────────────────────────────────────────────┘
```

### Environment-Driven Adapter Matrix

| `DATABASE_URL` | `UPLOADTHING_TOKEN` | Database | Media Storage |
|---|---|---|---|
| `mongodb://...` | set | MongoDB Atlas | UploadThing |
| *(empty)* | set | SQLite local | UploadThing |
| `mongodb://...` | *(empty)* | MongoDB Atlas | Local `/media` |
| *(empty)* | *(empty)* | **SQLite local** | **Local `/media`** |

> The fourth row (both empty) is the **Tauri desktop mode** — fully local, zero cloud cost.

---

## Prerequisites (User Machine)

- **Rust toolchain** — https://rustup.rs (one-time install, ~10 min)
- **Bun** — https://bun.sh (required to run the Payload server)
- **WebView2 Runtime** — pre-installed on Windows 10/11, bundled in NSIS installer for older systems

---

## TODO Task List

### ✅ Phase 0 — Already Done

- [x] **Env-driven DB adapter** — MongoDB when `DATABASE_URL` set, SQLite fallback
- [x] **Env-driven storage adapter** — UploadThing when `UPLOADTHING_TOKEN` set, local `/media` fallback
- [x] **`SQLITE_URL` env var** — allows Tauri to override the SQLite file path
- [x] **DNS config guard** — DNS settings only applied for MongoDB connections

---

### 🔲 Phase 1 — Tauri Project Initialization

> **Goal**: Add Tauri to the repo, verify dev mode works.

- [ ] **1.1** Install Rust toolchain (`rustup`) on dev machine
  ```bash
  # Windows: download and run https://rustup.rs
  rustup default stable
  rustup target add x86_64-pc-windows-msvc
  ```

- [ ] **1.2** Add Tauri CLI and API as dependencies
  ```bash
  bun add -D @tauri-apps/cli@^2
  bun add @tauri-apps/api@^2
  bun add @tauri-apps/plugin-shell@^2  # for spawning bun process
  bun add @tauri-apps/plugin-path@^2   # for AppData\Local path resolution
  ```

- [ ] **1.3** Initialize Tauri project
  ```bash
  bunx tauri init
  # When prompted:
  #   App name:        PayloadBase (or your app name)
  #   Window title:    Payload Base
  #   Web assets dir:  ../out        (Next.js output - not used in server mode)
  #   Dev server URL:  http://localhost:3000
  #   Dev command:     bun run dev
  #   Build command:   bun run build
  ```

- [ ] **1.4** Add Tauri scripts to `package.json`
  ```json
  {
    "scripts": {
      "tauri:dev":   "tauri dev",
      "tauri:build": "tauri build",
      "tauri:build:exe": "tauri build --target x86_64-pc-windows-msvc"
    }
  }
  ```

- [ ] **1.5** Verify Tauri dev mode opens a window pointing to `http://localhost:3000`
  ```bash
  # Terminal 1: start Next.js (already works)
  bun run dev

  # Terminal 2: start Tauri shell
  bun run tauri:dev
  ```

**Test**: A native window should appear rendering the app from localhost.

---

### 🔲 Phase 2 — Payload Server as Tauri Sidecar

> **Goal**: Tauri automatically starts and stops the Payload/Next.js server process.

- [ ] **2.1** Configure `tauri.conf.json` — `devUrl` and `beforeDevCommand`
  ```json
  {
    "build": {
      "devUrl": "http://localhost:3000",
      "beforeDevCommand": "",
      "beforeBuildCommand": "bun run build"
    }
  }
  ```
  > Note: We handle process spawning in Rust code (Phase 2.3) rather than `beforeDevCommand`
  > so we can capture the PID and kill it cleanly on app exit.

- [ ] **2.2** Add `plugin-shell` allowlist in `tauri.conf.json`
  ```json
  {
    "plugins": {
      "shell": {
        "open": true,
        "scope": [
          {
            "name": "bun-server",
            "cmd":  "bun",
            "args": ["run", "start"]
          }
        ]
      }
    }
  }
  ```

- [ ] **2.3** Write Rust `main.rs` — spawn server, set `SQLITE_URL`, kill on exit
  ```rust
  // src-tauri/src/main.rs
  // Full implementation: see Phase 2 implementation notes below
  ```
  Key responsibilities:
  - Resolve `app_local_data_dir()` → `AppData\Local\AppName\`
  - Create directory if not exists
  - Set `SQLITE_URL=file:AppData\Local\AppName\local.db`
  - Set `PAYLOAD_SECRET` if not already set (generate random on first run, persist)
  - Spawn `bun run start` as a child process
  - Register app exit handler to kill the child process
  - Wait for server to be ready (poll `http://localhost:3000/api/health`)
  - Open window once server is ready

- [ ] **2.4** Generate and persist `PAYLOAD_SECRET` on first launch
  - Store in `AppData\Local\AppName\config.json`
  - Read on subsequent launches
  - Never expose in window title or logs

- [ ] **2.5** Show a loading screen while Payload server boots
  - Tauri window starts with a simple "Starting..." HTML page
  - Once `localhost:3000` responds, navigate WebView to the app

- [ ] **2.6** Test: kill the window → verify `bun run start` process also terminates
  - Check Task Manager — no orphan `bun.exe` processes remaining

---

### 🔲 Phase 3 — System Tray Integration

> **Goal**: The app lives in the system tray (notification area). No taskbar clutter.

- [ ] **3.1** Add tray icon asset — `src-tauri/icons/tray.png` (32x32 px)
  - Generate from existing app icon

- [ ] **3.2** Configure tray in `tauri.conf.json`
  ```json
  {
    "trayIcon": {
      "iconPath": "icons/tray.png",
      "iconAsTemplate": false
    }
  }
  ```

- [ ] **3.3** Implement tray menu in Rust
  ```
  Tray Menu:
  ├── [App Name] v1.0.0       (disabled label)
  ├── ─────────────────────
  ├── Open Admin Panel         → opens/focuses window to /admin
  ├── Open App                 → opens/focuses window to /
  ├── ─────────────────────
  ├── Server: Running ✓        (status indicator, disabled)
  ├── Restart Server           → kills + re-spawns bun process
  ├── ─────────────────────
  └── Quit                     → kills server + exits app
  ```

- [ ] **3.4** Configure app to minimize to tray instead of closing
  - Clicking window X button → hides window (server keeps running)
  - Only "Quit" from tray truly exits

- [ ] **3.5** Show tray tooltip: `Payload Base — Server Running on :3000`

---

### 🔲 Phase 4 — Data Directory & SQLite Path

> **Goal**: Database and media live in `AppData\Local\AppName\`, not next to the `.exe`.

- [ ] **4.1** Resolve `app_local_data_dir()` in Rust main setup
  - Windows path: `C:\Users\{user}\AppData\Local\{app_name}\`

- [ ] **4.2** Set `SQLITE_URL` env var before spawning server
  ```
  SQLITE_URL=file:C:\Users\{user}\AppData\Local\AppName\local.db
  ```

- [ ] **4.3** Set `NEXT_PUBLIC_SERVER_URL` env var
  ```
  NEXT_PUBLIC_SERVER_URL=http://localhost:3000
  ```

- [ ] **4.4** (Stretch) Configure local media directory
  - When `UPLOADTHING_TOKEN` is absent, set a custom media path:
  ```
  PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
  # Media collection's staticDir should respect an env var
  ```
  - Update `src/collections/media/index.ts` to use env-driven `staticDir`:
  ```typescript
  upload: {
    staticDir: process.env.MEDIA_DIR || 'media',
  }
  ```

- [ ] **4.5** First-run initialization
  - Check if `local.db` exists
  - If not: show "Setting up for the first time..." loading message
  - Payload will auto-migrate the SQLite schema on first boot

---

### 🔲 Phase 5 — Build & Packaging

> **Goal**: Produce a distributable `.exe` installer for Windows.

- [ ] **5.1** Generate all required app icons
  ```bash
  bunx tauri icon src-tauri/icons/app-icon.png
  # Generates all required sizes: 32x32, 128x128, 256x256, etc.
  ```

- [ ] **5.2** Configure NSIS installer in `tauri.conf.json`
  ```json
  {
    "bundle": {
      "active": true,
      "targets": ["nsis"],
      "productName": "Payload Base",
      "identifier": "com.yourorg.payloadbase",
      "publisher": "Your Org",
      "windows": {
        "nsis": {
          "installMode": "perMachine"
        }
      }
    }
  }
  ```

- [ ] **5.3** Build the `.exe` installer
  ```bash
  bun run tauri:build:exe
  # Output: src-tauri/target/release/bundle/nsis/PayloadBase_x.x.x_x64-setup.exe
  ```

- [ ] **5.4** Test full install flow on a clean Windows machine
  - Install the `.exe`
  - Verify WebView2 is bundled/installed automatically
  - Verify app starts, server boots, WebView loads
  - Verify `AppData\Local\PayloadBase\local.db` is created

- [ ] **5.5** Add `.gitignore` entries for Rust build artifacts
  ```gitignore
  # Tauri / Rust build artifacts
  src-tauri/target/
  ```

---

### 🔲 Phase 6 — CI/CD & Distribution (Optional)

> **Goal**: Automated builds via GitHub Actions for each release.

- [ ] **6.1** Create GitHub Actions workflow `.github/workflows/tauri-build.yml`
  - Trigger: on `git tag v*`
  - Build: Windows `.exe` on `windows-latest` runner
  - Release: upload to GitHub Releases automatically

- [ ] **6.2** Configure Tauri Updater (auto-update)
  - Sign releases with a private key
  - Publish update manifest to GitHub Releases
  - App checks for updates on startup and notifies via tray

---

## File Structure After Implementation

```
payload-base-bun/
├── src/                          ← Next.js + Payload (UNCHANGED)
├── src-tauri/                    ← NEW: Tauri shell
│   ├── Cargo.toml                ← Rust dependencies
│   ├── tauri.conf.json           ← Tauri config, bundle settings
│   ├── build.rs                  ← Tauri build script
│   ├── icons/                    ← App icons (all sizes)
│   │   ├── app-icon.png
│   │   ├── tray.png
│   │   └── ...
│   └── src/
│       └── main.rs               ← Rust entrypoint, sidecar logic
├── docs/
│   └── design/
│       └── tauri-desktop-exe.md  ← This file
└── package.json                  ← +4 tauri:* scripts
```

---

## Environment Variables Reference

| Variable | Set By | Purpose |
|---|---|---|
| `DATABASE_URL` | User's `.env` or absent | `mongodb://` = MongoDB, absent = SQLite |
| `SQLITE_URL` | Tauri (auto) | Full path to SQLite file in `AppData\Local` |
| `UPLOADTHING_TOKEN` | User's `.env` or absent | Set = UploadThing, absent = local `/media` |
| `MEDIA_DIR` | Tauri (auto, stretch) | Full path to media folder in `AppData\Local` |
| `PAYLOAD_SECRET` | User's `.env` or Tauri (auto-generated) | Payload encryption secret, persisted to `config.json` |
| `NEXT_PUBLIC_SERVER_URL` | Tauri (auto) | Always `http://localhost:3000` in desktop mode |

---

## Key Trade-offs Accepted

| Decision | Trade-off |
|---|---|
| Requires Bun/Node.js installed by user | Simpler than bundling Node runtime; Bun install is ~10 seconds |
| Internet required (no full offline) | App can read cached pages offline but writes need DB connection |
| SQLite in `AppData\Local` | Correct for local data; backup = copy the `.db` file |
| NSIS installer (not portable `.exe`) | Installer handles WebView2, Start Menu shortcut, uninstaller |

---

## Phase Execution Order

```
Phase 0 ✅ → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → (Phase 6)
  Done       ~2h        ~4h        ~3h        ~2h        ~2h       Optional
```

**Total estimated effort: 13-15 hours of focused development**
