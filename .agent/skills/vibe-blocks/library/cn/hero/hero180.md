# Hero 180

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic introduction for conversation intelligence platforms, pairing a centered typography block with a unique "Layered Focus" dashboard visual.
- **Use Case**: Best for AI recording tools, sales coaching platforms (e.g., "Conversation Intelligence"), or insight capture tools that want to emphasize "Automated note-taking" and "Closing deals."
- **Visual Style**: Cinematic Intelligence aesthetic. Features a centered layout beginning with a prominent headline Utilizing a unique `after:` pseudo-element text-highlight effect on "at Your Fingertips." Visual anchor is a unique "Layered Frame" at the bottom Featuring 3 vertical-stacked `AspectRatio` containers Utilizing high-fidelity `radial-gradient` and `linear-gradient` background layers. Core matrix includes a centered dashboard preview Utilizing extreme coordinate positioning (`-translate-x-1/2`) to create high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features high-fidelity gradient layering and specialized button hover states to drive professional enrollment.

## Source Code

### `hero180.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero180Props {
  className?: string;
}

const Hero180 = ({ className }: Hero180Props) => {
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
    >
      <div className="container relative z-10 px-6">
        <div className="flex flex-col gap-24 lg:gap-32">
          
          {/* Intelligence Narrative side */}
          <div className="relative group/text">
            <div className="relative z-10 mx-auto flex max-w-[65rem] flex-col items-center gap-12 text-center text-pretty">
              <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Conversation intelligence <br />
                <span className="relative text-nowrap mt-4 block italic text-primary">
                  at your fingertips.
                  <span className="absolute top-[60%] left-0 z-[-1] block h-[45%] w-full -translate-y-1/2 bg-primary/10 rounded-full blur-sm opacity-60"></span>
                </span>
              </h1>
              <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Grain automates status note-taking and high-status insight 
                capture, allowing you to focus on world-class coaching.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500"
                >
                  <a href="#" className="uppercase tracking-widest leading-none">Try For Free</a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-fit rounded-full bg-background border-2 border-border/40 px-10 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted active:scale-[0.98]"
                >
                  <a href="#" className="uppercase tracking-widest leading-none">Book a Demo</a>
                </Button>
              </div>
            </div>
            
            {/* Background Narrative glow side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-0 animate-pulse pointer-events-none"></div>
          </div>

          {/* Unique "Intelligence Anchor Matrix" Visual side */}
          <div>
            <div className="mx-auto w-full max-w-[85rem] group relative">
              <AspectRatio ratio={1.82 / 1}>
                <div className="relative flex size-full flex-col justify-between">
                  
                  {/* Mirror Depth layers side */}
                  <AspectRatio
                    ratio={3.7 / 1}
                    className="w-full rounded-[3rem] bg-linear-to-b from-transparent to-primary/5 border-t border-primary/10"
                  />
                  <AspectRatio
                    ratio={3.7 / 1}
                    className="w-full rounded-[3rem] bg-linear-to-b from-primary/5 to-transparent border-b border-primary/10"
                  />
                  
                  {/* The Core Insight Highlight container side */}
                  <div className="absolute top-1/2 left-1/2 z-10 w-[88%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-105">
                    <AspectRatio ratio={1.6 / 1}>
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="intelligence dashboard primary preview"
                        className="size-full object-cover transition-grayscale duration-1000 grayscale group-hover:grayscale-0"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Atmospheric Glow anchor side */}
                  <div className="absolute -top-[50%] left-1/2 z-0 w-[60%] -translate-x-1/2">
                    <AspectRatio
                      ratio={1}
                      className="bg-[radial-gradient(closest-side,var(--color-primary),transparent)] opacity-20 animate-pulse"
                    />
                  </div>

                </div>
              </AspectRatio>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero180 };
```
