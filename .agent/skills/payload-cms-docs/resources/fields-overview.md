# Fields Overview

Fields are the building blocks of Payload. They define the schema of the Documents that will be stored in the Database, as well as automatically generate the corresponding UI within the Admin Panel.

There are many Field Types to choose from, ranging anywhere from simple text strings to nested arrays and blocks. Most fields save data to the database, while others are strictly presentational. Fields can have Custom Validations, Conditional Logic, Access Control, Hooks, and so much more.

Fields can be endlessly customized in their appearance and behavior without affecting their underlying data structure. Fields are designed to withstand heavy modification or even complete replacement through the use of Custom Field Components.

To configure fields, use the `fields` property in your Collection or Global config:

```typescript
import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  // ...
  fields: [
    
    // ...
  ],
}
```

## Field Types

Payload provides a wide variety of built-in Field Types, each with its own unique properties and behaviors that determine which values it can accept, how it is presented in the API, and how it will be rendered in the Admin Panel.

There are three main categories of fields in Payload:

1.  **Data Fields**
2.  **Presentational Fields**
3.  **Virtual Fields**

To begin writing fields, first determine which Field Type best supports your application. Then author your field accordingly using the Field Options for your chosen field type.

### Data Fields

Data Fields are used to store data in the Database. All Data Fields have a `name` property. This is the key that will be used to store the field's value.

Here are the available Data Fields:

- **Array** - for repeating content, supports nested fields
- **Blocks** - for block-based content, supports nested fields
- **Checkbox** - saves boolean true / false values
- **Code** - renders a code editor interface that saves a string
- **Date** - renders a date picker and saves a timestamp
- **Email** - ensures the value is a properly formatted email address
- **Group** - nests fields within a keyed object
- **JSON** - renders a JSON editor interface that saves a JSON object
- **Number** - saves numeric values
- **Point** - for location data, saves geometric coordinates
- **Radio** - renders a radio button group that allows only one value to be selected
- **Relationship** - assign relationships to other collections
- **Rich Text** - renders a fully extensible rich text editor
- **Select** - renders a dropdown / picklist style value selector
- **Tabs (Named)** - similar to group, but renders nested fields within a tabbed layout
- **Text** - simple text input that saves a string
- **Textarea** - similar to text, but allows for multi-line input
- **Upload** - allows local file and image upload

### Presentational Fields

Presentational Fields do not store data in the database. Instead, they are used to organize and present other fields in the Admin Panel, or to add custom UI components.

Here are the available Presentational Fields:

- **Collapsible** - nests fields within a collapsible component
- **Row** - aligns fields horizontally
- **Tabs (Unnamed)** - nests fields within a tabbed layout. It is not presentational if the tab has a name.
- **Group (Unnamed)** - nests fields within a keyed object. It is not presentational if the group has a name.
- **UI** - blank field for custom UI components

### Virtual Fields

Virtual fields display data that is not stored in the database, but is computed or derived from other fields.

Here are the available Virtual Fields:

- **Join** - achieves two-way data binding between fields

> **Tip**: Don't see a built-in field type that you need? Build it! Using a combination of Field Validations and Custom Components, you can override the entirety of how a component functions within the Admin Panel to effectively create your own field type.

## Virtual Field Configuration

While Join fields are purpose-built virtual field types, any field type can be made virtual by adding the `virtual` property to its configuration. This allows you to create computed or relationship-derived fields that appear in API responses without being stored in the database.

Virtual fields are populated during API responses and can be used in the Admin Panel, but their values are not persisted to the database. This makes them ideal for displaying read-only computed data, relationship summaries, or formatted versions of existing field data.

### Boolean Virtual Fields

When `virtual` is set to `true`, the field becomes virtual but doesn't automatically populate any data. You'll typically use Field-level Hooks to compute and populate the field's value:

```typescript
{
  name: 'fullName',
  type: 'text',
  virtual: true,
  hooks: {
    afterRead: [
      ({ siblingData }) => {
        return `${siblingData.firstName} ${siblingData.lastName}`
      }
    ]
  }
}
```

### String Path Virtual Fields

When `virtual` is set to a string path, it creates a "virtual relationship field" that automatically resolves to data from another field in the document. This is particularly useful for displaying relationship data:

```typescript
{
  name: 'authorName',
  type: 'text',
  virtual: 'author.name' // Resolves to the 'name' field of the 'author' relationship
}
```

**Virtual Path Syntax**

Virtual paths use dot notation to traverse relationships and nested data:

- `author.name` - Gets the name field from the author relationship
- `author.profile.bio` - Gets the bio field from a nested profile object within the author relationship
- `categories.title` - For hasMany relationships, returns an array of title values
- `request.additionalStakeholders.email` - traverses multiple relationship levels

> **Important**: When using virtual path fields, ensure that the referenced relationship field exists in your schema. Virtual paths like `author.name` require an `author` relationship field to be defined, otherwise the virtual field will not resolve properly.

## Field Options

All fields require at least the `type` property. This matches the field to its corresponding Field Type to determine its appearance and behavior within the Admin Panel. Each Field Type has its own unique set of options based on its own type.

