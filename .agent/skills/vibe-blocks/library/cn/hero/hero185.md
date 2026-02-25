# Hero 185

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for productivity platforms, pairing a complex "Mission-Oriented" layout with unique border-segment text blocks and a categorical image matrix.
- **Use Case**: Best for mission-driven agencies, productivity tools (e.g., "Purpose and Mission"), or collaborative workspaces that want to emphasize "Unlock potential" and "Seamless productivity experience."
- **Visual Style**: Narrative Purpose aesthetic. Features a unique "Border-Divide" layout Utilizing specialized `lg:border-y` and `lg:border-l` segment logic to create an architectural, blueprint-like visual structure. Text section is anchored by a high-impact heading block Utilizing specialized `tracking-[-4.32px]` typography to create extreme technical focus. Visual anchor is a unique "Team Matrix" Featuring 3 image containers split between two main layout columns, pairing a large primary project preview Utilizing `aspect-[3/3.25]` on the left with dual floating team fragments Featuring clean `lg:border-x` separators on the right.
- **Interactivity**: Static layout. Visual anchor emphasizes functional storytelling Through categorical coordinate positioning of multiple image fragments Utilizing a clean architectural blueprint context.

## Source Code

### `hero185.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Hero185Props {
  className?: string;
}

const Hero185 = ({ className }: Hero185Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="lg:border-y border-border/40">
        <div className="container px-6 max-w-[100rem] flex flex-col max-lg:divide-y lg:flex-row items-stretch">
          
          {/* Purpose Narrative side (Left segment) */}
          <div className="flex-1 lg:border-l border-border/40 flex flex-col justify-between py-12 lg:py-20 group/mission">
            <div className="lg:border-b border-border/40 lg:pr-12 lg:pb-12 lg:pl-6">
              <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tight leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Purpose<br />
                <span className="text-primary italic">Driven</span> Work.
              </h1>
              <p className="mt-12 max-w-[30rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Our world-class mission is to unlock status-potential by 
                creating tools that elevated professional productivity world-wide.
              </p>
            </div>

            {/* Matrix Frame 1: Core Foundation side (Bottom-Left) */}
            <div className="relative mt-20 aspect-[3/3.25] overflow-hidden rounded-[4rem] border-8 border-background bg-secondary/5 lg:mr-12 lg:mb-6 lg:ml-6 shadow-2xl transition-transform duration-1000 group-hover/mission:-translate-y-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="mission environment focus"
                className="size-full object-cover grayscale transition-grayscale duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Collaborative Matrix side (Right segment) */}
          <div className="flex-1 lg:border-x border-border/40 lg:px-12 py-12 lg:py-20 flex flex-col justify-center gap-20 group/team">
            
            {/* Dual Team Fragments cluster side */}
            <div className="flex flex-col sm:flex-row justify-center gap-12 lg:gap-16">
              
              {/* Matrix Frame 2: Team meeting detail side */}
              <div className="relative aspect-[1/1.1] h-[250px] lg:h-[350px] overflow-hidden rounded-[3rem] border-8 border-background bg-background shadow-2xl transition-transform duration-1000 group-hover/team:-translate-y-8">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt="high-status team meeting"
                  className="size-full object-cover"
                />
              </div>

              {/* Matrix Frame 3: Tech collaboration detail side */}
              <div className="relative aspect-[1/1.1] h-[250px] lg:h-[350px] mt-12 overflow-hidden rounded-[3rem] border-8 border-background bg-secondary shadow-2xl transition-transform duration-1000 group-hover/team:translate-y-8">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt="world-class collaboration"
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-10 px-6">
                <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-r-8 border-secondary/20 pr-12 py-4 text-right">
                We're dedicated to creating a world-class productivity 
                experience that helps people thrive in their professional 
                work and reach new heights of high-status output.
                </p>
                <div className="h-1.5 w-32 bg-primary rounded-full ml-auto animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Atmos Depth layer side */}
      <div className="absolute bottom-[-10%] right-[-5%] size-[40rem] bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
    </section>
  );
};

export { Hero185 };
```
