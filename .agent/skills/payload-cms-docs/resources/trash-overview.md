# Trash (Soft Delete)

The Trash feature allows documents to be marked as deleted without being permanently removed from the database. This provides a safety net for editors to recover accidentally deleted content.

> **Note**: The Trash feature is currently in **beta** and may be subject to change.

## Configuration

Enable Trash on a per-collection basis by setting `trash: true`.

```typescript
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  trash: true, // Enables soft delete
  fields: [
    { name: 'title', type: 'text' },
  ],
}
```

When enabled, Payload injects a hidden `deletedAt` field into your collection.

## Admin Panel Behavior

- **Trash View**: A new "Trash" tab or view appears in the collection list.
- **Restore**: Clears the `deletedAt` timestamp and returns the document to the main list.
- **Permanent Delete**: Completely removes the document from the database.
- **Read-Only Mode**: Trashed documents are read-only until restored. Standard actions (Save, Publish) are hidden.

## API Usage

Soft-deleted documents are excluded from results by default. You must use the `trash` parameter to include them.

### Local API
```typescript
// Include both trashed and non-trashed documents
const allDocs = await payload.find({
  collection: 'posts',
  trash: true,
})

// Find ONLY trashed documents
const trashOnly = await payload.find({
  collection: 'posts',
  trash: true,
  where: {
    deletedAt: { exists: true }
  }
})
```

### REST API
```http
GET /api/posts?trash=true
GET /api/posts?trash=true&where[deletedAt][exists]=true
```

### GraphQL
```graphql
query {
  Posts(trash: true) {
    docs {
      id
      deletedAt
    }
  }
}
```

## Versions & Trash
If a document is in the trash, it cannot have its [Versions](./versions-overview.md) restored until the document itself is restored. However, the version history remains viewable for auditing purposes.

## Access Control
Trash actions respect the collection's `delete` access control. If a user cannot delete a document, they cannot soft-delete it or permanently remove it from the trash.
