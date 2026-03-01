# Tauri Migration Guide (For Existing Next.js + Prisma/Payload Apps)

If you have an existing Next.js application (using Prisma, Payload CMS, or just standard API routes) and want to give it desktop capabilities using Tauri 2.0, you don't need to start from scratch. You can migrate our "Sidecar Architecture" in less than 5 minutes.

Here is the step-by-step guide.

---

## The Migration Checklist

### 1. Copy the Required Assets
Copy these three items from a working project (like `payload-base-bun`) into your existing project:

1.  📁 `src-tauri/` (The entire folder containing Rust logic and config)
2.  📜 `scripts/download-runtimes.ps1` (Essential for bundled Node/Bun)
3.  📜 `scripts/post-build.js` (CRITICAL: Handles the "Nuclear Sync" of `node_modules`. Without this, your standalone server will crash).

---

### 2. Update Tauri Config Identities
Open `src-tauri/tauri.conf.json` in your new project and update the app name and identifier:

```json
{
  "productName": "YourNewAppName",
  "identifier": "com.yourname.newapp"
}
```

---

### 3. Adjust the Build Scripts
Update your `package.json` to include the Tauri build commands. The `tauri:build:exe` command ensures runtimes are downloaded before building.

```json
  "scripts": {
    "build": "next build && node scripts/post-build.js",
    "build:tauri": "cross-env NEXT_TURBO=0 rimraf .next && cross-env NEXT_TURBO=0 next build --webpack && node scripts/post-build.js",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "tauri:build:exe": "powershell -ExecutionPolicy Bypass -File scripts/download-runtimes.ps1 && bunx tauri build --target x86_64-pc-windows-msvc",
    "setup:runtimes": "powershell -ExecutionPolicy Bypass -File scripts/download-runtimes.ps1"
  }
```

---

### 4. Enable Standalone Output
Ensure your `next.config.mjs` (or `.js`) is configured to output a standalone build:

```javascript
const nextConfig = {
  output: 'standalone',
  // ... other configs
}
```

---

### 5. Adjust Environment Variables (Prisma/DB Specific)
In our base repo, we inject `SQLITE_URL`. If your existing project uses Prisma, it likely expects `DATABASE_URL`. 

You must update the Rust sidecar to inject the correct environment variable name so your ORM can find the local database.

Open `src-tauri/src/lib.rs` and modify the environment injection:

```rust
// In src-tauri/src/lib.rs (around line ~120)

let handle = app.handle();
let local_data_dir = handle.path().app_local_data_dir()?;

let db_path = local_data_dir.join("local.db");
let database_url = format!("file:{}", db_path.to_string_lossy());

// Inject DATABASE_URL instead of SQLITE_URL
std::env::set_var("DATABASE_URL", &database_url); 
```

> [!WARNING]
> **Prisma Native Binary Note**: Prisma relies on a native query engine binary. The `post-build.js` script handles copying the entire `node_modules` folder, which ensures this binary is present in the final standalone build. If `post-build.js` fails or is skipped, your app will install but crash when querying Prisma.

---

### 6. Install Dependencies
You need the Tauri CLI and core packages:

```bash
bun add -d @tauri-apps/cli@^2
bun add @tauri-apps/api@^2 @tauri-apps/plugin-shell@^2
```

### 7. Run the Setup & Build
1.  Download the bundled runtimes:
    ```bash
    bun run setup:runtimes
    ```
2.  Test the Dev mode:
    ```bash
    bun run tauri:dev
    ```
3.  Build the installer:
    ```bash
    bun run tauri:build:exe
    ```
