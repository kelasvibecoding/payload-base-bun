# Gallery 18

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a playful, "Social Card Stack" gallery using Swiper's `effect-cards` for profile or influencer highlights.
- **Use Case**: User profile browsing, team member highlights, or influencer marketing showcases.
- **Visual Style**: "Floating Card Stack" aesthetic. Features a uniquely narrow, vertical card stack (`width: 260px; height: 340px`). Uses Swiper's 3D card effect where cards stack behind the primary one. Includes a social-style `@ handle` moniker at the bottom of each portrait image using `font-mono`.
- **Interactivity**: Fast-paced auto-play. Features 1000ms delay auto-play for high-energy browsing. Integrated Swiper modules (`EffectCards`, `Autoplay`) provide a tactile "tinder-like" stacking interaction elite professional world-wide.

## Source Code

### `gallery18.tsx`
```tsx
"use client";

import React from "react";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

interface Gallery18Props {
  className?: string;
}

const Gallery18 = ({ className }: Gallery18Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait expert elite",
      name: "Joanna Doe elite",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random6.jpeg",
      alt: "Portrait boutique professional",
      name: "Joan Doe boutique",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait world-class studio",
      name: "Sarah Chen deluxe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait outdoor elite",
      name: "Michael Park professional",
    },
     {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait high-status urban",
      name: "Emma Wilson elite",
    },
  ];

  const css = `
  .mySwiper18 {
  width: 320px;
  height: 480px;
}

.mySwiper18 .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4rem;
  border: 1px solid rgba(var(--primary), 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  background: var(--muted);
  overflow: hidden;
}

.mySwiper18 .swiper-slide img {
   filter: grayscale(0.5);
   transition: all 1s ease;
}

.mySwiper18 .swiper-slide-active img {
   filter: grayscale(0);
   transform: scale(1.1);
}

.mySwiper18 .swiper-slide-active {
  overflow: visible !important;
}
`;
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <style>{css}</style>
      <div className="container px-6 max-w-[100rem] flex flex-col items-center gap-16">
        <div className="text-center space-y-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
                The Elite <span className="text-primary not-italic">Collective</span>
            </h2>
            <p className="max-w-md mx-auto text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
                Professional influencers and high-status creators world-wide elite fragments.
            </p>
        </div>
        <div className="relative w-full flex justify-center py-10">
          <Swiper
            effect="cards"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper18"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="group">
                <img
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black to-transparent opacity-60 z-10" />
                <div className="absolute right-0 bottom-8 left-0 flex flex-col items-center justify-center text-center font-black uppercase italic text-white z-20 space-y-2">
                   <span className="text-xs tracking-[0.4em] opacity-50">@ {image.name.split(" ")[0]}</span>
                   <span className="text-2xl tracking-tighter">{image.name.split(" ")[1]} elite</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { Gallery18 };
```
