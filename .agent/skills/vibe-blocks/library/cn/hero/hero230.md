# Hero 230

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for SaaS and feature-rich platforms, pairing a centered typography block with a high-fidelity dual-carousel system anchored by specialized interactive logo scrolling and a prominent "Flexible Plan" merit badge.
- **Use Case**: Best for multi-faceted productivity tools, SaaS frameworks (e.g., "Blocks Built With Shadcn & Tailwind."), or professional developer resources that want to emphasize "Documentation" and "Get Started."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a status dot and "Flexible Plan" text. The centerpiece is a unique "Dual-Carousel Matrix" system Positioning a top-level `AutoScroll` logo stripe Using specialized `embla-carousel-auto-scroll` functional layout anchored by categorical wordmarks (`astro`, `company logos`). Visual anchor is a unique "Infinite Scroll" image gallery Positioning a bottom-level `Autoplay` image carousel Positioning specialized `translate-y-18` vertical-offset image fragments Utilizing categorical portrait and pattern imagery anchored by a specialized `hover:-translate-y-18` transition to create a unique high-status visual focus.
- **Interactivity**: High engagement through state management and motion. Features specialized auto-scrolling logos and high-fidelity entrance animations for the image fragments to drive professional enrollment.

## Source Code

### `hero230.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero230Props {
  className?: string; // Optional custom styling
}

const Hero230 = ({ className }: Hero230Props) => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random3.jpeg",
  ];
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
      className: "h-7 w-auto",
    },
     {
      id: "logo-9",
      description: "Logo 1 duplicated",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
  ];
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center group/content">
        
        {/* Narrative Merit Badge side */}
        <div className="group/badge isolate">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full z-[-1] animate-pulse"></div>
            <Button
                variant="secondary"
                size="lg"
                className="h-fit rounded-full bg-muted/70 border-2 border-primary/20 backdrop-blur-xl px-12 py-5 font-black text-xl text-foreground shadow-xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none flex items-center gap-8"
            >
                <span className="size-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                <span>Flexible Plans elite</span>
            </Button>
        </div>

        <div className="flex flex-col items-center gap-10">
            <h1 className="max-w-5xl text-center font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Blocks Built <br /> 
                <span className="text-primary italic">with</span> Shadcn elite.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Global architectural fragments for elite status world-wide. 
                Experience finite professional craft for elite status world-wide.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 group/buttons px-10">
          <Button
            variant="outline"
            size="lg"
            className="h-fit rounded-full bg-background/50 border-4 border-primary/10 px-16 py-8 font-black text-2xl text-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-1"
          >
            <span className="flex items-center gap-8">
                Documentation
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-1:rotate-0" strokeWidth={4} />
            </span>
          </Button>
          <Button
            size="lg"
            className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-2"
          >
            <span className="flex items-center gap-8">
                Get Started elite
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-2:rotate-0" strokeWidth={4} />
            </span>
          </Button>
        </div>

        {/* Unique "Dual-Carousel Matrix" Visual side */}
        <div className="relative mt-24 w-full flex flex-col gap-12 isolate overflow-visible">
            
            {/* Logo AutoScroll side */}
            <div className="relative mx-auto flex items-center justify-center w-full px-6 grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000">
                <Carousel
                    plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
                    opts={{ loop: true, align: "start" }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                    {logos.map((logo, index) => (
                        <CarouselItem
                        key={index}
                        className="relative mx-12 flex h-20 basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8 justify-center pl-0 opacity-40 hover:opacity-100 transition-opacity"
                        >
                        <div className="flex flex-col items-center justify-center">
                            <img
                            src={logo.image}
                            alt={logo.description}
                            className={cn(logo.className, "object-contain")}
                            />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                <div className="bg-gradient-to-r absolute inset-y-0 left-0 w-64 from-background to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>

            {/* Image Infinite Matrix side */}
            <div className="relative mx-auto -mt-16 flex items-center justify-center w-full overflow-visible isolate grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
                <Carousel
                    plugins={[Autoplay({ delay: 3000 })]}
                    opts={{ loop: true, align: "start" }}
                    className="w-full"
                >
                    <CarouselContent className="overflow-visible">
                    {images.map((image, index) => (
                        <CarouselItem
                        key={index}
                        className="relative flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 translate-y-32 cursor-grab justify-center active:cursor-grabbing px-6 transition-transform duration-1000 hover:z-30"
                        >
                        <div className="ease-out mt-auto w-full overflow-hidden rounded-[3rem] border-4 border-background shadow-2xl transition-all duration-700 hover:-translate-y-32 aspect-[3/4]">
                            <img
                            src={image}
                            alt="world-class architectural fragment"
                            className="h-full w-full object-cover scale-100 hover:scale-110 transition-transform duration-2000"
                            />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
};

export { Hero230 };
```
