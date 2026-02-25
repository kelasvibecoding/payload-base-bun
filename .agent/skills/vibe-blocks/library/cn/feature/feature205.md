# Feature 205

## Metadata
- **Category**: Feature
- **Objective**: Massive high-fidelity capability tabs section featuring immersive photographic stages and specialized metrics overlays.
- **Use Case**: Primary "Product capabilities" discovery blocks, executive capability walkthroughs, or technical platform explainers.
- **Visual Style**: "Immersive Logic Tabs" aesthetic. Global container is a massive `lg:grid-cols-2` grid structural frame encased in an authoritative `rounded-4xl border` container.
    - Information Hub (Left): Vertical discovery stage. Features `TabsContent` revealing high-end editorial headers and bold narrative text. Bottom zone utilizes a stylized `ScrollableTabsList` with capsule-shaped interactive triggers. 
    - Visual Proof Stage (Right): High-intensity photographic modules within `TabsContent`. Each image acts as a background for a specialized "Metrics Overlay" (`bg-gradient-to-tr from-primary/80`) featuring large-scale numerical proofing (e.g., "$720", "40%") and bold success descriptors.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Tabs` transitions and `animate-in fade-in` effects for state-driven discovery.

## Source Code

### `feature205.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature205 = ({ className }: Feature205Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Tabs defaultValue="efficiency" className="grid lg:grid-cols-2 gap-16 border-2 border-primary/10 p-12 lg:p-20 rounded-[4rem] bg-accent/5 shadow-3xl">
          {/* Informational Stage */}
          <div className="flex flex-col justify-between py-12">
             <div className="space-y-12">
                {/* Dynamic Content Mapping ... */}
                <TabsContent value="efficiency" className="animate-in fade-in duration-700">
                   <span className="font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase mb-6 opacity-60">EFFICIENCY</span>
                   <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none mt-6 mb-8">Streamline. Automate.</h2>
                   <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">Our AI-powered workspace eliminates repetitive tasks and centralizes workflow...</p>
                </TabsContent>
             </div>
             
             {/* Interactive Controller (Capsule Variant) */}
             <div className="mt-16"><TabsList className="bg-muted p-2 h-14 rounded-full">{/* Triggers .. */}</TabsList></div>
          </div>

          {/* Massive Visual billboard Node */}
          <div className="relative aspect-[3/4] md:aspect-video lg:aspect-square overflow-hidden rounded-[3.5rem] border-8 border-white shadow-3xl group">
             {/* Proofing Stage ... */}
             <TabsContent value="efficiency" className="h-full w-full">
                <img src="..." className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-12 left-12 flex flex-col gap-10 text-white">
                   <div className="space-y-2"><p className="text-6xl font-black italic tracking-tighter leading-none">40%</p><p className="text-xl font-bold italic uppercase tracking-widest text-white/70">less admin time</p></div>
                </div>
             </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature205 };
```
