# Layout Stability Patterns

Maintain layout stability and prevent unintended content shifting by strictly following these architectural decoupling patterns.

## 1. Decoupled Visual Backgrounds
**Rule**: Background effects (meshes, gradients, grids) must be implemented as **Absolute Siblings**, never as **Structural Wrappers**.

### ❌ WRONG (Wrapper Pattern)
Causes layout interference and content height calculation errors.
```tsx
export function BackgroundMesh({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BlobLayer />
      <div className="z-10">{children}</div>
    </div>
  )
}
```

### ✅ CORRECT (Sibling Pattern)
Guarantees the background cannot physically impact the displacement of page elements.
```tsx
export function PageShell({ children }) {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col">
      <BackgroundMesh /> {/* Positioned absolute inset-0 z-0 */}
      <div className="relative z-10 flex-1">{children}</div>
    </div>
  )
}
```

## 2. Parallax Parent Prohibition
**Rule**: Never apply vertical scroll transforms (`y` / `scrollYProgress`) to a **parent layout wrapper** or a container that wraps the primary page content.

- **Reason**: Any positioning offset applied to a parent is inherited or compounded by all children. If a parent's parallax "sticks" or initializes with stale scroll values during navigation, the entire page content will appear shifted or off-center.
- **Action**: Apply parallax transforms only to the **isolated visual elements** (e.g., the blobs themselves) within their own absolute layer.

## 3. Viewport Unit Sensitivity
**Rule**: Be extremely cautious when mixing **Flexbox parents** with **Viewport Unit children** (e.g., `min-h-[100dvh]`).

- Rigid parents (`overflow-hidden`, fixed `min-h-screen`) create "Layout Jails" that fight against the browser's dynamic viewport height resizing (especially on mobile).
- **Preference**: Use standard block-level containers or `flex flex-col` without restrictive overflows for main page wrappers.

## 4. Pointer Events on Backgrounds
**Rule**: Always apply `pointer-events-none` to background visual layers. 
- Prevents the background from intercepting clicks or scroll events intended for the content layer.
