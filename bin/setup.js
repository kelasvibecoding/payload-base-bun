#!/usr/bin/env node

/**
 * Antigravity x PayloadCMS Boilerplate - Setup Script
 * Developed with ❤️ by Kelas Vibe Coding
 */

import { execSync } from 'child_process'
import readline from 'readline'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const log = (msg) => console.log(msg)
const error = (msg) => console.error(`\x1b[31m${msg}\x1b[0m`)
const success = (msg) => console.log(`\x1b[32m${msg}\x1b[0m`)
const info = (msg) => console.log(`\x1b[34m${msg}\x1b[0m`)

// --- Help Flag ---
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  log(`
\x1b[31m  Antigravity × PayloadCMS Boilerplate\x1b[0m
${'━'.repeat(50)}

Usage:
  npx @kelasvibecoding/payload-base-bun <project-name> [options]
  npx @kelasvibecoding/payload-base-bun --abilityonly

Commands:
  <project-name>     Create a new Payload CMS + Next.js project
  --abilityonly      Inject Antigravity agent configs into existing project

Options:
  --ability          Include Antigravity agent ability (requires Access Key)
  --mobile           Apply mobile-first layout (max-width: 480px)
  --db=<adapter>     Pre-select DB adapter:
                       sqlite    (default — local file, no setup needed)
                       mongodb   (requires MongoDB URI)
                       postgres  (requires PostgreSQL connection string)
  --help, -h         Show this help message

Examples:
  npx @kelasvibecoding/payload-base-bun my-app
  npx @kelasvibecoding/payload-base-bun my-app --ability
  npx @kelasvibecoding/payload-base-bun my-app --mobile --db=postgres
  npx @kelasvibecoding/payload-base-bun --abilityonly
${'━'.repeat(50)}
`)
  process.exit(0)
}

/**
 * Validate project name — lowercase, numbers, hyphens, dots, underscores only.
 * @param {string} name
 * @returns {string|null} error message or null if valid
 */
function validateProjectName(name) {
  if (!name || name.trim().length === 0) return 'Project name cannot be empty.'
  if (name.length > 50) return 'Project name must be 50 characters or fewer.'
  if (/^[.-]/.test(name)) return 'Project name cannot start with a dot or hyphen.'
  if (!/^[a-z0-9._-]+$/.test(name))
    return 'Project name must contain only lowercase letters, numbers, hyphens, dots, or underscores.'
  return null
}

