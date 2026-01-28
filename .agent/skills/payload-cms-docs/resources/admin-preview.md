# Preview

Preview is a feature that allows you to generate a direct link from the Admin Panel's Edit View to your frontend application. When enabled, a "Preview" button appears with an `href` pointing to the URL you provide.

> **Note**: Preview is different from **Live Preview**. Preview generates a direct link to your app, while Live Preview loads your app within an iframe inside the Admin Panel for real-time visual feedback.

## Configuration

To add Preview, pass a function to the `admin.preview` property in any Collection or Global Config:

```typescript
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    preview: ({ slug }) => `http://localhost:3000/${slug}`,
  },
  fields: [
    { name: 'slug', type: 'text' },
  ],
}
```

### Preview Function Arguments

The preview function receives the following arguments:

| Path | Description |
| :--- | :--- |
| **doc** | The data of the document being edited (includes unsaved changes). |
| **options** | An object containing `locale`, `req`, and `token`. |

**Example using `req` for fully qualified URLs:**
```typescript
preview: (doc, { req }) => `${req.protocol}//${req.host}/${doc.slug}`
```

## Draft Preview (Next.js Guide)

Draft Preview allows you to view content before it is published by entering "Draft Mode" in your frontend.

### Step 1: Format the Preview URL
Point the preview function to a custom endpoint in your frontend that handles authentication and enables draft mode.

```typescript
admin: {
  preview: ({ slug }) => {
    const params = new URLSearchParams({
      slug,
      collection: 'pages',
      path: `/${slug}`,
      previewSecret: process.env.PREVIEW_SECRET || '',
    })
    return `/preview?${params.toString()}`
  },
}
```

### Step 2: Create the Preview Route (Next.js)
Create an API route (e.g., `/app/preview/route.ts`) to verify the secret and enable Next.js Draft Mode.

```typescript
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const previewSecret = searchParams.get('previewSecret')
  const path = searchParams.get('path')

  if (previewSecret !== process.env.PREVIEW_SECRET || !path) {
    return new Response('Unauthorized', { status: 403 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path)
}
```

### Step 3: Query Draft Content
In your frontend page, detect if Draft Mode is enabled and adjust your Payload Local API query.

```typescript
export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = await draftMode()
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    draft: isDraftMode, 
    overrideAccess: isDraftMode, // Often used to see drafts without public access
    where: { slug: { equals: slug } },
  })

  // Rendering logic...
}
```

## Conditional Preview URLs

You can hide the preview button by returning `null` from the function based on the document data.

```typescript
admin: {
  preview: (doc) => {
    // Only show preview button if the page is 'enabled'
    return doc?.enabled ? `http://localhost:3000/${doc.slug}` : null
  },
}
```
