# Converting Lexical to Markdown and MDX

Payload's Lexical editor supports bi-directional conversion between its JSON state and Markdown/MDX.

## Markdown Conversion

### Lexical to Markdown
To convert the editor state to a Markdown string, use `convertLexicalToMarkdown`. This requires the `editorConfig` for the field.

```typescript
import { convertLexicalToMarkdown, editorConfigFactory } from '@payloadcms/richtext-lexical'

const markdown = convertLexicalToMarkdown({
  data: lexicalJSON,
  editorConfig: await editorConfigFactory.default({ config }),
})
```

### Markdown to Lexical
To convert a Markdown string back into a Lexical editor state:

```typescript
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'

const lexicalJSON = convertMarkdownToLexical({
  markdown: '# My Heading\nSome text.',
  editorConfig: await editorConfigFactory.default({ config }),
})
```

---

## MDX Conversion

Payload supports MDX by allowing blocks to define their own serialization logic. This uses the `jsx` property on a `Block` definition.

### Defining a Custom Block for MDX

A block can define how it exports to MDX and how it imports from MDX.

```typescript
const BannerBlock: Block = {
  slug: 'Banner',
  fields: [
    { name: 'type', type: 'select', options: ['info', 'warning'] },
    { name: 'content', type: 'richText' },
  ],
  jsx: {
    // Lexical -> MDX
    export: ({ fields, lexicalToMarkdown }) => {
      return {
        children: lexicalToMarkdown({ editorState: fields.content }),
        props: { type: fields.type },
      }
    },
    // MDX -> Lexical
    import: ({ children, markdownToLexical, props }) => {
      return {
        type: props?.type,
        content: markdownToLexical({ markdown: children }),
      }
    },
  },
}
```

### Export Logic
The `export` function takes the block fields and returns:
- `children`: A string placed between the opening and closing MDX tags.
- `props`: An object rendered as props in the opening MDX tag.

### Import Logic
The `import` function receives the parsed MDX data:
- `children`: The string content inside the block.
- `props`: The parsed props from the opening tag.
It must return an object matching the block's `fields` structure.

---

## Example: Virtual Markdown Field

You can use an `afterRead` hook to provide a "live" Markdown representation of your rich text field without storing it in the database.

```typescript
{
  name: 'markdown_preview',
  type: 'textarea',
  admin: { hidden: true },
  hooks: {
    afterRead: [
      ({ siblingData, siblingFields }) => {
        const data = siblingData['content'] // richText field name
        if (!data) return ''
        
        return convertLexicalToMarkdown({
          data,
          editorConfig: editorConfigFactory.fromField({
            field: siblingFields.find(f => 'name' in f && f.name === 'content')
          })
        })
      }
    ],
    beforeChange: [
      ({ siblingData }) => {
        delete siblingData['markdown_preview']
        return null
      }
    ]
  }
}
```
