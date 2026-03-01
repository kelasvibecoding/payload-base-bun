# Bundled Runtime Sidecars (Node.js + Bun) for Tauri

> **Goal**: Ship a truly standalone `.exe` installer that works on any Windows machine — no Node.js, no Bun, nothing pre-installed by the user.

---

## How It Works

Instead of calling the system's `node` or `bun` commands (which may not exist on the user's machine), we embed the **actual runtime executables** directly inside our Tauri bundle. Tauri ships them alongside the app under `src-tauri/bin/`, and Rust picks the right one at runtime via a `sidecar` command resolution.

```
tauri-app/
├── src-tauri/
│   ├── bin/
│   │   ├── node-x86_64-pc-windows-msvc.exe   ← Bundled Node.js (~40 MB)
│   │   └── bun-x86_64-pc-windows-msvc.exe    ← Bundled Bun (~110 MB)
│   └── tauri.conf.json
```

> [!IMPORTANT]
> The filename format is **strict**: `<name>-<target-triple>.exe`  
> Tauri uses this naming pattern to resolve the right binary per platform automatically.

---

## Step 1: Download the Binaries

Use the provided setup script. It downloads both runtimes and places them in the correct location automatically.

```bash
bun run setup:runtimes
```

This runs `scripts/download-runtimes.ps1`. If you need to do it manually:

```powershell
# Run with: powershell -ExecutionPolicy Bypass -File scripts/download-runtimes.ps1
```

---

## Step 2: Register Sidecars in `tauri.conf.json`

The `externalBin` key in the `bundle` section is what tells Tauri to include these files:

```json
{
  "bundle": {
    "active": true,
    "targets": ["nsis"],
    "resources": {
      "../.next/standalone/": "server/"
    },
    "externalBin": [
      "bin/node",
      "bin/bun"
    ]
  }
}
```

---

## Step 3: Rust Implementation (`lib.rs`)

The `lib.rs` file handles identifying and spawning the correct runtime at boot:

```rust
let resource_dir = handle.path().resource_dir()?;
let node_bin = resource_dir.join("bin").join("node-x86_64-pc-windows-msvc.exe");
let bun_bin  = resource_dir.join("bin").join("bun-x86_64-pc-windows-msvc.exe");

// Logic:
// 1. Check for bundled Node.js (high stability for Next.js)
// 2. Check for bundled Bun if Node is missing
// 3. Fail if neither is found
```

---

## Step 4: Maintenance

### Updating Runtimes
To update to a newer Node.js or Bun version, update the URLs in `scripts/download-runtimes.ps1` and run `bun run setup:runtimes`.

### .gitignore
The binaries are large and are **ignored** by Git. They will be downloaded during your CI/CD process or on-demand by the build script.

---

## Step 5: Build & Package

To build the final installer:

```bash
bun run tauri:build:exe
```

This command chains:
1. Version bump
2. DB Initialization
3. **Runtime sidecar download/verification**
4. Final Tauri build

---

## Technical Specs

| Component | Architecture | Runtime Size |
|---|---|---|
| Node.js | x86_64-pc-windows-msvc | ~70 MB |
| Bun | x86_64-pc-windows-msvc | ~110 MB |
| **Total Overhead** | | **~180 MB** |

By bundling these rountimes, we ensure **100% deterministic execution** — every user runs the same version of the runtime that you tested against.
