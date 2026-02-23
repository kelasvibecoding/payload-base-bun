# CTA 16

## Metadata
- **Category**: CTA
- **Objective**: Minimal centered call to action with gradient background and single prominent button.
- **Use Case**: Simple promotional section with maximum visual impact and minimal distractions.
- **Visual Style**: Centered layout with gradient background and large action button.
- **Interactivity**: Single prominent action button with hover effects and responsive design.

## Description
A minimal and impactful call to action component featuring a centered layout with gradient background, compelling headline, descriptive text, and a single large action button. Designed for maximum conversion focus with minimal visual distractions.

## Features
- Centered content layout with gradient background
- Large prominent headline with professional typography
- Descriptive text with muted foreground styling
- Single large action button for focused conversion
- Gradient background for visual appeal
- Clean typography with proper text hierarchy
- Responsive design with proper breakpoints
- Minimal design aesthetic for maximum impact
- Professional spacing and visual balance

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta16Props {
  className?: string;
}

const Cta16 = ({ className }: Cta16Props) => {
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
            Get Started
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Cta16 };
```
