# Development Workflows

## Overview

This guide details the specific workflows for developing, testing, and shipping features in the `payload-base` project.

## Feature Development Lifecycle

### 1. Schema Definition (Backend)
**Goal**: Model the data in Payload first.
1.  Create/Edit a file in `src/collections/` (e.g., `Products.ts`).
2.  Define fields, types, and access control.
3.  **Run**: `bun generate:types` to regenerate TypeScript interfaces.
4.  **Verify**: Check `src/payload-types.ts` to ensure your new fields are typed correctly.

### 2. UI Implementation (Frontend)
**Goal**: Build the interface using the generated types.
1.  Create a layout/page in `src/app/(frontend)/...`.
2.  Use `getPayload()` to fetch data in the Server Component.
3.  Build UI using components from `src/components/ui`.
4.  **Style**: Use Tailwind utility classes; avoid writing custom CSS in `globals.css` unless necessary.

### 3. Component Creation
**Goal**: Create reusable UI elements.
1.  Check `src/components/ui` for existing primitives.
2.  If a new Shadcn component is needed, look up the installation command (e.g., `npx shadcn@latest add dialog`).
3.  If a purely custom component, place it in `src/components/` (PascalCase).

## Safe Development Practices

### The `devsafe` Command
**Command**: `bun devsafe`
**Purpose**: Next.js development cache can sometimes get corrupted or stale.
**Workflow**:
- Always start your day with `bun devsafe`.
- If you see weird styling or stale data, stop the server and run `bun devsafe`.

### Type Checking
**Command**: `bun typecheck`
**Purpose**: Validates the entire project against TypeScript rules.
**When to run**:
- After modifying any Collection Config.
- Before committing code.
- If you see "property does not exist" errors in your editor.

## Testing Strategy

### 1. Integration Tests (Vitest)
**Scope**: Testing Payload Hooks, Access Control, and Utility functions.
- **Location**: `tests/` or alongside files (co-located `*.test.ts`).
- **Command**: `bun run test:int`.

### 2. End-to-End Tests (Playwright)
**Scope**: Testing the full user journey (Login -> Dashboard -> Create Content).
- **Location**: `tests/e2e/`.
- **Command**: `bun run test:e2e`.

## Troubleshooting Common Issues

### "Type 'X' is not assignable to type 'Y'"
- **Cause**: You likely updated a Collection but didn't run type generation.
- **Fix**: Run `bun generate:types`.

### "Module not found"
- **Cause**: New file added or moved, but Next.js cache or Payload import map is stale.
- **Fix**: Run `bun generate:importmap` or restart with `bun devsafe`.

### Shadcn Style Issues
- **Cause**: Tailwind classes conflicting or not compiling.
- **Fix**: Ensure your component is configured in `tailwind.config.mjs` (or content path) and that you are using valid Tailwind 4 syntax.

## Deployment Checklist
1.  **Environment**: Ensure `.env` in production has `PAYLOAD_SECRET` and `DATABASE_URL`.
2.  **Build**: Run `bun build` locally to verify no build errors.
3.  **Migration**: If using Postgres/SQL, ensure migrations are applied (Payload auto-syncs for MongoDB).
