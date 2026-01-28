# Converting Lexical to JSX

Payload provides a `RichText` component specifically for rendering Lexical data as JSX/React components. It includes built-in converters for standard nodes and can be extended for custom blocks and overrides.

## Basic Usage

Install the React utilities:
```bash
pnpm install @payloadcms/richtext-lexical
```

Render the document:
```tsx
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const MyComponent = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} />
}
```

> **Note**: Ensure your query `depth` is high enough to populate relationships (like uploads) that the JSX converter needs to render properly.

---

## Handling Internal Links

By default, Payload doesn't know your frontend routing structure. To render internal links correctly, you must provide an `internalDocToHref` function.

```tsx
import { RichText, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'

const jsxConverters = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({
    internalDocToHref: ({ linkNode }) => {
      const { relationTo, value } = linkNode.fields.doc
      // map slugs to your actual frontend routes
      return relationTo === 'posts' ? `/posts/${value.slug}` : `/${value.slug}`
    },
  }),
})

// Pass to the RichText component
<RichText converters={jsxConverters} data={lexicalData} />
```

---

## Lexical Blocks

Custom Lexical blocks are not rendered by default. You must provide a converter keyed to the block's slug.

```tsx
const jsxConverters = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    banner: ({ node }) => (
      <div className="banner">
        <h2>{node.fields.title}</h2>
      </div>
    ),
    cta: ({ node }) => <a href={node.fields.link}>{node.fields.label}</a>,
  },
  inlineBlocks: {
    mention: ({ node }) => <span>@{node.fields.username}</span>,
  },
})
```

---

## Overriding Default Converters

You can override any built-in node converter, such as changing how uploads are rendered (e.g., using `next/image`).

```tsx
import Image from 'next/image'

const jsxConverters = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => {
    const { url, alt, width, height } = node.value
    return <Image src={url} alt={alt} width={width} height={height} />
  },
})
```

## Type Safety

For full TypeScript support with your custom blocks, extend the `DefaultNodeTypes` union:

```tsx
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

type MyNodeTypes = DefaultNodeTypes | SerializedBlockNode<MyBannerBlockType>

const converters: JSXConvertersFunction<MyNodeTypes> = ({ defaultConverters }) => ({
  // ...
})
```
