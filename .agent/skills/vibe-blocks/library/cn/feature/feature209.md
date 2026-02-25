# Feature 209

## Metadata
- **Category**: Feature
- **Objective**: Stylized collection discovery section featuring interactive image selection and architectural drafting patterns.
- **Use Case**: Primary "Showcase" landing rows, photographer portfolios, or high-end product gallery explainers.
- **Visual Style**: "Architectural Portfolio Discovery" aesthetic. High-contrast horizontal `xl:flex-row` split encased in a symmetrical `border-border` frame.
    - Information Hub (Left): Vertical discovery stage. Features an interactive row of button-based image selectors (`images.map`) with high-fidelity border/shadow feedback. Houses massive `text-4xl` headers and detailed muted descriptions.
    - Blueprint Stage (Right): Vertical `Separator` separation. Features a high-intensity photographic preview stage utilizing absolute-positioned assets with specialized `scale` and `opacity` transition logic. Background features an immersive absolute-positioned `tiny-checkers` SVG pattern overlay (`opacity-10`) to create a professional CAD-inspired environment.
- **Interactivity**: Fully interactive React component utilizing state-driven image switching, polished CTA transitions, and sophisticated visual pattern depth.

## Source Code

### `feature209.tsx`
```tsx
"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Feature209 = ({ className }: Feature209Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="border-y border-primary/10">
        <div className="container relative overflow-hidden">
          <div className="flex flex-col xl:flex-row border-x border-primary/10">
            {/* Interactive Narrative Stage */}
            <div className="xl:w-1/2 p-12 lg:p-24 flex flex-col justify-center gap-12">
               <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl leading-none">Explore Collection</h2>
               
               {/* High-fidelity selector row */}
               <div className="flex gap-6">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setSelectedImage(img)} className={cn("size-24 rounded-2xl border-4 overflow-hidden transition-all shadow-2xl hover:scale-110", selectedImage === img ? "border-primary scale-105" : "border-white")}>
                       <img src={img} className="h-full w-full object-cover" />
                    </button>
                  ))}
               </div>
               
               <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">The featured collection provides a sleek gallery-focused experience...</p>
               <Button variant="outline" className="w-fit rounded-full px-10 py-7 font-black italic uppercase tracking-widest shadow-xl">View Collection <ChevronRight className="ml-2 size-5" /></Button>
            </div>

            {/* Immersive Blueprint Billboard */}
            <div className="relative xl:w-1/2 p-12 bg-accent/20 min-h-[600px] flex items-center justify-center">
               <div className="absolute inset-x-0 h-full w-full z-0 opacity-10 bg-repeat [background-size:12px_12px]" style={{ backgroundImage: "url('tiny-checkers.svg')" }} />
               <div className="relative z-10 w-full h-full max-w-2xl rounded-[3rem] overflow-hidden border-8 border-white shadow-3xl">
                  {images.map((img, i) => (
                    <img key={i} src={img} className={cn("absolute inset-0 size-full object-cover transition-all duration-700", selectedImage === img ? "opacity-100 scale-100" : "opacity-0 scale-110")} />
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature209 };
```
