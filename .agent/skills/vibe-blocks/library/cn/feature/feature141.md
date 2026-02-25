# Feature 141

## Metadata
- **Category**: Feature
- **Objective**: Stylized architectural summary section combining a "Blueprint Frame" visual with an executive quote.
- **Use Case**: Flagship landing site "Manifesto" sections, high-end agency portfolios, or technical "Team Mission" blocks.
- **Visual Style**: "Blueprint Frame" aesthetic. Centered clean header area. Split Stage: `md:flex-row` with a massive `gap-16`. 
    - Left (Visual): Stylized frame container featuring a soft `linear-to-br from-red-100 to-blue-100` gradient background. Key visual: a 3x3 blueprint-style grid where the center cell houses a `rounded-xl` photo and the outer cells are thin-bordered transparent blocks, creating a technical, balanced "lens" effect.
    - Right (Narrative): Bold blockquote area with massive text, a primary-colored `Badge`, wide `bg-muted-foreground` separator, and detailed executive credentials ("John Doe").
- **Interactivity**: Static illustrative layout with sophisticated structural design.

## Source Code

### `feature141.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature141 = ({ className }: Feature141Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="text-center text-5xl font-bold italic tracking-tighter uppercase mb-6 px-4">Our Vision</h2>
        <p className="text-center text-xl text-muted-foreground italic mb-20">Lorem ipsum...</p>
        
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          {/* Blueprint Visual Frame */}
          <div className="grid w-full max-w-md grid-cols-[1fr_2fr_1fr] grid-rows-[1fr_2fr_1fr] rounded-3xl bg-linear-to-br from-red-50 to-blue-50 border p-2 shadow-2xl">
             {/* Decorative Border Cells ... */}
             <div className="border-r border-b opacity-20 p-8" />
             <div className="border-b opacity-20" />
             {/* Center Cell Stage */}
             <div className="col-start-2 row-start-2 p-4">
               <img src="..." className="size-full rounded-2xl object-cover shadow-2xl border grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
             {/* more grid logic ... */}
          </div>
          
          {/* Quote Sidebar */}
          <div className="w-full max-w-sm">
            <h6 className="text-3xl font-bold italic tracking-tight pb-6">Get your team on the same page.</h6>
            <Badge variant="outline" className="bg-muted px-4 py-2 uppercase font-mono tracking-widest">Principles</Badge>
            <div className="mt-16 mb-6 h-1 w-12 bg-primary/40 rounded-full" />
            <p className="mb-10 text-xl text-muted-foreground italic font-medium leading-relaxed">&quot;Lorem ipsum dolor sit amet...&quot;</p>
            <div className="pl-2 border-l-2 border-primary/20">
               <p className="text-lg font-bold">John Doe</p>
               <p className="text-sm text-muted-foreground uppercase tracking-widest font-mono">CEO, Visionary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature141 };
```
