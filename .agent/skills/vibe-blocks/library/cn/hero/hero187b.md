# Hero 187b

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for modern software products, pairing a split-column layout with high-fidelity "Feature-Insight" lists and a prominent automated carousel.
- **Use Case**: Best for software-as-a-service (SaaS) platforms, product management tools (e.g., "Shadcnblocks for your next project"), or developer tools that want to emphasize "Streamlining planning" and "Tailored workflows."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a split-column layout starting with a prominent project-preview carousel on the left Utilizing `Autoplay` and `CarouselApi` to drive categorical narrative storytelling. Matrix uses specialized `SlideIndicator` indexing Pairing a textual status label ("Issues") with precise numerical progress. The typography section is anchored by a high-impact heading block on the right paired with categorical "Feature" list items Utilizing high-fidelity icons anchored by descriptive content. Layout uses specialized `rounded-2xl` corners to create a high-fidelity blueprint visual context.
- **Interactivity**: High engagement through automation. Features automated `Autoplay` carousel logic and high-fidelity project preview layering to drive professional trust and enrollment.

## Source Code

### `hero187b.tsx`
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

const Hero187b = () => {
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
    <section className="relative overflow-hidden py-20 lg:py-40 bg-background font-sans border-b">
      <div className="container relative z-10 px-6 max-w-[100rem]">
        <div className="grid gap-20 lg:grid-cols-[1.3fr_1fr] lg:gap-32 items-center">
          
          {/* Unique "Dynamic Interface Carousel" Visual Anchor side (Left) */}
          <div className="relative order-2 lg:order-1 group/carousel">
            {/* Atmos Depth layer side */}
            <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <Carousel
              className="size-full"
              setApi={setApi}
              opts={{
                loop: true,
              }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {SLIDES.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 hover:scale-[1.02]">
                        <img
                        src={slide.image}
                        alt={`Streamline product interface focus ${slide.label}`}
                        className="h-[450px] w-full rounded-2xl object-cover grayscale opacity-80 transition-all duration-1000 lg:h-[800px] hover:grayscale-0 hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <SlideIndicator
              currentSlide={currentSlide}
              slides={SLIDES}
              className="mt-12 lg:hidden"
              api={api}
            />
          </div>

          {/* Narrative Narrative Content side (Right) */}
          <div className="order-1 flex flex-col gap-12 lg:order-2 lg:gap-16">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Elite <span className="text-primary italic">Planning</span> for world-class products.
              </h1>

              <p className="max-w-[35rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Streamline is the fit-for-status tool for planning world-class 
                software products for high-status builders.
              </p>
            </div>

            {/* Specialized Merit Matrix side */}
            <div className="flex flex-col gap-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-8 group/item translate-x-0 hover:translate-x-4 transition-transform duration-500">
                    <div className="flex size-14 lg:size-16 shrink-0 rounded-[1.5rem] bg-primary/5 border-2 border-primary/10 shadow-sm transition-colors group-hover/item:bg-primary">
                      <Icon className="m-auto size-6 lg:size-8 text-primary group-hover/item:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-lg lg:text-2xl font-black text-foreground uppercase tracking-tighter transition-colors group-hover/item:text-primary leading-none mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-base lg:text-lg font-medium text-muted-foreground italic leading-tight">
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
              <a href="#">
                <Button variant="secondary" size="lg" className="h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none">
                  <span className="flex items-center gap-6">
                    Documentation
                    <ArrowRight className="size-6 transition-transform group-hover/buttons:translate-x-2" strokeWidth={3} />
                  </span>
                </Button>
              </a>
            </div>

            <SlideIndicator
              currentSlide={currentSlide}
              slides={SLIDES}
              className="max-lg:hidden"
              api={api}
            />
          </div>
        </div>
      </div>
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
      className={cn("flex flex-col items-start gap-6 font-medium", className)}
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

export { Hero187b };
```
