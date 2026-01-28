# Payload Workflows

A **Workflow** allows you to combine multiple [Tasks](./jobs-tasks.md) together in a way that can be gracefully retried from the point of failure.

## Why use Workflows?
If you have multiple steps that depend on each other (e.g., Create Profile -> Send Email -> Sync to CRM), a Workflow ensures that:
1. **Resilience**: If step 2 fails, the workflow only retries step 2.
2. **Efficiency**: Completed steps are not re-executed; their cached output is returned immediately.
3. **Tracking**: Every task's input and output is automatically stored in the database.

## Configuration

Workflows are registered in the `jobs.workflows` array of your Payload config.

```typescript
export default buildConfig({
  jobs: {
    workflows: [
      {
        slug: 'onboardUser',
        inputSchema: [
          { name: 'userId', type: 'text', required: true },
        ],
        handler: async ({ job, tasks }) => {
          // Task 1: Create Profile
          const profile = await tasks.createProfile('step1', {
            input: { userId: job.input.userId },
          })

          // Task 2: Send Email (uses output from Task 1)
          await tasks.sendWelcomeEmail('step2', {
             input: { email: profile.output.email }
          })
        },
      },
    ],
  },
})
```

## The Handler
The `handler` defines the execution flow. It receives a `tasks` object containing all your registered tasks, which are strongly typed.

### Important: Task IDs
When calling a task within a workflow, you must provide a **unique, stable ID** (e.g., `'step1'`). This ID is used to track whether the task has already succeeded. **If the ID changes between retries, the workflow cannot restore the previous state.**

## Inline Tasks
If you don't want to predefine a task in the config, you can use `inlineTask`. Note that inline tasks are untyped and cannot be reused.

```typescript
handler: async ({ inlineTask }) => {
  await inlineTask('my-stable-id', {
    task: async ({ req }) => {
      // business logic here
      return { output: { success: true } }
    }
  })
}
```

## Concurrency Controls
Workflows can be restricted to run sequentially for a specific resource (e.g., you don't want two "Sync" jobs running for the same document at once).

### 1. Enable in Config
```typescript
jobs: {
  enableConcurrencyControl: true,
}
```

### 2. Configure in Workflow
```typescript
{
  slug: 'syncDocument',
  // Jobs with the same key run one-by-one
  concurrency: ({ input }) => `sync:${input.documentId}`,
  
  // Or with full options:
  concurrency: {
    key: ({ input }) => `sync:${input.documentId}`,
    exclusive: true, // Run sequentially (default: true)
    supersedes: true, // Delete older pending jobs with same key (default: false)
  },
}
```

## Best Practices
1. **Stable IDs**: Use descriptive, hardcoded strings for task IDs (e.g., `'send-email'`) rather than dynamic IDs or numbers.
2. **Small Tasks**: Break complex logic into multiple small tasks so they can be retried independently.
3. **Pass IDs**: Pass document IDs as task input rather than huge document objects. Let the task fetch the latest data.
4. **Idempotency**: Ensure tasks are safe to run more than once if restoration fails.
5. **Concurrency**: Use `supersedes: true` for tasks like "Regenerate Embeddings" where only the latest state matters.
