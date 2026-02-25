# Hero 67

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a sophisticated brand-first introduction that pairs a logo header, a high-impact centered text block, and a wide-format product preview.
- **Use Case**: Best for high-growth SaaS tools, professional service websites, or digital product launches where brand identity and immediate visual credibility are required.
- **Visual Style**: Corporate professional aesthetic. Features a centered layout beginning with a prominent company `logo` (`block-1.svg`). Below the typography block, a dual-action row pairs a primary CTA (including a specialized `Calendar` icon) with a social proof avatar stack. The visual anchor is a wide-format `aspect-video` product interface placeholder (`rounded-t-lg`) with heavy bottom-cropping to tease the content below the fold.
- **Interactivity**: Static layout. Employs `vibe-blocks` standard avatar patterns and shadow effects to emphasize industry authority.

## Source Code

### `hero67.tsx`
```tsx
import { Calendar } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero67Props {
  className?: string;
}

const Hero67 = ({ className }: Hero67Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container px-4">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 lg:gap-14 text-center">
          {/* Brand Logo Header */}
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 shadow-sm">
             <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg" alt="company logo" className="h-12 lg:h-14 filter dark:invert" />
          </div>
          
          <div>
            <h1 className="mb-6 text-4xl font-black text-pretty lg:text-8xl tracking-tighter leading-tight lg:leading-[0.9]">
              Build Exceptional Online Experiences
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground lg:text-2xl font-medium leading-relaxed">
              Create a website that captures attention, drives engagement, and
              aligns with your goals, all in a matter of days.
            </p>
          </div>
          
          <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row mt-4">
            <Button size="lg" className="w-full sm:w-fit px-10 py-7 font-black text-lg rounded-full shadow-2xl transition-transform hover:scale-105">
              <Calendar className="mr-3 h-5 w-5" />
              Get Started Today
            </Button>
            
            {/* Social Proof Mini-Section */}
            <div className="flex flex-col items-center gap-3 lg:items-start group">
              <span className="inline-flex items-center -space-x-2">
                <Avatar className="size-9 border-2 border-background ring-2 ring-primary/5 shadow-md">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="user"
                  />
                </Avatar>
                <Avatar className="size-9 border-2 border-background ring-2 ring-primary/5 shadow-md">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp"
                    alt="user"
                  />
                </Avatar>
                <Avatar className="size-9 border-2 border-background ring-2 ring-primary/5 shadow-md">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                    alt="user"
                  />
                </Avatar>
                <Avatar className="size-9 border-2 border-background ring-2 ring-primary/5 shadow-md">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                    alt="user"
                  />
                </Avatar>
              </span>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/70 leading-none group-hover:text-primary transition-colors">
                Trusted by industry leaders
              </p>
            </div>
          </div>
        </div>
        
        {/* Teaser Image Visual (Bottom-cropped) */}
        <div className="mt-20 lg:mt-32 relative group">
           <div className="absolute -inset-4 bg-gradient-to-t from-primary/10 to-transparent blur-3xl -z-10 group-hover:opacity-40 transition-opacity"></div>
           <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="platform preview"
            className="mx-auto aspect-video max-h-[720px] w-full max-w-7xl rounded-t-[2.5rem] object-cover shadow-[0_-10px_50px_-20px_rgba(0,0,0,0.3)] border-t border-x border-border/50 group-hover:translate-y-4 transition-transform duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero67 };
```
