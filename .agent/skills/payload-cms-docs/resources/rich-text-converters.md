# Lexical Converters

Payload's rich text fields save data in JSON format. This provides maximum flexibility for storage and allows you to easily convert the data to other formats like **JSX**, **HTML**, **Plaintext**, or **Markdown/MDX**.

Many conversion processes require access to the **Lexical Editor Config**, which defines the enabled features, nodes, and behaviors for a specific field.

## Retrieving the Editor Config

Payload provides the `editorConfigFactory` from `@payloadcms/richtext-lexical` to help you obtain the necessary configuration.

### 1. Default Editor Config
To get the global default configuration defined in your root Payload config:

```typescript
import { editorConfigFactory } from '@payloadcms/richtext-lexical'

const defaultEditorConfig = await editorConfigFactory.default({ config: sanitizedPayloadConfig })
```

### 2. From a Specific Field
If you have a reference to a specific rich text field, you can extract its configuration directly:

```typescript
const fieldEditorConfig = editorConfigFactory.fromField({
  field: myRichTextFieldConfig,
})
```

### 3. From a List of Features
You can generate a configuration based on a custom set of features without needing a field reference:

```typescript
import { FixedToolbarFeature, editorConfigFactory } from '@payloadcms/richtext-lexical'

const customEditorConfig = await editorConfigFactory.fromFeatures({
  config: sanitizedPayloadConfig,
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    FixedToolbarFeature(),
  ],
})
```

---

## Example: Retrieving Config in a Hook

You might need to access the editor configuration within a field hook (e.g., to process text for a search index or summary field).

```typescript
import type { CollectionConfig, RichTextField } from 'payload'
import { editorConfigFactory } from '@payloadcms/richtext-lexical'

export const MyCollection: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'summary',
      type: 'text',
      hooks: {
        afterRead: [
          ({ siblingFields, value }) => {
            // Find the sibling richText field
            const richTextField = siblingFields.find(
              (f) => 'name' in f && f.name === 'content'
            ) as RichTextField

            if (richTextField) {
              const editorConfig = editorConfigFactory.fromField({
                field: richTextField,
              })
              // Use editorConfig for conversion logic here
            }
            return value
          },
        ],
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
```

## Conversion Formats

While the `editorConfigFactory` helps prepare the environment, specific conversion logic usually depends on the target format:

- **JSX**: Use a recursive component mapper to transform JSON nodes into React components.
- **HTML**: Utilize Lexical's internal serialization or third-party mappers.
- **Plaintext**: Recursively join text nodes while ignoring formatting/layout nodes.
- **Markdown**: Map Lexical nodes (headings, lists, links) to their markdown equivalents.
