# CTA 14

## Metadata
- **Category**: CTA
- **Objective**: Hero-style call to action with background image and centered content overlay.
- **Use Case**: Landing page hero section with background image and prominent action buttons.
- **Visual Style**: Full-width hero with background image and centered content overlay.
- **Interactivity**: Dual action buttons with hover effects and responsive overlay design.

## Description
A hero-style call to action component featuring a full-width background image with a centered content overlay containing headline, description, and dual action buttons. Designed for maximum visual impact on landing pages.

## Features
- Full-width hero layout with background image
- Centered content overlay with proper contrast
- Large prominent headline with professional typography
- Dual action button group (primary and secondary)
- Responsive design with proper breakpoints
- Background image with proper overlay styling
- Professional button sizing and styling
- Clean typography with proper text hierarchy
- Visual contrast for readability

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta14Props {
  className?: string;
}

const Cta14 = ({ className }: Cta14Props) => {
  return (
    <section className={cn("relative py-32", className)}>
      <div className="absolute inset-0">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Build Something Amazing
          </h1>
          <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas voluptatem
            consectetur adipisci quod quos exercitationem.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
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

export { Cta14 };
```
