# Feature 98

## Metadata
- **Category**: Feature
- **Objective**: High-impact editorial section with massive typography and photo-driven portfolio cards.
- **Use Case**: Venture capital landing pages, high-end agency portfolios, or luxury service directories.
- **Visual Style**: "Investment Editorial" aesthetic. Top: ultra-large `lg:text-7xl` header and secondary description split into two unbalanced columns. Middle: wide `Separator` divider. Bottom: `lg:grid-cols-3` grid of photo-background cards. Each card features text and a circular `ArrowRight` trigger overlaid on a high-res photo background with a secondary `bg-primary` base layer.
- **Interactivity**: Cards feature a slow-zoom hover transition (`group-hover:scale-[1.1]`) on the background images.

## Source Code

### `feature98.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Feature98 = ({ className }: Feature98Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-3">
            <p className="text-lg text-muted-foreground font-medium">Comprehensive Solutions</p>
            <h2 className="mt-6 text-4xl lg:text-7xl">Your all-in-one partner</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-muted-foreground">Every step covered...</p>
            <div className="mt-10 flex gap-2">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="secondary">Explore Plans</Button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-24 mb-6" />
      <div className="container grid gap-8 lg:grid-cols-3">
        <a href="#" className="group relative grid overflow-hidden sm:grid-cols-2 lg:grid-cols-1">
          <div className="absolute top-0 left-0 z-20 flex w-full justify-between gap-2 p-6 text-background lg:flex-row lg:items-center">
            <div>
              <h3 className="text-lg font-medium">Startup Funds</h3>
              <p>...</p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-primary lg:size-14">
              <ArrowRight />
            </span>
          </div>
          <img src="..." className="scale-105 transition-all duration-500 group-hover:scale-[1.1]" />
          <div className="z-10 bg-primary"></div>
        </a>
        {/* More photo cards... */}
      </div>
    </section>
  );
};

export { Feature98 };
```
