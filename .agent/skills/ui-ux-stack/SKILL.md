---
name: ui-ux-stack
description: "UI/UX design intelligence optimized for Payload CMS 3.0, Next.js, Tailwind, and Shadcn UI. Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Styles: glassmorphism, minimalism, dark mode, responsive, bento grid. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient."
---

# UI/UX Stack - Design Intelligence

Comprehensive design guide optimized for **Payload CMS 3.0**, **Next.js (App Router)**, **Tailwind CSS 4.x**, and **Shadcn UI**.

## How to Trigger This Skill
Simply ask questions related to design, UI/UX, or frontend implementation.
- **"Review my UI design."** -> Triggers a checklist review.
- **"Design a dashboard for a fintech app."** -> Uses the design system generator.
- **"Fix this button's contrast."** -> Checks against accessibility rules.
- **"How balancing works?"** -> Explains the 7 Principles of Design.

## Core Design Philosophy (Payload Ecosystem)

### 1. Unified Aesthetic & Intentionality
Your design should feel cohesive between the **Payload Admin Panel** and the **Custom Frontend**, but avoid "generic SaaS" aesthetics.
- **Aesthetic Intentionality**: Before coding, commit to a bold direction from the [Theme Profiles](./theme-profiles.md) (e.g., Editorial, Brutalist, Tech Innovation).
- **Admin Consistency**: Use deep, rich grays (Slate/Zinc) and consistent border radiuses matching the Admin UI for internal tools.
- **Visual Texture**: Avoid solid flat backgrounds. Use grain overlays, noise, or gradient meshes to create depth.
- **Dynamic Response**: Implement micro-interactions (hover states, spring animations) that feel alive.

### 2. Component Ecosystem (Vibe Blocks & Shadcn)
- **Vibe Blocks First**: Always search `.agent/skills/vibe-blocks` for marketing sections, complex bento grids, and layouts before building from scratch.
- **Primitives**: Start with Shadcn UI primitives in `@/components/ui`.
- **Atomic Modification**: Customize components via Tailwind classes, not by overriding the core Radix primitives unless necessary.
- **Theming**: Use CSS variables for colors (`--primary`, `--background`, etc.) to ensure seamless light/dark mode support.
- **Safe Merging**: Always use the `cn` utility (from `@/lib/utils`) for merging Tailwind classes and conditional logic.

### 3. Semantic Coloring (Standard)
- **Zero Hex Policy**: DO NOT use hardcoded hex values (e.g., `#ff0000`) in components.
- **Semantic Tokens**: Use Tailwind/Shadcn semantic classes for all coloring:
  - `bg-primary`, `text-primary-foreground`
  - `bg-secondary`, `bg-accent`, `bg-muted`
  - `border-border`, `bg-background`, `text-foreground`
- **Contextual Meaning**: Use `destructive` for errors/delete actions and `muted` for secondary metadata.
- **Text Readability**: When selecting a background color, ALWAYS use its matching foreground token for text to ensure WCAG-compliant contrast (e.g., `bg-primary` with `text-primary-foreground`). Never assume black/white text fits all backgrounds.

## The 7 Core Principles of Design

Apply these foundational principles to every UI layout and component decision:

1. **Balance**: Distribute visual weight (color, size, texture) evenly to create stability.
   - *Check*: Does the layout feel "heavy" on one side? Use symmetrical or asymmetrical balance intentionally.
2. **Contrast**: Use differences to make elements stand out and create interest.
   - *Check*: Do primary actions (CTAs) pop against the background? Is text legible?
3. **Emphasis (Hierarchy)**: Highlight the most important element to control the focal point.
   - *Check*: Does the eye naturally land on the key message/action first? (Scale: H1 > H2 > Body).
4. **Movement**: Guide the viewer's eye through the design using lines, shapes, or color.
   - *Check*: Are you using Z-pattern or F-pattern reading flows to lead to conversion?
5. **Repetition (Pattern/Rhythm)**: Reuse elements to create consistency and unity.
   - *Check*: Are margins, paddings, and border-radii consistent across all components?
6. **Proportion (Scale)**: Use relative size to signal importance and weight.
   - *Check*: Are headings significantly larger than body text to clearly section content?
7. **Unity (White Space/Harmony)**: Use empty space to group related elements and prevent clutter.
   - *Check*: "When in doubt, add whitespace." Are related items visually grouped?

