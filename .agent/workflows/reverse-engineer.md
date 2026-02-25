---
description: Generate PRD and Design Docs from existing code — useful for documenting legacy features or onboarding new developers.
---

# /reverse-engineer Workflow

Use this when you have an existing feature or codebase with no documentation and need to produce structured artifacts (PRD, Design Doc) that reflect the actual implementation.

## When Is This Useful?

- A feature was built without a planning phase — document it retroactively
- Onboarding a new developer to an existing feature
- Preparing for a major refactor — understand what exists first
- Auditing the codebase architecture

## Phase 1: PRD Generation

1. **Scope Discovery**
   - Identify the feature/module to reverse-engineer
   - List all relevant files: collections, services, hooks, components, routes
   - Map the data flow (input → processing → output)

2. **Generate PRD**
   - Write `docs/prd/[feature].md` covering:
     ```markdown
     # PRD: [Feature Name]

     ## Problem Statement
     [What problem does this feature solve?]

     ## User Stories
     - As a [role], I want to [action] so that [outcome]

     ## Functional Requirements
     [What the feature actually does, derived from code]

     ## Technical Constraints
     [DB schema, API contracts, auth requirements]
     ```
   - **Present to user for review before saving**

3. **Code Verification**
   - Cross-check PRD against actual implementation
   - Flag any gaps or undocumented edge cases

## Phase 2: Design Doc Generation

1. **Technical Design**
   - Write `docs/design/[feature-scope].md` covering:
     - Architecture decisions (which collections, which services)
     - Data flow diagram (Mermaid if complex)
     - Access control patterns used
     - Hook lifecycle (beforeChange, afterChange, etc.)

2. **FBA-SOLID-SSOT Compliance Check**
   - Does the existing code follow FBA structure?
   - Are there SSOT violations (duplicate constants/options)?
   - Flag issues as `⚠️ Technical Debt` items

3. **Final Report**
   - Summary of what was documented
   - List of `⚠️ Technical Debt` items discovered
   - Recommended refactors (if any) — do NOT implement without user approval
