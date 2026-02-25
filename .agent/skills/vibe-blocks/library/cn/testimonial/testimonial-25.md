# Testimonial 25

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a premium, image-forward "Editorial Gallery" carousel that pairs large-scale customer portraits with concise, high-impact quotes.
- **Use Case**: Lifestyle product pages, design-centric SaaS platforms, or any section requiring a highly visual, Magazine-style presentation of user success.
- **Visual Style**: Cinematic "Image-First" architecture. The header is left-aligned with a descriptive paragraph and a secondary CTA button (`variant="outline"`). The core interaction is a horizontal Shadcn Carousel populated by `Card` components. Each card dedicates ~60% of its vertical height to a high-fidelity customer portrait (object-cover), with lower-third reserved for a bold, primary-colored quote and identity footprint.
- **Interactivity**: Fluid carousel alignment (`align="start"`, `loop=true`) that partially reveals the next card to encourage horizontal scrolling. Features custom-positioned bottom-left navigation triggers (`CarouselPrevious`, `CarouselNext`).

## Description
Testimonial 25 is the "Editorial Vanguard" component. It prioritizes the "Human Connection" brand archetype by treating the customer's face as the primary visual hook. The large, uncropped imagery makes the quotes feel significantly more authentic and personal than a standard 40px avatar. This approach is highly effective for platforms where the "Cool Factor" or "Design Sensibility" of the user base is a core selling point. It transforms standard social proof into an aspirational gallery.

## Source Code

```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  {
    quote: "Building full-stack React systems has never felt this modular. Zero hydration errors on day one.",
    author: "Amy Chase",
    role: "Lead Architect",
    company: "Mercury Finance",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/testimonials/amy-chase.webp",
  },
  {
    quote: "I was able to replace 80% of our legacy spaghetti code with these pristine primitive blocks.",
    author: "Jonas Kotara",
    role: "Lead UI Engineer",
    company: "Vibe Systems",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Founder Mode is hard enough without fighting your own layout abstractions. This just works.",
    author: "Kevin Yam",
    role: "Founding Engineer",
    company: "Core Startups",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/testimonials/kevin-yam.webp",
  },
  {
    quote: "An absolute masterclass in separating concerns while maintaining perfect design aesthetics.",
    author: "Kundo Marta",
    role: "Product Designer",
    company: "Creative Logic",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/testimonials/kundo-marta.webp",
  },
  {
    quote: "We're misusing these Payload configurations as a CRM and the performance is still elite!",
    author: "Amy Chase",
    role: "PM",
    company: "Mercury Finance",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/testimonials/amy-chase.webp",
  },
];

interface Testimonial25Props {
  className?: string;
}

const Testimonial25 = ({ className }: Testimonial25Props) => {
  return (
    <section className={cn("py-24 lg:py-32 overflow-hidden bg-accent/20", className)}>
      <div className="container px-4 md:px-6">
        {/* Left-Aligned Editorial Header */}
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter text-foreground md:text-5xl lg:text-7xl uppercase leading-none">
            Trusted by the Vanguard
          </h2>
          <p className="text-lg font-medium text-muted-foreground leading-relaxed max-w-xl">
            This architecture is built on the habits that make elite product teams successful: 
            iterating quickly, enforcing typed boundaries, and obsessing over sub-second performance.
          </p>
          <Button variant="outline" size="lg" className="rounded-full h-12 px-8 font-bold border-border/50 hover:bg-card shadow-sm group">
            Explore Ecosystem Case Studies
            <ArrowRight className="ml-2 size-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Panoramic Carousel */}
        <div className="relative mt-16 md:mt-24 lg:-mr-[50vw]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="pl-4">
              {items.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-[85%] md:basis-[60%] lg:basis-[35%] xl:basis-[28%]"
                >
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 shadow-2xl shadow-black/5 rounded-[2rem] hover:bg-card transition-colors group">
                    <CardContent className="flex h-full flex-col p-0">
                      <div className="relative overflow-hidden">
                        <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="h-[350px] w-full object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                      
                      <div className="flex flex-1 flex-col justify-between gap-8 p-8 -mt-20 relative z-10">
                        <blockquote className="text-xl font-bold tracking-tight text-foreground leading-snug italic line-clamp-4">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-[10px] uppercase font-bold tracking-widest text-primary/70">
                            {testimonial.role} @ {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Bottom-Left Navigation */}
            <div className="mt-12 flex gap-4 pr-10">
              <CarouselPrevious className="static h-14 w-14 rounded-full border-2 border-border/50 bg-background hover:scale-105 transition-all text-foreground" />
              <CarouselNext className="static h-14 w-14 rounded-full border-2 border-border/50 bg-background hover:scale-105 transition-all text-foreground" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial25 };
```
