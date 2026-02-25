# Hero 60

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a minimalist, typography-focused marketing introduction that uses custom highlighting to emphasize efficiency.
- **Use Case**: Best for productivity tools, workflow automation platforms, or minimalist SaaS products that want to emphasize "Simplicity" and "Speed."
- **Visual Style**: Minimalist-Contrasted aesthetic. Features a centered (top) to left-aligned (bottom) typography block. The primary headline features a unique "highlight" box around the word "efficiency." using a CSS `before:` pseudo-element with `bg-muted-foreground/15`. The background is a sophisticated grid pattern pattern (`bg-[linear-gradient(...)]`) with a soft radial circular mask.
- **Interactivity**: Static layout. Primary CTA pairs "Start Now for free" with trust micro-copy emphasizing "No credit card required."

## Source Code

### `hero60.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero60Props {
  className?: string;
}

const Hero60 = ({ className }: Hero60Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container relative">
        {/* Subtle grid texture background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:64px_64px] opacity-40"></div>
        
        <div className="relative max-w-5xl">
          <h1 className="text-5xl font-black lg:text-9xl tracking-tighter leading-tight lg:leading-[0.9] text-pretty">
            Less complexity. <span className="mr-6">More</span>
            {/* Custom efficiency highlight block */}
            <span className="relative inline-block before:absolute before:top-2 before:-right-4 before:-bottom-2 before:-left-6 before:-z-10 before:rounded-2xl before:bg-primary/20 transition-all hover:before:bg-primary/30">
              efficiency.
            </span>
          </h1>
          
          <p className="mt-10 text-xl font-medium lg:text-4xl text-muted-foreground leading-relaxed max-w-3xl">
            A powerful tool to streamline workflows, manage tasks, and deliver
            results efficiently.
          </p>
          
          <div className="mt-14 flex w-fit flex-col gap-4">
            <Button size="lg" className="px-10 py-7 font-black text-lg rounded-full shadow-2xl transition-transform hover:scale-[1.02]">
              Start Now for free
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm font-bold text-muted-foreground text-center uppercase tracking-widest leading-none">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero60 };
```
