# Background Pattern 1

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a radial gradient background pattern with primary color emanating from the top.
- **Use Case**: Hero sections, landing pages, and content areas requiring a subtle gradient background with brand colors.
- **Visual Style**: Radial gradient transitioning from background to primary color, positioned at the top center.
- **Interactivity**: Static display.

## Description
A radial gradient background pattern that creates a soft glow effect with the primary brand color radiating from the top center of the container. The gradient transitions smoothly from the background color to the primary color, creating depth and visual interest without overwhelming the content.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern1Props {
  className?: string;
}

const BackgroundPattern1 = ({ className }: BackgroundPattern1Props) => {
  return (
    <section className={cn("relative min-h-screen w-full", className)}>
      <PatternPlaceholder />
      {/* Background Pattern */}
      {/* Top Primary Radial Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, var(--background) 40%, var(--primary) 100%)",
        }}
      />
    </section>
  );
};

export { BackgroundPattern1 };
```
