# Client-side Live Preview

Client-side Live Preview is used for frameworks that do not support Server Components (e.g., Next.js Pages Router, React Router, Vue 3). It updates the UI instantly as you type by merging the current Admin Panel form state into your frontend data.

## How it Works
1.  The Admin Panel emits a `window.postMessage` event on every keystroke.
2.  The `useLivePreview` hook receives the "dirty" form state.
3.  The hook merges this state with your `initialData`.
4.  Your component re-renders with the live data.

## React Integration

Install the package:
```bash
npm install @payloadcms/live-preview-react
```

### Usage
Fetch your initial data as usual, then pass it to the `useLivePreview` hook.

```tsx
'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'

export const PageClient = ({ initialPage }) => {
  const { data, isLoading } = useLivePreview({
    initialData: initialPage,
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
    depth: 2, // Must match the depth of your initial fetch
  })

  // Use 'data' instead of 'initialPage' for rendering
  return <h1>{data.title}</h1>
}
```

## Vue Integration

Install the package:
```bash
npm install @payloadcms/live-preview-vue
```

### Usage
```html
<script setup lang="ts">
import { useLivePreview } from '@payloadcms/live-preview-vue'

const props = defineProps(['initialData'])

const { data } = useLivePreview({
  initialData: props.initialData,
  serverURL: "http://localhost:3000",
  depth: 2,
})
</script>

<template>
  <h1>{{ data.title }}</h1>
</template>
```

## Key Considerations

### Matching Depth
The `depth` property in the hook **must exactly match** the depth used when fetching your initial data. If they mismatch, relationship fields (like images or related posts) may disappear when you start editing.

### Resilience
Since the hook merges form state live, data might temporarily be incomplete (e.g., if a user deletes a required field's value). Use optional chaining and default values to prevent your UI from crashing:
```tsx
<h1>{data?.title || 'Untitled'}</h1>
```

## Troubleshooting
- **CORS/CSRF**: If your frontend is on a different domain or port than Payload, ensure you have configured `cors` and `csrf` in `payload.config.ts`.
- **Relationships failing to populate**: This is usually a `depth` mismatch or a CORS issue preventing the hook from fetching the populated relationship data.
