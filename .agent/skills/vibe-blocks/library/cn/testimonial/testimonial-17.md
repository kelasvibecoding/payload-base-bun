# Testimonial 17

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a "Hybrid Layout" testimonial section that utilizes individual cards for desktop and a paginated carousel for mobile to optimize information density.
- **Use Case**: Enterprise landing pages where "Team Adoption" stories are the focus, or "Trusted By" sections on products targeting complex organizations.
- **Visual Style**: Clean architectural "Grid-to-Carousel" architecture featuring a 3-column desktop grid where the first column is a focal title and the remaining two are high-fidelity cards. On mobile, the cards collapse into a Shadcn Carousel with custom dot pagination. Features integrated corporate logos (e.g., Shadcn, Next.js, Tailwind) inside each testimonial card for brand association.
- **Interactivity**: Fully reactive custom pagination state (`current`, `count`) using the `setApi` hook. Features manual dot-triggers and responsive display switching (`lg:hidden` vs `lg:block`).

## Description
Testimonial 17 is the "Architectural Trust" component. It prioritizes the "Systemic Adoption" brand archetype by providing a layout that emphasizes *teams* rather than just *individuals*. The integration of toolchain logos (Next.js, Tailwind) directly into the testimonial cards creates a powerful mental link between the product and the developer ecosystem it supports. It is the most effective choice for high-fidelity marketing pages that target technical decision-makers and engineering leads.

## Source Code

```tsx
"use client";

import { startTransition, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Montgomery",
    role: "Head of Product",
    company: "@SystemsLab",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Our product team has seen an incredible boost in velocity since adopting this Vibe architectural baseline. It is fundamentally a game-changer.",
  },
  {
    name: "David Parker",
    role: "CTO",
    company: "@NextCore",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "This toolchain has streamlined our delivery pipeline and improved cross-functional collaboration like never before. Performance is now our default.",
  },
  {
    name: "Maria Gonzalez",
    role: "Lead Systems Developer",
    company: "@TailwindLabs",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-black.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "We have reduced our development cycles by 33% thanks to the structural efficiency this system brings to our complex frontend environment.",
  },
];

interface Testimonial17Props {
  className?: string;
}

const Testimonial17 = ({ className }: Testimonial17Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    startTransition(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    });
  }, [api]);

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Section Header */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground lg:text-6xl uppercase leading-none">
                Teams Thriving in Scale
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/70">
                Validated by the world&apos;s most selective architects
            </p>
          </div>

          {/* Mobile Display: Carousel */}
          <Carousel setApi={setApi} className="w-full lg:hidden" opts={{ loop: true }}>
            <CarouselContent>
                {testimonials.map((t, i) => (
                    <CarouselItem key={i}>
                        <div className="rounded-[2rem] border border-border/50 bg-card/30 p-10 select-none shadow-xl shadow-black/5">
                        <img
                            src={t.logo}
                            alt="Verification Logo"
                            className="mb-8 h-6 dark:invert opacity-60"
                        />
                        <p className="mb-10 text-xl font-bold italic tracking-tight text-foreground/80 leading-relaxed">
                            &ldquo;{t.content}&rdquo;
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <Avatar className="size-12 border-2 border-background shadow-lg">
                            <AvatarImage src={t.avatar} alt={t.name} />
                            </Avatar>
                            <div>
                            <p className="font-bold text-foreground leading-none">{t.name}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">
                                {t.role}
                            </p>
                            </div>
                        </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block size-3 cursor-pointer rounded-full border-2 transition-all duration-300",
                    index + 1 === current ? "border-primary bg-primary scale-125" : "border-primary/20 bg-transparent",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>

          {/* Desktop Display: Static Layout Cards */}
          <div className="col-span-2 hidden grid-cols-2 items-stretch gap-8 lg:grid">
            <div className="rounded-[2.5rem] border border-border/50 bg-card/30 p-12 shadow-2xl shadow-black/5 transition-all hover:bg-card/50 hover:border-primary/20 group">
              <img
                src={testimonials[0].logo}
                alt="Partner Logo"
                className="mb-10 h-7 dark:invert opacity-40 transition-opacity group-hover:opacity-100"
              />
              <p className="mb-12 text-2xl font-bold italic text-foreground/90 leading-snug">
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <div className="flex items-center gap-5">
                <Avatar className="size-14 border-2 border-background shadow-xl transition-transform group-hover:scale-110">
                  <AvatarImage src={testimonials[0].avatar} alt="Identity" />
                </Avatar>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-foreground leading-none">{testimonials[0].name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              {[1, 2].map((idx) => (
                <div key={idx} className="rounded-[2.5rem] border border-border/50 bg-card/20 p-10 hover:bg-card/40 transition-all group">
                    <img
                    src={testimonials[idx].logo}
                    alt="Partner Logo"
                    className="mb-6 h-5 dark:invert opacity-40 group-hover:opacity-100 transition-opacity"
                    />
                    <p className="mb-8 text-lg font-bold italic text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                    &ldquo;{testimonials[idx].content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                    <Avatar className="size-11 border-2 border-background shadow-lg">
                        <AvatarImage src={testimonials[idx].avatar} alt="Identity" />
                    </Avatar>
                    <div>
                        <p className="text-sm font-bold text-foreground leading-none">{testimonials[idx].name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mt-1">
                        {testimonials[idx].role}
                        </p>
                    </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial17 };
```
