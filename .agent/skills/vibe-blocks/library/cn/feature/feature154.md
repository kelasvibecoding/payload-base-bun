# Feature 154

## Metadata
- **Category**: Feature
- **Objective**: Informational hero section with high-impact dual-marquee badge scrolling.
- **Use Case**: Master "Capabilities" landing hero, platform feature directories, or "App Ecosystem" overview sections.
- **Visual Style**: "Automated Badge Marquee" aesthetic. 
    - Zone 1 (Header): centered bold section with broad `text-6xl` title and specialized "Automations" `Badge`.
    - Zone 2 (Marquee Stage): Massive relative container featuring dual-row `Marquee` components. The first row scrolls forwards, the second reverse. 
    - Badge Design: Specialized `rounded-full bg-muted` pills containing a matching `lucide-react` icon and bold category title (`AI Processing`, `Workflows`, etc.).
- **Interactivity**: Dynamic infinite-scroll animation using `Marquee`. Edge-fade masks (`from-background`) provide a seamless transition from the viewport edges. High informational density.

## Source Code

### `feature154.tsx`
```tsx
"use client";

import { Code, GitBranch, Zap, Clock, Activity, Brain } from "lucide-react";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";

const Feature154 = ({ className }: Feature154Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Authority Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 text-center pb-20">
          <Badge variant="outline" className="px-4 py-2 uppercase font-mono tracking-widest bg-primary/10 text-primary border-primary/20">Automations</Badge>
          <h1 className="text-4xl font-extrabold md:text-7xl italic tracking-tighter uppercase leading-none">The best way to automate...</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground italic font-medium">Streamline operations with intelligent automation... Eliminate repetitive tasks.</p>
        </div>
        
        {/* The Marquee Stage */}
        <div className="relative mt-10 overflow-hidden py-10 scale-110">
          <Marquee className="[--duration:40s]">
            {badges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3 rounded-full border bg-muted px-6 py-3 font-bold uppercase italic tracking-widest text-sm hover:bg-accent transition-colors cursor-default mx-2">
                <span className="text-primary">{badge.icon}</span> {badge.title}
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:40s] mt-6">
            {badges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3 rounded-full border bg-muted px-6 py-3 font-bold uppercase italic tracking-widest text-sm hover:bg-accent transition-colors cursor-default mx-2">
                <span className="text-primary">{badge.icon}</span> {badge.title}
              </div>
            ))}
          </Marquee>
          {/* Edge Glow Artifacts */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background" />
        </div>
      </div>
    </section>
  );
};

export { Feature154 };
```