// Parse --db flag
const dbArg = process.argv.find((a) => a.startsWith('--db='))
const dbAdapter = dbArg ? dbArg.split('=')[1] : 'sqlite'
const validAdapters = ['sqlite', 'mongodb', 'postgres']
if (dbArg && !validAdapters.includes(dbAdapter)) {
  error(`\u274c Invalid --db value: "${dbAdapter}". Valid options: ${validAdapters.join(', ')}`)
  process.exit(1)
}

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
  log('\x1b[31m   ANTIGRAVITY × PAYLOADCMS BOILERPLATE SETUP\x1b[0m')
  log('━'.repeat(50) + '\n')

  const keepAbilities = process.argv.includes('--ability')
  const abilityOnly = process.argv.includes('--abilityonly')
  const isMobile = process.argv.includes('--mobile')

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

  const updateAgentContext = (projectPath, appType, projectName = 'Payload-Base-Bun') => {
    const contextPath = path.join(projectPath, 'CONTEXT.md')
    if (fs.existsSync(contextPath)) {
      let content = fs.readFileSync(contextPath, 'utf8')
      if (appType && appType.trim()) {
        content = content.replace(
          /To provide a production-grade, highly-scalable headless CMS boilerplate.*/,
          `To build a production-grade, highly-scalable **${appType.trim()}** application using a Feature-Based Architecture (FBA), SOLID principles, and Single Source of Truth (SSOT).`,
        )
      }
      content = content.replace(
        /\*\*Project Name:\*\* Payload-Base-Bun/,
        `**Project Name:** ${projectName}`,
      )
      fs.writeFileSync(contextPath, content)
    }

    const missionPath = path.join(projectPath, 'mission.md')
    if (fs.existsSync(missionPath)) {
      let content = fs.readFileSync(missionPath, 'utf8')
      if (appType && appType.trim()) {
        content = content.replace(
          /Understand and adapt the Antigravity Workspace Implementation.*/,
          `Build a high-quality ${appType.trim()} platform using Payload CMS and Next.js.`,
        )
      }
      fs.writeFileSync(missionPath, content)
    }

    if (appType && appType.trim()) {
      info(`\n  ℹ️  Agent Context tuned for: ${appType.trim()}`)
    }
  }

  const updateGitignore = (projectPath) => {
    const gitignorePath = path.join(projectPath, '.gitignore')
    if (fs.existsSync(gitignorePath)) {
      let content = fs.readFileSync(gitignorePath, 'utf8')
      if (!content.includes('.agent')) {
        content += '\n# Antigravity AI\n.agent\n.antigravity\n'
        fs.writeFileSync(gitignorePath, content)
      }
    }
  }

  const injectAbilities = async (token, appType, projectName) => {
    const tempDir = `.temp-payload-base-${Date.now()}`
    const repoUrl = `https://${token}@github.com/kelasvibecoding/payload-base-ability.git`

    info('\n🚀 Fetching Agent Ability configurations...')
    process.stdout.write(`\rCloning source...`)
    execSync(`git clone --quiet --depth=1 ${repoUrl} ${tempDir}`, { stdio: 'inherit' })

    await showProgress('Merging Agent configurations', 1500)

    const agentSrc = path.join(tempDir, '.agent')
    const antigravitySrc = path.join(tempDir, '.antigravity')
    const contextSrc = path.join(tempDir, 'CONTEXT.md')
    const agentsSrc = path.join(tempDir, 'AGENTS.md')
    const missionSrc = path.join(tempDir, 'mission.md')

    if (fs.existsSync(agentSrc)) copyDir(agentSrc, path.join(process.cwd(), '.agent'))
    if (fs.existsSync(antigravitySrc))
      copyDir(antigravitySrc, path.join(process.cwd(), '.antigravity'))
    if (fs.existsSync(contextSrc))
      fs.copyFileSync(contextSrc, path.join(process.cwd(), 'CONTEXT.md'))
    if (fs.existsSync(agentsSrc))
      fs.copyFileSync(agentsSrc, path.join(process.cwd(), 'AGENTS.md'))
    if (fs.existsSync(missionSrc))
      fs.copyFileSync(missionSrc, path.join(process.cwd(), 'mission.md'))

    updateAgentContext(process.cwd(), appType, projectName)
    updateGitignore(process.cwd())

    fs.rmSync(tempDir, { recursive: true, force: true })
  }

  // --- MODE: Ability Only (Injection) ---
  if (abilityOnly) {
    rl.question(
      'Enter your Access Key (Provided in the Kelas Vibe Coding Ebook/Class 💎): ',
      async (token) => {
        if (!token) {
          error('❌ Error: Access Key is required for --abilityonly.')
          process.exit(1)
        }

        rl.question(
          '\nWhat type of application are you building? (e.g. e-commerce, portfolio) (Leave blank for generic): ',
          async (appType) => {
            try {
              await injectAbilities(token, appType, path.basename(process.cwd()))

              log('\n' + '━'.repeat(50))
              success('✨ AGENT ABILITY INJECTED SUCCESSFULLY!')
              log('━'.repeat(50))
              info('Your current codebase is now optimized for Antigravity AI.')
              log('\n')
            } catch {
              error('\n\n❌ Injection Failed.')
              error('Check your Access Key and Internet connection.')
            } finally {
              rl.close()
            }
          },
        )
      },
    )
    return
  }

  // --- MODE: Standard Setup ---
  const args = process.argv.slice(2)
  const projectNameArg = args.find((a) => !a.startsWith('-'))

  const handleProjectSetup = async (projectName) => {
    const trimmed = projectName.trim() || 'payload-base-app'

    // Validate project name
    const nameError = validateProjectName(trimmed)
    if (nameError) {
      error(`❌ Invalid project name: ${nameError}`)
      rl.close()
      process.exit(1)
    }

    const targetDir = trimmed
    if (fs.existsSync(targetDir)) {
      error(`❌ Error: Directory "${targetDir}" already exists.`)
      process.exit(1)
    }

    const startSetup = async (token = null, appType = '') => {
      // The base boilerplate is always public
      const repoUrl = `https://github.com/kelasvibecoding/payload-base-bun.git`

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
        } catch {
          // Git operations may fail if git is not properly configured - this is non-critical
        }

        if (fs.existsSync('package.template.json')) {
          fs.unlinkSync('package.json')
          fs.renameSync('package.template.json', 'package.json')
          await showProgress('Resolving project configurations', 1000)
        }

        if (fs.existsSync('.env.example')) {
          const secret = crypto.randomBytes(32).toString('hex')
          let envContent = fs.readFileSync('.env.example', 'utf8')
          envContent = envContent.replace(
            'PAYLOAD_SECRET=YOUR_SECRET_HERE',
            `PAYLOAD_SECRET=${secret}`,
          )

          // Inject DATABASE_URL based on --db flag
          if (dbAdapter === 'mongodb') {
            envContent = envContent.replace(
              /DATABASE_URL=.*/,
              'DATABASE_URL=mongodb://localhost:27017/my-payload-app',
            )
            info('  ℹ️  DATABASE_URL set for MongoDB. Update with your connection string.')
          } else if (dbAdapter === 'postgres') {
            envContent = envContent.replace(
              /DATABASE_URL=.*/,
              'DATABASE_URL=postgresql://user:password@localhost:5432/my-payload-app',
            )
            info('  ℹ️  DATABASE_URL set for Postgres. Update with your connection string.')
          } else {
            info('  ℹ️  Using SQLite (default). DB file: ./local.db')
          }

          fs.writeFileSync('.env', envContent)
          await showProgress('Configuring environment variables & Generating Secret', 1000)
        }

        if (isMobile) {
          await showProgress('Applying mobile layout optimizations', 1000)

          const layoutPath = path.join('src', 'app', '(frontend)', 'layout.tsx')
          if (fs.existsSync(layoutPath)) {
            let layoutContent = fs.readFileSync(layoutPath, 'utf8')
            const oldBody = /<body className="font-sans antialiased">([\s\S]*?)<\/body>/
            const newBody = `<body className="flex min-h-screen justify-center bg-zinc-100 font-sans antialiased dark:bg-zinc-950">
        <NextTopLoader
          color="#0066FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #0066FF,0 0 5px #0066FF"
        />
        <Toaster position="top-center" richColors />
        <SWRProvider>
          <div className="relative flex min-h-screen w-full max-w-[480px] flex-col overflow-hidden bg-background shadow-[0_0_50px_rgba(0,0,0,0.1)]">
            <MotionConfig>
              <Navbar />
              <main className="flex-1 shrink-0">{children}</main>
            </MotionConfig>
          </div>
        </SWRProvider>
      </body>`
            layoutContent = layoutContent.replace(oldBody, newBody)
            fs.writeFileSync(layoutPath, layoutContent)
          }

          const globalsPath = path.join('src', 'app', '(frontend)', 'globals.css')
          if (fs.existsSync(globalsPath)) {
            let globalsContent = fs.readFileSync(globalsPath, 'utf8')
            const breakpointOverrides = `
  /* Force Mobile View: Disable standard breakpoints */
  --breakpoint-sm: 9999px;
  --breakpoint-md: 9999px;
  --breakpoint-lg: 9999px;
  --breakpoint-xl: 9999px;
  --breakpoint-2xl: 9999px;
`
            if (globalsContent.includes('@theme inline {')) {
              globalsContent = globalsContent.replace(
                '@theme inline {',
                `@theme inline {${breakpointOverrides}`,
              )
            } else {
              globalsContent += `\n@theme {\n${breakpointOverrides}\n}`
            }
            fs.writeFileSync(globalsPath, globalsContent)
          }
        }

        try {
          fs.rmSync('bin', { recursive: true, force: true })
          if (fs.existsSync('scripts')) {
            const files = fs.readdirSync('scripts')
            for (const file of files) {
              if (file !== 'post-build.js') {
                fs.rmSync(path.join('scripts', file), { recursive: true, force: true })
              }
            }
          }
          fs.rmSync('package.installer.json', { force: true })
          fs.rmSync('CONTRIBUTING.md', { force: true })

          fs.rmSync('.github', { recursive: true, force: true })

          // Strip any legacy agent artifacts first to be safe
          fs.rmSync('.agent', { recursive: true, force: true })
          fs.rmSync('.antigravity', { recursive: true, force: true })
          fs.rmSync('CONTEXT.md', { force: true })
          fs.rmSync('AGENTS.md', { force: true })
          fs.rmSync('mission.md', { force: true })

          if (keepAbilities && token) {
            await injectAbilities(token, appType, projectName)
          }
        } catch {
          // Cleanup errors are non-critical - files may not exist
        }

        log('\n' + '━'.repeat(50))
        success('ALL DONE! PROJECT READY')
        log('━'.repeat(50))
        log(`Location: ${projectPath}`)
        if (keepAbilities) {
          info('✨ Agent Ability enabled! Your project is optimized for Antigravity AI.')
        }
        log('\nNext suggested commands:')
        log(`\x1b[31m  1. cd ${targetDir}\x1b[0m`)
        log('\x1b[31m  2. bun install\x1b[0m')
        log('\x1b[31m  3. bun dev\x1b[0m')
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
        'Enter your Access Key (Provided in the Kelas Vibe Coding Ebook/Class 💎): ',
        async (token) => {
          if (!token) {
            error('❌ Error: Access Key is required for --ability.')
            process.exit(1)
          }
          rl.question(
            '\nWhat type of application are you building? (e.g. e-commerce, portfolio) (Leave blank for generic): ',
            async (appType) => {
              await startSetup(token, appType)
            },
          )
        },
      )
    } else {
      await startSetup()
    }
  }

  if (projectNameArg) {
    await handleProjectSetup(projectNameArg)
  } else {
    rl.question('Enter your Project Name: ', handleProjectSetup)
  }
}

setup()
