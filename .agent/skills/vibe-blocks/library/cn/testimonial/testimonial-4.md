# Testimonial 4

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a segmented "Case Study" testimonial layout that combines high-fidelity lifestyle imagery with focused client feedback.
- **Use Case**: Post-project "Impact" sections, service-specific validation blocks, or long-form testimonials where the "Result" image is as important as the text.
- **Visual Style**: Asymmetrical "Split-Column" architecture featuring a large-scale focal image paired with a spanning feedback card. Includes a secondary grid of traditional testimonial cards for supplemental social proof. Features high-contrast typography (xl-3xl) and clean metadata rows.
- **Interactivity**: Built-in responsive grid switching (1-column to 3-column) and consistent shadow-depth across all testimonial cards.

## Description
Testimonial 4 is the "Hybrid Spotlight" component. It prioritizes the "Proof of Quality" brand archetype by providing a visual anchor (the large placeholder image) that contextualizes the primary testimonial. This layout avoids the monotony of identical cards by introducing a larger "Lead" testimonial that dominates the initial ocular scan, followed by a grid of reinforcing stories. It is most effective for high-value services where a single successful case study is the primary driver of customer trust.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Testimonial4Props {
  className?: string;
}

const Testimonial4 = ({ className }: Testimonial4Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-10">
          {/* Focal Lead Testimonial */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="relative group overflow-hidden rounded-[2rem] h-[320px] lg:h-auto">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg"
                alt="Impact Visualization"
                className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            </div>
            <Card className="col-span-1 lg:col-span-2 flex items-center border border-border/50 bg-card/50 shadow-2xl shadow-black/5 rounded-[2.5rem] p-10">
              <div className="flex flex-col gap-8">
                <q className="text-2xl font-bold tracking-tight text-foreground lg:text-4xl leading-snug">
                  &ldquo;This architectural framework has fundamentally shifted how our engineering team thinks about scalability. The depth of these primitives is remarkable.&rdquo;
                </q>
                <div className="flex flex-col items-start gap-1">
                  <p className="font-bold text-lg text-foreground">Sarah Montgomery</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Principal Architect, Infrastructure Lab</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Supplemental Social Proof Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((_, idx) => (
              <Card key={idx} className="group border border-border/50 bg-card/10 hover:bg-card/50 transition-colors rounded-3xl p-2">
                <CardContent className="px-8 pt-8 leading-relaxed text-muted-foreground font-medium italic">
                  <q>
                    &ldquo;Integrating these Vibe blocks into our production environment was a seamless experience. The performance gains were immediate.&rdquo;
                  </q>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-4">
                  <div className="flex items-center gap-4 text-sm">
                    <Avatar className="size-11 border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                      <AvatarImage
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${idx + 1}.webp`}
                        alt="Network Expert"
                      />
                    </Avatar>
                    <div className="leading-tight">
                      <p className="font-bold text-foreground">John Doe</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-1">Lead Developer, Company</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial4 };
```
