# Testimonial 19

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a kinetic, "Infinite Trust" auto-scrolling row featuring edge-to-edge content and internal 5-star validation for each entry.
- **Use Case**: Mid-page background sections, "Always-on" social proof blocks, or landing pages requiring a sense of voluminous user satisfaction.
- **Visual Style**: Cinematic "Rolling Gallery" architecture featuring a single row of cards that auto-scroll perpetually. Utilizes a "Dual-Fade Mask" (bg-linear-to-r and bg-linear-to-l from background) on the left and right edges to create a seamless infinite loop effect. Each card features a dual-header (Left: Author identity, Right: 5-star rating) followed by the quote content.
- **Interactivity**: Fully automated kinetic scrolling using the `embla-carousel-auto-scroll` plugin. Features responsive basis-switching and "Pause-on-Interaction" logic.

## Description
Testimonial 19 is the "Flowing Validation" component. It prioritizes the "Unstoppable Momentum" brand archetype by providing a visual representation of a never-ending stream of happy customers. The edge-to-edge scrolling paired with the sophisticated fade masks creates an immersive, cinematic experience that suggests the platform is supported by an immense, global community. This is the ideal choice for brands that want to demonstrate "Mass Market Trust" in a high-density, low-friction interface.

## Source Code

```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "This architectural framework has revolutionized the way we manage infrastructure. User-friendly and elite.",
  },
  {
    name: "David Lee",
    role: "CTO @ TechFlow",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Seamless integration and functionality. It has made our global operations much smoother.",
  },
  {
    name: "Mark Thompson",
    role: "COO @ LogicGate",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Managing 100+ production repos has never been easier. The interface is simply intuitive.",
  },
  {
    name: "Emily Carter",
    role: "Systems Designer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "The primitives provided have significantly improved our team’s architectural velocity. 10/10.",
  },
  {
    name: "Sophia Turner",
    role: "UI Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Flexibility and ease of use are outstanding. Indispensable for high-fidelity system design.",
  },
  {
    name: "James Wilson",
    role: "Founding Engineer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Robust features combined with minimalist simplicity. Streamlined our entire DX ecosystem.",
  },
];

interface Testimonial19Props {
  className?: string;
}

const Testimonial19 = ({ className }: Testimonial19Props) => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.8,
    }),
  );

  return (
    <section className={cn("py-24 lg:py-32 overflow-hidden", className)}>
      <div className="container px-4 md:px-6 flex flex-col items-center gap-6 mb-16">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
          <Zap className="size-4 fill-primary" />
          Validated by 1k+ production environments
        </div>
        <h2 className="text-3xl font-bold tracking-tighter text-foreground lg:text-6xl uppercase leading-none text-center">
            The Flow of Trust
        </h2>
        <a href="#" className="group flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">
          Explore all stories
          <ChevronRight className="h-4 w-auto transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      
      <div className="w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent"
          >
            <CarouselContent className="flex items-center">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto pl-6">
                  <Card className="w-80 md:w-96 border border-border/50 bg-card/10 p-8 select-none rounded-[2rem] hover:bg-card transition-all shadow-xl shadow-black/5 group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4">
                        <Avatar className="size-11 border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-foreground leading-none">{testimonial.name}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mt-1.5">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 pt-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="size-3 fill-amber-500 text-amber-500" />)}
                      </div>
                    </div>
                    <q className="leading-relaxed text-muted-foreground font-medium italic italic text-sm">
                      &ldquo;{testimonial.content}&rdquo;
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
      </div>
    </section>
  );
};

export { Testimonial19 };
```
