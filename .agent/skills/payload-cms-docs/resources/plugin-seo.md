# SEO Plugin

The SEO plugin allows you to manage metadata (title, description, image) for your collections and globals directly within the Admin Panel. It includes "auto-generate" capabilities, character counters, and a real-time search engine snippet preview.

## Installation

```bash
pnpm add @payloadcms/plugin-seo
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'

export default buildConfig({
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts'],
      globals: ['settings'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `My Site — ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
  ],
})
```

## Core Features
- **Meta Field Group**: Injects a `meta` group containing `title`, `description`, and `image` into enabled collections/globals.
- **Auto-Generation**: Editors can click a button to generate metadata based on your custom logic.
- **Real-time Preview**: Shows a mock-up of how the page will appear in search results.
- **Character Counters**: Visual indicators help editors write effective, length-compliant metadata.
- **Tabbed UI**: Optionally move SEO fields into a dedicated "SEO" tab.

## Configuration Options

| Option | Description |
| :--- | :--- |
| **`collections`** | Array of collection slugs to enable SEO on. |
| **`globals`** | Array of global slugs to enable SEO on. |
| **`uploadsCollection`**| Slug of your media collection (required for the meta image field). |
| **`generateTitle`** | Function to auto-calculate the meta title from document data. |
| **`generateDescription`**| Function to auto-calculate the meta description. |
| **`generateURL`** | Function to construct the absolute URL for the preview component. |
| **`tabbedUI`** | Set to `true` to move SEO fields into a dedicated tab in the Admin UI. |

### Example: Auto-Generation Functions
```typescript
seoPlugin({
  generateTitle: ({ doc }) => `${doc.title} | My Brand`,
  generateDescription: ({ doc }) => doc.content?.substring(0, 160),
  generateImage: ({ doc }) => doc.featuredImage, // Must return an ID or Reference
  generateURL: ({ doc }) => `https://example.com/blog/${doc.slug}`,
})
```

## Custom Fields
You can extend the `meta` group with your own fields (e.g., `og:title`, `twitter:card`).

```typescript
seoPlugin({
  fields: ({ defaultFields }) => [
    ...defaultFields,
    {
      name: 'ogTitle',
      type: 'text',
      label: 'Open Graph Title',
    },
  ],
})
```

## Direct Field Usage
If you need absolute control over where the SEO fields appear, you can import them directly instead of letting the plugin inject them automatically.

```typescript
import { MetaTitleField } from '@payloadcms/plugin-seo/fields'

// Use inside a collection's fields array
{
  ...MetaTitleField({
    hasGenerateFn: true,
  }),
  // your overrides here
}
```
