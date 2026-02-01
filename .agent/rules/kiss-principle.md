---
trigger: always_on
glob: "**/*"
description: "Enforce the KISS (Keep It Simple, Stupid) principle across the codebase."
---

# KISS Principle (Keep It Simple, Stupid)

Apply the KISS principle to all aspects of software development within this project to ensure simplicity, maintainability, and clarity.

## 1. Avoid Over-Engineering
- Do not build complex abstractions or generic systems for problems that haven't occurred yet.
- Focus on solving the immediate requirement in the simplest way possible.

## 2. YAGNI (You Ain't Gonna Need It)
- Do not implement features, library integrations, or "hooks for future use" until they are actually required by a current task.
- Favor standard, built-in Payload CMS or Next.js features over custom-built alternatives unless there is a clear, immediate advantage.

## 3. Straightforward Logic
- If a piece of logic takes too long to explain, it is likely too complex. Refactor it into simpler, more obvious steps.
- Prefer clear, imperative code over clever, "magical," or highly condensed syntax if it improves readability.

## 4. Documentation Over Abstraction
- If logic is complex because the business rule is complex, explain it with comments rather than hiding it behind multiple layers of abstraction.

## 5. Standard Patterns
- Use the established patterns of the project (e.g., standard Payload hooks, standard Shadcn components) rather than introducing new paradigms without a strong justification.

## 6. Balanced DRY (Don't Repeat Yourself)
- **Avoid Premature Abstraction**: It is better to duplicate code once ("Write Everything Twice") than to create the wrong abstraction early.
- **Rule of Three**: Only refactor into a shared function or component when you have repeated the same logic **three times**.
- **Readability Trumps DRY**: If removing duplication requires passing too many flags or making the code harder to follow, duplication is preferred.
