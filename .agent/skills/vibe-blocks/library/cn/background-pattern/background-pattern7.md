# Background Pattern 7

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid background pattern with a bottom fade effect.
- **Use Case**: Content sections requiring a grid pattern that fades at the bottom.
- **Visual Style**: Grid pattern with radial mask creating a fade effect at the bottom.
- **Interactivity**: Static display.

## Description
A grid background pattern with a radial mask that creates a fade effect at the bottom. The pattern uses CSS mask-image to create a radial gradient that fades the grid pattern towards the bottom, creating a vignette effect. This is useful for drawing focus to the top of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern7Props {
  className?: string;
}

const BackgroundPattern7 = ({ className }: BackgroundPattern7Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      <PatternPlaceholder />
      {/* Background Pattern */}
      {/* Bottom Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
        }}
      />
    </section>
  );
};

export { BackgroundPattern7 };
```
