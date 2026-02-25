---
title: CN Utility Pattern
trigger: always_on
glob: "src/**/*.tsx"
description: Mandatory usage of the `cn` utility for Tailwind class merging
---

# CN Utility Pattern

Always use the `cn` utility for merging Tailwind CSS classes in React components. This ensure that conditional classes are handled correctly and that Tailwind conflicts are resolved using `tailwind-merge`.

## Core Rule
Never concatenate Tailwind classes using template literals or string addition if there are conditional or conflicting classes. Always import and use the `cn` helper.

## 1. Import Path
The `cn` utility is located at `@/lib/utils` (canonical). This is aligned with the Shadcn CLI `components.json` `aliases.utils` setting.

```typescript
import { cn } from '@/lib/utils'
```

## 2. Usage Pattern

### ✅ CORRECT (Safe Merging)
```tsx
import { cn } from '@/lib/utils'

export function MyComponent({ className, isActive }: { className?: string, isActive?: boolean }) {
  return (
    <div 
      className={cn(
        "px-4 py-2 bg-blue-500 transition-colors", // Base classes
        isActive && "bg-blue-700 font-bold",        // Conditional classes
        className                                    // External overrides
      )}
    >
      Content
    </div>
  )
}
```

### ❌ WRONG (Dirty Merging)
```tsx
// Conflicting classes won't be resolved, and falsy values might leak into the DOM
<div className={`px-4 py-2 bg-blue-500 ${isActive ? 'bg-blue-700' : ''} ${className}`}>
```

## 3. Best Practices
- **Conflict Resolution**: `twMerge` inside `cn` ensures that "bg-blue-700" overrides "bg-blue-500" correctly.
- **Cleaner Logic**: Use `cn` to keep the JSX clean and readable.
- **Component Consistency**: All Shadcn-based UI components in this project must follow this pattern.
