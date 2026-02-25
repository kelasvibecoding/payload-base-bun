# Feature 120

## Metadata
- **Category**: Feature
- **Objective**: Executive mission section with leadership profiles and massive scale metrics.
- **Use Case**: Master landing page introductions, "About Us" platform highlights, or company culture showcase blocks.
- **Visual Style**: "Executive Authority" aesthetic. `lg:grid-cols-2` symmetrical split. Left: massive `text-5xl` heading area. Key visual: dual executive team profiles using `Avatar` and `ring-1 ring-input` styling. Below: Primary CTA button. Right: Large photo placeholder (`max-h-[420px]`). Footer: `lg:grid-cols-4` grid of massive scale metrics (`20+`, `100+`, `25`, `>30k`) separated by a clean horizontal `Separator`.
- **Interactivity**: Static illustrative layout with polished leadership visuals.

## Source Code

### `feature120.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Feature120 = ({ className }: Feature120Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container text-left lg:text-center">
        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col gap-2.5 py-8 text-left">
            <h1 className="text-4xl font-bold lg:text-5xl italic tracking-tighter">Empower your business...</h1>
            <p className="text-muted-foreground italic font-medium">Explore our cutting-edge tools...</p>
            {/* Leadership Profiles */}
            <div className="flex flex-col gap-6 py-10 sm:flex-row sm:gap-16">
              <div className="flex gap-4 leading-5">
                <Avatar className="size-10 rounded-full ring-1 ring-input shadow-md"><AvatarImage src="..." /></Avatar>
                <div className="text-sm">
                  <p className="font-bold">Emily Watson</p>
                  <p className="text-muted-foreground uppercase text-[10px] tracking-tight">CEO, Visionary Tech</p>
                </div>
              </div>
              {/* Profile 2... */}
            </div>
            <Button className="w-fit font-bold px-8">Start your free trial</Button>
          </div>
          <img src="..." className="h-full max-h-[420px] w-full rounded-xl object-cover shadow-2xl border grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        
        <Separator className="my-12 shadow-sm" />
        {/* Scale Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
          <div>
            <h2 className="mb-2 text-4xl font-semibold md:text-6xl italic tracking-tighter">20+</h2>
            <p className="text-muted-foreground uppercase font-mono text-[11px] tracking-widest">Years of excellence</p>
          </div>
          {/* ... more blocks */}
        </div>
      </div>
    </section>
  );
};

export { Feature120 };
```
