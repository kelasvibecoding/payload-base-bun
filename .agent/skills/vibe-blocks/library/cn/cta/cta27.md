# CTA 27

## Metadata
- **Category**: CTA
- **Objective**: Minimal centered call to action with clean design and prominent button.
- **Use Case**: Simple promotional section with focused conversion and clean aesthetics.
- **Visual Style**: Centered layout with clean background and high-visibility action button.
- **Interactivity**: Single prominent action button with hover effects and responsive design.

## Description
A minimal and clean call to action component featuring a centered layout with compelling headline, descriptive text, and a prominent action button. Designed for simple, effective promotional sections with maximum clarity and conversion focus.

## Features
- Centered content layout with clean background
- Large prominent headline with professional typography
- Descriptive text with muted foreground styling
- Prominent action button for high visibility
- Clean typography with proper text hierarchy
- Responsive design with proper breakpoints
- Minimal design aesthetic for clarity
- Professional spacing and visual balance
- High visibility button styling for conversion

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta27Props {
  className?: string;
}

const Cta27 = ({ className }: Cta27Props) => {
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
          <Button size="lg">
            Get Started Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Cta27 };
```
