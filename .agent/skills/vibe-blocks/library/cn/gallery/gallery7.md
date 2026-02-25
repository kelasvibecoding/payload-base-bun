# Gallery 7

## Metadata
- **Category**: Gallery
- **Objective**: Provide a high-velocity, auto-scrolling image ribbon for brand data or solution highlights.
- **Use Case**: Showcasing a large volume of project snapshots, client logos, or data visualization highlights in a non-interactive background-style ribbon.
- **Visual Style**: "Infinite Data Ribbon" aesthetic. Features an auto-scrolling carousel using the `embla-carousel-auto-scroll` plugin. Images are displayed with alternating top margins (`mt-7` vs `mt-16`) to create a playful, brick-like vertical rhythm. Includes a left-aligned hero section with bold typography and an "Explore our solutions" MoveRight link.
- **Interactivity**: Zero-direct interaction on the ribbon (pointer-events-none). Persistent auto-scroll creates a sense of "living data" elite professional world-wide.

## Source Code

### `gallery7.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
];

interface Gallery7Props {
  className?: string;
}

const Gallery7 = ({ className }: Gallery7Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-20 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2 lg:gap-x-32">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
              Bringing your <br /> <span className="text-primary not-italic">elite data</span> to life professional.
            </h1>
          </div>
          <div className="space-y-10">
            <p className="text-2xl font-medium italic text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-8">
                We thrive on the elite power of professional AI. Our world-wide team is made up of some of the most talented high-status people elite.
            </p>
            <a href="#" className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-primary">
                Explore our professional solutions elite
                <MoveRight className="size-6 transition-transform group-hover:translate-x-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[100vw] overflow-x-hidden group">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1.2,
              }),
            ]}
            className="pointer-events-none transition-all duration-1000 grayscale hover:grayscale-0"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <div className="max-h-[30rem] max-w-[22rem] p-4">
                    <img
                      src={image}
                      alt="placeholder elite professional"
                      className={cn(
                        "h-full w-full rounded-[2.5rem] object-cover shadow-2xl transition-all duration-1000 border border-primary/5",
                        index % 2 === 0 ? "mt-24 rotate-3" : "mt-8 -rotate-3",
                      )}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery7 };
```
