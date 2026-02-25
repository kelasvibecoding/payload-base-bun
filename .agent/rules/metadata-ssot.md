---
trigger: always_on
glob: "src/(app|features)/**/*.tsx"
description: Centralized SEO and Brand metadata management.
---

# Metadata & SEO Single Source of Truth (SSOT)

Maintain consistency across brand voice and search visibility by centralizing all metadata strings.

## 1. Centralized Constants
All global brand strings, default SEO titles, and descriptions MUST live in `src/features/app-shell/constants.ts`.

```typescript
// src/features/app-shell/constants.ts
export const BRAND_CONFIG = {
  name: 'Payload Base',
  tagline: 'The Ultimate Payload 3.0 + Next.js Template',
  description: 'Production-ready starter for building scalable headless applications.',
  url: 'https://example.com',
  twitter: '@payloadcms',
} as const

export const DEFAULT_METADATA = {
  title: {
    template: `%s | ${BRAND_CONFIG.name}`,
    default: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
  },
  description: BRAND_CONFIG.description,
} as const
```

## 2. Usage in Layouts
Import from the SSOT rather than hardcoding.

```tsx
// src/app/(frontend)/layout.tsx
import { DEFAULT_METADATA } from '@/features/app-shell/constants'

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  // ...other global config
}
```

## 3. Usage in Pages
```tsx
// src/app/(frontend)/about/page.tsx
export const metadata: Metadata = {
  title: 'About Us',
}
```

## 4. Anti-Pattern Check
- **NEVER** hardcode the project name in individual page metadata.
- **NEVER** duplicate the mission statement or brand description across multiple components.
- **ALWAYS** update `BRAND_CONFIG` in `app-shell` to propagate changes everywhere.
