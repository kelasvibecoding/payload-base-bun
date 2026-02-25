# Feature 142

## Metadata
- **Category**: Feature
- **Objective**: Stylized technical showcase combining a "Blueprint Grid" visual with a detailed feature list.
- **Use Case**: Detailed product capability sections, technical platform "Overview" blocks, or agency case studies.
- **Visual Style**: "Technical Blueprint" aesthetic. Symmetrical `md:flex-row` split. 
    - Left (Visual): High-complexity drafting frame. Features a `linear-to-br from-red-100 to-blue-100` soft background. Key layout: an asymmetric grid containing a centered "note box" and a large bottom-anchored `placeholder-1.svg` image with `rounded-t-xl` design.
    - Right (Narrative): Bold `text-3xl` header, `Badge`, horizontal separator, and a list of capabilities anchored by `ArrowRight` icons.
- **Interactivity**: Static illustrative layout with polished structural complexity.

## Source Code

### `feature142.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature142 = ({ className }: Feature142Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mt-20 flex flex-col items-center justify-center gap-16 md:flex-row">
          {/* Complex Drafting Frame Visual */}
          <div className="relative grid w-full max-w-md grid-cols-[1fr_6fr_1fr] grid-rows-[1fr_2fr_1fr_7fr] rounded-3xl bg-linear-to-br from-red-100 to-blue-100 border p-2 shadow-2xl overflow-hidden group">
             {/* Note Box Tier */}
             <div className="col-start-2 row-start-2 flex items-center justify-center rounded-xl bg-background p-4 shadow-sm border mt-4">
               <p className="text-center text-sm text-muted-foreground italic font-medium">Lorem ipsum...</p>
             </div>
             {/* Blueprint Separators ... grid cells ... */}
             {/* Large Bottom Image */}
             <div className="col-start-2 row-start-4 pt-10">
               <img src="..." className="size-full rounded-t-2xl object-cover shadow-2xl border grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
          </div>
          
          {/* Narrative Sidebar */}
          <div className="w-full max-w-sm">
            <h6 className="text-3xl font-extrabold italic tracking-tighter uppercase mb-6">Build any kind of Website...</h6>
            <Badge variant="outline" className="bg-muted px-4 py-2 uppercase font-mono tracking-widest mb-16">Badge</Badge>
            <div className="h-px w-full bg-muted-foreground/30 mb-8" />
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-lg font-bold italic tracking-tight"><ArrowRight className="size-5 text-primary" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature142 };
```
