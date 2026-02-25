# Feature 168

## Metadata
- **Category**: Feature
- **Objective**: Technical grid-row focusing on productivity tools with high-contrast global borders.
- **Use Case**: Master "Core Capabilities" sections, feature comparison blocks, or platform utility overviews.
- **Visual Style**: "Technical Utility Grid" aesthetic. Section follows the same "Drafting Board" frame logic as `Feature 167`.
    - Content Row: `lg:grid-cols-3` high-precision grid. Features a unique separator design where `lg:gap-px` on a `bg-border` parent creates razor-thin drafting lines between modules.
    - Card Design: Highly architectural vertical stack. 
        - Unit 1 (Top): Clean white zone with bold headers and descriptive body blocks.
        - Unit 2 (Bottom): Full-width `bg-muted` stage holding oversized icon-graphic photographic assets.
- **Interactivity**: Static illustrative layout with polished corporate structural focus.

## Source Code

### `feature168.tsx`
```tsx
"use client";

import { PocketKnife } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature168 = ({ className }: Feature168Props) => {
  return (
    <section className={cn("py-32", className)}>
      {/* Leading Architectural Header (matches 167) */}
      <div className="border-y border-muted-foreground/10">
        <div className="container flex flex-col gap-6 border-x border-muted-foreground/10 py-10 lg:py-16">
          <Badge variant="outline" className="w-fit gap-2 bg-card px-4 py-2 font-mono tracking-widest uppercase"><PocketKnife className="size-4 text-primary" /> <span>Features</span></Badge>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase md:text-7xl">Smart productivity</h2>
        </div>
      </div>
      
      {/* Precision Multi-Module grid */}
      <div className="container border-x border-muted-foreground/10 px-0 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-muted-foreground/10">
          {DATA.map((item, index) => (
            <div key={index} className="relative flex flex-col bg-background group hover:bg-accent/5 transition-colors">
               <div className="flex-1 border-b border-muted-foreground/10 p-12">
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-4">{item.title}</h3>
                  <p className="text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
               </div>
               <div className="bg-muted p-20 flex items-center justify-center overflow-hidden">
                  <img src={item.image} className="max-h-48 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature168 };
```
