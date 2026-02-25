# Hero 160

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-impact, cinematic introduction for growth-focused startups, pairing a centered "Gradient-Etched" headline with a wide-format background image and dashboard preview.
- **Use Case**: Best for fintech startups, revenue management platforms, or sales acceleration tools that want to emphasize "Achieving growth" and "Skyrocketing profits."
- **Visual Style**: Cinematic Venture aesthetic. Features a centered layout Utilizing a prominent high-resolution background image anchored by a specialized `bg-linear-to-b` metallic overlay. The headline utilizes specialized `bg-[linear-gradient(135deg,...)]` gradient text to create an architectural, "Pop-from-Page" depth. Includes a categorical trust badge titled "Awarded as the best startup in 2023." The visual anchor is a unique wide-format dashboard preview (`aspect-1.5/1`) at the bottom Featuring a prominent `rounded-2xl` border with specialized `border-white/15` opacity.
- **Interactivity**: High atmospheric engagement. Features dual-layered background visual depth and functional social-proof metadata ("No Credit Card Required," "Cancel Anytime") to drive high-fidelity conversion.

## Source Code

### `hero160.tsx`
```tsx
import { Circle, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero160Props {
  className?: string;
}

const Hero160 = ({ className }: Hero160Props) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background py-20 lg:py-40 font-sans border-b",
        className,
      )}
    >
      <div className="absolute top-0 left-0 z-10 aspect-2/1 w-full overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="startup growth cinematic backdrop"
            className="size-full object-cover opacity-60 grayscale scale-105"
        />
        {/* The Radial Focus Overlay Frame */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_100%)]" />
      </div>

      <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-background/40 to-background" />

      <div className="relative z-30 container px-6">
        <div className="flex flex-col items-center gap-12 text-center text-pretty">
          
          <div className="flex flex-col items-center gap-10">
            <Badge className="flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                <Trophy className="size-5 text-primary" strokeWidth={2.5} />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                Awarded as the best startup in 2023
                </p>
            </Badge>

            <h1 className="bg-[linear-gradient(135deg,theme(colors.muted2.DEFAULT)_25%,theme(colors.muted2.foreground))] w-full max-w-[55rem] lg:max-w-[70rem] bg-clip-text py-2 text-6xl font-black text-transparent lg:text-[10rem] tracking-tighter leading-[0.85] drop-shadow-2xl">
                Skyrocket your profits. Amplify <span className="italic text-primary/80">sales</span>.
            </h1>

            <p className="w-full max-w-[50rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12">
                Establish a robust business workflow and achieve massive growth in
                just 50 days—effortless and professional for high-status founders.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 mt-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button asChild size="lg" className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
                <a href="#" className="uppercase tracking-widest leading-none">Start 30 Days Free Trial</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-fit rounded-full border-2 px-12 py-7 font-bold text-xl shadow-xl hover:bg-muted">
                <a href="#">Request Free Demo</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 transition-colors">
              <p>No Credit Card Required</p>
              <Circle className="size-1.5 fill-primary/40 stroke-none" />
              <p>Cancel Anytime</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wide-Format Project Preview visual anchor side */}
      <div className="relative z-30 mx-auto max-w-[90rem] px-8 mt-32 lg:mt-48 group">
         {/* Structural Depth Framing side */}
         <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-50 z-[-1] rounded-full"></div>
         
        <div className="overflow-hidden rounded-[3rem] border-8 border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
            <AspectRatio ratio={2.2 / 1}>
            <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="startup platform revenue dashboard"
                className="size-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero160 };
```
