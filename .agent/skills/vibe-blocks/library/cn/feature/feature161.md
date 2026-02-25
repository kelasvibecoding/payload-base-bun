# Feature 161

## Metadata
- **Category**: Feature
- **Objective**: Stylized architectural split-hero section with drafting crosshairs and visual separators.
- **Use Case**: High-end landing hero sections for developer tools, agency portfolios, or technical product manifestos.
- **Visual Style**: "Blueprinted Authority" aesthetic. Unified container frame using `border border-muted-foreground/25`. 
    - Drafting Elements: Features 8 absolute-positioned "Crosshair" lines and corners extending beyond the border to simulate a technical drafting board environment.
    - Split Layout: 
        - Left (Narrative): Bold `text-4xl` summary with secondary headers and large primary/ghost conversion buttons.
        - Right (Awards Area): Features vertical balanced "Drafting Lines" framing a central container of prominent high-res awards logos (Product Hunt, etc.) on a horizontally-separated stage.
- **Interactivity**: Static illustrative layout with sophisticated structural design.

## Source Code

### `feature161.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature161 = ({ className }: Feature161Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container overflow-visible">
        <div className="relative grid grid-cols-1 border border-muted-foreground/25 bg-card/10 lg:grid-cols-2 shadow-2xl">
          {/* Blueprint Artifacts (Corner Extensions) */}
          <div className="absolute top-[-16px] left-[-1px] h-4 w-[1px] bg-primary/40" />
          <div className="absolute top-[-1px] left-[-16px] h-[1px] w-4 bg-primary/40" />
          
          {/* Left Narrative Stage */}
          <div className="relative border-b border-muted-foreground/25 p-10 md:p-20 lg:border-r lg:border-b-0 flex flex-col justify-center">
             <h1 className="text-4xl md:text-5xl font-extrabold italic tracking-tighter uppercase mb-4">Award winning components</h1>
             <h3 className="mb-10 text-xl text-muted-foreground italic font-medium leading-relaxed max-w-sm">Expertly designed UI building blocks...</h3>
             <div className="flex items-center gap-4">
                <Button className="rounded-full px-8 font-bold">Get Started</Button>
                <Button variant="outline" className="rounded-full px-8">Docs</Button>
             </div>
          </div>
          
          {/* Award Proof Area (Technical Frame) */}
          <div className="grid grid-cols-1 grid-rows-7 h-full bg-accent/20">
             <div className="row-start-1 row-end-2 flex justify-evenly">
                <div className="h-full w-px bg-muted-foreground/25" /><div className="h-full w-px bg-muted-foreground/25" />
             </div>
             <div className="row-start-2 row-end-7 flex items-center justify-center p-12 border-y border-muted-foreground/25">
                <div className="flex flex-col md:flex-row items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  <img src="..." className="h-14 object-contain" title="product hunt winner" />
                  <img src="..." className="h-14 object-contain" />
                </div>
             </div>
             <div className="row-start-7 row-end-8 flex justify-evenly">
                <div className="h-full w-px bg-muted-foreground/25" /><div className="h-full w-px bg-muted-foreground/25" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature161 };
```
