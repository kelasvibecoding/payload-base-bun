# Feature 136

## Metadata
- **Category**: Feature
- **Objective**: Executive showcase combining massive proof-point metrics with a narrative visual split and secondary features.
- **Use Case**: "Core Platform Highlights" on master landing pages, investor deck summaries, or platform authority blocks.
- **Visual Style**: "Executive Authority Bento" aesthetic. Multi-zone layout:
    - Zone 1 (Primary Split): `lg:grid-cols-2` symmetrical grid. Left: Bold header, `Trophy` badge, and a high-density metric row (`4.2M+`, `221k+`, `4.9`, `40+`) separated by vertical `Separator` lines. Right: Large `max-h-[450px]` high-res photo.
    - Zone 2 (Secondary Grid): `md:grid-cols-3` footer grid displaying narrative cards (`Why Select Us?`, `Our Purpose`) with leading icons and clean descriptive text.
- **Interactivity**: Static illustrative layout focused on establishing scale and authority.

## Source Code

### `feature136.tsx`
```tsx
import { Calendar, Target, Trophy, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Feature136 = ({ className }: Feature136Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Authority Stage */}
        <div className="grid place-content-center gap-10 lg:grid-cols-2 pb-20 border-b">
          <div className="flex flex-col items-center lg:items-start gap-4 pr-10">
            <Badge variant="outline" className="flex items-center gap-1 font-mono uppercase italic tracking-tighter"><Trophy className="size-4 p-0.5 fill-primary" /> Key Aspects</Badge>
            <h2 className="text-3xl font-extrabold lg:text-left italic tracking-tighter uppercase">Boost Productivity...</h2>
            {/* Metric Board */}
            <div className="mt-9 flex w-full flex-col justify-center gap-6 md:flex-row lg:justify-start">
               <div className="flex items-center gap-8 px-4 py-2 bg-muted rounded-xl shadow-inner italic font-black">
                  <div><p className="text-3xl">4.2M+</p><p className="text-[10px] text-muted-foreground uppercase tracking-widest">Installs</p></div>
                  <Separator orientation="vertical" className="h-10" />
                  <div><p className="text-3xl">221k+</p><p className="text-[10px] text-muted-foreground uppercase tracking-widest">Active</p></div>
               </div>
               {/* more metric pairs... */}
            </div>
          </div>
          <img src="..." className="h-full max-h-[450px] w-full rounded-2xl object-cover shadow-2xl border grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
        
        {/* Detail Cards Footer Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{ icon: Calendar, title: "Why Select Us?" }].map((f) => (
             <div className="group flex flex-col gap-3 rounded-xl border bg-background p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3"><f.icon className="size-6 text-primary" /><h3 className="font-bold italic uppercase">{f.title}</h3></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature136 };
```
