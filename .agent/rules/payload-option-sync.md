---
title: Payload Option Synchronization
trigger: always_on
glob: "**/*"
description: Ensures a single source of truth for Payload select options and frontend UI by using shared constants validated against generated types.
---

# Payload Option Synchronization

## Core Philosophy
Maintain a **Single Source of Truth (SSOT)** for all select/multiselect options. Instead of defining options directly in Payload collections or frontend components, define them in a central `constants.ts` file within the feature domain.

## The Problem
- **Payload Types** only contain values (e.g., `'web-dev'`), not human-readable labels.
- Defining options in the Collection and labels in the Frontend leads to redundancy and sync errors.
- **Zod 4** requires special handling to preserve literal types for Payload compatibility.

## Implementation Pattern

### 1. Define Master Options with `as const satisfies`
Create a `constants.ts` file in `src/features/[feature-name]/`.

```typescript
import { extractValues, type Option } from '@/lib/schemas/utils'
import { CollectionType } from '../../payload-types'

// Extract types from Payload-generated interfaces
type ItemType = CollectionType['fieldName']

// Use `as const satisfies` to preserve literal types
export const ITEM_OPTIONS = [
  { label: 'Display Name', value: 'internal-value' },
] as const satisfies readonly Option<ItemType>[]

// Use centralized helper to extract values as tuple for Zod enums
export const ITEM_VALUES = extractValues(ITEM_OPTIONS)
```

### 2. Connect to Payload Collection
Spread the constants in the field definition.

```typescript
{
  name: 'fieldName',
  type: 'select',
  options: [...ITEM_OPTIONS],
}
```

### 3. Connect to Zod Schema (Zod 4)
Use the pre-extracted values tuple for proper type preservation.

```typescript
import { z } from 'zod/v4'  // Use zod/v4 for Zod 4 compatibility
import { ITEM_VALUES } from './constants'

export const MySchema = z.object({
  fieldName: z.enum(ITEM_VALUES),
  // For arrays of enum values:
  multiField: z.array(z.enum(ITEM_VALUES)),
})

export type MyFormValues = z.infer<typeof MySchema>
```

### 4. Connect to Frontend UI
Spread readonly arrays to make them mutable for components.

```tsx
import { ITEM_OPTIONS } from '../constants'

// Spread to convert readonly to mutable
<Combobox options={[...ITEM_OPTIONS]} />

// Or for simple mapping:
{ITEM_OPTIONS.map((opt) => (
  <SelectItem key={opt.value} value={opt.value}>
    {opt.label}
  </SelectItem>
))}
```

## Zod 4 + React Hook Form Compatibility

### Critical Import
```typescript
// ✅ CORRECT for Zod 4
import { z } from 'zod/v4'

// ❌ WRONG - causes type mismatch with @hookform/resolvers
import { z } from 'zod'
```

### Avoid `.default()` in Schemas
```typescript
// ❌ WRONG - causes input/output type mismatch
service: z.array(z.enum(SERVICE_VALUES)).default([])

// ✅ CORRECT - consistent input/output types
service: z.array(z.enum(SERVICE_VALUES))
// Set default in useForm defaultValues instead
```

### No Type Casts on zodResolver
```typescript
// ❌ WRONG - Zod 4 types are incompatible with ZodType cast
resolver: zodResolver(MySchema as ZodType<MyFormValues>)

// ✅ CORRECT - let TypeScript infer types
resolver: zodResolver(MySchema)
```

## Mandatory Requirements
1. **Never** hardcode select options directly in UI components.
2. **Never** hardcode select options directly in Payload collections if used on frontend.
3. **Always** use `as const satisfies` for option arrays to preserve literal types.
4. **Always** pre-extract values as tuples for Zod enums.
5. **Always** type the `value` field using generated Payload types.
6. **Always** import from `zod/v4` when using Zod 4 with react-hook-form.
7. **Never** use `.default()` on Zod schemas used with react-hook-form resolvers.
