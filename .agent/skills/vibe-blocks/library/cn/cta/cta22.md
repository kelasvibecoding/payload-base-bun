# CTA 22

## Metadata
- **Category**: CTA
- **Objective**: Minimal call to action with centered content and gradient button.
- **Use Case**: Simple promotional section with clean design and focused conversion.
- **Visual Style**: Centered layout with gradient background and prominent gradient button.
- **Interactivity**: Single gradient action button with hover effects and responsive design.

## Description
A minimal and elegant call to action component featuring a centered layout with compelling headline, descriptive text, and a gradient-styled action button. Designed for clean, modern promotional sections with maximum visual impact.

## Features
- Centered content layout with clean background
- Large prominent headline with professional typography
- Descriptive text with muted foreground styling
- Gradient-styled action button for visual appeal
- Clean typography with proper text hierarchy
- Responsive design with proper breakpoints
- Minimal design aesthetic for modern appeal
- Professional spacing and visual balance
- Gradient button styling for visual interest

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta22Props {
  className?: string;
}

const Cta22 = ({ className }: Cta22Props) => {
  return (
    <section className={cn("py-32", className)}>
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
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
            Get Started Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Cta22 };
```
