# Autosave

Autosave ensures that editors never lose their work by automatically saving changes as a secondary draft version while they type.

## Configuration
Autosave requires both **Versions** and **Drafts** to be enabled.

```typescript
export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 1500, // Duration in ms to debounce saves. Default is 800.
      },
    },
  },
}
```

## How It Works
To prevent database clutter, Payload does not create a new version for every single autosave event. Instead:
1. It creates one "autosave" version.
2. Subsequent autosaves update that specific version until a manual "Save Draft" or "Publish" is performed.

## Interaction with Live Preview
If you are using **Server-side Live Preview**, decreasing the autosave interval makes the preview feel significantly faster and more responsive as updates reach the database (and thus the frontend refresh) much sooner.

## Admin UI
When enabled:
- The typical "Save Draft" button is replaced by an "Autosaved" indicator in the sidebar.
- You can optionally show the "Save Draft" button anyway using `showSaveDraftButton: true`.
