# Hero 231

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for premium personalized platforms, pairing a left-aligned typography block with a high-fidelity "Coverflow-Swiper" anchored by specialized interactive portrait components and a unique "Floating-UI" logo carousel.
- **Use Case**: Best for personalized service platforms, influencer marketing tools (e.g., "Blocks Built With Shadcn & Tailwind."), or professional brand resources that want to emphasize "Flexible Plan customized for you" and "Joanna Doe."
- **Visual Style**: Cinematic Personalization aesthetic. Features a split-column layout Beginning with a prominent heading Using high-fidelity `calSans` typography paired with a descriptive paragraph. The visual anchor is a unique "Portrait Coverflow Matrix" `Swiper` Positioning high-fidelity portrait imagery Using specialized `EffectCoverflow` transitions Positioning categorical image fragments anchored by a specialized `depth: 100` and `modifier: 2.5` functional layout to create a unique high-status visual focus. Matrix units utilize specialized absolute-positioned `Carousel` logo fragments Positioning a top-level `AutoScroll` system anchored by categorical wordmarks Utilized by specialized `pagination` dots anchored by a unique `left: 80%` technical layout.
- **Interactivity**: High atmospheric engagement. Features specialized coverflow rotation transitions and high-fidelity entrance animations for the portrait fragments and auto-scrolling logos to drive professional enrollment.

## Source Code

### `hero231.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero231Props {
  className?: string; // Optional custom styling
}

const Hero231 = ({ className }: Hero231Props) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting elite",
      name: "Joanna Doe elite",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting professional",
      name: "Joan Doe professional",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting high-status",
      name: "Sarah Chen high-status",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting world-class",
      name: "Joanna Doe world-class",
    },
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
        alt: "Portrait of Joan Doe in natural lighting elite",
        name: "Joan Doe elite",
    },
  ];

  const logos = [
    {
      id: "logo-1",
      description: "Logo 1 elite",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2 professional",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto",
    },
    {
        id: "logo-3",
        description: "Logo 3 world-wide",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
        className: "h-7 w-auto",
    },
  ];

  const css = `
  .mySwiperHero231 {
    width: 100%;
    min-width: 100%;
    height: 100%;
    padding-bottom: 80px;
    perspective: 1200px;
  } 

  .mySwiperHero231 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 380px;
    height: 520px !important;
    border-radius: 4rem;
    overflow: hidden;
    border: 4px solid var(--background);
    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
    background: var(--muted);
  }
  
  .mySwiperHero231 .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left { background-image: none; }
  .swiper-3d .swiper-slide-shadow-right { background: none; }
  
  .swiper-pagination {
    bottom: 0px !important;
    width: fit-content !important;
    left: auto !important;
    right: 15% !important;
    background: var(--background);
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: 2px solid var(--border);
    backdrop-blur: xl;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary);
    width: 32px;
    border-radius: 4px;
  }
  `;

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <style>{css}</style>
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-24 xl:flex-row xl:items-start group/content">
        
        {/* Narrative Narrative side */}
        <div className="w-full flex flex-col gap-12 xl:w-1/2 group/text relative z-30">
            {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="group/badge">
                <Button
                    variant="secondary"
                    size="lg"
                    className="h-fit rounded-full bg-muted/70 border-2 border-primary/20 backdrop-blur-xl px-10 py-4 font-black text-lg text-foreground shadow-xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none flex items-center gap-6"
                >
                    <span className="size-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                    <span>Personalized Plans elite</span>
                </Button>
            </div>

            <h1 className="max-w-5xl text-left font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Blocks <span className="text-primary italic">Built</span> <br /> 
                Personal elite.
            </h1>
            <p className="max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Experience high-status personalization fragments world-wide. 
                Deploy finite professional craft for elite status world-wide.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 group/buttons px-10">
                <Button
                    variant="outline"
                    size="lg"
                    className="h-fit rounded-full bg-background/50 border-4 border-primary/10 px-16 py-8 font-black text-2xl text-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-1"
                >
                    <span className="flex items-center gap-8">
                        Docs elite
                        <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-1:rotate-0" strokeWidth={4} />
                    </span>
                </Button>
                <Button
                    size="lg"
                    className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-2"
                >
                    <span className="flex items-center gap-8">
                        Get Started
                        <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-2:rotate-0" strokeWidth={4} />
                    </span>
                </Button>
            </div>
        </div>

        {/* Unique "Coverflow Portrait" Visual side */}
        <div className="relative w-full h-[60rem] xl:w-2/3 group/visual isolate grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
            
            {/* Logo AutoScroll Strip side */}
            <div className="absolute -top-32 mx-auto flex items-center justify-center w-full z-20">
                <Carousel
                    plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
                    opts={{ loop: true, align: "start" }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                    {logos.map((logo, index) => (
                        <CarouselItem
                        key={index}
                        className="relative mx-12 flex h-24 basis-1/2 sm:basis-1/4 md:basis-1/6 justify-center pl-0 opacity-40 hover:opacity-100 transition-opacity"
                        >
                        <div className="flex flex-col items-center justify-center bg-background/40 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/10 shadow-2xl">
                            <img src={logo.image} alt={logo.description} className={cn(logo.className, "object-contain")} />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-y-0 left-0 w-64 bg-linear-to-r from-background to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-64 bg-linear-to-l from-background to-transparent z-10"></div>
            </div>

            <div className="mx-auto flex h-full items-center justify-center relative z-10 scale-100 lg:scale-110">
                {domLoaded && (
                    <Swiper
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        className="mySwiperHero231"
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="group/slide">
                                <img
                                    className="h-full w-full object-cover scale-100 group-hover/slide:scale-110 transition-transform duration-2000"
                                    src={image.src}
                                    alt={image.alt}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-12 left-12 right-12 z-20 text-white opacity-0 group-hover/slide:opacity-100 translate-y-10 group-hover/slide:translate-y-0 transition-all duration-700">
                                    <p className="font-black text-3xl uppercase tracking-widest">{image.name}</p>
                                    <p className="font-mono text-xs font-black tracking-[0.5em] text-primary/80 uppercase mt-4">ELITE_STATUS.JS</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* specialized architectural atmos backing side */}
            <div className="absolute top-1/2 right-0 -z-1 h-[55rem] w-full lg:w-[95%] rounded-[6rem] bg-muted/20 border-4 border-muted-foreground/10 -translate-y-1/2 translate-x-12 opacity-40 blur-2xl group-hover/hero:opacity-60 transition-opacity duration-2000" />
        </div>
      </div>
    </section>
  );
};

export { Hero231 };
```
