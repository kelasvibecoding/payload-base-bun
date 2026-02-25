# Hero 53

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a modern marketing introduction with a large-scale headline and a row of social proof avatars integrated into a dynamic layout.
- **Use Case**: Best for software maintenance tools, dev-ops platforms, or developer-focused services where "Trust" and "Developer Adoption" are the primary conversion metrics.
- **Visual Style**: Narrative-heavy developer aesthetic. Features a centered layout beginning with a very large, bold headline (`lg:text-7xl xl:text-8xl`). Below the headline, a 2-column layout (on desktop) pairs a CTA/Avatar section with a descriptive text block. The background is a "dot grid" pattern overlay (`bg-[radial-gradient(...)]`) used as a subtle texture. The CTA section includes a `Request early access` button with a `Globe` icon and a nested `Avatar` stack for social proof.
- **Interactivity**: Primarily static layout. Employs `vibe-blocks` standard avatar patterns to emphasize large-scale adoption ("Trusted by 2000+ developers").

## Source Code

### `hero53.tsx`
```tsx
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero53Props {
  className?: string;
}

const Hero53 = ({ className }: Hero53Props) => {
  return (
    <section className={cn("relative py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-4 md:px-8">
        {/* Subtle dot grid bg */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        
        <h1 className="text-5xl font-black tracking-tighter md:text-6xl lg:text-8xl xl:text-9xl text-pretty leading-[0.9]">
          Simplifying maintenance for efficient code management.
        </h1>
        
        <div className="mt-12 md:mt-16 flex flex-col-reverse lg:flex-row gap-10 md:items-end justify-between">
          <div className="flex flex-col gap-8">
            <Button size="lg" className="px-8 py-6 sm:w-fit font-bold shadow-2xl rounded-full">
              Request early access <Globe className="ml-2 size-4" />
            </Button>
            
            {/* Social Proof Avatars */}
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center -space-x-2">
                <Avatar className="size-8 border-2 border-background ring-2 ring-primary/10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="developer"
                  />
                </Avatar>
                <Avatar className="size-8 border-2 border-background ring-2 ring-primary/10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp"
                    alt="developer"
                  />
                </Avatar>
                <Avatar className="size-8 border-2 border-background ring-2 ring-primary/10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                    alt="developer"
                  />
                </Avatar>
              </span>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest leading-none">
                Trusted by 2000+ developers
              </p>
            </div>
          </div>
          
          <p className="max-w-xl text-xl lg:text-2xl leading-relaxed text-muted-foreground font-medium">
            Our platform streamlines development by automating issue tracking,
            documentation, and knowledge management.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Hero53 };
```
