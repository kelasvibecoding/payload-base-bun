# Hero 37

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a striking marketing introduction using a generative SVG dot-spiral background and a staggered rotation-heavy card stack.
- **Use Case**: Best for creative-tech brands, innovative software products, or agencies that want to showcase "Depth" and "Processing" through generative visuals.
- **Visual Style**: Generative technical aesthetic. Features a centered layout with high-impact typography. The background utilizes a complex generative SVG component that programmatically renders 4,000 dots into a spiral pattern (`Array(4000).keys()`). The primary visual anchor is a 3-card stack using `z-index`, `rotate`, and `translate` to create a staggered 3D fan-out effect.
- **Interactivity**: Static layout. Emphasizes generative visual complexity and sophisticated CSS-based 3D positioning of visual elements.

## Source Code

### `hero37.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero37Props {
  className?: string;
}

const Hero37 = ({ className }: Hero37Props) => {
  return (
    <section className={cn("relative overflow-hidden py-32 font-sans", className)}>
      <div className="container flex flex-col items-center text-center relative z-10">
        <p className="text-sm font-black tracking-widest text-primary uppercase">New Release</p>
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl tracking-tight leading-tight">
          Welcome to Our Website
        </h1>
        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto font-bold px-8" size="lg">
            <ArrowRight className="mr-2 size-4" />
            Primary Action
          </Button>
          <Button variant="outline" className="w-full sm:w-auto font-bold bg-background px-8" size="lg">
            Secondary Action
          </Button>
        </div>
      </div>
      
      {/* Generative Visual Section */}
      <div className="mt-16 flex flex-col items-center justify-center lg:mt-32 relative">
        <div className="relative mx-auto aspect-square w-[95%] max-w-[31.25rem] sm:w-full">
          {/* Generative Dot Spiral Background */}
          <div className="absolute inset-x-1/2 top-full z-0 flex w-[120rem] -translate-x-1/2 -translate-y-[4rem] md:-translate-y-[2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 800"
              className="h-full w-full text-primary/20 opacity-40 blur-[1px]"
            >
              {Array.from(Array(4000).keys()).map((dot, index, array) => {
                const angle = 0.2 * index;
                const scalar = 300 + index * (100 / array.length);
                const x = Math.round(Math.cos(angle) * scalar);
                const y = Math.round(Math.sin(angle) * scalar);
                return (
                  <circle
                    key={index}
                    r={1}
                    cx={400 + x}
                    cy={400 + y}
                    fill="currentColor"
                    opacity={(array.length - index) / array.length}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* 3D Static Card Stack */}
          {/* Left card */}
          <div className="absolute inset-0 z-5 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] translate-x-[-75%] translate-y-[10%] scale-[0.85] rotate-[-15deg] justify-center rounded-2xl border border-border/40 bg-accent/60 backdrop-blur-md opacity-60 md:w-[21.25rem] md:max-w-[21.25rem] shadow-lg"></div>
          {/* Center card */}
          <div className="absolute inset-0 z-10 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] justify-center rounded-2xl border border-border bg-accent/80 backdrop-blur-sm md:w-[21.25rem] md:max-w-[21.25rem] shadow-2xl"></div>
          {/* Right card */}
          <div className="absolute inset-0 z-5 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] translate-x-[75%] translate-y-[10%] scale-[0.85] rotate-[15deg] justify-center rounded-2xl border border-border/40 bg-accent/60 backdrop-blur-md opacity-60 md:w-[21.25rem] md:max-w-[21.25rem] shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero37 };
```
