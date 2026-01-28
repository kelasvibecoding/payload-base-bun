# Jobs Queue

Payload's Jobs Queue allows you to offload long-running, computationally expensive, or future-scheduled tasks to separate background processes. This ensures your API remains responsive and resilient.

## Key Concepts

- **Tasks**: Specific functions that perform business logic (e.g., sending an email, generating a PDF).
- **Workflows**: Groupings of tasks that run in order and can be retried from failure points.
- **Jobs**: An instance of a single Task or Workflow being executed.
- **Queues**: A way to segment jobs into groups (e.g., `nightly`, `instant`).

## Quick Start Example: Welcome Email

### 1. Define a Task
Add a task to your root Payload config.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  jobs: {
    tasks: [
      {
        slug: 'sendWelcomeEmail',
        retries: 3,
        inputSchema: [
          { name: 'userEmail', type: 'email', required: true },
          { name: 'userName', type: 'text', required: true },
        ],
        handler: async ({ input, req }) => {
          await req.payload.sendEmail({
            to: input.userEmail,
            subject: 'Welcome!',
            text: `Hi ${input.userName}, welcome to our platform!`,
          })
          return { output: { emailSent: true } }
        },
      },
    ],
  },
})
```

### 2. Queue the Job
Trigger the job from a collection hook (e.g., `afterChange`).

```typescript
hooks: {
  afterChange: [
    async ({ req, doc, operation }) => {
      if (operation === 'create') {
        await req.payload.jobs.queue({
          task: 'sendWelcomeEmail',
          input: {
            userEmail: doc.email,
            userName: doc.name,
          },
        })
      }
    },
  ],
}
```

### 3. Process the Jobs
Configure `autoRun` to process pending jobs on a schedule.

```typescript
jobs: {
  autoRun: [
    {
      cron: '*/5 * * * *', // Check for and run jobs every 5 minutes
    },
  ],
}
```

## Use Cases

### Non-blocking Workloads
Perform slow operations (like creating vector embeddings or syncing with 3rd party APIs) without holding up the API response.

### Scheduled Actions
Set the `waitUntil` property to run a job at a specific date in the future (e.g., daily newsletters, scheduled unpublishing).

### Periodic Sync
Use cron syntax to regularly wake up and perform maintenance or syncing tasks.

## Admin UI
By default, the `payload-jobs` collection is hidden. To inspect jobs in the Admin Panel, use `jobsCollectionOverrides`:

```typescript
jobs: {
  jobsCollectionOverrides: ({ defaultJobsCollection }) => {
    defaultJobsCollection.admin.hidden = false
    return defaultJobsCollection
  },
}
```
