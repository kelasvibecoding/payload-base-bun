---
name: zod-form-validation
description: Guidelines for ensuring consistent data validation between Payload CMS collections and frontend forms using Zod.
---

# Zod Form Validation & Payload Parity

## Core Principle
**ALL** frontend forms in this project MUST use Zod for validation. This ensures type safety and data integrity before it reaches the backend.

## 1. Schema Co-location (FBA Alignment)
- Following the **Feature-Based Architecture (FBA)** rule, define Zod schemas within the respective feature folder: `src/features/[feature-name]/schemas.ts`.
- Generic or shared schemas may still reside in `src/lib/schemas/`.
- File naming for shared schemas: `[name]-schema.ts`.
- **Goal**: Maintain a Single Source of Truth where the schema is close to the logic that uses it.

## 2. Payload Collection Parity
The Zod schema MUST mirror the validation rules defined in the corresponding Payload Collection to prevent "drift" where the frontend allows data the backend rejects.

- **Field Names**: Must exactly match the `name` property in the Payload Collection Config.
- **Validation Rules**:
  - `required: true` in Payload -> `.min(1, "Required")` or equivalent in Zod.
  - `minLength` / `maxLength` -> `.min()` / `.max()` in Zod.
  - `validate: (val) => ...` -> Implement custom Zod refinement `.refine()`.
  - `type: 'email'` -> `.email()` in Zod.
  - `type: 'number'` -> `.number()` in Zod (handle string-to-number coercion if using tracking inputs).
  - `type: 'select'` -> `.enum(['opt1', 'opt2'] as const, { message: '...' })` or `.string()` if options are dynamic.

## 3. Zod Enum & Select Fields
When mapping Payload `select` fields to Zod `z.enum`:
- **Always use `as const`**: Zod's `.enum()` needs a readonly tuple. 
  - ✅ `z.enum(['red', 'blue'] as const)`
- **Error Messages**: Prefer using `{ message: '...' }` in the second argument. Avoid `required_error` in `.enum()` as it can lead to TypeScript overload mismatches if the array isn't perfectly typed as a literal tuple.

## 3. Implementation Pattern

### 3.1 Define Schema & Type
```typescript
// src/lib/schemas/contact-schema.ts
import { z } from 'zod'

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  // Ensure these match your Payload Collection 'ContactRequests'
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
```

### 3.2 Server Action Usage
Always validate data in the Server Action before interacting with Payload. This is the security barrier.

```typescript
// src/app/(frontend)/contact/actions.ts
'use server'
import { ContactFormSchema } from '@/lib/schemas/contact-schema'

export async function submitContactForm(data: unknown) {
  // 1. Validate
  const result = ContactFormSchema.safeParse(data)

  // 2. Handle Validation Errors
  if (!result.success) {
    // IMPORTANT: Zod v4 uses .issues, not .errors
    return { success: false, error: result.error.issues[0].message }
  }

  // 3. Interact with Payload
  try {
     // ... payload.create(...)
     return { success: true }
  } catch (e) {
     return { success: false, error: '...' }
  }
}
```

## 4. Frontend Integration
Use `react-hook-form` with `@hookform/resolvers/zod` for the UI.

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, ContactFormValues } from '@/lib/schemas/contact-schema'

const form = useForm<ContactFormValues>({
  resolver: zodResolver(ContactFormSchema),
  defaultValues: { ... }
})
```

## 5. Important Notes
- **Zod v4 Compatibility**: This project uses Zod v4. Use `result.error.issues` for error details.
- **No Direct Import**: Do NOT import Payload Config directly into client components. Keep schemas pure Zod/TS.
