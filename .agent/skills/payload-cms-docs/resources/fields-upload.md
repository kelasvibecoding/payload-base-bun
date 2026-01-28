# Upload Field

The Upload Field allows for the selection of a Document from a Collection supporting Uploads, and formats the selection as a thumbnail in the Admin Panel.

Upload fields are useful for a variety of use cases, such as:
- To provide a Page with a featured image
- To allow for a Product to deliver a downloadable asset like PDF or MP3
- To give a layout building block the ability to feature a background image

To create an Upload Field, set the type to `upload` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyUploadField: Field = {
  // ...
  type: 'upload',
  relationTo: 'media',
}
```

> **Important**: To use the Upload Field, you must have a Collection configured to allow Uploads.

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **relationTo \*** | Provide a single collection slug or an array of slugs to allow this field to accept a relation to. Note: the related collections must be configured to support Uploads. |
| **filterOptions** | A query to filter which options appear in the UI and validate against. |
| **hasMany** | Boolean which, if set to true, allows this field to have many relations instead of only one. |
| **minRows** | A number for the fewest allowed items during validation when a value is present. Used with hasMany. |
| **maxRows** | A number for the most allowed items during validation when a value is present. Used with hasMany. |
| **maxDepth** | Sets a number limit on iterations of related documents to populate when queried. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **displayPreview** | Enable displaying preview of the uploaded file. Overrides related Collection's displayPreview option. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |
| **graphQL** | Custom graphQL configuration for the field. |

> `*` An asterisk denotes that a property is required.

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'backgroundImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
}
```

## Filtering Upload Options

Options can be dynamically limited by supplying a query constraint, which will be used both for validating input and filtering available uploads in the UI.

The `filterOptions` property can either be a Where query, or a function returning `true` to not filter, `false` to prevent all, or a Where query.

```typescript
const uploadField = {
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  filterOptions: {
    mimeType: { contains: 'image' },
  },
}
```

## Polymorphic Uploads

Upload fields can reference multiple upload collections by providing an array of collection slugs to the `relationTo` property.

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: ['images', 'documents', 'videos'], // references multiple upload collections
    },
  ],
}
```

This can be combined with the `hasMany` property to allow multiple uploads from multiple collections.

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: ['images', 'documents', 'videos'], // references multiple upload collections
      hasMany: true, // allows multiple uploads
    },
  ],
}
```

## Bi-directional Relationships

The upload field on its own is used to reference documents in an upload collection. This can be considered a "one-way" relationship. If you wish to allow an editor to visit the upload document and see where it is being used, you may use the **Join field** in the upload enabled collection.
