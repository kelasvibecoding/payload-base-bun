# Hero 157

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, architectural introduction pairing a high-status "World's Number One" narrative with a full-screen image background.
- **Use Case**: Best for architectural firms, interior design agencies, or high-end construction consultancies that want to emphasize "Distinctive spaces" and "Cutting-edge innovations."
- **Visual Style**: Cinematic Architectural aesthetic. Features a full-screen `h-svh` layout utilizing a prominent high-resolution background image anchored by a specialized `bg-black/65` absolute overlay (`after:` pseudo-element) to maintain high-impact contrast. The typography section is anchored by a high-impact title titled with a prominent categorical badge ("#WORLDS NUMBER ONE"). Includes a functional "Our projects" CTA utilizing a `rounded-full` button with a specialized `MoveUpRight` transition effect.
- **Interactivity**: Dynamic visual storytelling. Features high-fidelity button hover effects with categorical project metadata ("Reshaping lives and uplifting communities") anchored by a prominent border separator.

## Source Code

### `hero157.tsx`
```tsx
import { MoveUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero157Props {
  className?: string;
}

const Hero157 = ({ className }: Hero157Props) => {
  return (
    <section
      className={cn(
        "dark relative h-svh max-h-[1400px] min-h-[700px] w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')] bg-cover bg-fixed bg-center bg-no-repeat py-20 font-sans overflow-hidden border-b",
        className,
      )}
    >
      {/* Structural Atmospheric Atmospheric Overlay side */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-20 container h-full w-full max-w-[90rem] px-6">
        <div className="flex h-full w-full flex-col justify-end gap-16 lg:gap-24 pb-24 lg:pb-32">
          
          <div className="flex max-w-[70rem] flex-col gap-6 text-pretty">
            <p className="text-sm font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
              #WORLDS NUMBER ONE
            </p>
            <h1 className="text-6xl font-black lg:text-9xl leading-[0.85] tracking-tighter text-foreground drop-shadow-2xl">
              Designing <span className="text-secondary italic">distinctive</span> spaces with cutting-edge innovations.
            </h1>
          </div>
          
          <div className="flex w-full flex-col justify-between gap-12 sm:flex-row sm:items-end">
            <p className="max-w-[25rem] border-l-4 border-primary/40 pl-10 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic">
              &quot;Harnessing the power of architecture to reshape lives and uplift
              communities worldwide.&quot;
            </p>
            
            <div className="shrink-0 group">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex h-fit w-fit items-center gap-6 rounded-full border-2 border-white/20 bg-background/10 backdrop-blur-3xl px-12 py-7 text-xl font-black text-white uppercase shadow-2xl transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105"
              >
                <a href="#">
                  <span>Our Projects</span>
                  <div className="flex h-10 w-10 rounded-full bg-white/10 transition-transform group-hover:rotate-12 group-hover:bg-primary-foreground/20">
                    <MoveUpRight className="m-auto size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={3} />
                  </div>
                </a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Geometric Grain Texture overlay side */}
       <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] opacity-[0.03] mix-blend-overlay z-15 pointer-events-none"></div>
    </section>
  );
};

export { Hero157 };
```