To set a field's type, use the `type` property in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text', 
  name: 'myField',
}
```

### Field Names

All Data Fields require a `name` property. This is the key that will be used to store and retrieve the field's value in the database. This property must be unique amongst this field's siblings.

The following field names are forbidden and cannot be used:

- `__v`
- `salt`
- `hash`
- `file`
- `status` - with Postgres Adapter and when drafts are enabled

### Field-level Hooks

In addition to being able to define Hooks on a document-level, you can define extremely granular logic field-by-field.

To define Field-level Hooks, use the `hooks` property in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  hooks: {
    // ...
  },
}
```

### Field-level Access Control

In addition to being able to define Access Control on a document-level, you can define extremely granular permissions field-by-field.

To define Field-level Access Control, use the `access` property in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  access: {
    // ...
  },
}
```

### Default Values

Fields can be optionally prefilled with initial values. This is used in both the Admin Panel as well as API requests to populate missing or undefined field values during the create or update operations.

To set a field's default value, use the `defaultValue` property in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  defaultValue: 'Hello, World!', 
}
```

Default values can be defined as a static value or a function that returns a value. When a `defaultValue` is defined statically, Payload's Database Adapters will apply it to the database schema or models.

Functions can be written to make use of the following argument properties:

- `user` - the authenticated user object
- `locale` - the currently selected locale string
- `req` - the PayloadRequest object

### Validation

Fields are automatically validated based on their Field Type and other Field Options such as required or min and max value constraints. If needed, however, field validations can be customized or entirely replaced by providing your own custom validation functions.

To set a custom field validation function, use the `validate` property in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (value) => Boolean(value) || 'This field is required', 
}
```

Custom validation functions should return either `true` or a string representing the error message to display in API responses.

**Validation Context**

The `ctx` argument contains full document data, sibling field data, the current operation, and other useful information such as currently authenticated user:

```typescript
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (val, { user }) =>
    Boolean(user) || 'You must be logged in to save this field',
}
```

### Admin Options

You can customize the appearance and behavior of fields within the Admin Panel through the `admin` property of any Field Config:

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionConfig: CollectionConfig = {
  // ...
  fields: [
    // ...
    {
      name: 'myField',
      type: 'text',
      admin: {
        
        // ...
      },
    },
  ],
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **condition** | Programmatically show / hide fields based on other fields. |
| **components** | All Field Components can be swapped out for Custom Components that you define. |
| **description** | Helper text to display alongside the field to provide more information for the editor. |
| **position** | Specify if the field should be rendered in the sidebar by defining `position: 'sidebar'`. |
| **width** | Restrict the width of a field. You can pass any string-based value here, be it pixels, percentages, etc. |
| **style** | CSS Properties to inject into the root element of the field. |
| **className** | Attach a CSS class attribute to the root DOM element of a field. |
| **readOnly** | Setting a field to readOnly has no effect on the API whatsoever but disables the admin component's editability to prevent editors from modifying the field's value. |
| **disabled** | If a field is disabled, it is completely omitted from the Admin Panel entirely. |
| **disableBulkEdit** | Set disableBulkEdit to true to prevent fields from appearing in the select options when making edits for multiple documents. Defaults to true for UI fields. |
| **disableGroupBy** | Set disableGroupBy to true to prevent fields from appearing in the list view groupBy options. Defaults to false. |
| **disableListColumn** | Set disableListColumn to true to prevent fields from appearing in the list view column selector. Defaults to false. |
| **disableListFilter** | Set disableListFilter to true to prevent fields from appearing in the list view filter options. Defaults to false. |
| **hidden** | Will transform the field into a hidden input type. Its value will still submit with requests in the Admin Panel, but the field itself will not be visible to editors. |

### Conditional Logic

You can show and hide fields based on what other fields are doing by utilizing conditional logic on a field by field basis. The `condition` property on a field's admin config accepts a function.

The condition function should return a boolean that will control if the field should be displayed or not.

Example:

```typescript
{
  fields: [
    {
      name: 'enableGreeting',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'greeting',
      type: 'text',
      admin: {
        condition: (data, siblingData, { blockData, path, user }) => {
          if (data.enableGreeting) {
            return true
          } else {
            return false
          }
        },
      },
    },
  ]
}
```

## Custom Components

Within the Admin Panel, fields are represented in distinct places. To swap in Field Components with your own, use the `admin.components` property in your Field Config.

The following options are available:

- **Field**: The form field rendered of the Edit View.
- **Cell**: The table cell rendered of the List View.
- **Filter**: The filter component rendered in the List View.
- **Label**: Override the default Label of the Field Component.
- **Error**: Override the default Error of the Field Component.
- **Diff**: Override the default Diff component rendered in the Version Diff View.
- **Description**: Override the default Description of the Field Component.
- **beforeInput**: An array of elements that will be added before the input of the Field Component.
- **afterInput**: An array of elements that will be added after the input of the Field Component.

**Sending and receiving values from the form**

When swapping out the Field component, you are responsible for sending and receiving the field's value from the form itself.

To do so, import the `useField` hook from `@payloadcms/ui` and use it to manage the field's value:

```tsx
'use client'
import { useField } from '@payloadcms/ui'

export const CustomTextField: React.FC = () => {
  const { value, setValue } = useField() 

  return <input onChange={(e) => setValue(e.target.value)} value={value} />
}
```
