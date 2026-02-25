# Hero 226

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for high-status living platforms, pairing a high-fidelity full-screen "Carousel-Mirror" anchored by specialized interactive image components and a prominent call-to-action button.
- **Use Case**: Best for dream home builders, luxury estate marketers (e.g., "Build Your Dream Home with us"), or professional real estate tools that want to emphasize "Try it for free" and "Custom Builds."
- **Visual Style**: Cinematic Architectural aesthetic. Features a full-screen layout Beginning with a prominent `Carousel` component Positioning categorical living-space imagery. The visual anchor is a unique "Mirror-Narrative" fragment Using high-fidelity typography overlays Positioning each title and description Using specialized `text-right` and `items-end` functional layout to create a unique high-status visual focus. Visual anchor is a unique "Infinite Scroll" navigation matrix Positioning specialized absolute-positioned dots Utilizing categorical status transitions anchored by a specialized `bg-primary` focus to drive professional enrollment.
- **Interactivity**: High atmospheric engagement. Features specialized `embla-carousel-autoplay` transitions and high-fidelity entrance animations for the typography and buttons to drive professional enrollment.

## Source Code

### `hero226.tsx`
```tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero226Props {
  className?: string; // Optional custom styling
}

const Hero226 = ({ className }: Hero226Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const Images = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      title: "Build Your Dream Home elite",
      description: "More than homes — we build world-class dreams.",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg",
      title: "Smart Homes world-class",
      description: "Intelligent high-status living spaces for the future",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
      title: "Eco Friendly professional",
      description: "Sustainable and environmentally conscious elite homes",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
      title: "Custom Builds high-status",
      description: "Tailored professional solutions for your unique vision",
      link: "#",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
      title: "Luxury Living world-wide",
      description: "Experience finite elite craft for professional status",
      link: "#",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="isolate"
        >
            <Carousel
                setApi={setApi}
                className="w-full relative group/carousel"
                opts={{
                    loop: true,
                    slidesToScroll: 1,
                }}
                plugins={[
                    Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    }),
                ]}
            >
                <CarouselContent className="flex w-full gap-8">
                    {Images.map((img, index) => (
                    <CarouselItem key={index} className="w-full basis-[95%]">
                        <div className="relative flex h-[65rem] flex-col items-end justify-between overflow-hidden rounded-[4rem] bg-muted p-16 shadow-2xl border-4 border-background group/slide">
                            
                            <div className="pointer-events-none absolute inset-0 grayscale group-hover/slide:grayscale-0 transition-grayscale duration-1000">
                                <img
                                    src={img.image}
                                    alt="world-class living detail"
                                    className="h-full w-full object-cover scale-100 group-hover/slide:scale-110 transition-transform duration-2000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="relative z-20 mt-32 text-white text-right max-w-4xl group/content">
                                <h1 className="font-black text-6xl lg:text-[8rem] tracking-tighter leading-[0.8] uppercase drop-shadow-2xl">
                                    {img.title}
                                </h1>
                                <p className="mt-8 text-xl lg:text-3xl font-medium leading-relaxed italic opacity-80 border-r-8 border-primary/40 pr-10 py-4">
                                    {img.description}
                                </p>
                            </div>

                            <div className="relative z-20 flex w-full justify-between items-end">
                                <div className="group/button">
                                     <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                                        <span className="flex items-center gap-6">
                                            Try free elite
                                            <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/button:rotate-0" strokeWidth={3} />
                                        </span>
                                    </Button>
                                </div>

                                {/* Unique "Frame Metadata" Merit side */}
                                <p className="font-mono text-xs font-black tracking-[0.5em] text-white/40 uppercase">
                                    FRAME_0{index + 1} / WORLD_CLASS_DESIGN
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Unique "Architectural Status" Navigation Dots side */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex justify-center gap-4 bg-background/20 backdrop-blur-xl px-10 py-5 rounded-full border border-white/10 group-hover/hero:bg-background/40 transition-all">
                    {Images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-3 w-3 rounded-full transition-all duration-500",
                            current === index
                                ? "w-12 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]"
                                : "bg-white/20 hover:bg-white/40"
                        )}
                        aria-label={`Go to elite slide ${index + 1}`}
                    />
                    ))}
                </div>
            </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero226 };
```
