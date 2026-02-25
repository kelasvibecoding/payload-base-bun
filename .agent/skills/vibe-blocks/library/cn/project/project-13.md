# Project 13

## Metadata
- **Category**: Project
- **Objective**: Provide an immersive, full-screen parallax hero case study intro with an in-depth editorial layout.
- **Use Case**: Deep dive case studies, digital agency portfolios, or product features where a cinematic, full-bleed start is essential.
- **Visual Style**: Uses a large framed image with severe borders (`md:border-[50px] md:border-white`), scrolling transforms (parallax), typography layering, and a mix of full-bleed and grid layouts for subsequent content.
- **Interactivity**: Deeply integrated with `framer-motion` for parallax effects via `useScroll` and `useTransform` (`heroY`, `heroScale`), alongside `whileInView` visibility triggers for staggered entry.

## Description
Project 13 is a high-impact, editorial-style case study layout. It begins with a framed, parallax-driven hero image and transitions into a beautifully structured, staggered content presentation. The careful use of typography, whitespace, and scrolling effects makes it ideal for showcasing creative work, photography, or high-end digital products in a cinematic way.

## Source Code

```tsx
"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const images = {
  hero: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
};

const gridImages = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
    alt: "Chromatic exploration 1",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
    alt: "Chromatic exploration 2",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
    alt: "Chromatic exploration 3",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
    alt: "Chromatic exploration 4",
  },
];

interface Project13Props {
  className?: string;
}

const Project13 = ({ className }: Project13Props) => {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className={cn("min-h-screen", className)}>
      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative flex h-[60vh] items-center justify-center md:h-[70vh] md:border-[50px] md:border-white lg:h-[100vh]"
          style={{ y: heroY, scale: heroScale }}
        >
          <motion.img
            src={images.hero}
            alt="Luminous Depths Hero"
            className="absolute inset-0 h-full w-full object-cover"
            variants={imageVariants}
          />
          <div className="absolute inset-0 bg-black/30" />
          <motion.h1
            className="relative z-10 px-4 text-center text-4xl font-semibold text-white md:text-6xl lg:text-7xl xl:text-8xl"
            variants={titleVariants}
          >
            Luminous Depths
          </motion.h1>
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            className="mb-12 max-w-7xl border-b pb-7 text-lg leading-relaxed md:mb-16 md:text-xl lg:mb-20 lg:text-2xl"
            variants={itemVariants}
          >
            An immersive journey through the depths of color psychology, where
            each hue tells a story of emotion, memory, and human connection
            through carefully orchestrated visual narratives.
          </motion.p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-3 lg:gap-16">
            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                Project
              </h3>
              <p className="text-base md:text-lg">Luminous Depths</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                Studio
              </h3>
              <p className="text-base md:text-lg">Prism Collective</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                Year
              </h3>
              <p className="text-base md:text-lg">2025</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                Role
              </h3>
              <p className="mb-4 text-base md:text-lg">Creative Director</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                Tools
              </h3>
              <p className="text-base md:text-lg">
                Photoshop, Illustrator, Figma
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="pb-12 md:pb-16 lg:pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {gridImages.map((image, index) => (
            <motion.div
              key={index}
              className="md:col-span-1 lg:col-span-1"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-5 md:px-8 md:py-5 md:pb-22 lg:px-16 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-sm tracking-wider text-muted-foreground uppercase">
                Concept
              </h3>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-2xl font-medium md:mb-8 md:text-3xl lg:text-4xl">
                The Language of Light
              </h2>

              <div className="space-y-4 leading-relaxed font-medium text-muted-foreground md:space-y-6">
                <p>
                  This exploration delves into the profound relationship between
                  color, emotion, and human perception, creating a visual
                  language that speaks directly to the subconscious mind.
                </p>

                <p>
                  Through meticulous attention to chromatic harmony and
                  contrast, each composition becomes a meditation on the power
                  of color to evoke memory, trigger emotion, and create lasting
                  impressions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export { Project13 };
```