## Rule Categories (Payload & Next.js Focus)

| Priority | Category | Impact | Domain |
|----------|----------|--------|--------|
| 1 | **Accessibility (A11y)** | CRITICAL | Use Radix/Shadcn built-ins; ensure contrast and keyboard nav. |
| 2 | **Media Optimization** | HIGH | **CRITICAL**: Use the project's [Media Compression](./resources/media-compression.md) rules. |
| 3 | **Performance** | HIGH | Use Next.js `<Image />`, partial hydration, and Suspense boundaries. |
| 4 | **Theming & Modes** | HIGH | Design for **Dark Mode** first; ensure perfect light mode contrast. |
| 5 | **Interaction Quality** | MEDIUM | `cursor-pointer` on all interactive cards; smooth 200ms transitions. |

## Quick Reference: Professional Standard

### Icons & Media
- **Lucide React**: The standard icon set for both Admin and Frontend. Use `w-5 h-5` for consistency.
- **No Emojis**: NEVER use emojis as UI icons. Use SVG/Lucide.
- **WebP/AVIF**: Every image must be optimized. Refer to `media-compression.md`.

### Professional Interaction
- **Stable Hover**: Use `transition-all duration-200` with subtle shadow/border changes. Avoid layout-shifting scales.
- **Loading States**: Use Shadcn Skeleton components for every async data fetch.
- **Form UX**: Use Radix/Shadcn Toast for submission feedback (Success/Error).

## How to Use with Scripts

Search specifically for the Payload/Shadcn stack:

```bash
# Get complete design system for a specific product
python3 .agent/skills/ui-ux-stack/scripts/search.py "saas dashboard fintech dark" --design-system -p "Payload App"

# Get Payload fullstack specific patterns (NEW)
python3 .agent/skills/ui-ux-stack/scripts/search.py "media table auth" --stack payload

# Get Shadcn-specific patterns
python3 .agent/skills/ui-ux-stack/scripts/search.py "data-table form navigation" --stack shadcn

# Get Next.js App Router performance tips
python3 .agent/skills/ui-ux-stack/scripts/search.py "suspense caching image" --stack nextjs
```

## Available Stacks & Domains

| Stack | Focus |
|-------|-------|
| `payload` | **Payload CMS 3.0**, Local API, Media Compression, Security (RECOMMENDED) |
| `shadcn` | Shadcn/UI components, theming, forms, Radix patterns |
| `nextjs` | SSR, App Router, Metadata, Images, Server Actions |
| `react` | State, hooks, performance, generic patterns |
| `html-tailwind` | Vanilla Tailwind utilities, responsive, basic a11y |

| Domain | Use For |
|--------|---------|
| `ux` | Best practices for accessibility, animation, and loading states |
| `style` | UI styles, colors, and visual effects (glassmorphism, meshes, grain) |
| `anti-slop` | Rules to avoid generic AI aesthetics and ensure distinctive design |
| `product` | Industry-specific product recommendations |
| `typography` | Distinctive font pairings (no Inter/Arial) |
| `color` | Curated color palettes by product type |

## Pre-Delivery Checklist (Payload Specific)

### Visual & Semantic Quality
- [ ] **Anti-Slop Check**: No generic fonts (Inter/Roboto), no plain purple gradients on white.
- [ ] **Aesthetic Intent**: Is the design committed to a specific tone (e.g., Editorial, Brutalist)?
- [ ] Uses Shadcn UI primitives where applicable.
- [ ] No emojis as icons (use Lucide/SVG).
- [ ] All images optimized via `formatOptions: { format: 'webp' }`.
- [ ] Theming uses CSS variables (light/dark support).

### Performance & Security
- [ ] Image paths correctly reference Payload media URLs.
- [ ] Suspense/Loading states implemented for Payload Local API calls.
- [ ] Form validations use Zod (matches Payload schema where possible).

### Interaction
- [ ] `cursor-pointer` on all clickable cards and buttons.
- [ ] Hover effects use standard `duration-200` transitions.
- [ ] Accessible focus states (visible rings).

---
*Reference:* 
- *The `vibe-blocks` skill for grabbing 2,000+ pre-built React/Tailwind layouts.*
- *The `software-architecture` skill for backend/service-layer structure.*
- *The `senior-fullstack` skill for full tech stack integration.*
