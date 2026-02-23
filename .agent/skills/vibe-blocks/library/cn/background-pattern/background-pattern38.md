# Background Pattern 38

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a circuit board-style background pattern with a center fade effect.
- **Use Case**: Technical interfaces, dashboard backgrounds, and content areas requiring a tech-inspired aesthetic with center focus.
- **Visual Style**: Multi-layered grid pattern with varying grid sizes and a radial mask creating a fade effect at the center.
- **Interactivity**: Static display with pointer-events disabled.

## Description
A circuit board-style background pattern featuring multiple layers of grids with different sizes and a center fade effect. The pattern uses CSS linear gradients to create both large (50px) and small (10px) grid patterns, overlaid to create a complex, technical aesthetic reminiscent of circuit boards or technical diagrams. A radial gradient mask fades the pattern towards the center, creating a vignette effect. The pointer-events-none class ensures the background doesn't interfere with user interactions.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern38Props {
  className?: string;
}

const BackgroundPattern38 = ({ className }: BackgroundPattern38Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Center Fade Circuit Board Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(90deg, var(--muted) 1px, transparent 1px),
        linear-gradient(180deg, var(--muted) 1px, transparent 1px),
        linear-gradient(90deg, var(--muted) 1px, transparent 1px),
        linear-gradient(180deg, var(--muted) 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
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

export { BackgroundPattern38 };
```
