# Hero 170

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status introduction for startups, pairing a centered typography block with high-fidelity "Integration-Trust" badges and a prominent dashboard preview.
- **Use Case**: Best for SaaS startups, developer tool platforms (e.g., "Star on Github"), or efficient dashboard tools that want to emphasize "Unlock potential" and "Efficient project management."
- **Visual Style**: Cinematic Startup aesthetic. Features a centered layout beginning with a categorical trust block ends with functional "Integration" icons Utilizing specialized `invert` image filters. The visual anchor is a unique wide-format dashboard preview (`aspect-video`) positioned at the bottom Featuring absolute-positioned dot patterns at the corners to drive high-fidelity visual context. Includes dual primary CTAs pairing a standard "Download" button with a specialized "Github Star" secondary button Featuring a prominent `FaGithub` icon.
- **Interactivity**: High interactive developer engagement. Features high-fidelity button hover states and categorical integration metadata ("Explore integration options") to drive professional enrollment.

## Source Code

### `hero170.tsx`
```tsx
import { FaGithub } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero170Props {
  className?: string;
}

const Hero170 = ({ className }: Hero170Props) => {
  return (
    <section
      className={cn(
        "dark relative bg-background pt-20 lg:pt-40 font-sans border-b overflow-hidden",
        className,
      )}
    >
      <div className="container relative z-20 px-6">
        <div className="mx-auto max-w-[55rem] flex flex-col items-center gap-12 text-center text-pretty">
          
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Unlock the <span className="text-secondary italic">potential</span> of your startup.
            </h1>
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12">
                Experience a revolutionary dashboard that empowers your high-status 
                team with real-time data and world-class collaboration.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <Button
              asChild
              size="lg"
              className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
            >
              <a href="#" className="uppercase tracking-widest leading-none">Download Now</a>
            </Button>
            <Button
              variant="secondary"
              asChild
              size="lg"
              className="group flex h-fit items-center gap-6 rounded-full border-2 border-border bg-background px-10 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted"
            >
              <a href="#">
                <FaGithub className="size-8 transition-transform group-hover:rotate-12" />
                <span>Star on Github</span>
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col gap-8 mt-10">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 transition-colors hover:text-primary">
                Explore our world-class integrations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Button key={i} asChild size="icon" variant="ghost" className="size-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all p-2 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-primary/5">
                        <a href="#">
                            <img
                            src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-${i}.svg`}
                            alt={`integration channel ${i}`}
                            className="size-full invert"
                            />
                        </a>
                    </Button>
                ))}
            </div>
          </div>
        </div>

        {/* Unique "Dashboard Anchor" Visual Narrative side */}
        <div>
          <div className="relative mx-auto mt-24 lg:mt-32 w-full max-w-[65rem] group">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="overflow-hidden rounded-[4rem] rounded-b-none border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
                alt="startup primary dashboard preview"
                className="relative z-20 aspect-video block w-full object-cover"
                />
            </div>
            
            {/* Architectural Trust dots */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dots.svg"
              alt="structural pattern"
              className="absolute top-0 right-0 z-10 size-40 lg:size-56 translate-x-1/2 -translate-y-1/2 opacity-20 transition-transform duration-1000 group-hover:scale-110"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dots.svg"
              alt="structural pattern"
              className="absolute bottom-0 left-0 z-10 size-40 lg:size-56 -translate-x-1/2 translate-y-1/2 opacity-20 transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero170 };
```
