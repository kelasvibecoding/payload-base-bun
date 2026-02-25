# Hero 82

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold introduction for a Mac-specific productivity app, pairing a centered headline with a high-fidelity application preview.
- **Use Case**: Best for desktop software websites, productivity sub-apps (e.g., "Task Timers"), or Apple ecosystem utilities that want to emphasize their native platform availability.
- **Visual Style**: High-Editorial software aesthetic. Features a centered layout with extremely oversized typography (`lg:text-8xl`). The primary visual anchor is a unique "Download for Mac" `Button` featuring a custom Apple logo path and a right-to-left transition animation. The visual concludes with a large wide-format application preview placeholder within a specialized `AspectRatio` container (`ratio={1.6 / 1}`).
- **Interactivity**: Specialized interaction. The primary CTA uses a CSS transition (`group-hover:-translate-x-5`) within an overflow-hidden container to animate the Apple icon and "Download" text on hover.

## Source Code

### `hero82.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero82Props {
  className?: string;
}

const Hero82 = ({ className }: Hero82Props) => {
  return (
    <section
      className={cn(
        "container flex flex-col gap-16 py-20 lg:py-40 font-sans overflow-hidden",
        className,
      )}
    >
      <div className="flex flex-col gap-12 lg:w-[85%] lg:self-center text-center lg:text-left items-center lg:items-start">
        <h1 className="max-w-4xl text-6xl font-black tracking-tighter text-foreground md:text-8xl lg:text-9xl leading-[0.9] text-pretty">
          A simple task timer to <span className="text-secondary italic">power</span> your goals
        </h1>
        
        <div className="flex flex-col items-center lg:items-start gap-6">
          {/* Specialized Platform Download Button */}
          <Button className="group h-fit rounded-[2rem] px-8 py-6 text-2xl font-black shadow-2xl bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105">
            <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
              <div className="flex items-center gap-4 transition-transform duration-500 group-hover:-translate-x-6">
                {/* SVG Apple Icon Path */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3.552713678800501e-15 820 950"
                  className="size-7 min-h-7 min-w-7 fill-current"
                >
                  <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z" />
                </svg>
                <span className="whitespace-nowrap uppercase tracking-widest">
                  Download for Mac
                </span>
                <ArrowRight className="size-6 min-h-6 min-w-6 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </Button>
          
          <p className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground opacity-60">Requires macOS 14.0 or later</p>
        </div>
      </div>
      
      {/* Application Preview Anchor */}
      <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <AspectRatio ratio={1.6 / 1} className="overflow-hidden rounded-[2.5rem] border border-border/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:translate-y-4">
            <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="application dashboard"
            className="size-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </AspectRatio>
      </div>
    </section>
  );
};

export { Hero82 };
```
