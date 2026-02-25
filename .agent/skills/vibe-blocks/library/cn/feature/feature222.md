# Feature 222

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric photographic story registry featuring immersive background imagery and high-contrast metrics nodes.
- **Use Case**: Primary "Customer Success" landing rows, executive case study indices, or high-fidelity service transformation showcases.
- **Visual Style**: "Immersive Narrative Discovery" aesthetic. Symmetrical `lg:grid-cols-3` grid layout focused on photographic authority.
    - Card Architecture: Heavy-weight photographic containers utilizing dynamic `backgroundImage` backgrounds. Absolute-positioned `bg-black/50` overlays provide high-contrast for white editorial content. 
    - Interaction: Features stylized horizontal hover states (overlay fades to `bg-black/30`). 
    - Content Hub: Vertical discovery node using massive `text-3xl` thin headers at the top. Bottom zone houses white-space separated metrics nodes (e.g., "30% increase") and high-fidelity "Read Story" `outline` buttons. 
    - Structural Polish: features consistent vertical aspect ratios and architectural spacing.
- **Interactivity**: Fully interactive React component utilizing immersive hover transitions and high-fidelity structural polish.

## Source Code

### `feature222.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Card = ({ link, background, title, stats }: CardData) => {
  return (
    <a href={link} style={{ backgroundImage: `url(${background})` }} className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-cover bg-center p-12 transition-all duration-700 hover:scale-[1.02] before:absolute before:inset-0 before:bg-black/60 hover:before:bg-black/40 min-h-[550px] shadow-3xl">
      <div className="relative z-10 flex flex-col justify-between h-full group">
        {/* Narrative Lead */}
        <h3 className="text-3xl lg:text-4xl font-black italic uppercase tracking-tighter leading-tight text-white mb-12">{title}</h3>
        
        {/* Success Evidence Node */}
        <div className="space-y-12">
           <div className="flex gap-16 text-white border-l-2 border-white/20 pl-6">
              {stats.map((item, i) => (
                <div key={i} className="space-y-1">
                   <div className="text-3xl font-black italic italic leading-none">{item.number}</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item.text}</div>
                </div>
              ))}
           </div>
           <Button variant="outline" className="rounded-full border-white text-white italic font-black uppercase tracking-widest text-[10px] px-8 py-5 group-hover:bg-white group-hover:text-black transition-all">Read Story <ArrowRight className="ml-2 size-3" /></Button>
        </div>
      </div>
    </a>
  );
};
```
