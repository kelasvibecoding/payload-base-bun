# Next.js Image Component Strategy

The `next/image` component is the specialized tool for frontend image delivery. For Payload CMS projects, follow these specific implementation patterns.

## 1. Local vs Remote Images

For images from Payload collections, always treat them as **Remote Images**.

```tsx
import Image from 'next/image'

// Correct: Remote image with specific sizes
<Image
  src={media.url}
  alt={media.alt}
  width={media.width}
  height={media.height}
/>
```

## 2. Using the `fill` Prop (Recommended)

When you don't know the exact dimensions but know the container's aspect ratio (e.g., in a grid), use `fill`.

```tsx
<div className="relative aspect-video">
  <Image
    src={imageUrl}
    alt={alt}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>
```
*Note: The parent MUST have `position: relative`, `position: absolute`, or `position: fixed`.*

## 3. The `sizes` Attribute (Critical for Performance)

The `sizes` attribute tells the browser which image size to download before it starts downloading. Without it, the browser assumes the image is 100% of the viewport width.

- **Grid (3 columns)**: `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`
- **Sidebar + Main**: `(max-width: 1024px) 100vw, 75vw`
- **Fixed Width Hero**: `1200px`

## 4. Priority Loading

Mark images that are visible "Above the Fold" with the `priority` prop.

```tsx
<Image
  src={heroImageUrl}
  alt="Main Hero"
  priority
  fill
/>
```
*Never use `priority` for more than 2-3 images on a single page.*

## 5. Performance Anti-Patterns to Avoid

- **No `width`/`height`**: Causes Layout Shift (CLS).
- **`width={auto}`**: Invalid prop.
- **Large images in small containers**: Always use `sizes` or responsive Payload URL sizes.
- **Blur-up on Remote Images**: Requires a manually generated `blurDataURL` from Payload or a placeholder.
