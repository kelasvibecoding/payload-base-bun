# Hero 35

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a modern marketing introduction that pairs a clean text block with a abstract multi-layered visual composition.
- **Use Case**: Best for software development tools or creative platforms that want to represent "building blocks" or "architecture" through abstract UI metaphors.
- **Visual Style**: Abstract architectural aesthetic. Features a 2-column grid. The right column is a complex `bg-accent` container containing a custom `grid` layout (`grid-cols-[1fr_10fr_1fr]`) and a series of absolute-positioned floating UI cards of varying aspect ratios. Includes decorative details like custom tactile "knobs" (`rounded-full border-[3px]`) with `ring-[8px]` accents on specific border intersections.
- **Interactivity**: Static layout. Primary and secondary CTAs use standard `vibe-blocks` button patterns.

## Source Code

### `hero35.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero35Props {
  className?: string;
}

const Hero35 = ({ className }: Hero35Props) => {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="lg:container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <p className="text-sm font-black tracking-widest text-primary uppercase">New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
              Welcome to Our Website
            </h1>
            <p className="mb-8 text-muted-foreground lg:text-xl font-medium leading-relaxed">
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
          
          {/* Abstract Architectural Visual composition */}
          <div className="grid aspect-[3/4] grid-cols-[1fr_10fr_1fr] grid-rows-[2fr_10fr_2fr] bg-accent rounded-3xl overflow-hidden border shadow-xl">
            <div className="border-r border-b border-border/50"></div>
            <div className="border-b border-border/50"></div>
            <div className="relative border-b border-l border-border/50">
              {/* Tactile detail knob */}
              <div className="absolute -bottom-[6px] -left-[6px] size-[12px] rounded-full border-[3px] border-primary bg-primary ring-[8px] ring-accent/50"></div>
            </div>
            <div className="border-r border-border/20"></div>
            <div className="relative">
              {/* Floating UI Meta-Elements */}
              <div className="absolute top-[8%] left-[12%] flex aspect-[3/4] w-[60%] justify-center rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-105 duration-500"></div>
              <div className="absolute top-[20%] right-[10%] flex aspect-square w-[30%] justify-center rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-110 duration-700"></div>
              <div className="absolute bottom-[8%] left-[36%] flex aspect-[4/3] w-[50%] justify-center rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm shadow-lg transition-transform hover:scale-105 duration-500"></div>
            </div>
            <div className="border-l border-border/20"></div>
            <div className="relative border-t border-r border-border/50">
               {/* Tactile detail knob */}
              <div className="absolute -top-[6px] -right-[6px] size-[12px] rounded-full border-[3px] border-primary bg-primary ring-[8px] ring-accent/50"></div>
            </div>
            <div className="border-t border-border/50"></div>
            <div className="border-t border-l border-border/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero35 };
```
