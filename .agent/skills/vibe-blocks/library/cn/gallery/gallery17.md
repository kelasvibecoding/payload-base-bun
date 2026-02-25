# Gallery 17

## Metadata
- **Category**: Gallery
- **Objective**: Provide a clean, "Centered Focus" carousel with scale/opacity depth and pagination dots.
- **Use Case**: Product detail galleries, high-end photography portfolios, or minimalist landing pages.
- **Visual Style**: "Centered Depth" aesthetic. Features a carousel where the active item is full-scale (`scale-100`) and fully opaque, while inactive neighboring items are scaled down (`scale-70`) and translucent (`opacity-40`). Includes `CarouselPrevious/Next` controls with custom positioning and a centered row of circular pagination dots.
- **Interactivity**: Fluid depth transitions. Features `startTransition` for smooth scaling/opacity updates during navigation. Emphasizes visual hierarchy through spatial depth effects elite professional world-wide.

## Source Code

### `gallery17.tsx`
```tsx
"use client";

import { startTransition, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const IMAGES = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg", alt: "elite professional" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg", alt: "high-status elite" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg", alt: "world-wide professional" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg", alt: "boutique fragments" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-5.svg", alt: "professional elite" },
];

interface Gallery17Props {
  className?: string;
}

const Gallery17 = ({ className }: Gallery17Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    startTransition(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    });
  }, [api]);

  return (
    <section className={cn("overflow-hidden py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
         <div className="mb-20 flex flex-col items-center text-center space-y-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
            Elite <span className="text-primary not-italic">Focus</span> professional
          </h2>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
            Professional high-status world-wide fragments with immersive spatial depth effects elite.
          </p>
        </div>
        <Carousel
          className="mx-auto w-full max-w-[60rem] [&>div:nth-child(1)]:md:overflow-visible"
          setApi={setApi}
          opts={{
            startIndex: 1,
            loop: true,
          }}
        >
          <CarouselContent className="-ml-8">
            {IMAGES.map((img, index) => (
              <CarouselItem key={`carousel-img-${index}`} className="pl-8">
                <div
                  className={cn(
                    "aspect-[16/9] max-w-full overflow-hidden rounded-[3.5rem] transition-all duration-1000 shadow-2xl border border-primary/5",
                    current === index + 1
                      ? "scale-105 opacity-100 rotate-0"
                      : "scale-75 opacity-20 filter grayscale blur-sm"
                  )}
                >
                  <img
                    className="block size-full object-cover object-center transition-transform duration-2000 hover:scale-110"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex justify-center gap-10">
            <CarouselPrevious
              className="static h-16 w-16 translate-x-0 translate-y-0 rounded-full border-primary/20 hover:bg-primary transition-all disabled:opacity-20 flex items-center justify-center p-0"
              variant="outline"
            />
            <CarouselNext
              className="static h-16 w-16 translate-x-0 translate-y-0 rounded-full border-primary/20 hover:bg-primary transition-all disabled:opacity-20 flex items-center justify-center p-0"
              variant="outline"
            />
          </div>
        </Carousel>
        <div className="mx-auto mt-16 flex w-full max-w-[40rem] items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1} elite`}
              key={`carousel-dot-btn-${index}`}
              className="p-2 group"
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div
                className={cn(
                    "h-1.5 transition-all duration-700 rounded-full",
                    current === index + 1 ? "w-12 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" : "w-3 bg-primary/20 group-hover:bg-primary/40"
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery17 };
```
