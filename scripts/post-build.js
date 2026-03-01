import fs from 'fs'
import path from 'path'

const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return
  console.log(`  Copying ${src} -> ${dest}`)
  fs.mkdirSync(dest, { recursive: true })
  // Use recursive cp for better handles and symlink resolution if available
  try {
    fs.cpSync(src, dest, { recursive: true, dereference: true })
  } catch (e) {
    // Fallback if cpSync fails
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.join(src, file)
      const destFile = path.join(dest, file)
      if (fs.statSync(srcFile).isDirectory()) {
        copyDir(srcFile, destFile)
      } else {
        fs.copyFileSync(srcFile, destFile)
      }
    }
  }
}

console.log('📦 Syncing static assets to standalone directory...')
copyDir('public', '.next/standalone/public')
copyDir('.next/static', '.next/standalone/.next/static')

console.log('🛡️  Aggressively stabilizing node_modules for Tauri sidecar...')
const srcNodeModules = 'node_modules'
const destNodeModules = '.next/standalone/node_modules'

try {
  console.log(`  Atomic copy: ${srcNodeModules} -> ${destNodeModules}`)
  // Using native cpSync for speed and robust handling
  fs.cpSync(srcNodeModules, destNodeModules, { 
    recursive: true, 
    dereference: true,
    filter: (src) => {
      // Exclude heavy dev-only directories to keep binary size reasonable
      const excludes = [
        '.cache',
        '.bin',
        '@tauri-apps'
      ]
      return !excludes.some(ex => src.includes(path.join(srcNodeModules, ex)))
    }
  })
  console.log('✅ node_modules stabilized!')
} catch (e) {
  console.error('❌ Failed to stabilize node_modules:', e.message)
}

console.log('✅ Build stabilization complete!')
