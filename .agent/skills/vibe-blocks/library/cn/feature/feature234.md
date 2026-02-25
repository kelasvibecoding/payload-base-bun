# Feature 234

## Metadata
- **Category**: Feature
- **Objective**: High-fidelity masterpiece display section featuring a fanned deck of interactive cards and massive editorial typography.
- **Use Case**: Master "Component Gallery" landing rows, artistic portfolio showrooms, or executive platform discovery hubs.
- **Visual Style**: "Living Masterpiece Stage" aesthetic. Centered authority header with massive `text-[85px]` bold typography and high-contrast `tracking-tighter` kerning.
    - Interaction Hub: High-complexity dynamic card registry utilizing a curated "Fanned Deck" architecture. 
    - Logic: features seven informational nodes staggered across the viewport. Items utilize variable `rotate` values and `Math.pow` driven `yOffset` calculations to create a professional overlapping arc. 
    - Card Architecture: Symmetrical `rounded-3xl` containers featuring architectural shadow depths and selective `bg-black` vs `bg-muted` backgrounds to create a high-fidelity visual rhythm.
    - Interactivity: features specialized `onMouseEnter/onMouseLeave` state logic utilizing `framer-motion` to provide a vertical lift (`yOffset - 20`) and `zIndex` authority to the active masterpieces.
- **Interactivity**: Fully interactive React component utilizing state-driven animation offsets, hover-enabled depth shifts, and professional structural polish.

## Source Code

### `feature234.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const CardsContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="my-32 flex items-center justify-center">
      {cards.map((card, index) => {
        const yOffset = Math.pow(Math.abs(index - 3), 1.2) * 20;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} initial={{ y: yOffset }} animate={{ y: isHovered ? yOffset - 40 : yOffset, zIndex: isHovered ? 50 : index }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <div className={cn("relative size-60 rounded-[3rem] border-8 border-white overflow-hidden transition-all duration-500 shadow-3xl", card.isDark ? "bg-black" : "bg-muted")} style={{ transform: `rotate(${card.rotate}deg)`, marginLeft: index === 0 ? "0px" : "-100px" }}>
              <img src={card.image} className="size-full object-cover" alt={card.imageAlt} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
```
