# Project 5d

## Metadata
- **Category**: Project
- **Objective**: Deliver a contained, horizontally rhythmic, column-based project layout constrained for perfect reading widths.
- **Use Case**: Standard portfolio pieces where content is sparse but needs to feel substantial. Single-column sequential storytelling.
- **Visual Style**: Restricts the maximum width of the container strongly (`max-w-4xl`). The metadata sits in a horizontal row (`grid-cols-4`) separating the title area from the photography.
- **Interactivity**: Staggered presentation on load via Framer Motion. Uses a large CTA button to cap the component (`w-full bg-foreground`).

## Description
Project 5d shrinks the active reading viewport by utilizing a `max-w-4xl` container, making the case study feel more like an intimate document. The layout flows strictly linearly: Title -> Hero Image -> Horizontal Metadata Strip -> Narrative -> Secondary Image -> Call to Action. The sequence is beautifully animated to draw the reader downward.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project5dProps {
  className?: string;
}

const Project5d = ({ className }: Project5dProps) => {
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
      <div className="container max-w-4xl">
        <motion.header
          className="pb-16 md:pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-foreground"></div>
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                NEXUS STUDIOS
              </span>
            </div>
            <h1 className="text-4xl font-normal tracking-tight text-foreground md:text-5xl">
              Organic Resonance
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              A contemporary exploration of nature's abstract forms through
              sculptural artistry. This piece challenges the boundaries between
              natural organic structures and human interpretation.
            </p>
          </motion.div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[4/3] overflow-hidden bg-muted/30"
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
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">
                Museum
              </p>
              <p className="text-sm text-foreground">MOMA NYC</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">
                Year
              </p>
              <p className="text-sm text-foreground">2024</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">
                Medium
              </p>
              <p className="text-sm text-foreground">Sculpture</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">
                Status
              </p>
              <p className="text-sm text-foreground">On Display</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative aspect-[3/2] overflow-hidden bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
              alt="Modern Terrarium Display"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-xl font-medium text-foreground">
              Artistic Vision
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              This sculptural piece emerges from our deep exploration of
              nature's inherent abstract qualities. Through careful observation
              and artistic interpretation, we've captured the essence of organic
              growth patterns, bark textures, and the interplay between light
              and shadow that defines natural forms.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative aspect-[16/9] overflow-hidden bg-muted/30"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/5" />
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <Button
              variant="default"
              className="w-full bg-foreground py-6 font-medium text-background hover:bg-foreground/90"
            >
              VIEW FULL EXHIBITION
            </Button>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5d };
```
