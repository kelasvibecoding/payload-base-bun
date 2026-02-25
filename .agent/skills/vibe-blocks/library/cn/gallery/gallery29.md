# Gallery 29

## Metadata
- **Category**: Gallery
- **Objective**: Provide an immersive "Marquee Adventure" gallery with background motion and a focused center CTA.
- **Use Case**: Travel agency homepages, adventure trip highlights, or high-energy lifestyle portfolios.
- **Visual Style**: "Motion Journey" aesthetic. Features a background `Marquee` of vertical landscape photos scrolling slow (`60s duration`) at `opacity-40`. Overlaid in the center is a larger, high-contrast "Focal Card" with a "Explore our world" hover reveal. Incorporates complex SVG "blueprint" masks and gradient side-fades for a high-production depth look.
- **Interactivity**: Layered motion interaction. Combines continuous background scrolling with a deep-zoom, text-reveal center CTA elite professional world-wide fragments high-status.

## Source Code

### `gallery29.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Marquee } from "@/components/ui/marquee";

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-3QqzCTIfUJI-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/john-murphey-ZWUWSEY6OGk-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
];

interface Gallery29Props {
  className?: string;
}

const Gallery29 = ({ className }: Gallery29Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-24 md:py-32 border-y border-primary/5",
        className,
      )}
    >
      <div className="relative container px-6 max-w-[100rem]">
        <div className="mb-20 flex flex-col items-center text-center space-y-12">
            <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
                The Elite <span className="text-primary not-italic">Gallery</span>
            </h2>
            <p className="max-w-2xl text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 text-left leading-relaxed">
                Professional high-status fragments world-wide elite adventure world-wide professional elite high-status.
            </p>
        </div>
        
        <div className="relative group/mosaic max-w-[80rem] mx-auto rounded-[5rem] overflow-hidden border border-primary/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)]">
          {/* Marquee Background */}
          <Marquee repeat={2} className="p-0 opacity-40 [--duration:120s]">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Background elite ${idx}`}
                className="aspect-[2/3] max-w-96 object-cover grayscale transition-all duration-3000 group-hover/mosaic:grayscale-0 group-hover/mosaic:scale-110"
              />
            ))}
          </Marquee>

          {/* Focal Card */}
          <a
            href="#"
            className="group absolute inset-0 z-20 container mx-auto flex w-fit scale-100 items-center justify-center overflow-hidden transition-all duration-1000 group-hover/mosaic:scale-110"
          >
            <div className="relative overflow-hidden rounded-[3rem] border-4 border-white dark:border-muted shadow-3xl shadow-black">
              <img
                src="https://images.unsplash.com/photo-1637217644936-6b505db635f3?q=80&w=1470&auto=format&fit=crop"
                alt="Focal elite professional"
                className="aspect-[2/3] w-full max-w-[24rem] object-cover transition-transform duration-2000 hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 backdrop-blur-md transition-opacity duration-1000 group-hover:opacity-100 p-12 text-center">
                 <div className="space-y-8">
                    <p className="-translate-y-10 font-black uppercase tracking-[0.4em] italic text-white text-3xl transition-transform duration-1000 group-hover:translate-y-0 leading-tight">
                        Explore our world elite professional
                    </p>
                    <div className="h-0.5 w-12 bg-primary mx-auto scale-0 group-hover:scale-100 transition-transform duration-1000 delay-300" />
                 </div>
              </div>
            </div>
          </a>
          
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background z-10" />
        </div>

        {/* Dynamic Skew Background Layers */}
        <div
          className="pointer-events-none absolute -top-1/2 right-0 bottom-0 hidden w-1/2 min-w-[600px] skew-[-35deg] opacity-5 dark:block"
          style={{
            background: "linear-gradient(white 0%, transparent 100%)",
            mask: "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-1/2 left-0 top-0 hidden w-1/2 min-w-[600px] skew-[-35deg] opacity-5 dark:block"
          style={{
            background: "linear-gradient(transparent 0%, white 100%)",
            mask: "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export { Gallery29 };
```
