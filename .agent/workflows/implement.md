---
description: Full lifecycle agentic feature development — scale detection, planning, implementation, and quality verification.
---

# /implement Workflow

End-to-end feature development. Detects task scale and adapts the process accordingly.

## 1. Scale Detection

Analyze the request to determine its complexity:
- **Small** (1–3 files, clear scope): Proceed directly to implementation
- **Medium** (3–10 files, clear scope): Design doc → implementation → verify
- **Large** (10+ files, unclear scope): PRD → design doc → implementation → verify

## 2. For Small Tasks

1. Confirm scope with user in one sentence
2. Implement directly
// turbo
3. Run `/lint-typecheck` to verify quality
4. Report completion

## 3. For Medium Tasks

1. Create design doc at `docs/design/[feature-scope].md` using `/plan`
2. Update `mission.md` with the current medium-scale objective.
3. Present to user and **wait for approval**
4. Implement the approved plan chunk-by-chunk
5. Run `/lint-typecheck` after each chunk
6. Update the task status in `mission.md` upon chunk completion.
7. Report overall completion with a summary

## 4. For Large Tasks

1. Create Product Requirement Doc at `docs/prd/[feature].md`
2. Update `mission.md` to reflect the overarching goals.
3. Present PRD for user approval
4. Create design doc at `docs/design/[feature-scope].md`
5. Present design for user approval
6. Implement chunk-by-chunk with quality checks, ensuring `mission.md` is updated as each phase concludes.
7. Final verification with `/lint-typecheck` and `/test-e2e` if UI-facing
8. Clear or mark `mission.md` complete and report.

## 5. Quality Gate (All Sizes)

Before marking complete:
- [ ] Linting passes (`bun run lint`)
- [ ] TypeScript compiles (`bun run typecheck`)
- [ ] No `console.log` left in code
- [ ] FBA structure respected
- [ ] Post-implementation checklist from `operational-excellence.md` passed
