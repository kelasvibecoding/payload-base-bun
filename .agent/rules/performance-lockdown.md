---
trigger: always_on
glob: "src/app/(frontend)/**/*.tsx"
---

# Performance Lockdown: Zero-JS & TBT Optimization

Maintain a perfect 100/100 Lighthouse performance score by adhering to the strictly enforced Zero-JS and TBT (Total Blocking Time) optimization patterns.

> **📋 Related Rule**: This rule defines strict constraints for the critical rendering path. For broader performance patterns across the entire frontend (loading states, streaming, user feedback), see [`frontend-performance.md`](./.agent/rules/frontend-performance.md).

## 1. The Zero-JS Shell Rule
The critical rendering path (Navbar, Hero, and Background) must remain **React Server Components (RSC)**.

- **NO** Client Components in the top-level shell.
- **NO** `use client` in `navbar.tsx`, `hero-section.tsx`, or `background-mesh.tsx`.
- **ISOLATE JS**: Move interactions into leaf components (e.g., `navbar-links.tsx`) while keeping the main header/section as RSC.
- **NO** Framer Motion in the initial viewport unless absolutely necessary and optimized.

## 2. Hardware-Accelerated CSS Animations
Favor CSS Keyframes over Javascript-driven animations (Framer Motion, GSAP) for all entrance and background effects.

- CSS animations run on the GPU compositor thread and do not impact TBT.
- Use `animate-in`, `fade-in`, `slide-in-from-bottom` for entrance effects.
- Use native CSS `@keyframes` for continuous background animations.

## 3. Optimized Framer Motion (Lazy Loading)
If Framer Motion is required for complex interactions below the fold:

- Use `LazyMotion` with the `domAnimation` subset (imported from `framer-motion`).
- **MANDATORY**: Use the `m` component (e.g., `m.div`) instead of the standard `motion.div`. 
- **CRITICAL**: Using `motion` within `LazyMotion` will throw a runtime error and break tree-shaking (*"Uncaught Error: You have rendered a `motion` component within a `LazyMotion` component"*).
- **CSS-FIRST ENTRANCES**: Simple entrance effects (fade-in, slide-up) MUST use Tailwind `animate-in` or CSS keyframes. Framer Motion is reserved for:
    - Scroll-linked animations.
    - Complex layout transitions (`layoutId`).
    - Orchestrated staggered lists that cannot be achieved with `delay-[ms]`.
    - Drag/gesture interactions.
- Ensure heavy interaction JS is deferred and does not block the initial hydration of the page.

## 4. Hydration Tax Management
- Avoid global "Motion Providers" or "ThemeProvider" wrappers that force the entire app tree to hydrate.
- Use `suppressHydrationWarning` on the `html` tag sparingly.
- Keep the `SWRProvider` and other global context providers as lightweight as possible.

## 5. Metadata and Font Strategy
- Always use `next/font` with `display: 'swap'`.
- Ensure all images in the initial viewport use `priority`.
- Use `next/image` to prevent Layout Shift (CLS).
