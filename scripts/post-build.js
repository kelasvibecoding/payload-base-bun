import fs from 'fs'
import path from 'path'

const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
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

console.log('📦 Syncing static assets to standalone directory...')
copyDir('public', '.next/standalone/public')
copyDir('.next/static', '.next/standalone/.next/static')
console.log('✅ Static assets synced!')
