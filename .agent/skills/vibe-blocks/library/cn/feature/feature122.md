# Feature 122

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric bento grid with state-based content blocks and interactive link-cards.
- **Use Case**: Primary capability hub, service directory, or landing page "How We Help" sections.
- **Visual Style**: "Highlight Bento Grid" aesthetic. `md:grid-cols-3 md:grid-rows-3` asymmetric layout. Smaller blocks feature centered heavy icons (`MessageCircleMore`, `Blocks`), bold titles, and animated `ArrowRight` indicators. Large anchor block (`col-span-2`): features a high-visibility header, "Get Started" primary button, and a large horizontal image (`placeholder-dark-1.svg`).
- **Interactivity**: Smaller cards feature hover state transitions including `bg-accent` changes and primary-colored border-bottom reveals. Full mobile-to-desktop responsive grid.

## Source Code

### `feature122.tsx`
```tsx
"use client";

import {
  ArrowRight,
  Blocks,
  Fingerprint,
  LayoutPanelTop,
  MessageCircleMore,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature122 = ({ className }: Feature122Props) => {
  return (
    <section className={cn("container py-40", className)}>
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
        {/* Capability Link Blocks */}
        <DataBlock title="Communication" description="..." icon={<MessageCircleMore className="..." />} />
        
        {/* Large Highlight Block */}
        <div className="flex w-full grow flex-col gap-6 rounded-lg bg-accent/80 p-6 transition-all hover:bg-accent md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-2 lg:p-10 shadow-xl overflow-hidden border">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <h3 className="max-w-[85%] text-xl font-bold tracking-tight lg:text-3xl italic">Powerful Features</h3>
            <Button size="lg">Get Started</Button>
          </div>
          <img src="..." className="h-full w-full rounded-lg object-cover md:aspect-[3] shadow-2xl border border-white/10" />
        </div>
      </div>
    </section>
  );
};

// Internal Card Component
const DataBlock = ({ title, description, icon }) => {
  const [isBlockHover, setBlockHover] = useState(false);
  return (
     <a href="#" onMouseEnter={() => setBlockHover(true)} onMouseLeave={() => setBlockHover(false)} className="group flex flex-col rounded-lg bg-accent/80 p-6 hover:bg-accent transition-all">
       <h3 className={cn("text-lg font-bold border-b border-transparent transition-all", isBlockHover && "border-primary/80")}>{title}</h3>
       {/* ... content */}
       <div className="mt-auto flex justify-between items-end">
          {icon} <ArrowRight className={cn("size-5 transition-transform", isBlockHover && "translate-x-1.5")} />
       </div>
     </a>
  )
}

export { Feature122 };
```
