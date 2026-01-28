# Blocks Field

The Blocks Field is one of the most flexible tools in Payload. It stores an array of objects, where each object is a “block” with its own schema. Unlike a simple array (where every item looks the same), blocks let you mix and match different content types in any order.

This makes Blocks perfect for building dynamic, editor-friendly experiences, such as:

- A page builder with blocks like Quote, CallToAction, Slider, or Gallery.
- A form builder with block types like Text, Select, or Checkbox.
- An event agenda where each timeslot could be a Break, Presentation, or BreakoutSession.

To add a Blocks Field, set the type to `blocks` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyBlocksField: Field = {
  // ...
  type: 'blocks',
  blocks: [
    // ...
  ],
}
```

This page is divided into two parts: first, the settings of the Blocks Field, and then the settings of the blocks inside it.

## Block Field

### Block Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as the heading in the Admin Panel or an object with keys for each language. Auto-generated from name if not defined. |
| **blocks \*** | Array of block configs to be made available to this field. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **minRows** | A number for the fewest allowed items during validation when a value is present. |
| **maxRows** | A number for the most allowed items during validation when a value is present. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API response or the Admin Panel. |
| **defaultValue** | Provide an array of block data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. If enabled, a separate, localized set of all data within this field will be kept, so there is no need to specify each nested field as localized. |
| **unique** | Enforce that each entry in the Collection has a unique value for this field. |
| **labels** | Customize the block row labels appearing in the Admin dashboard. |
| **admin** | Admin-specific configuration. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Block Admin Options

To customize the appearance and behavior of the Blocks Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyBlocksField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Blocks Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Option | Description |
| :--- | :--- |
| **initCollapsed** | Set the initial collapsed state |
| **isSortable** | Disable order sorting by setting this value to false |

#### Customizing the way your block is rendered in Lexical

If you're using this block within the Lexical editor, you can also customize how the block is rendered in the Lexical editor itself by specifying custom components.

- `admin.components.Label` - pass a custom React component here to customize the way that the label is rendered for this block
- `admin.components.Block` - pass a component here to completely override the way the block is rendered in Lexical with your own component

This is super handy if you'd like to present your editors with a very deliberate and nicely designed block "preview" right in your rich text.

## Blocks Items

### Config Options

Blocks are defined as separate configs of their own.

> **Tip**: Best practice is to define each block config in its own file, and then import them into your Blocks field as necessary. This way each block config can be easily shared between fields. For instance, using the "layout builder" example, you might want to feature a few of the same blocks in a Post collection as well as a Page collection. Abstracting into their own files trivializes their reusability.

| Option | Description |
| :--- | :--- |
| **slug \*** | Identifier for this block type. Will be saved on each block as the `blockType` property. |
| **fields \*** | Array of fields to be stored in this block. |
| **labels** | Customize the block labels that appear in the Admin dashboard. Auto-generated from slug if not defined. Alternatively you can use admin.components.Label for greater control. |
| **imageURL** | Provide a custom image thumbnail URL to help editors identify this block in the Admin UI. The image will be displayed in a 3:2 aspect ratio container and cropped using object-fit: cover if needed. |
| **imageAltText** | Customize this block's image thumbnail alt text. |
| **interfaceName** | Create a top level, reusable Typescript interface & GraphQL type. |
| **graphQL.singularName** | Text to use for the GraphQL schema name. Auto-generated from slug if not defined. NOTE: this is set for deprecation, prefer interfaceName. |
| **dbName** | Custom table name for this block type when using SQL Database Adapter (Postgres). Auto-generated from slug if not defined. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

> `*` An asterisk denotes that a property is required.

### Block Image Guidelines

When providing a custom thumbnail via `imageURL`, it's important to understand how images are displayed in the Admin UI to ensure they look correct.

- **Aspect Ratio**: 3:2
- **Scaling**: `object-fit: cover`
- **Recommendations**: Use 3:2 images (e.g. 480x320), center content, provide alt text.

```typescript
const QuoteBlock: Block = {
  slug: 'quote',
  imageURL: 'https://example.com/thumbnails/quote-block-480x320.jpg',
  imageAltText: 'Quote block with text and attribution',
  fields: [
    {
      name: 'quoteText',
      type: 'text',
      required: true,
    },
  ],
}
```

### Admin Options

Blocks are not fields, so they don’t inherit the base properties shared by all fields (not to be confused with the Blocks Field, documented above, which does). Here are their available admin options:

| Option | Description |
| :--- | :--- |
| **components.Block** | Custom component for replacing the Block, including the header. |
| **components.Label** | Custom component for replacing the Block Label. |
| **disableBlockName** | Hide the blockName field by setting this value to true. |
| **group** | Text or localization object used to group this Block in the Blocks Drawer. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

### blockType, blockName, and block.label

Each block stores two pieces of data alongside your fields. The `blockType` identifies which schema to use and it is exactly the block’s slug. The `blockName` is an optional label you can give to a block to make editing and scanning easier.

The label is shared by all blocks of the same type and is defined in the block config via label with a fallback to slug. On the other hand, the blockName is specific to each block individually. You can hide the editable name with `admin.disableBlockName`.

## Custom Components

### Field

**Server Component**:

```tsx
import type React from 'react'
import { BlocksField } from '@payloadcms/ui'
import type { BlocksFieldServerComponent } from 'payload'

