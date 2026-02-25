---
trigger: always_on
glob: "**/*"
description: Standards for code quality, documentation timing, and debug cleanup.
---

# Operational Excellence

Maintain high standards of code quality, security, and project cleanliness.

## 1. Quality & Security
- **STRICTLY follow ESLint rules** - especially `@typescript-eslint/no-explicit-any`. (Exception: If following the rule makes code excessively complex, use a line-level disable with clear reasoning).
- **NEVER use `any` type** - always provide proper TypeScript types and only use `any` when strictly necessary and disabled per-line.
- **Fix all linting errors** before considering code complete.
- **Run `bun run lint:fix`** to auto-fix linting issues.
- **Run `bun run typecheck`** to verify TypeScript types.

- **Run `bun run typecheck`** to verify TypeScript types.

## 2. Service Error Handling (The Result Pattern)
For complex business logic in services or server actions, avoid throwing generic errors for flow control. Use a consistent Result pattern to return success or descriptive failure.

```typescript
type Result<T> = 
  | { success: true; data: T } 
  | { success: false; error: string; code?: string }

// Example service function
export async function updateUserSettings(userId: string, data: Partial<Settings>): Promise<Result<Settings>> {
  try {
    const updated = await db.update(userId, data)
    return { success: true, data: updated }
  } catch (err) {
    return { success: false, error: 'Failed to update settings', code: 'DB_UPDATE_ERROR' }
  }
}
```

## 3. Documentation Guidelines
- **ONLY create documentation** for functions that are completed and working.
- **Document AFTER implementation** - not before or during development.
- **Include JSDoc comments** for complex functions and utilities.
- **Keep documentation up-to-date** with actual implementation.

## 3. Debug Code Cleanup
- **Remove all console.log statements** before completion.
- **Clean up debug comments** and temporary code.
- **Remove unused imports** and variables.
- **Eliminate test/dummy data** from production code.
- **Ensure production-ready code** without debug artifacts.

## 4. Testing Guidelines
- **Testing is MANUAL by user** - AI will NOT run automated tests.
- **SKIP E2E testing creation** - focus on manual testing only.
- **Provide clear testing instructions** for each feature.
- **Include test scenarios** in strategy plans.
- **Document expected behaviors** for manual verification.

## 5. Post-Implementation Quality Checklist
Before calling `notify_user` on any feature, verify:
- [ ] **Technical Hygiene**: All `console.log` removed? Unused imports deleted?
- [ ] **Architecture**: FBA structure respected? Logic in services, not hooks/frontend?
- [ ] **Type Safety**: New types generated via `bun generate:types`? No `any` used?
- [ ] **Performance**: 0 hydration errors? Layout matches skeletons?
- [ ] **Design**: Icon sizes standardized? Font pairing followed?
- [ ] **Cleanup**: `task.md` updated? Walkthrough complete?

## 6. Auto-Stop Safety Protocol

Pause work and surface context to the user when these triggers fire:

| Trigger | Action |
|---------|--------|
| **5+ files changed** in a session | Report impact scope to user before continuing |
| **Same error occurs 3x** | Run 5-Whys root cause analysis, present fix plan to user |
| **3+ edits to the same file** | Pause and evaluate if refactoring is needed |
| **Architecture change** (new layer, new dep) | Require explicit user confirmation |
| **Breaking change** (API, data structure, DB schema) | Require explicit user confirmation |

This protocol prevents "runaway" sessions and keeps the user in control of large changes.
