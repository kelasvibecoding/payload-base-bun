# Performance Overview

Payload is designed for speed, but its flexibility means configuration choices can impact performance. Follow these best practices to ensure your application remains efficient as it scales.

## Infrastructure & Database

### Database Proximity
Host your database in the same region as your server to minimize latency. High network latency between the app and the DB is a common cause of slow API responses.

### Field Indexing
Always index fields that are frequently used in filters or sort operations. Indexed fields allow the database to locate data without a full table scan.
- See [Indexes](./database-indexes.md) for more details.

## Code Optimization

### Using Cached Instance
Never instantiate Payload manually multiple times. Use `getPayload` to retrieve the cached instance.

```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
```

### Block References
If you use the same block in multiple fields or collections, use `blockReferences`. This reduces config overhead and Admin Panel bundle size.

```typescript
{
  name: 'content',
  type: 'blocks',
  blockReferences: ['MyReusableBlock'],
  blocks: [], // Empty for compatibility
}
```

## Advanced Performance

### Direct-to-DB Calls
For performance-critical operations where you don't need hooks, access control, or validation, use `payload.db` methods.
- **Warning**: Bypasses all standard Payload features (hooks, versions, etc.).
- **Pro**: Significantly faster; can perform updates in a single query.

```typescript
await payload.db.updateOne({
  collection: 'posts',
  id: post.id,
  data: { title: 'Fast Update' },
  returning: false, // Prevents fetching the document after update
})
```

## Frontend & Bundle Size

### Targeted Imports
Avoid importing from the top-level `@payloadcms/ui` in your frontend application, as it may bundle the entire library. Use deep imports instead:

```typescript
// Good for frontend
import { Button } from '@payloadcms/ui/elements/Button'

// Okay for Admin Panel custom components
import { Button } from '@payloadcms/ui'
```

## Development Experience

### Turbopack
Use Turbopack (Next.js 15+) to speed up local development server start times:
```json
"dev": "next dev --turbo"
```

### Server Package Bundling
In `next.config.js`, set `devBundleServerPackages: false` within `withPayload` to skip bundling Payload server modules during development, leading to faster HMR (Hot Module Replacement).
