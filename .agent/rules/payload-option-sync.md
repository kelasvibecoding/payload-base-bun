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

## Implementation Pattern

### 1. Define Master Options
Create a `constants.ts` file in `src/features/[feature-name]/`.

```typescript
import { [CollectionType] } from '../../payload-types'

type ItemType = [CollectionType]['fieldName']

export const ITEM_OPTIONS: { label: string; value: ItemType }[] = [
  { label: 'Display Name', value: 'internal-value' },
]
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

### 3. Connect to Zod Schema
Extract values for validation.

```typescript
fieldName: z.enum(ITEM_OPTIONS.map(opt => opt.value) as [string, ...string[]])
```

### 4. Connect to Frontend UI
Loop over options for components like `Select` or `Combobox`.

```tsx
{ITEM_OPTIONS.map((opt) => (
  <SelectItem key={opt.value} value={opt.value}>
    {opt.label}
  </SelectItem>
))}
```

## Mandatory Requirements
1. **Never** hardcode select options directly in `ContactForm.tsx` or similar UI files.
2. **Never** hardcode select options directly in Payload collections if they are used on the frontend.
3. Always type the `value` field using the generated Payload type to ensure the Backend and Constants stay synchronized.
