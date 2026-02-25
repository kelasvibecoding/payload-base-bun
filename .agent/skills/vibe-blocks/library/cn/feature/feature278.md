# Feature 278

## Metadata
- **Category**: Feature
- **Objective**: High-density feature grid featuring color-orchestrated icon backgrounds, left-aligned structural cards, and professional header coordination.
- **Use Case**: Master "Core Advantages" landing rows, executive platform benefits, or technical product capability justified blocks.
- **Visual Style**: "Technical Advantage Matrix" aesthetic. Symmetrical `grid-cols-3` architecture coordinating six high-fidelity informational nodes.
    - Animation Logic: features dynamic `AnimatePresence` hover background highlights utilizing specialized `item.bgColor` (Pink, Green, Sky, Purple, Orange). logic provides color-matched sliding backgrounds to enhance grid legibility.
    - Card Architecture: features left-aligned `Card` modules utilizing `bg-background` containers and high-radius `rounded-3xl` corners. 
    - Icon Narrative: Logic utilizes specialized `react-icons/fa` modules (`FaRocket`, `FaCog`, `FaShieldAlt`) hosted within high-radius `rounded-2xl` color-themed backgrounds.
    - Hierarchy: Centered vertical assembly for headers focusing on "Features That speak for Themselves". Logic utilizes massive `text-5xl` semi-bold headers with localized `opacity-50` modifiers for stylistic contrast.
    - Polish: features transition-enabled color orchestration and refined descriptive leads. components utilize high-legibility typographic hierarchies for titles and descriptions.
- **Interactivity**: Fully interactive React component with color-matched hover animations, transition-enabled list logic, and professional rhythmic coordination.

## Source Code

### `feature278.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaRocket, FaCog, FaShieldAlt } from "react-icons/fa";

const Feature278 = ({ className }: Feature278Props) => {
  return (
    <section className={cn("py-32 bg-muted/40", className)}>
      <div className="container flex flex-col items-center space-y-32">
        <h2 className="text-6xl lg:text-[100px] leading-tight font-black italic uppercase tracking-tighter text-center">Absolute<br/><span className="opacity-30">Supremacy.</span></h2>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-7xl">
           {ITEMS.map((item, idx) => (
             <div key={idx} className="group relative p-2" onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}>
                <AnimatePresence>
                  {hovered === idx && (
                    <motion.span layoutId="advantageBg" className={cn("absolute inset-0 rounded-[2.5rem] z-0", item.bgColor)} />
                  )}
                </AnimatePresence>
                
                <div className="relative z-10 bg-white dark:bg-accent/10 rounded-[3rem] p-12 text-left h-full border-4 border-white shadow-4xl group-hover:scale-105 transition-all duration-500">
                   <div className={cn("size-16 rounded-2xl flex items-center justify-center mb-16", item.bgColor, item.color)}>
                      <item.icon className="size-8" />
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-3xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
```
