# Feature 286

## Metadata
- **Category**: Feature
- **Objective**: Premium product collection showcase featuring star-field animations, active conversion logic, and systematic grid coordination.
- **Use Case**: Master "Collection Row" landing blocks, executive e-commerce summaries, or technical product discovery grids.
- **Visual Style**: "Luminous Registry" aesthetic. Symmetrical `grid-cols-3` architecture coordinating three high-fidelity product cards.
    - Animation Logic: features specialized `GlowingStarsBackgroundCard` coordination within each node to provide a dynamic, technical background texture ("INTEGRATIONS" themed).
    - Card Architecture: features architectural `div` containers utilizing localized `bg-muted/60` backgrounds and high-radius `rounded-3xl` corners. 
    - Item Coordination: Logical assembly highlighting top-aligned star fields, central product titles ("June Collection", "Summer Essentials"), and bottom-aligned conversion hubs.
    - Interaction Node: features specialized "Add to cart" `div` anchors utilizing `ShoppingCartIcon` and secondary price indicators ("Starting At $129").
    - Leadership Hub: Centered vertical assembly highlighting massive `text-6xl` bold headers focusing on "Integrate with your fav apps".
- **Interactivity**: Fully interactive React component with localized star-field animations, transition-enabled list logic, and professional conversion cadence.

## Source Code

### `feature286.tsx`
```tsx
"use client";

import { ShoppingCartIcon } from "lucide-react";
import { GlowingStarsBackgroundCard } from "@/components/aceternity/glowing-stars";

const Feature286 = ({ className }: Feature286Props) => {
  return (
    <section className={cn("py-32 bg-background dark overflow-hidden", className)}>
      <div className="container space-y-24 flex flex-col items-center">
        {/* Leadership Hub */}
        <div className="text-center space-y-6">
           <span className="text-xs font-black italic tracking-[0.4em] uppercase text-primary">Integrations</span>
           <h1 className="text-6xl lg:text-[110px] leading-none font-black italic uppercase tracking-tighter">Fav Apps Sync.</h1>
        </div>

        {/* Global Collection Registry */}
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-7xl">
           {ITEMS.map((item, idx) => (
             <div key={idx} className="group bg-accent/5 rounded-[4rem] border-8 border-white p-12 shadow-4xl hover:scale-105 transition-all duration-700">
                <div className="h-60 rounded-[2.5rem] bg-black/40 overflow-hidden mb-12 shadow-2xl relative">
                   <GlowingStarsBackgroundCard className="size-full border-none !bg-none" />
                </div>
                
                <div className="flex items-center gap-4 mb-16">
                   <h3 className="text-4xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                   <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-black italic tracking-widest">50+</span>
                </div>

                <div className="flex justify-between items-center bg-white dark:bg-accent/10 rounded-full p-2 border-4 border-white shadow-xl">
                   <div className="px-10 py-4 rounded-full bg-primary text-white font-black italic uppercase tracking-widest flex items-center gap-4 cursor-pointer hover:bg-primary/90">Add <ShoppingCartIcon className="size-5" /></div>
                   <div className="text-right px-8">
                      <p className="text-xs italic font-bold opacity-30 leading-none">From</p>
                      <h4 className="text-3xl font-black italic uppercase tracking-tighter leading-none">{item.price}</h4>
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
