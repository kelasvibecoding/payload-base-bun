# Testimonial 15

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a comprehensive "Community Outreach" section that combines a primary conversion lead with a stacked list of user stories and enterprise logo validation.
- **Use Case**: Mid-page "Join the Movement" sections, community portal homepages, or any viewport requiring both "What others say" and "Join us" triggers.
- **Visual Style**: Clean architectural "Split-Service" layout (Left: Conversion lead with title, description, and primary CTA. Right: Vertical stack of testimonial cards). Features an integrated "Logo Bar" for immediate enterprise authority. Testimonial cards utilize background-mixing (bg-card vs primary-border) to create depth.
- **Interactivity**: Built-in responsive grid switching (1-column to 2-column) and a bottom-border fade for the final testimonial card to imply infinite flow.

## Description
Testimonial 15 is the "Movement Engine" component. It prioritizes the "Inclusive Innovation" brand archetype by positioning testimonials as a direct consequence of joining the community. Instead of being a passive "Proof" section, it actively invites the user to "Become a Member" while showcasing the value current members (like Emily, Alex, and Sarah) are deriving from the network. It is the most effective choice for brands that are building a community-driven ecosystem around their products.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial15Props {
  className?: string;
}

const Testimonial15 = ({ className }: Testimonial15Props) => {
  return (
    <section
      className={cn("py-24 lg:py-32 bg-muted/30 dark:bg-background/30", className)}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32 items-center">
          {/* Left: Conversion Column */}
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl leading-[1.1]">
                Join the Network of Architectural Innovators
            </h2>
            <p className="max-w-xl text-lg font-medium text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                Scale your engineering velocity alongside top-tier systems architects and product designers. Exchange primitives, audit patterns, and build the future of the web.
            </p>
            <Button size="lg" className="h-14 px-10 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Initialize Membership
            </Button>
            
            <div className="pt-12 space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/70">
                Baseline for industry leaders
                </p>
                <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
                    alt="Success Partner"
                    className="h-5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all dark:invert"
                />
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                    alt="Success Partner"
                    className="h-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all dark:invert"
                />
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-light.svg"
                    alt="Success Partner"
                    className="h-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all dark:invert"
                />
                </div>
            </div>
          </div>

          {/* Right: Testimonial Stack */}
          <div className="flex flex-col gap-5">
            {[
                { name: "Emily Johnson", content: "Joining this architectural community has completely transformed our delivery pipeline. The patterns shared here are gold." },
                { name: "Alex Smith", content: "Stay ahead of every performance curve. The workshops and primitives provide an unfair advantage in the marketplace." },
                { name: "Sarah Parker", content: "Instrumental in connecting me with top-tier systems designers. The ROI on membership was immediate." }
            ].map((t, i) => (
                <div key={i} className={cn(
                    "flex gap-6 rounded-3xl p-8 transition-all hover:translate-x-2 duration-500",
                    i % 2 === 0 ? "bg-card shadow-xl shadow-black/5 border border-border/50" : "border border-border/50 bg-background/20"
                )}>
                <Avatar className="size-10 shrink-0 border-2 border-background shadow-lg">
                    <AvatarImage
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i+1}.webp`}
                    alt="Community Expert"
                    />
                </Avatar>
                <div className="space-y-2 text-left">
                    <p className="text-sm font-bold text-foreground leading-none">{t.name}</p>
                    <p className="text-xs font-medium leading-relaxed text-muted-foreground italic">&ldquo;{t.content}&rdquo;</p>
                </div>
                </div>
            ))}
            {/* Overflow Indicator */}
            <div className="flex gap-6 rounded-t-3xl border-x border-t border-border/50 bg-gradient-to-b from-card/50 to-transparent p-8 opacity-40 grayscale">
                <Avatar className="size-10 shrink-0 border-2 border-background shadow-lg">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" />
                </Avatar>
                <div className="space-y-2 text-left overflow-hidden">
                    <p className="text-sm font-bold text-foreground leading-none">Michael Lee</p>
                    <p className="text-xs font-medium leading-relaxed text-muted-foreground truncate italic">
                        I’ve attended several virtual events through the Innovators Community...
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial15 };
```
