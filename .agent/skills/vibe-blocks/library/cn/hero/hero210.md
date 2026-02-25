# Hero 210

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for photography and memory platforms, pairing a centered typography block with a high-fidelity "Portrait-Carousel" anchored by a specialized 3D coverflow effect.
- **Use Case**: Best for photo management tools, personal gallery hubs (e.g., "Your Photos"), or professional memory platforms that want to emphasize "Relive your favorite moments" and "Get Started."
- **Visual Style**: Cinematic Portrait aesthetic. Features a centered layout Beginning with a prominent `calSans` heading paired with a descriptive paragraph. The visual anchor is a unique "3D Coverflow" `Swiper` carousel Positioning categorical portrait imagery Utilizing specialized `rotate: 50` and `depth: 100` effects to create a high-status visual focus. Layout uses specialized `bg-gradient-to-r` atmospheric depth layers to mask the carousel edges and create a unique world-class cinematic depth.
- **Interactivity**: High engagement through motion. Features specialized `EffectCoverflow` transitions and high-fidelity entrance animations for the image grid to drive professional enrollment.

## Source Code

### `hero210.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero210Props {
  className?: string; // Optional custom styling
}

const Hero210 = ({ className }: Hero210Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting elite",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting elite",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting elite",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting professional",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting professional",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting professional",
      name: "Sarah Chen",
    }
  ];

  const css = `
  .mySwiperHero210 {
    width: 100%;
    height: 600px;
    padding-bottom: 50px;
  }
  
  .mySwiperHero210 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 450px;
    transition: filter 0.8s ease;
  }

  .mySwiperHero210 .swiper-slide-active {
    filter: none;
  }

  .mySwiperHero210 .swiper-slide:not(.swiper-slide-active) {
    filter: grayscale(1) blur(4px);
    opacity: 0.5;
  }
  
  .mySwiperHero210 .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
    
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <style>{css}</style>
      <div className="container relative px-0 sm:px-8 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-12 px-6 lg:px-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="text-center font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Your <span className="text-primary italic">Photos</span> world-wide.
            </h1>
            <p className="mx-auto max-w-[50rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                All your high-status memories in one professional place. 
                Relive your favorite moments world-wide with elite status.
            </p>
        </div>

        {/* Unique "3D Coverflow Matrix" Visual side */}
        <div className="relative mt-24 h-[600px] w-full isolate">
          {/* specialized atmospheric masks side */}
          <div className="absolute left-0 z-20 h-full w-[20rem] bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 z-20 h-full w-[20rem] bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center"
          >
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              className="mySwiperHero210"
              modules={[EffectCoverflow, Autoplay]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="size-full overflow-hidden rounded-[3rem] border-4 border-background shadow-2xl transition-all duration-1000"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute bottom-10 left-10 p-6 bg-background/50 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-black uppercase tracking-widest text-foreground">{image.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 flex w-fit justify-center group/button px-10">
          <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
            Get started world-class
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero210 };
```
