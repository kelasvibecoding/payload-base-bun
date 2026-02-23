# Background Pattern 18

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a diagonal cross grid background pattern with a center fade effect.
- **Use Case**: Content sections requiring a diagonal grid pattern that fades at the center.
- **Visual Style**: Diagonal cross pattern with radial mask creating a fade effect at the center.
- **Interactivity**: Static display.

## Description
A diagonal cross grid background pattern with a radial mask that creates a fade effect at the center. The pattern uses CSS repeating linear gradients at 45-degree and 135-degree angles to create a mesh-like visual effect, combined with a mask-image that fades the pattern towards the center. This creates a dynamic background that adds visual interest while drawing focus to the edges of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern18Props {
  className?: string;
}

const BackgroundPattern18 = ({ className }: BackgroundPattern18Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Center Fade Diagonal Cross Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px),
            repeating-linear-gradient(135deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px)
          `,
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern18 };
```
