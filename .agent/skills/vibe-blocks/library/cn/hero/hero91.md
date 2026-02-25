# Hero 91

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status presentation platform introduction using a cinematic video background anchor and a side-by-side editorial layout.
- **Use Case**: Best for marketing presentation tools, corporate meeting platforms (e.g., "All-Hands" tools), or digital communication agencies that want to emphasize "Transformation" and "Scale."
- **Visual Style**: Cinematic professional aesthetic. Features a split-column layout starting with an high-impact left-aligned typography block including a tracking-wide technical intro. The visual anchor is a unique right-aligned vertical video container (`h-[720px] w-[45%]`) featuring a specialized `rounded-l-full` mask to create a soft, high-fidelity entry-point for the `autoPlay` cinematic video (`video-1.mp4`).
- **Interactivity**: Primarily static layout with high-status `video` background motion. Dual CTAs use specialized "Try it firsthand" and "Schedule a demo" labels to drive high-intent conversion tracks.

## Source Code

### `hero91.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero91Props {
  className?: string;
}

const Hero91 = ({ className }: Hero91Props) => {
  return (
    <section
      className={cn(
        "flex min-h-screen items-center justify-between bg-background py-20 lg:py-0 font-sans overflow-hidden",
        className,
      )}
    >
      {/* Presentation Editorial side */}
      <div className="container relative z-10 flex flex-col gap-10 px-6 xl:px-20 lg:w-[50%] lg:pr-0">
        <p className="text-xs lg:text-sm font-black uppercase tracking-[0.4em] text-primary">
          Virtual Engagement & AI-Powered Content
        </p>
        <h1 className="text-5xl font-black text-pretty tracking-tighter text-foreground md:text-7xl lg:text-9xl leading-[0.85]">
          Presentation Platform for Pros
        </h1>
        <p className="my-8 text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-xl">
          Effortlessly Create, Deliver, and Reimagine All-Hands Corporate
          Meetings for a global audience.
        </p>
        <div className="flex flex-col gap-4 font-bold md:flex-row mt-4">
          <Button size="lg" className="h-fit items-center gap-2 rounded-full px-10 py-6 text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
            Try it firsthand →
          </Button>
          <Button variant="secondary" className="h-fit rounded-full px-10 py-6 text-xl font-bold bg-muted/50 border shadow-md lg:inline-flex hidden">
            Schedule a demo
          </Button>
        </div>
      </div>
      
      {/* Cinematic Video Anchor (Desktop Only) */}
      <div className="relative hidden h-screen max-h-[1000px] w-[45%] overflow-hidden rounded-l-[5rem] lg:block shadow-[-100px_0_150px_-50px_rgba(0,0,0,0.5)] group">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          data-wf-ignore="true"
          className="h-full w-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
        >
          <source src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4" type="video/mp4" />
        </video>
        
        {/* Visual Glass Overlay */}
        <div className="absolute inset-0 border-l-[12px] border-y-[12px] border-white/5 rounded-l-[5rem] z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export { Hero91 };
```
