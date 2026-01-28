# Media Compression & Optimization

Optimizing media is critical for performance and storage efficiency. Payload uses **Sharp** under the hood for image processing, allowing you to automatically resize, reformat, and compress images upon upload.

## Built-in Image Optimization

Payload allows you to optimize the **original** file and all generated sizes directly through the `upload` config.

### 1. Global Optimization (Original File)
You can use `formatOptions` at the top level of the `upload` object to ensure the original file is compressed and converted immediately upon upload.

```typescript
export const Media = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    // Auto-compress and convert original to WebP
    formatOptions: {
      format: 'webp',
      options: {
        quality: 85, // Balance size/quality
        effort: 6,   // Maximize compression efficiency (1-6)
      },
    },
    focalPoint: true, // Enable UI for smart cropping
    imageSizes: [
      /* ... */
    ],
  },
}
```

### 2. Specific Image Sizes
You can also define `imageSizes` to automatically generate responsive versions of every uploaded image.

```typescript
export const Media = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
        // Compress and convert to webp
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
        formatOptions: { format: 'webp', options: { quality: 85 } },
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

## Global Compression Hook

If you want to compress the **original** file (not just the generated sizes), you can use a `beforeChange` hook to process the incoming buffer.

### Implementation Pattern

```typescript
import sharp from 'sharp'
import type { CollectionBeforeChangeHook } from 'payload'

export const compressImageHook: CollectionBeforeChangeHook = async ({ req, data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const file = req.file
    if (file && file.mimetype.startsWith('image/')) {
      // Compress the original buffer
      const compressedBuffer = await sharp(file.data)
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toBuffer()

      // Update the file data
      file.data = compressedBuffer
      file.size = compressedBuffer.length
      
      // Update extension if format changed
      if (data.filename) {
        data.filename = data.filename.replace(/\.[^/.]+$/, '.webp')
      }
    }
  }
  return data
}
```

## Best Practices

1. **Prefer WebP/AVIF**: These formats offer significantly better compression than JPEG/PNG.
2. **Set Quality Limits**: A quality setting of `80-85` is usually indistinguishable from `100` but drastically reduces file size.
3. **Disable Local Storage**: When using cloud adapters (S3, etc.), set `disableLocalStorage: true` to save server disk space.
4. **Use Content-Disposition**: Ensure images are served with correct cache headers through your CDN or Payload's middleware.
5. **Standardized Thumbnails**: Always define an `adminThumbnail` size to keep the Admin UI list views fast and lightweight.
