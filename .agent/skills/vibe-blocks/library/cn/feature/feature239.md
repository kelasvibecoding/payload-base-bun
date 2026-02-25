# Feature 239

## Metadata
- **Category**: Feature
- **Objective**: Asymmetrical editorial section featuring a living photographic billboard, stylized CAD-inspired architecture, and high-contrast typography.
- **Use Case**: Primary "New Collection" landing rows, executive platform showrooms, or technical product transformation blocks.
- **Visual Style**: "Pro Layout CAD Showcase" aesthetic. Asymmetric `lg:grid-cols-2` horizontal split.
    - Leadership Hub (Left): features massive `text-7xl` bold headers and a specialized conversion row highlighting "Shadcn & Tailwind" authority. Includes stylized `outline` utility buttons with rotation-enabled icons.
    - Architectural Frame: High-complexity `DottedDiv` staging. features absolute-positioned `h-[1.5px]` borders and specialized "Black Dot" anchors (`size-2 rounded-full bg-foreground`) to create a professional engineering environment.
    - Visual Hub (Right): Immersive photographic node utilizing absolute-positioned `linear-to-t` masking for high-contrast white typographic overlays. features massive `text-6xl` bold headers and a bottom-anchored "See All" chevron action.
- **Interactivity**: Fully interactive React component utilizing localized CAD-style structural polish, hover-enabled brand transitions, and professional technical rhythm.

## Source Code

### `feature239.tsx`
```tsx
"use client";

import { ArrowUpRight, ChevronRight, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature239 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container overflow-hidden">
        {/* Master Architectural Wrapper */}
        <DottedDiv className="grid lg:grid-cols-2 border-4 border-white bg-accent/5 rounded-[4rem] shadow-4xl overflow-hidden">
          {/* Editorial Legend */}
          <div className="flex flex-col gap-12 p-16 lg:p-24 justify-center">
            <Badge variant="outline" className="rounded-full px-8 py-4 bg-background border-4 shadow-xl text-xs font-black italic uppercase tracking-widest">Copy paste Blocks <ChevronRight className="ml-2 size-4" /></Badge>
            <h1 className="text-6xl lg:text-[100px] leading-[0.85] font-black italic uppercase tracking-tighter">Blocks Built.</h1>
            <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed max-w-sm">Finely crafted components built with React, Tailwind and Shadcn UI...</p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-12 py-8 font-black italic uppercase tracking-widest text-lg bg-primary shadow-2xl">Get Started</Button>
              <Button variant="outline" className="size-16 rounded-full border-4 transition-all hover:rotate-45 p-0"><ArrowUpRight className="size-8" /></Button>
            </div>
          </div>

          {/* Immersive Living Billboard */}
          <DottedDiv className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
            <img src="collection.jpg" className="size-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-20 text-white">
               <div className="w-full flex justify-between font-black italic text-xl tracking-tighter opacity-60"><span>2025</span><span>MARCH</span></div>
               <div className="text-center space-y-6">
                  <h2 className="text-6xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none">New<br/>Collection</h2>
                  <div className="w-16 h-2 bg-white rounded-full mx-auto" />
               </div>
               <div className="flex flex-col items-center gap-4 group/btn cursor-pointer">
                  <ChevronUp className="size-10 animate-bounce" />
                  <span className="font-black italic uppercase tracking-widest text-sm">See All</span>
               </div>
            </div>
          </DottedDiv>
        </DottedDiv>
      </div>
    </section>
  );
};
```
