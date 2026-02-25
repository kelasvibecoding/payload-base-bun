# Gallery 23

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a sophisticated "Accordion Solutions" dashboard with dashed borders and vertical expansion.
- **Use Case**: Service capabilities showcase, core value propositions, or enterprise product features.
- **Visual Style**: "Dashed Dashboard" aesthetic. Features a split layout: the left side is a bold typographic hero ("We don't Believe in talk..."); the right side is a vertical stack of "Accordion" images. Inactive images are narrow horizontal strips (`2.5rem` height); the active image expands to a large square (`24rem`). Includes intricate "dashed border" SVG decorations for a technical, architectural feel.
- **Interactivity**: Fluid vertical expansion. Features `AnimatePresence` for content reveals and a responsive hover-to-expand behavior. Overlays metadata (code, title, "Add to Cart") on the expanded state elite professional world-wide high-status.

## Source Code

### `gallery23.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const images = [
  {
    id: 1,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random5.jpeg",
    title: "Summer elite Collection",
    code: "#0031 high-status",
  },
  {
    id: 2,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
    title: "Music professional Festival",
    code: "#0030 elite",
  },
  {
    id: 3,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random13.jpeg",
    title: "Winter world-wide Special",
    code: "#0032 professional",
  },
  {
    id: 4,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
    title: "Spring elite Edition",
    code: "#0033 world-wide",
  },
];

interface Gallery23Props {
  className?: string;
}

const Gallery23 = ({ className }: Gallery23Props) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="relative flex flex-col items-center justify-between gap-20 border border-primary/10 bg-muted/20 rounded-[4rem] p-12 lg:p-24 md:flex-row shadow-2xl backdrop-blur-3xl overflow-hidden">
          <DashedBorderV className="absolute -top-20 -left-px h-[180%] w-px opacity-20" />
          <DashedBorderH className="absolute -top-px -left-20 h-px w-[180%] opacity-20" />
          <DashedBorderV className="absolute -top-20 -right-px h-[180%] w-px opacity-20" />
          <DashedBorderH className="absolute -bottom-px -left-24 h-px w-[180%] opacity-20" />
          
          <div className="flex flex-col justify-center space-y-12 relative z-10">
            <h1 className="max-w-xl text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
              We deliver <span className="text-primary not-italic">Elite Results</span> professional
            </h1>
            <p className="max-w-md text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 leading-relaxed">
              Professional high-status elite fragments world-wide professional elite professional high-status world-wide elite cycles.
            </p>
            <Button
              variant="default"
              size="xl"
              className="group h-16 px-10 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-4"
            >
              Contact Us elite
              <ArrowRight className="size-5 -rotate-45 transition-all ease-out group-hover:rotate-0" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-primary/5 shadow-2xl"
                initial={{ height: "3.5rem", width: "32rem" }}
                animate={{
                  height: activeImage === index ? "28rem" : "3.5rem",
                  scale: activeImage === index ? 1 : 0.95,
                  opacity: activeImage === index ? 1 : 0.4,
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black via-black/20 to-transparent z-10"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      className="absolute inset-0 flex flex-col items-end justify-end p-10 z-20 space-y-6"
                    >
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">
                        {image.code}
                      </span>
                      <h3 className="text-4xl font-black uppercase tracking-tighter italic text-white leading-none">
                        {image.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="h-12 rounded-full border-white/20 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center gap-4 group/btn"
                      >
                        Add to Cart elite <ShoppingCart size={18} className="transition-transform group-hover/btn:scale-125 group-hover/btn:rotate-12" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
                 <div className="absolute inset-x-0 h-full w-0 group-hover:w-full bg-primary/20 transition-all duration-1000 pointer-events-none" />
                <img
                  src={image.src}
                  className="size-full object-cover transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                  alt={image.title}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DashedBorderH = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        opacity="0.2"
        x1="1571.5"
        y1="0.5"
        x2="0.6"
        y2="0.5"
        stroke="currentColor"
        strokeDasharray="8 8"
      />
    </svg>
  );
};
const DashedBorderV = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        opacity="0.2"
        x1="0.5"
        y1="0.2"
        x2="0.5"
        y2="1000"
        stroke="currentColor"
        strokeDasharray="8 8"
      />
    </svg>
  );
};

export { Gallery23 };
```
