# Background Pattern 31

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a circuit board-style background pattern with multiple grid layers.
- **Use Case**: Technical interfaces, dashboard backgrounds, and content areas requiring a tech-inspired aesthetic.
- **Visual Style**: Multi-layered grid pattern with varying grid sizes creating a circuit board appearance.
- **Interactivity**: Static display with pointer-events disabled.

## Description
A circuit board-style background pattern featuring multiple layers of grids with different sizes. The pattern uses CSS linear gradients to create both large (50px) and small (10px) grid patterns, overlaid to create a complex, technical aesthetic reminiscent of circuit boards or technical diagrams. The pointer-events-none class ensures the background doesn't interfere with user interactions.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern31Props {
  className?: string;
}

const BackgroundPattern31 = ({ className }: BackgroundPattern31Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/*  Circuit Board Background */}
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
        }}
      />

      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern31 };
```
