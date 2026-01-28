# Payload Tasks

A **Task** is a strongly-typed function definition that performs a specific unit of business logic. Tasks are the building blocks of Payload's Jobs Queue.

## Task Configuration

Tasks are registered in the `jobs.tasks` array of your Payload config.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  jobs: {
    tasks: [
      {
        slug: 'createPost',
        retries: 2, // Automatically retry twice on failure
        inputSchema: [
          { name: 'title', type: 'text', required: true },
        ],
        outputSchema: [
          { name: 'postID', type: 'text', required: true },
        ],
        handler: async ({ input, req }) => {
          const newPost = await req.payload.create({
            collection: 'posts',
            data: { title: input.title },
          })
          
          return {
            output: { postID: newPost.id },
          }
        },
      },
    ],
  },
})
```

## Important Fields

| Field | Description |
| :--- | :--- |
| **`slug`** | Unique identifier for the task. |
| **`handler`** | The async function (or file path) containing the logic. |
| **`inputSchema`** | Field schema for input data (used for validation and types). |
| **`outputSchema`**| Field schema for the data returned by the handler. |
| **`retries`** | Number of times to retry if the handler throws an error. |

## Handling Failures

Tasks fail when they throw an error. Payload catches these errors and logs them to the `error` field of the job.

```typescript
handler: async ({ input, req }) => {
  if (input.amount < 0) {
    throw new Error('Amount cannot be negative') // Triggers a retry
  }
}
```

### Preventing Retries
If you encounter an error that should **not** be retried (e.g., a permanent failure), throw a `JobCancelledError`.

```typescript
import { JobCancelledError } from 'payload'

throw new JobCancelledError('Payment already processed, do not retry.')
```

## Task Restoration
By default, if a task in a workflow has already succeeded, it will **not** be re-run if the workflow is retried. This is called "restoration."

You can disable this to force re-execution:
```typescript
{
  slug: 'myTask',
  retries: {
    shouldRestore: false, // Always re-run this task on workflow retries
  },
}
```

## Best Practices
1. **Idempotency**: Ensure tasks can be run multiple times with the same input without side effects (essential for retries).
2. **Small Units**: Keep tasks focused on a single responsibility.
3. **Descriptive Errors**: Throw clear error messages to make debugging easier in the Admin UI.
