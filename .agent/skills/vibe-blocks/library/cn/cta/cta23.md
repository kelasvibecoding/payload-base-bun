# CTA 23

## Metadata
- **Category**: CTA
- **Objective**: Minimal centered call to action with dark background and contrasting button.
- **Use Case**: Simple promotional section with dark theme and high contrast action button.
- **Visual Style**: Centered layout with dark background and high-contrast action button.
- **Interactivity**: Single prominent action button with hover effects and responsive design.

## Description
A minimal and high-contrast call to action component featuring a centered layout with dark background, compelling headline, descriptive text, and a contrasting action button. Designed for maximum visual impact with dark theme aesthetics and focused conversion.

## Features
- Centered content layout with dark background
- Large prominent headline with professional typography
- Descriptive text with contrasting foreground styling
- High-contrast action button for maximum visibility
- Dark theme aesthetic for modern appeal
- Clean typography with proper text hierarchy
- Responsive design with proper breakpoints
- Minimal design aesthetic for focused conversion
- Professional spacing and visual balance
- High contrast button styling for accessibility

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta23Props {
  className?: string;
}

const Cta23 = ({ className }: Cta23Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas voluptatem
            consectetur adipisci quod quos exercitationem.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground">
            Get Started Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Cta23 };
```
