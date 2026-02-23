# Background Pattern 26

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a dashed grid background pattern with a center fade effect.
- **Use Case**: Content sections requiring a dashed grid pattern that fades at the center.
- **Visual Style**: Dashed grid pattern with radial mask creating a fade effect at the center.
- **Interactivity**: Static display.

## Description
A dashed grid background pattern with a radial mask that creates a fade effect at the center. The pattern uses CSS linear gradients to create a grid, combined with repeating linear gradients and mask compositing to achieve a dashed effect. A radial gradient mask fades the pattern towards the center, creating a vignette effect. This creates a technical or blueprint-like visual style that adds visual interest while drawing focus to the edges of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern26Props {
  className?: string;
}

const BackgroundPattern26 = ({ className }: BackgroundPattern26Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Center Fade Dashed Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--muted) 1px, transparent 1px),
            linear-gradient(to bottom, var(--muted) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern26 };
```
