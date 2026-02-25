# Feature 152

## Metadata
- **Category**: Feature
- **Objective**: Stylized integration "Orbit" stage with concentric geometric visual architecture.
- **Use Case**: Master "Integrations" landing blocks, partner ecosystem overviews, or technical "Centralized Hub" explainers.
- **Visual Style**: "Concentric Orbit Hub" aesthetic. Centered header with high-end typography and a "View Integrations" link. Key visual: an absolute-positioned background composed of 11 concentric indigo orbit circles (`rounded-full border`) with increasing diameter. 
- **Icon Distribution**: Integration `IconElem` components are carefully positioned (justify-around, justify-center, justify-evenly) at different vertical levels to simulate brand logos orbiting the core value proposition.
- **Masking**: Uses complex `linear-to-b`, `linear-to-l`, and `linear-to-r` background masks to smoothly fade the orbit architecture into the page background.
- **Interactivity**: Static illustrative layout with sophisticated structural design.

## Source Code

### `feature152.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature152 = ({ className }: Feature152Props) => {
  return (
    <section className={cn("py-32 overflow-hidden", className)}>
      <div className="container">
        {/* Typographic Core Stage */}
        <div className="mb-16 flex flex-col items-center md:mb-6 z-10 relative">
          <Badge variant="secondary" className="mb-6 bg-muted px-4 py-2 uppercase font-mono tracking-widest">Integrations</Badge>
          <h1 className="mb-6 max-w-xl text-center text-4xl font-extrabold italic tracking-tighter uppercase md:text-6xl">Connect your stack</h1>
          <p className="mb-8 max-w-sm text-center text-muted-foreground italic font-medium">Lorem ipsum dolor sit...</p>
          <Button variant="link" asChild className="text-primary font-bold uppercase tracking-widest">
            <a href="#">View Integrations <ArrowRight className="size-4 ml-2" /></a>
          </Button>
        </div>
        
        {/* The Orbit Arena */}
        <div className="relative mx-auto flex max-w-4xl flex-col gap-5 pb-8">
          {/* Symmetrically Distributed Logos */}
          <div className="flex justify-around md:-mb-[30px]">{/* IconElem pair 1 */}</div>
          <div className="flex justify-center md:-mb-[30px]">{/* Central IconElem */}</div>
          <div className="flex justify-evenly md:-mb-[30px]">{/* IconElem pair 2 */}</div>
          
          {/* Geometric Orbit Background */}
          {[...Array(11)].map((_, index) => (
            <div key={index} className="absolute -bottom-2 left-1/2 z-[-2] aspect-square rounded-full border border-primary/10" style={{ width: 60 + 90 * index + "px", transform: "translateX(-50%) translateY(50%)" }} />
          ))}
          
          {/* Fade Masks */}
          <div className="absolute inset-0 z-[-1] bg-linear-to-b from-background via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-indigo-500/20" />
        </div>
      </div>
    </section>
  );
};

export { Feature152 };
```
