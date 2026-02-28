# Tauri 2.0 — Android Wrapper (.apk) Implementation Plan

## Overview

Transform this Next.js + Payload CMS codebase into a **native Android application** that
wraps the existing web app in a native shell. The Android APK acts as a **pure client** —
it renders the web frontend inside a native WebView but relies on a **remote server**
(Vercel or any hosted instance) for all backend operations.

> **Related Plan**: See [`tauri-desktop-exe.md`](./tauri-desktop-exe.md) for the Windows
> `.exe` approach where the backend runs locally on the user's machine.

---

## Architecture Summary

```
Android APK (Tauri 2.0)
┌───────────────────────────────────────────────────────┐
│  Tauri Native Shell (.apk)                            │
│  ├── Android WebView (Chromium)                       │
│  ├── Native UI chrome (status bar, back button)       │
│  ├── Push notifications (via Tauri plugin)            │
│  └── Loads → https://your-app.vercel.app              │
└───────────────────────────────────────────────────────┘
          ↓ HTTPS requests
┌─────────────────────────────────┐
│  Remote Server (Vercel / VPS)   │
│  ├── Payload CMS backend        │
│  ├── Next.js SSR                │
│  └── MongoDB / PostgreSQL       │
└─────────────────────────────────┘
```

### Key Distinction from Desktop (.exe)

