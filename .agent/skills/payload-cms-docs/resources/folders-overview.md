# Folders Overview

Folders allow you to group and organize documents across different collections. This feature is built on top of relationship fields: when enabled, Payload adds a hidden relationship field to your collection that links to a folder. Folders can also be nested within other folders.

> **Note**: The Folders feature is currently in **beta** and may be subject to change in minor version updates.

## Configuration

### 1. Payload Config
Configure global folder settings in your root `payload.config.ts`.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  folders: {
    // Enable/disable browsing by folder in the UI (default: true)
    browseByFolder: true,
    // Custom slug for the folder collection (default: 'payload-folders')
    slug: 'media-folders',
    // Custom field name for the relationship (default: 'folder')
    fieldName: 'folder',
    // Debug mode to view hidden folder-specific fields (default: false)
    debug: true,
    // Hook into collection initialization for overrides
    collectionOverrides: [
      ({ collection }) => {
        return {
          ...collection,
          access: { read: () => true }, // Example: make folders publicly readable
        }
      },
    ],
  },
})
```

### 2. Collection Config
Enable folders on specific collections by setting `folders: true`.

```typescript
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  // Enable folders for this collection
  folders: true,
}
```

Alternatively, you can provide options:

```typescript
folders: {
  // Whether this collection appears in the global "Browse by Folder" view
  browseByFolder: true,
}
```

## How It Works
- **Hidden Relationship**: Payload injects a `folders` relationship field into enabled collections.
- **Folder Collection**: A new internal collection (default slug `payload-folders`) is created to manage the folder hierarchy.
- **Nesting**: Folders contain a `folder` field themselves, allowing for infinite nesting levels.
