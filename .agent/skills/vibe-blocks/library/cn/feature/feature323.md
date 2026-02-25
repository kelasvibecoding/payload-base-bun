# Feature 323

## Metadata
- **Category**: Feature
- **Objective**: Advanced product category discovery section featuring dynamic transition logic, high-fidelity photographic visual backgrounds, and multi-direction interactive controls.
- **Use Case**: Master "E-commerce Discovery" landing rows, executive product category showcases, or technical platform hub discovery blocks.
- **Visual Style**: "Category Carousel" aesthetic. Global container utilizing a high-legibility centered vertical assembly and immersive focal backgrounds.
    - Interaction Node: features specialized `PlusCircle` feature cards that expand on selection to reveal detailed technical descriptors. components utilize high-legibility typographic hierarchies host within `rounded-[24px]` backgrounds.
    - Controls Hub: Symmetrical `ChevronUp/Down` vertical assembly (Desktop) and `ChevronLeft/Right` horizontal triggers (Mobile). logic focuses on transition-enabled directionality (`setDirection(1 | -1)`).
    - Animation Logic: High-complexity `variants` coordination utilizing scale (`0.6`), blur (`20px`), and coordinate offsets to provide an atmospheric "Expanding Card" transition.
    - Leadership Hub: Centered vertical assembly highlighting massive `text-5xl` semi-bold headers focusing on "Discover Our Products". Logic focuses on high-radius `rounded-4xl` background stages hosting `object-cover` assets.
- **Interactivity**: Fully interactive React component with multi-axis navigation, real-time transition logic, and premium product orchestration.

## Source Code

### `feature323.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Feature323 = ({ className }: Feature323Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-20">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-center">Master Collection.</h2>

        <div className="relative min-h-[70vh] rounded-[4rem] bg-muted overflow-hidden p-12">
           {/* Interactive Choice Matrix */}
           <div className="relative z-10 flex items-center gap-12">
              <Controls handleNext={next} handlePrevious={prev} />
              <div className="flex flex-col gap-6">
                 {FEATURES.map((item, idx) => (
                   <FeatureCard 
                      key={idx} 
                      isActive={idx === active} 
                      onClick={() => setActive(idx)} 
                   />
                 ))}
              </div>
           </div>

           {/* Immersive focal Anchor */}
           <div className="absolute inset-0 z-0 lg:mask-[linear-gradient(to_right,transparent,black_30%)]">
              <AnimatePresence mode="popLayout" custom={direction}>
                 <motion.img 
                    key={active}
                    src={item.image}
                    variants={VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="size-full object-cover"
                 />
              </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
};
```
