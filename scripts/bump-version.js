import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tauriConfigPath = path.resolve(__dirname, '../src-tauri/tauri.conf.json')
const indexHtmlPath = path.resolve(__dirname, '../src-tauri/dist/index.html')

function bumpVersion() {
  try {
    // 1. Update tauri.conf.json
    const config = JSON.parse(fs.readFileSync(tauriConfigPath, 'utf-8'))
    const currentVersion = config.version
    
    const parts = currentVersion.split('.').map(Number)
    if (parts.length !== 3) {
      console.error(`Invalid version format: ${currentVersion}`)
      process.exit(1)
    }

    // Increment patch version
    parts[2] += 1
    const newVersion = parts.join('.')
    
    config.version = newVersion
    
    fs.writeFileSync(tauriConfigPath, JSON.stringify(config, null, 2) + '\n')
    console.log(`✅ Bumped tauri.conf.json version from ${currentVersion} to ${newVersion}`)

    // 2. Update src-tauri/dist/index.html
    if (fs.existsSync(indexHtmlPath)) {
      let html = fs.readFileSync(indexHtmlPath, 'utf-8')
      const versionRegex = /Payload Base v\d+\.\d+\.\d+/g
      const newHtml = html.replace(versionRegex, `Payload Base v${newVersion}`)
      
      if (html !== newHtml) {
        fs.writeFileSync(indexHtmlPath, newHtml)
        console.log(`✅ Updated version in src-tauri/dist/index.html to v${newVersion}`)
      } else {
        console.warn('⚠️ Warning: Could not find version string in src-tauri/dist/index.html')
      }
    }
  } catch (error) {
    console.error('❌ Failed to bump version:', error)
    process.exit(1)
  }
}

bumpVersion()
