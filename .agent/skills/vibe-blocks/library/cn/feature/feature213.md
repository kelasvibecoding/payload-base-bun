# Feature 213

## Metadata
- **Category**: Feature
- **Objective**: Stylized video production showcase featuring large-format vertical tab triggers and 16:9 visual context.
- **Use Case**: Primary "Production Walkthrough" rows, technical product tours, or AI video optimization explainers.
- **Visual Style**: "Video Production Intelligence" aesthetic. Centered authority header with massive `text-7xl` editorial typography.
    - Interaction Hub: High-contrast `Tabs` section utilizing a specialized horizontal `xl:flex-row` split.
    - Trigger Staging (Left): Large-format vertical `TabsList` focusing on three primary production pillars. Each trigger features a bold editorial `title` and detailed narrative `summary`. Active triggers utilize high-contrast `bg-muted` backgrounds and high-feedback borders.
    - Visual billboard (Right): High-intensity photographic stage utilizing an `AspectRatio` (16 / 9) wrapper and high-radius `rounded-[0.75rem]` masking. Image state-syncs with the active tab trigger to provide illustrative proof.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Tabs` transitions and state-driven visual updates for modern discovery.

## Source Code

### `feature213.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature213 = ({ className }: Feature213Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        {/* Leading Header Stage */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none">Speed up production.</h2>
        </div>

        {/* Technical Showcase Interface */}
        <Tabs defaultValue={LIST[0].value} className="flex flex-col xl:flex-row gap-20">
          {/* Vertical Discovery Controllers */}
          <TabsList className="bg-transparent h-fit w-full xl:w-[450px] flex flex-col gap-6">
            {LIST.map((item, i) => (
              <TabsTrigger key={i} value={item.value} className="flex flex-col items-start p-10 rounded-[2.5rem] border-2 border-primary/5 text-left transition-all data-[state=active]:bg-primary data-[state=active]:text-white shadow-xl hover:translate-x-2">
                 <div className="text-2xl font-black italic uppercase italic tracking-tighter leading-tight mb-4">{item.title}</div>
                 <p className="text-md opacity-70 italic font-medium leading-relaxed">{item.summary}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Immersive Proof Stage */}
          <div className="flex-1">
             {LIST.map((item, i) => (
               <TabsContent key={i} value={item.value} className="animate-in fade-in slide-in-from-right-10 duration-1000">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-[4rem] border-8 border-white shadow-3xl group">
                     <img src={item.image.src} className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" />
                  </AspectRatio>
               </TabsContent>
             ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature213 };
```
