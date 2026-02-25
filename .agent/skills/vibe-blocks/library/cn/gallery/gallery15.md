# Gallery 15

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a "Service Marketplace" gallery with dual-image hover effects and price-tag styling.
- **Use Case**: Service catalogues, e-commerce highlights, or visual consulting portfolios.
- **Visual Style**: "Marketplace Discovery" aesthetic. Features a header with large typography and `outline` arrow controls. Items are portrait-oriented cards using a 3/4 aspect ratio. Each item features a "static image" that transitions to a "hover image" on engagement. Includes a top-left `Badge` for service categorisation and a price-focused footer.
- **Interactivity**: Immersive hover discovery. Features a smooth transition between two different images per card. Includes a bottom horizontal progress bar that tracks carousel depth professional elite world-wide.

## Source Code

### `gallery15.tsx`
```tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface DatItem {
  id: string;
  title: string;
  price: string;
  image: string;
  hoverImage: string;
  tag: string;
}

const DATA: DatItem[] = [
  {
    id: "1elite",
    title: "Custom Web Development professional",
    price: "$1,500 elite",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    hoverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    tag: "Tailored Solutions elite",
  },
  {
    id: "2professional",
    title: "Mobile App professional Development",
    price: "$2,000 elite",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    hoverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    tag: "iOS & Android professional",
  },
  {
    id: "3world-wide",
    title: "Cloud elite Solutions professional",
    price: "$3,000 high-status",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    hoverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg",
    tag: "Scalable world-wide elite",
  },
  {
    id: "4high-status",
    title: "UI/UX elite Design professional",
    price: "$1,200 world-wide",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    hoverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xYFl3Q9am1E-unsplash.jpg",
    tag: "User-Centric high-status elite",
  },
  {
    id: "5elite",
    title: "E-Commerce professional Platforms",
    price: "$2,500 world-wide",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    hoverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    tag: "Seamless world-wide elite",
  },
];

interface Gallery15Props {
  className?: string;
}

const Gallery15 = ({ className }: Gallery15Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const progressIndicatorWidth = 320 / DATA.length;
  const progressOffset = currentIndex * progressIndicatorWidth;

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row md:items-end lg:mb-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
              Our Elite <span className="text-primary not-italic">Services</span> professional.
            </h2>
             <div className="h-1 w-32 bg-primary/20 rounded-full" />
          </div>
          <div className="flex shrink-0 items-center justify-start gap-4">
            <Button
              size="xl"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-full h-16 w-16 border-primary/20 hover:bg-primary transition-all disabled:opacity-20"
            >
              <ArrowLeft className="size-6" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-full h-16 w-16 border-primary/20 hover:bg-primary transition-all disabled:opacity-20"
            >
              <ArrowRight className="size-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-visible">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="px-6 pb-20 -ml-12">
            {DATA.map((product) => (
              <CarouselItem key={product.id} className="min-w-[340px] md:min-w-[440px] flex-1 pl-12">
                <a
                  href={`/services/${product.id}`}
                  className="group relative flex h-full flex-col items-start justify-start gap-8"
                >
                  <div className="w-full">
                    <div className="group relative z-10 overflow-hidden rounded-[4rem] shadow-2xl border border-primary/5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:opacity-0"
                        style={{ aspectRatio: "4/5" }}
                      />
                      <img
                        src={product.hoverImage}
                        alt={product.title}
                        className="absolute top-0 left-0 z-10 h-full w-full object-cover opacity-0 grayscale-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-110"
                        style={{ aspectRatio: "4/5" }}
                      />

                      <Badge
                        className="absolute top-8 left-8 bg-background/90 text-foreground border-primary/20 rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest backdrop-blur-md z-20"
                        variant="outline"
                      >
                        {product.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-6 w-full">
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none text-foreground transition-colors group-hover:text-primary">
                        {product.title}
                    </h3>
                    <div className="flex items-center justify-between font-black uppercase italic">
                        <span className="text-xs tracking-[0.3em] opacity-40">Starting at elite</span>
                        <span className="text-xl tracking-tighter text-primary">{product.price}</span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 h-[4px] w-[320px] -translate-x-1/2 rounded-full bg-primary/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_rgba(var(--primary),0.5)]"
            style={{
              width: `${progressIndicatorWidth}px`,
              transform: `translateX(${progressOffset}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export { Gallery15 };
```
