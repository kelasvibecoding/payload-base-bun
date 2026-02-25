# Testimonial 12

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a data-intensive "Success Story" Carousel that pairs qualitative user feedback with quantitative business impact metrics.
- **Use Case**: ROI-focused pages, "Impact Report" sections, or high-value enterprise landing pages where "Proving the Result" is the primary goal.
- **Visual Style**: Cinematic "Impact Hub" architecture featuring a large-scale rounded card (rounded-2xl) with a muted background. Utilizes a split layout (Left: Author identity and large-scale portrait, Right: Corporate logo, Quote, and a high-density "Performance Stat" grid). Features bold numeric callouts (e.g., 2.2x, 256%) with associated metric descriptions.
- **Interactivity**: Fully functional Shadcn Carousel with custom-positioned "Bottom-Right" navigation triggers for an asymmetrical, modern interface feel.

## Description
Testimonial 12 is the "Case Study Engine" component. It prioritizes the "Quantifiable Success" brand archetype by treating every testimonial as a miniature success story. Instead of just displaying "nice words," it anchors the feedback with two primary "Result Metrics" (e.g., Increase in Revenue, Growth in Active Users). This dual-proof approach (Human + Data) is the most powerful psychological tool for converting enterprise buyers who require objective justification for their architectural investments.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

interface Testimonial12Props {
  className?: string;
}

const Testimonial12 = ({ className }: Testimonial12Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="relative rounded-[2.5rem] bg-muted/50 border border-border/50 overflow-hidden shadow-2xl shadow-black/5">
          <Carousel className="static">
            <CarouselContent>
              {[1, 2].map((i) => (
                <CarouselItem key={i} className="grid grid-cols-1 gap-y-12 p-10 lg:grid-cols-3 lg:gap-16 lg:p-24 items-center">
                  {/* Left: Identity Column */}
                  <div className="flex flex-col items-center lg:items-start group">
                    <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                        <img
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg`}
                        alt="Success Representative"
                        className="mx-auto max-h-80 w-full object-cover lg:mx-0 lg:max-h-none transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="mt-8 text-center lg:text-left space-y-1">
                      <h3 className="text-xl font-bold text-foreground leading-none">John Doe</h3>
                      <p className="text-sm font-bold uppercase tracking-widest text-primary/70">Principal Architect, Company {i}</p>
                    </div>
                  </div>

                  {/* Right: Impact Column */}
                  <div className="col-span-1 lg:col-span-2 space-y-10">
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg"
                        alt="Verified Enterprise"
                        className="h-8 w-auto lg:h-12 opacity-80"
                      />
                      <span className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                        Enterprise Solutions
                      </span>
                    </div>
                    <p className="text-center text-xl font-bold italic text-foreground/80 lg:text-left lg:text-3xl leading-snug">
                      &ldquo;The architectural integrity of these Vibe blocks has reduced our system overhead by an order of magnitude. Our deployment cycles have never been more predictable.&rdquo;
                    </p>
                    <Separator className="bg-border/50" />
                    
                    {/* Performance Stat Grid */}
                    <div className="grid justify-center gap-12 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                      <div className="flex flex-col gap-2">
                        <span className="text-5xl font-bold tracking-tighter text-primary md:text-7xl">
                          2.2x
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-foreground text-sm uppercase tracking-widest">Monthly Active Users</span>
                            <span className="text-xs font-medium text-muted-foreground mt-1 tracking-wider italic">
                            Measured since platform migration
                            </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-5xl font-bold tracking-tighter text-primary md:text-7xl">
                          256%
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-foreground text-sm uppercase tracking-widest">Efficiency Increase</span>
                            <span className="text-xs font-medium text-muted-foreground mt-1 tracking-wider italic">
                            Developer velocity audited weekly
                            </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Positioned Navigation Controls */}
            <div className="absolute right-8 bottom-8 z-20 lg:right-16 lg:bottom-16">
              <div className="relative flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm hover:scale-105 transition-all text-foreground" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm hover:scale-105 transition-all text-foreground" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial12 };
```
