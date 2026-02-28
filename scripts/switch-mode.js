import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mode = process.argv[2] // 'dev' or 'ship'
const rootDir = path.resolve(__dirname, '..')
const pkgPath = path.join(rootDir, 'package.json')
const templatePath = path.join(rootDir, 'package.template.json')
const installerPath = path.join(rootDir, 'package.installer.json') // We will save the tiny one here

if (mode === 'dev') {
  if (!fs.existsSync(installerPath) && fs.existsSync(pkgPath)) {
    console.log('📦 Backing up installer config to package.installer.json')
    fs.copyFileSync(pkgPath, installerPath)
  }

  if (fs.existsSync(templatePath)) {
    console.log('🚀 Switching to DEV MODE...')
    // Read the Clean Template
    const template = JSON.parse(fs.readFileSync(templatePath, 'utf-8'))

    // Inject Maintenance Scripts (For YOU only)
    template.scripts = {
      ...template.scripts,
      'dev:mode': 'node scripts/switch-mode.js dev',
      'ship:mode': 'node scripts/switch-mode.js ship',
    }

    // Write to package.json
    fs.writeFileSync(pkgPath, JSON.stringify(template, null, 2) + '\n')
    try {
      execSync('bunx prettier --write package.json', { stdio: 'ignore' })
    } catch {
      console.warn('⚠️ Warning: Prettier failed to format package.json')
    }
    console.log('✅ Ready! Run "bun install" to get started.')
  } else {
    console.error('❌ Error: package.template.json not found!')
  }
} else if (mode === 'ship') {
  if (fs.existsSync(pkgPath)) {
    const currentPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

    // CRITICAL: Only sync to template if this is NOT the tiny installer version
    // The installer version has no dependencies (or very few, but definitely not the full project)
    const isTiny = !currentPkg.dependencies || Object.keys(currentPkg.dependencies).length === 0
    if (!isTiny) {
      console.log('💾 Syncing current package.json to package.installer.json...')

      // Remove Maintenance Scripts before saving to template
      if (currentPkg.scripts) {
        delete currentPkg.scripts['dev:mode']
        delete currentPkg.scripts['ship:mode']
      }

      fs.writeFileSync(templatePath, JSON.stringify(currentPkg, null, 2) + '\n')

      // Now actually switch to ship mode
      if (fs.existsSync(installerPath)) {
        console.log('🚢 Switching to SHIP MODE (Restoring tiny installer package.json)...')
        fs.copyFileSync(installerPath, pkgPath)
        try {
          execSync('bunx prettier --write package.template.json package.json', { stdio: 'ignore' })
        } catch {
          console.warn('⚠️ Warning: Prettier failed to format package files')
        }
        console.log('✅ Ready to push!')
      } else {
        // Fallback if backup missing - recreate minimal
        const minimal = {
          name: '@kelasvibecoding/payload-base-bun',
          version: '1.0.4',
          description: 'Installer for Payload Base Template',
          publishConfig: {
            registry: 'https://npm.pkg.github.com',
          },
          repository: {
            type: 'git',
            url: 'https://github.com/kelasvibecoding/payload-base-bun.git',
          },
          license: 'MIT',
          type: 'module',
          bin: {
            'payload-base-bun': './bin/setup.js',
          },
          scripts: {
            'dev:mode': 'node scripts/switch-mode.js dev',
            'ship:mode': 'node scripts/switch-mode.js ship',
          },
        }
        fs.writeFileSync(pkgPath, JSON.stringify(minimal, null, 2) + '\n')
        try {
          execSync('bunx prettier --write package.json', { stdio: 'ignore' })
        } catch {
          console.warn('⚠️ Warning: Prettier failed to format package.json')
        }
        console.log('✅ Ready to push! (Generated fresh installer config)')
      }
    } else {
      console.log('✅ Already in SHIP MODE. Everything is ready for push.')
    }
  }
} else {
  console.log('Usage: node scripts/switch-mode.js [dev|ship]')
}
