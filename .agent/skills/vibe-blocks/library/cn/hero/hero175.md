# Hero 175

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered, high-fidelity introduction for developer frameworks, pairing a centered headline with a prominent "Feature-Badge" callout and dual CTAs.
- **Use Case**: Best for open-source frameworks, developer tool platforms (e.g., "Developer friendly"), or web development tools that want to emphasize "Simplified development" and "Packing a punch."
- **Visual Style**: Narrative Dev-Tool aesthetic. Features a centered layout Utilizing a prominent dark `bg-background` background anchored by a specialized `bg-linear-to-b` background overlay (`before:` pseudo-element) at the top to maintain high-impact contrast. The typography section is anchored by a high-impact heading block pairing a prominent `badgeVariants` "New features" callout with high-fidelity editorial CTAs. Includes functional CTAs pairing a standard "Get Started" button with a specialized "Watch Demo" ghost button Utilizing a prominent `CirclePlay` icon.
- **Interactivity**: High atmospheric engagement. Features high-fidelity badge hover effects and categorical social-proof metadata ("High-performance, production-ready") to drive developer enrollment.

## Source Code

### `hero175.tsx`
```tsx
import { ArrowRight, CirclePlay } from "lucide-react";

import { cn } from "@/lib/utils";

import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero175Props {
  className?: string;
}

const Hero175 = ({ className }: Hero175Props) => {
  return (
    <section
      className={cn(
        "relative bg-background pt-20 lg:pt-40 pb-20 lg:pb-32 font-sans border-b overflow-hidden",
        className,
      )}
    >
      {/* Structural Atmospheric Top Fade side */}
      <div className="absolute top-0 left-0 z-10 block h-[25rem] w-full bg-linear-to-b from-primary/10 to-transparent pointer-events-none"></div>

      <div className="relative z-20 container px-6">
        <div className="relative z-20 mx-auto flex max-w-[65rem] flex-col items-center gap-12 text-center text-pretty">
          
          {/* Innovations Feature Badge callout side */}
          <a
            href="#"
            className={`${badgeVariants({ variant: "outline" })} group flex w-fit items-center gap-4 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-xl px-6 py-2 transition-all hover:border-primary shadow-xl`}
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Check out our world-class features
            </p>
            <div className="flex size-6 rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
                <ArrowRight className="m-auto size-3 stroke-primary group-hover:stroke-white transition-colors" strokeWidth={3} />
            </div>
          </a>
          
          <div className="flex flex-col gap-12">
            <h1 className="w-full text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                The Best developer friendly <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-8">framework</span>
            </h1>
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                This is a high-status framework that simplifies web development
                while packing a world-class punch for professional builders.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 group/buttons">
            <Button
              asChild
              size="lg"
              className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500"
            >
              <a href="#" className="flex items-center gap-6 uppercase tracking-widest leading-none">
                <span>Get Started</span>
                <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" strokeWidth={3} />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="group/demo h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-bold text-xl shadow-xl transition-all hover:bg-muted active:scale-[0.98]"
            >
              <a href="#" className="flex items-center gap-6 uppercase tracking-widest leading-none text-foreground hover:text-primary">
                <span>Watch Demo</span>
                <div className="flex size-10 rounded-full bg-foreground group-hover/demo:bg-primary shadow-xl transition-colors">
                    <CirclePlay className="m-auto size-5 text-background group-hover/demo:text-white" strokeWidth={2.5} />
                </div>
              </a>
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Atmos Background layers */}
      <div className="absolute bottom-[-10%] right-[-5%] z-0 size-[40rem] bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute top-[20%] left-[-5%] z-0 size-[30rem] bg-secondary/5 blur-[100px] rounded-full"></div>
    </section>
  );
};

export { Hero175 };
```
