---
title: DOM Nesting & Hydration Safety
trigger: always_on
glob: "**/*.{tsx,jsx}"
description: Prevents common HTML nesting errors that cause hydration mismatches and invalid DOM structures, such as buttons inside buttons or anchors inside anchors.
---

# DOM Nesting & Hydration Safety

## Core Rule
Always ensure that generated HTML follows the strict nesting specifications of the W3C. Invalid nesting common in React components often leads to **Hydration Errors** and broken event propagation.

## 1. Forbidden Nested Elements
Never nest the following interactive elements, even if using custom components that wrap them (e.g., Shadcn Buttons).

| Parent Element | Forbidden Descendant | Alternative |
| :--- | :--- | :--- |
| `<button>` | `<button>`, `<a>`, `<input>` | Use `<span role="button">` with `tabIndex={0}` |
| `<a>` | `<a>`, `<button>` | Use a flat layout or `div` with absolute positioning |
| `<p>` | `<div>`, `<ul>`, `<table>` | Use `<div>` or `<span>` for the parent |

## 2. Interactive Badge Pattern
When building multi-select components (like Combobox or Tags) where a badge is inside a trigger button:

### ❌ WRONG (Causes Error)
```tsx
<Button>
  Select Items
  <Badge>
    Item 1
    <button onClick={remove}>X</button> {/* ILLEGAL: Button inside Button */}
  </Badge>
</Button>
```

### ✅ CORRECT (Safe)
```tsx
<Button>
  Select Items
  <Badge>
    Item 1
    <span 
      role="button" 
      tabIndex={0} 
      onClick={(e) => {
        e.stopPropagation(); // CRITICAL: Prevent parent trigger
        remove();
      }}
    >
      X
    </span>
  </Badge>
</Button>
```

## 3. Propagation Control
When nesting "pseudo-interactive" elements (like spans with roles) inside actual buttons, **always** use `e.stopPropagation()` and `e.preventDefault()`. Failure to do so will trigger the parent's event (e.g., clicking 'Remove' accidentally toggles the dropdown).

## 4. Hydration Check
If you see the error: *"In HTML, X cannot be a descendant of Y"*, it is a signal that your React tree is generating invalid HTML. This must be fixed at the component level by changing the element types, not by suppressing the error.
