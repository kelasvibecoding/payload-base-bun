---
name: ui-ux-pro-max
description: "UI/UX design intelligence optimized for Payload CMS 3.0, Next.js, Tailwind, and Shadcn UI. Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Styles: glassmorphism, minimalism, dark mode, responsive, bento grid. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient."
---

# UI/UX Pro Max - Design Intelligence (Payload CMS Edition)

Comprehensive design guide optimized for **Payload CMS 3.0**, **Next.js (App Router)**, **Tailwind CSS 4.x**, and **Shadcn UI**.

## Core Design Philosophy (Payload Ecosystem)

### 1. Unified Aesthetic
Your design should feel cohesive between the **Payload Admin Panel** and the **Custom Frontend**.
- **Admin Consistency**: Use deep, rich grays (Slate/Zinc) and consistent border radiuses matching the Admin UI.
- **Glassmorphism**: Use for overlays and navigation to maintain a premium "modern SaaS" feel.
- **Dynamic Response**: Implement micro-interactions (hover states, spring animations) that feel alive.

### 2. Shadcn-First Implementation
- **Primitives**: Always start with Shadcn UI primitives in `@/components/ui`.
- **Atomic Modification**: Customize components via Tailwind classes, not by overriding the core Radix primitives unless necessary.
- **Theming**: Use CSS variables for colors (`--primary`, `--background`, etc.) to ensure seamless light/dark mode support.

### 3. Semantic Coloring (Standard)
- **Zero Hex Policy**: DO NOT use hardcoded hex values (e.g., `#ff0000`) in components.
- **Semantic Tokens**: Use Tailwind/Shadcn semantic classes for all coloring:
  - `bg-primary`, `text-primary-foreground`
  - `bg-secondary`, `bg-accent`, `bg-muted`
  - `border-border`, `bg-background`, `text-foreground`
- **Contextual Meaning**: Use `destructive` for errors/delete actions and `muted` for secondary metadata.

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
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "saas dashboard fintech dark" --design-system -p "Payload App"

# Get Payload fullstack specific patterns (NEW)
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "media table auth" --stack payload

# Get Shadcn-specific patterns
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "data-table form navigation" --stack shadcn

# Get Next.js App Router performance tips
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "suspense caching image" --stack nextjs
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
| `style` | UI styles, colors, and visual effects (glassmorphism, etc.) |
| `product` | Industry-specific product recommendations |
| `typography` | Font pairings and Google Font recommendations |
| `color` | Curated color palettes by product type |

## Pre-Delivery Checklist (Payload Specific)

### Visual & Semantic Quality
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
*Reference the `software-architecture` skill for backend/service-layer structure and `senior-fullstack` for full tech stack integration.*
