# Feature 238

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric browser stack showcase featuring immersive header typography and sequential animated showrooms.
- **Use Case**: Primary "Component Library" landing rows, technical product conversion blocks, or executive toolkit indices.
- **Visual Style**: "Executive Browser Showroom" aesthetic. Centered authority header focusing on massive `text-[100px]` bold typography and high-contrast `tracking-tighter` kerning.
    - Leadership Hub: Vertical staging area using stylized `rounded-2xl` conversion buttons with intricate `box-shadow` depth and high-contrast labels. Bottom-anchored "Book a demo" action uses transition-enabled icon indicators.
    - Visual Stage: High-complexity dynamic showroom featuring a stylized "Browser Stack" architecture. Nodes utilize "Traffic Light" utility decorations (`red-500`, `yellow-500`, `green-500`) and high-radius `rounded-3xl` framing to simulate a professional development environment.
    - Interaction Hub: features specialized sequential logic using `whileHover` to lift the browser stack (`y: -50`) on discover. Easing curves utilize professional `transition` parameters to create a luxury transformation effect.
- **Interactivity**: Fully interactive React component utilizing state-driven animation offsets, sequential lift interactions, and professional structural polish.

## Source Code

### `feature238.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Feature238 = ({ className }: Feature238Props) => {
  return (
    <section className={cn("py-32 bg-background overflow-hidden", className)}>
      <div className="container flex flex-col items-center">
        {/* Leading Authority Staging */}
        <div className="flex items-center gap-4 mb-10">
           <img src="block-1.svg" className="size-8" />
           <h2 className="text-2xl font-black italic uppercase tracking-tighter">Just Copy Paste.</h2>
        </div>
        <h1 className="text-center text-7xl lg:text-[140px] font-black italic tracking-tighter uppercase leading-[0.8] mb-16">Amazing Components.</h1>
        <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed max-w-3xl mx-auto text-center">Discover our collection of beautifully designed, ready-to-use components...</p>

        {/* Action Registry Hub */}
        <div className="mt-16 flex flex-col items-center gap-8 relative z-20">
           <Button size="lg" className="rounded-[2.5rem] px-16 py-10 font-black italic uppercase tracking-widest text-xl bg-primary shadow-4xl border-4 border-white transition-all hover:scale-105">Sign up for free</Button>
           <a href="#" className="group flex items-center gap-4 font-black italic uppercase tracking-widest text-sm text-muted-foreground hover:text-foreground">Book a demo <ChevronRight className="size-4 group-hover:ml-4 transition-all" /></a>
        </div>

        {/* Dynamic Browser Showroom Stack */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative mt-40 w-full max-w-6xl h-[600px]">
           {/* Professional Showroom Logic */}
           {[1, 2, 3].map((i) => (
             <motion.div key={i} initial={{ y: 300 }} animate={{ y: 0 }} whileHover={{ y: -80 }} transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.1 }} className={cn("absolute left-1/2 -translate-x-1/2 p-4 bg-muted rounded-[4rem] border-8 border-white shadow-4xl w-[700px]", i === 2 ? "z-30 top-0" : "z-10 top-20 opacity-50")}>
                <Card className="rounded-[3rem] border-0 overflow-hidden relative size-full min-h-[400px]">
                   <CardContent className="p-0 size-full grid place-items-center bg-background">
                      <div className="absolute top-8 left-8 flex gap-3">
                         <div className="size-4 rounded-full bg-red-400" /><div className="size-4 rounded-full bg-yellow-400" /><div className="size-4 rounded-full bg-green-400" />
                      </div>
                      <img src="logo.svg" className="size-32" />
                   </CardContent>
                </Card>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
};
```
