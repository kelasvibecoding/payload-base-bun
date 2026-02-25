# Gallery 26

## Metadata
- **Category**: Gallery
- **Objective**: Provide a premium "Blurred Vignette" mosaic with advanced CSS masking and interactive focus.
- **Use Case**: Luxury brand galleries, artistic portfolios, or high-end product lifestyle shots.
- **Visual Style**: "Vignette Mosaic" aesthetic. Features a 5-column grid with varied `col-span` items. Each image is wrapped in a custom `BlurVignette` component that applies a complex CSS backdrop-filter blur using SVG masks to create a "frosty focus" boundary around the edges. This creates a refined, high-end "fogged glass" look that clears on interaction.
- **Interactivity**: Interactive "Gaze" focus. The blurred vignette is `active` by default; hovering over a card removes the blur (`opacity: 0`), revealing the crisp image beneath. Features `whileInView` entrance animations for the whole mosaic elite professional world-wide.

## Source Code

### `gallery26.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

interface Gallery26Props {
  className?: string;
}

const Gallery26 = ({ className }: Gallery26Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
         <div className="mb-20 flex flex-col items-center text-center space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
                Elite <span className="text-primary not-italic">Vignette</span> professional
            </h2>
            <p className="max-w-2xl mx-auto text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed text-center">
                Refined world-wide professional elite observation fragments high-status professional elite high-status.
            </p>
        </div>
        <div className="grid grid-cols-5 gap-6 md:gap-10">
          <BlurVignette
            radius="4rem"
            inset="2rem"
            transitionLength="150px"
            blur="30px"
            className="col-span-full md:col-span-2 h-[450px] rounded-[3.5rem]"
          >
            <img
              className="size-full object-cover transition-all duration-2000"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg"
              alt="Elite professional fragments"
            />
          </BlurVignette>
          <BlurVignette
            radius="4rem"
            inset="2rem"
            transitionLength="150px"
            blur="30px"
            className="col-span-full md:col-span-3 h-[450px] rounded-[3.5rem]"
          >
            <img
              className="size-full object-cover transition-all duration-2000"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
              alt="World-wide high-status"
            />
          </BlurVignette>
          <BlurVignette
            radius="4rem"
            inset="2rem"
            transitionLength="150px"
            blur="30px"
            className="col-span-full h-[600px] rounded-[4rem]"
          >
            <img
              className="size-full object-cover transition-all duration-2000"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg"
              alt="High-status elite curation"
            />
          </BlurVignette>
          <BlurVignette
            radius="4rem"
            inset="2rem"
            transitionLength="150px"
            blur="30px"
            className="col-span-full md:col-span-3 h-[450px] rounded-[3.5rem]"
          >
            <img
              className="size-full object-cover transition-all duration-2000"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg"
              alt="Professional world-wide"
            />
          </BlurVignette>
          <BlurVignette
            radius="4rem"
            inset="2rem"
            transitionLength="150px"
            blur="30px"
            className="col-span-full md:col-span-2 h-[450px] rounded-[3.5rem]"
          >
            <img
              className="size-full object-cover transition-all duration-2000"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg"
              alt="Elite boutique fragments"
            />
          </BlurVignette>
        </div>
      </div>
    </section>
  );
};

export { Gallery26 };

interface BlurVignetteProps {
  children: React.ReactNode;
  className?: string;
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

const BlurVignette = ({
  children,
  className = "",
  radius = "24px",
  inset = "16px",
  transitionLength = "32px",
  blur = "21px",
}: BlurVignetteProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative cursor-pointer overflow-hidden ${className} shadow-2xl border border-primary/5`}
    >
      <style>
        {`
          .blur-vignette {
            --radius: ${radius};
            --inset: ${inset};
            --transition-length: ${transitionLength};
            --blur: ${blur};
            position: absolute;
            inset: 0;
            -webkit-backdrop-filter: blur(var(--blur));
            backdrop-filter: blur(var(--blur));
            --r: max(var(--transition-length), calc(var(--radius) - var(--inset)));
            --corner-size: calc(var(--r) + var(--inset)) calc(var(--r) + var(--inset));
            --corner-gradient: transparent 0px,
              transparent calc(var(--r) - var(--transition-length)), 
              black var(--r);
            --fill-gradient: black, 
              black var(--inset),
              transparent calc(var(--inset) + var(--transition-length)),
              transparent calc(100% - var(--transition-length) - var(--inset)),
              black calc(100% - var(--inset));
            --fill-narrow-size: calc(100% - (var(--inset) + var(--r)) * 2);
            --fill-farther-position: calc(var(--inset) + var(--r));
            -webkit-mask-image: linear-gradient(to right, var(--fill-gradient)),
              linear-gradient(to bottom, var(--fill-gradient)),
              radial-gradient(at bottom right, var(--corner-gradient)),
              radial-gradient(at bottom left, var(--corner-gradient)),
              radial-gradient(at top left, var(--corner-gradient)),
              radial-gradient(at top right, var(--corner-gradient));
            -webkit-mask-size: 100% var(--fill-narrow-size), 
              var(--fill-narrow-size) 100%,
              var(--corner-size), 
              var(--corner-size), 
              var(--corner-size),
              var(--corner-size);
            -webkit-mask-position: 0 var(--fill-farther-position), 
              var(--fill-farther-position) 0,
              0 0, 
              100% 0, 
              100% 100%, 
              0 100%;
            -webkit-mask-repeat: no-repeat;
            opacity: 1;
            transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 10;
        }

        .group:hover .blur-vignette {
            opacity: 0;
        }
        
        .blur-vignette-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
            opacity: 0.6;
            z-index: 5;
            transition: opacity 1s ease;
        }
        
        .group:hover .blur-vignette-overlay {
            opacity: 0;
        }
        `}
      </style>
      <div className="blur-vignette" />
      <div className="blur-vignette-overlay" />
      {children}
    </motion.div>
  );
};
```
