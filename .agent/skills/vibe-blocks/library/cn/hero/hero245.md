# Hero 245

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for download-focused software and recruitment platforms, pairing a centered typography block with a high-fidelity "Pointer-Highlight" visualization and categorical hiring statistics.
- **Use Case**: Best for desktop app launches, recruitment pages (e.g., "Elevate Your Next Project With Production-Ready Shadcnblocks"), or professional software distributions that want to emphasize " Download for Mac" and "We're Hiring."
- **Visual Style**: Cinematic Download aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a high-fidelity `blue-500` status dot and "We're Hiring" text. Typography utilizes high-fidelity `semi-bold` fragments paired with a unique "Production-Ready" highlight Positioning specialized `PointerHighlight` technical layout anchored by high-fidelity centered typography. Layout uses unique "Linear-Divider" background Positioning 18 absolute-positioned `motion.div` columns Utilizing categorical `bg-gradient-to-l` entrance animations anchored by high-fidelity `whileInView` transitions. Visual anchor is a unique "Product-Showcase" image Positioning a high-fidelity `rounded-4xl` image fragment anchored by finite architectural grayscale imagery.
- **Interactivity**: High engagement through tactile highlights. Features specialized cursor-following highlight transitions and high-fidelity entrance animations for the background columns to drive professional enrollment.

## Source Code

### `hero245.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Button } from "@/components/ui/button";

interface Hero245Props {
  className?: string; // Optional custom styling
}

const Hero245 = ({ className }: Hero245Props) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}
    >
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 group/hero isolate">
        <div className="relative z-30 flex flex-col items-center justify-center text-center group/content">
          {/* Atmos Depth layer side */}
          <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <div className="mb-12 flex items-center justify-center gap-4 rounded-full bg-muted/50 backdrop-blur-xl border border-primary/10 p-2 pr-6 text-sm font-black uppercase tracking-widest text-primary shadow-2xl transition-all hover:scale-105 group/hiring">
            <div className="flex items-center gap-4 rounded-full bg-primary/10 px-6 py-2">
              <span className="inline-block size-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <span>We're Hiring elite</span>
            </div>
            <div className="flex items-center gap-3">
              Join Our Team world-wide <ArrowRight className="size-5 transition-transform group-hover/hiring:translate-x-2" />
            </div>
          </div>
          
          <h1 className="max-w-4xl font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase italic">
            Elevate Your <span className="text-primary not-italic">Next</span> Project With elite,
            <div className="relative inline-block mt-4 lg:mt-8">
                <PointerHighlight containerClassName="inline-block px-4">
                  <span className="text-primary/40 not-italic">Production-Ready</span>
                </PointerHighlight>
            </div>
            <br /> Shadcnblocks world-wide.
          </h1>
          <p className="mt-12 max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
            Experience world-class digital craftsmanship world-wide. 
            Deploy finite fragments for professional elite status world-wide.
          </p>

          <div className="mt-16 flex w-full flex-col items-center justify-center gap-6 group/buttons">
            <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-110 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              <span className="mr-4 text-3xl"></span> Download for Mac elite
            </Button>
            <Button variant="link" size="lg" className="font-black uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">
              Download for Windows professional
            </Button>
          </div>
        </div>

        <div className="relative mt-20 flex h-[60rem] w-full items-center justify-center overflow-hidden rounded-[4rem] border-4 border-primary/10 shadow-2xl grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000 group/visual">
           {/* Atmos Depth layer side */}
           <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
           
           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
           <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg"
            alt="hero elite showcase"
            className="size-full object-cover transition-transform duration-3000 group-hover/visual:scale-110"
          />
        </div>
      </div>

      {/* Grid column background visualization */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-between pointer-events-none opacity-20">
        {Array.from({ length: isMobile ? 8 : 18 }).map((_, index) => (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ duration: 1.2, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            key={index}
            className="h-full w-px bg-linear-to-b from-primary/20 via-primary/5 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.1)]"
          />
        ))}
      </div>
    </section>
  );
};

export { Hero245 };
```
