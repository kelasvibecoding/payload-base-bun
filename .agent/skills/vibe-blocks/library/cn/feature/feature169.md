# Feature 169

## Metadata
- **Category**: Feature
- **Objective**: Stylized architectural Tabs section with drafting crosshairs and precision border logic.
- **Use Case**: Master "Optimization" landing sections, technical "How it Works" product tours, or detailed service walkthroughs.
- **Visual Style**: "Blueprinted Precision Tabs" aesthetic. 
    - Title Stage: Section follows the "Drafting Board" frame logic with high-contrast `border-y` and `border-x` separators. Massive `text-6xl` summary.
    - Interaction Stage: Horizontal `Tabs` module. `TabsList` features a triple-grid triggers system with integrated "Drafting Dots" (`size-2 rounded-full border bg-background`) absolute-positioned in the corners of each active cell. 
    - Active State: Features a specialized baseline gradient underline (`blue-600 to-sky-300`).
    - Presentation: `TabsContent` houses large `aspect-video` photographic placeholders with `rounded-sm` corners and precise borders.
- **Interactivity**: Fully interactive React component utilizing `data-[state=active]` structural transitions for high-fidelity interactive feedback.

## Source Code

### `feature169.tsx`
```tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CircleHelp, Eye, Lightbulb, Volume2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature169 = ({ className }: Feature169Props) => {
  return (
    <section className={cn("py-32", className)}>
      {/* Drafting Title Block */}
      <div className="border-y border-muted-foreground/10 bg-accent/5">
        <div className="container flex flex-col gap-6 py-10 md:border-x border-muted-foreground/10 lg:py-16">
          <Badge variant="outline" className="w-fit gap-2 bg-card px-4 py-2 uppercase font-mono tracking-widest"><Eye className="size-4" /> <span>Optimize</span></Badge>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase md:text-6xl lg:text-7xl">Optimize every aspect...</h2>
          <p className="max-w-[600px] text-xl text-muted-foreground italic font-medium leading-relaxed">Achieve seamless productivity...</p>
        </div>
      </div>

      {/* Blueprinted Tab Interaction Zone */}
      <div className="container px-0 md:border-x border-muted-foreground/10 relative overflow-hidden">
        <Tabs defaultValue={DATA[0].title}>
          <TabsList className="relative grid gap-px border-b bg-muted-foreground/10 md:grid-cols-3">
            {DATA.map((item) => (
              <TabsTrigger key={item.title} value={item.title} className="group relative bg-background p-10 text-left hover:bg-accent/20 transition-all data-[state=inactive]:opacity-60">
                 {/* Blueprint corner artifacts */}
                 <span className="absolute -top-1 -left-1 size-2 rounded-full border bg-background shadow-inner" />
                 <span className="absolute -bottom-1 -left-1 size-2 rounded-full border bg-background shadow-inner z-10" />
                 
                 <div className="flex items-center gap-3 text-xl font-bold italic uppercase tracking-widest mb-4">
                    <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-white transition-all"><item.icon className="size-5" /></span>
                    {item.title}
                 </div>
                 <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
                 <div className="absolute -bottom-px left-0 h-1 w-0 bg-linear-to-r from-primary via-sky-300 to-transparent transition-all duration-700 group-data-[state=active]:w-full" />
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Immersive Visualization Stage */}
          {DATA.map((item) => (
            <TabsContent key={item.title} value={item.title} className="p-12 animate-in fade-in duration-1000">
               <div className="p-8 bg-muted/20 rounded-[2.5rem] border-2 border-dashed border-primary/20 shadow-inner">
                  <img src={item.image} className="aspect-video w-full rounded-2xl object-cover border-2 shadow-2xl grayscale group-hover:grayscale-0 transition-grayscale" title="optimization visualization" />
               </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature169 };
```
