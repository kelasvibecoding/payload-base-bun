# Example: Live Preview

Shows real-time content rendering directly within the Admin panel iframe.

## Key Concepts
- **postMessage**: The Admin panel sends the current form state to the frontend via window messaging.
- **breakpoints**: Defines mobile/tablet/desktop views for previewing.

## Implementation Samples

### 1. Server-side Integration (Next.js)
The most performant way to implement Live Preview is by refreshing the server-side route when the editor saves or changes content.

```tsx
// app/(app)/[slug]/page.tsx (Server Component)
export default async function Page({ params }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  
  const page = await payload.find({
    collection: 'pages',
    draft: true, // Fetch drafts for preview
    where: { slug: { equals: slug } },
  })

  return (
    <Fragment>
      <RefreshRouteOnSave />
      <main>
        <h1>{page.docs[0].title}</h1>
      </main>
    </Fragment>
  )
}
```

### 2. Client-side Refresh Component
A bridge that listens for changes from the Payload admin and triggers a router refresh.

```tsx
// app/(app)/[slug]/RefreshRouteOnSave.tsx (Client Component)
'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()
  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL}
    />
  )
}
```

## How it works
- **The Iframe**: Payload renders your frontend URL in an iframe.
- **Messaging**: Every keystroke in the admin panel sends a `postMessage` to the iframe.
- **Re-rendering**: The `RefreshRouteOnSave` or `useLivePreview` catch these messages and update the UI instantly without a full page reload.
