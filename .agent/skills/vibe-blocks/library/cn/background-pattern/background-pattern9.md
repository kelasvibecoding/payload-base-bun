```
# Background Pattern 9

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid background pattern with a bottom-right fade effect.
- **Use Case**: Content sections requiring a grid pattern that fades at the bottom-right corner.
- **Visual Style**: Grid pattern with radial mask creating a fade effect at the bottom-right corner.
- **Interactivity**: Static display.

## Description
A grid background pattern with a radial mask that creates a fade effect at the bottom-right corner. The pattern uses CSS mask-image to create a radial gradient that fades the grid pattern towards the bottom-right corner. This is useful for drawing focus away from the corner of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern9Props {
  className?: string;
}

const BackgroundPattern9 = ({ className }: BackgroundPattern9Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      <PatternPlaceholder />
      {/* Background Pattern */}
      {/* Bottom Right Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      />
    </section>
  );
};

export { BackgroundPattern9 };
```
