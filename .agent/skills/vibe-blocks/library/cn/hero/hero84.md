# Hero 84

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold, high-fidelity marketing introduction that uses an asymmetrical 5-image horizontal stack to convey "Unity" and "Integration."
- **Use Case**: Best for all-in-one platforms, collaboration hubs, or internal tool suites that want to visually represent the merging of multiple disparate tools into one space.
- **Visual Style**: Premium-Dark integrated aesthetic. Features a centered (top) typography block including a tracking-wide "Uniqueness" `Badge`. The visual anchor is a high-density 5-image asymmetrical stack positioned at the bottom of the section. The stack uses precise absolute positioning (`left-0`, `left-[14%]`, `left-1/2`, etc.) and varying `z-index` levels to create a complex layered "hand" of application previews (`placeholder-1` through `placeholder-5`) that fan out from the center.
- **Interactivity**: Static layout. Emphasizes visual depth and "unification" through the complex shadow-heavy stacking effect.

## Source Code

### `hero84.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface Hero84Props {
  className?: string;
}

const Hero84 = ({ className }: Hero84Props) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background py-20 lg:py-40 font-sans",
        className,
      )}
    >
      <div className="container relative z-10 px-4">
        {/* Editorial Text Center */}
        <div className="mb-24 lg:mb-40 flex flex-col items-center gap-10 text-center">
          <Badge className="w-fit rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-10 py-3 text-sm font-black uppercase tracking-[0.4em] text-white hover:bg-white/10 transition-colors">
            Uniqueness
          </Badge>
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <h1 className="text-5xl font-black text-white lg:text-9xl tracking-tighter leading-[0.85] text-pretty">
              Unify everything in one space
            </h1>
            <p className="max-w-[820px] mx-auto text-xl lg:text-3xl font-medium text-white/70 leading-relaxed md:px-10">
              An all-in-one platform for seamless collaboration, our app merges
              client-facing portals with internal tools to
              streamline every phase of your projects.
            </p>
          </div>
        </div>
        
        {/* High-Fidelity Asymmetrical 5-Card Stack */}
        <div className="relative mx-auto aspect-[2.5/1] max-w-[90rem] px-10 group">
          
          {/* Card 5 (Far Left) */}
          <div className="absolute bottom-0 left-0 z-10 w-[27%] overflow-hidden transition-all duration-1000 group-hover:-translate-x-4">
            <AspectRatio ratio={3 / 4}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                alt="tool preview 5"
                className="block size-full object-cover rounded-3xl border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shadow-2xl"
              />
            </AspectRatio>
          </div>
          
          {/* Card 4 (Inner Left) */}
          <div className="absolute bottom-0 left-[14%] z-20 w-[32%] overflow-hidden transition-all duration-1000 group-hover:-translate-y-4">
            <AspectRatio ratio={3 / 4}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                alt="tool preview 4"
                className="block size-full object-cover rounded-3xl border border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
              />
            </AspectRatio>
          </div>
          
          {/* Card 3 (Center Anchor) */}
          <div className="absolute bottom-0 left-1/2 z-30 w-[37%] -translate-x-1/2 overflow-hidden drop-shadow-2xl transition-all duration-1000 group-hover:scale-105">
            <AspectRatio ratio={3 / 4}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="main unified portal"
                className="block size-full object-cover rounded-3xl border-2 border-white/30 shadow-[0_50px_120px_-30px_rgba(0,0,0,1)]"
              />
            </AspectRatio>
          </div>
          
          {/* Card 2 (Inner Right) */}
          <div className="absolute right-[14%] bottom-0 z-20 w-[32%] overflow-hidden transition-all duration-1000 group-hover:-translate-y-4">
            <AspectRatio ratio={3 / 4}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="tool preview 2"
                className="block size-full object-cover rounded-3xl border border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
              />
            </AspectRatio>
          </div>
          
          {/* Card 1 (Far Right) */}
          <div className="absolute right-0 bottom-0 z-10 w-[27%] overflow-hidden transition-all duration-1000 group-hover:translate-x-4">
            <AspectRatio ratio={3 / 4}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="tool preview 1"
                className="block size-full object-cover rounded-3xl border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shadow-2xl"
              />
            </AspectRatio>
          </div>
          
        </div>
      </div>
      
      {/* Atmosphere Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export { Hero84 };
```
