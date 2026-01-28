# Lexical Editor Features

Features are the building blocks of the Lexical editor. They define the types of nodes allowed, the formatting options available, and the UI elements (toolbar buttons, slash menu items) provided to the user.

## Features Overview

| Feature | Default | Description |
| :--- | :--- | :--- |
| **BoldFeature** | Yes | Bold text formatting (**bold**). |
| **ItalicFeature** | Yes | Italic text formatting (*italic*). |
| **UnderlineFeature** | Yes | Underlined text. |
| **LinkFeature** | Yes | Internal and external links. |
| **UploadFeature** | Yes | Block-level media/upload nodes. |
| **HeadingFeature** | Yes | Heading nodes (H1-H6). |
| **BlocksFeature** | No | Embed Payload Blocks directly in text. |
| **FixedToolbarFeature**| No | Sticky toolbar at the top of the editor. |
| **TableFeature** | No | (Experimental) Table support. |

---

## Formatting Features

### Standard Text Formatting
- **Bold, Italic, Strikethrough, Underline, Subscript, Superscript**
- **InlineCode**: `code` snippets.
- **Align**: Left, Center, Right, Justify alignment.
- **Indent**: Block-level indentation.

### Paragraph & Headings
Standard blocks for structure. `HeadingFeature` can be restricted to specific levels:

```typescript
HeadingFeature({
  enabledHeadingSizes: ['h2', 'h3'], // Only allow H2 and H3
})
```

---

## Complex Features

### LinkFeature
Supports both external URLs and internal document relationships.

```typescript
LinkFeature({
  enabledCollections: ['pages', 'posts'], // Limit internal link targets
  fields: [ // Add custom fields to the link drawer
    {
      name: 'rel',
      type: 'select',
      options: ['noopener', 'noreferrer'],
    },
  ],
})
```

### UploadFeature
Embeds media documents as blocks. You can add extra fields like captions directly to the upload node.

```typescript
UploadFeature({
  collections: {
    media: {
      fields: [
        { name: 'caption', type: 'text' },
      ],
    },
  },
})
```

### BlocksFeature
The most powerful feature, allowing you to use any Payload Block within your rich text.

```typescript
BlocksFeature({
  blocks: [Banner, CallToAction, QuoteBlock],
})
```

---

## UI Features

### InlineToolbarFeature (Default)
A floating toolbar that appears when text is selected.

### FixedToolbarFeature
A persistent toolbar pinned to the top of the field.

```typescript
FixedToolbarFeature({
  applyToFocusedEditor: true,
  disableIfParentHasFixedToolbar: true,
})
```

---

## Debugging

### TreeViewFeature
Adds a live JSON/DOM inspector below the editor. Invaluable for building custom features or debugging complex document structures.

```typescript
TreeViewFeature()
```
