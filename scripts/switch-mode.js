const fs = require('fs');
const path = require('path');

const mode = process.argv[2]; // 'dev' or 'ship'
const rootDir = path.resolve(__dirname, '..');
const pkgPath = path.join(rootDir, 'package.json');
const templatePath = path.join(rootDir, 'package.template.json');
const installerPath = path.join(rootDir, 'package.installer.json'); // We will save the tiny one here

if (mode === 'dev') {
  if (!fs.existsSync(installerPath) && fs.existsSync(pkgPath)) {
    // Save the current tiny package.json as installer backup if not exists
    console.log('📦 Backing up installer config to package.installer.json');
    fs.copyFileSync(pkgPath, installerPath);
  }
  
  if (fs.existsSync(templatePath)) {
    console.log('🚀 Switching to DEV MODE (Restoring full package.json)...');
    fs.copyFileSync(templatePath, pkgPath);
    console.log('✅ Ready! Run "pnpm install" to get started.');
  } else {
    console.error('❌ Error: package.template.json not found!');
  }

} else if (mode === 'ship') {
  // First, update the template with latest changes from package.json (if any deps changed)
  if (fs.existsSync(pkgPath)) {
    console.log('💾 Syncing current package.json to package.template.json...');
    fs.copyFileSync(pkgPath, templatePath);
  }

  if (fs.existsSync(installerPath)) {
    console.log('🚢 Switching to SHIP MODE (Restoring tiny installer package.json)...');
    fs.copyFileSync(installerPath, pkgPath);
    console.log('✅ Ready to push!');
  } else {
    // Fallback if backup missing - recreate minimal
    console.log('⚠️ Installer backup missing. Creating fresh minimal package.json...');
    const minimal = {
      "name": "@kelasvibecoding/payload-base",
      "version": "1.0.6",
      "description": "Installer for Payload Base Template",
      "license": "MIT",
      "type": "module",
      "bin": {
        "payload-base": "./bin/setup.js"
      },
      "scripts": {
        "dev:mode": "node scripts/switch-mode.js dev",
        "ship:mode": "node scripts/switch-mode.js ship"
      }
    };
    fs.writeFileSync(pkgPath, JSON.stringify(minimal, null, 2));
    console.log('✅ Ready to push! (Generated fresh installer config)');
  }
} else {
  console.log('Usage: node scripts/switch-mode.js [dev|ship]');
}
