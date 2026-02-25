# Testimonial 6

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a classic, multi-card testimonial carousel with top-right navigation controls for horizontal discovery.
- **Use Case**: Landing pages where vertical space is limited, "Product Reviews" sections, or testimonials-in-header UI.
- **Visual Style**: Clean architectural "Carousel" layout featuring a left-aligned title and right-aligned navigation triggers. Utilizes a 3-column basis (1/3 per card) on larger screens. Features minimalistic cards with internal quotes and author metadata footprints.
- **Interactivity**: Fully functional Shadcn Carousel with reactive navigation buttons and responsive basis switching.

## Description
Testimonial 6 is the "Horizontal Grid" component. It prioritizes the "Controlled Discovery" brand archetype by allowing users to scroll through a high volume of positive feedback without occupying significant vertical real estate. The placement of the navigation controls next to the section title creates a clean, intentional interface that clearly guides the user towards interaction. It is the best choice for sections that need to feel "compact yet comprehensive."

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
    content: "The architectural depth of this framework is unmatched. It has allowed our team to deliver hyper-optimized production interfaces with record-breaking speed.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Performance is the core value here. We've seen a massive reduction in TBT and hydration bottlenecks across our most complex data-heavy applications.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Systemic stability and DX were our requirements, and this system delivered on both fronts. Every module is predictably structured and deeply modular.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Building with these primitives is like having a secret weapon. The code quality and design fidelity out-of-the-box are simply world-class.",
  },
  {
    name: "Richard Doe",
    role: "Lead Designer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Finally, a framework that respects the nuance of typography and motion. Designing for this system has been the most creative phase of my career.",
  },
  {
    name: "Gordon Doe",
    role: "Lead Developer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Clean, predictable, and incredibly performant. This is the gold standard for full-stack application development in the Payload ecosystem.",
  },
];

interface Testimonial6Props {
  className?: string;
}

const Testimonial6 = ({ className }: Testimonial6Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <Carousel className="w-full">
          <div className="mb-10 flex items-center justify-between px-2 lg:mb-14">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
                Why Teams Choose Us
                </h2>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/70">Expert opinions from the network</p>
            </div>
            <div className="flex items-center space-x-3">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-xl border-border/50 hover:bg-primary/5 hover:text-primary transition-all" />
              <CarouselNext className="static translate-y-0 h-11 w-11 rounded-xl border-border/50 hover:bg-primary/5 hover:text-primary transition-all" />
            </div>
          </div>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-2">
                  <div className="flex h-full flex-col justify-between border border-border/50 bg-card/10 hover:bg-card/30 transition-all rounded-[2rem] p-8 shadow-xl shadow-black/5">
                    <q className="text-sm font-medium leading-relaxed text-muted-foreground italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </q>
                    <div className="mt-8 flex items-center gap-4">
                      <Avatar className="size-10 border-2 border-background shadow-lg">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-bold text-foreground leading-none">{testimonial.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial6 };
```
