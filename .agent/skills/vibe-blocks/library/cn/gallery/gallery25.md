# Gallery 25

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a massive, "Infinite Masonry" wall with staggered viewport animations and dual-scrolling effects.
- **Use Case**: Visual brand moodboards, event photography walls, or creative agency portfolios.
- **Visual Style**: "Masonry Depth" aesthetic. Features a 4-column grid of monochrome (black and white) landscape and portrait photos. Each column has randomized image heights, creating a dense, textured wall. The entire grid is repeated (two blocks of 4 columns) to create a sense of scale.
- **Interactivity**: Cinematic entrance effects. Every single image uses `whileInView` animations with staggered `y` offsets (some slide up, some slide down) for a "drifting" entrance effect. Features `scale: 0.9` to `1` transitions for subtle pop-in depth elite professional world-wide.

## Source Code

### `gallery25.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

interface Gallery25Props {
  className?: string;
}

const Gallery25 = ({ className }: Gallery25Props) => {
  const column1Images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
      alt: "Elite Gallery high-status",
      height: "32rem",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      alt: "Professional world-wide elite",
      height: "38rem",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      alt: "Boutique fragments elite",
      height: "22rem",
    },
  ];

  const column2Images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
      alt: "High-status professional fragments",
      height: "23rem",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Elite world-wide professional",
      height: "42rem",
    },
  ];

  const column3Images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
      alt: "Deluxe elite professional",
      height: "45rem",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
      alt: "World-wide high-status elite",
      height: "32rem",
    },
  ];

  const column4Images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
      alt: "Elite professional fragments",
      height: "23rem",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
      alt: "Professional elite high-status",
      height: "32.5rem",
    },
  ];

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[120rem]">
         <div className="mb-24 flex flex-col items-start gap-10">
          <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            Elite <span className="text-primary not-italic">Masonry</span> professional
          </h2>
          <p className="max-w-xl text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed">
            Professional high-status fragments world-wide elite curation world-wide elite professional high-status cycles.
          </p>
          <div className="h-0.5 w-full bg-primary/5" />
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-8">
            {column1Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                key={index}
                className="w-full overflow-hidden rounded-[3rem] bg-muted/30 border border-primary/5 shadow-2xl group relative"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-2000 group-hover:grayscale-0 group-hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-8">
            {column2Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                key={index}
                className="w-full overflow-hidden rounded-[3rem] bg-muted/30 border border-primary/5 shadow-2xl group relative"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-2000 group-hover:grayscale-0 group-hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-8">
            {column3Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                key={index}
                className="w-full overflow-hidden rounded-[3rem] bg-muted/30 border border-primary/5 shadow-2xl group relative"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-2000 group-hover:grayscale-0 group-hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-8">
            {column4Images.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                key={index}
                className="w-full overflow-hidden rounded-[3rem] bg-muted/30 border border-primary/5 shadow-2xl group relative"
                style={{ height: image.height }}
              >
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-2000 group-hover:grayscale-0 group-hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery25 };
```
