# Project 5a

## Metadata
- **Category**: Project
- **Objective**: Design an asymmetrical, animated gallery interface with stacked typography.
- **Use Case**: Art galleries, architectural case studies, high-end minimalist product showcases.
- **Visual Style**: The header is split asymmetrically (`lg:grid-cols-3` where text takes 2 columns and metadata aligns to the bottom of the 3rd). A signature horizontal line `h-0.5 w-8 bg-primary` accents the eyebrow headers.
- **Interactivity**: Staggered entrance animations powered by Framer Motion, ensuring an elegant, sequenced load.

## Description
Project 5a leans into asymmetrical balance. The header places heavy typography on the left while anchoring delicate metadata to the bottom-right. The image rhythm follows a similar pattern—one massive hero image, followed by a split section where text is weighed against two stacked image detail shots. All elements are seamlessly animated in.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project5aProps {
  className?: string;
}

const Project5a = ({ className }: Project5aProps) => {
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-primary"></div>
                  <span className="text-sm font-medium tracking-wider text-muted-foreground">
                    NEXUS STUDIOS PRESENTS
                  </span>
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Organic Resonance
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex h-full flex-col justify-end"
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Museum</span>
                  <span className="text-sm font-medium text-foreground">
                    MOMA NYC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Year</span>
                  <span className="text-sm font-medium text-foreground">
                    2024
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Medium</span>
                  <span className="text-sm font-medium text-foreground">
                    Sculpture
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12 md:space-y-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted/30">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                alt="Organic Resonance - Modern abstract nature sculpture"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-6 bg-primary"></div>
                  <span className="text-sm font-medium tracking-wider text-muted-foreground">
                    ARTISTIC VISION
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                  Creative Process
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  This sculptural piece emerges from our deep exploration of
                  nature's inherent abstract qualities. Through careful
                  observation and artistic interpretation, we've captured the
                  essence of organic growth patterns, bark textures, and the
                  interplay between light and shadow.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The work invites viewers to reconsider their relationship with
                  the natural world through a contemporary lens, creating a
                  dialogue between the viewer and the raw beauty of
                  environmental textures and forms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Modern Terrarium Display - Contemporary presentation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Modern Terrarium Display - Contemporary presentation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5a };
```
