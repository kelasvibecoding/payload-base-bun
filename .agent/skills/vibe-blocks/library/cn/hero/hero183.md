# Hero 183

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for enterprise business solutions, pairing a centered typography block with a unique "Matrix-Grid" of product previews and adaptive carousel navigation for mobile.
- **Use Case**: Best for enterprise software platforms, productivity hubs (e.g., "Ultimate Business Solution"), or professional toolsets that want to emphasize "Streamlining workflows" and "Team efficiency."
- **Visual Style**: Cinematic Enterprise aesthetic. Features a centered layout beginning with a prominent "Premium" `Badge` callout anchored by dual editorial CTAs. Visual anchor is a unique "Grid Matrix" positioned at the bottom Featuring 5 relative-positioned image containers Utilizes complex grid-span properties (`col-span-2`, `row-span-5`). Grid uses specialized absolute-positioned linear-gradient lines (`hsl(var(--border))`) to create a high-fidelity blueprint visual context. Matrix adapts to a specialized `Carousel` layout on mobile Featuring unique `dot-indexing` navigation logic to drive high-fidelity interactive clarity.
- **Interactivity**: High atmospheric engagement. Features specialized carousel implementation for mobile and high-fidelity project preview layering to drive professional trust and enrollmen.

## Source Code

### `hero183.tsx`
```tsx
"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero183Props {
  className?: string;
}

const Hero183 = ({ className }: Hero183Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6">
        
        {/* Solution Narrative side */}
        <div className="mx-auto max-w-[65rem] flex flex-col items-center gap-12 text-center text-pretty mb-24 lg:mb-32">
          <Badge variant="outline" className="h-fit rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-xl px-8 py-2 text-xs font-black uppercase tracking-[0.4em] text-primary shadow-xl">
            Premium Experience
          </Badge>
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Your ultimate <span className="text-primary italic">business</span> solution.
            </h1>
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12">
                Transform your professional operations with cutting-edge high-status 
                solutions designed to boost world-class team efficiency.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get started
            </Button>
            <Button variant="secondary" size="lg" className="h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none">
                Learn more
            </Button>
          </div>
        </div>

        {/* Unique "Bento Blueprint Matrix" Visual Anchor side (Desktop) */}
        <div className="relative mx-auto mt-16 hidden md:block max-w-[90rem]">
          {/* Atmos Depth layer side */}
          <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          {/* Architectural Blueprint Lines side */}
          <div className="absolute top-0 -right-20 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,var(--color-primary)_4%,var(--color-primary)_96%,transparent)] opacity-20"></div>
          <div className="absolute -right-20 bottom-0 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,var(--color-primary)_4%,var(--color-primary)_96%,transparent)] opacity-20"></div>
          
          <div className="relative grid grid-cols-7 grid-rows-11 gap-8 group">
            
            {/* Matrix Fragment 1: Upper-Left landscape side */}
            <div className="col-span-2 row-span-4 row-start-2 transition-transform duration-1000 group-hover:-translate-x-4 group-hover:-translate-y-2">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="business solution detail 1"
                className="aspect-video size-full rounded-[2.5rem] border-4 border-background object-cover shadow-2xl grayscale hover:grayscale-0 transition-grayscale duration-700"
                />
            </div>

            {/* Matrix Fragment 2: Central narrative focus side */}
            <div className="col-span-3 col-start-3 row-span-full rounded-[3.5rem] bg-primary/5 p-4 border-4 border-primary/10 shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                <div className="size-full overflow-hidden rounded-[2.5rem] border-[12px] border-background bg-background shadow-2xl">
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="business solution focus preview"
                        className="aspect-video size-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                </div>
            </div>

            {/* Matrix Fragment 3: Upper-Right portrait side */}
            <div className="col-span-2 row-span-5 row-start-2 transition-transform duration-1000 group-hover:translate-x-4 group-hover:-translate-y-2">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="business solution detail 2"
                className="aspect-video size-full rounded-[2.5rem] border-4 border-background object-cover shadow-2xl grayscale hover:grayscale-0 transition-grayscale duration-700"
                />
            </div>

            {/* Matrix Fragment 4: Lower-Left landscape side */}
            <div className="col-span-2 row-span-5 col-start-1 mt-4 transition-transform duration-1000 group-hover:-translate-x-4 group-hover:translate-y-2">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                alt="business solution detail 3"
                className="aspect-video size-full rounded-[2.5rem] border-4 border-background object-cover shadow-2xl grayscale hover:grayscale-0 transition-grayscale duration-700"
                />
            </div>

            {/* Matrix Fragment 5: Lower-Right landscape side */}
            <div className="col-span-2 row-span-4 col-start-6 mt-4 transition-transform duration-1000 group-hover:translate-x-4 group-hover:translate-y-2">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                alt="business solution detail 4"
                className="aspect-video size-full rounded-[2.5rem] border-4 border-background object-cover shadow-2xl grayscale hover:grayscale-0 transition-grayscale duration-700"
                />
            </div>

            {/* Matrix Vertical Guide Lines side */}
            <div className="absolute -top-[10%] -bottom-[10%] col-start-3 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-primary)_5%,var(--color-primary)_95%,transparent)] opacity-20"></div>
            <div className="absolute -top-[10%] -bottom-[10%] -left-[32px] col-start-6 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-primary)_5%,var(--color-primary)_95%,transparent)] opacity-20"></div>
          </div>
        </div>

        {/* Adaptive Carousel visual side (Mobile) */}
        <div className="mt-16 md:hidden">
          <Carousel setApi={setApi} className="mx-auto max-w-md">
            <CarouselContent>
              {[1, 2, 3].map((i) => (
                <CarouselItem key={i}>
                  <div className="overflow-hidden rounded-[3rem] border-8 border-background shadow-2xl">
                    <img
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${i}.svg`}
                        alt={`business feature mobile display ${i}`}
                        className="aspect-video size-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Specialized Paging side */}
            <div className="mt-10 flex justify-center gap-4">
              {[1, 2, 3].map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "size-4 rounded-full border-2 transition-all duration-500 cursor-pointer",
                    index + 1 === current ? "bg-primary border-primary w-12" : "border-border/40 hover:border-primary/40",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero183 };
```
