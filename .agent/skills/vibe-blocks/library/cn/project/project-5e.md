# Project 5e

## Metadata
- **Category**: Project
- **Objective**: Construct a highly visual, masonry-inspired gallery layout with elegant hover-reveal text.
- **Use Case**: Photography portfolios, generative art collections, or any project where visual variety and grouped imagery is the primary focus.
- **Visual Style**: Completely centered header with a subtle horizontal rule accent. The main body is a complex, asymmetric grid (`md:col-span-2 lg:col-span-1`, etc.) simulating a masonry layout. Images feature a dark gradient overlay on hover that slides up to reveal title and description.
- **Interactivity**: Staggered load animations via Framer Motion. Smooth CSS transforms on hover (`group-hover:translate-y-0`) that bring up metadata from the bottom edge of the image bounds.

## Description
Project 5e is an immersive, grid-based gallery designed for high visual output. The layout intelligently spans specific images across multiple columns to break up the monotonous square grid, giving it an editorial masonry feel. Because the layout relies so heavily on images, the metadata is hidden under a sleek hover-reveal interaction, keeping the default state as clean as possible.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project5eProps {
  className?: string;
}

const Project5e = ({ className }: Project5eProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg",
      alt: "Abstract Organic Form",
      title: "Abstract Organic Form",
      description: "Natural patterns in contemporary art",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Abstract Fluid Composition.jpg",
      alt: "Abstract Textured Art",
      title: "Abstract Textured Art",
      description: "Textural exploration of natural forms",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Futuristic Tree Artwork.jpg",
      alt: "Futuristic Tree Artwork",
      title: "Futuristic Tree Artwork",
      description: "Modern interpretation of organic growth",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Minimalist Art Blocks.jpg",
      alt: "Minimalist Art Blocks",
      title: "Minimalist Art Blocks",
      description: "Geometric abstraction meets nature",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg",
      alt: "Modern Terrarium Design",
      title: "Modern Terrarium Design",
      description: "Contemporary ecosystem design",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg",
      alt: "Modern Terrarium Display",
      title: "Modern Terrarium Display",
      description: "Installation and exhibition space",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Moss-Covered Log with Yellow Lichen.jpg",
      alt: "Moss-Covered Log with Yellow Lichen",
      title: "Moss-Covered Log with Yellow Lichen",
      description: "Natural textures and organic patterns",
    },
  ];

  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="container">
        <motion.header
          className="pb-16 md:pb-24"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-24 bg-foreground"></div>
                <span className="text-sm font-medium tracking-wider text-muted-foreground">
                  NEXUS STUDIOS
                </span>
                <div className="h-px w-24 bg-foreground"></div>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Organic Resonance
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                A comprehensive exploration of nature's abstract forms through
                contemporary sculptural artistry. This collection challenges the
                boundaries between natural organic structures and human
                interpretation.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="outline" size="lg">
                VISIT EXHIBITION
              </Button>
              <div className="text-sm text-muted-foreground">
                MOMA NYC • 2024 • Contemporary Sculpture
              </div>
            </div>
          </motion.div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Main Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-lg bg-muted/20 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                } ${index === 3 ? "lg:col-span-2" : ""} ${
                  index === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-all duration-300 group-hover:bg-background/10" />
                </div>

                <div className="absolute right-0 bottom-0 left-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent p-6 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description Section */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto max-w-4xl space-y-8 text-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Artistic Vision
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This collection emerges from our deep exploration of nature's
                inherent abstract qualities. Through careful observation and
                artistic interpretation, we've captured the essence of organic
                growth patterns, bark textures, and the interplay between light
                and shadow that defines natural forms.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Each piece invites viewers to reconsider their relationship with
                the natural world through a contemporary lens, creating a
                dialogue between the viewer and the raw beauty of environmental
                textures and forms. The work spans from minimalist
                interpretations to complex organic abstractions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">7</div>
                <div className="text-sm text-muted-foreground">ARTWORKS</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">2024</div>
                <div className="text-sm text-muted-foreground">
                  EXHIBITION YEAR
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">MOMA</div>
                <div className="text-sm text-muted-foreground">
                  NEW YORK CITY
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5e };
```
