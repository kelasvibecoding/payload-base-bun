# Hero 192

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered introduction for business transformation platforms, pairing a centered headline with high-fidelity "Platform-Access" badges and a prominent landscape project preview.
- **Use Case**: Best for business transformation tools, team collaboration platforms (e.g., "Transform the Way You Do Business"), or productivity software that want to emphasize "Workflow streamlining" and "14-day free trial."
- **Visual Style**: Narrative Growth aesthetic. Features a centered layout beginning with a prominent "Beta" `Badge` callout paired with a specialized "Platform-Access" textual trigger anchored by a `ChevronRight` icon. Typography section is anchored by a high-impact heading block Utilizing specialized `drop-shadow` effects. Visual anchor is a unique wide-format project preview positioned at the bottom Featuring high-fidelity project content Utilizing a high-status `drop-shadow` border context.
- **Interactivity**: High atmospheric engagement. Features categorical trust callouts ("14-day free trial") and specialized button hover states to drive professional enrollment.

## Source Code

### `hero192.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero192Props {
  className?: string;
}

const Hero192 = ({ className }: Hero192Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6">
        
        {/* Transformation Narrative side */}
        <div className="mx-auto mb-20 lg:mb-32 flex max-w-[65rem] flex-col items-center gap-12 text-center text-pretty">
          
          {/* Innovations Access Badge callout side */}
          <a
            href="#"
            className="group flex w-fit items-center gap-4 rounded-full border-2 border-primary/10 bg-muted/30 p-1 pr-6 backdrop-blur-xl transition-all hover:bg-muted/50 shadow-xl"
          >
            <Badge variant="outline" className="rounded-full border-2 border-primary/20 bg-background/50 px-6 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary">
              Elite Beta
            </Badge>
            <div className="flex items-center gap-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Try our world-class platform</p>
              <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </div>
          </a>

          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Transform the high-status way <br />
                you do <span className="text-primary italic">business</span>.
            </h1>
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Streamline your professional workflow, collaborate with elite 
                teams, and boost productivity with our world-class platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 group/buttons mt-4">
            <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get started
            </Button>
            <Button size="lg" variant="secondary" className="h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none">
                Learn more
            </Button>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/40 mt-4 group-hover:text-muted-foreground/60 transition-colors">
            14-day free trial. world-class obligations.
          </p>
        </div>

        {/* Unique "Platform Focus Anchor" Visual side */}
        <div className="group relative">
            {/* Atmos Depth layer side */}
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="business transformation core focus preview"
                    className="mx-auto max-h-[1000px] w-full object-cover grayscale hover:grayscale-0 transition-grayscale duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export { Hero192 };
```
