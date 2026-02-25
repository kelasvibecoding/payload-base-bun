# Hero 90

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a relationship-heavy marketing introduction centered on sharing "Team Moments" using an asymmetrical 3-card testimonial visual.
- **Use Case**: Best for team collaboration tools, video sharing platforms, or internal culture hubs that want to emphasize the "Human" side of professional connections.
- **Visual Style**: Community-first modern aesthetic. Features a split-column layout using `font-dm_sans`. The left side is a categorical typography block. The visual anchor is a complex asymmetrical 3-card stack utilizing `aspect-square` containers with specialized `rounded-[2.25rem]` corners and varying `z-index` levels (`10`, `20`, `30`). Each card features an `Avatar` paired with high-impact font-scaled text (`text-[clamp(...)]`) and specialized highlighting (`text-foreground`) to emphasize "People" and "Passion."
- **Interactivity**: Static layout. Emphasizes social proof and qualitative feedback through the overlapping "Post-it" style testimonial cards.

## Source Code

### `hero90.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Hero90Props {
  className?: string;
}

const Hero90 = ({ className }: Hero90Props) => {
  return (
    <section
      className={cn("font-sans bg-background py-20 lg:py-40 overflow-hidden", className)}
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-20 xl:grid-cols-2 items-center">
          
          {/* Editorial side */}
          <div className="flex flex-col gap-10">
            <p className="text-xl lg:text-3xl font-black uppercase tracking-[0.2em] text-primary">Share Videos</p>
            <h1 className="max-w-3xl text-5xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-pretty text-foreground">
              Share Moments that Matter
            </h1>
            <p className="text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary/20 pl-8">
              Highlight key milestones from your team&apos;s clips with shareable, high-impact videos that build genuine connection.
            </p>
          </div>
          
          {/* Asymmetrical 3-Card Visual Stack */}
          <div>
            <div className="relative mx-auto aspect-[1.7/1] max-w-[50rem] group">
              
              {/* Card 1: Team Member Left-Top Anchor */}
              <div className="absolute top-0 left-0 z-30 flex aspect-square w-[45%] rounded-[2rem] lg:rounded-[3rem] bg-muted shadow-2xl transition-transform duration-700 hover:-translate-y-4">
                <div className="m-auto flex w-[85%] flex-col gap-6 text-center">
                    <Avatar className="size-[65%] mx-auto border-4 border-background shadow-xl">
                      <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  <p className="line-clamp-3 text-sm lg:text-xl font-bold text-muted-foreground px-4 leading-tight">
                    &quot;From my experience, it was truly the <span className="text-foreground">people</span> who made the difference.&quot;
                  </p>
                </div>
              </div>
              
              {/* Card 2: Passion Right-Bottom Anchor */}
              <div className="absolute bottom-0 left-1/3 z-20 flex aspect-square w-[45%] rounded-[2rem] lg:rounded-[3rem] bg-accent/20 border border-primary/10 shadow-2xl transition-transform duration-1000 hover:translate-y-4">
                <div className="m-auto flex w-[85%] flex-col gap-6 text-center">
                  <Avatar className="mx-auto size-[65%] border-4 border-background shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <p className="line-clamp-3 text-sm lg:text-xl font-bold text-muted-foreground leading-tight px-4">
                    <span className="text-foreground">
                      Passion
                    </span>{" "}
                    is what drives our meaningful connections forward every day.
                  </p>
                </div>
              </div>
              
              {/* Card 3: Technology Right-Top Anchor */}
              <div className="absolute right-0 top-[10%] z-10 flex aspect-square w-[45%] rounded-[2rem] lg:rounded-[3rem] bg-primary/5 border border-primary/20 shadow-xl transition-all duration-1000 group-hover:scale-[1.05]">
                <div className="m-auto w-[85%] p-6">
                  <Avatar className="absolute right-[10%] bottom-[10%] z-20 size-[30%] border-2 border-background shadow-lg">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <p className="line-clamp-5 text-sm lg:text-2xl font-black text-primary/80 leading-[1.1]">
                    Technology shapes the future of how we work and connect with each other.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero90 };
```
