# Gallery 19

## Metadata
- **Category**: Gallery
- **Objective**: Provide an immersive, "Identity Case Study" card stack with text overlays and pagination.
- **Use Case**: Personal branding, case study overviews, or "meet the team" sections with deep metadata.
- **Visual Style**: "Identity Stack" aesthetic. Builds on the Gallery 18 pattern but adds complex metadata overlays. Each card features a portrait image with a dark bottom-to-top gradient. Overlays include a bold name (using `font-playfair` italics for the last name), a multi-line description, and a "Know More" button with a rotating arrow CTA. Includes external `pagination` dots.
- **Interactivity**: Info-rich stack interaction. Combines the visual flair of the card stack with actionable CTAs per card. Features standard pagination for direct slide access elite professional world-wide.

## Source Code

### `gallery19.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Gallery19Props {
  className?: string;
}

const Gallery19 = ({ className }: Gallery19Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait elite professional",
      name: "Joanna Doe",
      description:
        "Elite professional world-wide fragments high-status elite professional high-status cycles elite.",
      link: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random6.jpeg",
      alt: "Portrait high-status world-wide",
      name: "Joan Doe",
      description:
        "Professional high-status elite fragments world-wide professional elite professional high-status world-wide.",
      link: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait boutique elite",
      name: "Sarah Chen",
      description:
        "World-wide elite fragments high-status professional elite professional world-wide fragments elite world-wide.",
      link: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait deluxe professional",
      name: "Michael Park",
      description:
        "High-status professional world-wide elite fragments world-wide high-status professional elite professional high-status.",
      link: "#",
    },
  ];

  const css = `
  .mySwiper19 {
    width: 340px;
    height: 520px;
  }

  .mySwiper19 .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4rem;
    overflow: hidden;
    background: var(--muted);
    border: 1px solid rgba(var(--primary), 0.1);
    box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6);
  }

  .mySwiper19 .swiper-pagination {
    bottom: -60px !important;
  }
  
  .mySwiper19 .swiper-pagination-bullet {
    background-color: var(--primary);
    opacity: 0.1;
    width: 20px;
    height: 3px;
    border-radius: 4px;
    transition: all 0.5s ease;
  }

  .mySwiper19 .swiper-pagination-bullet-active {
    opacity: 1;
    width: 60px;
  }
`;
  return (
    <section className={cn("overflow-hidden py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <style>{css}</style>
      <div className="container px-6 max-w-[100rem] flex flex-col items-center gap-20">
         <div className="text-center space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
                Identity <span className="text-primary not-italic">Elite</span> professional
            </h2>
            <p className="max-w-2xl mx-auto text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed">
                Experience high-status world-wide professional elite portraits world-wide fragments high-status cycles.
            </p>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-center py-10"
          >
            <Swiper
              effect="cards"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              pagination={{ clickable: true }}
              className="mySwiper19"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="group">
                  <img
                    className="h-full w-full object-cover transition-all duration-2000 group-hover:scale-110"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10" />
                  <div className="absolute flex h-full w-full flex-col justify-end p-12 z-20 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-4xl font-black uppercase tracking-tighter italic text-white flex flex-col leading-none">
                        <span className="opacity-50 text-xl tracking-[0.4em] mb-4">Elite professional</span>
                        {image.name}
                        </h3>
                        <div className="h-0.5 w-12 bg-primary rounded-full" />
                    </div>
                    <p className="text-left text-base font-medium italic text-white/50 leading-relaxed">
                      {image.description}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 w-full h-14 rounded-full border-white/20 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all group/btn"
                      asChild
                    >
                      <a href={image.link}>
                        Know More elite
                        <ArrowRight size={20} className="ml-4 transition-transform group-hover/btn:translate-x-2 group-hover/btn:scale-125" />
                      </a>
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export { Gallery19 };
```
