---
title: Feature-Based Architecture
trigger: always_on
glob: "**/*"
description: Follow Feature-Based Architecture (FBA) to group code by domain rather than file type.
---

# Feature-Based Architecture (FBA)

## Core Philosophy
Group code by **Feature Domain** (e.g., Auth, Blog, Shop, Contact) rather than **File Type** (e.g., Components, Utils, Hooks). This makes the codebase scalable, maintainable, and easier to navigate.

## The SOLID Connection
Feature-Based Architecture is the **structural foundation** for **SOLID Principles**:
- **SRP**: Each feature folder (`src/features/xyz`) has one responsibility.
- **OCP**: Features isolate change; you can add a new `src/features/audit-logs` without touching `src/features/posts`.
- **DIP**: Collections (`src/collections`) depend on Feature Interfaces (Hooks/Services), not implementation details.


## Directory Structure
Specialized domains belong in `src/features/[feature-name]/`.

```
src/
├── features/
│   ├── [feature-name]/       # kebab-case (e.g., user-profile)
│   │   ├── components/       # Feature-specific UI components
│   │   ├── hooks/            # Feature-specific hooks
│   │   ├── services/         # API calls / Server Actions
│   │   ├── types/            # Local types
│   │   ├── utils/            # Helper functions
│   │   ├── schemas.ts         # Feature-specific validation (e.g. Zod)
│   │   └── actions.ts         # Feature-specific Server Actions
```

## Naming Conventions
1.  **Directories**: Always use `kebab-case` for feature folders (e.g., `src/features/landing-page`).
2.  **Files**:
    - **Components**: Use `kebab-case.tsx` for file names (e.g., `hero-section.tsx`) to match shadcn/ui patterns, but export `PascalCase` components.
    - **Hooks**: Use `kebab-case.ts` (e.g. `use-auth.ts`) or `camelCase.ts` depending on the project preference, but be consistent within a feature.
    - **Utilities**: Use `kebab-case.ts` or `camelCase.ts`.
3.  **Exports**: Named exports are preferred over default exports for better tree-shaking and refactoring safety.

## Migration & Implementation Rules
1.  **New Features**: Always start in `src/features/[new-feature]`.
2.  **Consolidation**: If logic for a specific feature is scattered across `src/components`, `src/app`, or `src/lib`, consolidate it into the feature folder.
3.  **Co-location**: Code that changes together (e.g., a form component and its validation schema) should stay together in the same feature folder.
4.  **Global vs. Feature**: 
    - **Global**: Generic UI components (Buttons, Inputs) belong in `src/components/ui`.
    - **Feature**: Domain-specific UI (e.g., `CheckoutForm`, `UserProfileCard`) belongs in `src/features/`.

## Payload Integration
- Payroll Collections/Globals reside in `src/collections` or `src/globals`.
- Complexity within those collections (hooks, specialized access control) should be imported from the corresponding feature folder in `src/features/` if it represents a significant domain.
