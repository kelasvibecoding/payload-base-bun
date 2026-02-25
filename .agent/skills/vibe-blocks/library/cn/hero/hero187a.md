# Hero 187a

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered introduction for modern software products, pairing a centered typography block with high-fidelity "Feature-Insight" buckets and a prominent project carousel.
- **Use Case**: Best for software-as-a-service (SaaS) platforms, product management tools (e.g., "Shadcnblocks for your next project"), or developer tools that want to emphasize "Streamlining planning" and "Tailored workflows."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout beginning with a prominent project-preview carousel positioned at the top Utilizing `Autoplay` and `CarouselApi` to drive categorical narrative storytelling. Matrix uses specialized `SlideIndicator` indexing Pairing a textual status label ("Issues") with precise numerical progress. The typography section is anchored by a high-impact heading block paired with categorical "Feature" buckets Utilizing high-fidelity icons anchored by centered descriptive content. Layout uses specialized `rounded-2xl` corners to create a high-fidelity blueprint visual context.
- **Interactivity**: High engagement through automation. Features automated `Autoplay` carousel logic and high-fidelity project preview layering to drive professional trust and enrollment.

## Source Code

### `hero187a.tsx`
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

const Hero187a = () => {
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
        
        {/* Dynamic Carousel Section (Top) side */}
        <div className="relative mb-24 lg:mb-32 group/carousel">
          {/* Atmos Depth layer side */}
          <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <Carousel
            className="mx-auto max-w-[85rem]"
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
                        className="h-[400px] w-full rounded-2xl object-cover grayscale opacity-80 transition-all duration-1000 sm:h-[600px] lg:h-[800px] hover:grayscale-0 hover:opacity-100"
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
            className="mt-12"
            api={api}
          />
        </div>

        {/* Narrative Narrative Content Section (Bottom) side */}
        <div className="flex flex-col gap-20 lg:gap-32 text-center text-pretty">
          <div className="mx-auto max-w-[70rem] flex flex-col gap-12">
            <h1 className="text-6xl font-black lg:text-[9rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                World-class <span className="text-primary italic">Planning</span> for elite projects.
            </h1>

            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Streamline is the fit-for-purpose tool for planning world-class 
                software products for high-status professional builders.
            </p>
          </div>

          {/* Specialized Insight Matrix side */}
          <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-8 group/item translate-y-0 hover:-translate-y-4 transition-transform duration-500">
                    <div className="flex size-16 lg:size-20 rounded-[2rem] bg-primary/5 border-2 border-primary/10 shadow-sm transition-colors group-hover/item:bg-primary">
                        <Icon className="m-auto size-8 lg:size-10 text-primary group-hover/item:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-black text-foreground uppercase tracking-tighter transition-colors group-hover/item:text-primary leading-none">
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

          <div className="flex flex-wrap items-center justify-center gap-8 group/buttons">
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

export { Hero187a };
```
