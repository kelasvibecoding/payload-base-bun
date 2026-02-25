# Testimonial 13

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a minimalist, "One-Voice Community" testimonial highlight featuring a trust-stack of community faces and a single powerful quote.
- **Use Case**: Mid-page section transitions, footer trust builders, or "Community Love" highlights where a single voice represents a broader consensus.
- **Visual Style**: Clean architectural "Compact Quote" layout featuring an integrated background accent (bg-accent). Utilizes a custom "Avatar Stack Bubble" at the top of the content, which combines multiple community member avatars with a high-density metadata label ("Trusted by visionary designers"). Features centered, breathable typography for the primary quote.
- **Interactivity**: Sophisticated avatar overlapping (-ml-3) and glassmorphic shadow treatment on the identity bubble.

## Description
Testimonial 13 is the "Consensus Builder" component. It prioritizes the "Collective Social Proof" brand archetype by showing both a specific testimonial and the group of people who support it. The use of a "Trust Stack" (overlapping avatars) immediately signals to the user that this feedback is representative of a larger group of experts. It is the most effective choice for "Quality-First" brands that want to showcase community-wide adoption through a single, high-impact focal point.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial13Props {
  className?: string;
}

const Testimonial13 = ({ className }: Testimonial13Props) => {
  return (
    <section className={cn("bg-accent/30 py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Identity Trust Bubble */}
          <div className="flex items-center rounded-full bg-background/50 backdrop-blur-md border border-border/50 p-1.5 pr-6 shadow-2xl shadow-black/5 transition-transform hover:scale-105 duration-500">
            <div className="flex -space-x-3 overflow-hidden">
                <Avatar className="size-10 border-2 border-background ring-1 ring-border/20">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background ring-1 ring-border/20">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                <AvatarFallback>RA</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background ring-1 ring-border/20">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                <AvatarFallback>JS</AvatarFallback>
                </Avatar>
            </div>
            <div className="ml-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
              Trusted by 1k+ architectural innovators
            </div>
          </div>
          
          <p className="max-w-4xl text-2xl font-bold tracking-tight text-foreground lg:text-4xl leading-snug italic">
            &ldquo;The stability and DX provided by these Vibe primitives are fundamentally transformative. This architecture is the single best investment we made for our platform scaling.&rdquo;
          </p>
          
          <div className="flex flex-col items-center gap-1">
              <p className="font-bold text-foreground">John Montgomery</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Lead Architect @ Global Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial13 };
```
