# Background Pattern 19

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a dashed grid background pattern using CSS gradients and masks.
- **Use Case**: Content sections requiring a dashed grid pattern for visual structure.
- **Visual Style**: Dashed grid pattern with repeating linear gradients and mask compositing.
- **Interactivity**: Static display.

## Description
A dashed grid background pattern created using CSS linear gradients and mask compositing. The pattern uses repeating linear gradients to create dashed lines in both horizontal and vertical directions, combined with mask compositing to achieve the dashed effect. This creates a technical or blueprint-like visual style.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern19Props {
  className?: string;
}

const BackgroundPattern19 = ({ className }: BackgroundPattern19Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Dashed Grid Background */}
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
            )
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
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern19 };
```
