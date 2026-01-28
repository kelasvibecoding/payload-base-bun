# Converting Lexical to Plaintext

Payload provide a utility to convert Lexical rich text data to plaintext. This is useful for generating search indexes, SEO descriptions, or simple text previews.

## Basic Usage

To convert rich text data to plaintext, use the `convertLexicalToPlaintext` function from `@payloadcms/richtext-lexical/plaintext`.

```typescript
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

// Your richtext data
const data: SerializedEditorState = { ... }

const plaintext = convertLexicalToPlaintext({ data })
```

---

## Custom Converters

You can pass a `converters` object to customize how specific nodes (like custom blocks or links) are represented in plaintext.

```typescript
import {
  convertLexicalToPlaintext,
  type PlaintextConverters,
} from '@payloadcms/richtext-lexical/plaintext'

const converters: PlaintextConverters = {
  // Handle custom blocks
  blocks: {
    banner: ({ node }) => {
      return `[BANNER: ${node.fields.title}]`
    },
  },
  // Customize built-in nodes
  link: ({ node }) => {
    return `${node.fields.url}`
  },
}

const plaintext = convertLexicalToPlaintext({
  converters,
  data,
})
```

---

## Default Behavior (Heuristics)

Unlike the JSX or HTML converters, the plaintext converter ignores most formatting and focuses on text extraction. If a node does not have an explicit converter defined, Payload uses the following rules:

1.  **Text Field**: If the node has a `text` field, its value is used.
2.  **Children**: If the node has a `children` field, the converter recursively processes the children.
3.  **Special Nodes**:
    - **Paragraph**: Inserts a newline character.
    - **Tab**: Inserts a tab character.
4.  **Ignored**: If a node has neither text nor children and no custom converter, it is ignored.
