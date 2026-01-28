# Email Field

The Email Field enforces that the value provided is a valid email address.

To create an Email Field, set the type to `email` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyEmailField: Field = {
  // ...
  type: 'email', 
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
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

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Email Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyEmailField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Email Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Property | Description |
| :--- | :--- |
| **placeholder** | Set this property to define a placeholder string for the field. |
| **autoComplete** | Set this property to a string that will be used for browser autocomplete. |

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'contact', // required
      type: 'email', // required
      label: 'Contact Email Address',
      required: true,
    },
  ],
}
```

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { EmailField } from '@payloadcms/ui'
import type { EmailFieldServerComponent } from 'payload'

export const CustomEmailFieldServer: EmailFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <EmailField
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
import { EmailField } from '@payloadcms/ui'
import type { EmailFieldClientComponent } from 'payload'

export const CustomEmailFieldClient: EmailFieldClientComponent = (props) => {
  return <EmailField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { EmailFieldLabelServerComponent } from 'payload'

export const CustomEmailFieldLabelServer: EmailFieldLabelServerComponent = ({
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
import type { EmailFieldLabelClientComponent } from 'payload'

export const CustomEmailFieldLabelClient: EmailFieldLabelClientComponent = ({
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
