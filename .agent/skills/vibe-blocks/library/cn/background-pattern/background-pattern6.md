# Background Pattern 6

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a grid background pattern with a top fade effect.
- **Use Case**: Content sections requiring a grid pattern that fades at the top.
- **Visual Style**: Grid pattern with radial mask creating a fade effect at the top.
- **Interactivity**: Static display.

## Description
A grid background pattern with a radial mask that creates a fade effect at the top. The pattern uses CSS mask-image to create a radial gradient that fades the grid pattern towards the top, creating a vignette effect. This is useful for drawing focus to the bottom of the content area.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern6Props {
  className?: string;
}

const BackgroundPattern6 = ({ className }: BackgroundPattern6Props) => {
  return (
    <section className={cn("relative min-h-screen w-full", className)}>
      <PatternPlaceholder />
      {/* Background Pattern */}
      {/* Top Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_var(--muted)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--muted)_1px,_transparent_1px)] bg-[length:32px_32px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
    </section>
  );
};

export { BackgroundPattern6 };
```
