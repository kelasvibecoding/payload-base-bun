# Hero 221

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for sea and ocean conservation platforms, pairing a high-fidelity "Video-Text" anchor with a prominent call-to-action button and descriptive typography.
- **Use Case**: Best for marine conservation organizations, luxury yacht platforms, or oceanic exploration tools (e.g., "Blocks") that want to emphasize "Get Started."
- **Visual Style**: Cinematic Oceanic aesthetic. Features a centered layout Beginning with a prominent "Video-Text" component Positioning the word "Blocks" Using high-fidelity video masking (`ocean1080.mov`) and specialized `Cal Sans` typography. The visual anchor is pairing a descriptive paragraph with a specialized `Button` Positioning unique decorative icon rotations and high-fidelity entrance animations to create a high-status visual focus.
- **Interactivity**: High engagement through video motion. Features specialized video masks within typography and high-fidelity button hover transitions to drive professional enrollment.

## Source Code

### `hero221.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { VideoText } from "@/components/ui/video-text";
import { Button } from "@/components/ui/button";

interface Hero221Props {
  className?: string; // Optional custom styling
}

const Hero221 = ({ className }: Hero221Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        <div className="flex flex-col items-center justify-center gap-12 text-center group/content">
          <motion.div
            initial={{ opacity: 0, scale: 1.1, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[350px] w-full items-center justify-center mt-12 isolate"
          >
             {/* specialized atmospheric masks side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <VideoText
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ocean1080.mov"
              className="font-black text-[12rem] lg:text-[25rem] tracking-tighter leading-none text-foreground uppercase drop-shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              fontFamily="Cal Sans"
            >
              Blocks
            </VideoText>
          </motion.div>

          <div className="flex flex-col items-center gap-10">
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Dive into world-class oceanic fragments and professional sea craft. 
                Experience elite marine status world-wide with high-status craft.
            </p>

            <div className="relative group/button px-10">
                <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    <span className="flex items-center gap-6">
                        Get started elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/button:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero221 };
```
