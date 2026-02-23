# Background Pattern 11

## Metadata
- **Category**: Background Pattern
- **Objective**: Create a diagonal cross grid background pattern.
- **Use Case**: Content sections requiring a diagonal grid pattern for visual interest.
- **Visual Style**: Diagonal cross pattern using repeating linear gradients.
- **Interactivity**: Static display.

## Description
A diagonal cross grid background pattern created using CSS repeating linear gradients at 45-degree and 135-degree angles. The pattern creates a mesh-like visual effect that adds dynamic visual interest to the background without overwhelming the foreground content.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { PatternPlaceholder } from "@/components/pattern-placeholder";

interface BackgroundPattern11Props {
  className?: string;
}

const BackgroundPattern11 = ({ className }: BackgroundPattern11Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        className,
      )}
    >
      {/* Background Pattern */}
      {/* Diagonal Cross Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px),
            repeating-linear-gradient(135deg, transparent, transparent 32px, var(--muted) 32px, var(--muted) 33px)
          `,
        }}
      />
      <PatternPlaceholder />
    </section>
  );
};

export { BackgroundPattern11 };
```
