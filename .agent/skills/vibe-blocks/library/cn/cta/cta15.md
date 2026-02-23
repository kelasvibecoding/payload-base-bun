# CTA 15

## Metadata
- **Category**: CTA
- **Objective**: Feature showcase call to action with icon grid and dual buttons.
- **Use Case**: Product feature highlighting with visual icons and action prompts.
- **Visual Style**: Two-column layout with icon grid showcase and prominent CTAs.
- **Interactivity**: Icon hover effects and dual action buttons with responsive layout.

## Description
A feature-focused call to action component showcasing key product features through an icon grid, paired with compelling headline, description, and dual action buttons. Designed to highlight product capabilities while driving conversions.

## Features
- Icon grid showcase with 6 feature icons
- Two-column responsive layout
- Dual action button group
- Professional icon styling with proper sizing
- Feature highlighting through visual elements
- Clean typography with proper hierarchy
- Responsive grid that adapts to screen size
- Professional spacing and visual balance
- Icon hover effects and interactions

## Source Code
```tsx
import { ArrowRight, BarChart3, Globe, Lock, Palette, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Cta15Props {
  className?: string;
}

const Cta15 = ({ className }: Cta15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Powerful Features
            </h2>
            <p className="mb-8 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas voluptatem
              consectetur adipisci quod quos exercitationem.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button>
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <Zap className="size-8 text-primary" />
              <h3 className="font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <Globe className="size-8 text-primary" />
              <h3 className="font-semibold">Global Scale</h3>
              <p className="text-sm text-muted-foreground">
                Worldwide deployment
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <Lock className="size-8 text-primary" />
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise security
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <BarChart3 className="size-8 text-primary" />
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Detailed insights
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <Palette className="size-8 text-primary" />
              <h3 className="font-semibold">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Fully customizable
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <Globe className="size-8 text-primary" />
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Round the clock
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta15 };
```
