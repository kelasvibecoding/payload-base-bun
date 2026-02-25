# Hero 31

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-visibility marketing introduction using a complex SVG background pattern and a floating asymmetrical visual stack.
- **Use Case**: Best for creative platforms, digital agencies, or brand-forward tech products that want to create a sense of scale and visual depth.
- **Visual Style**: Complex geometric aesthetic. Features a centered headline and description. The background is a sophisticated SVG containing custom blur filters, nested grid patterns, and large primary-colored geometric paths (`g transform="translate(...)"`). The visual anchor is a centered narrow image placeholder (`w-[320px]`) flanked by a semi-hidden, absolute-positioned grid of larger background UI elements (`w-[300px]`) that change layout based on `2xl` vs `md` screen scales.
- **Interactivity**: Static layout. Emphasizes layout complexity and visual density through staggered absolute positioning (`pb-20`, `pt-20`, etc.).

## Source Code

### `hero31.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero31Props {
  className?: string;
}

const Hero31 = ({ className }: Hero31Props) => {
  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      <div className="absolute inset-0 overflow-hidden bg-muted -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 900"
          className="min-h-full min-w-full"
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
                stroke="var(--color-background)"
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
                stroke="var(--color-background))"
                strokeWidth="1"
                strokeOpacity={0.3}
              />
            </pattern>
          </defs>
          <g filter="url(#blur1)">
            <rect width="1400" height="900" fill="var(--muted)" />
            <rect
              x="0"
              y="0"
              width="1400"
              height="900"
              fill="var(--color-primary)"
              opacity="0.1"
            ></rect>
            <g transform="translate(1400, 900)">
              <path
                d="M-707.3 0C-692.6 -130.2 -677.8 -260.4 -612.6 -353.7C-547.3 -446.9 -431.5 -503.2 -321 -556C-210.5 -608.8 -105.2 -658.1 0 -707.3L0 0Z"
                fill="var(--color-background)"
                opacity="0.9"
              ></path>
            </g>
            <g transform="translate(0, 0)">
              <path
                d="M707.3 0C662.2 107.6 617.1 215.3 563.8 325.5C510.5 435.7 449 548.5 353.7 612.6C258.3 676.6 129.2 692 0 707.3L0 0Z"
                fill="var(--color-background)"
                opacity="0.9"
              ></path>
            </g>
          </g>
          <rect width="1400" height="900" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
            Welcome to Our Website
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="px-8 font-bold shadow-lg">Primary Action</Button>
            <Button size="lg" variant="outline" className="px-8 font-bold bg-background">
              Secondary Action
            </Button>
          </div>
        </div>
      </div>
      <div className="relative container mt-16 group">
        <div className="mt-16 -mb-48 flex justify-center gap-4 pt-4 relative">
          {/* Central Hero Visual */}
          <div className="aspect-[3/5] w-[320px] rounded-2xl border border-border bg-background shadow-2xl z-10 transition-transform group-hover:scale-[1.02]" />
          
          {/* Background UI Grid */}
          <div className="absolute inset-0 -z-0 opacity-50 grayscale group-hover:grayscale-0 transition-all">
            <div className="hidden h-full justify-between px-32 2xl:flex">
              <div className="flex flex-col gap-8 pb-20">
                <div className="flex h-[120px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
                <div className="flex h-[190px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
              </div>
              <div className="flex flex-col gap-8 pt-20">
                <div className="flex h-[190px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
                <div className="flex h-[120px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
              </div>
            </div>
            <div className="mx-auto hidden h-full max-w-6xl items-start justify-between px-12 pt-24 md:flex 2xl:hidden">
              <div className="flex flex-col gap-8 pb-32">
                <div className="flex h-[120px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
              </div>
              <div className="flex flex-col gap-8 pt-32">
                <div className="flex h-[190px] w-[300px] justify-center overflow-clip rounded-xl border border-border bg-background shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero31 };
```
