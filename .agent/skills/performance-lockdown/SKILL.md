---
name: performance-lockdown
description: Procedures and patterns for achieving and maintaining a 100/100 Lighthouse score via Zero-JS and TBT optimization.
---

# Performance Lockdown Skill

Use this skill when tasked with improving performance, fixing TBT regressions, or building new high-performance landing pages within the Payload Base ecosystem.

## Core Procedures

### 1. Auditing for TBT Regressions
Total Blocking Time is the most common performance killer. It is caused by long-running Javascript during hydration.

1. **Identify the Culprit**: If TBT is > 200ms, search for `use client` components in the initial viewport.
2. **The Isolation Test**: 
   - Temporarily strip `page.tsx` to bare text + `BackgroundMesh`.
   - Run Lighthouse.
   - Re-add components one by one until TBT spikes.

### 2. Transitioning from Framer to CSS
If a component is slowing down the page, convert its animations to pure CSS.

**Before (Framer):**
```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>...</motion.div>
```

**After (CSS):**
```tsx
<div className="animate-in fade-in duration-500">...</div>
```

### 3. Implementing Optimized Lazy Motion
When Framer Motion is strictly required, use this pattern:

1. **MotionConfig Component**:
   ```tsx
   import { LazyMotion, domAnimation } from 'framer-motion'
   export function MotionConfig({ children }) {
     return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
   }
   ```
2. **Usage**:
   ```tsx
   import { m } from 'framer-motion'
   // ✅ CORRECT: Use m.div instead of motion.div within LazyMotion
   ```

   > [!CAUTION]
   > **CRITICAL**: NEVER render a `motion` component within a `LazyMotion` wrapper. Doing so will trigger the error: 
   > *"Uncaught Error: You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking."*
   > You must import and render `m` components instead.

### 4. Zero-JS Structural Headers
Ensure that the `HeroSection` and `Navbar` are pure React Server Components. If they need "active link" logic or small interactions, use:
- **CSS `:hover`** instead of JS event listeners.
- **Server-side class calculation** for active links if possible.
- **Isolate JS**: Extract interactive elements (Search, Menu, Links) into small client "leaf" components while keeping the `header` or `section` shell as a Server Component.
- **Hybrid Animation Strategy**: 
  - Use **CSS Animations** (`tailwindcss-animate`) for the Hero section and Navbar.
  - Use **Framer Motion + LazyMotion** for below-the-fold content (Features, Testimonials).

## Checklists

### New Component Performance Check
- [ ] Is it a Server Component by default?
- [ ] Are animations CSS-only?
- [ ] Does it use `next/image` with `priority` if above the fold?
- [ ] Does it avoid heavy third-party JS?
- [ ] (If Client) Is it wrapped in `Suspense` or dynamically imported with `ssr: false`?

## Reference Patterns
- [Case Study: Achieving 100/100 Score](./references/case-study-100-score.md)
- [TBT Optimization Guide](./references/tbt-optimization-guide.md)
