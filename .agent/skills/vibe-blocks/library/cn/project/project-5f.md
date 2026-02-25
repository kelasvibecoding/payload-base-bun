# Project 5f

## Metadata
- **Category**: Project
- **Objective**: Use distinct container blocks and massive full-width imagery to create a highly structured, "contained" case study format.
- **Use Case**: Film productions, massive marketing campaigns, or structured enterprise project overviews where distinct separation of sections is desired.
- **Visual Style**: Heavy use of grouped, padded box elements (`rounded-xl bg-muted/20 p-8`). Imagery stack is dominant and expansive, moving from a massive 21:9 hero directly into stacked 16:9 cinematic aspect ratios.
- **Interactivity**: Staggered container animations ensure the heavy visual blocks load sequentially and smoothly rather than dropping all at once.

## Description
Project 5f encapsulates content into discrete, rounded boxes, creating a highly structured and organized feel. This contrasts with open, airy editorial layouts by providing explicit visual boundaries for the metadata block and the call-to-action block. Sandwiched between these structural elements is a massive stack of full-bleed cinematic imagery that drives the visual narrative.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project5fProps {
  className?: string;
}

const Project5f = ({ className }: Project5fProps) => {
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
          <motion.div
            variants={fadeInUp}
            className="rounded-xl bg-muted/20 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-muted/50 px-4 py-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
                  <span className="text-sm font-medium text-muted-foreground">
                    NEXUS STUDIOS
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Organic Resonance
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
              <div className="rounded-lg bg-background/50 p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase">
                      Museum
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      MOMA NYC
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase">
                      Year
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      2024
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase">
                      Medium
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Sculpture
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase">
                      Status
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[21/9] overflow-hidden rounded-xl bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
              alt="Organic Resonance - Main sculpture view"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl bg-muted/20 p-8 md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  Visit the Exhibition
                </h3>
                <p className="text-muted-foreground">
                  Experience Organic Resonance at MOMA NYC
                </p>
              </div>
              <Button
                variant="default"
                className="bg-foreground px-8 py-4 font-medium text-background hover:bg-foreground/90"
              >
                BOOK TICKETS
              </Button>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5f };
```
