# Lexical Blocks

The `BlocksFeature` allows you to embed Payload's Blocks directly inside your Lexical rich text editor. This provides a way to create structured, reusable content components that can be placed both as standalone sections or inline with text.

## Basic Setup

To use blocks, include the `BlocksFeature` in your editor configuration.

```typescript
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'

export const MyRichTextField = {
  name: 'content',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
          {
            slug: 'banner',
            fields: [
              { name: 'style', type: 'select', options: ['info', 'warning'] },
              { name: 'text', type: 'text', required: true },
            ],
          },
        ],
        inlineBlocks: [
          {
            slug: 'mention',
            fields: [{ name: 'user', type: 'relationship', relationTo: 'users' }],
          },
        ],
      }),
    ],
  }),
}
```

## Blocks vs Inline Blocks

- **Regular Blocks**: Standalone, block-level elements (like a Callout or Gallery). They take up an entire line.
- **Inline Blocks**: Flow within the text of a paragraph (like a User Mention or a small Badge).

## Data Structure

Block data is stored within the Lexical JSON state. Each node contains a `fields` object with its values.

```json
{
  "type": "block",
  "fields": {
    "id": "65298b13db4ef8c744a7faaa",
    "blockType": "banner",
    "style": "warning",
    "text": "This is a warning banner."
  }
}
```

## Custom Admin UI

You can customize how blocks look and behave inside the Admin Panel using custom components.

### Custom Block Component
Use `admin.components.Block` to provide a custom React component for the editor UI.

```tsx
// MyBlockComponent.tsx
'use client'
import { BlockCollapsible, BlockEditButton, BlockRemoveButton } from '@payloadcms/richtext-lexical/client'
import { useFormFields } from '@payloadcms/ui'

export const MyBlockComponent = () => {
  const text = useFormFields(([fields]) => fields.text)
  return (
    <BlockCollapsible>
      <div>Preview: {text?.value}</div>
      <BlockEditButton />
      <BlockRemoveButton />
    </BlockCollapsible>
  )
}
```

### Composable Primitives
Payload provides helpers in `@payloadcms/richtext-lexical/client`:
- `BlockCollapsible / InlineBlockContainer`: Wrappers for the block UI.
- `BlockEditButton / InlineBlockEditButton`: Opens the field editor drawer.
- `BlockRemoveButton / InlineBlockRemoveButton`: Deletes the block from the editor.
- `BlockLabel / InlineBlockLabel`: Displays the block name or a custom label.

---

## Pre-made: CodeBlock

Payload includes a production-ready `CodeBlock` feature with syntax highlighting and language selection.

```typescript
import { BlocksFeature, CodeBlock } from '@payloadcms/richtext-lexical'

BlocksFeature({
  blocks: [
    CodeBlock({
      languages: {
        ts: 'TypeScript',
        js: 'JavaScript',
      },
    }),
  ],
})
```

## TypeScript Types

| Type | Description |
| :--- | :--- |
| **LexicalBlockClientProps** | Props for a custom block client component. |
| **LexicalInlineBlockClientProps** | Props for an inline block client component. |
| **SerializedBlockNode<T>** | The JSON type for a block node, where `T` is the block field data type. |

## Rendering

Blocks must be handled by your frontend converters. See:
- [Converting Lexical to JSX](./rich-text-converting-jsx.md)
- [Converting Lexical to HTML](./rich-text-converting-html.md)
