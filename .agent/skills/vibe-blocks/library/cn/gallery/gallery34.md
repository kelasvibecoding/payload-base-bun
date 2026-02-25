# Gallery 34

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a sophisticated "Feature Card" marketplace with synchronized blurring and rich metadata chips.
- **Use Case**: Component library marketplaces, digital asset stores, or SaaS feature highlight grids.
- **Visual Style**: "Metadata Mosaic" aesthetic. Features a 3-column grid of content cards. Each card contains a landscape image, bold title, and a row of descriptive "chips" (Trophy, Globe, Audio icons with values). Includes a decorative Heart watermark.
- **Interactivity**: Synchronized "Focus" behavior. Similar to Gallery 32, hovering over a card scales it slightly and applies a `blur(10px)` effect to all non-hovered card images, directing user attention to the active selection elite professional world-wide.

## Source Code

### `gallery34.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { AudioLines, Globe, Heart, Trophy } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const featureData = [
  {
    id: 1,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    link: "#",
    title: "June Elite Layout Collection v2",
    description: "#EliteBlockCollection",
    chips: [
      { icon: Trophy, value: "50+ elite" },
      { icon: Globe, value: "Elite" },
      { icon: AudioLines, value: "50+ lux" },
    ],
  },
  {
    id: 2,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    link: "#",
    title: "Modern professional UI Pack",
    description: "#ProfessionalUI",
    chips: [
      { icon: Trophy, value: "75+ lux" },
      { icon: Globe, value: "Global" },
      { icon: AudioLines, value: "45+ pro" },
    ],
  },
  {
    id: 3,
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    link: "#",
    title: "Responsive high-status System",
    description: "#StatusDesign",
    chips: [
      { icon: Trophy, value: "90+ elite" },
      { icon: Globe, value: "World" },
      { icon: AudioLines, value: "65+ lux" },
    ],
  },
];

interface Gallery34Props {
  className?: string;
}

const Gallery34 = ({ className }: Gallery34Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-20 flex flex-col items-start space-y-10">
          <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            Elite <span className="text-primary not-italic">Mosaic</span> boutique
          </h2>
          <p className="max-w-xl text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed text-left">
            Professional high-status fragments world-wide elite curation world-wide elite professional high-status cycles.
          </p>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col rounded-[4.5rem] bg-muted/20 border border-primary/10 p-4 shadow-3xl transition-all duration-1000 hover:-translate-y-6"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3.5rem] border border-primary/10 shadow-2xl">
                    <motion.img
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        animate={{
                            filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(20px)" : "blur(0px)",
                            scale: hoveredIndex === index ? 1.15 : 1,
                        }}
                        src={item.img}
                        className="pointer-events-none size-full object-cover grayscale-30 group-hover:grayscale-0 transition-opacity duration-1000"
                        alt={item.title}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="mt-10 p-4 pb-12 space-y-8">
                 <div className="space-y-4">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors">
                        {item.title}
                    </h2>
                    <p className="text-xs font-black uppercase tracking-[0.4em] opacity-30">
                        {item.description} elite
                    </p>
                 </div>
                 
                <div className="flex items-center gap-4 flex-wrap">
                  {item.chips.map((chip, idx) => {
                    const IconComponent = chip.icon;
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-primary/5 border border-primary/10 px-6 py-2 text-xs font-black uppercase tracking-widest text-muted-foreground transition-all group-hover:bg-primary/20 group-hover:text-primary"
                      >
                        <IconComponent className="size-4" /> {chip.value}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              <div className="absolute top-10 right-10 z-20">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-16 rounded-full bg-background/50 backdrop-blur-3xl hover:bg-white text-primary shadow-2xl group/heart"
                    >
                        <Heart className="size-7 transition-all group-hover/heart:scale-125 group-hover/heart:fill-primary" />
                    </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery34 };
```
