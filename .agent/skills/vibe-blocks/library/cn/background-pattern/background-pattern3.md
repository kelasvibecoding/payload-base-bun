# Background Pattern 3

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a basic grid background pattern using CSS gradients.
- **Use Case**: Content sections, dashboards, and layouts requiring a subtle grid pattern for visual structure.
- **Visual Style**: Uniform grid pattern with 40px spacing, using muted color for subtle visibility.
- **Interactivity**: Static display.

## Description
A basic grid background pattern created using CSS linear gradients to form a two-dimensional grid. The pattern uses the muted color variable for subtle visibility and features 40px spacing between grid lines. This creates a structured background that adds visual interest without overwhelming the foreground content.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern3Props {
  className?: string;
}

const BackgroundPattern3 = ({ className }: BackgroundPattern3Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Basic Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern3 };
```
