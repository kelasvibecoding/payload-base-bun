import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const Welcome: React.FC = async () => {
  const payload = await getPayload({ config })
  const { totalDocs: userCount } = await payload.count({ collection: 'users' })
  const { totalDocs: mediaCount } = await payload.count({ collection: 'media' })

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
    <div className="mb-8">
      <div className="border-border bg-card relative overflow-hidden rounded-xl border p-6 shadow-sm sm:p-8">
        <div className="relative z-10">
          <h2 className="text-primary mb-2 text-3xl font-bold tracking-tight">
            Welcome to Payload
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            You are managing a premium content experience. Here is a quick snapshot of your system
            status.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border-border bg-background/50 hover:bg-accent/10 rounded-lg border p-4 backdrop-blur-sm transition-all">
              <p className="text-muted-foreground text-sm font-medium">Total Users</p>
              <p className="text-foreground text-2xl font-bold">{userCount}</p>
            </div>
            <div className="border-border bg-background/50 hover:bg-accent/10 rounded-lg border p-4 backdrop-blur-sm transition-all">
              <p className="text-muted-foreground text-sm font-medium">Media Assets</p>
              <p className="text-foreground text-2xl font-bold">{mediaCount}</p>
            </div>
            <div className="border-border bg-background/50 hover:bg-accent/10 rounded-lg border p-4 backdrop-blur-sm transition-all">
              <p className="text-muted-foreground text-sm font-medium">Asia/Jakarta Time</p>
              <div className="flex flex-col">
                <p className="text-foreground text-2xl font-bold">{timeString}</p>
                <p className="text-muted-foreground text-xs">{dateString}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient blob */}
        <div className="bg-primary/10 absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl filter" />
      </div>
    </div>
  )
}

export default Welcome
