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

## 4. Measuring Success
- **TTFB (Time to First Byte)**: Improved by parallel fetching.
- **FCP (First Contentful Paint)**: Improved by `loading.tsx`.
- **LCP (Largest Contentful Paint)**: Improved by optimized images (`next/image`) and skeletons.
- **Interaction to Next Paint (INP)**: Improved by `useTransition` and avoiding UI-blocking hydration.
