# Project 5g

## Metadata
- **Category**: Project
- **Objective**: Create a heavily asymmetrical offset layout balancing large typography with varied aspect ratio imagery.
- **Use Case**: Editorial features, avant-garde design studios, or contemporary art exhibitions.
- **Visual Style**: Layout is defined by an uneven 5-column grid (`lg:grid-cols-5`). Text consumes 3 columns while a tall 3:4 portrait image consumes the other 2. Further sections use 3-column offsets, giving the design a unique, syncopated rhythm.
- **Interactivity**: Clean `framer-motion` staggered entrances ensure the offset blocks load in a pleasing sequence from top down.

## Description
Project 5g embraces structural asymmetry. The header offsets massive typography against a strict, portrait-oriented hero image. Moving down the page, the layout shifts to a 2/3 and 1/3 split, constantly challenging the user's eye to move across the varied boundaries of text and media. It feels heavily bespoke and distinctly modern.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project5gProps {
  className?: string;
}

const Project5g = ({ className }: Project5gProps) => {
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
          className="pb-16 md:pb-24"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                    NEXUS STUDIOS / 2024
                  </span>
                  <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                    Organic
                    <span className="text-muted-foreground">
                      <br />
                      Resonance
                    </span>
                  </h1>
                </div>
                <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Modern Terrarium Display"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                  alt="Organic Resonance - Main sculpture view"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Exhibition
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      MUSEUM
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      MOMA NYC
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-sm font-medium text-muted-foreground">
                      MEDIUM
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      SCULPTURE
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Modern Terrarium Design"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-16 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Artistic Vision
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This sculptural piece emerges from our deep exploration of
                nature's inherent abstract qualities. Through careful
                observation and artistic interpretation, we've captured the
                essence of organic growth patterns, bark textures, and the
                interplay between light and shadow that defines natural forms.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The work invites viewers to reconsider their relationship with
                the natural world through a contemporary lens, creating a
                dialogue between the viewer and the raw beauty of environmental
                textures and forms.
              </p>
            </div>

            <div className="flex items-end justify-end">
              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Available for viewing
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Daily 10AM - 6PM
                  </p>
                </div>
                <Button
                  variant="default"
                  className="bg-foreground px-8 py-4 font-medium text-background hover:bg-foreground/90"
                >
                  PLAN YOUR VISIT
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5g };
```
