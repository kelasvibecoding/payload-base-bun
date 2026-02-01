---
description: Ensure code quality by regenerating types, formatting, linting, and typechecking. Use this before committing code.
---

1. Generate Payload CMS types to ensure TypeScript definitions match the latest schema configuration.
// turbo
pnpm generate:types

2. Run Prettier to format the codebase and ensure consistent style.
// turbo
pnpm format

3. Run ESLint with the `--fix` flag to automatically resolve fixable linting issues.
// turbo
pnpm lint:fix

4. Run TypeScript type checking to catch type safety errors.
// turbo
pnpm typecheck

5. Run a final ESLint check to see if any issues remain. This step is allowed to fail if manual fix is needed, but we want to see the output.
// turbo
pnpm lint || echo "Linting found issues that need manual resolution."
