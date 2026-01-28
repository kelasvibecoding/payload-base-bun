# Row Field

The Row Field is presentational-only and only affects the Admin Panel. By using it, you can arrange Fields next to each other horizontally.

To add a Row Field, set the type to `row` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyRowField: Field = {
  // ...
  type: 'row',
  fields: [
    // ...
  ],
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **fields \*** | Array of field types to nest within this Row. |
| **admin** | Admin-specific configuration excluding description, readOnly, and hidden. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

> `*` An asterisk denotes that a property is required.

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      type: 'row', // required
      fields: [
        // required
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}
```
