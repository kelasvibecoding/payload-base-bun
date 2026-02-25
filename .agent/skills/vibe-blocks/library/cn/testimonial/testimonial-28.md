# Testimonial 28

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a highly stylized, "Blueprint Draft" carousel that frames focal testimonials within a technical, dashed-border architectural layout.
- **Use Case**: Developer-focused landing pages, "How it Works" sections, or products with a technical/engineering aesthetic where testimonials need to feel like documented specs.
- **Visual Style**: Industrial "Blueprint" architecture featuring a centralized `Carousel` constrained to a `max-w-5xl` container. The core visual element is the custom `DashedCard` component, built using precise SVG elements (`LineHorizontal`, `LineVertical`, `IconSvgs.Plus`) to create an intersecting architect's grid. The layout forces the user to focus on a single, massive, text-heavy testimonial at a time.
- **Interactivity**: Standard horizontal carousel navigation augmented by custom styling. The `CarouselPrevious` and `CarouselNext` triggers are separated by a custom SVG dotted line acting as a visual rail for the navigation. 

## Description
Testimonial 28 is the "Engineering Spec" component. It prioritizes the "Technical Precision" brand archetype by wrapping social proof in the visual language of CAD drawings or architectural blueprints. The stark SVG borders and plus-sign intersection markers suggest mathematical accuracy and intentionality. It is an excellent choice for DevTools, APIs, or physical hardware products where the brand needs to communicate rigorous quality and exactitude.

## Source Code

```tsx
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial28 = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Lead Systems Architect",
      content:
        "The absolute precision of this baseline architecture is stunning. Having access to exact FBA patterns and perfectly implemented primitives has reduced our refactor time by an order of magnitude. Highly recommended.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      name: "Jane Smith",
      role: "Director of Engineering",
      content:
        "We required a rigorous structural foundation to build our enterprise application on. The SSOT patterns provided here eliminated entire classes of state bugs that previously plagued our continuous integration cycles.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      name: "Alex Johnson",
      role: "Head Product Designer",
      content:
        "Finally, a system that understands the intersection of design and engineering. The components are beautifully styled out of the box, yet entirely customizable without fighting heavy abstraction layers.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tighter text-foreground lg:text-6xl uppercase">
          Field Reports
        </h2>

        <Carousel className="mx-auto w-full md:max-w-5xl cursor-grab active:cursor-grabbing">
          <CarouselContent>
            {testimonials.map((currentTestimonial, index) => (
              <CarouselItem key={index}>
                <DashedCard>
                  <div className="px-6 py-12 lg:p-24 flex flex-col items-center select-none bg-card/10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <Avatar className="size-20 rounded-full border-2 border-background shadow-lg">
                        <AvatarImage
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                        />
                        <AvatarFallback className="font-bold text-xl">{currentTestimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-center md:text-left space-y-1">
                          <h3 className="text-3xl font-bold tracking-tight text-foreground leading-none">
                            {currentTestimonial.name}
                          </h3>
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">
                            {currentTestimonial.role}
                          </p>
                      </div>
                    </div>
                    <p className="mt-10 text-center text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl italic text-foreground/90">
                      &ldquo;{currentTestimonial.content}&rdquo;
                    </p>
                  </div>
                </DashedCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="mt-12 flex items-center justify-center gap-4 lg:mt-24 relative select-none">
            <CarouselPrevious className="relative top-0 left-0 translate-y-0 size-12 border-2 text-foreground hover:bg-foreground hover:text-background transition-colors" />
            <div className="relative flex h-10 w-[80px] items-center justify-center overflow-hidden lg:w-[300px]">
              <LineHorizontal className="absolute left-0" />
            </div>
            <CarouselNext className="relative top-0 left-0 translate-y-0 size-12 border-2 text-foreground hover:bg-foreground hover:text-background transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const LineHorizontal = ({ className = "" }) => (
  <svg
    height="1"
    className={cn("absolute h-[2px] w-full", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1H2000"
      stroke="currentColor"
      className="text-border"
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="6 8"
    />
  </svg>
);

const LineVertical = ({ className = "" }) => (
  <svg
    className={cn("absolute h-full w-[2px]", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0V2000"
      stroke="currentColor"
      className="text-border"
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="6 8"
    />
  </svg>
);

const DashedCard = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative w-full overflow-hidden p-4 md:p-6 lg:p-8">
    <LineHorizontal className="top-[16px] md:top-[24px] lg:top-[32px] left-0" />
    <LineHorizontal className="bottom-[16px] md:bottom-[24px] lg:bottom-[32px] left-0" />
    <LineVertical className="top-0 left-[16px] md:left-[24px] lg:left-[32px]" />
    <LineVertical className="top-0 right-[16px] md:right-[24px] lg:right-[32px]" />
    
    <IconSvgs.Plus className="absolute top-[6px] md:top-[14px] lg:top-[22px] left-[6px] md:left-[14px] lg:left-[22px] text-foreground/40" />
    <IconSvgs.Plus className="absolute top-[6px] md:top-[14px] lg:top-[22px] right-[6px] md:right-[14px] lg:right-[22px] text-foreground/40" />
    <IconSvgs.Plus className="absolute bottom-[6px] md:bottom-[14px] lg:bottom-[22px] left-[6px] md:left-[14px] lg:left-[22px] text-foreground/40" />
    <IconSvgs.Plus className="absolute right-[6px] md:right-[14px] lg:right-[22px] bottom-[6px] md:bottom-[14px] lg:bottom-[22px] text-foreground/40" />
    
    <div className="relative z-10">{children}</div>
  </div>
);

const IconSvgs = {
  Plus: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0V20" stroke="currentColor" strokeWidth="2" />
      <path d="M20 10H0" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export { Testimonial28 };
```
