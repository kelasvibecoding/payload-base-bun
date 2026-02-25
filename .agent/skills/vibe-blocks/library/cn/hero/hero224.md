# Hero 224

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for search and discovery platforms, pairing a left-aligned typography block with a high-fidelity "Icon-Cloud" anchored by specialized interactive 3D rotation and a prominent "Multi-Step" merit badge.
- **Use Case**: Best for developer tools, asset marketplaces (e.g., "Search, Copy, Paste, Build"), or professional discovery hubs that want to emphasize "Build" and "See Pricing."
- **Visual Style**: Cinematic Discovery aesthetic. Features a split-column layout Beginning with a prominent heading Using high-fidelity typography-stacking Positioning categorical uppercase commands. The centerpiece is a unique "Icon-Cloud Matrix" background Positioning a high-fidelity `IconCloud` component Utilizing specialized 3D spherical rotation tied to high-fidelity mouse interactions. Visual anchor is a unique "Infinite Scroll" atmosphere masking Positioning a specialized absolute-positioned canvas Utilizing categorical image fragments anchored by a specialized `box-shadow` to create a high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized 3D spherical rotation transitions and high-fidelity entrance animations for the icons and typography to drive professional enrollment.

## Source Code

### `hero224.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";
import React, { startTransition, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero224Props {
  className?: string; // Optional custom styling
}

const Hero224 = ({ className }: Hero224Props) => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random5.jpeg",
  ];

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-between md:h-[60rem] md:flex-row md:overflow-hidden gap-12 isolate">
        
        {/* Narrative Narrative side */}
        <div className="group/content relative z-30">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="relative z-20 max-w-2xl text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Search, <br /> Copy, Paste
                <br /> <span className="text-primary italic">Build elite.</span>
            </h1>
            <p className="max-w-[45rem] mt-10 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Discover world-class architectural fragments world-wide. 
                Experience finite professional craft for elite status world-wide.
            </p>
            <div className="realtive z-20 mt-12 flex flex-col sm:flex-row gap-8 group/buttons px-10">
                <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none group/btn-1">
                    <span className="flex items-center gap-6">
                        See Pricing elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/btn-1:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
                <Button variant="outline" size="lg" className="h-fit rounded-full bg-background/50 border-2 border-primary/20 backdrop-blur-xl px-12 py-7 font-black text-xl text-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none group/btn-2">
                    <span className="flex items-center gap-6">
                        Try free elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/btn-2:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
            </div>
        </div>

        {/* Unique "Icon-Cloud Matrix" Visual side */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden md:w-1/2 relative z-20 grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000 scale-100 lg:scale-110">
           {/* specialized atmospheric masks side */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          
          <IconCloud images={images} />
        </div>
      </div>
    </section>
  );
};

export { Hero224 };
```
