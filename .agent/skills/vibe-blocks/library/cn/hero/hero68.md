# Hero 68

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold, high-fidelity marketing introduction using a grid-anchored layout with "Sparkle" detailing and a 3-column value commitment row.
- **Use Case**: Best for startup landing pages, agency portfolios, or high-growth software products that want to emphasize "Speed," "Cost transparency," and "Customer satisfaction."
- **Visual Style**: Structural industrial aesthetic. Features a contained layout within a `border-x border-t border-dashed` frame. The upper typography section includes a sophisticated new-release `Badge`/Link (`rounded-full bg-muted`). Below the dual CTAs (including a unique `Avatar`-embedded button), a 3-column grid is divided by dashed borders and features "Sparkle" icon accents (`Sparkle`) precisely translated to frame the corners. Each commitment block (`Zap`, `DollarSign`, `Medal`) uses high-contrast typography and icon badges.
- **Interactivity**: Primarily static layout. CTA 1 uses a green "live" status dot, while CTA 2 features an embedded user `Avatar` to personalize the demo scheduling action.

## Source Code

### `hero68.tsx`
```tsx
import { ArrowRight, DollarSign, Medal, Sparkle, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero68Props {
  className?: string;
}

const Hero68 = ({ className }: Hero68Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans", className)}>
      <div className="container max-w-6xl">
        {/* Contained Headline Frame */}
        <div className="border-x border-t border-dashed border-border/60 px-6 py-20 md:px-16 rounded-t-3xl relative">
          <div className="mx-auto max-w-4xl flex flex-col items-center">
            
            {/* Announcement Pill */}
            <a
              href="#"
              className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full bg-muted/50 border border-border/40 px-5 py-2 text-sm font-bold tracking-tight transition-all hover:bg-muted group shadow-sm"
            >
              <Badge className="rounded-full shadow-none font-black px-3">New</Badge>
              <span className="text-muted-foreground mr-1">v2.2 is out now!</span>
              <ArrowRight className="inline size-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <h1 className="my-4 mb-8 text-center text-4xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-balance">
              Fast websites for startups
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground lg:text-2xl font-medium leading-relaxed">
              We craft powerful websites to accelerate your startup&apos;s
              growth with precision design.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row w-full sm:w-auto">
              <Button size="lg" className="w-full gap-3 sm:w-fit font-black text-lg px-8 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                <div className="size-2 rounded-full bg-green-400 animate-pulse ring-4 ring-green-400/20"></div>
                Start your free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-3 sm:w-fit font-bold text-lg px-8 py-7 rounded-full border-2 bg-background shadow-xl"
              >
                <Avatar className="size-8 rounded-full ring-2 ring-primary/10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="Jane Doe"
                  />
                </Avatar>
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Value Commitment Grid */}
        <div className="relative grid border-x border-dashed border-border/60 md:grid-cols-3 rounded-b-3xl overflow-hidden bg-muted/10">
          {/* Framed Sparkle Accents */}
          <Sparkle className="absolute top-0 right-0 h-auto w-6 translate-x-3 -translate-y-3 fill-primary text-primary opacity-60" />
          <Sparkle className="absolute top-0 left-0 h-auto w-6 -translate-x-3 -translate-y-3 fill-primary text-primary opacity-60" />
          
          {/* Column 1 */}
          <div className="flex items-center gap-6 border-t border-dashed border-border/60 p-8 font-black md:justify-center lg:p-12 lg:text-xl uppercase tracking-widest text-foreground/80">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-background border border-border/50 text-primary shadow-xl">
              <Zap className="size-7" />
            </span>
            2-4 week delivery
          </div>
          
          {/* Column 2 */}
          <div className="flex items-center gap-6 border-x border-t border-dashed border-border/60 p-8 font-black md:justify-center lg:p-12 lg:text-xl uppercase tracking-widest text-foreground/80">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-background border border-border/50 text-primary shadow-xl">
              <DollarSign className="size-7" />
            </span>
            no hidden fees
          </div>
          
          {/* Column 3 */}
          <div className="flex items-center gap-6 border-t border-dashed border-border/60 p-8 font-black md:justify-center lg:p-12 lg:text-xl uppercase tracking-widest text-foreground/80">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-background border border-border/50 text-primary shadow-xl">
              <Medal className="size-7" />
            </span>
            Full satisfaction
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero68 };
```
