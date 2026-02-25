# Workflow Usage Guide

> Reference for the agentic workflows available in this boilerplate.

## When to Use Which Workflow

| Scenario | Workflow |
|---|---|
| First time setting up the repo | `/start` |
| Starting a new feature | `/implement` or `/plan` first |
| Bug or unexpected behavior | `/diagnose` |
| Post-implementation quality check | `/review` |
| Undocumented existing feature | `/reverse-engineer` |
| Choosing a rendering pattern, search provider, or external API | `/adr` |
| Before committing code | `/lint-typecheck` |
| After major UI changes | `/test-e2e` |

## `/start` — Environment Initialization

Run this command immediately after cloning the repository. It performs a guided setup of your local environment:
1. Copies `.env.example` to `.env` and generates a secure `PAYLOAD_SECRET`
2. Configures the `DATABASE_URL` based on your preferred adapter (SQLite, Postgres, MongoDB)
3. Installs dependencies (`bun install`)
4. Generates Payload types (`bun run generate:types`)

---

## `/implement` — Scale-Aware Lifecycle

The flagship command. Detects the complexity of the task and adapts:

- **Small** (1–3 files): Direct implementation + quality check
- **Medium** (4–10 files): Design doc → implementation → quality check
- **Large** (10+ files): PRD → design doc → implementation → quality check

Design docs are saved to `docs/design/`. PRDs go to `docs/prd/`.

*Note: The agent seamlessly updates `mission.md` throughout this process so you never lose the core objective.*

---

## `/plan` — Strategic Design Doc

Use before coding a medium-to-large feature. Generates a structured plan covering:
- Objective and analysis
- FBA-SOLID-SSOT alignment check
- HILE vs. Comprehensive options
- Implementation order recommendation

Saves approved plan to `docs/design/feature-scope.md`.

---

## `/review` — Compliance Check

Audits code against:
- FBA folder structure
- SOLID principles (SRP, OCP, DIP, ISP)
- SSOT patterns (no duplicate constants/logic)
- Security (access control, transaction safety)

Returns a report of ✅ Passes, ⚠️ Recommendations, ❌ Violations.

---

## `/reverse-engineer` — Document Existing Code

Use when a feature exists but has no documentation. Produces PRD + Design Doc from reading the actual code.

**Two-phase output:**
1. **PRD** (`docs/prd/[feature].md`) — User stories, functional requirements, technical constraints
2. **Design Doc** (`docs/design/[feature-scope].md`) — Architecture, data flow, access control, hook lifecycle

Also flags `⚠️ Technical Debt` items (SSOT violations, FBA structure issues) — without modifying anything.

**When to use:**
- Feature built without a planning phase
- Onboarding a new developer
- Pre-refactor audit

---

## `/diagnose` — Root Cause Analysis

Structured debugging using the 5-Whys method:

1. Capture error context (message, stack, steps)
2. Run 5-Whys to find root cause
3. Assess impact scope
4. Present fix plan for user approval
5. Fix + verify

---

## `/adr` — Architecture Decision Record

Captures irreversible decisions permanently in `docs/adr/YYYYMMDD-title.md`. Use when choosing:
- Component rendering strategy (Client vs Server for a complex UI)
- Integrating a 3rd party service (e.g., Algolia vs Payload local search)
- Creating a new core module or modifying the FBA structure

---

## `/lint-typecheck` — Quality Gate

Runs in order:
1. `bun generate:types` — regenerate Payload types
2. `bun run lint:fix` — auto-fix ESLint issues
3. `bun run typecheck` — TypeScript compilation check

---

## `/test-e2e` — Playwright Tests

Runs feature-co-located E2E tests. Tests live in:
```
src/features/[name]/tests/e2e/
├── [feature].e2e.spec.ts
└── pom.ts
```

To run a specific feature:
```bash
bun playwright test src/features/[name]/tests/e2e
```
