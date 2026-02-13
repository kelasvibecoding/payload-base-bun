# SQLite and UUID Usage

When using SQLite with Payload CMS 3.0, you should avoid using custom UUID plugins and instead use the native `idType: 'uuid'` option in the adapter configuration.

## Preferred Configuration

The `sqliteAdapter` should be configured with `idType: 'uuid'`.

```typescript
import { sqliteAdapter } from '@payloadcms/db-sqlite'

export default buildConfig({
  db: sqliteAdapter({
    idType: 'uuid',
    client: {
      url: process.env.DATABASE_URL,
    },
  }),
})
```

## Why Avoid UUID Plugins for SQLite?

1.  **Redundancy**: Payload's SQL adapters (SQLite and Postgres) support UUIDs natively through the database driver/adapter.
2.  **Schema Sync**: Using `idType: 'uuid'` ensures that the underlying database schema is correctly typed as UUID, whereas a plugin might just generate UUID strings into a standard text field.
3.  **Consistency**: This matches the recommended pattern for SQL adapters in Payload CMS 3.0.

## Note on MongoDB

For MongoDB, the `uuidPlugin` (if present in this project) is still relevant as MongoDB doesn't have a native UUID ID type like SQL databases do (it uses `ObjectId` by default). The plugin ensures UUIDs are used instead.
