# Total Blocking Time (TBT) Optimization Guide

## What is TBT?
**Total Blocking Time** measures the total time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked long enough (>50ms) to prevent input responsiveness.

- **Target**: < 200ms

## Core Optimization Patterns

### 1. Code Splitting & Dynamic Imports
Split heavy components to reduce initial bundle size:
```tsx
const HeavyChart = dynamic(() => import('recharts').then(mod => mod.HeavyChart), {
  ssr: false,
  loading: () => <ChartSkeleton />
})
```

### 2. Defer Non-Critical JavaScript
Use `next/script` with `strategy="lazyOnload"` for analytics and non-essential widgets.

### 3. Server Components (RSC) First
Prefer Server Components over Client Components to eliminate hydration tax entirely.
- **Rule**: Only use `'use client'` if you need `useState`, `useEffect`, or Event Listeners.

### 4. Optimize Font Loading
Always use `display: 'swap'` in `next/font` to prevent render-blocking.

### 5. Optimized Images
Use `next/image` with `priority` for above-the-fold images to optimize LCP and prevent CLS.

### 6. Lazy Load Framer Motion
```tsx
import { LazyMotion, domAnimation } from 'framer-motion'

export function MotionConfig({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
```

## Measurement Checklist
- [ ] Audit TBT using Lighthouse (Target < 200ms).
- [ ] Identify long tasks in Chrome DevTools Performance tab.
- [ ] Ensure `Navbar` and `Hero` are Zero-JS RSC.
- [ ] Verify animations are CSS-based or Optimized Lazy Motion.
