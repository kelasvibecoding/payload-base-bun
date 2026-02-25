# Hero 186

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component libraries, pairing a split-column layout with high-fidelity "Feature-Insight" lists and a prominent dashboard preview.
- **Use Case**: Best for component libraries, design systems (e.g., "Shadcnblocks for your next project"), or developer planning tools that want to emphasize "Streamlining planning" and "Tailored workflows."
- **Visual Style**: Cinematic Dev-Experience aesthetic. Features a split-column layout starting with an high-impact typography block paired with two unique "Documentation" CTAs Utilizing high-fidelity `ArrowRight` icon buttons. Text section is anchored by a categorical "Features" column Utilizing custom `DashedLine` functional components to create an architectural layout grid. Features a unique "Vertical-Blueprint" orientation Featuring 4 list items Utilizing prominent `CircleDot` and `Blend` icons anchored by categorical descriptions. Visual anchor is a unique wide-format dashboard preview (`sm:h-[500px]`) positioned at the bottom Featuring high-fidelity project content to drive professional context.
- **Interactivity**: High atmospheric engagement. Features specialized blueprint-grid aesthetics and categorical social-proof metadata ("Cross-team projects", "Progress insights") to drive professional enrollment.

## Source Code

### `hero186.tsx`
```tsx
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across world-class high-status flows.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break professional projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across elite teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track world-class scope and professional velocity.",
    icon: ChartNoAxesColumn,
  },
];

interface Hero186Props {
  className?: string;
}

const Hero186 = ({ className }: Hero186Props) => {
  return (
    <section
      className={cn(
        "relative bg-background pt-20 lg:pt-32 pb-20 lg:pb-40 font-sans border-b overflow-hidden",
        className,
      )}
    >
      <div className="container relative z-10 px-6 max-w-[90rem]">
        <div className="flex flex-col justify-between gap-16 lg:gap-32 lg:flex-row text-pretty">
          
          {/* Documentation Narrative side */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-16">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                World-class <br />
                <span className="text-primary italic">Components</span> for elite projects.
                </h1>
                <p className="max-w-[35rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Streamline is the fit-for-status tool for planning world-class 
                software products for high-status builders.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-4 group/buttons">
              <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get started
              </Button>
              <a href="#">
                <Button variant="ghost" size="lg" className="h-fit rounded-full bg-background border-2 border-border/40 px-10 py-7 font-bold text-xl shadow-xl transition-all hover:bg-muted active:scale-[0.98]">
                  <span className="flex items-center gap-6 text-start uppercase tracking-widest leading-none text-foreground hover:text-primary transition-colors">
                    Documentation <ArrowRight className="size-6 transition-transform group-hover/buttons:translate-x-2" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Unique "Architectural Merit" Matrix side */}
          <div className="relative flex flex-1 flex-col justify-center gap-12 max-lg:pt-14 lg:ps-20 group/features">
            {/* Horizontal architectural guides */}
            <DashedLine
              orientation="vertical"
              className="absolute top-0 left-0 max-lg:hidden opacity-20"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden opacity-20"
            />
            
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex gap-10 group/item translate-x-0 hover:translate-x-4 transition-transform duration-500">
                    <div className="flex size-14 lg:size-16 shrink-0 rounded-[1.5rem] bg-primary/5 border-2 border-primary/10 shadow-sm transition-colors group-hover/item:bg-primary">
                        <Icon className="m-auto size-6 lg:size-8 text-primary group-hover/item:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl lg:text-3xl font-black text-foreground uppercase tracking-tighter transition-colors group-hover/item:text-primary">{feature.title}</h2>
                        <p className="text-lg lg:text-xl font-medium text-muted-foreground italic leading-tight">
                        {feature.description}
                        </p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Unique "Dashboard Blueprint Anchor" Visual side */}
        <div className="mx-auto mt-24 lg:mt-40 group relative">
          {/* Atmos Depth layer side */}
          <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <div className="overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="component library primary focus preview"
                className="w-full h-full min-h-[500px] lg:h-[800px] object-cover object-center grayscale hover:grayscale-0 transition-grayscale duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-primary",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

export { Hero186 };
```
