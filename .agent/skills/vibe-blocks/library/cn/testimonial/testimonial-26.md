# Testimonial 26

## Metadata
- **Category**: Testimonial
- **Objective**: Provide an ultra-minimalist, "Focused Quote" carousel using large-scale typography and a custom background pattern, emphasizing the text above all else.
- **Use Case**: Mid-page breather sections, B2B SaaS landing pages requiring high-authority validation, or any layout where a single, unignorable endorsement is the priority.
- **Visual Style**: Clean architectural "Typographic Lead" layout featuring a centered carousel bounded to a `max-w-4xl` container. The design removes traditional cards and avatars, relying solely on a massive quote (`lg:text-4xl`), a corporate logo (`dark:invert`), and a subtle vertical separator (`w-[1px]`) before the author's name. Includes a custom `PlusSigns` SVG pattern background with dual gradient fades for depth.
- **Interactivity**: Fluid scrolling carousel (`align="center"`, `loop=true`) that requires manual user interaction. Implements an accessible tablist pattern for the bottom navigation dots, featuring subtle size/opacity transitions (`bg-muted-foreground` vs `bg-muted-foreground/20`).

## Description
Testimonial 26 is the "Authority Quote" component. It prioritizes the "Uncompromising Quality" brand archetype by stripping away standard UI elements (borders, shadows, avatars) and forcing the user's attention entirely onto what the expert is saying. The custom Plus Pattern background grounds the text, preventing the section from feeling empty while maintaining a highly technical, blueprint-like aesthetic. It is the perfect choice for showcasing endorsements from major industry figures (e.g., "Founder, Vercel" or "CTO, Figma").

## Source Code

```tsx
"use client";

import { type SVGProps, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "This platform delivers unmatched rendering speed, a hyper-flexible account framework, and an API-first FBA design. Their deep understanding of the ecosystem is elite.",
    author: "Henry Francis",
    role: "Founding Architect, Vercel",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
  },
  {
    id: 2,
    quote: "The API-first approach and robust infrastructure have completely replaced our legacy systems. The flexibility enabled us to build exactly what we need, instantly.",
    author: "David Chen",
    role: "Head of Engineering, Astro",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
  },
  {
    id: 3,
    quote: "We've exceeded all throughput expectations with this seamless integration pattern. Their powerful type-safe primitives have been instrumental in our scaling journey.",
    author: "Sarah Williams",
    role: "CTO, Figma",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
  },
  {
    id: 4,
    quote: "This architecture has revolutionized how we manage our financial infrastructure. The SSOT parameters give us the flexibility to build custom solutions effortlessly.",
    author: "Michael Ross",
    role: "CEO, Supabase",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
  },
  {
    id: 5,
    quote: "The combination of this flexible platform architecture and exceptional component design is transformative. Their reliable scalability is unmatched in the industry.",
    author: "Emily Chen",
    role: "Product Lead, Shadcn/ui",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
  },
];

interface Testimonial26Props {
  className?: string;
}

const Testimonial26 = ({ className }: Testimonial26Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("relative py-24 lg:py-40 overflow-hidden", className)}>
      <div className="container max-w-5xl relative z-20 px-4 md:px-6">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="flex cursor-grab flex-col gap-10 md:gap-16 pt-8 pb-4"
              >
                <blockquote className="pointer-events-none text-2xl font-bold tracking-tighter text-foreground text-center md:text-left leading-[1.15] select-none lg:text-5xl uppercase italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 lg:gap-8">
                  {testimonial.logo && (
                    <div className="flex items-center justify-center shrink-0">
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.author}'s company logo`}
                        className="h-8 object-contain dark:invert opacity-60 hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  
                  {/* Decorative Separator */}
                  <div className="h-[2px] w-12 md:h-12 md:w-[2px] bg-primary/20 rounded-full" aria-hidden="true" />
                  
                  <div className="text-center md:text-left space-y-1">
                    <cite className="text-lg font-bold text-foreground not-italic leading-none block">
                      {testimonial.author}
                    </cite>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 block">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Accessible Pagination */}
        <div
          className="mt-16 flex justify-center md:justify-start gap-3"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={cn(
                "size-3 cursor-pointer rounded-full transition-all duration-500",
                index === current
                  ? "bg-primary scale-125"
                  : "bg-primary/20 hover:bg-primary/50",
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === current}
              role="tab"
            />
          ))}
        </div>
      </div>

      {/* Blueprint Plus Background Layer */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 isolate z-10 h-[400px]">
        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-background via-background/60 to-transparent" />
        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
        {/* Pattern Core */}
        <PlusSigns className="size-full text-foreground/[0.03] dark:text-foreground/[0.05]" />
      </div>
    </section>
  );
};

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 24;
  const STROKE_WIDTH = 1.5;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `vibe-plus-pattern-${id}`;

  return (
    <svg width="100%" height="100%" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export { Testimonial26 };
```
