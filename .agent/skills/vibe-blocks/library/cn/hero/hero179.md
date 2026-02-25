# Hero 179

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for communication platforms, pairing a split-column layout with high-fidelity headlines and a unique "Floating Matrix" visual for shared inboxes.
- **Use Case**: Best for shared inbox tools, email collaboration platforms (e.g., "Organize Your Inbox"), or communication hubs that want to emphasize "Chaos-free email" and "Unified messaging."
- **Visual Style**: Narrative Communication aesthetic. Features a split-column layout starting with an high-impact typography block Utilizing specialized `clamp` sizing and categorical trust callouts Utilizing the `mono` font family. Visual anchor is a unique "Interface Matrix" on the right Featuring 2 relative-positioned image containers overlaying a specialized structural depth layer. Grid image units utilize specialized `object-top-left` and `object-center` alignments and high-fidelity `shadow-md` depth to drive architectural clarity.
- **Interactivity**: Static layout. Visual anchor emphasizes architectural craftsmanship through the clean coordinate positioning of multiple high-fidelity dashboard fragments Using `rounded-lg` corners.

## Source Code

### `hero179.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Hero179Props {
  className?: string;
}

const Hero179 = ({ className }: Hero179Props) => {
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
    >
      <div className="container relative z-10 px-6 max-w-[100rem]">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 lg:grid-cols-2 text-pretty">
          
          {/* Inbox Narrative side */}
          <div className="flex w-full flex-col gap-12 lg:gap-16 lg:py-[10%]">
            <div className="flex flex-col gap-8">
                <p className="font-mono text-xs font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                Shared Inbox Efficiency
                </p>
                <div className="flex flex-col gap-10">
                    <h1 className="text-7xl font-black lg:text-[11rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                    Organize<br />
                    <span className="text-secondary italic">Your</span> Inbox.
                    </h1>
                    <p className="text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                    Your professional email account doesn’t have to feel like high-status chaos. 
                    Unite your team in one world-class digital space.
                    </p>
                </div>
            </div>
          </div>
          
          {/* Unique "Interface Matrix Anchor" Visual side */}
          <div className="relative group isolate h-[40rem] lg:h-[55rem] w-full">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="relative h-full w-full max-w-[60rem] lg:absolute lg:right-0 lg:bottom-0 lg:w-[120%] transition-transform duration-1000 group-hover:-translate-y-4">
              
              {/* Inbox Matrix Frame 1: Foundation detail (Rear-Right) */}
              <div className="absolute right-0 bottom-12 lg:bottom-24 w-[85%] overflow-hidden rounded-[3rem] border-8 border-background bg-secondary/5 shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                <AspectRatio ratio={0.91 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="shared inbox environment detail"
                    className="size-full object-cover object-top-left grayscale opacity-80"
                  />
                </AspectRatio>
              </div>

              {/* Inbox Matrix Frame 2: Core focus interface (Bottom-Left) */}
              <div className="absolute right-0 bottom-0 w-[93%] overflow-hidden rounded-[3.5rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-x-4 group-hover:scale-105 group-hover:rotate-1">
                <AspectRatio ratio={1.38 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="shared inbox core focus preview"
                    className="size-full object-cover object-center scale-110"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero179 };
```
