# Feature 181

## Metadata
- **Category**: Feature
- **Objective**: Stylized numeric index gallery for rapid platform capability discovery.
- **Use Case**: "Core Platforms High-lights" blocks, detailed feature indices, or onboarding directory pages.
- **Visual Style**: "Numeric Index Mosaic" aesthetic. 
    - Header: Dynamic left-aligned stage featuring bold `text-4xl` headers and a high-radius conversion `Button`.
    - Feature Grid: `lg:grid-cols-4` symmetrical grid of informational modules. 
    - Item Design: Leading oversized photographic backdrop (`text-9xl`) utilizing a specialized `bg-linear-to-r` mask from `white` to `transparent` to create an elegant architectural numeric anchor. Detailed text modules below feature bold headers and primary `text-muted-foreground` summaries. 
    - Proofing: Each item features a baseline `Badge` with a `Clock` icon to indicate "Read/Implementation time".
- **Interactivity**: Static illustrative layout with sophisticated structural cadence and high-quality numeric typography.

## Source Code

### `feature181.tsx`
```tsx
"use client";

import { Clock, Zap, Pyramid, Sparkle, BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature181 = ({ className }: Feature181Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Editorial Header */}
        <div className="text-left mb-20 border-b pb-12">
          <h2 className="mb-8 text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl">Powerful Features</h2>
          <Button className="rounded-full px-8 py-6 font-bold shadow-2xl group">Get Started <ArrowRight className="ml-2 size-4 group-hover:translate-x-1" /></Button>
        </div>

        {/* Multi-Numeric High-Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-muted-foreground/10 border shadow-2xl rounded-[3rem] overflow-hidden">
          {DATA.map((feature, index) => (
            <div key={index} className="flex flex-col bg-background p-10 hover:bg-accent/10 transition-all group">
              <div className="relative mb-8">
                <h1 className="bg-linear-to-r from-primary/20 via-primary/10 to-transparent bg-clip-text text-[140px] font-black italic tracking-tighter leading-none opacity-40">0{index + 1}</h1>
              </div>
              <h3 className="text-xl font-bold italic uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground italic font-medium leading-relaxed mb-8">{feature.description}</p>
              <Badge variant="outline" className="w-fit gap-2 py-2 px-4 rounded-full font-mono text-xs uppercase opacity-60"><Clock className="size-3" /> 5 Minute</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature181 };
```
