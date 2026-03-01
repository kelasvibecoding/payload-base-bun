// I'll use a better way: run a command that triggers payload init
import { execSync } from 'child_process'

console.log('Initializing database...')
try {
  // We can try to run migrate:status or something to force init
  // But Bun/TS might be tricky.
  // Let's just create a simple TS script and run it with tsx
  execSync('npx tsx scripts/init-db-task.ts', { stdio: 'inherit' })
  console.log('✅ Database initialized.')
} catch (e) {
  console.error('❌ Database initialization failed:', e)
  process.exit(1)
}
