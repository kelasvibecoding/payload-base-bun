# Hero 123

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a clean, minimal opportunity-focused introduction using a split-column layout with a stylized "Card-in-Frame" project preview.
- **Use Case**: Best for professional portfolios, career portals (e.g., "Library / Playlist"), or creative service hubs that want to emphasize "Vision" and "Innovation."
- **Visual Style**: Minimal professional aesthetic. Features a split-column layout on a `bg-muted` background. The left column is a high-impact typography block starting with a specialized mono `Badge` intro. The visual anchor is a unique containerized project preview on the right featuring a `primary` color "Frame" (`bg-primary`) with specialized inner padding (`pt-6 pl-6`) to reveal a high-contrast dark-mode project card.
- **Interactivity**: Static layout. Primary CTA is a large `rounded-full` button using high-fidelity shadow depth to drive immediate "Demo" bookings.

## Source Code

### `hero123.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero123Props {
  className?: string;
}

const Hero123 = ({ className }: Hero123Props) => {
  return (
    <section className={cn("bg-muted py-20 lg:py-40 font-sans overflow-hidden border-b", className)}>
      <div className="container relative z-10 px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          
          {/* Opportunity Narrative side */}
          <div className="flex flex-col items-start gap-10">
            <span className="inline-block font-mono text-xs font-black uppercase tracking-[0.4em] text-primary bg-primary/5 border border-primary/10 rounded-full px-6 py-2 shadow-sm">
              Library / Playlist
            </span>
            <h1 className="text-6xl font-black lg:text-[8rem] tracking-tighter leading-[0.85] text-pretty text-foreground drop-shadow-sm">
              Unlock your <span className="text-primary italic">next</span> big opportunity
            </h1>
            <p className="text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-xl border-l-4 border-primary/20 pl-8 py-2">
              Discover innovative solutions tailored to transform your vision
              into reality with precision.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <Button
                asChild
                size="lg"
                className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                <a href="#">Get a demo</a>
              </Button>
            </div>
          </div>
          
          {/* Stylized "Card-in-Frame" Visual side */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-60 rounded-full"></div>
            
            {/* The Framing Container with Inner offset */}
            <div className="relative mx-auto max-w-[650px] overflow-hidden rounded-[3rem] bg-primary pt-10 pl-10 border-4 border-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:translate-y-4">
              <AspectRatio
                ratio={0.9 / 1}
                className="overflow-hidden rounded-tl-[2rem] border-t-4 border-l-4 border-background/20 shadow-[-20px_-20px_50px_rgba(0,0,0,0.3)] bg-background"
              >
                <img
                  alt="opportunity detail preview"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  className="block size-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90"
                />
              </AspectRatio>
              
              {/* Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero123 };
```
