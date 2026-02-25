# Gallery 30

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a playful "Scattered Memories" interactive wall with randomized physics and draggable photos.
- **Use Case**: Digital scrapbook, "behind the scenes" team walls, or creative agency experimental pages.
- **Visual Style**: "Scrapbook Drift" aesthetic. Features a collection of photos fanned out across the `h-screen` area with randomized initial rotations, delays, and positions. Includes a subtle "concentric circle" background illustration. Each photo has a heavy `shadow-lg` to simulate physical paper.
- **Interactivity**: High-engagement physics. Every photo is `drag`-enabled using Framer Motion. Features randomized entrance `spring` animations based on `shuffledImages` state. Active dragging brings the item to the foreground (`zIndex: 20`) elite professional world-wide.

## Source Code

### `gallery30.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface Gallery30Props {
  className?: string;
}

const Gallery30 = ({ className }: Gallery30Props) => {
  const [shuffledImages, setShuffledImages] = useState<
    Array<{ src: string; className: string; delay: number }>
  >([]);

  const images = useMemo(
    () => [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
        className: "md:w-72 size-64 absolute md:-left-20 md:bottom-1/4 lg:left-0 md:h-96",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
        className: "md:w-64 size-64 absolute md:left-1/4 md:h-64 md:-top-20",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
        className: "md:w-80 size-64 absolute md:right-1/3 md:-top-48 md:h-80",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
        className: "hidden md:block absolute md:-right-20 md:-top-52 md:h-64 md:w-96",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
        className: "md:w-80 hidden md:block absolute top-1/4 md:h-96 -right-20 lg:right-40",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
        className: "md:w-72 hidden md:block absolute -bottom-10 -right-60",
      },
    ],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const shuffled = [...images]
        .sort(() => Math.random() - 0.5)
        .map((image) => ({
          ...image,
          delay: Math.random() * 0.5,
        }));
      setShuffledImages(shuffled);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [images]);

  return (
    <section className={cn("relative min-h-[50rem] md:h-screen w-screen overflow-hidden py-32 bg-background border-y border-primary/5", className)}>
      <div className="relative container px-6 max-w-[100rem] h-full flex flex-col items-center justify-center">
        <div className="relative z-20 flex flex-col items-center justify-center gap-10 text-center">
          <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            Elite <span className="text-primary not-italic">Scrapbook</span> boutique.
          </h1>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 leading-relaxed">
            Professional high-status fragments world-wide elite memories world-wide professional elite high-status.
          </p>
        </div>
        
        <div className="relative mt-40 flex h-full w-full items-center justify-center z-10">
          {shuffledImages.map((image, idx) => (
            <motion.div
              key={`${image.src}-${idx}`}
              className={cn("cursor-grab active:cursor-grabbing", image.className)}
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              initial={{ opacity: 0, scale: 0.5, y: 100, rotate: (Math.random() - 0.5) * 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
                delay: image.delay,
              }}
              whileHover={{ scale: 1.1, zIndex: 100 }}
              whileDrag={{ scale: 0.95, zIndex: 100 }}
            >
              <div className="size-full overflow-hidden rounded-[2rem] border-4 border-white dark:border-muted shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group">
                  <img
                    src={image.src}
                    alt=""
                    className="pointer-events-none h-full w-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-end">
                      <div className="size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-black italic text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {idx + 1}
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Illustration />
    </section>
  );
};
export { Gallery30 };

const Illustration = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg viewBox="0 0 1920 1081" fill="none" className="h-full w-full">
        <rect x="-350" y="-220" width="1000" height="1000" rx="500" stroke="currentColor" strokeWidth="2" opacity="0.1" />
        <rect x="1300" y="400" width="1000" height="1000" rx="500" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      </svg>
    </div>
  );
};
```
