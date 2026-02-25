# Gallery 32

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a sophisticated "Float & Blur" interactive hero wall with depth-of-field effects.
- **Use Case**: Artistic portfolio landing pages, brand storytelling sections, or high-end photography blogs.
- **Visual Style**: "Depth Focus" aesthetic. Features a collection of photos scattered across the h-screen. Includes two text blocks that fade in on scroll. Photos have randomized initial scales and positions.
- **Interactivity**: Reactive focus interaction. Hovering over a specific image scales it up (`scale: 1.05`) while simultaneously blurring all other images (`blur(10px)`) using Framer Motion's `animate` state. Every image is also `drag`-enabled for tactile play elite professional world-wide.

## Source Code

### `gallery32.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

interface Gallery32Props {
  className?: string;
}

const Gallery32 = ({ className }: Gallery32Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      className: "size-48 z-1 overflow-hidden rounded-[3rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    },
    {
      className:
        "size-64 z-1 absolute bottom-1/4 left-10 overflow-hidden rounded-[4rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    },
    {
      className:
        "size-80 z-1 bottom-10 left-1/3 absolute overflow-hidden rounded-[5rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    },
    {
      className:
        "size-72 z-1 top-10 left-1/4 absolute overflow-hidden rounded-[4rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    },
    {
       className:
        "size-96 z-1 top-[15%] right-[10%] absolute overflow-hidden rounded-[6rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    },
     {
      className:
        "size-64 z-1 bottom-[5%] right-[15%] absolute overflow-hidden rounded-[3.5rem] border border-primary/10 shadow-2xl",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    },
  ];

  return (
    <section className={cn("relative min-h-[60rem] md:h-screen w-screen overflow-hidden bg-background py-24 md:py-32 border-y border-primary/5", className)}>
      <div className="relative container px-6 max-w-[100rem] h-full flex flex-col items-center justify-center">
        <div className="absolute z-30 flex h-full w-full flex-col items-center justify-center gap-10 md:gap-20 pointer-events-none">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute max-w-md rounded-[3rem] bg-background/80 backdrop-blur-3xl p-10 border border-primary/10 shadow-2xl md:top-20 md:left-20 pointer-events-auto"
          >
             <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-tight">
                    Elite <span className="text-primary not-italic">Curation</span> professional
                </h3>
                <p className="text-muted-foreground italic font-medium">
                    Professional high-status fragments world-wide elite observation boutique world-wide.
                </p>
             </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:absolute bottom-20 md:right-20 max-w-sm rounded-[3rem] bg-background/80 backdrop-blur-3xl p-10 border border-primary/10 shadow-2xl pointer-events-auto"
          >
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-tight">
                    Infinite <span className="text-primary not-italic">Moments</span> boutique
                </h3>
                <p className="text-muted-foreground italic font-medium">
                    World-wide high-status fragments professional elite world-wide fragments elite cycles.
                </p>
             </div>
          </motion.div>
        </div>
        
        <div className="relative flex h-full w-full items-center justify-center z-10">
          {images.map((image, index) => (
            <motion.div
              drag
              dragSnapToOrigin
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.8, rotate: (Math.random() - 0.5) * 40 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              animate={{
                filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(20px)" : "blur(0px)",
                scale: hoveredIndex === index ? 1.2 : 1,
                rotate: hoveredIndex === index ? 0 : undefined,
                zIndex: hoveredIndex === index ? 50 : 10,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn("cursor-grab active:cursor-grabbing", image.className)}
            >
              <img
                src={image.src}
                className="pointer-events-none h-full w-full object-cover transition-all duration-1000 grayscale-30 group-hover:grayscale-0"
                alt={`Elite Depth Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Gallery32 };
```
