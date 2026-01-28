# Rich Text Editor (Lexical)

Payload's primary rich text editor is based on [Lexical](https://lexical.dev/). It is highly extensible, type-safe, and allows for the integration of Payload blocks, uploads, and relationships directly within the text flow.

## Installation

```bash
pnpm install @payloadcms/richtext-lexical
```

## Initialization

You can define the default editor in your top-level Payload Config, and override it on a field-by-field basis if needed.

```typescript
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  // Root editor for all richText fields
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'posts',
      fields: [
        {
          name: 'content',
          type: 'richText',
          // Field-specific override
          editor: lexicalEditor({
             features: ({ defaultFeatures }) => [...defaultFeatures]
          }),
        },
      ],
    },
  ],
})
```

## Features

Features are the building blocks of the Lexical editor. You can add, remove, or customize features like links, uploads, and blocks.

```typescript
import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    LinkFeature({
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: 'rel',
          type: 'select',
          options: ['noopener', 'noreferrer', 'nofollow'],
        },
      ],
    }),
    BlocksFeature({
      blocks: [BannerBlock, CTAKeynote],
    }),
    UploadFeature({
      collections: {
        media: {
          fields: [
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
      },
    }),
  ],
})
```

## TypeScript Support

Every node in the Lexical editor state is fully typed. You can use the `DefaultTypedEditorState` to type the entire JSON structure returned by the field.

```typescript
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

const content: DefaultTypedEditorState = {
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Hello World' }],
      },
    ],
    // ...other required root properties
  },
}
```

## Admin Customization

The `lexicalEditor` accepts an `admin` object for UI-specific tweaks:

| Property | Description |
| :--- | :--- |
| **placeholder** | Text displayed when the editor is empty. |
| **hideGutter** | Hide the vertical line padding on the left. |
| **hideAddBlockButton** | Hide the "+" button that appears on hover. |
| **hideDraggableBlockElement** | Hide the drag handle for nodes. |

```typescript
lexicalEditor({
  admin: {
    placeholder: 'Start writing...',
    hideGutter: true,
  },
})
```

## Helper Utilities

### Detecting Empty State
Rich text data often changes from `null` to a JSON object with an empty paragraph after use. Use `hasText` to safely check if the field actually contains content.

```typescript
import { hasText } from '@payloadcms/richtext-lexical/shared'

if (hasText(fieldValue)) {
  // Render content
}
```
