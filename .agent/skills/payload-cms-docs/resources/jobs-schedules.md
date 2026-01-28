# Job Schedules

Payload's **Schedules** allow you to automatically enqueue Jobs regularly based on a cron expression (e.g., daily, weekly, or every 5 minutes).

## Scheduling vs. Running
It is important to understand the difference:
- **Scheduling**: The process of *adding* a job to the database queue when its cron time arrives.
- **Running**: The process of a *worker* picking up and executing that queued job.

For one-time future jobs, use the `waitUntil` property when queuing. For recurring tasks, use `schedule`.

## Configuration

Schedules are defined directly on [Tasks](./jobs-tasks.md) or [Workflows](./jobs-workflows.md).

```typescript
import { TaskConfig } from 'payload'

export const DailyMaintenance: TaskConfig<'DailyMaintenance'> = {
  slug: 'DailyMaintenance',
  schedule: [
    {
      cron: '0 0 * * *', // Every day at midnight
      queue: 'maintenance',
    },
  ],
  handler: async ({ req }) => {
    // Maintenance logic here
  },
}
```

## Scheduling Lifecycle & Hooks

Payload uses internal stats (stored in the `payload-jobs-stats` global) to track when items were last scheduled.

### `beforeSchedule`
By default, Payload checks if there is already a "runnable" or "active" instances of the same scheduled job. Falling through to the default behavior prevents duplicate overlapping jobs.

You can customize this:
```typescript
schedule: [{
  cron: '* * * * *',
  queue: 'reports',
  hooks: {
    beforeSchedule: async ({ queueable, req }) => {
      // Allow up to 3 overlapping jobs
      const count = await countRunnableOrActiveJobsForQueue({ ... })
      return {
        shouldSchedule: count < 3,
        input: { dynamicData: 'some-value' } // Set dynamic input at schedule time
      }
    }
  }
}]
```

## Common Cron Patterns

| Interval | Cron Expression |
| :--- | :--- |
| **Every Minute** | `* * * * *` |
| **Every 5 Minutes** | `*/5 * * * *` |
| **Every Hour (at :00)**| `0 * * * *` |
| **Daily (at Midnight)**| `0 0 * * *` |
| **Weekly (Mon at 9AM)**| `0 9 * * 1` |
| **Monthly (1st at 00:00)**| `0 0 1 * *` |

*Note: Payload also supports seconds precision by adding a 6th field at the beginning: `*/30 * * * * *` (every 30 seconds).*

## Serverless Environments
In serverless environments (like Vercel), internal cron timers do not run. You must trigger the scheduling lifecycle externally:
1. **`GET /api/payload-jobs/run`**: Handles both scheduling and running by default.
2. **`GET /api/payload-jobs/handle-schedules`**: Only triggers the scheduling logic.

## Best Practices
1. **Stable Servers**: In multi-server environments, only enable scheduling on **one** server to avoid duplicate job enqueuing.
2. **Manual Handling**: If using the `run` endpoint on Vercel, use a secret token (`CRON_SECRET`) to secure the access control.
3. **Queue Segmentation**: Put scheduled jobs in specific queues (e.g., `nightly`, `background`) to avoid clogging the `default` queue.
