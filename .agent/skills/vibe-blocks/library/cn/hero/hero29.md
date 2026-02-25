# Hero 29

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-conversion welcome section that pairs a complex multi-layered background with immediate social proof and a centered product teaser.
- **Use Case**: Best for consumer startups or self-serve SaaS products that want to build trust ("4.8 stars") and drive users toward free trials or demos.
- **Visual Style**: Modern conversion-focused aesthetic. Features a complex absolute-positioned SVG background containing Gaussian blurred primary-color circles and two nested grid patterns. Includes a centralized headline, dual CTA buttons (with micro-copy), and a high-visibility trust indicator pill with star ratings. The visual anchor is a bottom-aligned, partially-hidden product interface teaser (`-mb-48`) in a glassmorphic container.
- **Interactivity**: Static layout. Primary CTA pairs "Free Trial" with "No credit card" trust micro-copy to maximize click-through rates.

## Source Code

### `hero29.tsx`
```tsx
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero29Props {
  className?: string;
}

const Hero29 = ({ className }: Hero29Props) => {
  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="flex h-full flex-col items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 900"
            className="h-full w-full"
          >
            <defs>
              <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <pattern
                id="innerGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="hsl(var(--color-background))"
                  strokeWidth="0.5"
                  strokeOpacity={0.6}
                />
              </pattern>
              <pattern
                id="grid"
                width="160"
                height="160"
                patternUnits="userSpaceOnUse"
              >
                <rect width="160" height="160" fill="url(#innerGrid)" />
                <path
                  d="M 70 80 H 90 M 80 70 V 90"
                  fill="none"
                  stroke="hsl(var(--color-background))"
                  strokeWidth="1"
                  strokeOpacity={0.3}
                />
              </pattern>
            </defs>
            <g filter="url(#blur1)">
              <rect width="1400" height="900" fill="var(--color-background)" />
              <circle cx="400" cy="740" fill="var(--color-primary)" r="300" opacity="0.3" />
              <circle cx="1100" cy="600" fill="var(--color-primary)" r="240" opacity="0.2" />
            </g>
            <rect width="1400" height="900" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <h1 className="my-3 text-3xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-6xl font-sans tracking-tight">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground md:mb-12 lg:text-xl font-medium">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="mb-16 flex flex-col items-center gap-8">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" size="lg" className="font-bold bg-background">Try our product for free</Button>
              <p className="text-xs text-muted-foreground font-semibold">
                No credit card required
              </p>
            </div>
            <Button size="lg" className="font-bold">Book a demo</Button>
          </div>
          <div className="flex w-fit items-center justify-between gap-6 rounded-full bg-background/50 backdrop-blur-sm border px-6 py-2 shadow-sm">
            <div className="flex items-center">
              <span className="flex items-center gap-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="ml-2 text-xs font-bold">4.8 stars</span>
            </div>
            <div className="text-xs font-bold text-muted-foreground">207 Reviews</div>
          </div>
        </div>
      </div>
      <div className="relative container -mb-48 overflow-hidden">
        <div className="mx-auto aspect-[16/10] max-w-4xl rounded-2xl border border-background/40 bg-background/20 backdrop-blur-md p-4 shadow-2xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero29 };
```
