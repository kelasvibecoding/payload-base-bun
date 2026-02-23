# Background Pattern 17

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a diagonal cross grid background pattern with a corner fade effect.
- **Use Case**: Content sections requiring a diagonal grid pattern that fades at the bottom-right corner.
- **Visual Style**: Diagonal cross pattern with radial mask creating a fade effect at the bottom-right corner.
- **Interactivity**: Static display.

## Description
A diagonal cross grid background pattern with a radial mask that creates a fade effect at the bottom-right corner. The pattern uses CSS repeating linear gradients at 45-degree and 135-degree angles to create a mesh-like visual effect, combined with a mask-image that fades the pattern towards the bottom-right corner. This creates a dynamic background that adds visual interest while drawing focus away from the corner.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern17Props {
  className?: string;
}

const BackgroundPattern17 = ({ className }: BackgroundPattern17Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Bottom Left Fade Diagonal Cross Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px),
            repeating-linear-gradient(135deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px)
          `,
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern17 };
```
