# Feature 275

## Metadata
- **Category**: Feature
- **Objective**: Stylized narrative explainer section featuring canvas reveal transitions, numbered sequential mastery, and immersive thematic depth.
- **Use Case**: Primary "Secret Sauce" landing rows, executive platform values, or technical brand identity discovery blocks.
- **Visual Style**: "Narrative Canvas Stage" aesthetic. Global container utilizing a centered instructional header and stylized instructional nodes.
    - Leadership Hub: Centered authority area highlighting massive `text-7xl` bold headers and refined lead descriptors.
    - Interaction Engine: High-complexity `CanvasRevealEffect` coordination utilizing stylized radial masks. logic focuses on sequential mastery (01, 02, 03) through dynamic light reveals.
    - Node Architecture: "Hover to reveal" cards utilizing high-radius `rounded-3xl` containers. items transition from localized numeric indicators to full-height narrative blocks featuring detailed platform explainers.
    - Narrative Polish: features stylized absolute-positioned containers utilizing `bg-black/90` overlays and high-contrast typographic hierarchy to provide extreme visual pop on active discovery.
- **Interactivity**: Fully interactive React component with transition-enabled canvas paths, radial-masked motion, and premium structural cadence.

## Source Code

### `feature275.tsx`
```tsx
"use client";

import { CanvasRevealEffect } from "@/components/aceternity/canvas-reveal-effect";

const Feature275 = ({ className }: Feature275Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container flex flex-col items-center">
        <h2 className="text-6xl lg:text-[140px] leading-[0.8] font-black italic uppercase tracking-tighter mb-40 text-center">Secrets of<br/>Success.</h2>

        <div className="grid md:grid-cols-3 gap-12 w-full max-w-6xl">
           <RevealCard 
              id="01" 
              title="Work Hard" 
              desc="Lorem ipsum..." 
              color="bg-emerald-950" 
           />
           <RevealCard 
              id="02" 
              title="Mind Focus" 
              desc="Lorem ipsum..." 
              color="bg-purple-950" 
           />
           <RevealCard 
              id="03" 
              title="Stay Positive" 
              desc="Lorem ipsum..." 
              color="bg-sky-950" 
           />
        </div>
      </div>
    </section>
  );
};

// Internal Logic: Professional Master Card
const RevealCard = ({ id, title, desc, color }) => (
   <div className="group relative h-[500px] bg-accent/5 rounded-[4rem] border-8 border-white shadow-4xl flex items-center justify-center overflow-hidden cursor-help">
      {/* Abstract Start */}
      <div className="text-8xl font-black italic uppercase tracking-tighter opacity-20 group-hover:scale-0 group-hover:opacity-0 transition-all duration-700">{id}</div>

      {/* Narrative Reveal */}
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-16 opacity-0 group-hover:opacity-100 transition-opacity z-20 group-hover:translate-y-0 translate-y-20 transition-all duration-500">
         <h3 className="text-5xl font-black italic uppercase tracking-tighter text-white">#{id}<br/>{title}</h3>
         <p className="text-xl text-white/60 italic font-medium leading-relaxed">{desc}</p>
      </div>

      {/* Living Canvas */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none">
         <CanvasRevealEffect containerClassName={color} />
      </div>
   </div>
);
```
