# Projects 11

## Metadata
- **Category**: Projects
- **Objective**: Render a true CSS-columns masonry grid for variable aspect ratio images.
- **Use Case**: Photography portfolios, mood boards, or Pinterest-style aggregate feeds.
- **Visual Style**: Uses native CSS columns (`columns-1 md:columns-2 lg:columns-3`) combined with `break-inside-avoid` to create a dense, interlocking vertical masonry layout. Perfect for mixing portraits, landscapes, and square aspect ratios randomly.
- **Interactivity**: Clean, generic `framer-motion` enter animations (`whileInView`) that stagger by index (`delay: index * 0.05`). A standard `group-hover:scale-105 group-hover:brightness-105` is applied to each image.

## Description
Projects 11 solves the common problem of rendering masonry grids without heavily relying on complex, layout-thrashing JavaScript libraries (like Masonry.js). By utilizing the native CSS `columns` property, the browser natively flows the items top-to-bottom, left-to-right, wrapping them into the defined column structure efficiently.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg", alt: "Image 1" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg", alt: "Image 2" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg", alt: "Image 3" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg", alt: "Image 4" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg", alt: "Image 5" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg", alt: "Image 6" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg", alt: "Image 7" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg", alt: "Image 8" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg", alt: "Image 9" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg", alt: "Image 10" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg", alt: "Image 11" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg", alt: "Image 12" },
];

interface Projects11Props {
  className?: string;
}

const Projects11 = ({ className }: Projects11Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="columns-1 gap-4 space-y-4 md:columns-2 md:gap-6 md:space-y-6 lg:columns-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="group relative overflow-hidden border-border transition-all duration-300">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects11 };
```
