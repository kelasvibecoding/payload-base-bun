# Hero 197

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for intelligent development platforms, pairing a centered typography block with high-fidelity "Launch-Badges" and a unique "Dot-Pattern" atmospheric background.
- **Use Case**: Best for intelligent coding platforms, team workflow tools (e.g., "Accelerate Your Development Workflow"), or specialized software tools that want to emphasize "Intelligent platforms" and "Streamlined collaboration."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout Beginning with a prominent "Launching Soon" `Badge` callout Utilizes a specialized `radial-gradient` dot pattern context. Text section is anchored by a high-impact heading block Utilizing a specialized `bg-linear-to-r` text-gradient to create high-status visual focus. Layout uses specialized absolute-positioned atmospheric layers paired with high-fidelity editorial CTAs positioning categorical trust social-proof ("Get started for free").
- **Interactivity**: High atmospheric engagement. Features high-fidelity badge hover effects and categorical social-proof metadata to drive developer enrollment.

## Source Code

### `hero197.tsx`
```tsx
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero197Props {
  className?: string; // Optional custom styling
}

const Hero197 = ({ className }: Hero197Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden relative group/hero", className)}>
      <div className="container relative z-10 px-6">
        
        {/* The Dot Matrix Architectural Background side */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:32px_32px] opacity-10 group-hover/hero:opacity-20 transition-opacity duration-1000"></div>

        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between text-pretty">
          <div className="max-w-[65rem] relative group/content">
            
            {/* Atmos Depth layer side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            {/* Launch Status Badge callout side */}
            <Badge
              variant="outline"
              className="mb-10 rounded-full border-2 border-primary/20 bg-background px-8 py-2 text-xs font-black uppercase tracking-[0.4em] text-primary shadow-xl hover:bg-background"
            >
              Elite Launching Soon <Sparkles className="ml-3 size-4 fill-primary text-primary" strokeWidth={3} />
            </Badge>

            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm uppercase">
                Accelerate your <br />
                <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-8">workflow</span> with AI.
                </h1>

                <p className="mt-8 max-w-[45rem] text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Our world-class intelligent platform helps elite teams automate 
                status-tasks and deliver higher world-class quality code.
                </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 group/buttons">
              <Button size="lg" className="h-fit w-full sm:w-auto rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get started for free
              </Button>
              <Button size="lg" variant="secondary" className="h-fit w-full sm:w-auto rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none">
                Book a professional demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structural Atmos Background fragment side */}
      <div className="absolute bottom-[-10%] right-[-5%] size-[45rem] bg-secondary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
    </section>
  );
};

export { Hero197 };
```
