# Feature 202

## Metadata
- **Category**: Feature
- **Objective**: High-density asymmetric bento grid for portfolio showcases and capability directories.
- **Use Case**: Primary "Project Portfolio" blocks, architectural service galleries, or executive landing directories.
- **Visual Style**: "Asymmetric Executive Bento" aesthetic. Centered editorial header with bold `text-6xl` headers and high-contrast metadata leads.
    - Grid: Advanced asymmetric `lg:grid-cols-3` grid layout combining wide `lg:col-span-2` items and single-column feature nodes. 
    - Card Architecture: Immersive photographic "Billboard" cards utilizing high-radius `rounded-2xl` masking.
    - Visual Details: Absolute-positioned `grayscale-100` assets that transition to `grayscale-50` and scale-up on hover. Interior houses specialized "Blur-Anchor" glassmorphic icons (`backdrop-blur-sm bg-background/15`) and bold identification text.
- **Interactivity**: Static illustrative grid featuring high-quality structural layout flow and professional interactive "Billboard" hover effects.

## Source Code

### `feature202.tsx`
```tsx
"use client";

import { Building2, Landmark, LayoutGrid, Compass, Home, CircleDot } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature202 = ({ className }: Feature202Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Editorial Lead Registry */}
        <div className="mx-auto max-w-4xl text-center mb-24">
          <div className="font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase mb-6 opacity-60">ARCHITECTURE</div>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-8xl leading-none">Modern solutions.</h2>
        </div>

        {/* High-Resolution Bento Flow */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Wide Gallery Node */}
          <a href="#" className="group relative isolate h-[450px] overflow-hidden rounded-[3rem] border shadow-2xl transition-all hover:translate-y-[-4px] lg:col-span-2">
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <img src="https://images.unsplash.com/photo-1647517649469-ba454dc72896" className="absolute inset-0 -z-20 size-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
            <div className="flex h-full flex-col justify-between p-12">
               <span className="size-16 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl grid place-items-center shadow-xl"><Building2 className="text-white size-8" /></span>
               <div className="max-w-xl"><h3 className="text-3xl font-black italic tracking-tighter uppercase text-white mb-4">Sustainable Design</h3><p className="text-lg text-white/70 italic font-medium leading-relaxed">Create eco-friendly spaces that blend innovation with environmental responsibility.</p></div>
            </div>
          </a>
          
          {/* ... Standard Architecture Nodes ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature202 };
```
