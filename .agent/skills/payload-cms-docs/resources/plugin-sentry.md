# Sentry Plugin

The Sentry plugin allows you to integrate Sentry seamlessly with your Payload application for error tracking and performance monitoring.

## Installation

```bash
pnpm add @payloadcms/plugin-sentry
```

### Sentry for Next.js Setup
This plugin requires that you first complete the Sentry + Next.js setup. You can use the installation wizard:

```bash
npx @sentry/wizard@latest -i nextjs
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { sentryPlugin } from '@payloadcms/plugin-sentry'
import * as Sentry from '@sentry/nextjs'

export default buildConfig({
  plugins: [
    sentryPlugin({
      Sentry,
    }),
  ],
})
```

## Options

| Option | Type | Description |
| :--- | :--- | :--- |
| **`Sentry`** | `Sentry` | **Required**. The Sentry instance (usually imported from `@sentry/nextjs`). |
| **`enabled`** | `boolean` | Set to `false` to disable the plugin. Defaults to `true`. |
| **`captureErrors`**| `number[]` | Capture additional error codes. Defaults to `500` and higher. |
| **`context`** | `Function`| Pass additional contextual data (tags, extra info) to Sentry. |

### Adding Context Example

```typescript
sentryPlugin({
  Sentry,
  options: {
    captureErrors: [400, 403],
    context: ({ defaultContext, req }) => {
      return {
        ...defaultContext,
        tags: {
          locale: req.locale,
        },
      }
    },
  },
})
```

## Database Query Instrumentation

To capture performance traces for database queries (e.g., Postgres), you must inject the patched driver into your database adapter:

```typescript
import * as Sentry from '@sentry/nextjs'
import { postgresAdapter } from '@payloadcms/db-postgres'
import pg from 'pg'

export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
    pg, // Inject the patched pg driver
  }),
  plugins: [sentryPlugin({ Sentry })],
})
```

## Key Features
- **Error Tracking**: Captures stack traces and context for server-side errors.
- **Performance Monitoring**: Tracks database queries and API response times.
- **Breadcrumbs**: Records events leading up to an error for easier debugging.
