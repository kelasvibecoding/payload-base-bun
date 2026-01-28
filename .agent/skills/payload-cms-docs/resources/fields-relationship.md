# Relationship Field

The Relationship Field is one of the most powerful fields Payload features. It provides the ability to easily relate documents together.

To add a Relationship Field, set the type to `relationship` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyRelationshipField: Field = {
  // ...
  type: 'relationship',
  relationTo: 'products',
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **relationTo \*** | Provide one or many collection slugs to be able to assign relationships to. |
| **filterOptions** | A query to filter which options appear in the UI and validate against. |
| **hasMany** | Boolean when, if set to true, allows this field to have many relations instead of only one. |
| **minRows** | A number for the fewest allowed items during validation when a value is present. Used with hasMany. |
| **maxRows** | A number for the most allowed items during validation when a value is present. Used with hasMany. |
| **maxDepth** | Sets a maximum population depth for this field, regardless of the remaining depth when this field is reached. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. More details. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |
| **graphQL** | Custom graphQL configuration for the field. |

> `*` An asterisk denotes that a property is required.

> **Tip**: The Depth parameter can be used to automatically populate related documents that are returned by the API.

### Admin Options

To the appearance and behavior of the Relationship Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyRelationshipField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Relationship Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Property | Description |
| :--- | :--- |
| **isSortable** | Set to true if you'd like this field to be sortable within the Admin UI using drag and drop (only works when hasMany is set to true). |
| **allowCreate** | Set to false if you'd like to disable the ability to create new documents from within the relationship field. |
| **allowEdit** | Set to false if you'd like to disable the ability to edit documents from within the relationship field. |
| **sortOptions** | Define a default sorting order for the options within a Relationship field's dropdown. |
| **placeholder** | Define a custom text or function to replace the generic default placeholder |
| **appearance** | Set to drawer or select to change the behavior of the field. Defaults to select. |

#### Sort Options

**As a string**:
Provide a string to define a global default sort field for all relationship field dropdowns across different collections. You can prefix the field name with a minus symbol ("-") to sort in descending order.

```typescript
sortOptions: 'fieldName',
```

**As an object**:
Specify an object where keys are collection slugs and values are strings representing the field names to sort by.

```typescript
sortOptions: {
  "pages": "fieldName1",
  "posts": "-fieldName2",
  "categories": "fieldName3"
}
```

## Filtering relationship options

Options can be dynamically limited by supplying a query constraint, which will be used both for validating input and filtering available relationships in the UI.

The `filterOptions` property can either be a Where query, or a function returning `true` to not filter, `false` to prevent all, or a Where query.

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'purchase',
      type: 'relationship',
      relationTo: ['products', 'services'],
      filterOptions: ({ relationTo, siblingData }) => {
        // returns a Where query dynamically by the type of relationship
        if (relationTo === 'products') {
          return {
            stock: { greater_than: siblingData.quantity },
          }
        }

        if (relationTo === 'services') {
          return {
            isAvailable: { equals: true },
          }
        }
      },
    },
  ],
}
```

## How the data is saved

### Has One

The most simple pattern of a relationship is to use `hasMany: false` with a `relationTo` that allows for only one type of collection.

```typescript
{
  slug: 'example-collection',
  fields: [
    {
      name: 'owner', // required
      type: 'relationship', // required
      relationTo: 'users', // required
      hasMany: false,
    }
  ]
}
```

The shape of the data to save:
```json
{
  "owner": "6031ac9e1289176380734024"
}
```

### Has One - Polymorphic

```typescript
{
  slug: 'example-collection',
  fields: [
    {
      name: 'owner', // required
      type: 'relationship', // required
      relationTo: ['users', 'organizations'], // required
      hasMany: false,
    }
  ]
}
```

The shape of the data to save:
```json
{
  "owner": {
    "relationTo": "organizations",
    "value": "6031ac9e1289176380734024"
  }
}
```

### Has Many

```typescript
{
  slug: 'example-collection',
  fields: [
    {
      name: 'owners', // required
      type: 'relationship', // required
      relationTo: 'users', // required
      hasMany: true,
    }
  ]
}
```

The shape of the data to save:
```json
{
  "owners": ["6031ac9e1289176380734024", "602c3c327b811235943ee12b"]
}
```

### Has Many - Polymorphic

```typescript
{
  slug: 'example-collection',
  fields: [
    {
      name: 'owners', // required
      type: 'relationship', // required
      relationTo: ['users', 'organizations'], // required
      hasMany: true,
      required: true,
    }
  ]
}
```

The shape of the data to save:
```json
{
  "owners": [
    {
      "relationTo": "users",
      "value": "6031ac9e1289176380734024"
    },
    {
      "relationTo": "organizations",
      "value": "602c3c327b811235943ee12b"
    }
  ]
}
```

## Bi-directional relationships

The relationship field on its own is used to define relationships for the document that contains the relationship field, and this can be considered as a "one-way" relationship. However, the relationship field can be used in conjunction with the **Join field** to produce powerful bi-directional relationship authoring capabilities.

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { RelationshipField } from '@payloadcms/ui'
import type { RelationshipFieldServerComponent } from 'payload'

export const CustomRelationshipFieldServer: RelationshipFieldServerComponent =
  ({ clientField, path, schemaPath, permissions }) => {
    return (
      <RelationshipField
        field={clientField}
        path={path}
        schemaPath={schemaPath}
        permissions={permissions}
      />
    )
  }
```

**Client Component**:
```tsx
'use client'
import React from 'react'
import { RelationshipField } from '@payloadcms/ui'
import type { RelationshipFieldClientComponent } from 'payload'

export const CustomRelationshipFieldClient: RelationshipFieldClientComponent = (
  props,
) => {
  return <RelationshipField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { RelationshipFieldLabelServerComponent } from 'payload'

export const CustomRelationshipFieldLabelServer: RelationshipFieldLabelServerComponent =
  (clientField, path) => {
    return (
      <FieldLabel
        label={clientField?.label || clientField?.name}
        path={path}
        required={clientField?.required}
      />
    )
  }
```

**Client Component**:
```tsx
'use client'
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { RelationshipFieldLabelClientComponent } from 'payload'

export const CustomRelationshipFieldLabelClient: RelationshipFieldLabelClientComponent =
  ({ field, path }) => {
    return (
      <FieldLabel
        label={field?.label || field?.name}
        path={path}
        required={field?.required}
      />
    )
  }
```
