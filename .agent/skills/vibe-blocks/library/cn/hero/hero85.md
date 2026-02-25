# Hero 85

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a motion-rich, conversion-heavy introduction using dual auto-scrolling image carousels that change orientation based on screen size.
- **Use Case**: Best for high-growth service businesses, collaboration tool suites, or agencies that want to showcase "High Activity" and a "Volume" of work.
- **Visual Style**: Dynamic activity aesthetic. Features a 2-column layout (on desktop). The left column is a high-density typography block including an AI-focused announcement `Badge`/Pill. The right side is an high-impact visual section featuring dual auto-scrolling `Carousel` instances. On mobile, these scroll horizontally in opposite directions. On desktop (`lg:grid`), they switch to a vertical orientation (`orientation="vertical"`), creating a high-fidelity "scrolling wall" appearance.
- **Interactivity**: High interactive motion. Carousels utilize `AutoScroll` plugin with `speed` and `direction` (forward/backward) modifiers to create a "Living interface" feel.

## Source Code

### `hero85.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero85Props {
  className?: string;
}

const Hero85 = ({ className }: Hero85Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* Typography side */}
          <div className="mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold tracking-tight shadow-sm">
              <Badge className="rounded-full shadow-none font-black px-3">AI-powered</Badge>
              <span className="text-muted-foreground mr-1">Solutions for new businesses</span>
            </div>
            
            <h1 className="mt-10 mb-8 text-5xl font-black lg:text-7xl tracking-tighter leading-[0.9] text-pretty">
              Revolutionizing Client Collaboration for <span className="text-primary italic">Modern</span> Services
            </h1>
            
            <p className="mx-auto lg:mx-0 max-w-xl text-lg lg:text-2xl font-medium text-muted-foreground leading-relaxed">
              Elevate your service-based business with customizable client
              portals and advanced back-office management in a central platform.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-fit font-black text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                Start for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-fit font-bold text-lg px-10 py-7 rounded-full border-2 bg-background shadow-xl"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          {/* Motion Asset side (Responsive Carousel Wall) */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* 1. Mobile Layout: Opposite Horizontal Carousels */}
            <div className="flex flex-col gap-8 lg:hidden">
                <Carousel
                opts={{ loop: true }}
                plugins={[ AutoScroll({ speed: 0.8 }) ]}
                className="-mx-7"
                >
                <CarouselContent>
                    {[1, 2, 3, 4].map((id) => (
                    <CarouselItem key={id} className="max-w-[280px]">
                        <img src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${id}.svg`} className="rounded-2xl border shadow-xl" alt="preview" />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
                
                <Carousel
                opts={{ loop: true }}
                plugins={[ AutoScroll({ speed: 0.8, direction: "backward" }) ]}
                className="-mx-7"
                >
                <CarouselContent>
                    {[1, 2, 3, 4].map((id) => (
                    <CarouselItem key={id} className="max-w-[280px]">
                        <img src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${id}.svg`} className="rounded-2xl border shadow-xl" alt="preview" />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>
            
            {/* 2. Desktop Layout: Vertical Dual Scrolling Wall */}
            <div className="hidden grid-cols-2 gap-8 lg:grid">
                <div className="relative h-[600px] overflow-hidden rounded-3xl">
                    <Carousel
                    opts={{ loop: true }}
                    plugins={[ AutoScroll({ speed: 0.8 }) ]}
                    orientation="vertical"
                    className="h-full"
                    >
                    <CarouselContent className="h-full">
                        {[1, 2, 3, 4, 1].map((id, i) => (
                        <CarouselItem key={i} className="pt-8">
                            <img
                                src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${id}.svg`}
                                alt="vertical asset"
                                className="rounded-3xl border border-border/60 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    </Carousel>
                </div>
                
                <div className="relative h-[600px] overflow-hidden rounded-3xl">
                    <Carousel
                    opts={{ loop: true }}
                    plugins={[ AutoScroll({ speed: 0.8, direction: "backward" }) ]}
                    orientation="vertical"
                    className="h-full"
                    >
                    <CarouselContent className="h-full">
                        {[1, 2, 3, 4, 1].map((id, i) => (
                        <CarouselItem key={i} className="pt-8">
                            <img
                                src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${id}.svg`}
                                alt="vertical asset"
                                className="rounded-3xl border border-border/60 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    </Carousel>
                </div>
                
                {/* Visual Glass Overlays for Top/Bottom Fade */}
                <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-background to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-background to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero85 };
```
