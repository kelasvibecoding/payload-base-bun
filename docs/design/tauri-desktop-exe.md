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
│  ├── Spawns: bun run start (Payload on :3300)         │
│  └── WebView → http://localhost:3300                  │
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

### ✅ Phase 1 — Tauri Project Initialization

> **Goal**: Add Tauri to the repo, verify dev mode works.

- [x] **1.1** Install Rust toolchain (`rustup`) on dev machine
- [x] **1.2** Add Tauri CLI and API as dependencies
- [x] **1.3** Initialize Tauri project (`src-tauri` created)
- [x] **1.4** Add Tauri scripts to `package.json`
- [x] **1.5** Verify Tauri dev mode opens a window pointing to `http://localhost:3300`

---

### ✅ Phase 2 — Payload Server as Tauri Sidecar

> **Goal**: Tauri automatically starts and stops the Payload/Next.js server process.

- [x] **2.1** Configure `tauri.conf.json` — `devUrl` and `beforeDevCommand`
- [x] **2.2** Add `plugin-shell` allowlist in `tauri.conf.json`
- [x] **2.3** Write Rust `lib.rs` — spawn server, set `SQLITE_URL`, kill on exit
- [x] **2.4** Generate and persist `PAYLOAD_SECRET` (implemented fallback in Rust)
- [x] **2.5** Intelligent polling for server readiness
- [x] **2.6** Test: kill the window → verify `bun run start` process also terminates

---

### ✅ Phase 3 — System Tray Integration

> **Goal**: The app lives in the system tray (notification area). No taskbar clutter.

- [x] **3.1** Add tray icon asset — `src-tauri/icons/tray.png` (32x32 px)
- [x] **3.2** Configure tray in `tauri.conf.json`
- [x] **3.3** Implement tray menu in Rust (Show App, Admin Panel, Quit)
- [x] **3.4** Configure app to minimize to tray instead of closing (hides on X)
- [x] **3.5** Implement tray click event to restore window

---

### ✅ Phase 4 — Data Persistence & Media Config

> **Goal**: Database and media live in `AppData\Local\AppName\`, not next to the `.exe`.

- [x] **4.1** Resolve `app_local_data_dir()` in Rust main setup
- [x] **4.2** Set `SQLITE_URL` env var before spawning server
- [x] **4.3** Set `NEXT_PUBLIC_SERVER_URL` env var
- [x] **4.4** Configure local media directory (`MEDIA_DIR`)
- [x] **4.5** Update `src/collections/media/index.ts` to respect `MEDIA_DIR`

-   [x] **4.1** Resolve `app_local_data_dir()` in Rust main setup
-   [x] **4.2** Set `SQLITE_URL` env var before spawning server
-   [x] **4.3** Set `NEXT_PUBLIC_SERVER_URL` env var
-   [x] **4.4** Configure local media directory (`MEDIA_DIR`)
-   [x] **4.5** Update `src/collections/media/index.ts` to respect `MEDIA_DIR`

---

### ✅ Phase 5 — Build & Packaging

> **Goal**: Produce a distributable `.exe` installer for Windows.

-   [x] 5.1 Generate all required app icons
-   [x] 5.2 Configure NSIS installer in `tauri.conf.json`
-   [x] 5.3 Build the .exe installer (`bun run tauri:build:exe`)
-   [x] 5.4 Verify PayloadBase_0.1.0_x64-setup.exe is created
-   [x] 5.5 Add `.gitignore` entries for Rust build artifacts

---

### 🔲 Phase 6 — CI/CD & Distribution (Optional)

- [ ] **6.2** Configure Tauri Updater (auto-update)

---

## File Structure

```
payload-base-bun/
├── src/                          ← Next.js + Payload
├── src-tauri/                    ← Tauri shell
│   ├── Cargo.toml                ← Rust dependencies
│   ├── tauri.conf.json           ← Tauri config
│   ├── icons/                    ← App icons
│   └── src/
│       ├── main.rs               ← Rust entrypoint
│       └── lib.rs                ← App logic & Sidecar spawning
└── package.json                  ← tauri scripts
```

---

## Environment Variables Reference

| Variable | Set By | Purpose |
|---|---|---|
| `DATABASE_URL` | User or absent | Cloud (MongoDB) vs Local (SQLite) |
| `SQLITE_URL` | Tauri (auto) | Persistent DB path in `AppData\Local` |
| `MEDIA_DIR` | Tauri (auto) | Persistent Media path in `AppData\Local` |
| `PAYLOAD_SECRET` | User or Tauri | Fallback provided in Rust sidecar |
| `NEXT_PUBLIC_SERVER_URL` | Tauri (auto) | Fixed `http://localhost:3300` |

---

## Final Review Checklist

- [x] Sidecar spawns/kills correctly
- [x] AppData directory is used for permanence
- [x] Tray menu gives control over the app
- [ ] Build completes successfully
