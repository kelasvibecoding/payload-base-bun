# Hero 27

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold, high-scale editorial introduction with oversized typography and asymmetrical layout.
- **Use Case**: Best for high-impact creative agencies, experimental tech brands, or luxury product launches where visual drama and scale are preferred over dense information.
- **Visual Style**: High-scale editorial aesthetic. Features an asymmetrical 2-part layout. The left side dominates with an extremely large headline (`text-[8vw]`) that uses `inline-block` spans for staggered positioning. The right side features a vertical stack of smaller-scale headings and descriptions. Includes a sophisticated background glow (`blur-3xl`).
- **Interactivity**: Subtle motion feedback. Headline spans include `hover:translate-x-1` transitions. The primary CTA uses a hidden absolute-positioned hover fill effect.

## Source Code

### `hero27.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero27Props {
  className?: string;
}

const Hero27 = ({ className }: Hero27Props) => {
  return (
    <section className={cn("relative overflow-hidden py-32 font-sans", className)}>
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background to-background/80" />
      <div className="absolute top-1/2 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:gap-20 lg:flex-row lg:items-end">
          <h1 className="relative text-6xl font-black tracking-tighter md:text-[8vw] lg:w-3/5 2xl:text-9xl leading-[0.9]">
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-2 cursor-default">
              High
            </span>
            <br />
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-2 cursor-default">
              Scale
            </span>
            <br />
            <span className="relative inline-block transition-transform duration-300 hover:translate-x-2 cursor-default">
              Heading.
            </span>
          </h1>
          <div className="lg:max-w-auto max-w-lg space-y-6 lg:mb-4 lg:w-2/5">
            <p className="text-xl font-bold md:text-3xl lg:text-4xl tracking-tight">
              Small
              <br />
              Subheading
              <br />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              optio quis? Veniam accusamus quaerat illum dolorem eos atque
              reiciendis numquam. Veniam accusamus quaerat illum
            </p>
            <Button className="group relative mt-8 overflow-hidden font-bold" size="lg">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 translate-y-full bg-primary/20 transition-transform duration-300 group-hover:translate-y-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero27 };
```
