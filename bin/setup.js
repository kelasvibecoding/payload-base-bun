#!/usr/bin/env node

/**
 * Payload Base - Private Setup Script
 * Developed with ❤️ by Kelas Vibe Coding
 */

import { execSync } from 'child_process'
import readline from 'readline'
import fs from 'fs'
import path from 'path'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const log = (msg) => console.log(msg)
const error = (msg) => console.error(`\x1b[31m${msg}\x1b[0m`)
const success = (msg) => console.log(`\x1b[32m${msg}\x1b[0m`)
const info = (msg) => console.log(`\x1b[34m${msg}\x1b[0m`)

/**
 * Visual Progress Bar
 */
function showProgress(message, duration = 2000) {
  return new Promise((resolve) => {
    const width = 30
    let percent = 0

    // Initial render
    process.stdout.write(`${message}...\n`)

    const interval = setInterval(() => {
      percent += 5
      const completed = Math.floor(width * (percent / 100))
      const remaining = width - completed
      const bar = '█'.repeat(completed) + '░'.repeat(remaining)

      process.stdout.write(`\r\x1b[36m${bar}\x1b[0m ${percent}%`)

      if (percent >= 100) {
        clearInterval(interval)
        process.stdout.write('\n') // New line after completion
        resolve()
      }
    }, duration / 20)
  })
}

async function setup() {
  log('\n' + '━'.repeat(50))
  // Red color for the title
  log('\x1b[31m   KELAS VIBE CODING - PAYLOAD BASE SETUP\x1b[0m')
  log('━'.repeat(50) + '\n')

  const keepAbilities = process.argv.includes('--ability')
  const abilityOnly = process.argv.includes('--abilityonly')

  /**
   * Helper: Copy Directory Recursively (Basic Node.js 16+ compatible)
   */
  const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
    const entries = fs.readdirSync(src, { withFileTypes: true })

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath)
      } else {
        fs.copyFileSync(srcPath, destPath)
      }
    }
  }

  // --- MODE: Ability Only (Injection) ---
  if (abilityOnly) {
    rl.question(
      'Enter your Access Key (Provider for --abilityonly purchase 💎): ',
      async (token) => {
        if (!token) {
          error('❌ Error: Access Key is required for --abilityonly.')
          process.exit(1)
        }

        const tempDir = `.temp-payload-base-${Date.now()}`
        const repoUrl = `https://${token}@github.com/kelasvibecoding/payload-base.git`

        try {
          info('\n🚀 Injecting Agent Ability into current codebase...')
          process.stdout.write(`\rCloning source...`)
          execSync(`git clone --quiet --depth=1 ${repoUrl} ${tempDir}`, { stdio: 'inherit' })
          
          await showProgress('Merging Agent configurations', 1500)

          const agentSrc = path.join(tempDir, '.agent')
          const cursorSrc = path.join(tempDir, '.cursor')

          if (fs.existsSync(agentSrc)) copyDir(agentSrc, path.join(process.cwd(), '.agent'))
          if (fs.existsSync(cursorSrc)) copyDir(cursorSrc, path.join(process.cwd(), '.cursor'))

          // Cleanup temp
          fs.rmSync(tempDir, { recursive: true, force: true })

          log('\n' + '━'.repeat(50))
          success('✨ AGENT ABILITY INJECTED SUCCESSFULLY!')
          log('━'.repeat(50))
          info('Your current codebase is now optimized for AI tools (Cursor/Antigravity).')
          log('\n')
        } catch {
          error('\n\n❌ Injection Failed.')
          error('Check your Access Key and Internet connection.')
        } finally {
          rl.close()
        }
      }
    )
    return
  }

  // --- MODE: Standard Setup ---
  rl.question('Enter your Project Name: ', async (projectName) => {
    const targetDir = projectName.trim() || 'my-payload-app'

    if (fs.existsSync(targetDir)) {
      error(`❌ Error: Directory "${targetDir}" already exists.`)
      process.exit(1)
    }

    const startSetup = async (token = null) => {
      const repoUrl = token 
        ? `https://${token}@github.com/kelasvibecoding/payload-base.git`
        : `https://github.com/kelasvibecoding/payload-base.git`

      try {
        log(`\nInitializing project: \x1b[33m${targetDir}\x1b[0m`)

        process.stdout.write(`\rCloning repository...\n`)
        execSync(`git clone --quiet --depth=1 ${repoUrl} ${targetDir}`, { stdio: 'inherit' })

        const projectPath = path.join(process.cwd(), targetDir)
        process.chdir(projectPath)

        fs.rmSync(path.join(projectPath, '.git'), { recursive: true, force: true })

        try {
          execSync('git init', { stdio: 'ignore' })
          execSync('git add .', { stdio: 'ignore' })
          execSync('git commit -m "feat: initial project setup"', { stdio: 'ignore' })
        } catch (e) {}

        if (fs.existsSync('package.template.json')) {
          fs.unlinkSync('package.json')
          fs.renameSync('package.template.json', 'package.json')
          await showProgress('Resolving project configurations', 1000)
        }

        if (fs.existsSync('.env.example')) {
          fs.copyFileSync('.env.example', '.env')
          await showProgress('Configuring environment variables', 1000)
        }

        try {
          fs.rmSync('bin', { recursive: true, force: true })
          fs.rmSync('scripts', { recursive: true, force: true })
          fs.rmSync('package.installer.json', { force: true })

          if (!keepAbilities) {
            await showProgress('Removing Agent-specific configurations', 1000)
            fs.rmSync('.agent', { recursive: true, force: true })
            fs.rmSync('.cursor', { recursive: true, force: true })
          }
        } catch {}

        log('\n' + '━'.repeat(50))
        success('ALL DONE! PROJECT READY')
        log('━'.repeat(50))
        log(`Location: ${projectPath}`)
        if (keepAbilities) {
          info('✨ Agent Ability enabled! Your project is optimized for AI tools.')
        }
        log('\nNext suggested commands:')
        log(`\x1b[31m  1. cd ${targetDir}\x1b[0m`)
        log('\x1b[31m  2. pnpm install\x1b[0m')
        log('\x1b[31m  3. pnpm dev\x1b[0m')
        log('━'.repeat(50) + '\n')
      } catch {
        error('\n\n❌ Setup Failed.')
        error('Possible reasons:')
        log(token ? '  - Invalid Access Key' : '  - Repository is private or URL is incorrect')
        log('  - Git not installed')
      } finally {
        rl.close()
      }
    }

    if (keepAbilities) {
      rl.question(
        'Enter your Access Key (Available only with the Ebook/ Class purchase 💎): ',
        async (token) => {
          if (!token) {
            error('❌ Error: Access Key is required for --ability.')
            process.exit(1)
          }
          await startSetup(token)
        }
      )
    } else {
      await startSetup()
    }
  })
}

setup()
