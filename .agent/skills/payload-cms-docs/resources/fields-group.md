# Group Field

The Group Field allows Fields to be nested under a common property name. It also groups fields together visually in the Admin Panel.

To add a Group Field, set the type to `group` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyGroupField: Field = {
  // ...
  type: 'group',
  fields: [
    // ...
  ],
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name** | To be used as the property name when stored and retrieved from the database. |
| **fields \*** | Array of field types to nest within this Group. |
| **label** | Used as a heading in the Admin Panel and to name the generated GraphQL type. Defaults to the field name, if defined. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide an object of data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. If enabled, a separate, localized set of all data within this Group will be kept, so there is no need to specify each nested field as localized. |
| **admin** | Admin-specific configuration. More details. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **interfaceName** | Create a top level, reusable Typescript interface & GraphQL type. |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Group Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyGroupField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Group Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Option | Description |
| :--- | :--- |
| **hideGutter** | Set this property to true to hide this field's gutter within the Admin Panel. The field gutter is rendered as a vertical line and padding, but often if this field is nested within a Group, Block, or Array, you may want to hide the gutter. |

## Examples

### Named Group

This creates a nested object in the data.

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'pageMeta',
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
  ],
}
```

### Presentational Group

You can also use the Group field to only visually group fields without affecting the data structure. Not defining a name will render just the grouped fields (no nested object is created). If you want the group to appear as a titled section in the Admin UI, set a label.

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      label: 'Page meta', // label only → presentational
      type: 'group', // required
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
  ],
}
```
