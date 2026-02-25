# Testimonial 2

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a conversion-heavy "Social Social Proof" call-to-action that blends large-scale typography with overlapping identity imagery.
- **Use Case**: Mid-page CTAs, "Join the Team" sections, or final conversion blocks where trust-by-association is the primary psychological trigger.
- **Visual Style**: Bold, typographic "Identity Lead" architecture featuring XL-3XL font sizes and a custom inline "Avatar Stack" that interrupts the sentence. Utilizes negative-spacing overlaps between avatars to create a sense of collective community. Features a primary large-scale CTA button ("Get started for free").
- **Interactivity**: High-impact responsiveness where font size scales from 3xl to 7xl, and avatar sizing maintains atmospheric presence across browser widths.

## Description
Testimonial 2 is the "Community Magnet" component. It prioritizes the "Social Validation" brand archetype by creating a direct visual link between the call-to-action and the people already using the platform. By embedding the "Avatar Stack" directly into the headline text, it creates an intuitive sense of "Joining a group" rather than just "signing up." It is the most effective choice for high-growth platforms that want to emphasize the speed and ease of starting ("quickly. No cost at all").

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial2Props {
  className?: string;
}

const Testimonial2 = ({ className }: Testimonial2Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-card/10", className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl leading-[1.1]">
            <p className="flex flex-wrap items-center justify-center gap-y-2">
              Ready to build
              <span className="mx-6 inline-flex items-center -space-x-5 px-4 py-2 bg-background/50 rounded-full border border-border/50 shadow-sm">
                <Avatar className="size-12 border-4 border-background lg:size-20 shadow-xl transition-transform hover:scale-110 hover:z-10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="Network Member"
                  />
                </Avatar>
                <Avatar className="size-12 border-4 border-background lg:size-20 shadow-xl transition-transform hover:scale-110 hover:z-10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp"
                    alt="Network Member"
                  />
                </Avatar>
                <Avatar className="size-12 border-4 border-background lg:size-20 shadow-xl transition-transform hover:scale-110 hover:z-10">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                    alt="Network Member"
                  />
                </Avatar>
              </span>
              faster? Join the elite.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Initialize your project
            </Button>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
                Join 10k+ architectural innovators today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial2 };
```
