# Server-side Live Preview

Server-side Live Preview is designed for frontend frameworks that support **Server Components** (e.g., Next.js App Router). It works by triggering a route refresh on the server whenever a document is saved (draft, autosave, or publish).

## How it Works
1.  The Admin Panel emits a `window.postMessage` event.
2.  Your frontend listens for this event.
3.  Your app calls a router "refresh" function (e.g., `router.refresh()` in Next.js).
4.  The page re-fetches data via the Local API (with `draft: true`) and re-hydrates the HTML.

## React / Next.js Setup

Install the package:
```bash
npm install @payloadcms/live-preview-react
```

### 1. Create a Refresh Component
Create a client component to handle the refresh logic.

```tsx
// RefreshRouteOnSave.tsx
'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export const RefreshRouteOnSave = () => {
  const router = useRouter()
  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
```

### 2. Add to your Server Page
Render the component in your page or layout.

```tsx
// page.tsx
import { RefreshRouteOnSave } from './RefreshRouteOnSave'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function Page({ params }) {
  const payload = await getPayload({ config })
  const page = await payload.findByID({
    collection: 'pages',
    id: params.id,
    draft: true, // Crucial for previewing unsaved changes
  })

  return (
    <>
      <RefreshRouteOnSave />
      <h1>{page.title}</h1>
      {/* ... */}
    </>
  )
}
```

## Optimization: Autosave
To make server-side preview feel responsive, enable **Autosave** in your collection config. This ensures that as the user types, the document is saved frequently enough to trigger the refresh event.

```typescript
// collection.config.ts
{
  versions: {
    drafts: {
      autosave: {
        interval: 375, // Lower interval for snappier preview
      },
    },
  },
}
```

## Troubleshooting
- **Iframe refuses to connect**: Check your Content Security Policy (CSP). You must whitelist your Admin Panel domain in `frame-ancestors`.
- **Updates feel slow**: Decrease the autosave interval or switch to [Client-side Live Preview](./admin-live-preview-client.md) for instant updates.
