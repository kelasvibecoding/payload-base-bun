#!/usr/bin/env node

/**
 * 🚀 Payload Base - Private Setup Script
 * Developed for Kelas Vibe Coding
 *
 * This script handles cloning and initial configuration for private repositories.
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

async function setup() {
  log('\n' + '='.repeat(50))
  info('   🚀 KELAS VIBE CODING - PAYLOAD BASE SETUP')
  log('='.repeat(50) + '\n')

  rl.question('🔑 Enter your Access Key (GitHub Token): ', (token) => {
    if (!token) {
      error('❌ Error: Access Key is required.')
      process.exit(1)
    }

    rl.question('📂 Enter project name (default: my-payload-app): ', (projectName) => {
      const targetDir = projectName.trim() || 'my-payload-app'
      const repoUrl = `https://${token}@github.com/kelasvibecoding/payload-base.git`

      try {
        log(`\n⏳ Cloning repository into ${targetDir}...`)
        execSync(`git clone ${repoUrl} ${targetDir}`, { stdio: 'inherit' })

        const projectPath = path.join(process.cwd(), targetDir)
        process.chdir(projectPath)

        success('\n✅ Clone successful!')

        // 2. Setup .env
        info('⏳ Configuring environment variables...')
        if (fs.existsSync('.env.example')) {
          fs.copyFileSync('.env.example', '.env')
          success('✅ Created .env from .env.example')
        } else {
          log('⚠️  Notice: .env.example not found, skipping env setup.')
        }

        // 3. Final steps
        log('\n' + '-'.repeat(50))
        success('🎉 SETUP COMPLETE!')
        log('-'.repeat(50))
        log('Next steps:')
        info(`   1. cd ${targetDir}`)
        info('   2. pnpm install')
        info('   3. pnpm dev')
        log('-'.repeat(50) + '\n')
      } catch {
        error('\n❌ Failed to clone repository.')
        error('Please verify your Access Key and Ensure Git is installed.')
      } finally {
        rl.close()
      }
    })
  })
}

setup()
