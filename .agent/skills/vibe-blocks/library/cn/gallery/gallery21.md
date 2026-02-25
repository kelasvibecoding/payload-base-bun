# Gallery 21

## Metadata
- **Category**: Gallery
- **Objective**: Provide a sophisticated "Coverflow Cinema" gallery with masked edges and 3D depth.
- **Use Case**: Movie streaming highlights, music album browsing, or high-end product carousels.
- **Visual Style**: "Cinematic Hub" aesthetic. Features a wide carousel using Swiper's `effect-coverflow`. Items are deeply shadowed landscape cards that rotate and recede in 3D space. Includes stylized "faded edge" masks on the left and right (bg-white-to-transparent) to focus attention on the center.
- **Interactivity**: Immersive Coverflow navigation. Uses `slidesPerView: 2.447` and `depth: 100` settings to create a dense 3D stack. Features auto-play and a "Hear the Music" CTA section below elite professional world-wide.

## Source Code

### `gallery21.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Gallery21Props {
  className?: string;
}

const Gallery21 = ({ className }: Gallery21Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait elite",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait professional",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait world-wide",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait high-status",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait world-class",
    },
  ];

  const css = `
  .mySwiper21 {
    width: 100%;
    height: 520px;
    padding-bottom: 60px;
  }
  
  .mySwiper21 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 480px;
    border-radius: 4rem;
    overflow: hidden;
    border: 1px solid rgba(var(--primary), 0.1);
    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
  }
  
  .mySwiper21 .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.4);
    transition: all 1s ease;
  }

  .mySwiper21 .swiper-slide-active img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden relative", className)}>
      <style>{css}</style>
      <div className="relative container max-w-[100rem] flex flex-col items-center gap-20">
        <div className="text-center space-y-8 relative z-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
                Cinematic <span className="text-primary not-italic">Elite</span> Hub.
            </h2>
            <p className="max-w-2xl mx-auto text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed">
                Experience high-status world-wide professional elite immersive fragments elite high-status cycles.
            </p>
        </div>

        {/* Left and right mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-background to-transparent lg:w-96" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent lg:w-96" />

        <div className="relative h-[520px] w-full max-w-[120rem] z-0">
          <motion.div
            className="relative h-full w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              }}
              className="mySwiper21"
              modules={[EffectCoverflow, Autoplay]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="size-full"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
                     <span className="text-xs font-black uppercase tracking-[0.4em] text-white/50 mb-2">Episode elite</span>
                     <h3 className="text-3xl font-black uppercase tracking-tighter italic text-white">{image.alt} professional</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-12">
          <h3 className="max-w-xl text-center text-3xl font-black uppercase tracking-tighter italic leading-none lg:text-5xl">
            Hear the Music professional elite world-wide experience.
          </h3>
          <Button
            variant="default"
            size="xl"
            className="group h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-4"
          >
            Explore elite world-wide
            <ArrowRight className="size-5 -rotate-45 transition-all ease-out group-hover:rotate-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery21 };
```
