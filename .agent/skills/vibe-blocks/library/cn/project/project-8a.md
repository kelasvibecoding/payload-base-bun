# Project 8a

## Metadata
- **Category**: Project
- **Objective**: Implement a full-bleed cinematic hero variant of the Project 8 layout.
- **Use Case**: Photography lookbooks, digital art exhibitions, or projects where the primary image demands absolute edge-to-edge screen presence.
- **Visual Style**: The primary hero image is deliberately rendered OUTSIDE of the standard `.container`, allowing it to stretch completely full-width. It uses an `aspect-[16/9]` ratio for a true widescreen cinematic look.
- **Interactivity**: Fluid `framer-motion` entrance animations that sequence the header, then the full-bleed image, and finally the content grid below.

## Description
Project 8a takes the sophisticated layout of Project 8 and makes it significantly more aggressive by pushing the hero image to the very edges of the browser window. This "full-bleed" treatment instantly changes the vibe from a structured editorial piece into an immersive, cinematic experience, while retaining the stark negative-space balancing of the text content below.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8aProps {
  className?: string;
}

const Project8a = ({ className }: Project8aProps) => {
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
      </motion.div>

      <motion.div
        className="relative mb-16 w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
            alt="Creative portrait with dynamic lighting"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Creative</h3>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-2xl text-muted-foreground">2024</p>
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
        </div>
      </motion.div>
    </section>
  );
};

export { Project8a };
```
