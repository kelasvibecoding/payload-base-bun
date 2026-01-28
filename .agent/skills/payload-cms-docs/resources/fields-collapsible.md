# Collapsible Field

The Collapsible Field is presentational-only and only affects the Admin Panel. By using it, you can place fields within a nice layout component that can be collapsed / expanded.

To add a Collapsible Field, set the type to `collapsible` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyCollapsibleField: Field = {
  // ...
  type: 'collapsible',
  fields: [
    // ...
  ],
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **label \*** | A label to render within the header of the collapsible component. This can be a string, function or react component. Function/components receive `({ data, path })` as args. |
| **fields \*** | Array of field types to nest within this Collapsible. |
| **admin** | Admin-specific configuration. More details. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Collapsible Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyCollapsibleField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Collapsible Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Option | Description |
| :--- | :--- |
| **initCollapsed** | Set the initial collapsed state |

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      label: ({ data }) => data?.title || 'Untitled',
      type: 'collapsible', // required
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'someTextField',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
```
