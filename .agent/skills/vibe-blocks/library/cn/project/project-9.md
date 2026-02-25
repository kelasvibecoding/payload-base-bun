# Project 9

## Metadata
- **Category**: Project
- **Objective**: Craft an immersive, sticky-side navigational gallery piece for large photo sets.
- **Use Case**: Deep-dive photography collections, multi-tier case studies, or continuous-scroll brand narratives.
- **Visual Style**: Split 50/50 down the middle. The left pane functions as a sticky control center (`lg:sticky lg:h-screen lg:w-1/2`) featuring breadcrumbs, large title, and beautifully separated meta blocks. The right pane is a scrollable canvas featuring a featured image (`max-h-[30rem]`) cascading into a 2-column image grid.
- **Interactivity**: Complex, multi-stage `framer-motion` entrance animations. The left pane slides in laterally, while the right gallery images fade up sequentially. Hover scales (`hover:scale-105`) are applied to every image.

## Description
Project 9 is the ultimate dual-pane gallery view. It solves the problem of viewers losing context during long photo scrolls by aggressively pinning the project title, metadata, and description to the left side of the screen. As the user scrubs through the right-hand image waterfall, the foundational context remains perfectly visible. The use of Shadcn UI `Separator` components gives the left pane a highly refined, dashboard-like polish.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

interface Project9Props {
  className?: string;
}

const Project9 = ({ className }: Project9Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      alt: "Motion blur street photography",
    },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg", alt: "Natural landscape portrait" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg", alt: "Misty mountain valley" },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Contemplative lakeside moment",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      alt: "Motion blur street photography",
    },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg", alt: "Natural landscape portrait" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg", alt: "Misty mountain valley" },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
      alt: "Contemplative lakeside moment",
    },
  ];

  return (
    <section className={cn("py-20", className)}>
      <div className="container flex flex-col gap-8 lg:flex-row">
        <motion.div
          className="top-0 flex h-auto w-full flex-col justify-start p-6 sm:p-8 lg:sticky lg:h-screen lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="mb-12">
            <div className="flex flex-wrap items-center space-x-2 text-sm text-muted-foreground uppercase">
              <span className="cursor-pointer transition-colors hover:text-foreground">
                Portfolio
              </span>
              <span>/</span>
              <span className="cursor-pointer transition-colors hover:text-foreground">
                Photography
              </span>
              <span>/</span>
              <span className="text-foreground">Monochrome Stories</span>
            </div>
          </nav>

          <motion.h1
            className="mb-12 text-4xl leading-tight font-light sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Monochrome Stories
          </motion.h1>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium">Captured</h3>
                <span className="text-muted-foreground">Feb 2, 2025</span>
              </div>
              <Separator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium">Location</h3>
                <span className="text-muted-foreground">
                  Northern Hemisphere
                </span>
              </div>
              <Separator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-4">
                <h3 className="mb-4 text-lg font-medium">Project Overview</h3>
                <p className="leading-relaxed text-muted-foreground">
                  A journey through silent city mornings, fog-laced valleys, and
                  fleeting moments of solitude. Each frame captures the poetry
                  of light and shadow, revealing stories hidden in the grayscale
                  tapestry of everyday life.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <motion.div
            className="p-6 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg"
                className="max-h-[30rem] w-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Featured project"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Project9 };
```
