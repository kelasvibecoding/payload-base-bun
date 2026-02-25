# Project 8

## Metadata
- **Category**: Project
- **Objective**: Create a fashion or art-centric case study opener emphasizing sleek typography and large imagery.
- **Use Case**: Fashion lookbooks, creative agency highlight reels, or high-end artistic showcases.
- **Visual Style**: Completely centered header, followed by a generously padded `aspect-[16/10]` hero image constrained within the container. The description below is split asymmetrically (`md:grid-cols-2`), with the content pushed entirely to the right column.
- **Interactivity**: Fluid `framer-motion` entrance animations scale the image up slightly while fading text elements in with elegant delays.

## Description
Project 8 provides a highly stylized, magazine-like intro to a project. By keeping the hero image inside the container bounds, it maintains a formal, padded look characteristic of print layouts. The heavy use of grid offsetting in the details section (leaving the left column mostly empty save for a section title) creates massive negative space that pulls the reader's eye entirely to the narrative text and credits.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8Props {
  className?: string;
}

const Project8 = ({ className }: Project8Props) => {
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
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-8xl"
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
          className="relative mb-16 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
              alt="Creative portrait with dynamic lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Creative</h3>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-2xl text-muted-foreground">2025</p>
              <h4 className="text-sm font-semibold text-foreground">
                SF Bay Area
              </h4>
            </div>

            {/* Content */}

            <p className="text-base leading-relaxed text-foreground">
              Exploring the intersection of technology and couture, this neo
              future collection pushes the boundaries of traditional fashion
              photography. Holographic textures, metallic fabrics, and geometric
              patterns create a cyberpunk aesthetic that reflects our digital
              age. The shoot incorporates LED lighting and reflective surfaces
              to enhance the futuristic narrative, transforming each garment
              into a statement of tomorrow's elegance.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              Set against minimalist backdrops with strategic neon accents, the
              photography captures the essence of neo future fashion - where
              sustainability meets innovation, and where each piece tells a
              story of technological advancement wrapped in artistic expression.
              The result is a visual manifesto that challenges conventional
              beauty standards while celebrating the evolution of style.
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Project8 };
```
