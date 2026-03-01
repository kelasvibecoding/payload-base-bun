# ============================================================
# download-runtimes.ps1
# Downloads and places Node.js and Bun as Tauri sidecar binaries.
# Run with: powershell -ExecutionPolicy Bypass -File scripts/download-runtimes.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$binDir = Join-Path $PSScriptRoot "..\src-tauri\bin"
New-Item -ItemType Directory -Force -Path $binDir | Out-Null

Write-Host ""
Write-Host "========================================"
Write-Host " Tauri Runtime Sidecar Downloader"
Write-Host "========================================"
Write-Host ""

# --- Node.js ---
$nodeDest = Join-Path $binDir "node-x86_64-pc-windows-msvc.exe"

if (Test-Path $nodeDest) {
    Write-Host "[SKIP] Node.js already exists at: $nodeDest"
} else {
    $nodeVersion = "v20.11.1"
    $nodeUrl     = "https://nodejs.org/dist/$nodeVersion/win-x64/node.exe"

    Write-Host "[...] Downloading Node.js $nodeVersion..."
    Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeDest -UseBasicParsing
    Write-Host "[OK]  Node.js saved to: $nodeDest"
}

# --- Bun ---
$bunDest = Join-Path $binDir "bun-x86_64-pc-windows-msvc.exe"

if (Test-Path $bunDest) {
    Write-Host "[SKIP] Bun already exists at: $bunDest"
} else {
    $bunVersion = "1.2.0"
    $bunZipUrl  = "https://github.com/oven-sh/bun/releases/download/bun-v$bunVersion/bun-windows-x64.zip"
    $bunZipPath = Join-Path $binDir "bun.zip"
    $bunExtract = Join-Path $binDir "bun-extracted"

    Write-Host "[...] Downloading Bun v$bunVersion..."
    Invoke-WebRequest -Uri $bunZipUrl -OutFile $bunZipPath -UseBasicParsing

    Write-Host "[...] Extracting Bun..."
    Expand-Archive -Path $bunZipPath -DestinationPath $bunExtract -Force

    # Find bun.exe inside the extracted folder (may be nested in a subfolder)
    $bunExe = Get-ChildItem -Path $bunExtract -Filter "bun.exe" -Recurse | Select-Object -First 1
    if (-not $bunExe) {
        throw "bun.exe not found in extracted zip. Check the download URL."
    }

    Copy-Item -Path $bunExe.FullName -Destination $bunDest -Force

    # Cleanup
    Remove-Item -Path $bunExtract -Recurse -Force
    Remove-Item -Path $bunZipPath -Force

    Write-Host "[OK]  Bun saved to: $bunDest"
}

# --- Verification ---
Write-Host ""
Write-Host "========================================"
Write-Host " Verification"
Write-Host "========================================"

$nodeOk = Test-Path $nodeDest
$bunOk  = Test-Path $bunDest

$nodeStatus = if ($nodeOk) { "OK" } else { "MISSING" }
$bunStatus  = if ($bunOk)  { "OK" } else { "MISSING" }

Write-Host "  node-x86_64-pc-windows-msvc.exe : [$nodeStatus]"
Write-Host "  bun-x86_64-pc-windows-msvc.exe  : [$bunStatus]"

if ($nodeOk -and $bunOk) {
    Write-Host ""
    Write-Host "[DONE] All runtimes ready! You can now run: bun run tauri:build:exe"
} else {
    Write-Host ""
    Write-Host "[FAIL] One or more runtimes are missing. Check the errors above."
    exit 1
}
