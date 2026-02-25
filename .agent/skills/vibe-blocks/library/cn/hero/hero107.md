# Hero 107

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status personal portfolio introduction for digital service collaborators, pairing serif editorial typography with a unique "Hire Me" floating card visual.
- **Use Case**: Best for personal brand portfolios, specialized designer websites, or high-end freelancer landing pages that want to emphasize "Partnership" and "Service quality."
- **Visual Style**: High-Editorial boutique aesthetic. Features a split-column layout starting with a high-impact centered (mobile) to left-aligned (desktop) typography block using a specialized serif font (`font-serif`) and specialized header-clipped text (`bg-linear-to-br from-foreground text-transparent`). Includes a sophisticated custom `Button` utilizing an complex animated gradient "spark" effect (`animate-flip-btn`). The visual anchor is a large `AspectRatio ratio={1}` containerized profile or project preview featuring a prominent floating "Hire Me" secondary button with a specialized `MoonStar` icon.
- **Interactivity**: High interactive motion. Features a complex custom-animated "Click Here" button. Floating visual card uses high-fidelity shadows and `secondary` variant triggers to drive high-intent hiring actions.

## Source Code

### `hero107.tsx`
```tsx
import { MoonStar, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero107Props {
  className?: string;
}

const Hero107 = ({ className }: Hero107Props) => {
  return (
    <section
      className={cn("bg-muted/30 py-20 lg:py-40 font-sans overflow-hidden border-b", className)}
    >
      <div className="container px-6">
        <div className="flex flex-col justify-between gap-20 lg:flex-row lg:items-center">
          
          {/* Partnership Editorial side */}
          <div className="mx-auto flex max-w-2xl flex-col gap-10 lg:mx-0">
            <div className="flex flex-col gap-8">
              {/* Informational Announcement Pill */}
              <div className="m-auto flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 lg:m-0 shadow-sm group hover:border-primary/40 transition-colors">
                <Sparkles className="size-5 text-primary group-hover:animate-pulse" />
                <div className="text-sm font-black uppercase tracking-widest">
                  Free Portfolio Template
                </div>
              </div>
              
              <h1 className="bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-center font-serif text-5xl font-medium tracking-tighter text-transparent md:text-7xl lg:text-8xl md:leading-[1.1] lg:text-left text-pretty">
                Your Trusted Collaborator for Digital Services
              </h1>
            </div>
            
            <div>
              {/* Complex Animation Accent Button */}
              <div className="mx-auto w-fit lg:mx-0 group">
                <Button
                  asChild
                  className="relative h-fit overflow-hidden rounded-full px-12 py-6 shadow-2xl transition-transform hover:scale-105 active:scale-95"
                >
                  <a href="#" className="flex items-center justify-center">
                    {/* The Spark Animation Layer */}
                    <span className="absolute inset-0 h-full w-full animate-pulse opacity-50 bg-gradient-to-tr from-primary to-transparent" />
                    <span className="backdrop absolute inset-[2px] rounded-full bg-foreground transition-colors group-hover:bg-foreground/90" />
                    <span className="relative z-10 text-center text-xl font-black uppercase tracking-[0.2em] text-background">
                      Click Here
                    </span>
                  </a>
                </Button>
              </div>
              
              {/* Editorial Divider */}
              <div className="my-12 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />
              
              <p className="mx-auto lg:mx-0 w-full max-w-[30rem] text-center lg:text-left text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed italic">
                &quot;Assisting startups and brand leaders in creating high-impact and engaging
                solutions for their most demanding software requirements.&quot;
              </p>
            </div>
          </div>
          
          {/* Profile / Project Anchor side */}
          <div className="mx-auto w-full max-w-[35rem] relative">
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-60"></div>
              
              <div className="w-full overflow-hidden rounded-[3rem] border-8 border-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:translate-y-4">
                <AspectRatio ratio={1 / 1.1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="portfolio showcase"
                    className="size-full object-cover transition-opacity duration-1000 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              
              {/* Specialized "Floating Action" Card Button */}
              <div className="absolute right-[-2.5rem] bottom-[-1rem] drop-shadow-2xl transition-all duration-700 group-hover:translate-x-4">
                <Button
                  asChild
                  variant="secondary"
                  className="flex h-fit items-center gap-4 rounded-[2rem] border-4 border-background bg-secondary px-8 py-6 text-2xl font-black shadow-2xl transition-all hover:bg-secondary/90"
                >
                  <a href="#">
                    <MoonStar className="size-8! text-primary" />
                    <div>Hire Me</div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero107 };
```
