---
name: feature-based-architecture
description: Guidelines for implementing a scalable Feature-Based Architecture in the payload-base ecosystem. Encourages modularity, improved maintainability, and clear separation of concerns by grouping related code by feature rather than type.
---

# Feature-Based Architecture (FBA)

## Core Philosophy
Groups code by **Feature Domain** (e.g., Auth, Blog, Shop, Contact) rather than **File Type** (e.g., Components, Utils, Hooks). This makes the codebase scalable, maintainable, and easier to navigate as it grows.

**Why?**
- **Co-location**: Code that changes together, stays together.
- **Portability**: A feature folder can often be moved or copied with minimal entanglement.
- **Discoverability**: Easier to find all logic related to "Contact" in one place.

## Directory Structure
When introducing a new specialized domain (e.g., "Courses", "Contact", "Dashboard"), create a folder in `src/features/`.

```
src/
├── features/
│   ├── [feature-name]/
│   │   ├── components/       # Feature-specific UI components
│   │   ├── hooks/            # Feature-specific hooks
│   │   ├── services/         # API calls / Server Actions
│   │   ├── types/            # Local types (if not in payload-types)
│   │   ├── utils/            # Helper functions specific to this feature
│   │   └── index.ts          # Public API export (Optional)
```

## Migration Rules (Progressive Adoption)
You do not need to refactor the entire codebase at once. Apply FBA when:
1.  **Creating New Features**: Start in `src/features/[new-feature]`.
2.  **Refactoring**: If a feature's logic is scattered across `src/components`, `src/app`, and `src/lib`, consolidate it into `src/features/`.
3.  **Complexity**: If a single page/module needs more than 3 related non-generic files.

## Integration
### 1. Components
Move complex, domain-specific logic out of `src/app`.
*   **Bad**: `src/app/(frontend)/courses/CourseCard.tsx` (Deeply nested in routes)
*   **Good**: `src/features/courses/components/CourseCard.tsx`

### 2. Global vs. Feature
- **Global**: Generic UI (Buttons, Inputs), App-wide providers, global layouts. Keep in `src/components/ui` or `src/lib`.
- **Feature**: Domain-specific logic (e.g., `CourseCard`, `CheckoutForm`).

### 3. Payload Config
Payload Collections still live in `src/collections` because Payload's loader expects them there. However, you can import feature-specific logic (like hooks or access control) from the feature folder if needed.

## Example: "Contact" Feature
Instead of scattering files:
- `src/lib/schemas/contact-schema.ts`
- `src/app/contact/actions.ts`
- `src/components/ContactForm.tsx`

Consolidate into `src/features/contact/`:
```
src/features/contact/
├── components/
│   └── ContactForm.tsx
├── schemas.ts         # Zod schemas
└── actions.ts         # Server Actions
```

*Note: For simple projects, `src/lib/schemas` is still acceptable as per `zod-form-validation` skill, but for complex features, prefer co-location.*
