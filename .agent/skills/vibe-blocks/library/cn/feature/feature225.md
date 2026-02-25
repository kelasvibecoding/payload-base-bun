# Feature 225

## Metadata
- **Category**: Feature
- **Objective**: High-fidelity editorial assistant showcase featuring a modular card-driven tab registry and immersive photographic billboards.
- **Use Case**: Primary "AI Capability" landing rows, executive product indices, or technical feature walkthrough hubs.
- **Visual Style**: "Editorial Assistant Registry" aesthetic. Centered authority header with bold `tracking-tighter` typography.
    - Interaction Grid: High-complexity `Tabs` module utilizing a symmetrical `lg:grid-cols-4` card-driven trigger registry. 
    - Trigger Design: Informational `Card` modules focusing on primary-colored icon anchors (`bg-primary/10`), bold headers, and high-legibility descriptive leads. Active states the cards featuring a primary-colored ring. 
    - Billboard Stage: Immersive photographic billboard utilizing 16:9 `AspectRatio` masking and architectural `rounded-t-lg` framing.
- **Interactivity**: Fully interactive React component utilizing Radix-based Tab transitions, card-driven state selection, and professional structural polish.

## Source Code

### `feature225.tsx`
```tsx
"use client";

import { Scissors, Languages, Eye, Mic, XCircle, MonitorSmartphone, FileText, Subtitles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Feature225 = ({ className }: Feature225Props) => {
  const [activeTab, setActiveTab] = useState<string>(FEATURES[0].id);

  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        {/* Authority Header Stage */}
        <div className="text-center space-y-6 mb-20">
           <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none">AI superpowers.</h2>
           <p className="text-xl text-muted-foreground italic font-medium leading-relaxed max-w-2xl mx-auto">Descript's AI editorial assistant tackles the tedium...</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
           {/* Card-Driven Registry Triggers */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {FEATURES.map((feature) => (
                <Card key={feature.id} onClick={() => setActiveTab(feature.id)} className={cn("cursor-pointer rounded-[2rem] border-4 border-white transition-all hover:translate-y-[-4px] shadow-2xl", activeTab === feature.id ? "bg-primary text-white" : "bg-accent/5")}>
                   <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4">
                         <div className={cn("size-10 rounded-xl grid place-items-center", activeTab === feature.id ? "bg-white text-primary" : "bg-primary text-white")}>{feature.icon}</div>
                         <h3 className="text-xl font-black italic uppercase tracking-tighter">{feature.title}</h3>
                      </div>
                      <p className={cn("text-xs font-medium leading-relaxed italic", activeTab === feature.id ? "text-white/80" : "text-muted-foreground")}>{feature.description}</p>
                   </CardContent>
                </Card>
              ))}
           </div>

           {/* Immersive Billboard Staging */}
           <div className="mt-12">
              {FEATURES.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="animate-in fade-in duration-700">
                   <div className="overflow-hidden rounded-[4rem] border-8 border-white shadow-3xl">
                      <AspectRatio ratio={1.8}><img src={feature.image} className="size-full object-cover" /></AspectRatio>
                   </div>
                </TabsContent>
              ))}
           </div>
        </Tabs>
      </div>
    </section>
  );
};
```
