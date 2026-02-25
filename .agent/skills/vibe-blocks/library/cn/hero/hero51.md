# Hero 51

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold introduction for a digital marketplace, pairing a high-impact centered text block with a complex 5-image asymmetrical visual stack.
- **Use Case**: Best for NFT marketplaces, asset management tools, or fintech portals that want to visually represent "Discovery" and "Global access."
- **Visual Style**: Marketplace-focused modern aesthetic. Features a centered layout beginning with a background grid pattern overlay (`bg-[linear-gradient(...)]`) with a circular mask. The visual anchor is a high-density 5-image stack: a primary large image placeholder flanked by four smaller absolute-positioned image cards (`placeholder-2.svg`, `placeholder-3.svg`, `placeholder-4.svg`) that are rotated (`-rotate-12`, `rotate-12`) and positioned asymmetrically around the center.
- **Interactivity**: Static layout. Emphasizes visual density and global connectivity through the integrated `Globe` icon micro-copy below the text content.

## Source Code

### `hero51.tsx`
```tsx
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero51Props {
  className?: string;
}

const Hero51 = ({ className }: Hero51Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div className="relative">
        <div className="relative container mx-auto max-w-2xl py-10 text-center z-10">
          {/* Hero Background Pattern */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:64px_64px] opacity-40"></div>
          
          <h1 className="mb-6 text-5xl font-black lg:text-8xl tracking-tighter leading-tight text-balance">
            Explore a World of Digital Assets
          </h1>
          <p className="mb-8 text-muted-foreground lg:text-xl font-medium leading-relaxed">
            Discover the future of asset management, tokenization, and liquidity
            with our comprehensive marketplace.
          </p>
          <Button size="lg" className="px-10 font-bold shadow-2xl rounded-full">Explore Marketplace</Button>
          
          {/* Trust Value Prop */}
          <div className="mt-10 flex items-center justify-center gap-3 font-black text-lg md:text-2xl text-primary uppercase tracking-widest">
            <Globe className="h-6 w-6" />
            Global Partnerships & Innovation
          </div>
        </div>
        
        {/* Abstract Marketplace Visual (5-image stack) */}
        <div className="mx-auto mt-20 max-w-7xl px-4 py-8">
          <div className="relative w-full flex justify-center group">
            {/* Primary Center Asset */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="main asset"
              className="relative z-10 mx-auto max-h-[520px] w-full rounded-2xl object-cover shadow-2xl lg:max-w-[50vw] xl:max-w-4xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Secondary Floating Assets (Asymmetrical Stack) */}
            {/* Right Top */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="floating asset 1"
              className="absolute top-0 right-10 lg:right-40 -z-10 hidden max-h-64 -rotate-12 rounded-2xl object-cover shadow-2xl lg:block transition-all hover:-translate-y-4 hover:rotate-0 duration-500"
            />
            {/* Right Bottom */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="floating asset 2"
              className="absolute right-10 lg:right-40 bottom-0 hidden rotate-12 rounded-2xl object-cover shadow-2xl md:max-h-64 lg:block transition-all hover:translate-y-4 hover:rotate-0 duration-500"
            />
            {/* Left Top */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="floating asset 3"
              className="absolute top-0 left-10 lg:left-40 -z-10 max-h-48 -rotate-12 rounded-2xl object-cover shadow-2xl min-[450px]:max-h-56 md:max-h-64 transition-all hover:-translate-y-4 hover:rotate-0 duration-500"
            />
            {/* Left Bottom */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="floating asset 4"
              className="absolute bottom-0 left-10 lg:left-40 max-h-48 rotate-12 rounded-2xl object-cover shadow-2xl min-[450px]:max-h-56 md:max-h-64 transition-all hover:translate-y-4 hover:rotate-0 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero51 };
```
