# Hero 70

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-growth "Design Subscription" introduction that pairs a brand header with an interactive full-width auto-scrolling portfolio carousel.
- **Use Case**: Best for design subscriptions, creative agencies, or service-as-a-product (SaaP) sites where high-volume portfolio visual and "Unlimited" positioning are the primary value propositions.
- **Visual Style**: Narrative SaaP aesthetic. Features a centered layout beginning with a prominent company `logo` (`block-1.svg`). Below the header, a triple-checklist of "subscription benefits" (`CheckCircle`) introduces a high-impact left-aligned headline (`xl:text-9xl`). The visual anchor is a full-width interactive `Carousel` utilizing Embla `AutoScroll` and `Autoplay` plugins to display portfolio images (`placeholder-1` through `placeholder-6`) with custom horizontal linear-gradient edge masks (`before:bg-linear-to-r`).
- **Interactivity**: High interactive motion. Features auto-scrolling portfolio carousel. Dual CTAs utilize `rounded-full` buttons, including a high-contrast bottom CTA with a specialized `ArrowUpRight` icon to drive portfolio exploration.

## Source Code

### `hero70.tsx`
```tsx
"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero70Props {
  className?: string;
}

const Hero70 = ({ className }: Hero70Props) => {
  return (
    <section className={cn("relative bg-background py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Brand Header */}
        <div className="py-8 mb-4">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            className="h-12 lg:h-16 filter dark:invert"
            alt="brand logo"
          />
        </div>
        
        <div className="flex flex-col gap-12 lg:gap-20 py-10 lg:py-24">
          {/* Benefit Checklist (Desktop) */}
          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-2 text-foreground/80 font-bold uppercase tracking-widest text-sm">
              <CheckCircle className="size-6 text-primary" />
              <span>Design Subscription Monthly</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 font-bold uppercase tracking-widest text-sm">
              <CheckCircle className="size-6 text-primary" />
              <span>Rapid Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 font-bold uppercase tracking-widest text-sm">
              <CheckCircle className="size-6 text-primary" />
              <span>Flexible Subscription</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex flex-1 flex-col gap-8 max-w-5xl">
              <h1 className="text-5xl font-black tracking-tighter text-foreground lg:text-8xl xl:text-9xl leading-[0.85] text-pretty">
                The All You Can Design buffet to fuel your business growth
              </h1>
              <p className="max-w-2xl text-xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
                Enjoy professional design expertise —{" "}
                <span className="text-foreground font-black underline decoration-primary decoration-4 underline-offset-8">
                  without the hefty price tag
                </span>
              </p>
            </div>
          </div>
          
          {/* Personal Introduction CTA */}
          <Button
            variant="outline"
            size="lg"
            className="flex h-fit items-center gap-4 self-start rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-4 py-2 text-base font-bold shadow-xl transition-all hover:bg-primary/5 hover:border-primary/40 lg:px-6 lg:py-4"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
              alt="Designer"
              className="size-10 rounded-full object-cover ring-2 ring-primary/20"
            />
            <span>Schedule a chat with me</span>
          </Button>
        </div>
      </div>
      
      {/* Auto-scrolling Portfolio Carousel */}
      <div className="relative flex flex-col mt-12 mb-12">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
            Autoplay({
              playOnInit: true,
              delay: 1000,
            }),
          ]}
          className="relative mx-auto w-full max-w-full overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[15%] before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-[15%] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']"
        >
          <CarouselContent className="ml-5 flex gap-8 pl-4">
            {[1, 2, 3, 4, 5, 6, 1, 2].map((id, index) => (
               <CarouselItem key={index} className="basis-[480px] bg-background">
                <div className="h-[380px] overflow-hidden rounded-2xl border border-border/50 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                    <img
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${id}.svg`}
                    alt={`Portfolio ${index + 1}`}
                    className="size-full object-cover"
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Visual Footer CTA */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center mt-12">
        <Button
            variant="outline"
            className="flex h-fit items-center gap-3 rounded-full border-2 border-foreground bg-foreground text-background px-10 py-6 text-xl font-black transition-all hover:bg-background hover:text-foreground shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] lg:text-2xl"
        >
            <span>Explore my portfolio</span>
            <ArrowUpRight className="size-8!" />
        </Button>
      </div>
    </section>
  );
};

export { Hero70 };
```
