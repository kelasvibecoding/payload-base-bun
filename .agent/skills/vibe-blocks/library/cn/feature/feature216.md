# Feature 216

## Metadata
- **Category**: Feature
- **Objective**: Master high-end collaboration showcase featuring a staggered tab registry, directional navigation, and immersive visual billboards.
- **Use Case**: Primary "Unified Collaboration" landing rows, executive suite explainers, or technical platform hub walkthroughs.
- **Visual Style**: "Executive Discovery Stage" aesthetic. Global container is a massive `rounded-2xl bg-muted` frame utilizing extreme structural whitespace.
    - Interaction Logic: Multi-state `Tabs` module focusing on six primary collaboration pillars.
    - Trigger Staging: Massive horizontal `TabsList` focusing on abstract color-coded icon anchors and bold category headers. Features specialized `grayscale` and `opacity` logic to provide extreme focus to the active tab.
    - Narrative Hub: Centered textual discovery node focusing on high-contrast active summaries (`text-foreground/60`).
    - Billboard Stage: Massive low-anchored photographic billboard utilizing large-scale `AspectRatio` masking and architectural box-shadows.
    - Navigation Polish: Absolute-positioned `ArrowLeft/Right` utility buttons provide dual-access discovery (Tabs or Sequential navigation).
- **Interactivity**: Fully interactive React component utilizing Radix-based Tab transitions, sequential list navigation, and high-fidelity structural polish.

## Source Code

### `feature216.tsx`
```tsx
"use client";

import { Users, MessageSquare, Share2, Brain, ClipboardList, Rocket, ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature216 = ({ className }: Feature216Props) => {
  const [tabValue, setTabValue] = useState(TABS[0].value);
  const triggerRefs = useRef<HTMLButtonElement[]>([]);

  return (
    <section className={cn("py-32", className)}>
      <div className="px-10">
        <div className="w-full rounded-[4rem] bg-muted/40 border-2 border-primary/5 pt-20 pb-40 relative shadow-3xl">
          <div className="container">
            <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
              {/* Massive High-Fidelity Controllers */}
              <TabsList className="hidden h-fit w-full items-end justify-center gap-16 bg-transparent pb-24 xl:flex">
                {TAB_TRIGGERS.map((trigger, idx) => (
                  <TabsTrigger key={idx} value={trigger.value} className="flex flex-col items-center gap-6 p-0 opacity-20 grayscale transition-all hover:opacity-50 data-[state=active]:opacity-100 data-[state=active]:grayscale-0 data-[state=active]:bg-transparent">
                     <div className="size-12 rounded-2xl shadow-2xl grid place-items-center" style={{ backgroundColor: trigger.color }}><trigger.icon className="size-6 text-white" /></div>
                     <div className="text-xl font-black italic uppercase tracking-tighter">{trigger.name}</div>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="relative">
                {TABS.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value} className="animate-in fade-in duration-700">
                    <div className="mb-12 text-center max-w-2xl mx-auto"><p className="text-2xl text-muted-foreground italic font-medium leading-relaxed">{tab.summary}</p></div>
                    <div className="relative rounded-[3.5rem] overflow-hidden border-8 border-white shadow-3xl">
                       <AspectRatio ratio={2.2}><img src={tab.image.src} className="size-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" /></AspectRatio>
                    </div>
                  </TabsContent>
                ))}
                
                {/* Master Sequential Logic Controls */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 z-20"><Button variant="secondary" onClick={() => handleTabNavigation("prev")} className="size-16 rounded-full shadow-3xl bg-background border-4 border-white"><ArrowLeft /></Button></div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 z-20"><Button variant="secondary" onClick={() => handleTabNavigation("next")} className="size-16 rounded-full shadow-3xl bg-background border-4 border-white"><ArrowRight /></Button></div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
```
