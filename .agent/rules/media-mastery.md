---
trigger: model_decision
description: "Expert guidelines for media handling, ensuring WebP optimization and mandatory next/image usage."
---

# Media Mastery: Payload & Next.js

## Backend Strategy: Payload Optimization
1. **Mandatory WebP**: All Upload collections must use `formatOptions: { format: 'webp', options: { quality: 85 } }`.
2. **Responsive Sizes**: Define at least 3 standard sizes (`thumbnail`, `card`, `og`) in the `upload` config.
3. **Focal Point**: Always enable `focalPoint: true` for manual crop control.
4. **Admin UI**: Set `adminThumbnail` to the smallest available size.

## Frontend Strategy: Next.js Implementation
1. **Mandatory `next/image`**: NEVER use `<img>` for Payload-managed media (except for pure SVGs or external trackers).
2. **CLS Prevention**: Always provide `width`/`height` or use the `fill` prop within a relative container.
3. **Priority Loading**: Use the `priority` prop for above-the-fold (LCP) images.
4. **Responsive Sizes Prop**: Always define the `sizes` attribute on `next/image` to ensure browsers request the optimal generated size.

## Implementation Pattern
```tsx
import Image from 'next/image'

// src/components/ui/payload-image.tsx (or feature specific)
export const PayloadImage = ({ media, size = 'card', priority = false }) => {
  if (!media || typeof media !== 'object') return null
  
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
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
```

## Checklist
- [ ] No `<img>` tags for CMS content.
- [ ] `formatOptions` set to `webp`.
- [ ] Meaningful `alt` text provided in CMS.
- [ ] `imageSizes` defined for all upload collections.