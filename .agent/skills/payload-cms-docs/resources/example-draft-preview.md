# Example: Draft Preview & Versions

Demonstrates how to see content changes on your frontend before they are published.

## Key Concepts
- **Versions**: Enables document history and draft status (`versions: { drafts: true }`).
- **Preview Mode**: A secure bridge between the Admin UI and the Frontend.

## Collection Config: Pages

Enables drafts and defines the secure preview URL that editors click in the admin panel.

```typescript
// collections/Pages/index.ts
export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: { drafts: true },
  admin: {
    preview: ({ slug, collection }) => {
      const params = new URLSearchParams({
        slug,
        collection,
        path: `/${slug}`,
        previewSecret: process.env.PREVIEW_SECRET,
      })
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/preview?${params}`
    },
  },
  hooks: {
    afterChange: [revalidatePage],
  },
}
```

## Revalidation Hook (ISR)

Automatically clears the Next.js cache when a page is published or unpublished.

```typescript
// hooks/revalidatePage.ts
import { revalidatePath } from 'next/cache'

export const revalidatePage: CollectionAfterChangeHook = ({ doc, previousDoc, req }) => {
  if (doc._status === 'published') {
    const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
    revalidatePath(path)
  }

  // Handle unpublishing: revalidate the old path if it was previously live
  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
    revalidatePath(oldPath)
  }

  return doc
}
```

## Frontend Logic (Next.js)

1. **Secure Access**: The `preview` route on the frontend verifies the `previewSecret` before setting the draft mode cookie.
2. **Fetching Draft Content**:
   ```typescript
   const { isEnabled } = await draftMode()
   const res = await fetch(`/api/pages?draft=${isEnabled}`, {
     headers: isEnabled ? { Authorization: `JWT ${token}` } : {}
   })
   ```
