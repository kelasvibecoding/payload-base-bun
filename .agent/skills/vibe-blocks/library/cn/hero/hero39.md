# Hero 39

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a contained, background-anchored introduction with a sophisticated floating-card visual grid.
- **Use Case**: Best for feature highlights, sub-product pages, or sections that require a high-contract visual differentiator within a long-form page.
- **Visual Style**: Contained grid aesthetic. Features a 2-column layout housed within a rounded `bg-accent/50` container that expands slightly beyond the standard container width on `2xl` screens. The right column features a stack of absolute-positioned floating UI cards of varying aspect ratios (`square` and `5/6`) placed within an `aspect-7/8` relative container.
- **Interactivity**: Static layout. Primary CTA focuses solely on a single high-impact "Primary" action to streamline user focus.

## Source Code

### `hero39.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero39Props {
  className?: string;
}

const Hero39 = ({ className }: Hero39Props) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container flex flex-col items-center">
        {/* Contained Hero Block */}
        <div className="2xl:w-[calc(min(100vw-2*theme(container.padding),100%+8rem))] w-full overflow-clip rounded-3xl bg-accent/40 border border-border/50 shadow-sm">
          <div className="grid items-stretch gap-0 lg:grid-cols-2">
            <div className="container flex flex-col items-center px-12 py-16 text-center lg:mx-auto lg:items-start lg:px-20 lg:py-24 lg:text-left">
              <p className="text-sm font-black tracking-widest text-primary uppercase">New Release</p>
              <h1 className="my-6 text-3xl font-bold text-pretty lg:text-7xl font-sans tracking-tight leading-tight">
                Welcome to Our Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
              <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto font-bold px-10" size="lg">
                  <ArrowRight className="mr-2 size-4" />
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Layered Cards Visual */}
            <div className="flex flex-col items-center justify-center bg-accent/20 border-l border-border/20">
              <div className="relative aspect-[7/8] h-full w-full max-w-md mx-auto py-12">
                <div className="absolute top-[12%] right-[50%] flex aspect-square w-[24%] justify-center rounded-xl border border-border/40 bg-background shadow-lg transition-transform hover:scale-105"></div>
                <div className="absolute top-[36%] right-[50%] flex aspect-[5/6] w-[40%] justify-center rounded-xl border border-border/40 bg-background shadow-xl transition-transform hover:-translate-y-1"></div>
                <div className="absolute bottom-[36%] left-[54%] flex aspect-[5/6] w-[40%] justify-center rounded-xl border border-border/40 bg-background shadow-xl transition-transform hover:translate-y-1"></div>
                <div className="absolute bottom-[12%] left-[54%] flex aspect-square w-[24%] justify-center rounded-xl border border-border/40 bg-background shadow-lg transition-transform hover:scale-105"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero39 };
```
