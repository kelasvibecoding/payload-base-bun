# Feature 195

## Metadata
- **Category**: Feature
- **Objective**: Stylized conversion "Launch" hub combining immersive visual patterning with high-contrast pricing metrics.
- **Use Case**: Primary "Get Started" landing rows, enterprise pricing summaries, or platform launch modules.
- **Visual Style**: "Technical Launch Blueprint" aesthetic. Global container is set on a massive technical stage utilizing a specific `bg-linear-to-r` from `primary` to `primary/75`. 
    - Background: Features an absolute-positioned immersive `PlusSigns` SVG pattern (16px gap) with a specialized `linear-gradient` mask to create extreme structural depth.
    - Layout: Symmetrical `lg:grid-cols-2` column split for high-weight information. 
    - Content Pane (Left): Features high-contrast bold headers, platform narrative text, and a high-action dual conversion button row (`secondary` and `foreground` highlights).
    - Proofing Pane (Right): Features a large-scale `text-5xl` bold pricing metric, recurring text sub-headers, and a dedicated checklist of high-value platform benefits using positive `Check` indicators.
- **Interactivity**: Fully interactive React component featuring high-fidelty visual feedback and state-driven responsive button logic for mobile viewports.

## Source Code

### `feature195.tsx`
```tsx
"use client";

import { Check, ChevronRight } from "lucide-react";
import { useId } from "react";

import { Button } from "@/components/ui/button";

export function Feature195() {
  return (
    <section className="py-32">
      <div className="container max-w-7xl px-4">
        {/* Master Conversion Stage */}
        <div className="relative isolate grid items-center overflow-hidden bg-linear-to-r from-primary to-primary/80 rounded-[4rem] p-12 lg:p-24 shadow-[0_64px_128px_-16px_rgba(0,0,0,0.4)] lg:grid-cols-2 gap-20">
          {/* Drafting Pattern Stage */}
          <div className="absolute inset-0 -z-10 opacity-[0.05] [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]"><PlusSigns className="h-full w-full text-white" /></div>
          
          {/* Narrative Content */}
          <div className="lg:border-r border-white/20 lg:pr-20">
            <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl text-white mb-6">Launch today</h2>
            <p className="text-xl text-white/70 italic font-medium leading-relaxed">Our API solves middleware restrictions and restrict potential today.</p>
            <div className="mt-12 flex flex-wrap gap-6">
               <Button size="lg" variant="secondary" className="rounded-full px-12 py-8 font-black italic tracking-widest uppercase shadow-2xl">Start for free <ChevronRight className="size-5 ml-2" /></Button>
               <Button size="lg" className="rounded-full px-12 py-8 font-black italic tracking-widest uppercase bg-white text-primary border-0 shadow-2xl">Get a demo <ChevronRight className="size-5 ml-2" /></Button>
            </div>
          </div>

          {/* Pricing & Benefit Registry */}
          <div className="flex flex-col gap-8 justify-center">
             <div><h3 className="text-5xl font-black italic tracking-tighter uppercase text-white leading-none">$29.99</h3><p className="text-xl text-white/60 italic font-bold">per user / month</p></div>
             <ul className="space-y-6">
                <li className="flex items-center gap-4 text-white/80 font-bold italic uppercase tracking-widest"><Check className="size-6 text-white" />All features and...</li>
                <li className="flex items-center gap-4 text-white/80 font-bold italic uppercase tracking-widest"><Check className="size-6 text-white" />Mainline AI</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* ... PlusSigns Pattern Logic ... */}
```
