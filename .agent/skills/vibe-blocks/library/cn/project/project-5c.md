# Project 5c

## Metadata
- **Category**: Project
- **Objective**: Craft an offset, dense data presentation emphasizing a blocky, structured hierarchy.
- **Use Case**: Design agencies, strict minimal corporate case studies, structural architecture.
- **Visual Style**: Uses a very specific `bg-muted/50 p-6` grid for metadata block to compress the information visually against the massive adjacent title. The images sit in a heavy `md:grid-cols-4` where one dominates completely (span 3).
- **Interactivity**: Staggered `framer-motion` entrance animations. 

## Description
Project 5c relies on heavy, blocked grids. The metadata is housed in a tightly packed 2x2 grid `bg-muted` block adjacent to the main title. The main gallery is highly asymmetrical, giving a 3-column span to the main hero image and squeezing the secondary image into a vertical, full-height slot alongside it.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project5cProps {
  className?: string;
}

const Project5c = ({ className }: Project5cProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="container">
        <motion.header
          className="pb-12 md:pb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                Organic Resonance
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A contemporary exploration of nature's abstract forms through
                sculptural artistry. This piece challenges the boundaries
                between natural organic structures and human interpretation,
                creating a dialogue between the viewer and the raw beauty of
                environmental textures and forms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4 bg-muted/50 p-6">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    ARTIST
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    NEXUS STUDIOS
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    YEAR
                  </p>
                  <p className="text-sm font-semibold text-foreground">2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    VENUE
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    MOMA NYC
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    MEDIUM
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    SCULPTURE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-6 md:grid-cols-4"
          >
            <div className="md:col-span-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                  alt="Organic Resonance - Main sculpture view"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative h-full overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Futuristic Tree Artwork.jpg"
                  alt="Minimalist art blocks"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>
          </motion.div>
        </motion.main>

        <motion.section
          className="py-12 md:py-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-y-8 md:flex-row md:items-start md:justify-between">
            <motion.div variants={fadeInUp}>
              <h2 className="text-lg font-semibold tracking-wide text-foreground">
                ARTISTIC VISION
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <p className="text-lg leading-relaxed font-medium text-muted-foreground">
                This sculptural piece emerges from our deep exploration of
                nature's inherent abstract qualities. Through careful
                observation and artistic interpretation, we've captured the
                essence of organic growth patterns, bark textures, and the
                interplay between light and shadow that defines natural forms.
                The work invites viewers to reconsider their relationship with
                the natural world through a contemporary lens.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export { Project5c };
```
