# Background Pattern 40

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid with dots background pattern with a corner fade effect using OKLCH color functions.
- **Use Case**: Content sections requiring a grid with dot pattern that fades at the top-left corner.
- **Visual Style**: Grid pattern with radial dots and a radial mask creating a fade effect at the top-left corner.
- **Interactivity**: Static display.

## Description
A grid background pattern with radial dots and a radial mask that creates a fade effect at the top-left corner. The pattern uses CSS linear gradients to create a grid, combined with radial gradients for the dots using OKLCH color manipulation. A radial gradient mask fades the pattern towards the top-left corner, creating a vignette effect. This creates a technical or blueprint-like visual style that adds visual interest while drawing focus away from the corner.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern40Props {
  className?: string;
}

const BackgroundPattern40 = ({ className }: BackgroundPattern40Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Right Fade White Grid with Dots Background */}
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
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      />

      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern40 };
```
