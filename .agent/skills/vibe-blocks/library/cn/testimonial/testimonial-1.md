# Testimonial 1

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a high-density "Social Proof Wall" featuring a responsive masonry grid for large screens and a compact carousel for mobile devices.
- **Use Case**: Landing pages, "Customer Stories" sections, or trust-building sections in enterprise SaaS sites where showcasing a high volume of positive feedback is critical.
- **Visual Style**: Clean architectural layout with a dual-modal display (Masonry/Carousel). Features standard Shadcn Cards with internal quotes, author avatars, roles, and integrated call-to-action buttons (Primary/Secondary) in the section header. Utilizing a subtle bottom-border and Badge-driven categorisation ("Testimonials").
- **Interactivity**: Fully responsive masonry engine (4-column on desktop) and a mobile-optimized Shadcn Carousel with previous/next navigation triggers.

## Description
Testimonial 1 is the "Volume Proof" component. It prioritizes the "Collective Trust" brand archetype by providing a seamless transition between a high-density desktop grid and an efficient mobile slider. The use of the Masonry pattern (with staggered offsets) creates a dynamic, magazine-style aesthetic that makes long-form feedback feel digestible and visually interesting. It is the ideal choice for brands that have a significant library of user stories and want to display "1000+ happy clients" in a single organized viewport.

## Source Code

```tsx
"use client";

import { Globe } from "lucide-react";
import Masonry from "react-responsive-masonry";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Building with this architecture has fundamentally changed our delivery speed. The modularity and clean separation of concerns allow our team to scale features without the typical technical debt overhead.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "The performance metrics speak for themselves. We've seen a 40% reduction in TBT since moving to this Zero-JS shell pattern.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "From an operational standpoint, the predictability of the code is its greatest asset. Every feature lives exactly where you expect it, reducing onboarding time for new engineers significantly.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "The DX (Developer Experience) is unmatched. Integrating Shadcn with these bespoke Vibe blocks has allowed us to create a premium-feeling app in record time.",
  },
  {
    name: "Richard Doe",
    role: "Lead Designer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "As a designer, seeing my visions translated 1:1 into code without CSS compromises is a dream. The utility-first approach combined with these layout patterns is perfect for high-fidelity work.",
  },
  {
    name: "Gordon Doe",
    role: "Full Stack Developer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "The separation of Feature-Based Architecture (FBA) means I can work on the checkout flow without ever touching the auth logic. It's the most stable environment I've worked in for years.",
  },
  {
    name: "Alex Doe",
    role: "UI & UX Designer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    content: "Finally, a system that respects the integrity of typography and spacing. The responsive feedback and staggered entrance animations make the final product feel incredibly alive.",
  },
  {
    name: "Tom Doe",
    role: "Cloud Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    content: "The server-side performance is exceptional. This architecture is built for the modern web—fast, secure, and infinitely scalable across global edge networks.",
  },
];

interface Testimonial1Props {
  className?: string;
}

const Testimonial1 = ({ className }: Testimonial1Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Testimonials
          </Badge>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Validated by the best in the industry
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join 1,000+ elite teams who have transformed their digital infrastructure with our architectural primitives.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Button className="h-11 rounded-xl px-8 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Globe className="mr-2 size-4" />
              View Case Studies
            </Button>
            <Button variant="outline" className="h-11 rounded-xl px-8 font-bold hover:bg-muted transition-colors">
              <Globe className="mr-2 size-4" />
              Join the Community
            </Button>
          </div>

          {/* Mobile Display: Carousel */}
          <div className="mt-10 block lg:hidden">
            <Carousel opts={{ loop: true }} className="w-full max-w-[280px] sm:max-w-md">
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="flex items-center">
                    <Card className="border-none bg-card/50 shadow-none">
                      <CardContent className="px-6 pt-6 leading-relaxed text-muted-foreground">
                        <q className="italic">&ldquo;{testimonial.content}&rdquo;</q>
                      </CardContent>
                      <CardFooter className="pt-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="size-10 border border-border/50">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-bold text-foreground leading-none">{testimonial.name}</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 mt-1">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="h-8 w-8" />
                <CarouselNext className="h-8 w-8" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Display: Responsive Masonry Grid */}
          <div className="mt-16 hidden w-full lg:block">
            <Masonry gutter="24px" columnsCount={4}>
              {testimonials.map((testimonial, idx) => {
                return (
                  <Card
                    key={idx}
                    className={cn(
                      "group border border-border/50 bg-card/30 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-black/5 rounded-3xl",
                      idx % 4 === 1 && "mt-12",
                      idx % 4 === 2 && "mt-24",
                      idx % 4 === 3 && "mt-12",
                    )}
                  >
                    <CardContent className="px-8 pt-8 leading-relaxed text-muted-foreground font-medium italic">
                      <q>&ldquo;{testimonial.content}&rdquo;</q>
                    </CardContent>
                    <CardFooter className="px-8 pb-8 pt-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-11 border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-bold text-foreground leading-none">{testimonial.name}</p>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-primary/70 mt-1.5">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </Masonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial1 };
```
