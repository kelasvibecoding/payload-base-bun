# Background Pattern 32

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a circuit board-style background pattern with a corner fade effect.
- **Use Case**: Technical interfaces, dashboard backgrounds, and content areas requiring a tech-inspired aesthetic with corner focus.
- **Visual Style**: Multi-layered grid pattern with varying grid sizes and a radial mask creating a fade effect at the top-left corner.
- **Interactivity**: Static display with pointer-events disabled.

## Description
A circuit board-style background pattern featuring multiple layers of grids with different sizes and a corner fade effect. The pattern uses CSS linear gradients to create both large (50px) and small (10px) grid patterns, overlaid to create a complex, technical aesthetic reminiscent of circuit boards or technical diagrams. A radial gradient mask fades the pattern towards the top-left corner, creating a vignette effect. The pointer-events-none class ensures the background doesn't interfere with user interactions.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern32Props {
  className?: string;
}

const BackgroundPattern32 = ({ className }: BackgroundPattern32Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Right Fade Circuit Board Background */}
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
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      />

      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern32 };
```
