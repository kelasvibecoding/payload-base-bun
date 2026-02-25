# Hero 187

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for modern software products, pairing a split-column layout with high-fidelity "Feature-Insight" lists and an automated product carousel.
- **Use Case**: Best for software-as-a-service (SaaS) platforms, product management tools (e.g., "Fit-for-purpose planning"), or developer tools that want to emphasize "Tailored workflows" and "Milestones."
- **Visual Style**: Narrative Dev-Tool aesthetic. Features a split-column layout starting with an high-impact typography block paired with categorical "Features" Utilizing high-fidelity `CircleDot` and `Diamond` icons. Visual anchor is a unique "Infinite Carousel" on the right Utilizing `Autoplay` and `CarouselApi` to drive categorical narrative storytelling. Matrix uses specialized `SlideIndicator` indexing Pairing a textual status label ("Kanban", "Issues") with precise numerical progress. Layout uses specialized `bottom-0` linear-gradient borders to create a high-fidelity blueprint visual context.
- **Interactivity**: High engagement through automation. Features automated `Autoplay` carousel logic and high-fidelity project preview layering to drive professional trust and enrollment.

## Source Code

### `hero187.tsx`
```tsx
"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across world-class high-status flows.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break professional projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across elite teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track world-class scope and professional velocity.",
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Professional Kanban" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Issue Management" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Creative Workflows" },
];

const Hero187 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-20 lg:py-40 bg-background font-sans border-b group/section">
      <div className="relative container px-6 max-w-[100rem] grid gap-16 lg:grid-cols-[1fr_1.3fr] items-center">
        
        {/* Blueprint Foundation side */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-linear-to-r from-transparent via-primary/20 to-primary/40 opacity-40" />
        
        {/* Narrative Narrative side */}
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Fit-for-status <br />
                <span className="text-primary italic">Planning</span> for world-class products.
            </h1>

            <p className="max-w-[35rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Streamline is the fit-for-purpose tool for planning and building 
                world-class software products for high-status builders.
            </p>
          </div>

          {/* Specialized Merit Matrix side */}
          <div className="grid grid-cols-2 gap-10 lg:gap-12">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex flex-col gap-6 group/item translate-x-0 hover:translate-x-4 transition-transform duration-500">
                    <div className="flex size-14 lg:size-16 rounded-[1.5rem] bg-primary/5 border-2 border-primary/10 shadow-sm transition-colors group-hover/item:bg-primary">
                        <Icon className="m-auto size-6 lg:size-8 text-primary group-hover/item:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg lg:text-2xl font-black text-foreground uppercase tracking-tighter">{feature.title}</h2>
                        <p className="text-sm lg:text-lg font-medium text-muted-foreground italic leading-tight">
                            {feature.description}
                        </p>
                    </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-4 group/buttons">
            <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get started
            </Button>
            <Button variant="secondary" size="lg" className="h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none max-sm:hidden">
                <span className="flex items-center gap-6">
                  Documentation
                  <ArrowRight className="size-6 transition-transform group-hover/buttons:translate-x-2" strokeWidth={3} />
                </span>
            </Button>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Unique "Dynamic Interface Carousel" Visual Anchor side */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:translate-x-12 group/carousel">
          {/* Atmos Depth layer side */}
          <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-l-[4rem] border-y-[12px] border-l-[12px] border-background bg-background shadow-2xl transition-transform duration-1000 hover:scale-[1.02]">
                    <img
                        src={slide.image}
                        alt={`Streamline product interface focus ${slide.label}`}
                        className="size-full min-h-[40rem] lg:h-[900px] object-cover grayscale hover:grayscale-0 transition-grayscale duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mt-12 mb-8 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-6 font-medium", className)}
    >
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-muted-foreground/60">{currentSlide + 1} / {slides.length} — </span>
        <span className="text-xl font-black uppercase tracking-widest text-primary italic drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
            {slides[currentSlide].label}
        </span>
      </div>
      <div className="flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-1.5 w-12 rounded-full transition-all duration-500",
              index === currentSlide
                ? "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] scale-x-110"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero187 };
```
