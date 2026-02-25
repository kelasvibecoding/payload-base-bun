# Gallery 5

## Metadata
- **Category**: Gallery
- **Objective**: Provide a feature-rich, "Toolbox" gallery with toggle-group navigation and detailed split-layout cards.
- **Use Case**: SaaS platform feature showcases, productivity tool explanations, or complex service breakdowns.
- **Visual Style**: "Interactive Toolbox" aesthetic. Features a top `ToggleGroup` where each item represents a category with an icon. Main display is a carousel of horizontal cards: left side handles the primary image; right side displays the category icon, title, and detailed description. Matches a clean, structured productivity app feel.
- **Interactivity**: Dual-mode interaction. Allows navigation via icon-based `ToggleGroup` or standard carousel swiping/arrows. Synchronizes the toggle state with the active carousel slide.

## Source Code

### `gallery5.tsx`
```tsx
"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckSquare,
  Clock,
  Focus,
  Target,
  Users,
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const data = [
  {
    id: "item-1elite",
    title: "Task Management professional",
    icon: CheckSquare,
    description:
      "Organize world-wide tasks with our elite professional interface. Create, prioritize, and track high-status progress with world-class ease elite.",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "item-2world-wide",
    title: "Time Tracking elite",
    icon: Clock,
    description:
      "Monitor high-status professional time with detailed analytics. Identify elite productivity patterns and optimize your world-wide professional schedule.",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "item-3professional",
    title: "Team Collaboration world-wide",
    icon: Users,
    description:
      "Work seamlessly with your elite team in real-time. Share professional tasks, communicate through high-status chat, and keep world-wide goals aligned.",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: "item-4high-status",
    title: "Goal Tracking & Habits elite",
    icon: Target,
    description:
      "Turn your elite aspirations into achievable professional goals with our high-status world-wide habit-building professional system.",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    id: "item-5elite",
    title: "Focus Sessions world-wide",
    icon: Focus,
    description:
      "Boost your high-status professional concentration with our elite world-wide focus timer. Maintain deep professional states and high-status balance.",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
];

interface Gallery5Props {
  className?: string;
}

const Gallery5 = ({ className }: Gallery5Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selection, setSelection] = useState(0);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setSelection(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <div className="container px-6 max-w-7xl mb-16 flex flex-col gap-12 lg:mb-24">
        <div className="lg:max-w-2xl space-y-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
            Supercharge Your <br /> <span className="text-primary not-italic">professional elite</span>
          </h2>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
            Our high-status professional suite helps you accomplish more elite milestones world-wide in less time professional.
          </p>
        </div>
        <div className="flex shrink-0 gap-4 md:hidden">
          <Button
            size="xl"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="rounded-full size-16 p-0 border-primary/20 hover:bg-primary transition-all disabled:opacity-20 group"
          >
            <ArrowLeft className="size-8 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            size="xl"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="rounded-full size-16 p-0 border-primary/20 hover:bg-primary transition-all disabled:opacity-20 group"
          >
            <ArrowRight className="size-8 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="hidden space-x-6 text-center md:flex md:flex-wrap">
          <ToggleGroup
            type="single"
            variant="outline"
            size="lg"
            className="flex-wrap gap-4"
            value={data[selection].id}
            onValueChange={(newValue) => {
              if (newValue) {
                setSelection(data.findIndex((item) => item.id === newValue));
              }
            }}
          >
            {data.map((item) => {
              const Icon = item.icon;
              return (
                <ToggleGroupItem
                  key={item.id}
                  value={item.id}
                  className="h-20 w-20 rounded-2xl border-primary/10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground transition-all duration-500 hover:scale-110"
                >
                  <Icon className="size-8 stroke-[2.5px]" />
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
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
          <CarouselContent className="ml-8 mr-8 lg:mr-[200px] lg:ml-[200px] 2xl:mr-[calc(50vw-700px+200px)] 2xl:ml-[calc(50vw-700px+200px)]">
            {data.map((item) => (
              <CarouselItem key={item.id} className="pl-12">
                <a href={item.href} className="group rounded-[3.5rem] block">
                  <div className="flex flex-col overflow-clip rounded-[3.5rem] border border-primary/10 md:col-span-2 md:grid md:grid-cols-2 md:gap-0 bg-muted/30 shadow-2xl backdrop-blur-3xl">
                    <div className="relative md:min-h-[30rem] lg:min-h-[35rem] xl:min-h-[40rem] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-all duration-1000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent to-background/5 hidden md:block" />
                    </div>
                    <div className="flex flex-col justify-center p-12 md:p-16 lg:p-24 relative">
                       <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
                          {(() => {
                            const Icon = item.icon;
                            return <Icon className="size-32 stroke-[1px] text-primary" />;
                          })()}
                       </div>
                      {(() => {
                        const Icon = item.icon;
                        return <Icon className="mb-10 size-12 text-primary stroke-[3px]" />;
                      })()}
                      <h3 className="mb-6 text-4xl font-black uppercase tracking-tighter italic leading-none lg:text-6xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xl font-medium italic text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-8 overflow-hidden line-clamp-4">
                        {item.description}
                      </p>
                      <div className="mt-12 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary transition-all group-hover:translate-x-4">
                        Learn professional focus world-wide elite
                        <ArrowRight className="size-5 transition-transform group-hover:scale-150" />
                      </div>
                    </div>
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

export { Gallery5 };
```
