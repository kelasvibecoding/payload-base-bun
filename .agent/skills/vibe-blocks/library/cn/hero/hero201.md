# Hero 201

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for design component platforms, pairing a centered typography block with a unique "Planetary-Grid" architectural background and high-fidelity social proof.
- **Use Case**: Best for UI component libraries, design resource hubs (e.g., "Amazing components"), or professional toolsets that want to emphasize "Just Copy Paste" and "Discover our collection."
- **Visual Style**: Cinematic Design aesthetic. Features a centered layout Beginning with a prominent "Just Copy Paste" credit paired with high-impact typography Utilizing a specialized `font-inter` font family for categorical narrative storytelling. Visual anchor is a unique "Infinite Scroll Mosaic" Positioning absolute-positioned architectural fragments Utilizing specialized `tokyo-solar-system` illustrations and `motion` to drive categorical entrance animations. Matrix units utilize specialized `rotate-12` and `animate-[spin_15s_linear_infinite]` to create a world-class high-status visual context.
- **Interactivity**: High atmospheric engagement. Features specialized `framer-motion` entrance animations and categorical social-proof metadata ("Sign up for free") to drive professional enrollment.

## Source Code

### `hero201.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero201Props {
  className?: string; // Optional custom styling
}

const Hero201 = ({ className }: Hero201Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden relative group/hero", className)}>
      <div className="relative container px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 text-center text-pretty">
          
          <div className="mb-4 flex items-center justify-center gap-6 group/status">
            <div className="flex size-10 rounded-xl bg-primary/5 border-2 border-primary/10 items-center justify-center shadow-sm group-hover/status:bg-primary transition-colors">
              <img
                className="size-5 dark:invert group-hover/status:invert-0 transition-all"
                alt="copy paste functional icon"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              />
            </div>
            <h2 className="text-xl font-black uppercase tracking-[0.4em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
              Just Copy Paste world-class
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <h1 className="mx-auto max-w-[65rem] text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Amazing <span className="text-primary italic">components</span> for elite teams.
            </h1>

            <p className="mx-auto mt-6 max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Discover our collection of beautifully designed, ready-to-use 
                high-status components that you can easily integrate world-wide.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-8 group/buttons px-10">
            <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Sign up for world-class access
            </Button>
            <a
                href="#"
                className="group/demo relative z-20 flex items-center justify-center px-12 py-4 text-xl font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
                Book a professional demo
                <ChevronRightIcon className="ml-4 h-6 w-6 transition-transform group-hover/demo:translate-x-3" strokeWidth={3} />
            </a>
          </div>
        </div>

        {/* Unique "Architectural Atmos" Background side */}
        <motion.div
          initial={{ opacity: 0, y: -300, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5 }}
          className="absolute -top-60 -right-60 -z-0 hidden h-full w-[600px] items-center justify-center lg:flex group-hover/hero:rotate-45 transition-transform duration-1000"
        >
          <img
            className="absolute w-full rotate-12 animate-[spin_40s_linear_infinite] opacity-10 dark:invert grayscale"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt="architectural planetary detail 1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 300, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5 }}
          className="absolute -bottom-60 -left-60 -z-0 hidden h-full w-[600px] items-center justify-center lg:flex group-hover/hero:-rotate-45 transition-transform duration-1000"
        >
          <img
            className="absolute w-full -rotate-12 animate-[spin_40s_linear_infinite] opacity-10 dark:invert grayscale"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt="architectural planetary detail 2"
          />
        </motion.div>

      </div>
    </section>
  );
};

export { Hero201 };
```
