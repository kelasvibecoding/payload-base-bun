# Project 5b

## Metadata
- **Category**: Project
- **Objective**: Create a highly technical, table-data enriched project overview with cinematic ultra-wide imagery.
- **Use Case**: Industrial design show-offs, massive architectural projects, furniture design, or deep-dive physical product case studies.
- **Visual Style**: Characterized by a massive ultra-wide hero format (`aspect-[21/9]`), broken split-word heading (`text-8xl`), and a rigid technical dimension HTML table (`table border-t border-b`) near the footer. 
- **Interactivity**: Sequenced, staggered framer motion entrance across the entire document layout.

## Description
Project 5b mixes artistic grandeur with technical rigidity. The hero starts with massive, line-broken typography, immediately followed by a breathtaking 21:9 ultra-wide image. However, as the user scrolls, the layout tightens, eventually culminating in a raw HTML table describing the physical materials and dimensions of the project—perfect for physical product and architectural showcases.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project5bProps {
  className?: string;
}

const Project5b = ({ className }: Project5bProps) => {
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
          className="pb-16 md:pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-foreground"></div>
                <span className="text-sm font-medium tracking-wider text-muted-foreground">
                  NEXUS STUDIOS
                </span>
              </div>
              <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
                Organic
                <br />
                Resonance
              </h1>
            </motion.div>
            <div className="flex justify-start pt-16">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Exhibition Details
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    MOMA NYC • 2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contemporary Sculpture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8 md:space-y-20"
        >
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg bg-muted/30">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                alt="Organic Resonance - Main sculpture view"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16"
          >
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Detail view of the sculpture"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Detail view of the sculpture"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-foreground"></div>
                  <span className="text-sm font-medium tracking-wider text-muted-foreground">
                    CONCEPT
                  </span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Artistic Vision
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This sculptural piece emerges from our deep exploration of
                  nature's inherent abstract qualities. Through careful
                  observation and artistic interpretation, we've captured the
                  essence of organic growth patterns.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The work invites viewers to reconsider their relationship with
                  the natural world through a contemporary lens, exploring bark
                  textures and the interplay between light and shadow.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Materials & Process
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 rounded-full bg-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        Reclaimed wood and organic resins
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 rounded-full bg-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        Hand-carved details with natural patina
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 rounded-full bg-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        Sustainable terrarium ecosystem
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Dimensions
                  </h3>
                  <div className="overflow-hidden">
                    <table className="w-full border-t border-b border-muted-foreground/20">
                      <tbody>
                        <tr className="border-b border-muted-foreground/10">
                          <td className="bg-muted/5 px-4 py-3 text-sm font-medium text-muted-foreground">
                            Height
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            180 cm
                          </td>
                        </tr>
                        <tr className="border-b border-muted-foreground/10">
                          <td className="bg-muted/5 px-4 py-3 text-sm font-medium text-muted-foreground">
                            Width
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            95 cm
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-muted/5 px-4 py-3 text-sm font-medium text-muted-foreground">
                            Depth
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            45 cm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5b };
```
