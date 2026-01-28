# Document Views

Document Views are individual views that together represent a single Collection or Global Document. They are scoped under `/collections/:slug/:id` or `/globals/:slug`. 

Default Document Views include the **Edit View**, **API View**, and **Versions View**. You can replace these default views or add entirely new ones, typically represented as tabs.

## Configuration

Document views are configured under `admin.components.views.edit` in your Collection or Global Config.

```typescript
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    components: {
      views: {
        edit: {
          default: {
            Component: '/path/to/MyCustomEditView',
          },
          // Other built-in keys include:
          // api, versions, version, livePreview, root
        },
      },
    },
  },
}
```

## Available Built-in Views

| Property | Description |
| :--- | :--- |
| **root** | Overrides the entire document layout (no tabs or document controls rendered). |
| **default** | The primary view for editing the document (rendered in the "Edit" tab). |
| **versions** | The list of available document versions. |
| **version** | The view for a single specific version. |
| **api** | Displays the REST API JSON response for the document. |
| **livePreview** | The interface for Live Preview. |

## Custom Tabs

You can add completely new views to a document, which appear as additional tabs in the navigation.

```typescript
admin: {
  components: {
    views: {
      edit: {
        myCustomView: {
          path: '/my-stats',
          Component: '/path/to/StatsView',
          tab: {
            label: 'Statistics',
            order: 100, // Controls tab position
          },
        },
      },
    },
  },
}
```

### Tab Configuration

| Option | Description |
| :--- | :--- |
| **label** | The text displayed in the tab button. |
| **href** | Custom navigation target (defaults to the view's path). |
| **order** | Numerical order in the tab bar. |
| **Component** | Replaces the tab button component entirely. |

## Document Root

Setting the `views.edit.root` property completely takes over the document editing interface. The default tabs, document title, and action buttons will not be rendered. Use this only if you intend to build a fully bespoke document management interface.

To replace only the content of the editing form while keeping the tabs and headers, use `views.edit.default` instead.

## Building Document Tabs

You can replace individual tab buttons with custom components.

```tsx
// Server Component Example
import React from 'react'
import { Link } from '@payloadcms/ui'
import type { DocumentTabServerProps } from 'payload'

export function CustomTab(props: DocumentTabServerProps) {
  return (
    <Link href="/my-custom-tab">
      Custom Tab Label
    </Link>
  )
}
```
