# Feature 240

## Metadata
- **Category**: Feature
- **Objective**: High-fidelity service registry carousel featuring immersive photographic assets, stylized CAD-inspired framing, and bold typographic labels.
- **Use Case**: Primary "Innovation Portfolio" landing rows, executive service indices, or technical project showrooms.
- **Visual Style**: "Service Registry Showcase" aesthetic. Centered authority header utilizes massive `text-6xl` bold typography.
    - Interaction Grid: High-complexity `Carousel` module utilizing stylized `DottedDiv` containers for each discovery node. 
    - Card Architecture: Immersive photographic billboards utilizing absolute-positioned white editorial content (Year, Month, Title). Items Use `linear-to-t` masking and specialized `@keyframes scale` transitions on hover to create a luxury transformation effect.
    - Narrative Stack: Centered content hub featuring bold `text-5xl` headers and clean descriptive sub-text. 
    - Architectural Polish: features technical "Black Dot" anchors and absolute-positioned border traces within the card architecture.
- **Interactivity**: Fully interactive React component utilizing directional carousel state, hover-enabled image scaling, and professional structural polish.

## Source Code

### `feature240.tsx`
```tsx
"use client";

import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Feature240 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="text-center text-4xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none mb-32">Services.</h1>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="py-10">
            {ITEMS.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <DottedDiv className="group h-[600px] p-6">
                  {/* Informational Stage */}
                  <div className="relative h-full w-full bg-accent/5 p-6 rounded-[3rem] border-4 border-white transition-all group-hover:bg-accent/10 shadow-3xl overflow-hidden">
                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
                      <img src={item.imageSrc} className="size-full object-cover transition-all duration-1000 group-hover:scale-125 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-10" />
                      
                      {/* Editorial Overlays */}
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-12 text-white">
                         <p className="w-full flex items-center justify-between font-black italic text-lg tracking-tighter opacity-60"><span>{item.year}</span><span>{item.month}</span></p>
                         <div className="text-center space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none">{item.title}</h2>
                            <div className="w-12 h-2 bg-white rounded-full mx-auto" />
                            <p className="text-xs font-medium leading-relaxed italic opacity-80 max-w-[200px] mx-auto">{item.description}</p>
                         </div>
                         <div className="flex flex-col items-center gap-2 group/btn cursor-pointer">
                            <ChevronUp className="size-8 animate-bounce" />
                            <span className="font-black italic uppercase tracking-widest text-[10px]">See All</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </DottedDiv>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="mt-12 flex justify-end gap-6">
            <CarouselPrevious className="static size-16 rounded-full border-4 border-white shadow-3xl bg-background translate-y-0" />
            <CarouselNext className="static size-16 rounded-full border-4 border-white shadow-3xl bg-background translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
```
