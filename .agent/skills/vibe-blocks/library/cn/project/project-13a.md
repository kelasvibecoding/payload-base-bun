# Project 13a

## Metadata
- **Category**: Project
- **Objective**: Provide an alternative full-screen, immersive case study layout optimized for dark-mode or cinematic visuals.
- **Use Case**: Deep dive case studies, digital agency portfolios, or architectural showcases where the hero image should occupy the full screen without framed borders.
- **Visual Style**: Features a full-bleed hero image overlayed with large, stacked typography and a gradient. Subsequent sections maintain an elegant, spacious structure that puts emphasis on large gallery images without constrained padding.
- **Interactivity**: Fluid scroll-linked parallax animations for both the hero image (`heroY`) and hero text (`textY`), combined with scroll-triggered fade-ups on the content.

## Description
Project 13a offers a full-bleed variation of the immersive case study pattern. By removing the stylistic thick border in favor of edge-to-edge imagery and utilizing a stacked, highly dramatic typographic lockup, it creates a powerful first impression ideal for strong, visually rich projects.

## Source Code

```tsx
"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const images = {
  hero: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
};

const galleryImages = [
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

interface Project13aProps {
  className?: string;
}

const Project13a = ({ className }: Project13aProps) => {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  return (
    <section className={cn("min-h-screen", className)}>
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative flex h-screen items-center justify-center"
          style={{ y: heroY }}
        >
          <motion.img
            src={images.hero}
            alt="Luminous Depths Hero"
            className="absolute inset-0 h-full w-full object-cover"
            variants={imageVariants}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          <motion.div
            className="relative z-10 px-4 text-center"
            style={{ y: textY }}
          >
            <motion.h1
              className="mb-6 text-5xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl"
              variants={titleVariants}
            >
              Luminous
              <br />
              Depths
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl"
              variants={itemVariants}
            >
              A chromatic journey through emotion and perception
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Project Info Section */}
      <motion.section
        className="-mt-1 px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20"
            variants={itemVariants}
          >
            <div>
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed md:text-xl">
                An immersive exploration of color psychology and human emotion,
                crafted through deliberate visual storytelling and chromatic
                harmony.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                  Studio
                </h3>
                <p className="text-lg md:text-xl">Prism Collective</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                  Year & Role
                </h3>
                <p className="text-lg md:text-xl">2025 — Creative Director</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm tracking-wider text-muted-foreground uppercase">
                  Tools
                </h3>
                <p className="text-lg md:text-xl">
                  Photoshop, Illustrator, Figma
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Full-width Images */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative aspect-auto overflow-hidden lg:aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Concept Section */}
      <motion.section
        className="px-4 py-5 md:px-8 md:py-5 lg:px-16 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl py-24">
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

export { Project13a };
```
