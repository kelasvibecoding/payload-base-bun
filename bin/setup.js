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
    const width = 30;
    let percent = 0;
    
    // Initial render
    process.stdout.write(`${message}...\n`);
    
    const interval = setInterval(() => {
      percent += 5;
      const completed = Math.floor(width * (percent / 100));
      const remaining = width - completed;
      const bar = '█'.repeat(completed) + '░'.repeat(remaining);
      
      process.stdout.write(`\r\x1b[36m${bar}\x1b[0m ${percent}%`);
      
      if (percent >= 100) {
        clearInterval(interval);
        process.stdout.write('\n'); // New line after completion
        resolve();
      }
    }, duration / 20);
  });
}

async function setup() {
  log('\n' + '━'.repeat(50))
  // Red color for the title
  log('\x1b[31m   KELAS VIBE CODING - PAYLOAD BASE SETUP\x1b[0m')
  log('━'.repeat(50) + '\n')

  rl.question('Enter your Project Name: ', (projectName) => {
    const targetDir = projectName.trim() || 'my-payload-app'

    if (fs.existsSync(targetDir)) {
      error(`❌ Error: Directory "${targetDir}" already exists.`)
      process.exit(1)
    }

    rl.question('Enter your Access Key (Available only with the Ebook/ Class purchase 💎): ', async (token) => {
      if (!token) {
        error('❌ Error: Access Key is required.')
        process.exit(1)
      }

      const repoUrl = `https://${token}@github.com/kelasvibecoding/payload-base.git`

      try {
        log(`\nInitializing project: \x1b[33m${targetDir}\x1b[0m`)

        // 1. Cloning
        process.stdout.write(`\rCloning private repository...\n`)
        execSync(`git clone --quiet ${repoUrl} ${targetDir}`, { stdio: 'inherit' }) // inherit allows git to show its own progress if needed, or we can silence it.
        // Since we want a custom bar, we can fake it or just let git do its thing.
        // Let's stick to the requested bar style for consistency for the POST-clone steps.
        
        // Simulating clone progress for consistent UI feel if cloning is fast
        const width = 30;
        process.stdout.write(`\r\x1b[36m${'█'.repeat(30)}\x1b[0m 100%\n`);
        
        const projectPath = path.join(process.cwd(), targetDir)
        process.chdir(projectPath)

        // 2. Resolve Package Configuration (The Swap)
        if (fs.existsSync('package.template.json')) {
          fs.unlinkSync('package.json') // Remove tiny npx-only file
          fs.renameSync('package.template.json', 'package.json') // Switch to real file
          await showProgress('Resolving project configurations', 1000)
        }

        // 3. Setup .env
        if (fs.existsSync('.env.example')) {
          fs.copyFileSync('.env.example', '.env')
          await showProgress('Configuring environment variables', 1500)
        }

        // 4. Cleanup (Remove internal setup files from the cloned project)
        try {
          // This keeps the project clean for the user
          fs.rmSync('bin', { recursive: true, force: true })
          fs.rmSync('scripts', { recursive: true, force: true }) // Remove dev scripts
          fs.rmSync('package.installer.json', { force: true })   // Remove potential backups
        } catch {
          // Ignore cleanup errors
        }

        // 5. Final Success UI
        log('\n' + '━'.repeat(50))
        success('ALL DONE! PROJECT READY')
        log('━'.repeat(50))
        log(`Location: ${projectPath}`)
        log('\nNext suggested commands:')
        log(`\x1b[31m  1. cd ${targetDir}\x1b[0m`)
        log('\x1b[31m  2. pnpm install\x1b[0m')
        log('\x1b[31m  3. pnpm dev\x1b[0m')
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
