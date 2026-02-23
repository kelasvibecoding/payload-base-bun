# CTA 4

## Metadata
- **Category**: CTA
- **Objective**: Centered call to action with gradient background and dual buttons.
- **Use Case**: Promotional hero section with headline, description, and multiple action buttons.
- **Visual Style**: Centered layout with gradient background and prominent button group.
- **Interactivity**: Dual action buttons with hover effects and responsive layout.

## Description
A striking call to action component featuring a centered layout with gradient background, compelling headline, description text, and dual action buttons. Designed for maximum visual impact with professional styling and responsive design.

## Features
- Centered content layout with gradient background
- Large prominent headline with proper typography
- Descriptive text with muted foreground styling
- Dual action button group (primary and secondary)
- Responsive button arrangement
- Professional spacing and visual hierarchy
- Gradient background for visual appeal
- Clean typography with proper text sizing

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta4Props {
  className?: string;
}

const Cta4 = ({ className }: Cta4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-b from-accent to-background p-8 text-center lg:p-16">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas voluptatem
            consectetur adipisci quod quos exercitationem.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta4 };
```
