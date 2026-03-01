import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '@payload-config'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Welcome: React.FC = async () => {
  let userCount = 0
  let mediaCount = 0

  try {
    const payload = await getPayload({ config })
    const { totalDocs: uCount } = await payload.count({ collection: 'users' })
    const { totalDocs: mCount } = await payload.count({ collection: 'media' })
    userCount = uCount
    mediaCount = mCount
  } catch (e) {
    console.warn('Welcome Dashboard: Could not fetch stats (likely build phase)', e)
  }

  // Read version from tauri.conf.json
  let version = '0.0.0'
  try {
    const tauriConfigPath = path.resolve(__dirname, '../../../../src-tauri/tauri.conf.json')
    const tauriConfig = JSON.parse(fs.readFileSync(tauriConfigPath, 'utf8'))
    version = tauriConfig.version
  } catch (e) {
    console.error('Failed to read tauri.conf.json version', e)
  }

  const now = new Date()
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const timeString = timeFormatter.format(now)
  const dateString = dateFormatter.format(now)

  return (
    <div className="mb-10">
      <div className="from-card to-background hover:shadow-primary/10 relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br p-1 shadow-2xl transition-all duration-500">
        <div className="bg-card relative z-10 rounded-[calc(1rem-1px)] p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="from-primary mb-3 bg-gradient-to-r to-purple-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
                Payload Base v{version} — Dashboard
              </h2>
              <p className="text-muted-foreground/80 max-w-2xl text-lg">
                You&apos;re managing a high-performance content ecosystem. Here is your real-time
                system status.
              </p>
            </div>
            <div className="border-border/50 bg-background/50 flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-foreground/70 text-sm font-semibold">System Online</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: 'Total Users', value: userCount, icon: 'Users' },
              { label: 'Media Assets', value: mediaCount, icon: 'Image' },
              { label: 'Active Sessions', value: 'Live', icon: 'Activity' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group border-border/50 bg-background/30 hover:border-primary/50 hover:bg-primary/5 relative overflow-hidden rounded-xl border p-6 transition-all duration-300"
              >
                <p className="text-muted-foreground group-hover:text-primary text-sm font-medium transition-colors">
                  {stat.label}
                </p>
                <p className="text-foreground mt-1 text-3xl font-bold">{stat.value}</p>
                <div className="absolute -right-2 -bottom-2 h-12 w-12 opacity-5 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-10">
                  <div className="bg-primary h-full w-full rounded-full blur-xl" />
                </div>
              </div>
            ))}
          </div>

          <div className="border-border/50 mt-8 flex items-center justify-between border-t pt-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                  Server Time
                </span>
                <span className="text-foreground text-sm font-bold">
                  {timeString} — {dateString}
                </span>
              </div>
            </div>
            <button className="bg-primary/10 text-primary hover:bg-primary rounded-lg px-4 py-2 text-sm font-bold transition-all hover:text-white">
              Quick Action
            </button>
          </div>
        </div>

        {/* Decorative background blobs */}
        <div className="bg-primary/10 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl filter" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl filter" />
      </div>
    </div>
  )
}

