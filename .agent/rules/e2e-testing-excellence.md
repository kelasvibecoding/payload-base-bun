---
trigger: always_on
glob: "src/features/**/tests/e2e/*.spec.ts"
description: Standards for high-precision E2E testing in Feature-Based Architecture.
---

# E2E Testing Excellence (FBA-Driven)

Follow these rules to create deterministic, maintainable, and feature-aligned E2E tests using Playwright.

## 1. Feature-Based Co-location
**Rule**: E2E tests must live within the feature domain they verify.

#### ✅ REQUIRED Structure:
```
src/features/[feature-name]/
├── tests/
│   └── e2e/
│       ├── [feature].e2e.spec.ts  # Test logic
│       └── pom.ts                # Page Object Model (SSOT for selectors)
```

## 2. Page Object Model (POM) as SSOT
**Rule**: NEVER hardcode selectors in `.spec.ts` files. All selectors and common workflows MUST live in the feature's `pom.ts`.

#### ✅ REQUIRED `pom.ts`:
```typescript
export class FeaturePage {
  constructor(private page: Page) {}
  
  // Selectors
  readonly submitButton = this.page.getByRole('button', { name: /submit/i })
  
  // High-level Actions
  async submitForm(data: FormData) {
    await this.fillData(data)
    await this.submitButton.click()
  }
}
```

## 3. Deterministic Data Seeding
**Rule**: Use Payload's Local API (via a global setup or test helper) to seed the database before tests. Avoid relying on manual UI setup for prerequisites.

- **Setup**: Clear relevant collections.
- **Seed**: Create needed users, documents, or settings.
- **Teardown**: (Optional) Cleanup after test.

## 4. SOLID Testing Principles
- **SRP**: One test file = One feature slice.
- **Stability**: Prefer `getByRole` or `getByTestId` over CSS selectors.
- **Isolation**: Each test should be independent and not rely on previous test results.

## 5. Execution
Use the `/test-e2e` workflow to run tests for a specific feature.

## 6. Test Coverage Monitoring
**Rule**: All E2E tests should contribute to the project's coverage metrics.

- **Instrumenting**: Ensure the frontend is built with coverage instrumentation where required.
- **Reporting**: Coverage reports must be reviewed after major feature implementations to ensure no critical paths are untested.
- **Visibility**: Target a baseline coverage for critical business logic (e.g., Auth, Payments, Core CRUD).

## 7. Execution
Use the `/test-e2e` workflow to run tests for a specific feature.
