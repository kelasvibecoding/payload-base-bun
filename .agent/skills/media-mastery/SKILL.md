---
name: media-mastery
description: Expert guidelines for end-to-end media handling in Payload CMS and Next.js. Covers image optimization, next/image vs img, Sharp integration, and responsive media strategies.
---

# Media Mastery: Payload & Next.js

This skill provides a comprehensive source of truth for handling media and images across the entire stack.

## Resources & Documentation
- [Payload Media Optimization](./resources/payload-media-optimization.md): Sharp configs, hooks, and resizing.
- [Next.js Image Strategy](./resources/nextjs-image-strategy.md): Frontend implementation with `next/image`.

## 1. Backend: Payload Collection Setup

### imageSizes Strategy
Always define responsive sizes in your `Upload` collection to prevent the frontend from ever requesting a "raw" 5MB image.

```typescript
export const Media = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768, height: 1024, position: 'centre' },
      { name: 'og', width: 1200, height: 630, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
    formatOptions: { format: 'webp', options: { quality: 85 } },
  },
}
```

### Sharp Optimization
- **WebP Default**: Force conversion to WebP via `formatOptions`.
- **Quality**: Stick to `85` for high-end UI, `75` for user-generated content (UGC).
- **Focal Point**: Always enable `focalPoint: true` to allow manual crop adjustment in the Admin UI.

## 2. Frontend: Next.js Implementation

### Mandatory: `next/image`
Never use standard `<img>` tags for images uploaded via Payload.

**Why:**
- **Automatic WebP/AVIF**: Next.js serves the best format based on the browser.
- **CLS Prevention**: `width` and `height` are required, preventing layout shifts.
- **Lazy Loading**: Native by default.

### Implementation Pattern
```tsx
import Image from 'next/image'

export const PayloadImage = ({ media, size = 'card', priority = false }) => {
  if (!media || typeof media !== 'object') return null
  
  // Get specific size URL or fallback to original
  const src = media.sizes?.[size]?.url || media.url
  const alt = media.alt || ''
  
  return (
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
```

## 3. The "Img" Exception
Only use standard `<img>` if:
1. The source is a simple SVG icon (Heroicons, Lucide).
2. The image is an external tracker (pixel).
3. You are building a static email template where `next/image` won't work.

## 4. Pre-Delivery Checklist
- [ ] Media collection uses `formatOptions: { format: 'webp' }`.
- [ ] At least 3 responsive `imageSizes` are defined.
- [ ] `adminThumbnail` is set to the smallest size.
- [ ] No `<img>` tags found in frontend components (excluding icons).
- [ ] Hero/LCP images use the `priority` prop.
- [ ] All images have meaningful `alt` text in Payload.
