---
name: performance-mastery
description: Procedures for auditing, measuring, and implementing frontend performance optimizations, specifically focusing on App Router responsiveness.
---

# Performance Mastery Skill

Use this skill when auditing a codebase for performance bottlenecks or implementing "instant feedback" patterns.

## 1. Auditing Render Process
Check for "waterfalls" and "dead periods".

1. **Spot Waterfalls**: Look for sequential `await` calls in Server Components.
   - *Example*: `await fetchA(); await fetchB();` -> `await Promise.all([fetchA(), fetchB()])`.
2. **Identify Blocked Navigation**: Check if clicking a menu results in no visual change for >100ms.
   - *Fix*: Add `loading.tsx` with a skeleton.
3. **Verify Layout Stability**: Compare skeletons with final content.
   - *Goal*: Zero or minimal CLS.

## 2. Implementing Loading Skeletons
Always co-locate skeletons with their feature.

1. Create `[Feature]Skeleton.tsx` in `src/features/[feature]/components/`.
2. Use Tailwind's `animate-pulse` and matching height/width constants.
3. Reference the skeleton in the route's `loading.tsx`.

## 3. Optimizing for Mobile (100dvh)
Given this is a mobile-first app:
- Use `h-[100dvh]` or `min-h-[100dvh]` to handle browser toolbars correctly.
- Ensure Bottom Navigation is fixed and doesn't jitter during page transitions.

## 4. Optimizing Total Blocking Time (TBT)
Ensure the main thread remains responsive (< 200ms TBT).

1. **Optimize Package Imports**: Ensure `next.config.mjs` includes `experimental.optimizePackageImports` for heavy UI/Icon/Animation libraries.
2. **SWR Config**: Wrap the app in `SWRProvider` with `dedupingInterval: 5000` to avoid re-render cascades from repeated fetches.
3. **Lazy Load Non-Critical JS**: Use `next/dynamic` for heavy client-side libraries that aren't visible above the fold.
4. **Defer Third-Party Scripts**: Use `next/script` with `strategy="lazyOnload"` for non-essential external scripts.

## 5. Measuring Success
- **TTFB (Time to First Byte)**: Improved by parallel fetching.
- **FCP (First Contentful Paint)**: Improved by `loading.tsx`.
- **LCP (Largest Contentful Paint)**: Improved by optimized images (`next/image`) and skeletons.
- **TBT (Total Blocking Time)**: Improved by code splitting and optimized hydration.
- **Interaction to Next Paint (INP)**: Improved by `useTransition` and avoiding UI-blocking hydration.
