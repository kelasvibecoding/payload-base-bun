# Drafts

Drafts allow you to save changes to documents without making them "live" on your site. This is core to building a professional content management workflow.

## Enabling Drafts
Drafts require Versions to be enabled.

```typescript
export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true, // Allow scheduling for the future
    },
  },
}
```

## The `_status` Field
Payload automatically injects a `_status` field into documents with drafts enabled:
- `draft`: The document is not published.
- `published`: The document is live.

In the Admin UI, you'll see transitions: **Draft** -> **Published** -> **Changed** (if there's a newer draft than the published version).

## The `draft` Parameter
API operations (`find`, `findByID`, `create`, `update`) accept a `draft` parameter:

- `draft: true`: 
  - **Writes**: Saves data ONLY to the versions table. The main collection remains unchanged. Helpful for saving incomplete work (validation is bypassed).
  - **Reads**: Returns the most recent version (regardless of status).
- `draft: false` (Default):
  - **Writes**: Updates the main collection and creates a new version.
  - **Reads**: Returns only the "published" version from the main collection.

### Example: Reading Drafts
```typescript
const page = await payload.findByID({
  collection: 'pages',
  id: '123',
  draft: true, // Get the latest work-in-progress content
})
```

## Controlling Public Access
By default, the API returns all documents regardless of `_status`. You **must** use Access Control to hide drafts from public users.

```typescript
const Pages: CollectionConfig = {
  access: {
    read: ({ req }) => {
      // Admins see all
      if (req.user) return true
      
      // Public sees only published
      return {
        _status: { equals: 'published' }
      }
    }
  }
}
```

## Scheduled Publishing
Enable `schedulePublish: true` to allow editors to pick a future date for a document to go live. 
*Note: Requires Payload [Jobs](https://payloadcms.com/docs/jobs/overview) to be configured.*
