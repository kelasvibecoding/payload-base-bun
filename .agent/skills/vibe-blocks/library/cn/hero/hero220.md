# Hero 220

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, narrative-driven introduction for travel and landscape platforms, pairing a high-fidelity full-screen "Video-Text" anchor with a subtle background video overlay.
- **Use Case**: Best for travel agencies, landscape photography portfolios, or cinematic brand storytelling platforms that want to emphasize the "Blocks" brand or a specific destination.
- **Visual Style**: Cinematic Landscape aesthetic. Features a centered layout Beginning with a full-screen background image (`landscape6.jpeg`) at low opacity (`0.2`). The visual anchor is a unique "Video-Text" component Positioning the word "Blocks" Using high-fidelity video masking (`landscape.mp4`) and specialized `font-playfair` typography to create a high-status cinematic depth.
- **Interactivity**: High engagement through video motion. Features specialized video masks within typography and high-fidelity transitions to drive professional enrollment.

## Source Code

### `hero220.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { VideoText } from "@/components/ui/video-text";

interface Hero220Props {
  className?: string; // Optional custom styling
}

const Hero220 = ({ className }: Hero220Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-32 bg-background font-sans border-b",
        className,
      )}
    >
      <div className="container relative px-6 max-w-[100rem]">
        {/* Cinematic Backdrop side */}
        <div className="absolute top-0 left-0 h-screen w-full overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape6.jpeg')] bg-cover bg-top bg-no-repeat opacity-20 z-0 grayscale" />
        
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 text-center group/content">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-[350px] w-full items-center justify-center isolate"
          >
             {/* specialized atmospheric masks side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <VideoText
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/landscape.mp4"
              className="font-black text-[12rem] lg:text-[25rem] tracking-tighter leading-none text-foreground uppercase drop-shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              fontFamily="Playfair Display"
            >
              Blocks
            </VideoText>
          </motion.div>

          <p className="mx-auto max-w-[50rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
            Explore world-class architectural fragments and cinematic landscapes. 
            Experience high-status craft for professional elite status world-wide.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Hero220 };
```
