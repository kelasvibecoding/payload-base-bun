# Hero 229

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for technical component platforms, pairing a centered typography block with high-fidelity "SVG-Illustrations" anchored by specialized mirrored mirroring and multiple status call-to-action buttons.
- **Use Case**: Best for UI component libraries, developer resources (e.g., "Blocks Built With Shadcn & Tailwind."), or professional toolsets that want to emphasize "Documentation" and "Get Started."
- **Visual Style**: Cinematic Architectural-Drawing aesthetic. Features a full-screen layout Beginning with a triplet of call-to-action buttons centered in the viewport. The centerpiece is a unique "Illustration Matrix" of mirrored SVG paths Positioning `Illustration1` and `Illustration2` fragments Positioning categorical technical drawings anchored by specialized `scale-y-[-1]` and `scale-x-[-1]` mirroring. Visual anchor is a unique "Infinite Scroll" atmosphere masking Positioning a specialized full-screen background component Using high-fidelity `motion` to drive categorical entrance animations for the technical drawings to create a high-status visual scale.
- **Interactivity**: High cinematic engagement. Features specialized SVG path animations and high-fidelity entrance transitions for the illustration grid to drive professional enrollment.

## Source Code

### `hero229.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero229Props {
  className?: string; // Optional custom styling
}

const Hero229 = ({ className }: Hero229Props) => {
  return (
    <section
      className={cn(
        "relative h-[100dvh] w-full overflow-hidden bg-background font-sans border-b flex flex-col items-center justify-center",
        className,
      )}
    >
      <div className="relative z-30 container px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center text-pretty group/content">
        
        {/* Narrative Merit Badge side */}
        <div className="group/badge">
             <Button
                variant="secondary"
                size="lg"
                className="h-fit rounded-full bg-muted/40 border-2 border-primary/20 backdrop-blur-xl px-10 py-4 font-black text-lg text-foreground shadow-xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none flex items-center gap-6"
            >
                <span className="size-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                <span>See Pricing elite</span>
            </Button>
        </div>

        {/* Narrative Narrative side */}
        <div className="flex flex-col items-center gap-10">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse size-1/2 left-1/4"></div>

            <h1 className="max-w-5xl text-center font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Blocks Built <br /> 
                <span className="text-secondary italic">with</span> Shadcn elite.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Deploy world-class architectural fragments world-wide. 
                Experience finite professional craft for elite status world-wide.
            </p>
        </div>

        {/* Action Merit Matrix side */}
        <div className="flex flex-col sm:flex-row gap-10 group/buttons px-10">
          <Button
            variant="outline"
            size="lg"
            className="h-fit rounded-full bg-background/50 border-4 border-primary/10 px-16 py-8 font-black text-2xl text-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-1"
          >
            <span className="flex items-center gap-8">
                Documentation
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-1:rotate-0" strokeWidth={4} />
            </span>
          </Button>
          <Button
            size="lg"
             className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-2"
          >
            <span className="flex items-center gap-8">
                Get Started
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-2:rotate-0" strokeWidth={4} />
            </span>
          </Button>
        </div>
      </div>

      {/* Unique "Architectural Illustration Matrix" Visual side */}
      <div className="absolute inset-0 pointer-events-none group-hover/hero:opacity-80 transition-opacity duration-2000 opacity-40">
        <Illustration1
            initial={{ opacity: 0, y: -200, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-1/2 -translate-x-1/2 size-[60rem] lg:size-[80rem]"
        />
        <Illustration1
            initial={{ opacity: 0, y: 200, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-y-[-1] size-[60rem] lg:size-[80rem]"
        />
        <Illustration2
            initial={{ opacity: 0, x: -200, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block size-[40rem] text-primary"
        />
        <Illustration2
            initial={{ opacity: 0, x: 200, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 right-0 -translate-y-1/2 scale-x-[-1] hidden lg:block size-[40rem] text-primary"
        />
      </div>
    </section>
  );
};

export { Hero229 };

const Illustration1 = (props: any) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 460 233"
      fill="none"
      {...props}
    >
      <path stroke="currentColor" strokeOpacity="0.2" d="M141.338 232.625V5.075" />
      <path stroke="currentColor" strokeOpacity="0.2" d="M176.338 232.625V5.075" />
      <path stroke="currentColor" strokeOpacity="0.2" d="M212.338 231.625V4.075" />
      <path stroke="currentColor" strokeOpacity="0.2" d="M248.338 230.625V3.075" />
      <path stroke="currentColor" strokeOpacity="0.2" d="M284.338 229.625V2.075" />
      <path stroke="currentColor" strokeOpacity="0.2" d="M320.338 228.625V1.075" />
      <path
        stroke="currentColor"
        strokeOpacity="0.2"
        d="M459.649 152.723 351.613 69.264a11 11 0 0 1-4.275-8.705V.074"
      />
      <path
        stroke="currentColor"
        strokeOpacity="0.2"
        d="m.338 152.723 108.036-83.459a11 11 0 0 0 4.275-8.705V.074"
      />
    </motion.svg>
  );
};

const Illustration2 = (props: any) => {
  return (
    <motion.svg
      {...props}
      viewBox="0 0 323 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 442.957L209.048 442.957C212.366 442.957 215.508 441.458 217.596 438.879L321.802 310.196"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path
        d="M0 1.19531L209.048 1.19557C212.366 1.19558 215.508 2.69391 217.596 5.27302L321.802 133.956"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
    </motion.svg>
  );
};
```
