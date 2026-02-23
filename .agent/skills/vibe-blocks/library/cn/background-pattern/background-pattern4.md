# Background Pattern 4

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid background pattern with a radial mask that fades at the edges.
- **Use Case**: Content sections requiring a grid pattern that softly fades at the corners, creating a vignette effect.
- **Visual Style**: Grid pattern with radial mask creating a fade effect at the edges.
- **Interactivity**: Static display.

## Description
A grid background pattern with a radial mask that creates a fade effect at the edges. The pattern uses CSS mask-image to create a radial gradient that fades the grid pattern towards the corners, creating a vignette effect. This is useful for drawing focus to the center of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern4Props {
  className?: string;
}

const BackgroundPattern4 = ({ className }: BackgroundPattern4Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Basic Grid with Fade Background */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:40px_40px]"
        style={{
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

export { BackgroundPattern4 };
```
