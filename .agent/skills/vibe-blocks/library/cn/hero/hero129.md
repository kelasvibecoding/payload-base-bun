# Hero 129

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status "Online Presence" introduction using a split-column layout on a grid-etched background, pairing functional CTAs with a unique "Floating Phone Stack" visual.
- **Use Case**: Best for website builders, mobile app showcases, or digital transformation platforms that want to emphasize "Transforming your vision" and "Impactful pages."
- **Visual Style**: Architectural modern aesthetic. Features a split-column layout on a background textured with specialized "Grid-Dashed" vertical lines (`border-dashed border-black/20`). Title uses a specialized "Underline Highlight" (`after:bg-muted`) effect to pop the "Online" keyword. The visual anchor is a unique "Perspective Phone Stack" on the right Featuring two relative-positioned `phone.png` assets with high-fidelity perspective transforms (`rotateY(40deg)_rotateX(16deg)_skew(19.2deg)`) to display dashboard previews. Includes a prominent social-proof section with an `Avatar` group and a specialized "Hand-Drawn" style callout (`font-caveat` text + `CornerDownLeft` icon).
- **Interactivity**: Static layout with high interactive visual depth. Features high-fidelity perspective transforms on phone previews. Grid lines create a structured, "blueprint-like" background atmosphere.

## Source Code

### `hero129.tsx`
```tsx
import { CornerDownLeft, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero129Props {
  className?: string;
}

const Hero129 = ({ className }: Hero129Props) => {
  return (
    <section className={cn("font-sans bg-background lg:bg-muted/10 py-20 lg:py-40 overflow-hidden relative border-b", className)}>
      
      {/* Structural Grid-Etched Background Layers */}
      <div className="absolute inset-0 flex h-full w-full justify-between pointer-events-none opacity-20">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="h-full w-[1px] border-r border-dashed border-primary/40 shrink-0" />
          ))}
      </div>

      <div className="container relative z-10 px-6 max-w-[85rem]">
        <div className="grid grid-cols-1 items-center gap-24 lg:gap-32 lg:grid-cols-2">
          
          {/* Transformation Narrative side */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.85] text-pretty text-foreground drop-shadow-sm">
                Transform your{" "}
                <span className="relative z-10 whitespace-nowrap px-4 py-2 italic text-primary after:absolute after:inset-0 after:z-[-1] after:bg-primary/10 after:skew-x-[-15deg] after:rounded-2xl after:content-['']">
                    online
                </span>
                 {" "}presence.
            </h1>
            
            <div className="flex flex-col gap-10">
              <p className="text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-xl border-l-4 border-primary/20 pl-10">
                Seamlessly create engaging pages that leave a lasting impact on your visitors.
              </p>
              
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-fit w-full sm:w-fit items-center gap-4 rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105"
                >
                  <a href="#">
                    <ShoppingCart className="size-6! fill-white" />
                    <span>Buy now</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-fit w-full sm:w-fit rounded-full border-2 px-12 py-7 font-bold text-xl shadow-xl hover:bg-muted"
                >
                  <a href="#">More Templates</a>
                </Button>
              </div>
              
              {/* Specialized Social Proof side */}
              <div className="bg-background/80 backdrop-blur-3xl p-10 rounded-[3rem] border border-border/40 shadow-2xl w-fit flex flex-col gap-6 relative group transition-transform hover:scale-105 duration-500">
                <div className="relative flex -space-x-5">
                  {[1,2,3].map((i) => (
                    <Avatar key={i} className="h-16 w-16 shrink-0 rounded-full border-4 border-background shadow-xl overflow-hidden grayscale group-hover:grayscale-0 transition-grayscale duration-500">
                      <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="h-16 w-16 rounded-full bg-primary border-4 border-background shadow-xl flex items-center justify-center text-primary-foreground font-black text-lg">+</div>
                </div>
                
                <div className="relative">
                  <p className="text-lg font-black text-foreground uppercase tracking-widest leading-none">
                    Trusted by 3200+ users
                  </p>
                  {/* Hand-Drawn style callout */}
                  <div className="absolute top-1/2 left-full ml-10 flex w-fit -translate-y-1/2 flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <p className="font-serif italic text-3xl text-primary leading-none whitespace-nowrap tracking-wide">Join them today</p>
                    <CornerDownLeft className="size-10 stroke-primary rotate-45" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Unique "Perspective Phone Stack" Visual side */}
          <div className="relative isolate min-h-[40rem] lg:min-h-[55rem] flex items-end group">
            <div className="absolute inset-20 bg-primary/10 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <div className="relative w-full max-w-[45rem] mx-auto scale-90 lg:scale-100 transition-transform duration-1000 group-hover:scale-105">
              
              {/* Back Phone Layer */}
              <div className="absolute bottom-[5%] left-[15%] z-10 w-full max-w-[650px] transition-transform duration-1000 group-hover:-translate-y-10 group-hover:-translate-x-5">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero129/phone.png"
                  alt="phone frame background"
                  className="relative z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                />
                {/* Advanced Perspective Inner UI Preview */}
                <div className="absolute top-[14%] left-[12%] z-20 aspect-[0.46/1] w-[61%] overflow-hidden rounded-[2.5rem] bg-muted shadow-inner [perspective:4000px]">
                  <div className="h-full w-full [transform:rotate(48.5deg)_rotateY(40deg)_rotateX(16deg)_skew(19.2deg)] origin-center">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt="interface preview"
                      className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Front Phone Layer */}
              <div className="absolute bottom-[-15%] -left-[25%] z-30 w-full max-w-[650px] transition-transform duration-1000 group-hover:-translate-y-8 group-hover:translate-x-5">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero129/phone.png"
                  alt="phone frame foreground"
                  className="relative z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute top-[14%] left-[12%] z-40 aspect-[0.46/1] w-[61%] overflow-hidden rounded-[2.5rem] bg-muted border-2 border-white/10 shadow-inner [perspective:4000px]">
                  <div className="h-full w-full [transform:rotate(48.5deg)_rotateY(40deg)_rotateX(16deg)_skew(19.2deg)] origin-center">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="featured product preview"
                      className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero129 };
```
