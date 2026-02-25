---
description: Run E2E tests for specific features or the entire project.
---

# /test-e2e Workflow

Standardized procedure for executing and verifying E2E tests.

1. **Check Environment**
   - Ensure `.env` or `test.env` is correctly configured.
   - Verify that the local Payload instance is accessible.

2. **Feature-Specific Run**
   - If testing a specific feature, run:
   ```bash
   bun playwright test src/features/[feature-name]/tests/e2e
   ```

3. **Full System Run**
   - To verify the entire system, run:
   ```bash
   bun playwright test
   ```

4. **Review Results**
   - Check the generated HTML report if failures occur:
   ```bash
   bun playwright show-report
   ```

// turbo
5. **Auto-Fix (Lints only)**
   - If test code has linting errors, run:
   ```bash
   bun run lint:fix
   ```
