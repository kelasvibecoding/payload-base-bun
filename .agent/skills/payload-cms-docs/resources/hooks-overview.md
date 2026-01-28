# Hooks Overview

Hooks allow you to execute your own side effects during specific events of the Document lifecycle. They allow you to do things like mutate data, perform business logic, integrate with third-parties, or anything else, all during precise moments within your application.

With Hooks, you can transform Payload from a traditional CMS into a fully-fledged application framework.

## Use Cases

There are many use cases for Hooks, including:
- Modify data before it is read or updated
- Encrypt and decrypt sensitive data
- Integrate with a third-party CRM like HubSpot or Salesforce
- Send a copy of uploaded files to Amazon S3 or similar
- Process orders through a payment provider like Stripe
- Send emails when contact forms are submitted
- Track data ownership or changes over time

## Types of Hooks

There are four main types of Hooks in Payload:
1. **Root Hooks**
2. **Collection Hooks**
3. **Global Hooks**
4. **Field Hooks**

> **Reminder**: Payload also ships a set of React hooks that you can use in your frontend application. Although they share a common name, these are very different things and should not be confused.

## Root Hooks

Root Hooks are not associated with any specific Collection, Global, or Field. They are useful for globally-oriented side effects, such as when an error occurs at the application level.

To add Root Hooks, use the `hooks` property in your Payload Config:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  // ...
  hooks: {
    afterError:[() => {...}]
  },
})
```

### afterError

The `afterError` Hook is triggered when an error occurs in the Payload application. This can be useful for logging errors to a third-party service, sending an email to the development team, logging the error to Sentry or DataDog, etc. The output can be used to transform the result object / status code.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  // ...
  hooks: {
    afterError: [
      async ({ error }) => {
        // Do something
      },
    ],
  },
})
```

**Arguments:**

| Argument | Description |
| :--- | :--- |
| **error** | The error that occurred. |
| **context** | Custom context passed between Hooks. |
| **graphqlResult** | The GraphQL result object, available if the hook is executed within a GraphQL context. |
| **req** | The PayloadRequest object that extends Web Request. Contains currently authenticated user and the Local API instance payload. |
| **collection** | The Collection in which this Hook is running against. This will be undefined if the hook is executed from a non-collection endpoint or GraphQL. |
| **result** | The formatted error result object, available if the hook is executed from a REST context. |

## Awaited vs. Non-blocking Hooks

Hooks can either block the request until they finish or run without blocking it. What matters is whether your hook returns a Promise.

**Awaited (blocking)**: If your hook returns a Promise (for example, if it's declared `async`), Payload will wait for it to resolve before continuing that lifecycle step. Use this when your hook needs to modify data or influence the response. Hooks that return Promises run in series at the same lifecycle stage.

**Non-blocking (sometimes called "fire-and-forget")**: If your hook does not return a Promise (returns nothing), Payload will not wait for it to finish. This can be useful for side-effects that don't affect the outcome of the operation, but keep in mind that any work started this way might continue after the request has already completed.

> **Tip**: If your hook executes a long-running task that doesn't affect the response in any way, consider offloading it to the job queue. That will free up the request to continue processing without waiting for the task to complete.

**Awaited Example:**

```typescript
const beforeChange = async ({ data }) => {
  const enriched = await fetchProfile(data.userId) // Payload waits here
  return { ...data, profile: enriched }
}
```

**Non-blocking Example:**

```typescript
const afterChange = ({ doc }) => {
  // Trigger side-effect without blocking
  void pingAnalyticsService(doc.id)
  // No return → Payload does not wait
}
```

## Server-only Execution

Hooks are only triggered on the server and are automatically excluded from the client-side bundle. This means that you can safely use sensitive business logic in your Hooks without worrying about exposing it to the client.

## Performance

Hooks are a powerful way to customize the behavior of your APIs, but some hooks are run very often and can add significant overhead to your requests if not optimized.

### Writing Efficient Hooks

Consider when hooks are run. One common pitfall is putting expensive logic in hooks that run very often.

For example, the `read` operation runs on every read request, so avoid putting expensive logic in a `beforeRead` or `afterRead` hook.

```typescript
{
  hooks: {
    beforeRead: [
      async () => {
        // This runs on every read request - avoid expensive logic here
        await doSomethingExpensive()
        return data
      },
    ],
  },
}
```

Instead, you might want to use a `beforeChange` or `afterChange` hook, which only runs when a document is created or updated.

```typescript
{
  hooks: {
    beforeChange: [
      async ({ context }) => {
        // This is more acceptable here, although still should be mindful of performance
        await doSomethingExpensive()
        // ...
      },
    ]
  },
}
```

### Using Hook Context

Use Hook Context to avoid infinite loops or to prevent repeating expensive operations across multiple hooks in the same request.

```typescript
{
  hooks: {
    beforeChange: [
      async ({ context }) => {
        const somethingExpensive = await doSomethingExpensive()
        context.somethingExpensive = somethingExpensive
        // ...
      },
    ],
  },
}
```

### Offloading to the Jobs Queue

If your hooks perform any long-running tasks that don't directly affect the request lifecycle, consider offloading them to the jobs queue. This will free up the request to continue processing without waiting for the task to complete.

```typescript
{
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Offload to job queue
        await req.payload.jobs.queue(...)
        // ...
      },
    ],
  },
}
```
