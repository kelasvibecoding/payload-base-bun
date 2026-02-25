# Feature 313

## Metadata
- **Category**: Feature
- **Objective**: Advanced informational deck featuring interactive video stage, automated sequence tracking, and professional Agency Story discovery.
- **Use Case**: Master "Agency Overview" landing rows, executive studio highlights, or technical performance discovery sections.
- **Visual Style**: "Studio Narrative Deck" aesthetic. Dual-axis assembly coordinating horizontal informational cards (Top) and an immersive video discovery stage (Bottom).
    - Animation Logic: High-complexity informational tracking utilizing active secondary focus points. features four horizontal modules with incremental circle-indicators host within high-legibility typographic cards.
    - Interaction Hub: massive `Dialog` conversion stage utilizing staggered scale/blur reveal logic on the `Play` trigger. logic coordinates massive `text-lg` descriptive captions (video duration) with centered vertical assembly of interactive buttons.
    - Asset Architecture: features high-fidelity photographic visual assets utilizing `motion.img` scaling logic (`scale: 1.1`) and atmospheric blur transitions (`blur(4px)`).
    - Leadership Hub: Logic focus on "Innovative strategies" and "User-centric design" host within a consistent global registry.
- **Interactivity**: Fully interactive React component with localized video dialogs, transition-enabled card reveals, and premium trust orchestration.

## Source Code

### `feature313.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Feature313 = ({ className }: Feature313Props) => {
  return (
    <section className={cn("py-40 bg-muted/40", className)}>
      <div className="container space-y-12">
        {/* Narrative Insight Registry */}
        <div className="grid md:grid-cols-4 gap-4">
           {CARDS.map((card, idx) => (
             <div key={idx} className="bg-white p-12 rounded-[3rem] border-4 border-white shadow-2xl flex flex-col space-y-8">
                <div className="flex justify-between items-center">
                   <div className="flex gap-2">
                      {[0,1,2,3].map(c => <div key={c} className={cn("size-2 rounded-full", idx >= c ? "bg-primary" : "bg-muted")} />)}
                   </div>
                   <span className="text-xs opacity-30 font-black italic tracking-widest uppercase">[0{idx+1}]</span>
                </div>
                <h3 className="text-lg font-black italic uppercase tracking-tighter leading-tight shrink-0">{card.title}</h3>
             </div>
           ))}
        </div>

        {/* Dynamic Story Stage */}
        <Dialog>
           <DialogTrigger asChild>
             <motion.div className="relative h-[600px] rounded-[4rem] border-8 border-white overflow-hidden shadow-5xl group cursor-pointer" whileHover="hover" initial="initial">
                <motion.img src="bw6.jpeg" className="size-full object-cover" variants={{ initial: { scale: 1 }, hover: { scale: 1.1 } }} />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="flex flex-col items-center gap-12 text-center">
                      <div className="size-32 rounded-full bg-white flex items-center justify-center shadow-4xl group-hover:scale-110 transition-transform">
                         <Play className="size-12 translate-x-1" />
                      </div>
                      <div className="space-y-2">
                         <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Mastery Narrative.</h2>
                         <p className="text-white/60 font-black italic tracking-widest uppercase">[01:47 Sec]</p>
                      </div>
                   </div>
                </div>
             </motion.div>
           </DialogTrigger>
           <DialogContent className="max-w-6xl aspect-video bg-black p-0 border-none overflow-hidden">
              <iframe className="size-full" src="story.mp4" />
           </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
```
