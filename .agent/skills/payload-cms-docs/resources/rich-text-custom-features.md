# Custom Lexical Features

Payload's Lexical editor is modular and extensible. You can build custom features to add new nodes, toolbar buttons, slash menu items, or specialized behaviors.

> **Note**: Before building a custom feature, check if you can achieve your goal using the **BlocksFeature**. If you just need custom React components in the editor, blocks are the recommended approach.

## Structure of a Feature

A Lexical feature consists of two main parts:
1.  **Server Feature**: The entry point. Handles nodes, HTML conversion, validation, and i18n.
2.  **Client Feature**: Handles the UI, toolbar items, slash menu, and React components for nodes.

### Server Feature (`feature.server.ts`)

```typescript
import { createServerFeature } from '@payloadcms/richtext-lexical'

export const MyFeature = createServerFeature({
  key: 'myFeature',
  feature: {
    // translations available under lexical:myFeature:label
    i18n: {
      en: { label: 'My Feature' },
    },
    // Register the client-side part of the feature
    ClientFeature: './feature.client#MyClientFeature',
    // Register nodes for headless operations (HTML/Markdown conversion)
    nodes: [
       createNode({ node: MyNode, converters: { html: { ... } } })
    ],
  },
})
```

### Client Feature (`feature.client.ts`)

```typescript
'use client'
import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import { MyNode } from './nodes/MyNode'

export const MyClientFeature = createClientFeature({
  nodes: [MyNode], // Register node class for the browser
  toolbarFixed: {
    groups: [ ... ] // Add buttons to the fixed toolbar
  },
  slashMenu: {
    groups: [ ... ] // Add items to the "/" menu
  },
})
```

---

## Nodes

Nodes define the data structure and rendering of content.
- Use `DecoratorNode` to render React components.
- Use `ElementNode` for parent nodes that contain children (like lists or quotes).
- Use `TextNode` for specialized text formatting.

**Important**: Import Lexical utilities from `@payloadcms/richtext-lexical/lexical/*`, not directly from `@lexical/*` packages.

---

## UI Integration

### Toolbar Items
You can add items to both the **Fixed** (top) and **Inline** (floating) toolbars.

```typescript
toolbarFixed: {
  groups: [
    toolbarAddDropdownGroupWithItems([
      {
        key: 'myButton',
        label: 'Insert Node',
        onSelect: ({ editor }) => {
          editor.dispatchCommand(INSERT_MY_NODE_COMMAND, undefined)
        },
      },
    ]),
  ],
}
```

### Slash Menu Items
Allows users to trigger actions by typing `/`.

```typescript
slashMenu: {
  groups: [
    slashMenuBasicGroupWithItems([
      {
        key: 'myNode',
        label: 'My Feature',
        keywords: ['extra', 'feature'],
        onSelect: ({ editor }) => { ... },
      },
    ]),
  ],
}
```

---

## Markdown Transformers

Transformers allow you to convert between Markdown and Lexical nodes.
- **Server**: Used when converting data via the API.
- **Client**: Triggered when a user types a specific pattern (e.g., typing `--- ` to create a horizontal rule).

```typescript
const MyTransformer: ElementTransformer = {
  type: 'element',
  regExp: /^\+\+\+\s*$/, // match +++
  replace: (parentNode) => {
    parentNode.replace($createMyNode())
  },
}
```

---

## Plugins

Plugins are React components that run inside the Lexical context. They are used to register **listeners**, **transforms**, or **commands**.

```tsx
export const MyPlugin: PluginComponent = () => {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    return editor.registerCommand(MY_COMMAND, () => { ... }, PRIORITY)
  }, [editor])
  return null
}
```

## Props & Serialization

To pass data from the server feature to the client feature:
1.  Define props in the server config.
2.  Return them in `clientFeatureProps`.
3.  Ensure they are **serializable** (no functions or complex classes).
