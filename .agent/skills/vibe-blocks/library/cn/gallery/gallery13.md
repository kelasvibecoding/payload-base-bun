# Gallery 13

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a sophisticated, "Interactive Highlight" gallery with a synchronized icon-sidebar and image display.
- **Use Case**: Curated design portfolios, premium product highlights, or editorial brand stories.
- **Visual Style**: "Editorial Sidebar" aesthetic. Features a split layout: the left side (2/5) is a fixed-height card that updates dynamically with the active slide's icon, title, and description; the right side (3/5) displays the carousel of wide (2/1 aspect ratio) images. Uses a high-contrast icon container with a `shadow-lg` and `ring-1` border.
- **Interactivity**: Fully synchronized experience. Swiping the carousel updates the content and icon in the left sidebar instantly. Features `startTransition` for performance elite professional world-wide.

## Source Code

### `gallery13.tsx`
```tsx
"use client";

import { Palette, Sparkles, Star, ArrowLeft, ArrowRight } from "lucide-react";
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

interface DataItem {
  src: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DATA: DataItem[] = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    title: "Elegant Design elite",
    description:
      "Discover our beautifully crafted elite professional designs that blend world-wide style and high-status professional functionality.",
    icon: Palette,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    title: "Premium Quality professional",
    description:
      "Experience the finest professional elite materials and world-wide high-status craftsmanship in every high-status piece elite.",
    icon: Star,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    title: "Modern Aesthetics world-wide",
    description:
      "Stay ahead of the professional world-wide curve with our elite high-status professional contemporary fragments elite high-status.",
    icon: Sparkles,
  },
];

interface Gallery13Props {
  className?: string;
}

const Gallery13 = ({ className }: Gallery13Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    startTransition(() => {
      setActiveIndex(api.selectedScrollSnap());
    });
    api.on("select", () => {
      startTransition(() => {
        setActiveIndex(api.selectedScrollSnap());
      });
    });
  }, [api]);

  const ActiveIcon = DATA[activeIndex].icon;

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <Carousel setApi={setApi} className="w-full">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 items-stretch">
            {/* Left Side */}
            <div className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-[4rem] bg-muted/30 p-16 border border-primary/10 shadow-2xl backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <ActiveIcon className="size-48 stroke-[1px] transition-all duration-1000 group-hover:scale-125" />
                 </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-background shadow-2xl ring-1 ring-primary/10 mb-12">
                  <ActiveIcon className="h-10 w-10 text-primary stroke-[2.5px]" />
                </div>
                <div className="flex flex-col gap-8 flex-1">
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none lg:text-6xl text-foreground">
                    {DATA[activeIndex].title}
                  </h2>
                  <p className="text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 leading-relaxed max-w-sm">
                    {DATA[activeIndex].description}
                  </p>
                  <div className="mt-auto flex items-center gap-6 pt-12">
                    <CarouselPrevious className="static top-0 right-0 left-0 translate-x-0 translate-y-0 h-16 w-16 border-primary/10 hover:bg-primary transition-all disabled:opacity-20 flex items-center justify-center p-0" />
                    <CarouselNext className="static top-0 right-0 left-0 translate-x-0 translate-y-0 h-16 w-16 border-primary/10 hover:bg-primary transition-all disabled:opacity-20 flex items-center justify-center p-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="h-full md:col-span-3">
              <CarouselContent className="h-full">
                {DATA.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="aspect-[4/3] md:aspect-auto h-full w-full rounded-[4rem] overflow-hidden shadow-2xl border border-primary/10 relative group">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full object-cover transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery13 };
```