export const CustomBlocksFieldServer: BlocksFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <BlocksField
      field={clientField}
      path={path}
      schemaPath={schemaPath}
      permissions={permissions}
    />
  )
}
```

**Client Component**:

```tsx
'use client'
import React from 'react'
import { BlocksField } from '@payloadcms/ui'
import type { BlocksFieldClientComponent } from 'payload'

export const CustomBlocksFieldClient: BlocksFieldClientComponent = (props) => {
  return <BlocksField {...props} />
}
```

### Label

**Server Component**:

```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { BlocksFieldLabelServerComponent } from 'payload'

export const CustomBlocksFieldLabelServer: BlocksFieldLabelServerComponent = ({
  clientField,
  path,
}) => {
  return (
    <FieldLabel
      label={clientField?.label || clientField?.name}
      path={path}
      required={clientField?.required}
    />
  )
}
```

**Client Component**:

```tsx
'use client'
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { BlocksFieldLabelClientComponent } from 'payload'

export const CustomBlocksFieldLabelClient: BlocksFieldLabelClientComponent = ({
  label,
  path,
  required,
}) => {
  return (
    <FieldLabel
      label={field?.label || field?.name}
      path={path}
      required={field?.required}
    />
  )
}
```

## Example

```typescript
import { Block, CollectionConfig } from 'payload'

const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },
  ],
}
```

## Block References

If you have multiple blocks used in multiple places, your Payload Config can grow in size, potentially sending more data to the client and requiring more processing on the server. However, you can optimize performance by defining each block once in your Payload Config and then referencing its slug wherever it's used instead of passing the entire block config.

To do this, define the block in the `blocks` array of the Payload Config. Then, in the Blocks Field, pass the block slug to the `blockReferences` array - leaving the `blocks` array empty for compatibility reasons.

```typescript
import { buildConfig } from 'payload'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'

// Payload Config
const config = buildConfig({
  // Define the block once
  blocks: [
    {
      slug: 'TextBlock',
      fields: [
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
  ],
  collections: [
    {
      slug: 'collection1',
      fields: [
        {
          name: 'content',
          type: 'blocks',
          // Reference the block by slug
          blockReferences: ['TextBlock'],
          blocks: [], // Required to be empty, for compatibility reasons
        },
      ],
    },
    // ...
  ],
})
```

> **Reminder**: Blocks referenced in the `blockReferences` array are treated as isolated from the collection / global config.

## Conditional Blocks

Blocks can be conditionally enabled using the `filterOptions` property on the blocks field. It allows you to provide a function that returns which block slugs should be available based on the given context.

**Behavior**:
- `filterOptions` is re-evaluated as part of the form state request, whenever the document data changes.
- If a block is present in the field but no longer allowed by `filterOptions`, a validation error will occur when saving.

**Example**:
```typescript
{
  name: 'blocksWithDynamicFilterOptions',
  type: 'blocks',
  filterOptions: ({ siblingData }) => {
    return siblingData?.enabledBlocks?.length
      ? [siblingData.enabledBlocks] // allow only the matching block
      : true // allow all blocks if no value is set
  },
  blocks: [
    { slug: 'block1', fields: [{ type: 'text', name: 'block1Text' }] },
    { slug: 'block2', fields: [{ type: 'text', name: 'block2Text' }] },
    { slug: 'block3', fields: [{ type: 'text', name: 'block3Text' }] },
    // ...
  ],
}
```
