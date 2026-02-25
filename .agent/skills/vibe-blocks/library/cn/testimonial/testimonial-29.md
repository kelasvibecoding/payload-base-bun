# Testimonial 29

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a highly focused, automated "Voice Spotlight" carousel that places maximum visual weight on the user's portrait and single-sentence endorsement.
- **Use Case**: Post-hero validation, simple landing page breaks, or sections where qualitative "Vibe" and aesthetic polish are more important than dense, detailed case studies.
- **Visual Style**: Circular "Lens Focus" architecture. Eliminates standard card boundaries (`border-none shadow-none`) to let the content float directly on the background. The focal point is a massive, drop-shadowed Avatar container (`size-30 rounded-3xl`). Text is centered, utilizing a `text-6xl font-bold` section header and a large, tracking-tight quote.
- **Interactivity**: Powered by `embla-carousel-autoplay` for hands-free scrolling (`delay: 2000`). Features a custom animated dot pagination system where the active dot smoothly expands (`w-10 bg-foreground`).

## Description
Testimonial 29 is the "Cinematic Spotlight" component. It prioritizes the "Personal Connection" brand archetype by blowing up the user's avatar to an almost uncomfortable size, forcing direct eye-contact with the prospective buyer. The layout is unapologetically minimal, stripping away corporate logos and timestamps to focus purely on the face, the name, and the quote. It is highly effective for B2C products, creator-led brands, or any platform where the "Who" matters as much as the "What".

## Source Code

```tsx
"use client";

import AutoPlay from "embla-carousel-autoplay";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial29Props {
  className?: string;
}

const Testimonial29 = ({ className }: Testimonial29Props) => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Creative Director @shadcn_blocks",
      quote:
        '"This modular system has completely changed how we approach prototyping. We go from idea to production-ready UI in a matter of hours."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
    {
      name: "Sarah Johnson",
      role: "Product Designer @shadcn_design",
      quote:
        '"The attention to detail in the Tailwind configurations and standard Shadcn components is unparalleled. It feels like magic."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer @shadcn_dev",
      quote:
        '"Zero hydration errors. Perfect accessibility out of the box. It is the architectural baseline we have been searching for."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      name: "Emily Williams",
      role: "UI/UX Lead @shadcn_ui",
      quote:
        '"The fluid typography and constrained spacing scales make it almost impossible to design a bad looking page. Incredible work."',
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={cn("bg-background py-24 lg:py-32", className)}>
      <div className="container flex flex-col items-center justify-center px-4 md:px-6">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tighter text-foreground lg:text-6xl uppercase">
          Creator Spotlight
        </h2>
        <p className="text-muted-foreground font-medium text-lg text-center max-w-xl mb-12">
          Hear directly from the designers and developers building the future of the web.
        </p>

        <Carousel
          className="mx-auto w-full max-w-4xl"
          opts={{
            loop: true,
          }}
          plugins={[AutoPlay({ playOnInit: true, delay: 4000 })]}
          setApi={(api) => {
            if (api) {
              api.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex flex-col items-center select-none pt-4">
                <div className="flex w-full flex-col items-center gap-10">
                  
                  {/* Avatar Lens */}
                  <div className="relative flex size-32 items-center justify-center rounded-[2.5rem] bg-foreground/5 p-3 shadow-2xl shadow-black/10">
                    <div className="flex size-full items-center justify-center rounded-3xl bg-background p-2 shadow-inner">
                      <Avatar className="size-full rounded-2xl">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover rounded-2xl"
                        />
                        <AvatarFallback className="text-2xl font-bold bg-muted rounded-2xl">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Core Content */}
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0 flex flex-col items-center gap-8">
                      <blockquote className="text-center text-2xl font-medium tracking-tight text-foreground md:text-4xl italic max-w-3xl leading-snug">
                        {testimonial.quote}
                      </blockquote>
                      
                      <div className="flex flex-col items-center space-y-1">
                        <cite className="text-xl font-bold tracking-tight text-foreground not-italic">
                          {testimonial.name}
                        </cite>
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Animated Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-full">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial29 };
```
