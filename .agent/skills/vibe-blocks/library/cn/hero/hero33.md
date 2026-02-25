# Hero 33

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a price-anchored introduction that pairs a standard marketing message with a prominent "Now starting at" pricing box.
- **Use Case**: Best for transactional software, discount-driven SaaS, or services where aggressive pricing transparency is the primary conversion driver.
- **Visual Style**: Transactional marketing aesthetic. Features a 2-column grid. The left column contains a centered (mobile) to left-aligned (desktop) typography block and a distinctive boxed pricing widget (`rounded border`). The pricing widget features oversized numeric typography (`lg:text-6xl`) and clear cost-per-user labeling. The right column is a full-bleed image placeholder.
- **Interactivity**: Static layout. Primary CTA uses a `ArrowRight` icon for clear task progression.

## Source Code

### `hero33.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero33Props {
  className?: string;
}

const Hero33 = ({ className }: Hero33Props) => {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="lg:container">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="container flex flex-col items-center py-20 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left lg:py-32">
            <p className="text-sm font-black tracking-widest text-primary uppercase">New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight leading-tight">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="mb-20 flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto font-bold px-8">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold bg-background px-8">
                View Features
              </Button>
            </div>
            {/* Actionable Pricing Box */}
            <div className="rounded-2xl border border-border bg-muted/30 px-8 py-8 w-full lg:max-w-md shadow-sm">
              <p className="mb-2 text-xl font-bold text-muted-foreground uppercase tracking-wide">Now starting at</p>
              <div className="mb-4 flex items-baseline justify-center lg:justify-start gap-1">
                <div className="text-5xl font-black lg:text-7xl">$99</div>
                <div className="text-2xl font-bold text-muted-foreground">
                  /user
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Affordable scaling for teams of all sizes. No hidden costs.
              </p>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder hero"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero33 };
```
