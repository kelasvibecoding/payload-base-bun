# Hero 234

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for creative studios and digital art platforms, pairing a centered typography block with a high-fidelity "Scrolling-Gallery" background anchored by specialized interactive image rows.
- **Use Case**: Best for creative agencies, art portfolios (e.g., "A Studio Crafting Digital Art"), or professional studio pages that want to emphasize "A Studio" and "View Projects."
- **Visual Style**: Cinematic Gallery aesthetic. Features a centered layout Beginning with a prominent header Positioning high-fidelity typography inside a specialized `bg-black/60` and `backdrop-blur-md` floating card. The visual anchor is a unique "Infinite Scroll Gallery" background Positioning 2 rows of high-fidelity image fragments Using specialized `motion.div` containers anchored by a categorical `linear` animation utilizing unique vertical-offset layout. Rows utilize specialized `x` coordinate mapping anchored by categorical portrait and grayscale imagery to create a unique high-status coordinate visual focus. Layout uses unique "Atmospheric Masking" Positioning high-fidelity gradient overlays Utilizing categorical `bg-gradient-to-r` fragments to create a unique high-status coordinate visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized auto-scrolling gallery transitions and high-fidelity entrance animations for the typography card to drive professional enrollment.

## Source Code

### `hero234.tsx`
```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const galleryImages = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  ],
];

interface Hero234Props {
  className?: string;
}

const Hero234 = ({ className }: Hero234Props) => {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden bg-background",
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-4">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 will-change-transform"
            animate={{
              x: rowIndex === 1 ? [-1920, 0] : [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <motion.div
                key={`${rowIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: rowIndex === 1 ? "280px" : "240px",
                  height: rowIndex === 1 ? "350px" : "300px",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Left side masks */}
      <div className="absolute top-0 left-0 z-10 h-full w-[160px] bg-gradient-to-r from-background to-transparent md:w-[200px]" />

      {/* Right side masks */}
      <div className="absolute top-0 right-0 z-10 h-full w-[160px] bg-gradient-to-l from-background to-transparent md:w-[200px]" />

      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <motion.div
          className="rounded-lg bg-black/60 p-8 backdrop-blur-md md:p-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A Studio <br />
            Crafting <br />
            Digital Art
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" variant="secondary">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234 };
```
