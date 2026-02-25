# Hero 159

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status "Financial Success" introduction for premium fintech platforms, pairing a split-column layout with a unique "Floating Dashboard & Card" visual.
- **Use Case**: Best for wealth management platforms, high-end banking apps, or financial insight tools that want to emphasize "Managing assets" and "Financial success."
- **Visual Style**: Premium Fintech aesthetic. Features a split-column layout on a high-status `bg-primary/5` background anchored by a wide-format background image (`placeholder-8-wide.svg`) at the top-right. The typography section is anchored by a high-impact heading block Utilizing the unique "Double-Icon" button animation for the primary CTA. The visual anchor is a unique "Floating Project" Feature: a large dashboard preview image paired with a secondary absolute-positioned smaller card (`placeholder-white-1.svg`) at the bottom-left to categorical visual weight.
- **Interactivity**: High interactive financial engagement. Features specialized "Slide-Through" button icon animations and categorical "Trust-merit" metadata ("No joining fee. No annual fee") to drive conversion.

## Source Code

### `hero159.tsx`
```tsx
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero159Props {
  className?: string;
}

const Hero159 = ({ className }: Hero159Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary/5 pt-32 lg:pt-52 pb-24 lg:pb-32 font-sans border-b",
        className,
      )}
    >
      {/* Structural Atmospheric Backdrop side */}
      <div className="absolute -top-40 right-0 hidden w-3/5 rounded-bl-[4rem] lg:block h-[45rem] overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 z-10 mix-blend-multiply"></div>
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg"
          alt="financial landscape backdrop"
          className="size-full object-cover grayscale opacity-30 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-40 hover:scale-105"
        />
      </div>

      <div className="relative z-20 container px-6">
        <div className="grid grid-cols-1 gap-24 lg:gap-32 lg:grid-cols-[1.2fr_1fr] items-center text-pretty">
          
          {/* Wealth Narrative side */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-[8.5rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Enabling your <span className="text-primary italic">financial</span> success.
              </h1>
              <p className="max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Our platform offers powerful tools and professional insights to 
                help you manage, grow, and protect your high-status assets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-10">
              {/* Unique "Dual-Move" Interactive Advanced Motion Button */}
              <Button
                asChild
                size="lg"
                className="group h-fit w-fit items-center gap-6 rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 overflow-hidden"
              >
                <a href="#">
                  <span className="uppercase tracking-widest leading-none">Started for free</span>
                  {/* Advanced icon slide effect */}
                  <div className="relative h-8 w-10 overflow-hidden">
                    <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-transform duration-700 ease-in-out group-hover:translate-x-0">
                      <MoveRight className="size-8 text-white px-1" strokeWidth={3} />
                      <MoveRight className="size-8 text-white px-1" strokeWidth={3} />
                    </div>
                  </div>
                </a>
              </Button>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 transition-colors hover:text-primary">
                <span>No joining fee</span>
                <span className="block size-1 rounded-full bg-primary/20"></span>
                <span>No annual fee</span>
              </div>
            </div>
          </div>
          
          {/* Unique "Dashboard & Card" Visual Anchor side */}
          <div className="relative group isolate">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-20 bg-primary/10 blur-[100px] rounded-full z-[-1] animate-pulse"></div>

            <div className="relative h-full w-full lg:max-w-[45rem] transition-transform duration-1000 group-hover:-translate-y-4">
              {/* Primary Dashboard Preview */}
              <div className="overflow-hidden rounded-[3rem] border-8 border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <AspectRatio ratio={1.2 / 1}>
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="financial management dashboard"
                        className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </AspectRatio>
              </div>

              {/* Floating Status Card Overlay side */}
              <div className="absolute bottom-[-10%] left-[-10%] w-48 lg:w-72 transition-transform duration-1000 group-hover:-translate-x-5 group-hover:translate-y-5">
                <AspectRatio
                  ratio={1.1 / 1}
                  className="overflow-hidden rounded-[2rem] border-4 border-background bg-background shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-white-1.svg"
                    alt="active financial tool preview"
                    className="size-full object-cover p-2 lg:p-4 opacity-80"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero159 };
```
