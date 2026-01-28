# Tabs Field

The Tabs Field is presentational-only and only affects the Admin Panel (unless a tab is named). By using it, you can place fields within a nice layout component that separates certain sub-fields by a tabbed interface.

To add a Tabs Field, set the type to `tabs` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyTabsField: Field = {
  // ...
  type: 'tabs',
  tabs: [
    // ...
  ],
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **tabs \*** | Array of tabs to render within this Tabs field. |
| **admin** | Admin-specific configuration. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

> `*` An asterisk denotes that a property is required.

### Tab-specific Config

Each tab must have either a `name` or `label` and the required `fields` array. You can also optionally pass a `description` to render within each individual tab.

| Option | Description |
| :--- | :--- |
| **name** | Groups field data into an object when stored and retrieved from the database. |
| **label** | The label to render on the tab itself. Required when name is undefined, defaults to name converted to words. |
| **fields \*** | The fields to render within this tab. |
| **description** | Optionally render a description within this tab to describe the contents of the tab itself. |
| **interfaceName** | Create a top level, reusable Typescript interface & GraphQL type. (name must be present) |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      type: 'tabs', // required
      tabs: [
        // required
        {
          label: 'Tab One Label', // required
          description: 'This will appear within the tab above the fields.',
          fields: [
            // required
            {
              name: 'someTextField',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'tabTwo',
          label: 'Tab Two Label', // required
          interfaceName: 'TabTwo', // optional (`name` must be present)
          fields: [
            // required
            {
              name: 'numberField', // accessible via tabTwo.numberField
              type: 'number',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
```
