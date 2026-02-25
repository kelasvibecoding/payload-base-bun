# Hero 28

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a visually unique introduction using a custom SVG grid background with embedded product logos.
- **Use Case**: Best for multi-tool ecosystems, developer platforms, or integrators who want to visually represent their connectivity through a customized "tech-grid" background.
- **Visual Style**: Custom background aesthetic. Features a centered text layout. The primary differentiator is an complex, absolute-positioned SVG background that includes a masked grid with blur filters, radial gradients, and specific `<image>` tags for product logos (block-1 through block-5) placed precisely on grid intersections.
- **Interactivity**: Static background. Uses a single high-impact "Primary" CTA to drive traffic through the visual ecosystem.

## Source Code

### `hero28.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero28Props {
  className?: string;
}

const Hero28 = ({ className }: Hero28Props) => {
  return (
    <section className={cn("relative py-32 overflow-hidden", className)}>
      {/* Background pattern - SVG Tech Grid */}
      <div className="absolute inset-x-0 top-0 container hidden h-full overflow-hidden lg:block -z-10">
        <div className="flex flex-col items-center justify-center opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 520">
            <defs>
              <radialGradient id="text-backgroud" cx="50%" cy="50%" r={0.6}>
                <stop stopColor="black" offset={0.4} />
                <stop stopColor="black" offset={1} stopOpacity={0} />
              </radialGradient>
              <linearGradient id="icon-backgroud" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="var(--color-accent)" offset={0} />
                <stop stopColor="var(--color-background)" offset={1} />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  stroke="none"
                  fill="black"
                />
                <rect
                  x="80"
                  y="40"
                  width="1260"
                  height="380"
                  rx="140"
                  stroke="none"
                  filter="url(#blur)"
                  fill="white"
                />
                <rect
                  x="40"
                  y="-120"
                  width="1320"
                  height="600"
                  stroke="none"
                  fill="url(#text-backgroud)"
                />
              </mask>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
            </defs>
            <path
              stroke="var(--border)"
              strokeWidth={1}
              d="M0,40H1400M0,120H1400M0,200H1400M0,280H1400M0,360H1400M0,440H1400M60,0V520M140,0V520M220,0V520M300,0V520M380,0V520M460,0V520M540,0V520M620,0V520M700,0V520M780,0V520M860,0V520M940,0V520M1020,0V520M1100,0V520M1180,0V520M1260,0V520M1340,0V520"
              mask="url(#mask)"
            />
            <rect
              x={140}
              y={120}
              width={80}
              height={80}
              stroke="var(--border)"
              fill="url(#icon-backgroud)"
            />
            <image
              href="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              x={160}
              y={140}
              width={40}
              height={40}
            />
            <rect
              x={60}
              y={280}
              width={80}
              height={80}
              stroke="var(--border)"
              fill="url(#icon-backgroud)"
            />
            <image
              href="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              x={80}
              y={300}
              width={40}
              height={40}
            />
            <rect
              x={300}
              y={360}
              width={80}
              height={80}
              stroke="var(--border)"
              fill="url(#icon-backgroud)"
            />
            <image
              href="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
              x={320}
              y={380}
              width={40}
              height={40}
            />
            <rect
              x={1180}
              y={40}
              width={80}
              height={80}
              stroke="var(--border)"
              fill="url(#icon-backgroud)"
            />
            <image
              href="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
              x={1200}
              y={60}
              width={40}
              height={40}
            />
            <rect
              x={1260}
              y={280}
              width={80}
              height={80}
              stroke="var(--border)"
              fill="url(#icon-backgroud)"
            />
            <image
              href="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
              x={1280}
              y={300}
              width={40}
              height={40}
            />
          </svg>
        </div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
          Welcome to Our Website
        </h1>
        <p className="mb-8 max-w-2xl text-muted-foreground lg:text-xl font-medium">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="font-bold px-8">Primary Action</Button>
          <Button size="lg" variant="outline" className="font-bold px-8 bg-background">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export { Hero28 };
```
