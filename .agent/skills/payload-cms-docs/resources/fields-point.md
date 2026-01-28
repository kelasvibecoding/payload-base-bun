# Point Field

The Point Field saves a pair of coordinates in the database and assigns an index for location related queries. The data structure in the database matches the GeoJSON structure to represent point. The Payload API simplifies the object data to only the `[longitude, latitude]` location.

To add a Point Field, set the type to `point` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyPointField: Field = {
  // ...
  type: 'point', 
}
```

> **Important**: The Point Field currently is not supported in SQLite.

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Used as a field label in the Admin Panel and to name the generated GraphQL type. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **index** | Build an index for this field to produce faster queries. To support location queries, point index defaults to `2dsphere`, to disable the index set to false. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'location',
      type: 'point',
      label: 'Location',
    },
  ],
}
```

## Querying

### near

In order to do query based on the distance to another point, you can use the `near` operator. When querying using the `near` operator, the returned documents will be sorted by nearest first.

### within

In order to do query based on whether points are within a specific area defined in GeoJSON, you can use the `within` operator. Example:

```typescript
const polygon: Point[] = [
  [9.0, 19.0], // bottom-left
  [9.0, 21.0], // top-left
  [11.0, 21.0], // top-right
  [11.0, 19.0], // bottom-right
  [9.0, 19.0], // back to starting point to close the polygon
]

payload.find({
  collection: 'points',
  where: {
    point: {
      within: {
        type: 'Polygon',
        coordinates: [polygon],
      },
    },
  },
})
```

### intersects

In order to do query based on whether points intersect a specific area defined in GeoJSON, you can use the `intersects` operator. Example:

```typescript
const polygon: Point[] = [
  [9.0, 19.0], // bottom-left
  [9.0, 21.0], // top-left
  [11.0, 21.0], // top-right
  [11.0, 19.0], // bottom-right
  [9.0, 19.0], // back to starting point to close the polygon
]

payload.find({
  collection: 'points',
  where: {
    point: {
      intersects: {
        type: 'Polygon',
        coordinates: [polygon],
      },
    },
  },
})
```

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { PointField } from '@payloadcms/ui'
import type { PointFieldServerComponent } from 'payload'

export const CustomPointFieldServer: PointFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <PointField
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
import { PointField } from '@payloadcms/ui'
import type { PointFieldClientComponent } from 'payload'

export const CustomPointFieldClient: PointFieldClientComponent = (props) => {
  return <PointField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { PointFieldLabelServerComponent } from 'payload'

export const CustomPointFieldLabelServer: PointFieldLabelServerComponent = ({
  clientField,
  path,
}) => {
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
import type { PointFieldLabelClientComponent } from 'payload'

export const CustomPointFieldLabelClient: PointFieldLabelClientComponent = ({
  field,
  path,
}) => {
  return (
    <FieldLabel
      label={field?.label || field?.name}
      path={path}
      required={field?.required}
    />
  )
}
```
