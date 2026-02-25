<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Keep this managed block so 'openspec update' can refresh the instructions.
<!-- OPENSPEC:END -->

# Repository Agent Guide

This repo uses the Antigravity agentic boilerplate for Payload CMS + Next.js.

## Must-Read Files
- `mission.md` (current active objective)
- `CONTEXT.md` (core project context and architecture)
- `.agent/rules/` (domain-specific rules, auto-applied based on context)
- `docs/design/` (past strategy plans)

## Workflow Commands
You can trigger specialized workflows. If the user asks to plan, implement, or review, follow these workflows:
- `/plan`: Generate a strategic plan in `docs/design/`.
- `/implement`: Full lifecycle (plan -> execute -> verify).
- `/diagnose`: 5-whys root cause analysis.
- `/review`: Architectural compliance review.
- `/lint-typecheck`: Run quality checks.

## Code Style
- Follow the FBA-SOLID-SSOT principles (`.agent/rules/fba-solid-ssot.md`).
- Ensure all select options and Zod schemas use SSOT (`.agent/rules/payload-option-sync.md`).
- Respect zero-JS rules where required (`.agent/rules/performance-lockdown.md`).
