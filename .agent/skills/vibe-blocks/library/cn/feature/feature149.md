# Feature 149

## Metadata
- **Category**: Feature
- **Objective**: Dynamic dual-panel immersive hero with state-based background scaling and glassmorphism.
- **Use Case**: Primary "Split Personality" landing blocks, high-end platform role discovery, or immersive "Explore" sections.
- **Visual Style**: "Immersive Split Glass" aesthetic. Full-height (`h-[600px]`) relative stage. Key Design:
    - Background: Massive absolute-positioned Unsplash image (`rounded-2xl`).
    - Layout: Symmetrical `md:flex-row` split panels. Each panel is a text-heavy focus area with a custom `linear-to-b` glass overlay and large `text-5xl` bold headers.
    - Accents: Features high-precision "Inverted Corner" artifacts using `shadow` and `rounded` divs to create seamless transitions between panels and the stage border.
- **Interactivity**: Advanced hover interaction. Panels utilize `hover:md:w-2/3` transition to dynamically resize background focus when hovered. Soft `backdrop-blur` reveals.

## Source Code

### `feature149.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature149 = ({ className }: Feature149Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        <div className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl border">
          {/* Shared Global Stage Background */}
          <img src="..." className="absolute inset-0 z-[-1] h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />

          {/* Left Discovery Panel */}
          <div className="group relative flex h-[400px] md:h-[600px] w-full md:w-1/2 cursor-pointer flex-col items-start gap-6 p-10 transition-[width] duration-700 hover:md:w-[60%]" onClick={() => window.scrollTo(0,0)}>
             {/* Dynamic Glass Shim */}
             <div className="absolute inset-0 z-[-1] bg-linear-to-b from-black/60 to-black/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-700" />
             <Button variant="outline" className="rounded-full border-white/40 text-white italic font-bold">CRM Software</Button>
             <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">Streamline Sales</h1>
             <p className="max-w-md text-white/80 italic font-medium">Lorem ipsum...</p>
          </div>

          {/* Inverted Corner Divider Artifacts ... absolute divs ... */}

          {/* Right Discovery Panel */}
          <div className="group relative flex h-[400px] md:h-[600px] w-full md:w-1/2 cursor-pointer flex-col items-end gap-6 p-10 transition-[width] duration-700 hover:md:w-[60%]" onClick={() => console.log('right')}>
             <div className="absolute inset-0 z-[-1] bg-linear-to-t from-black/60 to-black/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-700" />
             <Button variant="outline" className="rounded-full border-white/40 text-white italic font-bold">Analytics Suite</Button>
             <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase text-right">Measure Success</h1>
             <p className="max-w-md text-white/80 italic font-medium text-right">Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature149 };
```
