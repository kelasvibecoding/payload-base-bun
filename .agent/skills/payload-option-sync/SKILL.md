---
name: payload-option-sync
description: Pattern for synchronizing select/multiselect options between Payload CMS collections and frontend UI components using a Single Source of Truth.
---

# Payload Option Synchronization Skill

This skill provides the architectural framework for managing options that appear in both the Payload Admin Panel and frontend web forms.

## Pattern Overview

The goal is to eliminate redundant data entry. When you add an option to Payload, it should automatically become available in your frontend forms with the correct label and validation.

## 1. Directory Setup
Options should be co-located with their feature in `src/features/[feature]/constants.ts`.

## 2. Implementation Steps

### A. Define the Constant with Literal Type Preservation

Use `as const satisfies` and the generated Payload types to ensure strict alignment while preserving literal types for Zod enums.

```typescript
import { extractValues, type Option } from '@/lib/schemas/utils'
import { MyCollectionType } from '../../payload-types'

// Extract the type from the generated Payload interface
type FieldValue = MyCollectionType['selectField']

// Use `as const satisfies` to preserve literal types
export const SELECT_OPTIONS = [
  { label: 'Option One', value: 'opt-1' },
  { label: 'Option Two', value: 'opt-2' },
] as const satisfies readonly Option<FieldValue>[]

// Use centralized helper to extract values as tuple (preserves literal types)
export const SELECT_VALUES = extractValues(SELECT_OPTIONS)
```

**Why `as const satisfies`?**
- `as const` preserves the literal types (`'opt-1'` instead of `string`)
- `satisfies` ensures the array matches the expected shape with Payload types
- This combination catches type mismatches at compile time while preserving specificity

### B. Register in Payload Collection

Import the constant into your collection file.

```typescript
import { SELECT_OPTIONS } from '../features/my-feature/constants'

export const MyCollection = {
  // ...
  fields: [
    {
      name: 'selectField',
      type: 'select',
      options: [...SELECT_OPTIONS], // Spread to convert readonly to mutable
    }
  ]
}
```

### C. Update Zod Schema (Zod 4 Compatible)

Use the pre-extracted values tuple for proper type preservation with Zod 4.

```typescript
import { z } from 'zod/v4'  // Critical: Use zod/v4 for Zod 4
import { SELECT_VALUES } from './constants'

export const MySchema = z.object({
  // Single select
  selectField: z.enum(SELECT_VALUES),
  
  // Multi-select (array of enum values)
  multiSelectField: z.array(z.enum(SELECT_VALUES)),
})

export type MyFormValues = z.infer<typeof MySchema>
```

**⚠️ Important Zod 4 Rules:**

1. **Always import from `zod/v4`** when using Zod 4 with react-hook-form
2. **Never use `.default()`** on schema fields - it creates input/output type mismatch
3. **Never cast the schema** with `as ZodType<T>` - let TypeScript infer types

### D. Render in Frontend

Spread readonly arrays when passing to components that expect mutable arrays.

```tsx
import { SELECT_OPTIONS } from '../constants'

// For Combobox/Select components requiring mutable arrays:
<Combobox options={[...SELECT_OPTIONS]} />

// For simple mapping (readonly is fine):
{SELECT_OPTIONS.map((opt) => (
  <SelectItem key={opt.value} value={opt.value}>
    {opt.label}
  </SelectItem>
))}
```

### E. Connect to React Hook Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MySchema, type MyFormValues } from '../schemas'

export function MyForm() {
  const form = useForm<MyFormValues>({
    resolver: zodResolver(MySchema),  // No type cast needed!
    defaultValues: {
      selectField: 'opt-1',
      multiSelectField: [],  // Set defaults here, not in schema
    },
  })
  
  // ...
}
```

## 3. Common Pitfalls & Solutions

### ❌ Type Widening with `.map()`
```typescript
// WRONG: Loses literal types, becomes string[]
const values = SELECT_OPTIONS.map(o => o.value)
z.enum(values as [string, ...string[]])  // Too wide!
```

### ✅ Use extractValues Utility
```typescript
// CORRECT: Preserves literal union type using centralized helper
export const SELECT_VALUES = extractValues(SELECT_OPTIONS)
z.enum(SELECT_VALUES)  // Correctly typed!
```

### ❌ Using `.default()` with React Hook Form
```typescript
// WRONG: Creates input/output type mismatch
multiSelect: z.array(z.enum(VALUES)).default([])
// Input type: optional  |  Output type: required
// This confuses zodResolver!
```

### ✅ Set Defaults in useForm
```typescript
// CORRECT: Schema has consistent types
multiSelect: z.array(z.enum(VALUES))

// Set default in useForm:
useForm({
  defaultValues: { multiSelect: [] }
})
```

### ❌ Casting zodResolver
```typescript
// WRONG: Zod 4 $ZodType is incompatible with ZodType
resolver: zodResolver(MySchema as ZodType<MyFormValues>)
```

### ✅ Let TypeScript Infer
```typescript
// CORRECT: No cast needed
resolver: zodResolver(MySchema)
```

## 4. Best Practices Summary

| Practice | Recommendation |
|----------|----------------|
| **Naming** | Use uppercase with underscores: `SERVICE_OPTIONS`, `SERVICE_VALUES` |
| **Typing** | Always use generated Payload types for the `value` property |
| **Literals** | Use `as const satisfies` to preserve literal types |
| **Zod Import** | Use `import { z } from 'zod/v4'` for Zod 4 projects |
| **Defaults** | Set in `useForm({ defaultValues })`, not in Zod schema |
| **Readonly** | Spread readonly arrays when components need mutable types |
| **Maintenance** | When a new option is needed, **only** edit the `constants.ts` file |

## 5. Complete Example

### constants.ts
```typescript
import { extractValues, type Option } from '@/lib/schemas/utils'
import { ContactRequest } from '../../payload-types'

type ContactType = ContactRequest['contactType']
type ServiceType = NonNullable<ContactRequest['service']>[number]

export const CONTACT_TYPE_OPTIONS = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
] as const satisfies readonly Option<ContactType>[]

export const SERVICE_OPTIONS = [
  { label: 'Web Development', value: 'web-dev' },
  { label: 'UI/UX Design', value: 'ui-ux' },
] as const satisfies readonly Option<ServiceType>[]

export const CONTACT_TYPE_VALUES = extractValues(CONTACT_TYPE_OPTIONS)
export const SERVICE_VALUES = extractValues(SERVICE_OPTIONS)
```

### schemas.ts
```typescript
import { z } from 'zod/v4'
import { CONTACT_TYPE_VALUES, SERVICE_VALUES } from './constants'

export const ContactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  contactType: z.enum(CONTACT_TYPE_VALUES),
  service: z.array(z.enum(SERVICE_VALUES)),
  message: z.string().min(10),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
```

### ContactForm.tsx
```tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, type ContactFormValues } from '../schemas'
import { CONTACT_TYPE_OPTIONS, SERVICE_OPTIONS } from '../constants'

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      contactType: 'general',
      service: [],
      message: '',
    },
  })

  return (
    <Form {...form}>
      {/* Contact Type Select */}
      <Select>
        {CONTACT_TYPE_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </Select>

      {/* Service Multi-Select */}
      <Combobox 
        options={[...SERVICE_OPTIONS]} 
        multiple 
      />
    </Form>
  )
}
```
