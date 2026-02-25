# Hero 190

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for AI productivity tools, pairing a centered typography block with high-fidelity "Blueprint-Geometric" layout sections and a prominent project preview.
- **Use Case**: Best for AI task management tools, productivity software (e.g., "Say Goodbye to Task Overload"), or automated workflow tools that want to emphasize "Prioritize and automate" and "Simplified tasks."
- **Visual Style**: Narrative Blueprint aesthetic. Features acentered layout beginning with a prominent headline Utilizing specialized `tracking-[-4.32px]` typography anchored by custom `BorderedSection` sidebars. Layout uses specialized `DiagonalPattern` functional fragments to create an architectural, blueprint-like visual structure. Visual anchor is a unique wide-format project preview Utilizing high-fidelity `box-shadow` and `border` pairing to create a world-class floating preview context. Layout sections use specialized coordinate positioning (`-translate-y-1.5`) and responsive grid logic to maintain high-impact clarity.
- **Interactivity**: High atmospheric engagement. Features specialized blueprint-grid aesthetics and categorical social-proof metadata ("Get started") to drive professional enrollment.

## Source Code

### `hero190.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Hero190 = () => {
  return (
    <section className="bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero">
      <div className="flex border-t border-border/40">
        
        {/* Architectual Side Blueprint 1 side */}
        <BorderedSection className="opacity-40 group-hover/hero:opacity-100 transition-opacity duration-700">
          <DiagonalPattern />
        </BorderedSection>

        {/* Action Narrative focus side */}
        <div className="container relative z-10 mx-auto pt-16 pb-12 text-center md:pt-20 lg:pt-32 px-6">
          <div className="flex flex-col gap-10">
            <h1 className="mx-auto max-w-[55rem] text-6xl font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Say goodbye to <span className="text-secondary italic">task</span> overload.
            </h1>
            <p className="mx-auto mt-5 max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Prioritize, automate, and stay ahead world-class — status AI 
                simplifies your tasks so you can focus on world-class output.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500">
                <a href="/dashboard" className="flex items-center gap-6 uppercase tracking-widest leading-none">
                Get started
                <ChevronRight className="size-6 transition-transform group-hover/hero:translate-x-2" strokeWidth={3} />
                </a>
            </Button>
          </div>
        </div>

        {/* Architectual Side Blueprint 2 side */}
        <BorderedSection className="border-r-0 border-l border-border/40 opacity-40 group-hover/hero:opacity-100 transition-opacity duration-700">
          <DiagonalPattern />
        </BorderedSection>
      </div>

      {/* Blueprint Connectivity row side */}
      <div className="flex h-12 gap-1 max-lg:hidden opacity-20 group-hover/hero:opacity-60 transition-opacity duration-1000">
        <div className="flex-1 border-border/40 border" />
        <DiagonalPattern className="w-64" />
        <div className="w-32 border-border/40 border" />
        <DiagonalPattern className="w-64" />
        <div className="w-32 border-border/40 border" />
        <DiagonalPattern className="w-64" />
        <div className="flex-1 border-border/40 border" />
      </div>

      {/* Unique "Dashboard Focus" Visual segment side */}
      <div className="flex group/display">
        <BorderedSection className="opacity-40 group-hover/hero:opacity-100 transition-opacity duration-700" />
        <div className="container relative z-10 pt-0! lg:p-4! max-w-[90rem]">
            {/* Atmos Depth layer side */}
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="overflow-hidden rounded-[3rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover/hero:scale-[1.02]">
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
                    alt="AI productivity dashboard core preview"
                    className="w-full h-full object-contain p-2 grayscale group-hover/display:grayscale-0 transition-grayscale duration-700"
                />
            </div>
        </div>
        <BorderedSection className="border-r-0 border-l border-border/40 opacity-40 group-hover/hero:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Blueprint Foundation row side */}
      <div className="flex max-lg:hidden opacity-20 group-hover/hero:opacity-60 transition-opacity duration-1000">
        <div className="h-10 flex-1 border-border/40 border" />
        <div className="h-[120px] w-[min(800px,60vw)] -translate-y-2">
          <DiagonalPattern />
        </div>
        <div className="h-10 flex-1 border-border/40 border" />
      </div>
    </section>
  );
};

export { Hero190 };

const BorderedSection = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("relative w-[200px] border-r border-border/40 p-1 max-lg:hidden", className)}
  >
    {children}
  </div>
);

const DiagonalPattern = ({
  className,
  patternColor = "hsl(var(--primary))",
  patternOpacity = 0.25,
}: {
  className?: string;
  patternColor?: string;
  patternOpacity?: number;
}) => {
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColor}' fill-opacity='${patternOpacity}' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div
      className={cn("h-full w-full border-2 border-dashed border-primary/20", className)}
      style={{
        backgroundImage: svgPattern,
      }}
    />
  );
};
```
