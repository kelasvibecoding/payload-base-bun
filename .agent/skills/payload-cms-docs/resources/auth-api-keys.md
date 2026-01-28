# API Key Strategy

Payload allows you to generate non-expiring API keys for users. This is ideal for third-party integrations, server-to-server communication, or external services that need to perform protected actions without managing session tokens or logging in repeatedly.

## Enabling API Keys

To enable API keys for a collection, set the `useAPIKey` option to `true` in the `auth` config.

```typescript
import type { CollectionConfig } from 'payload'

export const ApiKeys: CollectionConfig = {
  slug: 'api-keys',
  auth: {
    useAPIKey: true, 
  },
  fields: [],
}
```

Once enabled, a new interface will appear in the Admin Panel for each document in that collection, allowing you to generate and manage API keys.

## Security

- **Encryption**: API keys are encrypted in the database. 
- **Secret Dependency**: The `PAYLOAD_SECRET` is used for encryption. If you change your secret, all existing API keys will become invalid and must be regenerated.
- **Granular Control**: Since API keys are tied to specific user documents, you can use Payload's standard **Access Control** and **Roles** to restrict what each API key can do.

## HTTP Authentication

To authenticate a request using an API key, use the `Authorization` header. The format is case-sensitive:

**Format**: `Authorization: <collection-slug> API-Key <your-api-key>`

### Example (Fetch)

```javascript
const response = await fetch('https://your-api.com/api/pages', {
  headers: {
    Authorization: 'users API-Key 1234567890abcdef',
  },
})
```

## API-Key-Only Collections

If you want a collection to be used *exclusively* for API access (disabling email/password login entirely), set `disableLocalStrategy: true`.

```typescript
export const Integrations: CollectionConfig = {
  slug: 'integrations',
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true, // Prevents login via email/password
  },
}
```
