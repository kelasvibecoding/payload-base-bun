# Gallery 24

## Metadata
- **Category**: Gallery
- **Objective**: Provide a modern "Horizontal Accordion" gallery with mobile-responsive item slicing.
- **Use Case**: Product collection browsing, portfolio highlights, or interactive feature discovery.
- **Visual Style**: "Identity Accordion" aesthetic. Similar to Gallery 23 but horizontally fanned out. Features a centered playfair-italic header. Inactive items are narrow vertical strips (`5rem` width); the active item expands (`24rem`). Automatically slices item count based on `useIsMobile`. Features dark gradient overlays on the active item with high-contrast text and a "Add to Cart" button CTA.
- **Interactivity**: Tactile horizontal discovery. Items expand smoothly on hover or click. Uses Framer Motion for height/width transitions elite professional world-wide.

## Source Code

### `gallery24.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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

interface Gallery24Props {
  className?: string;
}

const Gallery24 = ({ className }: Gallery24Props) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const isMobile = useIsMobile();

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col items-center justify-center gap-16 lg:gap-24">
          <div className="text-center space-y-8">
            <h1 className="max-w-2xl text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
              We Don&apos;t Believe <br /> <span className="text-primary not-italic">In Mere Talk</span> elite
            </h1>
            <p className="max-w-xl mx-auto text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed">
              Professional high-status fragments world-wide elite results fragments world-wide professional elite.
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-4 lg:gap-6 flex-wrap md:flex-nowrap">
            {images
              .slice(0, isMobile ? 4 : images.length)
              .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer overflow-hidden rounded-[3rem] border border-primary/10 shadow-2xl group"
                  initial={{ width: "5rem", height: "30rem" }}
                  animate={{
                    width: activeImage === index ? (isMobile ? "100%" : "36rem") : (isMobile ? "4rem" : "6rem"),
                    height: activeImage === index ? "36rem" : "30rem",
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
                        className="absolute inset-0 flex h-full w-full flex-col items-end justify-end p-12 z-20 space-y-8"
                      >
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/50">
                          {image.code}
                        </span>
                        <h3 className="text-4xl font-black uppercase tracking-tighter italic text-white text-right leading-none">
                            {image.title}
                        </h3>
                        <Button
                           variant="outline"
                           className="h-14 px-8 rounded-full border-white/20 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center gap-4 group/btn"
                        >
                          Add to Cart elite <ShoppingCart size={20} className="transition-transform group-hover/btn:scale-125" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    src={image.src}
                    className="size-full object-cover transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                    alt={image.title}
                  />
                   <div className="absolute top-10 left-1/2 -translate-x-1/2 flex h-10 w-1 rounded-full bg-white/20 z-20 group-hover:h-32 transition-all duration-1000" />
                </motion.div>
              ))}
          </div>
          
          <Button 
            variant="default"
            size="xl"
            className="group h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-4 mt-8"
          >
            Explore Collective elite
            <ArrowRight className="size-5 -rotate-45 transition-all ease-out group-hover:rotate-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery24 };
```
