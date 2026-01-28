# Jobs Queues & Execution

Queues manage how your jobs are executed. While Tasks and Workflows define the logic, and Jobs represent the instances, Queues determine the timing, ordering, and resources used to process that work.

## Executing Jobs

Queuing a job does not run it immediately. A "worker" or "runner" must pick up the job. There are four ways to execute jobs in Payload:

### 1. Cron Jobs (`autoRun`)
Used for dedicated servers where your app is always running. Note: Do **not** use `autoRun` on serverless platforms like Vercel.

```typescript
export default buildConfig({
  jobs: {
    autoRun: [
      {
        cron: '*/5 * * * *', // Run every 5 minutes
        limit: 100,          // Max jobs to process per run
        queue: 'default',    // The queue to process
      },
      {
        cron: '0 2 * * *',   // Daily at 2 AM
        queue: 'nightly',
      },
    ],
    // Optional: Only run if this returns true
    shouldAutoRun: async (payload) => process.env.ENABLE_WORKERS === 'true',
  },
})
```

### 2. HTTP Endpoint (Recommended for Vercel)
Payload mounts a `/api/payload-jobs/run` endpoint. This is ideal for serverless platforms where you can use an external cron service (like Vercel Cron) to "ping" the runner.

**Query Parameters:**
- `limit`: Max jobs to run (default: 10).
- `queue`: Specific queue name.
- `allQueues`: Set to `true` to process everything.

#### Securing the Endpoint
Use the `run` access control to ensure only authorized services can trigger your jobs.

```typescript
jobs: {
  access: {
    run: ({ req }) => {
      const authHeader = req.headers.get('authorization')
      return authHeader === `Bearer ${process.env.CRON_SECRET}`
    },
  },
}
```

### 3. Local API
Process jobs programmatically from your server-side code.

```typescript
// Run jobs from the default queue
await payload.jobs.run({ limit: 50 })

// Run a specific job by ID (useful for testing)
await payload.jobs.runByID({ id: 'job-id' })
```

### 4. CLI / Bin Script
Manual execution or custom shelling.

```bash
pnpm payload jobs:run --queue nightly --limit 100
```

---

## Processing Order
By default, jobs are First-In, First-Out (**FIFO**). You can change this to Last-In, First-Out (**LIFO**) using `processingOrder`.

```typescript
jobs: {
  // Global order
  processingOrder: '-createdAt', 
  
  // Or per-queue
  processingOrder: {
    default: 'createdAt',
    queues: {
      nightly: '-createdAt',
    },
  },
}
```

---

## Common Queue Strategies

### Priority-Based
Separate "instant" tasks (like password resets) from "batch" tasks (like analytics).
```typescript
await payload.jobs.queue({ task: 'urgentTask', queue: 'high-priority' })
```

### Feature-Based
Segment by domain to scale workers independently.
```typescript
autoRun: [
  { queue: 'emails', cron: '* * * * *' },
  { queue: 'images', cron: '*/10 * * * *' },
]
```

## Troubleshooting
- **Processing: true but stuck**: A worker may have crashed mid-job. Check your server logs and the `error` field in the database.
- **Jobs not picking up**: Ensure `shouldAutoRun` returns `true` and your cron syntax is valid.
- **Too slow**: Increase the `limit` per run or increase the frequency of your cron schedule.
