# Hero 200

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component platforms, pairing a centered typography block with a unique "iPhone-Device" interactive mockup and high-fidelity typography.
- **Use Case**: Best for UI component libraries, mobile app showcases (e.g., "Blocks Built With Shadcn"), or professional design tools that want to emphasize "Just Copy Paste Them" and "Sign up for free."
- **Visual Style**: Cinematic Device-Showcase aesthetic. Features a centered layout beginning with a prominent "Shadcnblocks" credit paired with high-impact typography Utilizing an high-fidelity `playfair` font family for categorical narrative storytelling. Visual anchor is a unique "Phone Matrix" positioned at the bottom Featuring an high-fidelity iPhone mockup Utilizing `motion` and `framer-motion` to drive categorical entrance animations. Mockup Frame includes specialized absolute-positioned elements positioning a unique "Status-Calendar" fragment Utilizing high-fidelity `tracking-tight` typography and specialized `rounded-full` visual indicators to create high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized `framer-motion` entrance animations and high-fidelity project preview layering to drive professional trust and enrollment.

## Source Code

### `hero200.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero200Props {
  className?: string; // Optional custom styling
}

const Hero200 = ({ className }: Hero200Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="border-b border-border/40 pb-20 lg:pb-32">
        <div className="container relative z-10 px-6 flex flex-col items-center justify-center gap-12 text-center text-pretty">
          
          {/* Platform Narrative side */}
          <div className="flex flex-col gap-8 group/text relative isolate">
            {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 bottom-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h2 className="text-xl lg:text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
               Shadcnblocks world-class
            </h2>
            <h1 className="text-6xl font-black lg:text-[10rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-sm uppercase">
                Blocks built with <br />
                <span className="text-primary italic">Shadcn</span> & Tailwind.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Just copy world-class paste them world-wide. High-status 
                professional building for driven professional teams.
            </p>
          </div>

          <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-[0px_10px_40px_-10px_rgba(var(--primary),0.5)] transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
            <span className="mr-4 text-3xl leading-none"></span>
            Sign up for world-class access 
          </Button>

          {/* Unique "Mockup Anchor Matrix" Visual side */}
          <div className="relative mt-20 h-[500px] w-full overflow-hidden group/device">
            <motion.div
              initial={{ opacity: 0, y: 300, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2 }}
              className="relative mx-auto flex h-[900px] w-[400px] items-start justify-center rounded-[5rem] bg-black md:h-[1000px] md:w-[480px] shadow-[0_100px_100px_-40px_rgba(0,0,0,0.8)] border-[16px] border-[#1E1E1E]"
            >
              {/* iPhone Hardware Overlay side */}
              <img
                className="absolute inset-0 z-20 scale-105 object-cover opacity-80 pointer-events-none"
                alt="High-status mobile hardware frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
              />
              
              {/* Device OS Narrative interface side */}
              <div className="h-full w-full relative z-10 p-4">
                <div className="mt-24 flex justify-between items-start px-8">
                  <h1 className="flex items-end gap-3 text-7xl font-black tracking-tighter text-white">
                    Mon
                    <div className="mb-4 size-5 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                  </h1>
                  <div className="mt-4 flex flex-col items-end gap-1">
                    <p className="text-xl font-bold tracking-widest uppercase text-white/40">Feburary 9</p>
                    <p className="text-4xl font-black tracking-tighter text-white/20">2025</p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-[20%] flex flex-col items-center gap-12 px-12">
                    <img
                    className="size-48 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    alt="elite platform logo detail"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
                    />
                    <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-1/2 bg-linear-to-r from-transparent via-primary to-transparent" />
                    </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero200 };
```
