# Background Pattern 30

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a corner background pattern with radial gradients using OKLCH color functions.
- **Use Case**: Content sections requiring corner accents with advanced color manipulation.
- **Visual Style**: Radial gradients positioned at both top corners using OKLCH color functions.
- **Interactivity**: Static display.

## Description
A corner background pattern featuring radial gradients positioned at both the top-left and top-right corners. The pattern uses OKLCH color functions to manipulate the primary color variable, adjusting lightness and chroma values to create subtle, visually appealing corner accents. This advanced color technique allows for precise control over color appearance while maintaining accessibility.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern30Props {
  className?: string;
}

const BackgroundPattern30 = ({ className }: BackgroundPattern30Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Corner Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, oklch(from var(--primary) calc(l * 0.7) calc(c * 0.6) h / 0.15), transparent),
        radial-gradient(circle 600px at 100% 200px, oklch(from var(--primary) calc(l * 0.75) calc(c * 0.65) h / 0.12), transparent)
      `,
        }}
      />

      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern30 };
```
