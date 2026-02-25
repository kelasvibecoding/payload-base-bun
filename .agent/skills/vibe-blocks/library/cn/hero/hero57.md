# Hero 57

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a unique, information-rich marketing introduction that uses "Post-it" style decorative feature callouts pinned around a central AI-focused headline.
- **Use Case**: Best for high-growth tech tools, AI proposal builders, or sales enablement software where "Speed," "Security," and "Optimization" are simultaneous value pillars.
- **Visual Style**: Technical-Creative aesthetic. Features a centered layout with a complex background grid pattern (`grid3.svg`) that is masked with a radial gradient. The primary visual anchor is the headline, which features four absolute-positioned "sticky-note" feature callouts (`Fast`, `Secure`, `Professional`, `Optimized`) pinned at various rotations (`-rotate-12`, `rotate-12`) using `Lucide` icons and a custom `border-b border-dashed` style.
- **Interactivity**: Static layout. Detailed informational emphasis with a "Powered by GPT-4" micro-copy below the primary CTA.

## Source Code

### `hero57.tsx`
```tsx
import { CheckCircle2, Globe, Lock, Star, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero57Props {
  className?: string;
}

const Hero57 = ({ className }: Hero57Props) => {
  return (
    <section className={cn("py-20 lg:py-32 relative overflow-hidden font-sans", className)}>
      <div className="container relative z-10 px-4">
        {/* Complex masked grid background */}
        <div
          className="absolute inset-0 top-0 -z-10 mx-auto max-h-[720px] w-full opacity-10"
          style={{
            backgroundImage: `url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid3.svg')`,
            backgroundRepeat: "repeat",
            maskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
          }}
        ></div>
        
        <h1 className="relative mx-auto mb-10 max-w-4xl flex-wrap text-center text-4xl font-black md:mb-12 md:text-7xl lg:text-8xl tracking-tighter leading-tight text-pretty">
          <span>
            Create Winning
            <span className="ml-3 opacity-30 italic">Proposals</span>
             <br />
            10X Faster with
            <Globe className="mx-3 mb-1 inline-block h-auto w-10 md:mx-6 md:mb-4 md:w-16 text-primary" />
            AI
          </span>
          
          {/* Absolute-positioned Feature Callouts (Floating Tags) */}
          {/* Top Left */}
          <div className="absolute -top-12 -left-32 hidden w-fit -rotate-12 gap-2 border-b border-dashed border-primary/40 pb-1 text-sm font-bold text-muted-foreground underline-offset-4 lg:flex items-center">
            <Zap className="size-4 text-primary" />
            <span>Fast</span>
          </div>
          {/* Top Right */}
          <div className="absolute -top-12 -right-32 hidden w-fit rotate-12 gap-2 border-b border-dashed border-primary/40 pb-1 text-sm font-bold text-muted-foreground underline-offset-4 lg:flex items-center">
            <span>Professional</span>
            <Star className="size-4 text-primary" />
          </div>
          {/* Bottom Left */}
          <div className="absolute top-24 -left-40 hidden w-fit -rotate-12 gap-2 border-b border-dashed border-primary/40 pb-1 text-sm font-bold text-muted-foreground underline-offset-4 lg:flex items-center">
            <Lock className="size-4 text-primary" />
            <span>Secure</span>
          </div>
          {/* Bottom Right */}
          <div className="absolute top-24 -right-40 hidden w-fit rotate-12 gap-2 border-b border-dashed border-primary/40 pb-1 text-sm font-bold text-muted-foreground underline-offset-4 lg:flex items-center">
             <span>Optimized</span>
            <CheckCircle2 className="size-4 text-primary" />
          </div>
        </h1>
        
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg lg:text-2xl font-medium text-muted-foreground leading-relaxed">
          Penna let you build high-converting, website-style proposals with AI,
          helping you win better customers without wasting time.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 pt-4 pb-12">
          <Button size="lg" className="font-bold px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-[1.02]">
            Start free 14-day trial
          </Button>
          <div className="text-xs font-black tracking-widest text-muted-foreground uppercase flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            Powered by GPT-4
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero57 };
```
