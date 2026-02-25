# Testimonial 14

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a minimalist, "Large Typography" Carousel featuring custom dot-navigation for a clean, paginated discovery experience.
- **Use Case**: Primary testimonial highlights on homepages, story-driven mid-page content blocks, or clean validation sections in minimalist portfolios.
- **Visual Style**: Ultra-clean "Large Quote" architecture featuring centered typography (lg-3xl) and a primary focal avatar (size-12 to size-24). Utilizes a custom dot-navigation row at the bottom where each index is a ghost button with a reactive dot state (`bg-primary` vs `bg-input`).
- **Interactivity**: Fully controlled Shadcn Carousel using the `setApi` state hook. Features bi-directional animation and manual pagination via the bottom dot-triggers.

## Description
Testimonial 14 is the "Paginated Spotlight" component. It prioritizes the "Human-First" brand archetype by providing a breathable, distraction-free interface for reading individual customer stories. The use of large-scale avatars and quotes makes each testimonial feel like a personal recommendation, while the custom dot navigation provides a familiar, intuitive way to explore multiple entries. It is the ideal choice for brands that want to showcase 3-5 high-impact testimonials with absolute clarity.

## Source Code

```tsx
"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "The architectural depth of this framework has allowed our team to deliver hyper-optimized production interfaces with record-breaking speed. It's the most stable foundation we've integrated.",
    name: "Sarah Montgomery",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "Zero hydration errors. Perfectly optimized Zero-JS shells. This is the gold standard for full-stack application development in the Payload ecosystem.",
    name: "Alex Morgan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    id: "testimonial-3",
    text: "Finally, a framework that respects the nuance of typography and motion. Designing for this system has been the most creative phase of my career.",
    name: "John Doe",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
];

interface Testimonial14Props {
  className?: string;
}

const Testimonial14 = ({ className }: Testimonial14Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("py-24 md:py-32 bg-accent/10", className)}>
      <div className="container px-4 md:px-6">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col items-center text-center space-y-10">
                  <p className="max-w-4xl text-2xl font-bold tracking-tight text-foreground md:px-8 lg:text-4xl leading-tight italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="size-16 md:size-24 border-4 border-background shadow-2xl transition-transform hover:scale-110 duration-500">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="font-bold bg-muted">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-foreground leading-none">
                        {testimonial.name}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 italic">
                        Verified Network Innovator
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Custom Dot Navigation */}
        <div className="flex justify-center mt-16 gap-2">
          {testimonials.map((testimonial, index) => (
            <Button
              key={testimonial.id}
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div
                className={cn(
                    "size-2.5 rounded-full transition-all duration-300",
                    index === current ? "bg-primary scale-125" : "bg-primary/20"
                )}
              />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial14 };
```
