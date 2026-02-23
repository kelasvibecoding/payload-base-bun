# CTA 20

## Metadata
- **Category**: CTA
- **Objective**: Minimal centered call to action with separator lines and single button.
- **Use Case**: Simple promotional section with centered layout and clean separator design.
- **Visual Style**: Centered layout with horizontal separator lines flanking the action button.
- **Interactivity**: Single centered action button with hover effects.

## Description
A minimal and elegant call to action component featuring a centered layout with a text prompt and a prominent action button flanked by horizontal separator lines. Designed for clean, simple promotional sections with maximum visual impact.

## Features
- Centered text prompt with professional typography
- Horizontal separator lines on both sides of button
- Large prominent action button
- Clean and minimal design aesthetic
- Responsive container layout
- Professional spacing and alignment
- Subtle text styling with muted foreground color
- Button hover effects and interactions

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Cta20Props {
  className?: string;
}

const Cta20 = ({ className }: Cta20Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div>
          <p className="text-center text-sm">Transform your business today.</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <Separator className="shrink" />
            <Button size="lg">Get Started</Button>
            <Separator className="shrink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta20 };
```
