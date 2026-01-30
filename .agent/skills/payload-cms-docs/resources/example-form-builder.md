# Example: Form Builder Plugin

Implements the official `@payloadcms/plugin-form-builder` to manage dynamic forms.

## Functionality
- **Dynamic Forms**: Allows editors to create forms with arbitrary fields (text, checkbox, select, email).
- **Submissions**: Automatically saves form entries to a `formSubmissions` collection.
- **Notifications**: Sends automated emails to both the admin and the submitter.

## Configuration & Blocks

### 1. Plugin Setup
Enable the form builder and customize the available field types.
```typescript
// payload.config.ts
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

export default buildConfig({
  plugins: [
    formBuilderPlugin({
      fields: {
        payment: false,
      },
      formOverrides: {
        fields: undefined,
      },
    }),
  ],
})
```

### 2. Embedding Forms in Layout Blocks
Allows editors to place a form anywhere on a page using a standard block.
```typescript
// blocks/Form/index.ts
export const FormBlock: Block = {
  slug: 'formBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'introContent',
      type: 'richText',
    },
  ],
}
```

## Implementation Workflow
- **Editor Experience**: Editors create a form in the "Forms" collection, then go to a Page and add a "Form Block", selecting the form they created.
- **Frontend Rendering**: Your frontend receives the form relationship data (fields, validation, layout) and renders the actual HTML `<form>` component.
- **Submissions**: When the user clicks "Submit", the frontend sends a POST request to `/api/form-submissions`.
