# Hero 222

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for high-tech and experimental platforms, pairing a centered typography block with a unique "Variable-Font-Cursor" anchored by specialized mouse-position tracking and a prominent "Chapter" merit badge.
- **Use Case**: Best for creative tech agencies, experimental design studios (e.g., "BEYOND SPEED"), or professional developer tools that want to emphasize "CHAPTER 01" and "Get Started."
- **Visual Style**: Cinematic Experimental aesthetic. Features a centered layout Beginning with a prominent background image (`bw15.jpeg`) at high-status grayscale. The visual anchor is a unique "Variable-Font-Cursor" component Positioning the phrase "BEYOND SPEED" Using high-fidelity typography transitions tied to the specialized `slnt` and `wght` variable axes. Layout uses unique "Coordinate-Matrix" lines Positioning absolute-positioned `x` and `y` axes tied to the mouse position to create a high-status technical visual focus.
- **Interactivity**: High engagement through state management and mouse motion. Features specialized variable-font transformations tied to UI coordinates and high-fidelity entrance animations for the chapter metadata to drive professional enrollment.

## Source Code

### `hero222.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";

import VariableFontAndCursor from "@/components/fancy/text/variable-font-and-cursor";

interface Hero222Props {
  className?: string; // Optional custom styling
}

const Hero222 = ({ className }: Hero222Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition(containerRef);
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        <div
          ref={containerRef}
          className="relative flex h-[85vh] flex-col items-center justify-center gap-12 overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg')] bg-[position:center_-24rem] xl:bg-cover grayscale hover:grayscale-0 transition-grayscale duration-1000 border-4 border-border/40 rounded-[4rem] shadow-2xl isolate"
        >
          {/* Specialized Coordinate Metadata side */}
          <div className="absolute bottom-12 left-12 flex flex-col gap-2 mix-blend-exclusion z-30 opacity-60 group-hover/hero:opacity-100 transition-opacity">
            <p className="font-mono text-xs font-black tracking-widest text-primary uppercase">x_coord : {Math.round(x)}</p>
            <p className="font-mono text-xs font-black tracking-widest text-primary uppercase">y_coord : {Math.round(y)}</p>
          </div>

          <div className="relative z-10 h-full w-full mix-blend-exclusion flex flex-col items-center justify-center text-center">
            <div className="mx-auto w-fit group/content">
              
              {/* Narrative Merit Badge side */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xl lg:text-2xl font-black tracking-[0.5em] text-white/80 uppercase mb-6"
              >
                CHAPTER 01 world-wide
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <VariableFontAndCursor
                  label="BEYOND SPEED"
                  className="font-black text-6xl tracking-[-5px] text-white sm:text-7xl md:text-[12rem] md:tracking-[-15px] leading-none drop-shadow-2xl"
                  fontVariationMapping={{
                    y: { name: "wght", min: 100, max: 900 },
                    x: { name: "slnt", min: 0, max: -10 },
                  }}
                  containerRef={containerRef as React.RefObject<HTMLDivElement>}
                />
              </motion.div>

              {/* Unique "Architectural Grid-Lines" Coordinate side */}
              <div
                className="absolute top-0 h-full w-[2px] -translate-x-1/2 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 pointer-events-none transition-all duration-75"
                style={{ left: `${x}px` }}
              />
              <div
                className="absolute left-0 h-[2px] w-full -translate-y-1/2 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 pointer-events-none transition-all duration-75"
                style={{ top: `${y}px` }}
              />
              <div
                className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow-[0_0_20px_rgba(var(--primary),0.8)] animate-pulse z-30 pointer-events-none transition-all duration-75"
                style={{ top: `${y}px`, left: `${x}px` }}
              />
            </div>
          </div>

          <div className="relative z-30 mb-20 group/button">
            <button className="flex items-center gap-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 px-12 py-6 text-white font-black text-xl uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-500 hover:gap-10 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group/btn">
                Get started elite
                <ArrowRight className="-rotate-45 transition-transform group-hover/btn:rotate-0" size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero222 };
```
