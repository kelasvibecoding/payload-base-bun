# Uploads Overview

Payload provides a powerful system for file uploads, storage, and management. By enabling uploads on a collection, Payload automatically handles file metadata, thumbnails, and image resizing.

## Enabling Uploads

To enable uploads, add the `upload` property to your collection config.

```typescript
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media', // Directory to store files (relative to config or absolute)
    mimeTypes: ['image/*'], // Restrict file types
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
      },
    ],
    adminThumbnail: 'thumbnail', // Which size to use for admin UI previews
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

## Automatically Generated Fields
When uploads are enabled, Payload adds several read-only fields to your collection:
- `filename`: The name of the file stored on disk.
- `mimeType`: The MIME type of the file (e.g., `image/jpeg`).
- `filesize`: The size of the file in bytes.
- `width` / `height`: Dimensions (for images only).
- `sizes`: An array containing metadata for all defined `imageSizes`.

## Image Manipulation (Sharp)
Payload uses the `sharp` library for all image processing. You can pass `resizeOptions`, `formatOptions`, and `trimOptions` directly to the upload config to control how images are processed.

```typescript
upload: {
  formatOptions: {
    format: 'webp',
    options: { quality: 80 },
  },
}
```

## Admin UI Features
- **Crop**: Built-in tool to crop images before they are saved.
- **Focal Point**: Allows editors to select the focal point of an image for smarter cropping in CSS.
- **Thumbnails**: Displayed in the List View and Edit View.

## Uploading Files

### Local API
Useful for seeding or programmatic uploads.
```typescript
await payload.create({
  collection: 'media',
  data: { alt: 'A beautiful sunset' },
  filePath: path.resolve(__dirname, './sunset.jpg'),
})
```

### REST API
Uploads must be sent as `multipart/form-data`.
```javascript
const formData = new FormData()
formData.append('file', fileInput.files[0])
formData.append('_payload', JSON.stringify({ alt: 'Description' }))

fetch('/api/media', {
  method: 'POST',
  body: formData,
})
```

## Access Control
Upload collections respect standard `read` access control. If a user doesn't have `read` access to a document in the Media collection, they cannot access the file URL either, provided you are using Payload's default static file serving.
