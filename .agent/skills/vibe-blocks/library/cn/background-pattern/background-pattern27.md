# Background Pattern 27

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a gradient background with a subtle glow effect at the top using OKLCH color functions.
- **Use Case**: Hero sections, landing pages, and content areas requiring a subtle gradient glow effect with advanced color manipulation.
- **Visual Style**: Radial gradient with OKLCH color function creating a soft glow at the top center.
- **Interactivity**: Static display.

## Description
A gradient background pattern that creates a soft glow effect at the top using the OKLCH color function. The pattern uses a radial gradient with the primary color variable, adjusted using OKLCH color manipulation to create a subtle, visually appealing glow effect. This advanced color technique allows for precise control over lightness, chroma, and hue.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern27Props {
  className?: string;
}

const BackgroundPattern27 = ({ className }: BackgroundPattern27Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Gradinet Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(from var(--primary) calc(l - 0.1) c h / 0.20), transparent 70%)",
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern27 };
```
