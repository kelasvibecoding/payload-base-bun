# Live Preview Overview

Live Preview allows you to render your frontend application directly within the Payload Admin Panel. As you type, changes take effect in real-time without needing to save or publish.

## How it Works
Payload renders an `iframe` that loads your frontend application. The Admin Panel communicates with your app via `window.postMessage` events emitted on every change. Your app listens for these events and re-renders with the incoming data.

## Configuration

You can enable Live Preview globally in the root Payload config or on individual collections and globals.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    livePreview: {
      url: 'http://localhost:3000', // The URL of your frontend
      collections: ['pages', 'posts'], // Enabled collections
      globals: ['header', 'footer'],  // Enabled globals
    },
  },
})
```

## Options

### URL
The `url` property can be a string or a function that returns a string.

#### Dynamic URLs
Functions are useful for multi-tenant apps, localization, or complex routing.

```typescript
url: ({ data, collectionConfig, locale }) => {
  const slug = data.slug === 'home' ? '' : data.slug
  const localeQuery = locale ? `?locale=${locale.code}` : ''
  return `http://localhost:3000/${collectionConfig.slug}/${slug}${localeQuery}`
}
```

- **Relative URLs**: If you return a relative URL (e.g., `/posts/my-post`), Payload will automatically prepend the protocol and domain from your browser window.
- **Conditional Rendering**: Return `null` or `undefined` from the `url` function to disable Live Preview for specific users or documents (similar to access control).

### Breakpoints
Define "device sizes" for the preview window. These appear as options in the preview toolbar.

```typescript
breakpoints: [
  {
    label: 'Mobile',
    name: 'mobile',
    width: 375,
    height: 667,
  },
  {
    label: 'Tablet',
    name: 'tablet',
    width: 768,
    height: 1024,
  },
]
```

## Integration with Frontend
To make your frontend "live," you must use the Payload Live Preview hooks (like `useLivePreview`) in your React/Next.js application to listen for the message events and update the state.
