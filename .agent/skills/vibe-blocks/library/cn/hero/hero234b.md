# Hero 234b

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for creative studios and inspiration platforms, pairing a centered typography block with a high-fidelity "Endless-Columns" background anchored by specialized interactive vertical image fragments.
- **Use Case**: Best for high-growth creative agencies, inspiration galleries (e.g., "Where creativity flows in endless columns of inspiration"), or professional studio pages that want to emphasize "A Studio" and "Digital Art."
- **Visual Style**: Cinematic Inspiration aesthetic. Features a centered layout Beginning with a prominent header Positioning high-fidelity typography and a descriptive paragraph inside a specialized `bg-black/70` and `backdrop-blur-lg` floating card. The visual anchor is a unique "Infinite Scroll Vertical Matrix" background Positioning 5 columns of high-fidelity image fragments Using specialized `motion.div` containers anchored by a categorical `linear` animation utilizing unique vertical-offset technical layout. Columns utilize specialized `y` coordinate mapping anchored by categorical grayscale and portrait imagery Using specialized `rotate` transitions anchored by categorical `columnIndex % 2` logic to create a unique high-status coordinate visual focus. Layout uses unique "Atmospheric Masking" Positioning high-fidelity vertical gradients Utilizing categorical `bg-gradient-to-b` and `bg-gradient-to-t` fragments to create a unique high-status coordinate visual focus.
- **Interactivity**: High cinematic engagement. Features specialized auto-scrolling column transitions and high-fidelity entrance animations for the typography card and full-width button to drive professional enrollment.

## Source Code

### `hero234b.tsx`
```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const galleryColumns = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
];

interface Hero234bProps {
  className?: string;
}

const Hero234b = ({ className }: Hero234bProps) => {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden bg-background",
        className,
      )}
    >
      <div className="absolute inset-0 flex justify-center gap-6">
        {galleryColumns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            className="flex flex-col gap-6 will-change-transform"
            animate={{
              y: columnIndex % 2 === 0 ? [-1200, 0] : [0, -1200],
            }}
            transition={{
              duration: 20 + columnIndex * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...column, ...column, ...column].map((image, imageIndex) => (
              <motion.div
                key={`${columnIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-xl"
                style={{
                  width: columnIndex === 2 ? "200px" : "160px",
                  height: columnIndex === 2 ? "280px" : "220px",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: columnIndex % 2 === 0 ? 2 : -2,
                  zIndex: 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Top and bottom masks */}
      <div className="absolute top-0 left-0 z-10 h-[200px] w-full bg-gradient-to-b from-background via-background/80 to-transparent md:h-[300px]" />
      <div className="absolute bottom-0 left-0 z-10 h-[200px] w-full bg-gradient-to-t from-background via-background/80 to-transparent md:h-[300px]" />

      {/* Side masks for additional focus */}
      <div className="absolute top-0 left-0 z-10 h-full w-[80px] bg-gradient-to-r from-background/60 to-transparent md:w-[120px]" />
      <div className="absolute top-0 right-0 z-10 h-full w-[80px] bg-gradient-to-l from-background/60 to-transparent md:w-[120px]" />

      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <motion.div
          className="max-w-md rounded-xl bg-black/70 p-8 text-center backdrop-blur-lg md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
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

          <motion.p
            className="mt-4 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Where creativity flows in endless columns of inspiration
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" variant="secondary" className="w-full">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234b };
```
