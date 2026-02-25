# Hero 78

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver an immersive, high-status introduction using a full-screen image background and a sophisticated serif typography centerpiece.
- **Use Case**: Best for photography portfolios, luxury architecture firms, or editorial high-status platforms where visual storytelling and "Wonder" are the primary emotional drivers.
- **Visual Style**: High-Editorial immersive aesthetic. Features a full-screen (`h-svh`) background layout utilizing a high-fidelity architectural photograph (`pawel-czerwinski-...`). The visual anchor is a centered typography block using a specialized serif font (`font-serif`) and very large scales (`xl:text-[4.4rem]`). The section includes two sophisticated background overlays: a `after:bg-black/20` dark wash for typography legibility and a `pointer-events-none` "noise" texture pattern (`noise.png`) that adds a premium tactile feel.
- **Interactivity**: Primarily static layout. CTA is a large `rounded-full` button for immersive gallery progression.

## Source Code

### `hero78.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero78Props {
  className?: string;
}

const Hero78 = ({ className }: Hero78Props) => {
  return (
    <section
      className={cn(
        "dark relative flex h-svh max-h-[1400px] w-svw overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/pawel-czerwinski-IbHFznCKnqA-unsplash.jpg')] bg-cover bg-center bg-no-repeat font-sans md:h-svh",
        className,
      )}
    >
      {/* 1. Dark Legibility Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      
      {/* 2. Tactical Noise Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] bg-repeat opacity-20" />
      
      {/* Content Container */}
      <div className="relative z-30 m-auto flex max-w-[60rem] flex-col items-center justify-center gap-10 px-6">
        <h1 className="text-center font-serif text-5xl font-medium leading-[0.9] text-white md:text-7xl xl:text-[6rem] tracking-tighter text-pretty">
          Explore the wonders of science.
        </h1>
        <p className="text-center text-xl lg:text-3xl text-white/80 font-medium leading-relaxed max-w-2xl">
          From stunning skyscrapers to intricate bridges and innovative
          architectural marvels, each photo invites you to explore the
          artificial wonders of the world.
        </p>
        <Button size="lg" className="h-fit w-fit rounded-full px-12 py-6 text-lg font-bold shadow-2xl transition-transform hover:scale-110 active:scale-95 duration-300">
          See all photos
        </Button>
      </div>
      
      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export { Hero78 };
```
