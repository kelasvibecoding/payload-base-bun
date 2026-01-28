# Text Field

The Text Field is one of the most commonly used fields. It saves a string to the database and provides the Admin Panel with a simple text input.

To add a Text Field, set the type to `text` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyTextField: Field = {
  // ...
  type: 'text', 
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **minLength** | Used by the default validation function to ensure values are of a minimum character length. |
| **maxLength** | Used by the default validation function to ensure values are of a maximum character length. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **hasMany** | Makes this field an ordered array of text instead of just a single text. |
| **minRows** | Minimum number of texts in the array, if hasMany is set to true. |
| **maxRows** | Maximum number of texts in the array, if hasMany is set to true. |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Text Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyTextField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Text Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Option | Description |
| :--- | :--- |
| **placeholder** | Set this property to define a placeholder string in the text input. |
| **autoComplete** | Set this property to a string that will be used for browser autocomplete. |
| **rtl** | Override the default text direction of the Admin Panel for this field. Set to true to force right-to-left text direction. |

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'pageTitle', // required
      type: 'text', // required
      required: true,
    },
  ],
}
```

## Slug Field

One common use case for the Text Field is to create a "slug" for a document. A slug is a unique, indexed, URL-friendly string that identifies a particular document, often used to construct the URL of a webpage.

Payload provides a built-in Slug Field so you don't have to built one from scratch. This field automatically generates a slug based on the value of another field, such as a title or name field. It provides UI to lock and unlock the field to protect its value, as well as to re-generate the slug on-demand.

To add a Slug Field, import the `slugField` into your field schema:

```typescript
import { slugField } from 'payload'
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  // ...
  fields: [
    // ...
    slugField(),
  ],
}
```

### Slug Config Options

| Option | Description |
| :--- | :--- |
| **name** | To be used as the slug field's name. Defaults to `slug`. |
| **overrides** | A function that receives the default fields so you can override on a granular level. |
| **checkboxName** | To be used as the name for the generateSlug checkbox field. Defaults to `generateSlug`. |
| **useAsSlug** | The name of the top-level field to use when generating the slug. This field must exist in the same collection. Defaults to `title`. |
| **localized** | Enable localization on the slug and generateSlug fields. Defaults to `false`. |
| **position** | The position of the slug field. |
| **required** | Require the slug field. Defaults to `true`. |
| **slugify** | Override the default slugify function. |

### Custom Slugify Function

You can also override the default slugify function of the slug field. This is necessary if the slug requires special treatment, such as character encoding, additional language support, etc.

```typescript
import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import slugify from 'slugify'

export const MyCollection: CollectionConfig = {
  // ...
  fields: [
    // ...
    slugField({
      slugify: ({ valueToSlugify }) =>
        slugify(valueToSlugify, {
          // ...additional `slugify` options here
        }),
    }),
  ],
}
```

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { TextField } from '@payloadcms/ui'
import type { TextFieldServerComponent } from 'payload'

export const CustomTextFieldServer: TextFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <TextField
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
import { TextField } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'

export const CustomTextFieldClient: TextFieldClientComponent = (props) => {
  return <TextField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { TextFieldLabelServerComponent } from 'payload'

export const CustomTextFieldLabelServer: TextFieldLabelServerComponent = ({
  clientField,
  path,
  required,
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
import type { TextFieldLabelClientComponent } from 'payload'

export const CustomTextFieldLabelClient: TextFieldLabelClientComponent = ({
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
