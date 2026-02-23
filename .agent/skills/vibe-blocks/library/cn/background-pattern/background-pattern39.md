# Background Pattern 39

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid background pattern with dots using OKLCH color functions.
- **Use Case**: Content sections requiring a grid with dot pattern for visual texture.
- **Visual Style**: Grid pattern with radial dots using OKLCH color manipulation.
- **Interactivity**: Static display.

## Description
A grid background pattern with radial dots created using CSS linear gradients for the grid and radial gradients for the dots. The pattern uses OKLCH color functions to manipulate the foreground color variable, adjusting lightness, chroma, and hue values to create subtle, visually appealing dots. This advanced color technique allows for precise control over color appearance while maintaining accessibility.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern39Props {
  className?: string;
}

const BackgroundPattern39 = ({ className }: BackgroundPattern39Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* White Grid with Dots Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--muted) 1px, transparent 1px),
        linear-gradient(to bottom, var(--muted) 1px, transparent 1px),
        radial-gradient(circle, oklch(from var(--foreground) l c h / 0.1) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />

      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern39 };
```
