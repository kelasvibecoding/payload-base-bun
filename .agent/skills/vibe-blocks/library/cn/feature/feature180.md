# Feature 180

## Metadata
- **Category**: Feature
- **Objective**: Authoritative comparison section highlighting platform benefits vs traditional methods.
- **Use Case**: Master "Why Us" landing blocks, sales optimization explainers, or high-fidelity product comparisons.
- **Visual Style**: "Structural Comparison Grid" aesthetic. Centered header with a specialized "How it works" `Badge` and massive `text-5xl` typography.
    - Tier 1 (Traditional): Simple `border` container with primary/70 muted text and negative `X` indicators.
    - Tier 2 (Platform): High-impact "Premium" container utilizing a specialized `bg-linear-to-br` from `primary` to `primary/20`. Features positive `Check` indicators and high-contrast bold typography.
- **Interactivity**: Static illustrative layout with high-quality structural contrast for conversion proofing.

## Source Code

### `feature180.tsx`
```tsx
"use client";

import { Check, X, Users, MessageSquare, Target, Bot } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature180 = ({ className }: Feature180Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Header Stage */}
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 pb-20 text-center">
          <Badge variant="outline" className="px-4 py-2 uppercase font-mono tracking-widest bg-muted/50">How it works</Badge>
          <h1 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl leading-tight">Optimizing sales</h1>
          <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">We use AI to automate the process...</p>
        </div>
        
        {/* Symmetrical Proof Grid */}
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Negative Proof Area */}
          <div className="flex flex-col items-center gap-8 group">
            <div className="flex items-center gap-3"><X className="h-8 text-destructive animate-pulse-slow" /><p className="text-2xl font-black italic tracking-tighter uppercase">Without Acme</p></div>
            <div className="w-full rounded-3xl border border-muted-foreground/10 bg-accent/5 p-12 shadow-inner">
               <ul className="flex flex-col gap-10 font-bold italic uppercase tracking-widest text-primary/40 opacity-60">
                 <li className="flex items-start gap-4"><Users className="size-6" /><p>Limited targeting</p></li>
               </ul>
            </div>
          </div>
          
          {/* Positive Platform Area */}
          <div className="flex flex-col items-center gap-8 group">
            <div className="flex items-center gap-3"><Check className="h-8 text-primary" /><p className="text-2xl font-black italic tracking-tighter uppercase">With Acme</p></div>
            <div className="w-full rounded-3xl p-1 bg-linear-to-br from-primary via-primary/30 to-primary shadow-3xl transform transition-transform group-hover:scale-[1.02]">
               <div className="rounded-[1.5rem] bg-card p-12 shadow-2xl">
                 <ul className="flex flex-col gap-10 font-bold italic uppercase tracking-widest text-primary">
                    <li className="flex items-start gap-4"><Target className="size-6" /><p>Advanced targeting</p></li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature180 };
```
