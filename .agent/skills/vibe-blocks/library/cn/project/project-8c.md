# Project 8c

## Metadata
- **Category**: Project
- **Objective**: Create an intimate, tightly constrained project presentation emphasizing focus and readability.
- **Use Case**: Independent creator portfolios, focused case studies, or narrow-column blog-style project overviews.
- **Visual Style**: Entirely wrapped in a `max-w-4xl` container, restricting the width of all elements significantly compared to standard modern web design. The hero image is set to a classic photographic `aspect-[3/2]`, and the content below splits strictly into narrative (left) and metadata/credits (right).
- **Interactivity**: Sequenced, soft entrances via Framer Motion that guide the user's eye from the central title down through the focused content column.

## Description
Project 8c intentionally narrows the reading and viewing experience. By forcing the content into a `max-w-4xl` wrapper, it mimics the feeling of reading a high-end printed magazine column or an artist's personal dossier. This constraint forces the layout beneath the image to be highly efficient, neatly categorizing the dense descriptive paragraphs against a stark list of project credits.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Project8cProps {
  className?: string;
}

const Project8c = ({ className }: Project8cProps) => {
  return (
    <section className={cn("py-32", className)}>
      <motion.div
        className="container max-w-4xl"
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
          className="relative mx-auto mb-12 max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
              alt="Creative portrait with dynamic lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Creative
              </h3>
            </div>
            <div className="text-right">
              <p className="text-2xl text-muted-foreground">2024</p>
              <h4 className="text-sm font-semibold text-foreground">
                SF Bay Area
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-foreground">
                Exploring the intersection of technology and couture, this neo
                future collection pushes the boundaries of traditional fashion
                photography. Holographic textures, metallic fabrics, and
                geometric patterns create a cyberpunk aesthetic that reflects
                our digital age.
              </p>

              <p className="text-base leading-relaxed text-foreground">
                Set against minimalist backdrops with strategic neon accents,
                the photography captures the essence of neo future fashion -
                where sustainability meets innovation, and where each piece
                tells a story of technological advancement wrapped in artistic
                expression.
              </p>
            </div>

            <div className="space-y-1 text-base text-muted-foreground">
              <h5 className="mb-3 font-medium text-foreground">Credits</h5>
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

export { Project8c };
```
