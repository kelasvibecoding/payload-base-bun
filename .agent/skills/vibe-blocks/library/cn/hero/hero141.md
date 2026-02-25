# Hero 141

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, high-status introduction for life-optimization platforms, pairing a centered "Gradient-Text" headline with a full-svh autoplay video background.
- **Use Case**: Best for high-performance wearable tech, digital detox tools, or elite wellness platforms that want to emphasize "Liberation" and "Phone interruptions."
- **Visual Style**: Cinematic Performance aesthetic. Features a full-screen `h-svh` layout focused on a centered typography block using specialized `bg-linear-to-br from-neutral-100 to-neutral-600` gradient text to create a high-fidelity metallic effect. The background anchor is a full-height `video` utilizes a specialized `bg-background/85` absolute overlay (`before:` pseudo-element) to maintain high-impact contrast for the lead-copy. CTA features a unique "Glow-Shadow" effect (`shadow-[0_0_5px_5px_rgba(255,255,255,.3)]`) that intensifies on hover. Includes a prominent social-proof verification row using refined `Star` icons.
- **Interactivity**: High interactive high-status atmosphere. Features cinematic autoplay video background (`loop` enabled) and glow-centric button interactivity.

## Source Code

### `hero141.tsx`
```tsx
import { ChevronRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero141Props {
  className?: string;
}

const Hero141 = ({ className }: Hero141Props) => {
  return (
    <section
      className={cn(
        "dark relative h-svh max-h-[1400px] min-h-[700px] w-full overflow-hidden bg-background px-6 font-sans border-b",
        className,
      )}
    >
      <div className="relative z-20 flex size-full container items-center justify-center">
        <div className="flex flex-col items-center gap-16 text-center text-pretty">
          
          <div className="flex flex-col items-center gap-12">
            <h1 className="bg-linear-to-br from-neutral-100 via-neutral-300 to-neutral-700 bg-clip-text text-7xl font-black leading-[0.85] tracking-[ -0.05em] text-transparent lg:text-[10rem] drop-shadow-2xl">
                Liberate yourself from phone interruptions
            </h1>
            
            <p className="max-w-[55rem] text-xl lg:text-4xl font-medium leading-relaxed text-neutral-400 italic border-x-4 border-white/10 px-12 py-4">
                &quot;The most advanced tool for high-performing individuals to reclaim their focus and time.&quot;
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="flex h-fit w-fit items-center justify-center gap-6 rounded-full bg-white text-black px-12 py-7 font-black text-xl shadow-[0_0_15px_5px_rgba(255,255,255,.2)] transition-all duration-700 hover:bg-neutral-100 hover:shadow-[0_0_40px_10px_rgba(255,255,255,.5)] hover:scale-105 active:scale-95"
          >
            <a href="#">
              <span className="uppercase tracking-[0.2em]">Buy Now</span>
              <ChevronRight className="size-8! stroke-black" strokeWidth={3} />
            </a>
          </Button>
          
          {/* High-Status Social Proof side */}
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="flex items-center justify-center gap-2">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="fill-white size-5 text-white drop-shadow-[0_0_8px_white]" />
              ))}
            </div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-white/40 leading-tight">
              Trusted by 2,000+ elite individuals
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Cinematic Autoplay Video Background Anchor */}
      <div className="absolute inset-0 size-full z-0 pointer-events-none overflow-hidden">
        {/* The Depth Overlay Frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/90 z-10" />
        
        <video
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="size-full object-cover grayscale brightness-50 transition-all duration-2000 group-hover:grayscale-0 group-hover:brightness-100 scale-110 lg:scale-105"
        />
        
        {/* Subtle Static Grain Texture for cinematic feel */}
        <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] opacity-[0.03] mix-blend-overlay z-15 pointer-events-none"></div>
      </div>
    </section>
  );
};

export { Hero141 };
```
