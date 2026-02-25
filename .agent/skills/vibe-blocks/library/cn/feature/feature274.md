# Feature 274

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric trust-building section featuring canvas-reveal interaction logic, metric authority, and stylized architectural framing.
- **Use Case**: Master "Data Visualization" landing rows, executive trust discovery blocks, or technical product metric showrooms.
- **Visual Style**: "Canvas Intelligence Stage" aesthetic. Global container utilizing a centered authority header and immersive interaction nodes.
    - Interaction Logic: High-complexity `CanvasRevealEffect` coordination. cards reveal interactive light patterns and localized color shifts (Emerald, Pink, Sky, Orange) on active hover.
    - Visual Node: Symmetrical `grid-cols-4` grid registry focused on massive metric anchors (99%, 50+, $1.2M). 
    - Item Architecture: Master `Card` modules utilizing specialized `BorderIllustration` anchors to coordinate technical silhouette corners.
    - Polish: Logic utilizes `AnimatePresence` to transition between static metric text and active reveal narratives. features high-contrast typographic hierarchy and architectural coordinate grids.
- **Interactivity**: Fully interactive React component with localized canvas pathing, transition-enabled hover reveals, and premium structural cadence.

## Source Code

### `feature274.tsx`
```tsx
"use client";

import { CanvasRevealEffect } from "@/components/aceternity/canvas-reveal-effect";

const Feature274 = ({ className }: Feature274Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container flex flex-col items-center">
        <h2 className="text-6xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none mb-32 text-center">Trust Records.</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
           {METRICS.map((item, idx) => (
             <Card 
                key={idx}
                defaultText={item.val} 
                revealText={item.label} 
                containerClassName={item.color} 
             />
           ))}
        </div>
      </div>
    </section>
  );
};

// Internal Logic: Stylized Reveal Card
const Card = ({ defaultText, revealText, containerClassName }) => {
   return (
     <div className="group relative h-[400px] border-4 border-primary/10 rounded-[3rem] overflow-hidden flex items-center justify-center p-8 bg-accent/5">
        <div className="relative z-20 text-center space-y-4">
           {/* Static Leader */}
           <div className="text-6xl font-black italic uppercase tracking-tighter group-hover:opacity-0 transition-opacity">{defaultText}</div>
           {/* Reveal Mastery */}
           <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all">
              <div className="text-4xl font-black italic uppercase tracking-tighter text-white">{defaultText}</div>
              <p className="text-lg text-white font-bold italic uppercase tracking-widest">{revealText}</p>
           </div>
        </div>
        
        {/* Dynamic Light Canvas */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
           <CanvasRevealEffect containerClassName={containerClassName} />
        </div>
     </div>
   )
}
```
