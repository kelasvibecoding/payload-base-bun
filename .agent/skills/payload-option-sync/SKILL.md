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

### A. Define the Constant
Use `as const` and the generated Payload types to ensure strict alignment.

```typescript
import { MyCollectionType } from '../../payload-types'

// Extract the type from the generated Payload interface
type FieldValue = MyCollectionType['selectField']

export const SELECT_OPTIONS: { label: string; value: FieldValue }[] = [
  { label: 'Option One', value: 'opt-1' },
]
```

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
      options: [...SELECT_OPTIONS], // Always use spread
    }
  ]
}
```

### C. Update Zod Schema
Extract values from the object array to satisfy Zod's enum requirements.

```typescript
import { SELECT_OPTIONS } from './constants'

export const MySchema = z.object({
  selectField: z.enum(SELECT_OPTIONS.map(o => o.value) as [string, ...string[]]),
})
```

### D. Render in Frontend
```tsx
import { SELECT_OPTIONS } from '../constants'

// In your component
{SELECT_OPTIONS.map((opt) => (
  <SelectItem key={opt.value} value={opt.value}>
    {opt.label}
  </SelectItem>
))}
```

## 3. Best Practices
- **Naming**: Use uppercase with underscores for constants (e.g., `SERVICE_OPTIONS`).
- **Typing**: Always use the generated `Payload` types for the `value` property.
- **Maintenance**: When a new option is needed, **only** edit the `constants.ts` file.
