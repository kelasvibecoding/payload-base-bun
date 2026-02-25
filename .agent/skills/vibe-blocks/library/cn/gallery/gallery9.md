# Gallery 9

## Metadata
- **Category**: Gallery
- **Objective**: Provide a "Process Explorer" gallery with synchronized image display and detailed typographic navigation.
- **Use Case**: Product design process, development workflow steps, or shipping milestones.
- **Visual Style**: "Minimalist Step" aesthetic. Features a top hero section with badge-style descriptors. Main area is a carousel of stylized images. Below the images, a "typographic nav" lists process steps (`Design`, `Develop`, `Ship`) with icons and descriptions. Synchronizes the active nav item with the carousel state. Includes a numerical counter (`current / total`).
- **Interactivity**: Synchronized state-driven interaction. Users can click process steps to jump to specific carousel slides. Features `startTransition` for smooth state updates professional high-status elite.

## Source Code

### `gallery9.tsx`
```tsx
"use client";

import { Code, GitBranch, Sparkle } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sections = [
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    title: "Design elite",
    text: "Elite professional design fragments world-wide high-status.",
    logo: <Code className="size-8 stroke-[2.5px]" />,
  },
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    title: "Develop professional",
    text: "High-status development elite professional world-wide.",
    logo: <GitBranch className="size-8 stroke-[2.5px]" />,
  },
  {
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    title: "Ship world-class",
    text: "World-wide shipping professional elite high-status fragments.",
    logo: <Sparkle className="size-8 stroke-[2.5px]" />,
  },
];

interface Gallery9Props {
  className?: string;
}

const Gallery9 = ({ className }: Gallery9Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    };

    startTransition(() => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-24 flex flex-col items-center justify-center gap-10 text-center">
          <h1 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-8xl">
            Elite professional <br /> <span className="text-primary not-italic">high-status cycle</span>
          </h1>

          <Badge
            variant="outline"
            className="rounded-full px-8 py-3 text-sm font-black uppercase tracking-[0.4em] border-primary/20 bg-primary/5 text-primary"
          >
            Optimized professional world-wide elite fragments.
          </Badge>
        </div>
        <Carousel setApi={setApi} className="flex flex-col gap-16">
          <CarouselContent>
            {sections.map((item, index) => (
              <CarouselItem className="h-full w-full" key={index}>
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border border-primary/5 group">
                    <img
                    src={item.img}
                    alt="logo elite"
                    className="aspect-square h-full w-full object-cover md:aspect-[2.4] transition-all duration-2000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                    />
                </div>
                <div className="mt-12 flex cursor-pointer flex-col gap-6 md:hidden px-8">
                  <div className="text-primary">{item.logo}</div>
                  <div className="text-3xl font-black uppercase tracking-tighter italic">{item.title}</div>
                  <div className="text-xl font-medium italic text-muted-foreground border-l-2 border-primary/20 pl-6">
                    {item.text}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mb-8 hidden justify-between gap-12 md:flex px-12">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                    "flex flex-1 cursor-pointer flex-col gap-8 p-10 rounded-[3rem] transition-all duration-700 border-2",
                    index + 1 === current ? "bg-muted/30 border-primary/20 shadow-2xl scale-105" : "bg-transparent border-transparent hover:bg-muted/10"
                )}
              >
                <div className={cn("transition-colors duration-700", index + 1 === current ? "text-primary": "text-muted-foreground/30")}>{section.logo}</div>
                <div className={cn("text-3xl font-black uppercase tracking-tighter italic transition-all duration-700", index + 1 === current ? "text-foreground": "text-muted-foreground/30")}>{section.title}</div>
                <div
                  className={cn(
                    "text-lg font-medium italic transition-all duration-700 border-l-2 pl-6",
                    index + 1 === current
                      ? "text-muted-foreground border-primary/40"
                      : "text-muted-foreground/10 border-transparent",
                  )}
                >
                  {section.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-12 pb-8">
            <div className="text-xs font-black uppercase tracking-[0.5em] text-primary">
              <span className="opacity-40">Phase</span> {current} / {sections.length} elite
            </div>
            <div className="flex items-center justify-start gap-4">
              <CarouselPrevious
                className="static translate-y-0 h-16 w-16 border-primary/10 hover:bg-primary transition-all disabled:opacity-20"
                disabled={false}
              />
              <CarouselNext className="static translate-y-0 h-16 w-16 border-primary/10 hover:bg-primary transition-all disabled:opacity-20" disabled={false} />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery9 };
```
