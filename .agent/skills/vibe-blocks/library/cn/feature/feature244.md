# Feature 244

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric service registry carousel featuring localized architectural framing and centered informational cards.
- **Use Case**: Primary "Benefit Discovery" landing rows, executive platform explainers, or modular product walkthroughs.
- **Visual Style**: "Pro Feature Carousel" aesthetic. Symmetrical header architecture separating massive `text-6xl` bold headers from detailed platform narratives. 
    - Interaction Grid: High-complexity `Carousel` module utilizing stylized `DottedDiv` containers for each discovery node. 
    - Card Architecture: Symmetrical `rounded-lg` containers focusing on centered informational density. Items feature high-contrast photographic anchors (`size-40 rounded-lg`), bold headers, and high-legibility descriptive sub-text. 
    - Architectural Polish: features technical "Black Dot" anchors and absolute-positioned border traces within the card architecture to create a professional engineering environment.
- **Interactivity**: Fully interactive React component utilizing directional carousel state, professional structural transitions, and high-fidelity utility cadence.

## Source Code

### `feature244.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Feature244 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        {/* Leadership Orchestration Stage */}
        <div className="max-w-2xl space-y-10 mb-20">
          <h2 className="text-5xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8]">Explore Features.</h2>
          <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed">Discover the powerful features that help transform your workflow...</p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="p-4">
            {features.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <DottedDiv className="group h-[550px] p-4">
                  {/* Informational Stage */}
                  <Card className="size-full rounded-[3rem] border-4 border-white bg-accent/5 transition-all group-hover:bg-background group-hover:shadow-4xl overflow-hidden">
                    <CardContent className="p-12 flex flex-col items-center justify-center gap-12 text-center">
                      <div className="size-48 rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden group-hover:rotate-6 transition-transform">
                        <img src={item.image} className="size-full object-cover" />
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                        <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DottedDiv>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Hub */}
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
