# Gallery 20

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a creative, "Draggable Fan" gallery with randomized rotations and interactive physics.
- **Use Case**: Creative portfolios, vacation memory walls, or a "scattered photo" artistic hero section.
- **Visual Style**: "Scattered Fan" aesthetic. Features a group of landscape photos arranged in a "fanned out" pattern with randomized rotations (-19 to +12 degrees) and offsets. Centered around a higher-z-index focal photo. Matches an organic, physical photo-on-a-table look.
- **Interactivity**: High-engagement physics. Items are `drag`-enabled using Framer Motion with `dragSnapToOrigin`. Features massive `whileHover` enhancements (1.15 scale, rotation reset, z-index sweep). Includes a "Explore the world" CTA button elite professional world-wide.

## Source Code

### `gallery20.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  rotation: number;
  translateY?: number;
  translateX?: number;
  zIndex?: number;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape2.jpeg",
    rotation: -25,
    translateX: -350,
    translateY: 40,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape1.jpeg",
    rotation: -12,
    translateY: 10,
    translateX: -180,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape3.jpeg",
    rotation: 0,
    translateY: -50,
    zIndex: 10,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape5.jpeg",
    rotation: 15,
    translateX: 180,
    translateY: 10,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape4.jpeg",
    rotation: 28,
    translateX: 350,
    translateY: 40,
  },
];

interface Gallery20Props {
  className?: string;
}

const Gallery20 = ({ className }: Gallery20Props) => {
  return (
    <section className={cn("py-24 md:py-48 bg-background overflow-hidden border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.4,
          }}
          className="relative flex h-[500px] items-center justify-center mb-32"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              initial={{
                rotate: image.rotation,
                translateY: image.translateY || 0,
                translateX: 0,
                scale: 0.5,
                zIndex: image.zIndex || "auto",
              }}
              animate={{
                rotate: image.rotation,
                translateY: image.translateY || 0,
                translateX: image.translateX || 0,
                scale: index === 2 ? 1.2 : 0.9,
                zIndex: image.zIndex || "auto",
              }}
              drag
              dragSnapToOrigin
              whileHover={{
                scale: 1.3,
                rotate: 0,
                zIndex: 999,
                translateY: -100,
              }}
              dragElastic={0.2}
              transition={{
                duration: 1.2,
                bounce: 0.3,
                type: "spring",
                delay: 0.2 + (index * 0.1),
                translateY: { duration: 0.3 },
                rotate: { duration: 0.3 },
                scale: { duration: 0.3 },
                zIndex: { duration: 0.3 },
              }}
              key={index}
              className="absolute w-[280px] md:w-[420px] aspect-[16/10] cursor-grab active:cursor-grabbing overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-4 border-white dark:border-muted transition-all ease-out"
            >
              <img
                src={image.src}
                className="pointer-events-none size-full object-cover transition-opacity duration-1000 grayscale-30 hover:grayscale-0"
                alt={`Elite Fan Image ${index + 1}`}
              />
               <div className="absolute inset-x-0 bottom-0 p-8 flex justify-end">
                    <div className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-black uppercase tracking-widest">{index + 1}</span>
                    </div>
               </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center justify-center text-center space-y-12"
        >
          <div className="space-y-6">
                <h3 className="max-w-xl text-4xl font-black uppercase tracking-tighter italic leading-tight lg:text-6xl">
                    Explore the <span className="text-primary not-italic">Elite World</span> elite.
                </h3>
                <div className="h-0.5 w-24 bg-primary/20 mx-auto" />
                <p className="max-w-md mx-auto text-xl font-medium italic text-muted-foreground border-l-2 border-primary/10 px-8">
                    Discover high-status world-wide fragments world-wide professional elite high-status.
                </p>
          </div>
          <Button className="group h-16 px-10 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-110 active:scale-95">
            Explore world-wide elite
            <ArrowRight className="ml-4 size-5 -rotate-45 transition-all ease-out group-hover:rotate-0" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export { Gallery20 };
```
