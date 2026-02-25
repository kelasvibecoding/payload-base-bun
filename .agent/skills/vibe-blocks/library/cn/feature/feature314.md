# Feature 314

## Metadata
- **Category**: Feature
- **Objective**: Advanced creative studio gallery featuring multi-scale grid assembly, motion-scaled visual anchors, and professional discovery headers.
- **Use Case**: Master "Insight Showcase" landing rows, executive platform capability discovery sections, or technical visual blog galleries.
- **Visual Style**: "Glitch Narrative Studio" aesthetic. Multi-node grid registry coordinating "small cards" for blog/insight highlights (Left) with a massive "big card" utilizing glitch-art photography (Right).
    - Animation Logic: features dynamic `motion.img` coordination within the master card utilizing localized `whileHover={{ scale: 1.05 }}` transition-enabled scaling. logic provides an atmospheric visual expansion to enhance engagement.
    - Card Architecture: features architectural `Card` modules utilizing localized `bg-white` and `rounded-xl` borders. items coordinate top-aligned informational badges host within photographic visual stages.
    - Icon Narrative: Logic utilizes specialized `Plus` iconography host within secondary background circles host within `absolute top-0 right-0` positions.
    - Leadership Hub: features massive `text-5xl` semi-bold headers focusing on "Explore our creative studio". components utilize high-legibility conversion triggers host within `rounded-xl` primary buttons.
- **Interactivity**: Fully interactive React component with localized image magnification, transition-enabled list logic, and professional studio coordination.

## Source Code

### `feature314.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const Feature314 = ({ className }: Feature314Props) => {
  return (
    <section className={cn("py-32 bg-muted/40", className)}>
      <div className="container space-y-20">
        {/* Leadership Hub */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
           <h2 className="text-6xl lg:text-9xl font-black italic uppercase tracking-tighter max-w-2xl leading-[0.85]">Creative<br/>Mastery.</h2>
           <Button size="lg" className="rounded-none font-black italic uppercase tracking-widest px-12 group/btn">
              Contact <ArrowUpRight className="ml-4 size-6 group-hover:translate-x-2' transition-transform" />
           </Button>
        </div>

        {/* Global Gallery Deck */}
        <div className="grid md:grid-cols-4 gap-8">
           {SMALL_CARDS.map((card, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[3rem] border-4 border-white shadow-3xl flex flex-col justify-between group">
                <div className="relative mb-12 rounded-[2rem] overflow-hidden border-4 border-muted shadow-xl">
                   <img src={card.image} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 right-4"><Plus className="size-6 bg-secondary p-1 rounded-full" /></div>
                </div>
                <div className="space-y-4">
                   <span className="text-xs font-black italic tracking-widest text-primary uppercase opacity-30">{card.topNote}</span>
                   <h3 className="text-2xl font-black italic uppercase tracking-tighter">{card.title}</h3>
                   <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{card.summary}</p>
                </div>
             </div>
           ))}

           {/* Master Visual Anchor */}
           <div className="md:col-span-2 relative h-[700px] rounded-[4rem] border-8 border-white overflow-hidden shadow-5xl group cursor-pointer lg:h-full">
              <motion.img src="glitch.png" className="size-full object-cover" whileHover={{ scale: 1.05 }} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black p-16 flex flex-col justify-end text-right">
                 <h2 className="text-white text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-tight w-2/3 ml-auto">Inside Our<br/>Master Process.</h2>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
```
