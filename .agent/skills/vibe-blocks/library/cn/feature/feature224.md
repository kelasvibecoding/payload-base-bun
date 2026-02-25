# Feature 224

## Metadata
- **Category**: Feature
- **Objective**: Immersive ecological carousel showcase featuring high-complexity visual banners and specialized floating icon clusters.
- **Use Case**: Master "Environmental AI" landing rows, sustainability product indices, or immersive brand capability carousels.
- **Visual Style**: "Cinematic Ecology Gateway" aesthetic. Centered authority header with massive `text-6xl` bold typography.
    - Interaction Grid: High-complexity `Carousel` module focusing on triple-split `lg:basis-1/3` discovery.
    - Card Architecture: Vertical modular containers focusing on "Nature First" billboards. Visual headers utilize specialized `AspectRatio` (0.93) masking on immersive photographic assets. 
    - Floating UI: features high-fidelity floating primary-colored labels anchors housing twin-icon clusters (`Sparkles` + Domain Icon) and clean metric labels.
    - Narrative Frame: Bottom-anchored white-space registry housing bold headers and high-legibility descriptive leads. 
    - Navigation: Specialized directional control suite with a unique progress-tracking dot array for mobile accessibility.
- **Interactivity**: Fully interactive React component utilizing directional carousel state, mobile-responsive progress tracking, and professional structural polish.

## Source Code

### `feature224.tsx`
```tsx
"use client";

import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Feature224 = ({ className }: Feature224Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container overflow-hidden">
        {/* Authority Header Stage */}
        <h2 className="text-center text-4xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none mb-24 max-w-4xl mx-auto">Harness the power of AI in nature.</h2>
        
        <Carousel opts={{ align: "start" }} className="w-full relative">
          <CarouselContent className="-ml-12">
            {FEATURES.map((card, idx) => (
              <CarouselItem key={idx} className="pl-12 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-10 group">
                    {/* Immersive Billboard Staging */}
                    <div style={{ backgroundImage: `url("${card.background}")` }} className="relative aspect-[0.9] rounded-[3.5rem] bg-cover bg-center border-8 border-white shadow-3xl overflow-hidden transition-all duration-700 group-hover:scale-95">
                       {/* Floating Technical Cluster */}
                       <div className="absolute inset-x-0 bottom-12 flex justify-center">
                          <div className="flex items-center gap-4 bg-primary text-white rounded-full px-6 py-4 shadow-3xl scale-90 group-hover:scale-110 transition-transform duration-500">
                             <div className="flex -space-x-2">
                                <div className="size-8 rounded-full bg-background grid place-items-center border-2 border-primary"><Sparkles className="size-4 text-primary" /></div>
                                <div className="size-8 rounded-full bg-background grid place-items-center border-2 border-primary"><card.icon className="size-4 text-primary" /></div>
                             </div>
                             <p className="text-[10px] font-bold uppercase tracking-widest">{card.label}</p>
                          </div>
                       </div>
                    </div>
                    {/* Editorial Registry */}
                    <div className="space-y-4 px-4">
                       <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-tight">{card.title}</h3>
                       <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Master Directional Controllers */}
          <div className="mt-12 flex justify-center gap-6">
             <CarouselPrevious className="static size-16 rounded-full border-4 border-white shadow-3xl bg-background translate-y-0" />
             <CarouselNext className="static size-16 rounded-full border-4 border-white shadow-3xl bg-background translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
```
