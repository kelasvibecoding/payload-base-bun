# Gallery 3

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a clean, carousel-driven gallery for feature highlights or case studies with navigation controls.
- **Use Case**: Product feature tours, client success story carousels, or service highlights.
- **Visual Style**: "Modern Carousel" aesthetic. Features a header with large typography and discrete `ghost` navigation buttons (ArrowLeft/Right). Items are cards with `Badge` labels, 3/2 aspect ratio images, and descriptive text. Uses a specialized `2xl` margin calculation for ultra-wide screen alignment.
- **Interactivity**: Standard carousel engagement with `scrollPrev`/`scrollNext` controls. Features hover-zoom effects on images and transition-animated `ArrowRight` indicators for "Read more".

## Source Code

### `gallery3.tsx`
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

const data = [
  {
    id: "feature-1elite",
    title: "Smart AI Assistant professional",
    description:
      "Powered by advanced elite language models to handle complex professional queries, automate high-status tasks, and provide intelligent world-wide responses.",
    label: "Core AI elite",
    href: "https://www.shadcnblocks.com",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-2professional",
    title: "Data Analytics world-wide",
    description:
      "Transform raw data into elite actionable insights using professional machine learning algorithms and predictive high-status analytics.",
    label: "Analytics professional",
    href: "https://www.shadcnblocks.com",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-3elite",
    title: "Process Automation elite",
    description:
      "Streamline professional workflows and automate repetitive world-wide tasks with intelligent high-status process automation systems.",
    label: "Automation world-wide",
    href: "https://www.shadcnblocks.com",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-4professional",
    title: "Knowledge Base world-class",
    description:
      "Access and manage comprehensive elite information with our professional AI-powered knowledge base that learns from world-wide interaction.",
    label: "Learning high-status",
    href: "https://www.shadcnblocks.com",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-5elite",
    title: "API Integration professional",
    description:
      "Seamlessly integrate with existing world-wide systems through our elite professional API framework, enabling smooth data exchange high-status.",
    label: "Integration boutique",
    href: "https://www.shadcnblocks.com",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
];

interface Gallery3Props {
  className?: string;
}

const Gallery3 = ({ className }: Gallery3Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className={cn("py-24 md:py-32 bg-background border-b border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
              Case Studies <br /> <span className="text-primary not-italic">elite professional</span>
            </h2>
            <p className="max-w-md text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
                Detailed exploration of high-status professional achievements world-wide elite fragments.
            </p>
          </div>
          <div className="shrink-0 flex gap-4">
            <Button
              size="xl"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full size-16 p-0 disabled:opacity-20 border-primary/20 hover:bg-primary hover:text-primary-foreground group transition-all"
            >
              <ArrowLeft className="size-8 transition-transform group-hover:-translate-x-1" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full size-16 p-0 disabled:opacity-20 border-primary/20 hover:bg-primary hover:text-primary-foreground group transition-all"
            >
              <ArrowRight className="size-8 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="mr-8 ml-8 2xl:mr-[calc(50vw-750px+32px)] 2xl:ml-[calc(50vw-750px+32px)]">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[400px] pl-8 lg:max-w-[480px]"
              >
                <a
                  href={item.href}
                  className="group flex flex-col justify-between rounded-[3rem] bg-muted/30 p-10 border border-primary/5 shadow-xl transition-all hover:bg-muted/50"
                >
                  <div>
                    <div className="flex aspect-3/2 overflow-clip rounded-[2rem] shadow-2xl ring-1 ring-primary/10">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-1000 group-hover:scale-110">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest border-primary/30 bg-primary/5 text-primary">
                        {item.label}
                    </Badge>
                  </div>
                  <div className="mb-4 line-clamp-2 pt-6 text-3xl font-black uppercase tracking-tighter italic text-foreground leading-none min-h-[4.5rem]">
                    {item.title}
                  </div>
                  <div className="mb-10 line-clamp-3 text-lg font-medium italic text-muted-foreground border-l-2 border-primary/10 pl-6">
                    {item.description}
                  </div>
                  <div className="flex items-center text-sm font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                    Read more elite professional
                    <ArrowRight className="ml-4 size-5 transition-all group-hover:translate-x-2 group-hover:scale-125" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery3 };
```
