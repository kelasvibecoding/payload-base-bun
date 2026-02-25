# Hero 174

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, full-screen introduction for digital transformation agencies, pairing a centered typography block with a high-fidelity "Global-Status" footer bar.
- **Use Case**: Best for digital consulting firms, enterprise solution providers (e.g., "Vision into reality"), or high-end tech agencies that want to emphasize "Exceptional digital solutions" and "Global headquarters."
- **Visual Style**: Cinematic Enterprise aesthetic. Features a full-screen `h-svh` layout utilizing a prominent high-resolution background image anchored by a specialized `bg-zinc-950/50` absolute overlay. The centered typography section is anchored by a high-impact heading block Utilizing the `DM Sans` font family. Includes a unique "Status-Footer" Feature: a complex absolute-positioned bar at the bottom Pairing a "Global Headquarters" location badge with a functional "Scroll-Down" icon button Utilizing a `rounded-full` border-2 and specialized `ArrowDown` icon.
- **Interactivity**: High atmospheric engagement. Features dual-layered contrast management and specialized button hover states to drive user exploration and professional trust.

## Source Code

### `hero174.tsx`
```tsx
import { ArrowDown } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero174Props {
  className?: string;
}

const Hero174 = ({ className }: Hero174Props) => {
  return (
    <Fragment>
      <section
        className={cn(
          "dark relative h-svh max-h-[1400px] min-h-[700px] w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')] bg-cover bg-fixed bg-center bg-no-repeat font-sans overflow-hidden border-b",
          className,
        )}
      >
        {/* Cinematic Atmospheric Overlay side */}
        <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[1px] pointer-events-none after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:to-background"></div>

        <div className="relative z-20 mx-auto flex h-full max-w-[100rem] px-6 py-12">
          <div className="flex w-full flex-col justify-between gap-16 lg:gap-24">
            
            {/* Transformation Narrative side */}
            <div className="mx-auto flex max-w-[65rem] flex-1 flex-col items-center justify-center gap-12 text-center text-pretty">
              <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-2xl">
                Transform Your Vision Into <span className="text-secondary italic underline decoration-secondary/20 decoration-8 underline-offset-8">Digital</span> Reality.
              </h1>
              <p className="mx-auto max-w-[45rem] text-xl lg:text-4xl font-medium leading-relaxed text-foreground italic border-x-4 border-primary/20 px-12">
                We craft exceptional digital solutions that help brands stand
                out and make a lasting high-status impact in the global landscape.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                >
                  <a href="#" className="uppercase tracking-widest leading-none">Explore Projects</a>
                </Button>
              </div>
            </div>

            {/* Unique "Status-Location" Navigation segment side */}
            <div className="flex items-center justify-between gap-10 rounded-[2.5rem] border-2 border-white/10 bg-background/10 backdrop-blur-3xl px-10 py-6 shadow-2xl group/status">
              <div className="flex items-center gap-8">
                <div className="h-12 w-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Global Headquarters</p>
                  <p className="text-xl font-bold text-foreground">San Francisco, California</p>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="flex size-16 lg:size-20 rounded-full border-4 border-primary bg-background shadow-2xl transition-all hover:bg-primary group/scroll"
              >
                <ArrowDown className="m-auto size-8 text-primary group-hover/scroll:text-white transition-colors" strokeWidth={3} />
              </Button>
            </div>

          </div>
        </div>
        
        {/* Geometric Texture Overlay side */}
        <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] opacity-[0.03] mix-blend-overlay z-15 pointer-events-none"></div>
      </section>
    </Fragment>
  );
};

export { Hero174 };
```
