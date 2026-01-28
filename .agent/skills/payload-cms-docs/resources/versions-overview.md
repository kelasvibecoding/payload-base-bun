# Versions Overview

Payload's Versions functionality allows you to maintain a running history of changes to your documents and globals. This is essential for audit logs, rollbacks, and advanced publishing workflows.

## Configuration

Enable versions in your Collection or Global config:

```typescript
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  versions: {
    maxPerDoc: 50, // Keep last 50 versions. Default is 100. Use 0 for unlimited.
    drafts: true,  // Enable Drafts mode
  },
  // ...
}
```

## Database Impact
When versions are enabled, Payload creates a new database collection named `_slug_versions`. Every time a document is saved, a full copy of the document data is stored in this collection along with metadata:
- `parent`: The ID of the original document.
- `version`: The full document data.
- `autosave`: Boolean indicating if the version was created via autosave.

## Version Operations
Versions expose new Local, REST, and GraphQL operations to manage history.

### Local API
```typescript
// Find all versions of a document
const { docs } = await payload.findVersions({
  collection: 'posts',
  where: {
    parent: { equals: 'document-id' }
  }
})

// Restore a specific version
await payload.restoreVersion({
  collection: 'posts',
  id: 'version-id',
})
```

### REST API
- `GET /api/{collection}/versions`: Query version history.
- `GET /api/{collection}/versions/{id}`: Fetch a specific version.
- `POST /api/{collection}/versions/{id}`: Restore a document to this version.

## Access Control
Versions include a dedicated `readVersions` access control function. This controls who can see the version history in the Admin UI and via the API.

```typescript
versions: {
  readVersions: ({ req }) => req.user?.role === 'admin'
}
```
