# Gallery 14

## Metadata
- **Category**: Gallery
- **Objective**: Provide a modern, "Typographic Card" gallery with unique pill-based item navigation.
- **Use Case**: Features list for modern SaaS, startup service overviews, or "Why us" carousels.
- **Visual Style**: "Pill Momentum" aesthetic. Features a left-aligned hero section with high-contrast typography ("Code less. Build faster."). Items are vertical cards with a dark top-to-transparent gradient as an overlay. At the bottom, a unique navigation row displays active items as expanded "title pills" while inactive items are simple small circles.
- **Interactivity**: Advanced navigation pattern. The "Pill" row at the bottom acts as both an indicator and a navigational control, showing the title of the active slide. Features `startTransition` and `animation-all` for the pill expansion effect elite professional world-wide.

## Source Code

### `gallery14.tsx`
```tsx
"use client";

import { startTransition, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1589100787575-fad1dcaa9d17?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Responsive elite",
    description:
      "Our professional templates are built with a world-wide approach, ensuring high-status elite professional world-wide results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698516923130-8845104b6224?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Clean Code professional",
    description:
      "Each high-status template is crafted with professional well-structured code following elite professional world-wide standards.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1647517649508-855580038bfd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Copy & Paste elite",
    description:
      "Our world-wide templates are designed for easy professional functionality, enabling professional high-status elite results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586869871566-d8e41dd50318?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Easy Updates high-status",
    description:
      "Regular professional updates ensure your elite high-status template stays elite with world-wide professional elite professional.",
  },
];

interface Gallery14Props {
  className?: string;
}

const Gallery14 = ({ className }: Gallery14Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    startTransition(() => {
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
        <Carousel setApi={setApi}>
          <div className="grid gap-16 md:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
                Code less. <br />{" "}
                <span className="text-primary/20 not-italic">Build faster.</span>
              </h2>
              <p className="max-w-md text-2xl font-medium italic text-primary leading-relaxed border-l-4 border-primary/20 pl-8">
                Start with our elite professional templates, customize to your world-wide high-status needs professional elite.
              </p>
              <div className="hidden items-center gap-6 md:flex pt-4">
                <CarouselPrevious className="static size-16 translate-x-0 translate-y-0 rounded-full border-primary/10 hover:bg-primary transition-all disabled:opacity-20" />
                <CarouselNext className="static size-16 translate-x-0 translate-y-0 rounded-full border-primary/10 hover:bg-primary transition-all disabled:opacity-20" />
              </div>
            </div>

            <div className="w-full relative [&>div[data-slot=carousel-content]]:overflow-visible [&>div[data-slot=carousel-content]]:[clip-path:inset(-100vw_-100vw_-100vw_0)]">
                <CarouselContent className="max-w-full select-none -ml-8">
                {carouselItems.map((item, idx) => (
                    <CarouselItem className="pl-8 w-fit" key={idx}>
                    <div className="relative aspect-[4/5] h-[550px] w-[400px] md:w-[480px] rounded-[3.5rem] group overflow-hidden shadow-2xl border border-primary/5">
                        <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-[3.5rem] bg-linear-to-b from-primary/10 to-transparent z-10 transition-colors group-hover:from-primary/20" />
                        <img
                        src={item.image}
                        alt={item.title}
                        className="size-full rounded-[3.5rem] object-cover transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 p-12 flex flex-col justify-start z-10">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-lg">
                                {item.title}
                            </h3>
                            <div className="h-0.5 w-12 bg-white/40 rounded-full group-hover:w-full transition-all duration-1000" />
                            <p className="text-lg font-medium italic text-white/70 leading-relaxed border-l-2 border-white/20 pl-6">
                                {item.description}
                            </p>
                        </div>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </div>
          </div>
        </Carousel>
        <div className="mt-20 flex items-center lg:justify-center gap-4">
          {Array.from({ length: carouselItems.length }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full transition-all duration-700 border border-primary/10",
                index + 1 === current ? "w-64 bg-primary text-primary-foreground shadow-2xl" : "w-12 bg-muted/30 hover:bg-muted/50",
              )}
              onClick={() => api && api.scrollTo(index)}
            >
              <span
                className={cn(
                  "inline-block transition-all duration-700 text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap",
                  index + 1 === current
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0",
                )}
              >
                {carouselItems[index].title}
              </span>
              {index + 1 !== current && (
                 <span className="size-2 rounded-full bg-primary/20" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery14 };
```
