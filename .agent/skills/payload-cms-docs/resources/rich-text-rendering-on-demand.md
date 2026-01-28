# Rendering Lexical On Demand

Payload provides a `<RenderLexical />` component that allows you to render a Lexical editor dynamically. This is particularly useful for custom admin components, dashboard widgets, or any scenario where you need an editor outside the standard Document Edit view.

> **Experimental**: This component and its underlying server functions are currently experimental and may change in minor releases.

## Why Use It?

Historically, rendering Lexical on the client was difficult because Lexical in Payload is a React Server Component (RSC). Features like blocks, tables, and link drawers require the server to know the shape of nested sub-fields at render time. 

`<RenderLexical />` solves this by:
1.  Calling a server action (`render-field`) to fetch the field schema.
2.  Rendering the editor on the server for full feature support.
3.  Returning a ready-to-hydrate editor to the client.

## Basic Usage

To use this component, you must provide a `schemaPath` so the server knows which field configuration to use.

### Format of `schemaPath`
- **Collections**: `collection.<collectionSlug>.<fieldPath>`
- **Globals**: `global.<globalSlug>.<fieldPath>`

**Example**: `collection.posts.content.richText`

---

## Use Cases

### 1. Inside an existing Form
If you are building a custom UI field or component that lives inside a Payload Form, the editor will automatically register itself with the form state if the `field.name` matches.

```tsx
'use client'
import { RenderLexical, buildEditorState } from '@payloadcms/richtext-lexical/client'

export const MyComponent = () => {
  return (
    <RenderLexical
      field={{ name: 'content' }}
      initialValue={buildEditorState({ text: 'Starting text...' })}
      schemaPath="collection.pages.content"
    />
  )
}
```

### 2. Outside of a Form (Manual State)
If you need to manage the editor state yourself (e.g., in a standalone settings page or dashboard), pass `value` and `setValue`.

```tsx
'use client'
import { useState } from 'react'
import { RenderLexical, buildEditorState } from '@payloadcms/richtext-lexical/client'

export const StandaloneEditor = () => {
  const [value, setValue] = useState(() => buildEditorState({ text: '' }))

  return (
    <RenderLexical
      field={{ name: 'manualField' }}
      value={value}
      setValue={setValue}
      schemaPath="collection.posts.richText"
    />
  )
}
```

---

## Advanced Tips

### The "Render Anchor" Pattern
If you need to render an editor on demand but don't want to rely on the path of an existing field (especially if it's deeply nested in arrays or blocks), define a hidden field at the top level of your collection to act as a "schema anchor":

```typescript
// Collection Config
{
  slug: 'posts',
  fields: [
    {
      name: 'onDemandAnchor',
      type: 'richText',
      admin: { hidden: true },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, BlocksFeature({ ... })]
      })
    }
  ]
}
```

Then use `schemaPath="collection.posts.onDemandAnchor"` in your `RenderLexical` component. This ensures the server always finds the correct feature set and block schemas.
