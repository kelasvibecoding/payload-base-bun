---
trigger: always_on
glob: "src/blocks/**/*"
description: Standard font size patterns for Hero and Block sections to ensure UI consistency.
---

# Font Sizing Guidelines

Follow these mobile-first responsive font sizing patterns to ensure visual hierarchy and consistency across all sections.

## Visual Hierarchy
**Sub-title > Title > Description**

- Use `font-outfit` for all headings (H1, H2, H3).
- Use `font-sans` for descriptions and body text.

## Standard Font Size Patterns

### Hero Section - Main Title (H1)
```tsx
// Standard Hero Title
<h1 className="font-outfit text-5xl font-extrabold tracking-tight leading-[1.1] sm:text-7xl md:text-8xl">
  {title}
</h1>
```

### Hero Section - Sub-title / Badge
```tsx
<span className="bg-primary/10 text-primary border-primary/20 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
  {subtitle}
</span>
```

### Section - Main Title (H2)
```tsx
<h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl">
  {mainTitle}
</h2>
```

### Card / Feature Title (H3)
```tsx
<h3 className="font-outfit text-xl font-bold">
  {cardTitle}
</h3>
```

### Description / Paragraph
```tsx
<p className="text-muted-foreground text-lg leading-relaxed sm:text-xl">
  {description}
</p>
```

## Responsive Strategy
1. Start with mobile sizes (base classes).
2. Scale up using responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
3. Ensure line-height and tracking are adjusted for large text.
