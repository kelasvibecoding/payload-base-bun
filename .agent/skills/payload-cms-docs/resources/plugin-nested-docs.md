# Nested Docs Plugin

The Nested Docs plugin enables hierarchical structures within your collections (like parent/child pages). It automatically manages a `parent` relationship field and a `breadcrumbs` array that reflects the document's position in the tree.

## Installation

```bash
pnpm add @payloadcms/plugin-nested-docs
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

export default buildConfig({
  plugins: [
    nestedDocsPlugin({
      collections: ['pages'],
      // Logic for the breadcrumb label (e.g. "Home > About")
      generateLabel: (_, doc) => doc.title,
      // Logic for the full URL (e.g. "/home/about")
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ],
})
```

## Core Features
- **Recursive Updates**: When you move or rename a parent document, all descendants are automatically updated to reflect the new hierarchy and breadcrumbs.
- **Breadcrumbs Field**: An array field containing the `label` and `url` for every ancestor in the tree.
- **Localization Support**: Breadcrumbs are automatically localized if your project has localization enabled.

## Options

| Option | Description |
| :--- | :--- |
| **`collections`** | Array of collection slugs to enable nesting on. |
| **`generateLabel`** | Function to determine the breadcrumb label. Defaults to the document's ID or `useAsTitle`. |
| **`generateURL`** | Function to construct the URL for each breadcrumb. |
| **`parentFieldSlug`** | Custom slug for the parent field (if providing your own). |
| **`breadcrumbsFieldSlug`** | Custom slug for the breadcrumbs field (if providing your own). |

## Manual Field Overrides
If you need to customize the position or settings of the `parent` or `breadcrumbs` fields, you can use the built-in field creation methods:

```typescript
import { createParentField, createBreadcrumbsField } from '@payloadcms/plugin-nested-docs'

const Pages = {
  slug: 'pages',
  fields: [
    createParentField('pages', {
      admin: { position: 'sidebar' },
    }),
    createBreadcrumbsField('pages', {
       label: 'Hierarchical Path',
    }),
  ],
}
```

## Side Effects
Since the plugin recursively updates descendants, it is highly efficient for generating "Full Titles" (e.g., `Grandparent > Parent > Child`) that are searchable and unique, even if multiple children share the same name but have different parents.
