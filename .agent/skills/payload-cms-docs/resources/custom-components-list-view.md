# List View

The List View is where users interact with a list of Collection Documents. It includes tools for sorting, filtering, and performing bulk operations. 

You can either replace the entire List View with a **Custom View** or inject **Custom Components** into specific parts of the existing layout.

> **Note**: Only Collections have a List View. Globals are single documents and do not have a list.

## Replacing the Entire List View

To swap out the entire List View, use the `admin.components.views.list` property in your Payload Config or Collection Config.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    components: {
      views: {
        list: '/path/to/MyCustomListView',
      },
    },
  },
})
```

## Overriding Individual Components

You can inject components into the default List View using the `admin.components` property in your Collection Config.

| Option | Description |
| :--- | :--- |
| **beforeList** | Injected at the top of the List View (above controls). |
| **beforeListTable** | Injected directly above the document table. |
| **listMenuItems** | Injected into the menu next to List Controls (Columns/Filters). |
| **Description** | Custom description displayed below the title. |
| **afterListTable** | Injected directly below the document table. |
| **afterList** | Injected at the bottom of the List View. |

### Configuration Example

```typescript
export const MyCollection: CollectionConfig = {
  slug: 'posts',
  admin: {
    components: {
      beforeList: ['/components/ListBanner'],
      beforeListTable: ['/components/TableStats'],
    },
  },
}
```

---

## Component Examples

### Before / After List
These receive `BeforeListServerProps` or `AfterListServerProps`.

```tsx
import type { BeforeListServerProps } from 'payload'

export function MyListBanner(props: BeforeListServerProps) {
  return <div className="banner">Custom List Banner</div>
}
```

### Description
The Description component is shared between the List View and the Edit View.

```tsx
'use client'
import type { ViewDescriptionClientProps } from 'payload'

export function MyDescription(props: ViewDescriptionClientProps) {
  return <p>This collection contains all blog posts.</p>
}
```

### List Menu Items
Items added here appear in the dropdown menu next to the "Columns" and "Filters" buttons.

```typescript
admin: {
  components: {
    listMenuItems: ['/components/ExportButton'],
  },
}
```
