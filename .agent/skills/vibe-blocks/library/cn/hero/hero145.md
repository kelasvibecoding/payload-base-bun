# Hero 145

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, high-status "Talent Marketplace" introduction pairing an interactive "Show-Text" animation with a full-screen image background.
- **Use Case**: Best for high-end recruitment agencies, cybersecurity talent networks (e.g., "Hire top pen testers"), or executive Search platforms that want to emphasize "Exceptional talent" and "Discover fast."
- **Visual Style**: Cinematic Global aesthetic. Features a full-screen `h-svh` layout utilizing a prominent high-resolution background image anchored by a specialized `radial-gradient` overlay (`circle_at_100%_-100%`) to create depth and focus. The typography section is anchored by a high-impact heading featuring specialized "Floating-Word" animations Utilizing multiple absolute-positioned `div` layers with unique `animate-[show-text_14s]` timings to rotate through key hiring roles. Concludes with a high-fidelity interaction row pairing dual `rounded-full` buttons with a functional "Scroll to explore" callout.
- **Interactivity**: Dynamic visual storytelling. Features specialized text-cycling animations. Primary CTAs use high-engagement professional text ("Join our network," "Hire top talent") with specialized hover-state background variations.

## Source Code

### `hero145.tsx`
```tsx
import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero145Props {
  className?: string;
}

const Hero145 = ({ className }: Hero145Props) => {
  return (
    <section
      className={cn(
        "dark relative h-svh max-h-[1400px] min-h-[700px] w-full bg-[url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-uBg4k82xnI4-unsplash.jpg)] bg-cover bg-fixed bg-center bg-no-repeat font-sans overflow-hidden border-b",
        className,
      )}
    >
      {/* Structural Atmospheric Overlay side */}
      <div className="absolute inset-0 z-0 bg-background/30 backdrop-blur-[2px] pointer-events-none"></div>
      <div className="absolute inset-0 z-1 z-1 pointer-events-none bg-[radial-gradient(circle_at_100%_-100%,transparent_30%,rgba(0,0,0,0.95)_90%)]" />

      <div className="relative z-10 container flex size-full max-w-[105rem] flex-col justify-end px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="flex flex-col gap-12 text-pretty">
          
          <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-2xl">
            <div className="mb-6 lg:mb-10">We help you to hire top</div>
            
            {/* Dynamic "Rotational-Text" Anchor Visual */}
            <div className="relative h-[1.2em] w-full text-primary overflow-hidden">
                {[
                    "Cybersecurity sales reps",
                    "Pen testers",
                    "Sales engineers",
                    "IAM architects",
                    "Chief Info Sec Officers",
                    "Cloud security engineers",
                    "Application Security Experts"
                ].map((text, i) => (
                    <div 
                        key={i} 
                        style={{ animationDelay: `${i * 2}s` }}
                        className="absolute top-0 left-0 h-full w-full animate-[show-text_14s_ease-in-out_infinite] opacity-0 will-change-[opacity,transform] italic whitespace-nowrap"
                    >
                        {text}
                    </div>
                ))}
            </div>
          </h1>
          
          <div className="flex flex-col gap-12 max-w-[50rem]">
            <p className="text-2xl lg:text-5xl font-medium text-foreground leading-relaxed italic border-l-[10px] border-primary/40 pl-12 py-4">
              Discover <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">exceptional</span> talent, fast.
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-12 mt-6">
              <div className="flex flex-wrap items-center gap-8">
                <Button
                  asChild
                  size="lg"
                  className="h-fit w-full sm:w-fit rounded-full bg-primary text-primary-foreground px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                >
                  <a href="#">Join our network</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-fit w-full sm:w-fit rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-xl px-12 py-7 font-bold text-xl text-white shadow-xl hover:bg-white/15"
                >
                  <a href="#">Hire top talent</a>
                </Button>
              </div>
              
              <button
                className="group flex items-center gap-4 text-sm font-black text-foreground uppercase tracking-[0.4em] hover:text-primary transition-all py-10"
              >
                <span>Scroll to explore</span>
                <div className="flex h-12 w-12 rounded-full border-2 border-primary/20 group-hover:bg-primary/20 transition-all">
                    <ArrowDown className="m-auto size-5 animate-bounce" />
                </div>
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Animated text cycle styles should be defined in global CSS for standard operation */}
    </section>
  );
};

export { Hero145 };
```
