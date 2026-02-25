# Hero 125

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a conversion-heavy B2B introduction for "Return Management," pairing a prominent headline with a unique "Service Type" toggle visual card.
- **Use Case**: Best for e-commerce return platforms, logistics tools (e.g., "Exchange / Shop Now / Refund"), or customer service hubs that want to emphasize "Perfecting the customer experience."
- **Visual Style**: Value-first professional aesthetic. Features a split-column layout starting with a categorical typography block anchored by a large absolute-positioned "Concentric Circles" background pattern (`circles.svg`). The visual anchor is a unique "Service Choice Card" on the right featuring a dashboard preview paired with a specialized selection footer displaying primary (`Exchange`) and secondary (`Shop Now`, `Refund`) action states using `p-3` containerized layout.
- **Interactivity**: Static layout. Emphasizes policy control and customer retention through the categorical visual card. Primary CTA is a large `rounded-full` button to drive demo bookings.

## Source Code

### `hero125.tsx`
```tsx
import { Banknote, Repeat, ShoppingBag, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero125Props {
  className?: string;
}

const Hero125 = ({ className }: Hero125Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-40 font-sans after:absolute after:bottom-0 after:left-0 after:block after:h-40 after:w-full after:bg-[linear-gradient(transparent,hsl(var(--background)))]",
        className,
      )}
    >
      <div className="relative container px-6">
        {/* Large Concentric Circles Global Visual Pattern */}
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/circles.svg"
          alt="visual background hierarchy"
          className="absolute top-[-60rem] right-[-80rem] z-[-1] block aspect-square h-auto w-[180rem] opacity-30 select-none pointer-events-none"
        />
        
        <div className="grid grid-cols-1 items-center justify-center gap-24 lg:grid-cols-2">
          
          {/* Returns Control Narrative side */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 shadow-sm transition-transform group-hover:rotate-12">
                  <ShoppingCart className="h-8 w-8 fill-primary stroke-primary" />
              </div>
              <p className="text-xl font-black uppercase tracking-[0.2em] text-primary">Returns</p>
            </div>
            
            <h1 className="text-6xl font-black lg:text-[7.5rem] tracking-tighter leading-[0.85] text-pretty">
              Go beyond managing, take <span className="text-secondary italic">control</span>.
            </h1>
            
            <p className="text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-xl italic border-l-4 border-primary/10 pl-8">
              &quot;Create tailored policies that boost retention and keep your
              customers thrilled even during returns.&quot;
            </p>
            
            <Button
              asChild
              size="lg"
              className="h-fit w-full sm:w-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105"
            >
              <a href="#">Book a demo</a>
            </Button>
          </div>
          
          {/* "Service Choice" Feature visual side */}
          <div className="justify-self-center lg:justify-self-end group relative">
            <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-60 rounded-full group-hover:opacity-100 transition-opacity"></div>
            
            {/* The Choice Card - simulated platform dashboard with choice footer */}
            <div className="relative z-10 flex aspect-[1/1.1] flex-col rounded-[3rem] border-8 border-background bg-secondary/5 p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] w-full max-w-[28rem] transition-transform duration-1000 group-hover:translate-y-4">
              <AspectRatio
                ratio={1 / 1}
                className="w-full overflow-hidden rounded-[2rem] bg-muted border-4 border-background shadow-inner"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="return management interface"
                  className="block h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </AspectRatio>
              
              {/* Interaction Footer: Returns Type Toggle */}
              <div className="m-auto flex w-full items-center justify-between px-2">
                <div className="flex items-center gap-3 rounded-2xl bg-primary px-5 py-2.5 shadow-lg border border-primary/20">
                  <Repeat className="h-5 text-primary-foreground" strokeWidth={3} />
                  <p className="text-sm font-black uppercase tracking-widest text-primary-foreground">Exchange</p>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl bg-background/50 px-5 py-2.5 border border-border/40 opacity-40 hover:opacity-100 transition-opacity">
                  <ShoppingBag className="h-5 text-foreground" />
                  <p className="text-sm font-bold uppercase tracking-widest">Shop Now</p>
                </div>
                
                <div className="flex items-center gap-3 rounded-2xl bg-background/50 px-5 py-2.5 border border-border/40 opacity-40 hover:opacity-100 transition-opacity">
                  <Banknote className="h-5 text-foreground" />
                  <p className="text-sm font-bold uppercase tracking-widest">Refund</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero125 };
```
