---
name: senior-fullstack
description: Comprehensive fullstack development skill for building complete web applications with Payload CMS, Next.js, React, Tailwind CSS, and Shadcn UI. Includes architectural patterns, best practices for Payload 3.0, and modern frontend development workflows. Use when building new features, optimizing performance, or ensuring code quality in the payload-base ecosystem.
---

# Senior Fullstack (Payload CMS + Next.js)

Expert toolkit for fullstack development using Payload CMS 3.0, Next.js, and modern React patterns.

## Tech Stack

- **Framework**: Payload CMS 3.0 (Headless & Admin), Next.js (App Router)
- **Frontend**: React 19, Tailwind CSS 4.x
- **UI/Components**: Shadcn UI (Radix UI), Lucide React, Embla Carousel
- **Forms & Validation**: React Hook Form, Zod
- **Database**: MongoDB / PostgreSQL (via Payload Adapters)
- **Testing**: Playwright (E2E), Vitest (Unit/Integration)
- **Package Manager**: Bun

## Core Principles

### 0. HILE Strategy (Recommendation First)
- **High Impact, Low Effort**: Always offer a HILE implementation option alongside a comprehensive one for new features.
- **Value-Driven**: Prioritize speed-to-value and maintainability.


### 1. Payload-First Architecture
- **Schema-Driven**: Define your data model in collections/globals first.
- **Local API**: Prefer `payload.find`, `payload.create`, etc., over external API calls within the same server.
- **Hooks & Access**: Implement business logic in lifecycle hooks and security in access control functions.

### 2. Next.js App Router Patterns
- **Server Components (RSC)**: Use by default for data fetching and static rendering. **Main Page files (`page.tsx`) MUST be Server Components.** This keeps sensitive logic (like Payload Local API calls) secure and reduces the client bundle size.
- **Client Components**: Use only for specific interactive parts like filters, buttons, charts, or browser-only APIs. Always use the `'use client'` directive at the smallest possible component level.
- **Server Actions**: Leverage for data mutations from the frontend.

### 3. Design System (Shadcn + Tailwind)
- **Atomic Components**: Build with standard Shadcn primitives in `src/components/ui`.
- **Theme-Aware**: Use Tailwind's dark mode and CSS variables for consistent styling.
- **Responsive**: Mobile-first design using Tailwind utility classes.
- **Safe Merging**: Always use the `cn` utility (from `@/lib/utils`) for conditional classes and merging.

### 4. Distinctive Frontend Design
- **Anti-Generic**: Avoid "AI slop" aesthetics (e.g., Inter font, purple gradients on white).
- **Aesthetic Intent**: Commit to a bold, intentional aesthetic direction (Editorial, Brutalist, Retro-Futuristic, etc.) for every project.
- **Visual Texture**: Use grain, noise, and gradient meshes instead of flat backgrounds.
- **Micro-interactions**: Implement high-impact motion and staggered reveals.

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Next.js frontend routes (layouts, pages, styles)
│   └── (payload)/           # Payload Admin Panel implementation
├── collections/             # Payload Collection configurations (PascalCase)
├── globals/                 # Payload Global configurations (PascalCase)
├── components/              # React components
│   ├── admin/               # Custom Payload Admin components
│   ├── hooks/               # Custom React hooks (use-*)
│   ├── lib/                 # Shared utilities and helpers
│   └── ui/                  # Shadcn UI base components
├── access/                  # Shared access control logic
├── hooks/                   # Shared Payload lifecycle hooks
├── payload-types.ts         # Automatically generated TypeScript types
└── payload.config.ts        # Primary Payload configuration

docs/                        # Planning & AI documentation artifacts
```

## Best Practices

### Code Quality
- **Type Safety**: Strictly typed Payload operations using `payload-types.ts`.
- **Validation**: Use Zod schemas for frontend form validation and API inputs.
- **Naming**: Follow the project convention (PascalCase for collections, kebab-case for UI components).

### Performance
- **Image Optimization**: Always implement image compression for media collections. Use `imageSizes` with WebP/AVIF formatting and quality limits (80-85%). For original file optimization, use a `beforeChange` hook with Sharp.
- **Caching**: Utilize Next.js `generateStaticParams` and Payload's local API caching.
- **Bundle Size**: Avoid large client-side libraries; prefer server-side logic.

### Security
- **Access Control**: Never rely on frontend-only checks; always implement `access` rules in Payload.
- **Local API**: Set `overrideAccess: false` when performing operations on behalf of a user.
- **Data Integrity (Aggregation/1-Data-Off)**: Always use `docs.length` instead of `totalDocs` and thread `req` into hooks to prevent stale counts and averages (the "1-data-late" bug).
- **Environment**: Keep secrets (DATABASE_URL, PAYLOAD_SECRET) strictly in `.env`.

### 5. Frontend Stability (Hydration)
- **Invalid DOM Nesting**: Never nest interactive elements (`<a>` inside `<a>`, `<button>` inside `<button>`). This causes hydration mismatches and breaks accessibility.
- **Solution**: If you need a clickable card with internal links, use the "Stretched Link" pattern (CSS `::after` on the main link) or handling `onClick` programmatically, rather than nesting tags.
- **HTML Validity**: Ensure standard HTML rules are followed (e.g., no `<div>` inside `<p>`). Use `<span>` for block-like styling inside paragraphs if necessary.

### 6. Documentation & Planning
- **Centralized AI Artifacts**: All AI-generated outputs—including implementation plans, architecture definitions, code audits, logs, analysis reports, and research notes—MUST be saved to the `docs/` directory.
- **Organization**: Follow the `docs/` subfolder structure (`/docs/design` for plans, `/docs/prd` for requirements, `/docs/adr` for architecture decisions) to keep the repository clean.
- **Format**: Use Markdown (`.md`) for documentation and standard formats (txt/json/csv) for logs and data.

## Common Commands

```bash
# Development
bun devsafe            # Run dev server with .next-dev cleanup
bun typecheck          # Run full TypeScript validation

# Code Generation
bun generate:types     # Sync Payload schema with TypeScript types
bun generate:importmap # Regenerate Payload's internal component map

# Testing
bun test               # Run all tests (Integration + E2E)
bun run test:int       # Run backend/integration tests with Vitest
bun run test:e2e       # Run frontend E2E tests with Playwright

# Production
bun build              # Build for production
bun start              # Start production server
```

## Resources

- **Official Docs**: [Payload CMS Documentation](https://payloadcms.com/docs)
- **UI Gallery**: [Shadcn UI Components](https://ui.shadcn.com/)
- **Skill Reference**: Refer to `payload-cms-development` skill for deep-dive patterns.
