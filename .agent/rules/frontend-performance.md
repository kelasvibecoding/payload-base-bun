---
trigger: always_on
glob: "src/app/(frontend)/**/*"
---

# Frontend Performance & Responsive Feedback

Maintain high performance and instant user feedback by following these core patterns for Next.js App Router.

## 1. Instant Navigation Feedback
User navigation must trigger immediate visual changes to prevent "dead periods" where the app appears unresponsive while the server fetches data.

- **Progress Indicators**: Always use a global progress bar (e.g., `nextjs-toploader`) triggered on all route changes.
- **Root Loading**: Every main directory in `src/app/(frontend)` MUST have a `loading.tsx`.
- **Skeletons over Spinners**: Prefer layout-matching skeleton screens (e.g., `EventSkeleton`) over generic loading spinners to reduce Cumulative Layout Shift (CLS).

## 2. Server-Side Performance (Streaming & Fetching)
Optimize the "Time to First Byte" (TTFB) and data-dependent rendering.

- **Parallel Data Fetching**: Always use `Promise.all` for independent primary data fetches in Server Components (e.g., parallelizing `fetchContent` and `payload.auth`).
- **Granular Streaming**: Use `<Suspense>` boundaries around secondary or slow components to allow the rest of the page to stream to the client earlier.
- **Prefetching**: Leverage Next.js `<Link>` prefetching defaults, but be mindful of data-heavy pages.

## 3. Hydration & Client Interactivity
Ensure the main thread remains responsive after the HTML lands.

- **Dynamic Hydration**: Use `next/dynamic` with `{ ssr: false }` for heavy client-side only libraries (e.g., Leaflet Maps, complex charts) to prevent blocking the initial render.
- **Responsive Internal Feedback**: Use `useTransition` when performing client-side URL updates or state changes that cause re-renders.
- **Fade-in Transitions**: Use `template.tsx` with `framer-motion` for subtle (200-300ms) fade-in entry to mask the transition between skeletons and content.

## 4. Performance Audit Checklist
When reviewing or creating pages, ensure:
- [ ] Primary data fetches are parallelized.
- [ ] `loading.tsx` is present in the route segment.
- [ ] Heavy components don't block hydration.
- [ ] Intent-to-load feedback is provided immediately.
