# Custom Views

Views are the individual pages of the Admin Panel (Dashboard, List View, Edit View, etc.). You can replace built-in views or add entirely new custom pages using the `views` property.

## View Types

1.  **Root Views**: Scoped directly under `/admin` (e.g., Dashboard, Account).
2.  **Collection Views**: Scoped under `/collections` (e.g., List View, Edit View).
3.  **Global Views**: Scoped under `/globals` (e.g., Edit View).
4.  **Document Views**: Sub-views of the Edit View (e.g., specific tabs or sidebars for a document).

## Configuration

### Replacing Built-in Views
To replace a view, use the `admin.components.views` key in your config.

```typescript
// Payload Config
export default buildConfig({
  admin: {
    components: {
      views: {
        dashboard: {
          Component: '/path/to/MyCustomDashboard',
        },
      },
    },
  },
})
```

### Adding New Views
To add a new page, add a custom key with a `path` and `Component`.

```typescript
admin: {
  components: {
    views: {
      myCustomPage: {
        path: '/custom-stats',
        Component: '/path/to/MyCustomView',
      },
    },
  },
}
```

## Building a Custom View

### Default Props
Custom Views receive `AdminViewServerProps`, which include:
- **initPageResult**: Contains `req`, `payload`, `permissions`, and `user`.
- **params / searchParams**: Dynamic route and query parameters.
- **payload**: The Payload class.
- **doc**: The current document (only in Document/Edit views).

### Using Templates
For consistent layout (sidebar, header), wrap your content in the `DefaultTemplate`.

```tsx
import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'

export function MyCustomView({ initPageResult, params, searchParams }) {
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <h1>Custom Page</h1>
      </Gutter>
    </DefaultTemplate>
  )
}
```

### Security
Custom Views are public by default within the admin route. You must manually check permissions if needed.

```tsx
export function MyCustomView({ initPageResult }) {
  const { user } = initPageResult.req
  if (!user) return <p>Access Denied</p>
  // ...
}
```

## Scope-Specific Config

- **Root**: `admin.components.views` (Dashboard, Account).
- **Collection**: `collections[slug].admin.components.views` (List, Edit).
- **Global**: `globals[slug].admin.components.views` (Edit).
