# Project 10

## Metadata
- **Category**: Project
- **Objective**: Provide a highly stylized, photography or portfolio project case study.
- **Use Case**: Agency portfolios, photographer sites, product case studies where visual storytelling is key.
- **Visual Style**: Structured, numbered text sections with ample white space, combined with an infinite scrolling carousel/marquee at the bottom for additional visuals.
- **Interactivity**: Staggered entry animations utilizing Framer Motion `Variants`, and an infinite linear marquee for the bottom gallery.

## Description
Project 10 is an editorial-style project showcase. It breaks down the narrative into clear, numbered sections (e.g., Inspiration, Challenges, Reward) and finishes strong with a dynamic, continuously scrolling gallery of related imagery.

## Source Code

```tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project10Props {
  className?: string;
}

const Project10 = ({ className }: Project10Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
      alt: "Creative design mockup",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      alt: "Brand identity showcase",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      alt: "Product photography",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
      alt: "Digital interface design",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Marketing campaign visual",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={cn("py-32", className)}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
          variants={itemVariants}
        >
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Ubran Photography
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Capturing the beauty of the urban world through the lens, from the
              streets to the buildings.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end lg:gap-6">
            <Button
              variant="outline"
              size="sm"
              className="w-fit gap-2 border-muted-foreground/20 bg-transparent hover:bg-muted/10"
            >
              View Portfolio <ArrowUpRight className="h-4 w-4" />
            </Button>

            <div className="flex gap-8 sm:gap-12">
              <div className="text-sm">
                <p className="mb-1 text-muted-foreground">Category</p>
                <p className="font-medium">Architecture</p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-muted-foreground">Medium</p>
                <p className="font-medium">Photography</p>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.div
          className="mb-16 overflow-hidden rounded-2xl bg-muted/20"
          variants={imageVariants}
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg"
            alt="Arcane Hero Project"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* Content Sections */}
        <div className="mb-20 space-y-12 lg:space-y-16">
          <motion.section variants={itemVariants}>
            <div className="grid items-start gap-8 border-b border-border pb-8 lg:grid-cols-2 lg:gap-12 lg:pb-12">
              <div>
                <span className="text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                  01.
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Inspiration.
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Nature photography is inspired by the ever-changing
                  landscapes, vibrant flora, and diverse wildlife that surround
                  us. Each moment in nature is unique, offering endless
                  opportunities to capture its essence.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  From the golden light of sunrise to the tranquil calm of dusk,
                  every photograph tells a story of the natural world.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="grid items-start gap-8 border-b border-border pb-8 lg:grid-cols-2 lg:gap-12 lg:pb-12">
              <div>
                <span className="text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                  02.
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Challenges.
                </h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Capturing the perfect shot in nature often means waiting
                  patiently for the right light, weather, or animal behavior. It
                  requires adaptability, respect for the environment, and a keen
                  eye for detail.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  The unpredictability of the outdoors makes every photo a
                  rewarding challenge.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="grid items-start gap-8 border-b border-border pb-8 lg:grid-cols-2 lg:gap-12 lg:pb-12">
              <div>
                <span className="text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                  03.
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Reward.</h2>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  The reward of nature photography lies in sharing the beauty of
                  our planet with others. Each image can inspire appreciation,
                  conservation, and a deeper connection to the world around us.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Through the lens, we discover the extraordinary in the
                  ordinary, and the magic in the mundane.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.section className="space-y-4" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {images.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl bg-muted/20"
                variants={imageVariants}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80 lg:h-96"
                />
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -400, -800, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {images.slice(2, 5).map((image, index) => (
                <motion.div
                  key={index}
                  className="w-80 flex-shrink-0 overflow-hidden rounded-xl bg-muted/20 sm:w-96"
                  variants={imageVariants}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-48 w-full object-cover sm:h-64"
                  />
                </motion.div>
              ))}

              {images.slice(2, 5).map((image, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="w-80 flex-shrink-0 overflow-hidden rounded-xl bg-muted/20 sm:w-96"
                  variants={imageVariants}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-48 w-full object-cover sm:h-64"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </section>
  );
};

export { Project10 };
```
