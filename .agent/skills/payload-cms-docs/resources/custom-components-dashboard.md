# Dashboard Widgets

The Dashboard is the first page users see when they log into the Payload Admin Panel. Payload features a **Modular Dashboard** that allows you to add widgets—custom components that display data, analytics, or links.

> **Note**: The Modular Dashboard is an experimental feature and may change in future releases.

## Defining Widgets

Define widgets in your Payload Config under `admin.dashboard.widgets`:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    dashboard: {
      widgets: [
        {
          slug: 'user-stats',
          ComponentPath: './components/UserStats.tsx',
          minWidth: 'medium',
        },
        {
          slug: 'recent-activity',
          ComponentPath: './components/Activity.tsx',
        }
      ],
    },
  },
})
```

### Widget Configuration

| Property | Type | Description |
| :--- | :--- | :--- |
| **slug*** | string | Unique identifier for the widget. |
| **ComponentPath*** | string | Path to the widget component (supports `#` syntax). |
| **minWidth** | string | Minimum width (Default: `'x-small'`). |
| **maxWidth** | string | Maximum width (Default: `'full'`). |

**Width Values**: `'x-small'`, `'small'`, `'medium'`, `'large'`, `'x-large'`, `'full'`.

## Creating a Widget Component

Widgets are **React Server Components** that receive `WidgetServerProps`.

```tsx
import type { WidgetServerProps } from 'payload'

export default async function UserStatsWidget({ req }: WidgetServerProps) {
  const { payload } = req
  const userCount = await payload.count({ collection: 'users' })

  return (
    <div className="card">
      <h3>Total Users</h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold' }}>
        {userCount.totalDocs}
      </p>
    </div>
  )
}
```

### Visual Consistency
- Use the `card` class for root elements to match the Payload UI background.
- Use CSS variables like `var(--theme-elevation-0)` and `var(--theme-text)`.

## Default Layout

You can control the initial dashboard layout for new users via `defaultLayout`.

```typescript
admin: {
  dashboard: {
    defaultLayout: ({ req }) => {
      const isAdmin = req.user?.roles?.includes('admin')

      return [
        { widgetSlug: 'collections', width: 'full' }, // Built-in widget
        { widgetSlug: 'user-stats', width: isAdmin ? 'medium' : 'full' },
      ]
    },
  },
}
```

## User Customization

Users can customize their own dashboard by selecting **"Edit Dashboard"** from the breadcrumb dropdown. They can:
- **Resize**: Adjust widget width via a dropdown.
- **Reorder**: Drag and drop widgets to change their position.
- **Add/Delete**: Add new available widgets or remove existing ones.
- **Reset**: Revert to the `defaultLayout`.

Custom layouts are saved to individual user preferences.
