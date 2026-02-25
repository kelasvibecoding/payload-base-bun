# Testimonial 7

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a dynamic, "Perpetual Social Motion" section featuring dual auto-scrolling card carousels that move in opposite directions.
- **Use Case**: High-energy landing pages, "Trusted By" sections for consumer apps, or background sections in community portals where a sense of constant activity is desired.
- **Visual Style**: Kinetic "Auto-Scroll" architecture featuring two parallel rows of testimonial cards. Cards are optimized for high-density information (Avatar, Name, Role, Quote). Uses the `embla-carousel-auto-scroll` plugin to provide butter-smooth perpetual motion without user interaction.
- **Interactivity**: Automatic bi-directional scrolling (forward/backward) with "Pause-on-Interaction" logic enabled. Cards use a custom `basis-auto` for variable content widths and `select-none` for touch-friendly scrolling.

## Description
Testimonial 7 is the "Activity Stream" component. It prioritizes the "Living Ecosystem" brand archetype by providing a visual representation of constant, ongoing customer satisfaction. The use of bi-directional auto-scrolling creates a parallax-like focal interest that keeps the user's eye moving across the section. This is the most effective choice for high-traction platforms that want to demonstrate they are "Always Active" and supported by a diverse, vocal community of happy users.

## Source Code

```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials1 = [
  {
    name: "John Doe",
    role: "Director of Product",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "The engineering speed we achieved with this system is simply unprecedented.",
  },
  {
    name: "Jane Doe",
    role: "Engineering Manager",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Highest DX I've experienced in a production environment in the last decade.",
  },
  {
    name: "John Smith",
    role: "UI Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Clean code primitives that actually scale without technical debt. World-class.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Modular architectural design that makes complex features feel simple to implement.",
  },
  {
    name: "Richard Doe",
    role: "Senior Designer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "A framework that finally understands the relationship between design fidelity and code.",
  },
  {
    name: "Gordon Doe",
    role: "Core Developer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "The stability provided by these structural patterns has reduced our bug count by 60%.",
  },
];

const testimonials2 = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/Elegant%20Woman%20Portrait.png",
    content: "Building on this foundation was the best creative decision we made this year.",
  },
  {
    name: "Alex Morgan",
    role: "Staff Engineer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    content: "Finally, a system that prioritizes 100/100 performance while maintaining rich UX.",
  },
  {
    name: "Marcus Aurelius",
    role: "Platform Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    content: "The best architectural investment for any team scaling their digital presence.",
  },
  {
      name: "Riley Smith",
      role: "Lead UI",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
      content: "Immersive animations and Zero-JS shells. This is the future of web dev.",
  },
  {
      name: "Taylor Doe",
      role: "Product Lead",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      content: "The speed of integration for these blocks across our ecosystem was remarkable.",
  },
  {
      name: "Jordan Lee",
      role: "CTO",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      content: "Production-ready components that don't sacrifice flexibility or performance.",
  },
];

interface Testimonial7Props {
  className?: string;
}

const Testimonial7 = ({ className }: Testimonial7Props) => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.8,
    }),
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.8,
      direction: "backward",
    }),
  );

  return (
    <section className={cn("py-24 lg:py-32 overflow-hidden", className)}>
      <div className="container flex flex-col items-center gap-6 mb-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-6xl uppercase">
                Validated by Innovators
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/70">
                Join 1000+ happy clients in the network
            </p>
          </div>
          <Button className="h-14 rounded-2xl px-10 font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Secure Early Access
          </Button>
      </div>

      <div className="w-full space-y-6">
          {/* Forward Rolling Carousel */}
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin1.current]}
            onMouseEnter={() => plugin1.current.stop()}
            onMouseLeave={() => plugin1.current.play()}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-center">
              {testimonials1.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-auto">
                  <Card className="w-72 md:w-96 border border-border/50 bg-card/10 p-8 select-none rounded-[2rem] hover:bg-card/40 transition-colors shadow-xl shadow-black/5">
                    <div className="mb-6 flex items-center gap-4">
                      <Avatar className="size-10 border-2 border-background shadow-lg">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-bold text-foreground leading-none">{testimonial.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q className="text-sm font-medium italic text-muted-foreground leading-relaxed">&ldquo;{testimonial.content}&rdquo;</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Backward Rolling Carousel */}
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin2.current]}
            onMouseEnter={() => plugin2.current.stop()}
            onMouseLeave={() => plugin2.current.play()}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-center">
              {testimonials2.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-auto">
                  <Card className="w-72 md:w-96 border border-border/50 bg-card/10 p-8 select-none rounded-[2rem] hover:bg-card/40 transition-colors shadow-xl shadow-black/5">
                    <div className="mb-6 flex items-center gap-4">
                      <Avatar className="size-10 border-2 border-background shadow-lg text-primary">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-bold text-foreground leading-none">{testimonial.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q className="text-sm font-medium italic text-muted-foreground leading-relaxed">&ldquo;{testimonial.content}&rdquo;</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
      </div>
    </section>
  );
};

export { Testimonial7 };
```
