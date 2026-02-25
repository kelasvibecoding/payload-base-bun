---
description: Code compliance review against FBA-SOLID-SSOT architecture and operational excellence standards.
---

# /review Workflow

Review a feature's code for architectural compliance, quality standards, and security patterns.

## 1. Scope Identification

Identify the files to review:
- Which feature domain? (`src/features/[name]/`)
- What types of files? (components, services, hooks, schemas, constants)

## 2. FBA Compliance Check

- [ ] Feature code lives in `src/features/[name]/` not in global `src/components/`
- [ ] No domain-specific logic in global shared directories
- [ ] Related code is co-located (schema next to form, hook next to component)
- [ ] Imports use `@/features/` absolute paths

## 3. SOLID Principles Check

- [ ] **SRP**: Each function/component does ONE thing (under 50 lines)
- [ ] **OCP**: New behavior extends interfaces, doesn't modify existing code
- [ ] **DIP**: Components depend on hooks/services, not direct API calls
- [ ] **ISP**: Props are focused — no passing entire objects when only 1 field needed

## 4. SSOT Check

- [ ] No duplicate option arrays (Payload + Frontend + Zod)
- [ ] No hardcoded magic strings/numbers
- [ ] Constants centralized in `constants.ts`
- [ ] Zod schemas aligned with Payload field definitions

## 5. Security & Quality Check

- [ ] No `any` type without `// eslint-disable-next-line` justification
- [ ] Local API calls use `overrideAccess: false` when passing a user
- [ ] Hooks pass `req` to nested operations (transaction safety)
- [ ] No `console.log` in production code

## 6. Report

Summarize findings as:
- ✅ Passes
- ⚠️ Recommendations (non-breaking improvements)
- ❌ Violations (must fix before merging)
