# Hero 38

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a balanced marketing introduction using a generative particle background paired with a sophisticated asymmetrical floating card visual.
- **Use Case**: Best for software platforms, modern SaaS startups, or developer communities that want to represent "Systems" and "Components" through abstract visual metaphors.
- **Visual Style**: Balanced technical aesthetic. Features a 2-column grid. The left column is a centered/left-aligned typography block with a "New Release" micro-copy. The right column is a complex visual component containing a generative particle spiral SVG (using `Math.sin(angle)` for variable opacity) overlaid with three absolute-positioned UI cards of varying aspect ratios (`5/6` and `square`) and scales.
- **Interactivity**: Static layout. Emphasizes visual depth through the combination of generative SVGs and layered absolute card positioning.

## Source Code

### `hero38.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero38Props {
  className?: string;
}

const Hero38 = ({ className }: Hero38Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans", className)}>
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <p className="text-sm font-black tracking-widest text-primary uppercase">New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl tracking-tight leading-tight">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto font-bold px-8">
                <ArrowRight className="mr-2 size-4" />
                Primary Action
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold bg-background px-8">
                Secondary Action
              </Button>
            </div>
          </div>
          
          {/* Abstract Particle Visual composition */}
          <div className="relative aspect-[3/4] w-full max-w-lg mx-auto group">
            <div className="absolute inset-0 flex items-center justify-center -z-10 group-hover:scale-105 transition-transform duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                className="h-full w-full text-primary/30 opacity-40 blur-[0.5px]"
              >
                {Array.from(Array(720).keys()).map((dot, index, array) => {
                  const angle = 0.2 * index;
                  const scalar = 40 + index * (360 / array.length);
                  const x = Math.round(Math.cos(angle) * scalar);
                  const y = Math.round(Math.sin(angle) * scalar);

                  return (
                    <circle
                      key={index}
                      r={(3 * index) / array.length}
                      cx={400 + x}
                      cy={400 + y}
                      fill="currentColor"
                      opacity={1 - Math.sin(angle)}
                    />
                  );
                })}
              </svg>
            </div>
            
            {/* Layered Floating Cards */}
            <div className="absolute top-[10%] left-[8%] flex aspect-[5/6] w-[38%] justify-center rounded-2xl border border-border/40 bg-accent/60 backdrop-blur-md shadow-xl transition-all hover:-translate-y-2"></div>
            <div className="absolute top-[20%] right-[12%] flex aspect-square w-[20%] justify-center rounded-2xl border border-border/40 bg-accent/80 backdrop-blur-sm shadow-xl transition-all hover:translate-y-2"></div>
            <div className="absolute right-[24%] bottom-[24%] flex aspect-[5/6] w-[38%] justify-center rounded-2xl border border-border/40 bg-accent/80 backdrop-blur-md shadow-2xl transition-all hover:-translate-x-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero38 };
```
