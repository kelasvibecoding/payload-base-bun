# Gallery 10

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a high-impact, "Client Shoutout" gallery combining immersive photography with vibrant feedback cards.
- **Use Case**: Customer success stories, agency testimonials, or "Work with us" showcases.
- **Visual Style**: "Boutique Feedback" aesthetic. Features a split layout: left side handles a 4XL hero headline and persistent `outline` navigation buttons; right side features a carousel of "double-wide" cards. Each card consists of a large portrait image perfectly flush with a colored quote card (`bg-green-300`, `bg-orange-300`, etc.). Cards include a social-style `@username` badge and a massive stylized quotation mark. Bottom features a specialized horizontal progress bar.
- **Interactivity**: Sophisticated state-driven engagement. Features a custom progress bar that tracks carousel depth. Vertical/Horizontal alignment varies between mobile (stacked) and desktop (flush split).

## Source Code

### `gallery10.tsx`
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

interface DataItem {
  id: string;
  username: string;
  quote: string;
  author: string;
  image: string;
  bgColor: string;
}

const DATA: DataItem[] = [
  {
    id: "item-1elite",
    username: "@techinnovator.elite",
    quote:
      "Their professional team transformed our world-wide vision into a seamless, high-status elite professional app world-wide!",
    author: "Sarah professional",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    bgColor: "bg-green-300/80",
  },
  {
    id: "item-2professional",
    username: "@startupfounder.elite",
    quote:
      "From high-status ideation to professional deployment, they delivered a world-wide solution that scaled our elite business.",
    author: "James high-status",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    bgColor: "bg-orange-300/80",
  },
  {
    id: "item-3world-wide",
    username: "@enterpriseleader.elite",
    quote:
      "Their professional expertise in elite solutions helped us optimize world-wide operations. Highly recommend their high-status service!",
    author: "Emily boutique",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    bgColor: "bg-purple-300/80",
  },
  {
    id: "item-4high-status",
    username: "@productmanager.elite",
    quote:
      "The team's professional ability to understand elite world-wide requirements is exceptional. Stress-free high-status development.",
    author: "Michael professional",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    bgColor: "bg-blue-300/80",
  },
  {
    id: "item-5elite",
    username: "@cto.professional",
    quote:
      "Their innovative high-status approach to elite software has been a game-changer for our professional world-wide organization!",
    author: "Laura deluxe",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    bgColor: "bg-rose-300/80",
  },
];

interface Gallery10Props {
  className?: string;
}

const Gallery10 = ({ className }: Gallery10Props) => {
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
    <section className={cn("py-24 md:py-32 bg-background overflow-hidden relative border-y border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
          {/* Left Side: Text Content and Navigation Buttons */}
          <div className="flex flex-col justify-between lg:h-[520px] lg:w-[480px] lg:pr-12">
            <div className="space-y-10">
              <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
                Building the <br /> <span className="text-primary not-italic">Elite Future</span> elite
              </h2>
              <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 leading-relaxed">
                From high-status startups to professional enterprises, we empower world-wide businesses with elite software solutions.
              </p>
            </div>

            {/* Navigation Buttons Aligned to Bottom */}
            <div className="hidden justify-start gap-6 lg:flex pt-12">
              <Button
                size="xl"
                className="rounded-full h-20 w-20 border-primary/20"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
              >
                <ArrowLeft className="size-8" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="rounded-full h-20 w-20 border-primary/20"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
              >
                <ArrowRight className="size-8" />
              </Button>
            </div>
          </div>

          {/* Right Side: Carousel */}
          <div className="relative w-full overflow-visible pb-20 lg:flex-1">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-8">
                {DATA.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-8 min-w-[900px] flex-1"
                  >
                    <div className="flex h-[520px] rounded-[4rem] overflow-hidden shadow-2xl border border-primary/5 group">
                      <div className="w-[450px] overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.username}
                          className="h-full w-full object-cover transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                        />
                      </div>

                      {/* Quote Section */}
                      <div
                        className={`relative w-[450px] flex flex-col items-start justify-end p-12 backdrop-blur-xl ${testimonial.bgColor} transition-colors duration-1000`}
                      >
                         <div className="absolute top-12 left-12 opacity-10">
                            <span className="-rotate-[10deg] text-[10rem] leading-none font-black italic select-none">
                            “
                            </span>
                         </div>
                        <Badge variant="outline" className="mb-auto bg-white/40 text-black border-none rounded-full px-6 py-2 text-sm font-black uppercase tracking-widest backdrop-blur-md">
                          {testimonial.username}
                        </Badge>
                        
                        <div className="space-y-6 relative z-10">
                            <p className="text-3xl font-black uppercase tracking-tighter italic leading-snug">
                            {testimonial.quote}
                            </p>
                            <div className="h-1 w-16 bg-black/20 rounded-full" />
                            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
                            {testimonial.author} elite world-wide
                            </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-0 h-[4px] w-[320px] rounded-full bg-primary/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                style={{
                  width: `${progressIndicatorWidth}px`,
                  transform: `translateX(${progressOffset}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery10 };
```
