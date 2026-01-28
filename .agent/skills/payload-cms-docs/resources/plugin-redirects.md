# Redirects Plugin

The Redirects plugin allows you to manage URL redirects directly within the Payload Admin Panel. It adds a `redirects` collection to your config, enabling you to map old URLs to new ones or to specific internal documents.

## Installation

```bash
pnpm add @payloadcms/plugin-redirects
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'

export default buildConfig({
  plugins: [
    redirectsPlugin({
      // Collections that can be targeted as the 'to' reference
      collections: ['pages', 'posts'],
    }),
  ],
})
```

## Core Features
- **Managed Redirects**: A central collection for all 301/302 redirects.
- **Reference Support**: The `to` field can be a manual URL string or a direct relationship to a document in another collection.
- **SEO Benefits**: Proper HTTP-level redirects help maintain search engine rankings during URL structure changes.

## Options

| Option | Description |
| :--- | :--- |
| **`collections`** | Array of collection slugs that can be used as a redirect target. |
| **`overrides`** | Partially override the `redirects` collection config. |
| **`redirectTypes`**| Optional array of custom redirect codes (e.g., `['301', '302', '307']`). |
| **`redirectTypeFieldOverride`** | Override the default `redirectType` field settings. |

### Example with Overrides

```typescript
redirectsPlugin({
  collections: ['pages'],
  overrides: {
    fields: ({ defaultFields }) => [
      ...defaultFields,
      {
        name: 'notes',
        type: 'text',
        label: 'Internal Notes',
      },
    ],
  },
  redirectTypes: ['301', '302'],
})
```

## Frontend Integration
Your frontend application (e.g., Next.js middleware or a catch-all route) should query the `redirects` collection based on the incoming path to determine if a redirect is necessary.

```typescript
const redirect = await payload.find({
  collection: 'redirects',
  where: {
    from: { equals: '/old-path' },
  },
})

if (redirect.docs.length > 0) {
  // Execute the redirect
}
```
