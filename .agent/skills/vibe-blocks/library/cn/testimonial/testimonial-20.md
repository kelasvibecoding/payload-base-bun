# Testimonial 20

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a symmetrical, "Dashed Partition" section featuring dual testimonial blocks with integrated sparkle accents for a clean, light-hearted aesthetic.
- **Use Case**: Mid-page validation for friendly SaaS brands, "Customer Appreciation" sections, or clean blocks where dual focal stories need equal visual weighting.
- **Visual Style**: Clean architectural "Symmetrical Split" architecture featuring a dashed-border container (border-dashed). Includes a central vertical dashed divider that separates the two focal cards. Features custom "Sparkle" icons at each corner of the primary container to create a subtle "Delight" factor. Quotes utilize bold highlighting (`font-bold`) on key phrases for immediate scannability.
- **Interactivity**: Clean responsive grid switching (1-column to 2-column) and focal author identity stacks with high-density metadata.

## Description
Testimonial 20 is the "Delight Duo" component. It prioritizes the "Approachable Authority" brand archetype by providing a layout that feels intentional and structured yet visually light. The use of dashed borders and corner sparkles removes the "Heavy Corporate" feel of traditional cards, instead creating a breathable "Conversation Space" for two core user success stories. It is the ideal choice for brands that want to demonstrate their results through a friendly, peer-to-peer visual language.

## Source Code

```tsx
import { Sparkle } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Testimonial20Props {
  className?: string;
}

const Testimonial20 = ({ className }: Testimonial20Props) => {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="relative grid border border-dashed border-border/50 md:grid-cols-2 rounded-3xl bg-card/5 shadow-2xl shadow-black/5">
          {/* Testimonial 1 */}
          <div className="border-dashed border-border/50 px-8 py-12 md:border-r md:px-16 md:py-24 group">
            <p className="mb-10 text-center text-xl font-medium md:text-2xl text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
              &ldquo;The architectural depth of this system has exceeded our throughput expectations in every way. The implementation was smooth and 
              <strong className="ml-1 font-bold text-primary italic">
                the results are elite!
              </strong>&rdquo;
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="Director Hub" />
              </Avatar>
              <div className="text-center md:text-left leading-none space-y-1">
                <p className="font-bold text-foreground">Sarah Mitchell</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 italic">Director of Operations</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="px-8 py-12 text-center md:px-16 md:py-24 group">
            <p className="mb-10 text-center text-xl font-medium md:text-2xl text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
              &ldquo;The engineering team delivered 
              <strong className="mx-1 font-bold text-primary italic">exceptional quality</strong> 
              throughout the entire migration. The structural support has been remarkable at every step.&rdquo;
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Avatar className="size-14 rounded-full border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="Technical Lead" />
              </Avatar>
              <div className="text-center md:text-left leading-none space-y-1">
                <p className="font-bold text-foreground">Michael Chen</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 italic">Lead Systems Architect</p>
              </div>
            </div>
          </div>
          
          {/* Cinematic Sparkle Accents */}
          <Sparkle
            strokeWidth={1}
            className="absolute -top-[9px] -left-[9px] size-5 fill-primary text-primary shadow-lg shadow-primary/20"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -top-2 -right-2 size-5 fill-primary text-primary shadow-lg shadow-primary/20"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -right-2 -bottom-2 size-5 fill-primary text-primary shadow-lg shadow-primary/20"
          />
          <Sparkle
            strokeWidth={1}
            className="absolute -bottom-2 -left-2 size-5 fill-primary text-primary shadow-lg shadow-primary/20"
          />
        </div>
      </div>
    </section>
  );
};

export { Testimonial20 };
```
