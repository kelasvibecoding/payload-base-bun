# Example: Whitelabeling the Admin UI

Shows how to brand the Payload Admin Panel to match your project's identity.

## Branding Options
- **Graphics**: Customize the `Logo` and `Icon` globally.
- **Favicon**: Change the browser tab icon.
- **Title Suffix**: Add your app name to the browser title.
- **OG Metadata**: Customize the preview when sharing the admin URL.

## Branding samples

### 1. Meta & Visual Config
```typescript
// payload.config.ts
export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- Acme Corp',
      icons: [{ rel: 'icon', url: '/assets/favicon.svg' }],
    },
    components: {
      graphics: {
        Icon: '/graphics/Icon#Icon',
        Logo: '/graphics/Logo#Logo',
      },
    },
  },
})
```

### 2. Custom Logo Component
```tsx
// graphics/Logo/index.tsx
import React from 'react'

export const Logo: React.FC = () => (
  <img 
    src="/assets/logo.png" 
    alt="Acme Logo" 
    style={{ width: '150px' }} 
  />
)
```

## Benefits
- **Client Confidence**: Providing a white-labeled dashboard makes the software feel like a custom-built solution for the client.
- **Internal Branding**: Aligning the tool with your company's design language for internal projects.
