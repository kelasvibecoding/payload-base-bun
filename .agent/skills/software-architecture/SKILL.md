---
name: software-architecture
description: Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development.
---

# Software Architecture & Payload CMS Best Practices

This skill provides architectural guidance for high-quality software development, specifically optimized for the **Payload CMS 3.0** ecosystem. It bridges general Clean Architecture/DDD principles with Payload's unique patterns.

## Core Architectural Pillars

### 1. The Payload-Centric Layer
In a Payload application, **the Config is your Schema**.
- **Schema-Driven Development**: Treat your Collections and Globals as the Single Source of Truth for your domain entities.
- **Declarative Power**: Use Payload's built-in features (Access Control, Hooks, Validations) before reaching for custom controllers or middleware.

### 2. Service Layer Pattern (Payload Implementation)
While small projects can live entirely in hooks, complex business logic should be abstracted into a **Service Layer**.
- **Domain Services**: Pure TypeScript classes or sets of functions that handle business rules.
- **Service Hooks**: Payload hooks should be "thin listeners" that delegate the actual logic to your Service Layer.
- **Example**: A `MembershipService.renew(userId)` function called from a `Users.beforeChange` hook.

### 3. Library-First & Plugin-First approach
- **Official Plugins**: Before writing custom code, check for official Payload plugins (`storage-s3`, `form-builder`, `search`, etc.).
- **Community Plugins**: Search the Payload ecosystem for existing solutions.
- **Consistency**: Use established libraries (Zod, React Hook Form, Lucide) that align with Payload's own tech stack.

## Code Style & Naming

### Payload Naming Conventions
- **Collections/Globals**: Use `PascalCase` for configuration files (e.g., `Products.ts`) and `kebab-case` for slugs (`slug: 'products'`).
- **Hooks**: Use `camelCase` for hook functions and `kebab-case` for hook files (e.g., `src/hooks/sync-to-stripe.ts`).
- **UI Components**: Use `kebab-case` for standard UI components and `PascalCase` for high-level Admin Panel views.
- **Bypassing the NIH (Not Invented Here) Syndrome**: If Payload provides a utility (like `getPayload` or `formatID`), use it instead of custom helpers.

## Security & Performance Architecutre

### Local API vs REST/GraphQL
- **Internal Logic**: ALWAYS use the Local API for server-side logic (hooks, server components).
- **Security Control**: When acting on behalf of a user, always set `overrideAccess: false` to ensure access checks are enforced.
- **Persistence Atomicity**: Always pass the `req` object to nested Payload operations inside hooks to preserve database transactions.

### Database Abstraction
- **Adapter-First**: Interact with the database through Payload's `payload.db` or transaction-safe Local API. Avoid direct database driver calls unless performance benchmarks prove it necessary.
- **Indexing**: Architecture your schema with query patterns in mind. Index fields that will be frequently filtered or sorted in the Admin UI.

## Anti-Patterns in Payload Architecture
- **Fat Hooks**: Putting 500 lines of business logic directly into a `beforeChange` property. (Solution: Move to separate service functions).
- **Direct DB Access**: Writing raw SQL/Mongoose queries that bypass Payload's lifecycle and access control.
- **Frontend-Only Security**: Implementing roles/permissions only in the UI while leaving the API wide open.
- **Generic Folders**: Using folders like `utils/` or `common/`. Use domain-specific folders like `services/`, `access/`, `hooks/`, or `fields/`.

## Quality Standards
- **DRY (Don't Repeat Yourself)**: Create reusable field components and access control snippets.
- **Single Responsibility**: Each hook or service should do exactly ONE thing.
- **Type Safety**: Leverage `payload-types.ts` throughout your entire application—from backend hooks to frontend React components.
- **Early Returns**: Use early returns in access control and hooks to handle unauthorized or irrelevant operations quickly.

