# Feature 140

## Metadata
- **Category**: Feature
- **Objective**: Full-stage horizontal carousel for primary feature discovery or creative showcases.
- **Use Case**: Master landing hero carousels, persona-based product tours, or high-impact creative portfolios.
- **Visual Style**: "Immersive Carousel Stage" aesthetic. Utilizes a massive `Carousel` component. Each `CarouselItem` is a full-width `rounded-2xl bg-muted` stage split into:
    - Content Area: `md:max-w-xs`. Large `text-5xl` medium-weight header and muted description text.
    - Visual Zone: `rounded-l-2xl` massive image placeholder (`max-h-[560px]`) taking up ~60% of the stage.
- **Interactivity**: Fully interactive `Carousel`. Custom navigation triggers (`CarouselPrevious`/`CarouselNext`) are positioned as massive circular buttons in the bottom corners of the stage. Smooth `ease-in` transitions.

## Source Code

### `feature140.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Feature140 = ({ className }: Feature140Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Carousel className="relative w-full drop-shadow-2xl">
          <CarouselContent className="ease-in-out duration-500">
            {items.map((item) => (
              <CarouselItem key={item.title}>
                <div className="relative flex flex-col items-center justify-between gap-4 rounded-[2rem] bg-muted border py-20 pl-8 md:flex-row md:pl-20 shadow-inner overflow-hidden">
                  <div className="w-full pr-8 md:max-w-md">
                    <h2 className="mb-8 text-3xl font-bold sm:text-4xl md:text-6xl italic tracking-tighter uppercase">{item.title}</h2>
                    <p className="text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-full h-full">
                    <img src={item.imgSrc} className="h-full w-full rounded-l-[3rem] object-cover shadow-2xl border-l border-y border-white/10 min-h-[500px]" />
                  </div>
                  {/* Positioned Controls */}
                  <div className="absolute bottom-10 left-10 flex gap-4">
                     <CarouselPrevious className="static size-14 border-2 hover:bg-primary hover:text-background transition-all" />
                     <CarouselNext className="static size-14 border-2 hover:bg-primary hover:text-background transition-all" />
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

export { Feature140 };
```
