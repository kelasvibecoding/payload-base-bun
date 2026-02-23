# Background Pattern 29

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a radial gradient background with a subtle glow effect at the top using OKLCH color functions.
- **Use Case**: Hero sections, landing pages, and content areas requiring a subtle gradient glow effect with advanced color manipulation.
- **Visual Style**: Radial gradient with OKLCH color function creating a soft glow at the top center.
- **Interactivity**: Static display.

## Description
A gradient background pattern that creates a soft glow effect at the top using the OKLCH color function. The pattern uses a radial gradient with the primary color variable, adjusted using OKLCH color manipulation to create a subtle, visually appealing glow effect. This advanced color technique allows for precise control over lightness, chroma, and hue.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern29Props {
  className?: string;
}

const BackgroundPattern29 = ({ className }: BackgroundPattern29Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Top Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, oklch(from var(--primary) calc(l * 0.85) calc(c * 0.8) h / 0.2), oklch(from var(--primary) calc(l * 0.7) calc(c * 0.6) h / 0.1) 60%, transparent)`,
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern29 };
```
