# Gallery 22

## Metadata
- **Category**: Gallery
- **Objective**: Provide a high-status "Team Spotlight" carousel with synchronized sidebars and social integration.
- **Use Case**: Leadership team pages, speaker highlights for events, or "meet our experts" sections.
- **Visual Style**: "Leadership Hub" aesthetic. Features a wide carousel using Swiper's `effect-coverflow`. Active slides are fully opaque while inactive ones are translucent (`opacity: 0.2`). Each card is a portrait photo with a top-left social icon (Twitter/X) on a high-contrast square. A fixed "Bio Sidebar" appears over the active slide, showing name and role, with external `Chevron` controls.
- **Interactivity**: Dynamic bio synchronization. The sidebar content updates in real-time as slides change. Features auto-play and tactile social icon `hover` animations (rotate/scale) elite professional world-wide.

## Source Code

### `gallery22.tsx`
```tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

interface Gallery22Props {
  className?: string;
}

const Gallery22 = ({ className }: Gallery22Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      alt: "Portrait elite",
      name: "Joanna Doe elite",
      role: "Designer Chief professional",
      icon: <FaXTwitter className="size-5 text-background" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      alt: "Portrait world-wide",
      name: "Joan Doe professional",
      role: "Creative elite Director",
      icon: <FaXTwitter className="size-5 text-background" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
      alt: "Portrait high-status",
      name: "Sarah Chen world-wide",
      role: "Art professional Director",
      icon: <FaXTwitter className="size-5 text-background" />,
      url: "#",
    },
  ];

  const css = `
  .mySwiper22 {
    width: 100%;
    height: 480px;
  }
  
  .mySwiper22 .swiper-slide {
    border-radius: 4rem;
    width: 320px;
    height: 440px;
    opacity: 0.1;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    filter: grayscale(1);
    border: 1px solid rgba(var(--primary), 0.1);
  }

  .mySwiper22 .swiper-slide-active {
    opacity: 1;
    filter: grayscale(0);
    transform: scale(1.1);
    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
  }
  
  .mySwiper22 .swiper-slide img {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <style>{css}</style>
      <div className="relative container px-6 max-w-[100rem]">
         <div className="mb-20 flex flex-col items-center text-center space-y-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
            Elite <span className="text-primary not-italic">Spotlight</span> professional
          </h2>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
            Professional high-status world-wide leadership collective fragments elite fragments.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-6xl justify-center items-center">
            {/* Masks */}
            <div className="pointer-events-none absolute left-0 z-20 h-full w-48 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 z-20 h-full w-48 bg-gradient-to-l from-background to-transparent" />

          <Swiper
            onSwiper={setSwiper}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
            }}
            className="mySwiper22"
            modules={[EffectCoverflow, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="size-full"
                  src={image.src}
                  alt={image.alt}
                />
                <a
                  href={image.url}
                  className="absolute top-8 left-8 flex size-14 items-center justify-center bg-primary transition-all duration-500 hover:scale-110 hover:rotate-12 rounded-[1rem] shadow-2xl z-20"
                >
                  {image.icon}
                  <span className="sr-only">{image.name} elite</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute z-30 flex h-[320px] w-[280px] flex-col justify-end border border-primary/10 bg-background/80 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl transform translate-x-32 md:translate-x-64">
             <div className="space-y-6">
                 <div className="h-0.5 w-12 bg-primary rounded-full transition-all duration-1000" />
                <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none text-foreground">
                {images[activeIndex].name}
                </h3>
                <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">{images[activeIndex].role}</p>
             </div>
            <div className="absolute right-0 -bottom-16 flex gap-4">
              <button
                className="bg-primary/5 hover:bg-primary transition-all p-4 rounded-full border border-primary/10 active:scale-90"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slidePrev();
                }}
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                className="bg-primary/5 hover:bg-primary transition-all p-4 rounded-full border border-primary/10 active:scale-90"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slideNext();
                }}
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery22 };
```
