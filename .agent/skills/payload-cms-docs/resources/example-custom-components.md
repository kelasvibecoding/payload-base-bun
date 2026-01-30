# Example: Custom Components

This example shows how to extend the Payload Admin Panel with custom UI elements for fields, collections, and views.

## Key Features
- **Field Overrides**: Replacing default inputs with custom React components.
- **Custom Views**: Creating entire new pages within the admin panel (path-based).
- **Navigation Hooks**: Adding links to the sidebar using `afterNavLinks`.

## Component Samples

### 1. Custom Standing View
A completely standalone page within the admin panel, defined by a route.
```tsx
// components/views/CustomRootView.tsx
import type { AdminViewProps } from 'payload'
import React from 'react'

export const CustomRootView: React.FC<AdminViewProps> = () => {
  return (
    <div>
      <h1>Custom Root View</h1>
      <p>This is a completely standalone view.</p>
    </div>
  )
}
```

### 2. Sidebar Navigation Link
Adding links to the admin sidebar that point to your custom views.
```tsx
// components/afterNavLinks/LinkToCustomView.tsx
import Link from 'next/link'
import React from 'react'

export const LinkToCustomView: React.FC = () => {
  return <Link href="/admin/custom">Go to Custom View</Link>
}
```

## Implementation Patterns
1. **Server vs Client Compatibility**: 
   - **Server Components**: Ideal for static labels, descriptions, or read-only data.
   - **Client Components**: Required for interactive elements (inputs, buttons) via the `'use client'` directive.
2. **Path Mapping**: Custom views are mapped in the config to specific URLs (e.g., `/admin/custom`).
3. **Import Map**: Payload 3.0 uses an `importMap` for performance. Ensure your file paths in the config match the actual directory structure.
