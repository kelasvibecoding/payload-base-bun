# Project 8d

## Metadata
- **Category**: Project
- **Objective**: Craft an expansive, ultra-widescreen case study layout leveraging heavy grid asymmetry.
- **Use Case**: Tech product launches, cinematic portfolios, or any project requiring a massively wide visual anchor.
- **Visual Style**: Defined by an ultra-wide `aspect-[2/1]` hero image inside a `max-w-5xl` container. The content structural grid is heavily skewed (`md:col-span-1` vs `md:col-span-3`), creating a massive text block offset by a slender column of metadata.
- **Interactivity**: Staggered load sequences via Framer Motion, specifically delaying the massive image scale-in (`duration: 1, delay: 0.6`) for dramatic effect.

## Description
Project 8d pushes the boundaries of the container. While maintaining a `max-w-5xl` constraint, the `aspect-[2/1]` hero image ensures the visual feels overwhelmingly cinematic and expansive. Below the image, the layout breaks into an extreme 1/4 and 3/4 split, isolating the core metadata on the left to allow the project narrative to flow unimpeded on the right. A dedicated credits section anchors the component at the bottom.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8dProps {
  className?: string;
}

const Project8d = ({ className }: Project8dProps) => {
  return (
    <section className={cn("py-32", className)}>
      <motion.div
        className="container max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-20 text-center">
          <motion.h1
            className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-8xl"
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
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
              alt="Creative portrait with dynamic lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Creative
              </h3>
              <p className="text-2xl text-muted-foreground">2024</p>
              <h4 className="mt-1 text-sm font-semibold text-foreground">
                SF Bay Area
              </h4>
            </div>

            <div className="space-y-6 md:col-span-3">
              <p className="text-lg leading-relaxed text-foreground">
                Exploring the intersection of technology and couture, this neo
                future collection pushes the boundaries of traditional fashion
                photography. Holographic textures, metallic fabrics, and
                geometric patterns create a cyberpunk aesthetic that reflects
                our digital age. The shoot incorporates LED lighting and
                reflective surfaces to enhance the futuristic narrative,
                transforming each garment into a statement of tomorrow's
                elegance.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                Set against minimalist backdrops with strategic neon accents,
                the photography captures the essence of neo future fashion -
                where sustainability meets innovation, and where each piece
                tells a story of technological advancement wrapped in artistic
                expression. The result is a visual manifesto that challenges
                conventional beauty standards while celebrating the evolution of
                style.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="space-y-2 text-base text-muted-foreground">
              <h5 className="mb-4 font-medium text-foreground">Credits</h5>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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

export { Project8d };
```
