# Feature 121

## Metadata
- **Category**: Feature
- **Objective**: Interactive state-switching feature grid with animated detail reveals.
- **Use Case**: Technical capability deep-dives, "Under The Hood" product explanations, or high-interactivity service blocks.
- **Visual Style**: "Interactive Toggle Grid" aesthetic. `sm:grid-cols-2` tight-gap grid inside a `bg-border` container. Each block (`aspect-square`) is interactive. Default: Centered primary-colored circle with an icon (`Timer`, `Zap`, `ZoomIn`). Click State: Icon circle slides out of view (`-translate-y-40`) and detailed description text slides in. Custom `Block` component handles internal state and transitions.
- **Interactivity**: Clean React-driven interactivity via `useState`. Smooth scale transisions on hover and slide transitions on click. High engagement factor.

## Source Code

### `feature121.tsx`
```tsx
"use client";

import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const Feature121 = ({ className }: Feature121Props) => {
  return (
    <section className={cn("relative container py-32", className)}>
      <div className="m-auto grid w-full gap-px overflow-hidden rounded-md bg-border sm:max-w-[600px] sm:grid-cols-2 shadow-2xl">
        {features.map((feature) => (
          <Block key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

// Internal Block Component
const Block = ({ title, description, icon }) => {
  const [isBlockHover, setBlockHover] = useState(false);
  const [isBlockClick, setBlockClick] = useState(false);
  
  return (
    <section
      className="relative aspect-square cursor-pointer overflow-hidden bg-accent px-6 py-3.5 transition duration-300 hover:bg-[#e9e9e9]"
      onMouseOver={() => setBlockHover(true)}
      onMouseOut={() => setBlockHover(false)}
      onClick={() => setBlockClick((prev) => !prev)}
    >
      <p className="mr-auto text-lg uppercase font-bold tracking-tighter italic">{title}</p>
      {/* Icon Circle */}
      <div className={cn(
        "absolute inset-0 m-auto flex size-28 items-center justify-center rounded-full bg-primary transition-all duration-300 shadow-xl",
        isBlockHover && "scale-110 shadow-2xl",
        isBlockClick && "-translate-y-40 opacity-0"
      )}>
        {icon}
      </div>
      {/* Hidden Description */}
      <p className={cn(
        "absolute inset-0 m-auto h-fit translate-y-40 px-6 py-3.5 opacity-0 transition-all duration-300 italic",
        isBlockClick && "translate-y-0! opacity-100!"
      )}>
        {description}
      </p>
    </section>
  );
};

export { Feature121 };
```
