#!/usr/bin/env node

/**
 * 🚀 Payload Base - Private Setup Script
 * Developed for Kelas Vibe Coding
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
 * Visual Progress Spinner
 */
function showProgress(message, duration = 2000) {
  return new Promise((resolve) => {
    const symbols = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    let i = 0
    const interval = setInterval(() => {
      process.stdout.write(`\r\x1b[36m${symbols[i++ % symbols.length]}\x1b[0m ${message}...`)
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      process.stdout.write(`\r\x1b[32m✔\x1b[0m ${message} Complete!\n`)
      resolve()
    }, duration)
  })
}

async function setup() {
  log('\n' + '━'.repeat(50))
  info('   🚀 KELAS VIBE CODING - PAYLOAD BASE SETUP')
  log('━'.repeat(50) + '\n')

  rl.question('� Enter your Project Name: ', (projectName) => {
    const targetDir = projectName.trim() || 'my-payload-app'

    if (fs.existsSync(targetDir)) {
      error(`❌ Error: Directory "${targetDir}" already exists.`)
      process.exit(1)
    }

    rl.question('� Enter your Access Key (GitHub Token): ', async (token) => {
      if (!token) {
        error('❌ Error: Access Key is required.')
        process.exit(1)
      }

      const repoUrl = `https://${token}@github.com/kelasvibecoding/payload-base.git`

      try {
        log(`\n📦 Initializing project: \x1b[33m${targetDir}\x1b[0m`)

        // 1. Cloning
        process.stdout.write(`\r\x1b[36m⠋\x1b[0m Cloning private repository...`)
        execSync(`git clone --quiet ${repoUrl} ${targetDir}`, { stdio: 'pipe' })
        process.stdout.write(`\r\x1b[32m✔\x1b[0m Cloning Repository Complete!\n`)

        const projectPath = path.join(process.cwd(), targetDir)
        process.chdir(projectPath)

        // 2. Setup .env
        if (fs.existsSync('.env.example')) {
          fs.copyFileSync('.env.example', '.env')
          await showProgress('Configuring environment variables', 1500)
        }

        // 3. Final Success UI
        log('\n' + '━'.repeat(50))
        success('✨ ALL DONE! PROJECT READY ✨')
        log('━'.repeat(50))
        log(`Location: ${projectPath}`)
        log('\nNext suggested commands:')
        info(`  1. cd ${targetDir}`)
        info('  2. pnpm install')
        info('  3. pnpm dev')
        log('━'.repeat(50) + '\n')
      } catch {
        error('\n\n❌ Setup Failed.')
        error('Possible reasons:')
        log('  - Invalid Access Key (check your GitHub Token)')
        log('  - Repository URL is incorrect or private access is not granted')
        log('  - Git is not installed on your system')
      } finally {
        rl.close()
      }
    })
  })
}

setup()
