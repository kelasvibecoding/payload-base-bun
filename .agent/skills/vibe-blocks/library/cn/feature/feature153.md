# Feature 153

## Metadata
- **Category**: Feature
- **Objective**: Detailed multi-layer carousel section for feature-rich platform overviews.
- **Use Case**: Primary "Key Features" product tours, detailed service overviews, or partner integration galleries.
- **Visual Style**: "Structural Information Carousel" aesthetic. 
    - Card Structure: `basis-full md:basis-1/2 xl:basis-1/3`. Clean white containers with high-intensity box-shadows (`0px_5px_20px_rgba(16,25,36,0.1)`) and `rounded-xl` corners.
    - Information Hierarchy: Layered content per slide. Top: Logo + Title. Mid: Short description + "Learn More" `indigo-400` link. Bottom: A detailed `mt-auto` vertical list of `info` headers and mini-summaries for deeper context.
    - Edges: Uses global horizontal fade masks (`linear-to-r` and `linear-to-l`) to handle the stage overflow elegantly.
- **Interactivity**: Fully interactive state-based Carousel. Synchronized `startIndex` control with high-precision custom triggers (`CarouselPrevious`/`CarouselNext`).

## Source Code

### `feature153.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Feature153 = ({ className }: Feature153Props) => {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Carousel opts={{ align: "start" }} className="w-full">
           {/* Controlled Header */}
           <div className="mb-12 flex flex-col items-center gap-8 sm:flex-row sm:items-center justify-between">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">Key Features</h1>
            <div className="flex items-center gap-4">
               <CarouselPrevious onClick={() => setStartIndex(s => s - 1)} disabled={startIndex === 0} className="static size-12" />
               <CarouselNext onClick={() => setStartIndex(s => s + 1)} disabled={startIndex === integrations.length - 1} className="static size-12" />
            </div>
           </div>
           
           <div className="relative">
             <CarouselContent className="pt-2 pb-10 transition-all duration-500 ease-out" style={{ transform: `translateX(-${startIndex * 33}%)` }}>
               {integrations.map((item, index) => (
                 <CarouselItem key={index} className="flex basis-full md:basis-1/2 xl:basis-1/3">
                    <div className="flex h-full flex-col justify-between rounded-2xl bg-card border p-12 shadow-2xl transition-all hover:-translate-y-2">
                       <div className="flex items-center gap-3 mb-6">
                         <img src={item.image} className="h-8 grayscale" />
                         <h2 className="text-xl font-bold italic uppercase tracking-widest">{item.title}</h2>
                       </div>
                       <p className="mb-6 text-muted-foreground italic font-medium">{item.description}</p>
                       <div className="flex items-center text-sm font-bold text-primary mb-12 cursor-pointer group">Learn More <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-2" /></div>
                       {/* Contextual Details */}
                       <div className="mt-auto flex flex-col gap-6 pt-10 border-t">
                          {item.info.map((info, i) => (
                            <div key={i}><h3 className="font-bold text-sm uppercase">{info.title}</h3><p className="text-xs text-muted-foreground italic mt-1">{info.text}</p></div>
                          ))}
                       </div>
                    </div>
                 </CarouselItem>
               ))}
             </CarouselContent>
             {/* Stage Fade Artifacts */}
             <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
             <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
           </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Feature153 };
```
