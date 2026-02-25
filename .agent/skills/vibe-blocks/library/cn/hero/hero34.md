# Hero 34

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a clean, high-contrast introduction within a contained `bg-muted` block.
- **Use Case**: Best for secondary landing pages, feature-specific sections, or sites that want a clear "boxed" separation between the hero and the remainder of the page.
- **Visual Style**: Contained block aesthetic. Features a 2-column grid housed within a `container`. The entire grid uses `bg-muted` to create a strong visual separation from the parent page background. The left column is a high-padding text block (`p-16`). The right column is a full-height image placeholder.
- **Interactivity**: Static layout. Primary CTA uses a `ArrowRight` icon.

## Source Code

### `hero34.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero34Props {
  className?: string;
}

const Hero34 = ({ className }: Hero34Props) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container">
        <div className="grid items-stretch gap-0 bg-muted rounded-3xl overflow-hidden lg:grid-cols-2 border shadow-sm">
          <div className="flex flex-col items-center p-12 lg:p-20 text-center lg:items-start lg:text-left">
            <p className="text-xs font-black tracking-widest text-primary uppercase">New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="font-bold px-8">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-bold px-8 bg-background">Secondary Action</Button>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
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

export { Hero34 };
```
