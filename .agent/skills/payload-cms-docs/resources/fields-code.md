# Code Field

The Code Field saves a string in the database, but provides the Admin Panel with a code editor styled interface.

To add a Code Field, set the type to `code` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyBlocksField: Field = {
  // ...
  type: 'code', 
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **minLength** | Used by the default validation function to ensure values are of a minimum character length. |
| **maxLength** | Used by the default validation function to ensure values are of a maximum character length. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. See below for more detail. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Code Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyCodeField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Code Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Option | Description |
| :--- | :--- |
| **language** | This property can be set to any language listed here. |
| **editorOptions** | Options that can be passed to the monaco editor. |

## Example

`collections/ExampleCollection.ts`

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'trackingCode', // required
      type: 'code', // required
      required: true,
      admin: {
        language: 'javascript',
      },
    },
  ],
}
```

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { CodeField } from '@payloadcms/ui'
import type { CodeFieldServerComponent } from 'payload'

export const CustomCodeFieldServer: CodeFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <CodeField
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
import { CodeField } from '@payloadcms/ui'
import type { CodeFieldClientComponent } from 'payload'

export const CustomCodeFieldClient: CodeFieldClientComponent = (props) => {
  return <CodeField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { CodeFieldLabelServerComponent } from 'payload'

export const CustomCodeFieldLabelServer: CodeFieldLabelServerComponent = ({
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
import type { CodeFieldLabelClientComponent } from 'payload'

export const CustomCodeFieldLabelClient: CodeFieldLabelClientComponent = ({
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