| | Windows `.exe` | Android `.apk` |
|---|---|---|
| Backend location | **Local machine** (localhost:3000) | **Remote server** (Vercel/VPS) |
| Database | SQLite (local file) | MongoDB/PostgreSQL (cloud) |
| Node.js required | Yes (on user's PC) | **No** |
| Internet required | Optional (SQLite mode) | **Always** |
| Payload Admin | Runs locally | Accessed via remote URL |
| Media storage | Local disk or UploadThing | UploadThing (required) |
| Offline support | Partial | ❌ None |

---

## What "Android Wrapper" Means

This is **not** a native Android app with custom screens. It is:

- ✅ A native `.apk` installable from outside Play Store (sideload) or via Play Store
- ✅ Full-screen WebView rendering your existing Next.js frontend
- ✅ Native Android chrome: status bar, navigation gestures, app icon
- ✅ Can receive push notifications via native plugin
- ✅ Can open camera, access files via native plugins
- ✅ Deep links: `payloadbase://` → opens the app
- ✅ "Add to Home Screen" feel — no browser address bar visible
- ❌ Not a fully offline-capable app
- ❌ Cannot run the Payload CMS backend locally on the phone

---

## Prerequisites

### Developer Machine

- **Rust toolchain** — https://rustup.rs
- **Android Studio** — https://developer.android.com/studio (includes Android SDK + NDK)
- **Java 17+** — bundled with Android Studio
- **Android SDK** — API level 24+ (Android 7.0+)
- **Bun** — for building the Next.js frontend assets

### Environment Setup

```bash
# After installing Android Studio, set these env vars (Windows)
$env:JAVA_HOME  = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:NDK_HOME = "$env:ANDROID_HOME\ndk\{version}"

# Add Rust Android targets
rustup target add aarch64-linux-android    # ARM64 (modern phones)
rustup target add armv7-linux-androideabi  # ARM32 (older phones)
rustup target add x86_64-linux-android     # x86_64 (emulator)

# Install Android NDK via Android Studio SDK Manager:
# SDK Manager → SDK Tools → NDK (Side by side) ✓
```

---

## TODO Task List

### ✅ Phase 0 — Already Done (Shared with Desktop Plan)

- [x] **Env-driven DB adapter** — MongoDB when `DATABASE_URL` set, SQLite fallback
- [x] **Env-driven storage adapter** — UploadThing when `UPLOADTHING_TOKEN` set
- [x] **`payload.config.ts`** — No changes needed for Android wrapper

---

### 🔲 Phase 1 — Tauri Mobile Initialization

> **Goal**: Add Tauri 2.0 with Android support to the repo.

> **Note**: If you already completed Phase 1 of the desktop plan (`bunx tauri init` and
> added `@tauri-apps/cli@^2`), skip steps 1.1 and 1.2.

- [ ] **1.1** Install Rust toolchain (if not done)
  ```bash
  # Download and run https://rustup.rs
  rustup default stable
  ```

- [ ] **1.2** Add Tauri CLI and dependencies (if not done)
  ```bash
  bun add -D @tauri-apps/cli@^2
  bun add @tauri-apps/api@^2
  bun add @tauri-apps/plugin-shell@^2
  ```

- [ ] **1.3** Initialize Tauri Android target
  ```bash
  # Initialize Android project (generates src-tauri/gen/android/)
  bunx tauri android init
  ```

- [ ] **1.4** Add Android scripts to `package.json`
  ```json
  {
    "scripts": {
      "tauri:dev:android":   "tauri android dev",
      "tauri:build:apk":     "tauri android build",
      "tauri:build:apk:release": "tauri android build --apk"
    }
  }
  ```

- [ ] **1.5** Verify Android emulator setup
  ```bash
  # Open Android Studio → Device Manager → Create Virtual Device
  # Recommended: Pixel 6, API 34 (Android 14)
  # Start the emulator, then:
  bun run tauri:dev:android
  ```

**Test**: App loads in Android emulator showing your web app.

---

### 🔲 Phase 2 — Android-Specific Tauri Configuration

> **Goal**: Configure the APK to point at the remote server and look like a native app.

- [ ] **2.1** Create `src-tauri/tauri.android.conf.json`
  ```json
  {
    "build": {
      "devUrl": "https://your-app.vercel.app",
      "frontendDist": "../out"
    },
    "app": {
      "windows": [
        {
          "title": "Payload Base",
          "width": 390,
          "height": 844,
          "resizable": true,
          "fullscreen": false
        }
      ]
    }
  }
  ```

  > **Important**: Replace `https://your-app.vercel.app` with your actual deployed URL.
  > For development/testing, you can also point to a staging URL.

- [ ] **2.2** Configure Android app metadata in `src-tauri/gen/android/app/build.gradle`
  ```groovy
  android {
      defaultConfig {
          applicationId "com.yourorg.payloadbase"
          minSdk 24          // Android 7.0+
          targetSdk 34       // Android 14
          versionCode 1
          versionName "1.0.0"
      }
  }
  ```

- [ ] **2.3** Configure Android manifest permissions
  Edit `src-tauri/gen/android/app/src/main/AndroidManifest.xml`:
  ```xml
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  <!-- Optional: for camera access in media uploads -->
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  ```

- [ ] **2.4** Configure `allowNavigation` in `tauri.conf.json` (base config)
  ```json
  {
    "security": {
      "csp": null,
      "allowNavigation": [
        "https://your-app.vercel.app",
        "https://*.uploadthing.com",
        "https://*.vercel.app"
      ]
    }
  }
  ```

- [ ] **2.5** Rust `main.rs` — Android platform block (no-op setup)
  ```rust
  #[cfg(target_os = "android")]
  fn setup_platform(_app: &mut tauri::App) -> Result<(), Box<dyn std::error::Error>> {
      // Android wrapper: no local server to spawn
      // WebView loads the remote URL from tauri.android.conf.json
      // All backend calls go to the remote Vercel/VPS deployment
      Ok(())
  }
  ```

---

### 🔲 Phase 3 — App Identity & Branding

> **Goal**: Make the APK look and feel like a real branded native app.

- [ ] **3.1** Generate Android icon set from master icon
  ```bash
  bunx tauri icon src-tauri/icons/app-icon.png
  # Generates mipmap-* folders for all densities:
  # mdpi (48x48), hdpi (72x72), xhdpi (96x96), xxhdpi (144x144), xxxhdpi (192x192)
  ```

- [ ] **3.2** Configure adaptive icon (Android 8.0+)
  Create `src-tauri/gen/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`:
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
      <background android:drawable="@color/ic_launcher_background"/>
      <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
  </adaptive-icon>
  ```

- [ ] **3.3** Set splash screen color to match app theme
  Edit `src-tauri/gen/android/app/src/main/res/values/colors.xml`:
  ```xml
  <resources>
      <color name="ic_launcher_background">#0F172A</color>
  </resources>
  ```

- [ ] **3.4** Configure app display name
  Edit `src-tauri/gen/android/app/src/main/res/values/strings.xml`:
  ```xml
  <resources>
      <string name="app_name">Payload Base</string>
  </resources>
  ```

- [ ] **3.5** Hide WebView address bar (already hidden by default in Tauri)
  - Verify no browser chrome is visible in the emulator
  - Test landscape and portrait orientations

---

### 🔲 Phase 4 — Deep Linking

> **Goal**: `payloadbase://` URLs open the app directly to a specific page.

- [ ] **4.1** Add deep link scheme to Android manifest
  ```xml
  <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="payloadbase" />
  </intent-filter>
  ```

- [ ] **4.2** Handle deep links in Tauri
  ```rust
  // src-tauri/src/main.rs
  .plugin(tauri_plugin_deep_link::init())
  ```

- [ ] **4.3** Test deep link: send `payloadbase://admin` → verify app opens to `/admin`

---

### 🔲 Phase 5 — Offline Awareness (Graceful Degradation)

> **Goal**: Show a user-friendly message when network is unavailable (app requires internet).

- [ ] **5.1** Add network state plugin
  ```bash
  bun add @tauri-apps/plugin-network@^2
  ```

- [ ] **5.2** Add offline banner to Next.js frontend (Client Component)
  ```tsx
  // src/components/offline-banner.tsx — shown only in Tauri Android context
  'use client'
  export function OfflineBanner() {
    // Check window.__TAURI__ to know we're in Tauri
    // Use navigator.onLine + listen to 'offline' event
    // Show: "No internet connection. Please reconnect to continue."
  }
  ```

- [ ] **5.3** Add to root layout — only renders inside Tauri context
  ```tsx
  // Only show in Tauri (window.__TAURI__ exists)
  {typeof window !== 'undefined' && window.__TAURI__ && <OfflineBanner />}
  ```

---

### 🔲 Phase 6 — Build, Sign & Distribute

> **Goal**: Produce a signed, distributable `.apk` or `.aab` for distribution.

- [ ] **6.1** Generate a signing keystore (one-time, keep safe!)
  ```bash
  keytool -genkey -v \
    -keystore payload-base-release.keystore \
    -alias payloadbase \
    -keyalg RSA -keysize 2048 \
    -validity 10000
  ```
  > ⚠️ **Critical**: Back up this keystore. Without it, you cannot update your app on
  > Play Store or distribute updates to users who installed previous versions.

- [ ] **6.2** Configure signing in `build.gradle`
  ```groovy
  android {
      signingConfigs {
          release {
              storeFile file(System.getenv("KEYSTORE_PATH"))
              storePassword System.getenv("KEYSTORE_PASSWORD")
              keyAlias System.getenv("KEY_ALIAS")
              keyPassword System.getenv("KEY_PASSWORD")
          }
      }
      buildTypes {
          release {
              signingConfig signingConfigs.release
              minifyEnabled true
              proguardFiles getDefaultProguardFile('proguard-android-optimize.txt')
          }
      }
  }
  ```

- [ ] **6.3** Build release APK
  ```bash
  # Set env vars for signing
  $env:KEYSTORE_PATH = ".\payload-base-release.keystore"
  $env:KEYSTORE_PASSWORD = "your-password"
  $env:KEY_ALIAS = "payloadbase"
  $env:KEY_PASSWORD = "your-password"

  # Build release APK
  bun run tauri:build:apk:release
  # Output: src-tauri/gen/android/app/build/outputs/apk/release/app-release.apk
  ```

- [ ] **6.4** Build `.aab` (for Play Store submission)
  ```bash
  bunx tauri android build --aab
  # Output: src-tauri/gen/android/app/build/outputs/bundle/release/app-release.aab
  ```

- [ ] **6.5** Distribute
  - **Sideload** (internal team): share `.apk` directly, enable "Install from unknown sources"
  - **Play Store**: upload `.aab` to Google Play Console

- [ ] **6.6** Add to `.gitignore`
  ```gitignore
  # Android build artifacts
  src-tauri/gen/android/app/build/
  *.keystore   # Never commit keystores!
  ```

---

### 🔲 Phase 7 — CI/CD (Optional)

> **Goal**: Automated APK builds on every release tag.

- [ ] **7.1** Create `.github/workflows/tauri-android.yml`
  - Trigger: `git tag v*`
  - Runner: `ubuntu-latest` (Android builds work on Linux)
  - Steps: Install Rust, Android NDK, Bun → build APK → upload to GitHub Releases

- [ ] **7.2** Store keystore secrets in GitHub Actions Secrets
  ```
  KEYSTORE_BASE64     ← base64-encoded keystore file
  KEYSTORE_PASSWORD   ← keystore password
  KEY_ALIAS           ← key alias
  KEY_PASSWORD        ← key password
  ```

---

## Updated Project Structure

```
payload-base-bun/
├── src/                               ← Next.js + Payload (UNCHANGED)
│   └── components/
│       └── offline-banner.tsx         ← NEW: Android offline indicator
├── src-tauri/                         ← Shared Tauri shell
│   ├── tauri.conf.json                ← Base config (shared)
│   ├── tauri.windows.conf.json        ← Windows overrides (local server)
│   ├── tauri.android.conf.json        ← Android overrides (remote wrapper)
│   ├── Cargo.toml                     ← Rust deps (shared)
│   ├── icons/                         ← App icons (shared)
│   ├── gen/
│   │   └── android/                   ← Auto-generated Android project
│   │       └── app/
│   │           ├── build.gradle       ← Android build config
│   │           └── src/main/
│   │               ├── AndroidManifest.xml
│   │               └── res/           ← Android resources
│   └── src/
│       └── main.rs                    ← #[cfg(target_os)] splits per platform
└── docs/design/
    ├── tauri-desktop-exe.md           ← Windows .exe plan
    └── tauri-android-wrapper.md       ← This file
```

---

## Environment Variables for Android Mode

| Variable | Required? | Source | Purpose |
|---|---|---|---|
| `DATABASE_URL` | ✅ Yes | Vercel env | MongoDB connection (remote) |
| `UPLOADTHING_TOKEN` | ✅ Yes | Vercel env | Cloud media storage |
| `PAYLOAD_SECRET` | ✅ Yes | Vercel env | Payload encryption |
| `NEXT_PUBLIC_SERVER_URL` | ✅ Yes | Vercel env | Points to Vercel deployment |

> All env vars live on the **server** (Vercel), not in the APK.
> The APK contains no secrets — it's just a WebView wrapper.

---

## Security Considerations

| Concern | Mitigation |
|---|---|
| No secrets in APK | ✅ All secrets on server (Vercel env vars) |
| HTTPS enforced | ✅ `allowNavigation` only allows `https://` |
| Certificate pinning | Optional: pin Vercel's TLS cert for extra security |
| Keystore backup | ⚠️ Critical — store securely, never in git |
| API authentication | ✅ Payload's existing JWT/cookie auth handles this |

---

## Comparison: Desktop .exe vs Android APK

| Aspect | Windows `.exe` | Android `.apk` |
|---|---|---|
| Backend | Runs locally (`bun run start`) | Remote (Vercel/VPS) |
| Database | SQLite in `AppData\Local\` | MongoDB/PostgreSQL (cloud) |
| Internet required | No (SQLite mode) | **Always** |
| Setup complexity | Medium (Rust + sidecar) | Low (pure wrapper) |
| Node.js on device | Required | **Not required** |
| Data privacy | High (local) | Standard (cloud) |
| Build toolchain | Rust + Windows SDK | Rust + Android NDK |
| Distribution | NSIS installer | APK sideload / Play Store |
| Cost | $0 (local) | Vercel/VPS hosting cost |

---

## Phase Execution Order

```
Phase 0 ✅ → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6
  Done       ~2h        ~2h        ~2h        ~1h        ~1h      ~2h
                                                                  (signing + build)
```

**Total estimated effort: 10-12 hours of focused development**

> **Prerequisite**: The Vercel deployment must be live and accessible before building
> the Android wrapper, since the APK points to that URL.
