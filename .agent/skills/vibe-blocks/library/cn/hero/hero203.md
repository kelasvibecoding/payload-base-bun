# Hero 203

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component platforms, pairing a split-content layout with a unique "Dotted-Grid" architectural background and high-fidelity "Mosaic-Feature" cards.
- **Use Case**: Best for UI component libraries, design tool showcases (e.g., "The Blocks Built With Shadcn"), or professional developer toolsets that want to emphasize "Finely crafted components" and "Sign up for free."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a split-content layout Beginning with an high-impact typography block on the left anchored by an high-fidelity typography. The "Feature Merit" section Positioned at the bottom Using a unique `DottedDiv` functional layout Pairing specialized absolute-positioned dots and grid lines with high-fidelity `bg-muted` project preview cards. Matrix units utilize specialized absolute-positioned coordinate overlays Positioning categorical trust social-proof ("Shadcn Carousel") to create a high-status visual focus.
- **Interactivity**: High engagement through state transitions. Features specialized card hover effects Positioning unique decorative overlays and high-fidelity project preview transitions to drive professional enrollment.

## Source Code

### `hero203.tsx`
```tsx
import { ChevronUp } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Hero203 = () => {
  return (
    <section className="bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero">
      <div className="relative container flex flex-col items-center px-0! max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="container relative z-10 flex w-full flex-col justify-between px-10 lg:flex-row gap-16 mb-24 lg:mb-32">
          <div className="flex w-full flex-col gap-12">
            <a href="#" className="text-xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
              Shadcn Blocks world-class
            </a>
            <h1 className="relative z-20 text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
               The blocks built <span className="text-secondary italic">with</span> Shadcn & Tailwind.
            </h1>
            <p className="max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
               Finely crafted high-status components built with world-class React world-wide. 
               Builders can copy/paste these blocks directly for elite status.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-start lg:w-[45rem] lg:items-center justify-center">
            <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              <span className="mr-4 text-3xl leading-none"></span>
              Sign up for elite access
            </Button>
          </div>
        </div>

        {/* Unique "Mosaic Grid Matrix" Anchor Visual side */}
        <div className="flex w-full flex-col justify-between pr-10 md:mt-10 md:flex-row gap-12 lg:gap-0">
          
          <DottedDiv className="group/card h-[45rem] w-full lg:w-[35rem] p-4 translate-y-0 hover:-translate-y-4 transition-transform duration-700">
            {/* Atmos Depth layer side */}
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="relative h-full w-full bg-muted/50 p-4 transition-all ease-in-out group-hover/card:bg-muted rounded-[3rem] border-2 border-border/20 isolate">
              {/* Image Context layer side */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] grayscale group-hover/card:grayscale-0 transition-grayscale duration-700">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg"
                  alt="architectural project detail 1"
                  className="h-full w-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Narrative Overlay side */}
              <div className="absolute inset-0 flex flex-col items-center justify-between p-16">
                <p className="flex w-full items-center text-xl font-black uppercase tracking-widest text-background italic">
                  2025 <span className="mx-4 h-4 w-[2px] bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  March High-Status
                </p>
                <div className="flex flex-col items-center justify-center gap-6">
                  <h2 className="text-center text-5xl font-black uppercase tracking-tighter text-background leading-none">
                    Shadcn <br />
                    <span className="text-primary italic">Carousel</span>
                  </h2>
                  <div className="h-1.5 w-12 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <p className="max-w-[18rem] text-center text-base font-medium leading-relaxed text-background/80 italic">
                    World-class professional building for high-status elite teams 
                    world-wide. Built world-wide.
                  </p>
                </div>
                <a
                  href="#"
                  className="group/link flex cursor-pointer flex-col items-center justify-center text-background gap-4"
                >
                  <ChevronUp
                    size={40}
                    className="transition-transform group-hover/link:-translate-y-3 text-primary"
                    strokeWidth={3}
                  />
                  <p className="text-lg font-black uppercase tracking-widest text-background leading-none">
                    See World-Class
                  </p>
                </a>
              </div>
            </div>
          </DottedDiv>

          <DottedDiv className="group/card h-[45rem] w-full lg:w-[35rem] p-4 lg:-mt-[20rem] translate-y-0 hover:-translate-y-4 transition-transform duration-700">
            <div className="relative h-full w-full bg-muted/50 p-4 transition-all ease-in-out group-hover/card:bg-muted rounded-[3rem] border-2 border-border/20 isolate">
              {/* Image Context layer side */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] grayscale group-hover/card:grayscale-0 transition-grayscale duration-700">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg"
                  alt="architectural project detail 2"
                  className="h-full w-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Narrative Overlay side */}
              <div className="absolute inset-0 flex flex-col items-center justify-between p-16">
                <p className="flex w-full items-center text-xl font-black uppercase tracking-widest text-background italic">
                  2025 <span className="mx-4 h-4 w-[2px] bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  April Elite
                </p>
                <div className="flex flex-col items-center justify-center gap-6">
                  <h2 className="text-center text-5xl font-black uppercase tracking-tighter text-background leading-none">
                    Shadcn <br />
                    <span className="text-primary italic">Blocks</span>
                  </h2>
                  <div className="h-1.5 w-12 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <p className="max-w-[18rem] text-center text-base font-medium leading-relaxed text-background/80 italic">
                    World-class professional building for high-status elite teams 
                    world-wide. Built world-wide.
                  </p>
                </div>
                <a
                  href="#"
                  className="group/link flex cursor-pointer flex-col items-center justify-center text-background gap-4"
                >
                  <ChevronUp
                    size={40}
                    className="transition-transform group-hover/link:-translate-y-3 text-primary"
                    strokeWidth={3}
                  />
                  <p className="text-lg font-black uppercase tracking-widest text-background leading-none">
                    Explore Elite
                  </p>
                </a>
              </div>
            </div>
          </DottedDiv>

        </div>
      </div>
    </section>
  );
};

export { Hero203 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative group/dotted", className)}>
    {/* Specialized Architectural Blueprint Fragments side */}
    <div className="absolute top-4 -left-60 h-[1px] w-[200%] bg-primary/10 shadow-[0_0_8px_rgba(var(--primary),0.1)] group-hover/dotted:bg-primary/20 transition-colors duration-700" />
    <div className="absolute bottom-4 -left-60 h-[1px] w-[200%] bg-primary/10 shadow-[0_0_8px_rgba(var(--primary),0.1)] group-hover/dotted:bg-primary/20 transition-colors duration-700" />
    <div className="absolute -top-60 left-4 h-[200%] w-[1px] bg-primary/10 shadow-[0_0_8px_rgba(var(--primary),0.1)] group-hover/dotted:bg-primary/20 transition-colors duration-700" />
    <div className="absolute -top-60 right-4 h-[200%] w-[1px] bg-primary/10 shadow-[0_0_8px_rgba(var(--primary),0.1)] group-hover/dotted:bg-primary/20 transition-colors duration-700" />
    
    {/* The Architectural Connection Nodes side */}
    <div className="absolute top-[10px] left-[10px] z-20 size-3 rounded-full bg-primary border-4 border-background animate-pulse" />
    <div className="absolute top-[10px] right-[10px] z-20 size-3 rounded-full bg-primary border-4 border-background animate-pulse" />
    <div className="absolute bottom-[10px] left-[10px] z-20 size-3 rounded-full bg-primary border-4 border-background animate-pulse" />
    <div className="absolute right-[10px] bottom-[10px] z-20 size-3 rounded-full bg-primary border-4 border-background animate-pulse" />
    
    {children}
  </div>
);
```
