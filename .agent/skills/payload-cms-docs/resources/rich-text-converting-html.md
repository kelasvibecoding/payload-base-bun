# Converting Lexical to HTML

Payload provides utilities to convert Lexical rich text data to HTML on-demand or automatically via virtual fields.

## On-demand Conversion (Recommended)

Generating HTML on-demand is the preferred method as it avoids duplicate data in your database.

### Synchronous Conversion
Use `convertLexicalToHTML` when your data is already fully populated (e.g., using a high `depth` in your query).

```tsx
'use client'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

export const MyComponent = ({ data }) => {
  const html = convertLexicalToHTML({ data })
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
```

### Asynchronous Conversion (Dynamic Population)
Use `convertLexicalToHTMLAsync` if you need to fetch related data (like uploads or internal links) during the conversion process.

```tsx
import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'
import { getPayloadPopulateFn } from '@payloadcms/richtext-lexical'

const html = await convertLexicalToHTMLAsync({
  data,
  populate: await getPayloadPopulateFn({
    payload,
    depth: 1,
  }),
})
```

---

## The `lexicalHTMLField` Helper

The `lexicalHTMLField()` helper creates a virtual field that automatically provides an HTML version of your JSON content. It is updated every time the document is read via an `afterRead` hook.

```typescript
import { lexicalHTMLField } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    lexicalHTMLField({
      htmlFieldName: 'content_html',
      lexicalFieldName: 'content',
    }),
  ],
}
```

---

## Converting Custom Blocks

If your rich text contains custom blocks, you must provide custom HTML converters for each block slug.

```tsx
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

const htmlConverters = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    banner: ({ node }) => (
      `<div class="banner"><h1>${node.fields.title}</h1></div>`
    ),
  },
})

const html = convertLexicalToHTML({
  data,
  converters: htmlConverters,
})
```

---

## Converting HTML to Lexical

To import legacy HTML content into a Lexical editor state, use `convertHTMLToLexical`. This requires `jsdom`.

```typescript
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

const lexicalJSON = await convertHTMLToLexical({
  html: '<h1>Hello</h1><p>World</p>',
  editorConfig: await editorConfigFactory.default({ config }),
  JSDOM,
})
```
