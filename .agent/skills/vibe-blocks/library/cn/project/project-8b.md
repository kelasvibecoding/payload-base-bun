# Project 8b

## Metadata
- **Category**: Project
- **Objective**: Consolidate hero imagery and project narrative into a single side-by-side layout.
- **Use Case**: Shorter project studies, feature callouts, or dense editorial layouts where vertical scrolling should be minimized.
- **Visual Style**: Below the massive, centered header, the layout switches to a strict `lg:grid-cols-2` arrangement. The image sits on the left at an `aspect-[4/5]`, while the detailed narrative and credits sit tightly constrained on the right.
- **Interactivity**: Staggered structural animations powered by Framer Motion. The dual-column block enters together, creating a unified reveal of the project's visual and textual context simultaneously.

## Description
Project 8b condenses the flow of the page. Instead of stacking Image -> Content vertically, it places them side-by-side. This format is incredibly efficient for reading while glancing at the referenced visual material, making it ideal for art critiques, detailed product analysis, or any case study where the text demands immediate visual confirmation.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8bProps {
  className?: string;
}

const Project8b = ({ className }: Project8bProps) => {
  return (
    <section className={cn("py-32", className)}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-16 text-center">
          <motion.h1
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TYRELL FASHION
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Capturing a neo-noir future aesthetic.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
                alt="Creative portrait with dynamic lighting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Creative
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between">
                <p className="text-2xl text-muted-foreground">2024</p>
                <h4 className="text-sm font-semibold text-foreground">
                  SF Bay Area
                </h4>
              </div>

              <p className="text-base leading-relaxed text-foreground">
                Exploring the intersection of technology and couture, this neo
                future collection pushes the boundaries of traditional fashion
                photography. Holographic textures, metallic fabrics, and
                geometric patterns create a cyberpunk aesthetic that reflects
                our digital age. The shoot incorporates LED lighting and
                reflective surfaces to enhance the futuristic narrative,
                transforming each garment into a statement of tomorrow's
                elegance.
              </p>

              <p className="text-base leading-relaxed text-foreground">
                Set against minimalist backdrops with strategic neon accents,
                the photography captures the essence of neo future fashion -
                where sustainability meets innovation, and where each piece
                tells a story of technological advancement wrapped in artistic
                expression. The result is a visual manifesto that challenges
                conventional beauty standards while celebrating the evolution of
                style.
              </p>

              <div className="space-y-1 text-base text-muted-foreground">
                <h5 className="font-medium text-foreground">Credits</h5>
                <p>Creative Director: Maya Chen</p>
                <p>Fashion Stylist: Alex Rivera</p>
                <p>Makeup Artist: Jordan Kim</p>
                <p>Hair Stylist: Taylor Brooks</p>
                <p>Set Designer: Sam Patel</p>
                <p>Retoucher: Casey Wong</p>
                <p>Lighting Assistant: Riley Martinez</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Project8b };
```
