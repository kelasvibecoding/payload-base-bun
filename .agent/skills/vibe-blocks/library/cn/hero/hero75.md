# Hero 75

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a premium-tier marketing introduction with a high-contrast side-by-side layout, designed to drive "Upgrade" conversions.
- **Use Case**: Best for premium membership landing pages, elite career platforms (e.g., "CareerMed"), or SaaS tier upgrades where exclusivity is the primary driver.
- **Visual Style**: Premium-Dark aesthetic. Features a split-column layout using a `dark` theme class on the left. The left column includes a specialized brand header (`Business PRO`) with a gradient text highlight (`bg-linear-to-tr`). Below the typography and `ChevronRight`-enhanced button, a row pairs a 5-avatar social proof stack with a large-scale trust count ("1 million medical practitioners"). The right side is a full-height (`h-screen`) background image placeholder that provides a high-fidelity visual counterweight.
- **Interactivity**: Static layout. Emphasizes visual status through the high-density social proof elements.

## Source Code

### `hero75.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero75Props {
  className?: string;
}

const Hero75 = ({ className }: Hero75Props) => {
  return (
    <section className={cn("dark flex min-h-screen font-sans", className)}>
      {/* Premium Dark Content Column */}
      <div className="flex w-full items-center justify-center bg-background lg:w-1/2 px-6 py-20">
        <div className="container flex w-full max-w-[600px] flex-col gap-20 lg:gap-32">
          {/* Specialized Logo Header */}
          <h1 className="text-4xl font-black tracking-tighter uppercase text-foreground">
            Business{" "}
            <span className="bg-gradient-to-tr from-white to-white/40 bg-clip-text text-transparent italic">
              PRO
            </span>
          </h1>
          
          <div>
            <h2 className="text-5xl font-black text-foreground lg:text-8xl tracking-tighter leading-[0.9] text-pretty">
              Achieve More with Elite Access Pro
            </h2>
            <p className="mt-8 text-white/70 lg:text-2xl font-medium leading-relaxed max-w-xl">
              Enhance your career hunt with increased visibility, first-look
              opportunities and monetary incentives!
            </p>
            <Button size="lg" className="mt-12 flex h-fit items-center gap-3 rounded-2xl px-10 py-5 font-black text-xl shadow-2xl transition-transform hover:scale-105">
              <span>Upgrade to premium </span>
              <ChevronRight className="size-6!" />
            </Button>
          </div>
          
          {/* Large-scale Social Proof */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="size-12 lg:size-14 border-4 border-background shadow-xl">
                  <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} />
                  <AvatarFallback>{String.fromCharCode(64 + i)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col">
                 <span className="text-sm lg:text-base font-black uppercase tracking-widest text-white">Trust matters</span>
                 <span className="text-xs text-white/50 lg:text-sm font-medium leading-tight mt-1">
                    Over 1 million practitioners rely on CareerMed
                </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* High-fidelity side Visual */}
      <div className="hidden h-screen w-1/2 object-cover lg:block relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity group-hover:opacity-30 duration-1000"></div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            alt="elite lifestyle visual"
            className="size-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
          />
      </div>
    </section>
  );
};

export { Hero75 };
```
