# Project 5

## Metadata
- **Category**: Project
- **Objective**: Create an elegant, staggered-entry gallery showcase for an art/sculpture project.
- **Use Case**: Artist portfolios, museum exhibitions, high-end design firm case studies.
- **Visual Style**: Relies on soft, coordinated "fade-in-up" animations (`framer-motion`) across the entire layout. Features a robust header with a bordered metadata list on the right, followed by a rhythmic flow of full-width and split-grid imagery.
- **Interactivity**: High. Every major structural block (header, main image, image grids, footer text) enters the viewport sequentially via a `staggerChildren` Framer Motion variant.

## Description
Project 5 is an animation-forward showcase designed for high-end artistic presentation. Instead of dropping all content on the screen instantly, it uses Framer Motion to orchestrate a sophisticated entrance, staggering the appearance of the title, metadata, and subsequent images. This creates a "reveal" effect appropriate for luxury or museum-quality work.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project5Props {
  className?: string;
}

const Project5 = ({ className }: Project5Props) => {
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
      <div className="container space-y-8">
        <motion.header
          className="pb-8 md:pb-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-y-12 lg:flex-row lg:items-start lg:justify-between">
            <motion.div variants={fadeInUp} className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Organic Resonance
              </h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-muted-foreground"
              >
                A contemporary exploration of nature's abstract forms through
                sculptural artistry. This piece challenges the boundaries
                between natural organic structures and human interpretation,
                creating a dialogue between the viewer and the raw beauty of
                environmental textures and forms.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-full max-w-md space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-medium text-muted-foreground">
                  STUDIO
                </span>
                <span className="font-medium text-foreground">
                  NEXUS STUDIOS
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-medium text-muted-foreground">
                  MUSEUM
                </span>
                <span className="font-medium text-foreground">MOMA NYC</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-medium text-muted-foreground">YEAR</span>
                <span className="font-medium text-foreground">2024</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-medium text-muted-foreground">
                  CATEGORY
                </span>
                <span className="font-medium text-foreground">SCULPTURE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  EXHIBITION
                </span>
                <Button
                  variant="link"
                  className="h-auto p-0 font-medium text-foreground hover:text-primary"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="relative aspect-video overflow-hidden rounded-lg bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
              alt="Organic Resonance - Modern abstract nature sculpture featuring organic tree trunk forms"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>
        </motion.main>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/30">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                alt="Modern Terrarium Display - Contemporary presentation of the abstract nature sculpture"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/30">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                alt="Tree Trunk Resin Art - Detail view showing resin and organic material integration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export { Project5 };
```
