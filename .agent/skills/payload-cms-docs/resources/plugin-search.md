# Search Plugin

The Search plugin creates an indexed `search` collection in your database that stores static, lightweight copies of your documents. This allows for extremely fast full-text searching across multiple collections while bypassing heavy hooks on the original documents.

## Installation

```bash
pnpm add @payloadcms/plugin-search
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { searchPlugin } from '@payloadcms/plugin-search'

export default buildConfig({
  plugins: [
    searchPlugin({
      collections: ['pages', 'posts'],
      // Set importance for sorting results
      defaultPriorities: {
        pages: 10,
        posts: 20,
      },
    }),
  ],
})
```

## Core Features
- **Indexed Collection**: Automatically manages a `search` collection that is optimized for queries.
- **Syncing**: Automatically keeps search records in sync when you create, update, or delete documents.
- **Priority Sorting**: Use the `priority` field to ensure important content (like Pages) appears above others (like Posts).
- **Hook Bypass**: Searching the dedicated collection avoids the overhead of running hooks on large, complex documents.

## Configuration Options

### `beforeSync`
Use this hook to transform data before it is saved to the search index (e.g., stripping HTML or generating excerpts).

```typescript
searchPlugin({
  beforeSync: ({ originalDoc, searchDoc }) => ({
    ...searchDoc,
    excerpt: originalDoc?.excerpt || 'No summary available',
  }),
})
```

### `searchOverrides`
Customize the search results collection itself (e.g., changing the slug or adding fields).

```typescript
searchPlugin({
  searchOverrides: {
    slug: 'results',
    fields: ({ defaultFields }) => [
      ...defaultFields,
      { name: 'excerpt', type: 'textarea' },
    ],
  },
})
```

### `skipSync`
Conditionally prevent specific documents from being indexed.

```typescript
searchPlugin({
  skipSync: ({ doc }) => {
    // Don't index "Internal" documents
    return doc.isInternal === true
  },
})
```

## Reindexing Existing Data
If you add this plugin to an existing project, your documents won't be indexed until they are resaved. You can trigger a full sync by:
1. Navigating to the **Search** collection in the Admin Panel.
2. Clicking the **Reindex** pill in the top-right corner.
3. Selecting which collections to re-process.

## Frontend Usage
Query the search results just like any other collection:

```typescript
const results = await payload.find({
  collection: 'search',
  where: {
    title: { contains: 'Payload' },
  },
  sort: '-priority', // Sort by your defined priorities
})
```
