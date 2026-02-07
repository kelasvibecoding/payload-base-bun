# Jobs Management

A **Job** is an individual instance of a [Task](./jobs-tasks.md) or [Workflow](./jobs-workflows.md) that has been queued for execution. While Tasks and Workflows define the logic, Jobs are the actual records stored in the `payload-jobs` collection.

## Queuing Jobs

You can queue jobs using `payload.jobs.queue`. The `input` property is strongly typed based on the task or workflow's `inputSchema`.

### Queue a Workflow
```typescript
const job = await payload.jobs.queue({
  workflow: 'myWorkflowSlug',
  input: {
    data: 'example',
  },
})
```

### Queue a Single Task
```typescript
const job = await payload.jobs.queue({
  task: 'myTaskSlug',
  input: {
    message: 'hello',
  },
})
```

## Common Use Cases

### From Collection Hooks
Respond to document changes without blocking the API response.
```typescript
afterChange: [
  async ({ req, doc, operation }) => {
    if (operation === 'create') {
      await req.payload.jobs.queue({
        task: 'sendWelcomeEmail',
        input: { userId: doc.id },
      })
    }
  },
]
```

### From Server Actions (Next.js)
```typescript
'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function processReport(reportId: string) {
  const payload = await getPayload({ config })
  await payload.jobs.queue({
    workflow: 'generateReport',
    input: { reportId },
  })
}
```

## Job Options

| Option | Description |
| :--- | :--- |
| **`waitUntil`** | Schedule a job for the future (e.g., `new Date('2025-01-01')`). |
| **`queue`** | Assign to a specific queue (default is `default`). |
| **`req`** | Pass the request context for access control and hooks. |

## Managing Jobs

### Checking Status
Jobs are stored in the `payload-jobs` collection. You can fetch them like any other document to check their progress.

```typescript
const job = await payload.findByID({
  collection: 'payload-jobs',
  id: 'job-id',
})

logger.info(job.processing) // true if currently running
logger.info(job.completedAt) // timestamp of completion
logger.info(job.hasError) // true if failed
logger.info(job.taskStatus) // Detailed status of all tasks in a workflow
```

### Cancelling Jobs
You can cancel pending or running jobs. For running jobs, the current task will finish, but no subsequent tasks in the workflow will run.

```typescript
// Cancel a single job
await payload.jobs.cancelByID({ id: 'job-id' })

// Cancel multiple jobs via query
await payload.jobs.cancel({
  where: {
    workflowSlug: { equals: 'my-workflow' },
  },
})
```

## Access Control
You can control who can queue, run, or cancel jobs via the `jobs.access` config.

```typescript
export default buildConfig({
  jobs: {
    access: {
      queue: ({ req }) => req.user?.role === 'admin',
      cancel: ({ req }) => req.user?.role === 'admin',
    },
  },
})
```
