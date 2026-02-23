# Background Pattern 28

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a center spotlight background effect using OKLCH color functions for advanced color manipulation.
- **Use Case**: Hero sections, landing pages, and content areas requiring a subtle spotlight effect that draws focus to the center.
- **Visual Style**: Radial gradient with multiple OKLCH color stops creating a soft spotlight effect at the center.
- **Interactivity**: Static display with pointer-events disabled.

## Description
A center spotlight background pattern that creates a soft, radial glow effect using advanced OKLCH color functions. The pattern uses multiple color stops with carefully calculated lightness, chroma, and hue values to create a natural-looking spotlight that draws focus to the center of the content area. The pointer-events-none class ensures the background doesn't interfere with user interactions.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern28Props {
  className?: string;
}

const BackgroundPattern28 = ({ className }: BackgroundPattern28Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Center Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
        radial-gradient(
          circle at center,
          oklch(from var(--primary) calc(l * 0.85) calc(c * 0.8) h / 0.12) 0%,
          oklch(from var(--primary) calc(l * 0.8) calc(c * 0.75) h / 0.08) 30%,
          oklch(from var(--primary) calc(l * 0.75) calc(c * 0.7) h / 0.04) 60%,
          transparent 80%
        )
      `,
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern28 };
```
