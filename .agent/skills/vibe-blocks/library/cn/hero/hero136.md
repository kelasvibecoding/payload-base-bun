# Hero 136

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a minimal, design-first introduction for creative curated libraries, pairing a centered typography block with a unique bottom-anchored "Infinity Platform" preview.
- **Use Case**: Best for design inspiration tools, asset libraries (e.g., "500,000 screens"), or creative portfolio hubs that want to emphasize "Fresh content" and "World-class design."
- **Visual Style**: Minimal Creative aesthetic. Features a centered layout beginning with a prominent stylized icon badge (`Sparkles`) using unique shadow layering (`0_-16px_0_-8px`). The title is anchored by a high-impact typography block using large `leading-tight` font sizes. The visual anchor is a unique "Infinity Platform" on at the bottom Featuring a Prominent wide-format project preview with specialized `rounded-tl-2xl` offsets to create a "Dashboard from Darkness" effect (`bg-zinc-950` backdrop). Includes a functional logo trust bar for social proof ("Trusted by design teams").
- **Interactivity**: Static layout. Primary CTA uses a specialized `ArrowRight` icon contained within a circular background to drive project discovery. Emphasizes clean UI craftsmanship and design verification through the high-fidelity project preview.

## Source Code

### `hero136.tsx`
```tsx
import { ArrowRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero136Props {
  className?: string;
}

const Hero136 = ({ className }: Hero136Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans overflow-hidden border-b", className)}>
      <div className="container relative z-10 px-6 max-w-[100rem]">
        <div className="flex flex-col items-center justify-center gap-10">
          
          {/* Creative Integrity Badge */}
          <div className="relative group">
              {/* Stacked Shadow Effect for high-status depth */}
              <div className="absolute -inset-4 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex h-24 w-24 rounded-[2rem] bg-foreground shadow-[0_-12px_24px_-8px_rgba(0,0,0,0.1),0_-30px_0_-14px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2 duration-500">
                <Sparkles className="m-auto size-14 text-background fill-background transition-transform group-hover:rotate-12" />
              </div>
          </div>
          
          <div className="max-w-[50rem] lg:max-w-[65rem] text-center text-pretty">
            <h1 className="text-6xl font-black lg:text-[8rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-sm mb-10">
                Unveil great <span className="text-primary italic">design</span> from the real world.
            </h1>
            <p className="text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed italic border-x-4 border-primary/10 px-12">
              Showcasing more than 500,000 high-fidelity screens and 2,000 iOS, Android, and
              Web apps — fresh inspiration added every week.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row mt-6">
              <Button
                asChild
                size="lg"
                className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                <a href="#">Join for free</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group flex h-fit items-center justify-center gap-6 rounded-full border-2 px-12 py-7 font-bold text-xl shadow-xl hover:bg-muted"
              >
                <a href="#">
                  <span>See our plans</span>
                  <span className="flex h-10 w-10 rounded-full bg-muted border border-border/50 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="m-auto size-6 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                  </span>
                </a>
              </Button>
          </div>
          
          {/* Design Social Proof Verification side */}
          <div className="mt-16 py-12 border-t border-border/40 w-full max-w-4xl">
              <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-10">
                Trusted by elite design teams at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-30">
                {Array(5).fill(null).map((_, i) => (
                    <img
                        key={`hero136-logo-${i}`}
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-${i + 1}.svg`}
                        alt="partner logo"
                        className="h-6 lg:h-8 w-auto grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    />
                ))}
              </div>
          </div>
          
        </div>
      </div>
      
      {/* Unique "Infinity Platform" Wide Visual Anchor */}
      <div className="w-full xl:px-8 mt-20 lg:mt-32">
        <div className="relative mx-auto aspect-[1.5/1] lg:aspect-[2.2/1] w-full max-w-[96rem] overflow-hidden bg-foreground/5 dark:bg-zinc-950 xl:rounded-[4rem] group border-x border-t border-border/40">
          <div className="absolute -bottom-2 lg:-bottom-10 left-1/2 -translate-x-1/2 w-[90%] aspect-[1.8/1] overflow-hidden rounded-t-[3rem] bg-background border-t-8 border-x-8 border-foreground/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-8">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="creative design library interface"
              className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero136 };
```
