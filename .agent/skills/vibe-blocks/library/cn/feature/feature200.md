# Feature 200

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric high-fidelity capability grid featuring immersive radial gradients and dot-matrix patterns.
- **Use Case**: Hero "Platform Benefits" landing rows, security-focused capability blocks, or technical product indices.
- **Visual Style**: "Atmospheric Branding Hub" aesthetic. Triple-split `lg:grid-cols-3` grid layout.
    - Card Architecture: High-complexity atmospheric cards utilizing circular `bg-radial` masks and feature-specific color gradients (Purple, Teal, Red). 
    - Visual Fabric: Features an absolute-positioned "Drafting Board" dot grid (`3px_3px`) with a specialized radial mask to create extreme structural depth.
    - Iconic Hub: Specialized "Triple-Ring" icon container utilizing nested circular backgrounds with varying `bg-gradient-to-b` opacities to provide deep visual texture.
- **Interactivity**: Static illustrative layout with immersive branding-focused structural design and high-fidelity atmospheric polish.

## Source Code

### `feature200.tsx`
```tsx
"use client";

import { Zap, BarChart, Shield, Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature200 = ({ className }: Feature200Props) => {
  return (
    <section className={cn("py-32 bg-zinc-950", className)}>
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className={cn("relative h-full rounded-[2.5rem] p-12 overflow-hidden border border-white/10 group transition-all hover:border-white/20 hover:translate-y-[-4px]", "bg-radial-[at_80%_14%] via-zinc-950 via-75% to-zinc-950", feature.bgGradient)}>
              {/* Dynamic Grid Overlay */}
              <div className="absolute inset-0 h-full w-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_80%_14%,#000,transparent_40%)] [background-size:12px_12px]" />
              
              {/* Complex Icon Node */}
              <div className={cn("relative grid size-16 place-items-center rounded-full bg-gradient-to-b via-transparent p-0.5 mb-12", feature.bgGradient + "/50")}>
                <div className="grid size-full place-items-center rounded-full bg-zinc-900 shadow-2xl"><feature.icon className={cn("size-8", feature.iconColor)} /></div>
              </div>
              
              <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white mb-6 leading-none">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50 font-bold italic uppercase tracking-widest text-xs"><Check className="size-4 text-white" />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature200 };
```
