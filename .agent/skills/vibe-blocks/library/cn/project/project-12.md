# Project 12

## Metadata
- **Category**: Project
- **Objective**: Provide a minimalist, editorial-style case study intro with a focus on immersive storytelling.
- **Use Case**: Editorial pieces, photo essays, case study intros, or documentary web experiences.
- **Visual Style**: Clean typography with a "Back" button, using a large focal image spanning the width of the container. Typography relies on a multi-line heading breakdown for dramatic effect.
- **Interactivity**: Mask reveal animations for the text, and staggered fade-ups for supporting details and imagery, executed seamlessly via Framer Motion.

## Description
Project 12 is a refined storytelling block. It introduces a case study or article with precision and elegance. The mask reveal effect combined with the staggered entrance makes the piece feel like an interaction in a high-end digital publication.

## Source Code

```tsx
"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const headingLines = [
  "Embracing the Wild",
  "A Visual Storytelling Experience",
  "Through Nature",
];

const maskReveal = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface Project12Props {
  className?: string;
}

const Project12 = ({ className }: Project12Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex-1 lg:max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <Button
                variant="secondary"
                className="mb-6 h-auto p-1 font-normal text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </motion.div>

            <div className="space-y-2 overflow-hidden">
              {headingLines.map((line, i) => (
                <motion.h1
                  key={i}
                  className="text-3xl leading-tight font-bold text-foreground md:text-4xl lg:text-5xl"
                  initial="hidden"
                  animate="visible"
                  variants={maskReveal}
                  transition={{
                    delay: i * 0.3,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                >
                  {line}
                </motion.h1>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-1 flex-shrink-0 lg:w-80"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                This project explores the serene beauty of forests, rivers, and
                mountains through immersive photography and design. It's a
                celebration of Earth’s untouched wonders — aiming to reconnect
                people with the natural world.
              </p>

              <div className="space-y-4">
                {[
                  ["Year", "2025"],
                  ["Project", "Nature Documentary Web Experience"],
                  ["Photographer", "Lummi Trails"],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    transition={{
                      delay: 0.9 + i * 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="mb-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="font-medium text-foreground">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40, scale: 1.02 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg"
            alt="Nature Landscape"
            className="w-full rounded-xl border border-border object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export { Project12 };
```
