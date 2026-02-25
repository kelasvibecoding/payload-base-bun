# Project 8e

## Metadata
- **Category**: Project
- **Objective**: Develop an immersive, full-height landing page style layout for project introductions.
- **Use Case**: Homepage featured projects, capstone presentation pieces, or highly curated high-end fashion/art cases.
- **Visual Style**: Relies on a massive `min-h-screen` background image with a `bg-black/40` overlay to ensure crisp typography contrast. Below the fold, the layout drastically shifts to a rigid, clean `bg-white` structural presentation.
- **Interactivity**: Sequenced Framer Motion entrances. The text elegantly reveals itself atop the massive background image before the user scrolls down into the standard layout.

## Description
Project 8e operates almost like a mini-landing page for a specified project. The overarching design strategy is massive impact upon load: the user is greeted with a full-viewport image and perfectly centered, high-contrast typography. Only after scrolling past this initial visual statement does the user arrive at the structured analytical text block, mimicking the experience of opening a premium coffee table book.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8eProps {
  className?: string;
}

const Project8e = ({ className }: Project8eProps) => {
  return (
    <section className={cn("py-32", className)}>
      {/* Hero section with background image */}
      <div className="relative min-h-screen">
        {/* Fullwidth Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg')",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-screen items-center justify-center py-32">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h1
                className="mb-4 text-3xl font-bold tracking-tight text-white md:text-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                TYRELL FASHION
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Capturing a neo-noir future aesthetic.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content section on white background */}
      <div className="bg-white py-32">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
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

              {/* Content */}

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
      </div>
    </section>
  );
};

export { Project8e };
```
