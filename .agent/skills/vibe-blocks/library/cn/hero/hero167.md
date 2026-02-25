# Hero 167

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for healthcare systems, pairing a split-column layout with unique "Service-Merit" trust badges and a layered interface visual.
- **Use Case**: Best for healthcare platforms, medical management systems (e.g., "Nurture with care"), or virtual health providers that want to emphasize "Patient care" and "Comprehensive healthcare."
- **Visual Style**: Narrative Medical aesthetic. Features a split-column layout starting with an high-impact typography block paired with two unique "Service-Merit" buttons Utilizing a `rounded-full` border and specialized `hover:shadow` transition. The visual anchor is a unique "Interface Stack" on the right Featuring a large main dashboard preview overlaying a specialized `bg-linear-to-b` background container. Includes a secondary, smaller dashboard preview (`placeholder-dark-4.svg`) absolute-positioned at the bottom-left to create architectural visual depth.
- **Interactivity**: High atmospheric engagement. Features specialized "Slide-Through" button animations and high-fidelity interface layering to drive professional trust and enrollment.

## Source Code

### `hero167.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero167Props {
  className?: string;
}

const Hero167 = ({ className }: Hero167Props) => {
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
    >
      <div className="container relative z-10 px-6 max-w-[90rem]">
        <div className="grid grid-cols-1 gap-24 lg:gap-32 lg:grid-cols-2 items-center text-pretty">
          
          {/* Healthcare Narrative side */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Expand the ability to <span className="text-primary italic">nurture</span>.
              </h1>
              <p className="max-w-[35rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Remove inefficiencies and enhance patient care with a
                comprehensive healthcare system that seamlessly integrates your workflow.
              </p>
            </div>
            
            {/* Unique "Service-Merit" Trust Badges row side */}
            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant="outline"
                className="group flex h-fit w-fit items-center gap-6 rounded-full border-2 border-primary/20 bg-background px-8 py-4 shadow-xl transition-all hover:bg-primary hover:border-primary hover:scale-[1.02]"
              >
                <a href="#">
                  <span className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-primary-foreground transition-colors">
                    Named Top Virtual Care
                  </span>
                  <div className="flex size-8 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 transition-colors">
                    <ArrowRight className="m-auto size-4 stroke-primary group-hover:stroke-primary-foreground" />
                  </div>
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="group flex h-fit w-fit items-center gap-6 rounded-full border-2 border-primary/20 bg-background px-8 py-4 shadow-xl transition-all hover:bg-primary hover:border-primary hover:scale-[1.02]"
              >
                <a href="#">
                  <span className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-primary-foreground transition-colors">
                    Named Top Conversational AI
                  </span>
                  <div className="flex size-8 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 transition-colors">
                    <ArrowRight className="m-auto size-4 stroke-primary group-hover:stroke-primary-foreground" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Unique "Interfaced Interface Stack" Visual Anchor side */}
          <div className="relative group isolate">
            {/* The Atmospheric Structural Container side */}
            <div className="relative -mr-12 lg:-mr-24 h-[30rem] lg:h-[48rem] min-w-[55vw] rounded-[4rem] bg-linear-to-b from-primary/5 to-secondary/5 border-8 border-background shadow-2xl overflow-hidden transition-transform duration-1000 group-hover:-translate-x-4">
              
              {/* Primary Dashboard preview */}
              <div className="absolute top-[15%] left-[10%] lg:left-[15%] w-[80%] lg:w-[85%] overflow-hidden rounded-[2.5rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-8">
                <AspectRatio ratio={1.4 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="healthcare system main dashboard"
                    className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Secondary Floating card preview side */}
              <div className="absolute bottom-[10%] left-[5%] lg:left-[-5%] w-[40%] lg:w-[45%] overflow-hidden rounded-[2.5rem] border-8 border-background bg-background shadow-2xl transition-transform duration-1000 group-hover:-translate-x-8 group-hover:-translate-y-4">
                <AspectRatio ratio={1.7 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg"
                    alt="healthcare system specialized insight"
                    className="size-full object-cover grayscale opacity-80"
                  />
                </AspectRatio>
              </div>

            </div>
            
            {/* Atmos Depth layers */}
            <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero167 };
```
