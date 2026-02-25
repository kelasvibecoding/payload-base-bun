# Hero 86

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a personal-brand introduction for a service expert, pairing a left-aligned typography block with a unique "Circle-Mask" image visual.
- **Use Case**: Best for solo-consultants, ad campaign managers, or agency founders that want to emphasize personal "Expertise" and a "Direct-Response" value proposition.
- **Visual Style**: Expert personal aesthetic. Features a split-column layout on a `bg-muted` background. The left column is a tidy typography block with a specialized underline highlight (`border-muted2 border-b-2`) on the key value ("my expertise"). The right side is a sophisticated visual stack: a vertical image card (`AspectRatio ratio={355 / 520}`) centered specifically within a large, bottom-weighted `rounded-full` circle background (`bg-muted`), creating a "porthole" or profile centerpiece effect.
- **Interactivity**: Static layout. Primary CTA uses a specialized "I want to outsource your ads" label to drive high-intent inquiry.

## Source Code

### `hero86.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero86Props {
  className?: string;
}

const Hero86 = ({ className }: Hero86Props) => {
  return (
    <section className={cn("pb-24 font-sans overflow-hidden", className)}>
      <div className="bg-muted/30 pt-16 lg:pt-32 border-b">
        <div className="container flex flex-col items-center lg:flex-row lg:items-center gap-16">
          
          {/* Expertise side */}
          <div className="relative flex flex-col items-start gap-10 pb-20 lg:w-1/2">
            <h2 className="text-4xl font-black tracking-tighter text-foreground lg:text-7xl leading-tight text-pretty">
              Your ad campaigns excel with{" "}
              <span className="border-primary border-b-4 italic">my expertise</span>,
              delivering optimized performance.
            </h2>
            <p className="text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed max-w-xl">
              I’ll maximize your ad campaigns&apos; potential or teach you the
              strategies so you can manage them yourself!
            </p>
            <Button size="lg" className="h-fit px-10 py-6 text-xl font-black rounded-full shadow-2xl transition-transform hover:scale-105">
              I want to outsource your ads
            </Button>
          </div>
          
          {/* Profile Circle Visual */}
          <div className="relative flex w-full justify-center lg:w-1/2 pt-10">
            {/* The Floating Asset */}
            <div className="relative z-10 -mb-16 h-auto w-[85%] max-w-[400px] lg:max-w-[500px] transition-transform duration-1000 hover:-translate-y-4">
              <AspectRatio ratio={355 / 520} className="rounded-3xl border-4 border-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="ad expert profile"
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {/* The Background Circle Mask */}
            <div className="absolute bottom-0 w-full flex justify-center overflow-hidden">
              <div className="aspect-square w-[120%] -mb-[40%] rounded-full bg-primary/5 border border-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero86 };
```
