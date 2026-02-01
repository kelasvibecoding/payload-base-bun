---
trigger: model_decision
description: "Ensure consistent data validation between Payload CMS collections and frontend forms using Zod, with logic co-located in feature folders."
---

# Zod Form Validation & Payload Parity

## Core Principle
**ALL** frontend forms in this project MUST use Zod for validation. This ensures type safety and data integrity before it reaches the backend.

## 1. Schema Co-location (FBA Alignment)
- Following the **Feature-Based Architecture (FBA)** rule, define Zod schemas within the respective feature folder: `src/features/[feature-name]/schemas.ts`.
- Generic or shared schemas may still reside in `src/lib/schemas/`.
- File naming for shared schemas: `[name]-schema.ts`.

## 2. Payload Collection Parity
The Zod schema MUST mirror the validation rules defined in the corresponding Payload Collection to prevent "drift."

- **Field Names**: Must exactly match the `name` property in the Payload Collection Config.
- **Validation Rules Mapping**:
  - `required: true` in Payload -> `.min(1, "Required")` or equivalent in Zod.
  - `minLength` / `maxLength` -> `.min()` / `.max()` in Zod.
  - `validate: (val) => ...` -> Implement custom Zod refinement `.refine()`.
  - `type: 'email'` -> `.email()` in Zod.
  - `type: 'number'` -> `.number()` in Zod.
  - `type: 'select'` -> `.enum(['opt1', 'opt2'] as const, { message: '...' })` or `.string()` if options are dynamic.

## 3. Zod Enum Best Practices
- **Tuple Definition**: Always use `as const` when defining arrays for `z.enum`. This enables proper TypeScript inference and avoids overload issues.
  - ✅ `z.enum(['a', 'b'] as const)`
  - ❌ `z.enum(['a', 'b'])`
- **Error Messages**: Use the `{ message: "..." }` property in the parameters object. For some `z.enum` overloads, properties like `required_error` may not be directly available.

## 3. Server Action Validation
Always validate data in the Server Action using `.safeParse()` before interacting with the Payload Local API.

```typescript
// Example: src/features/contact/actions.ts
'use server'
import { ContactFormSchema } from './schemas'

export async function submitContactForm(data: unknown) {
  const result = ContactFormSchema.safeParse(data)
  if (!result.success) {
    // Project uses Zod v4: access issues via result.error.issues
    return { success: false, error: result.error.issues[0].message }
  }
  // ... proceed to payload operation
}
```

## 4. Frontend Integration
Use `react-hook-form` with `@hookform/resolvers/zod` for all interactive forms.

## 5. Security & Safety
- **Zod v4 Compatibility**: Use `result.error.issues` for error details.
- **Client/Server Boundary**: NEVER import Payload Config or Types into Client Components. Use Zod schemas and `z.infer` for shared types.
- **Local API**: Remember that Payload's Local API bypasses access control by default. Validation at the Action level is your first line of defense.