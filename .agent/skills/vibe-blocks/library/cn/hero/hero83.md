# Hero 83

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a balanced trust-driven introduction that pairs a centered text block with a unique 3-image "curved" or weighted visual row.
- **Use Case**: Best for elite career platforms, membership programs (e.g., "Elite Access Pro"), or high-end professional marketplaces where "Quality" and "Visibility" are the primary value pillars.
- **Visual Style**: Sophisticated professional aesthetic. Features a centered layout beginning with an announcement `Badge` (`secondary` variant). The typography section utilizes high-impact scales (`md:text-6xl`) and a dual-column button grid. The visual anchor is a weighted 3-image horizontal row utilizing `AspectRatio` cards of varying widths (`w-[30%]`, `w-[40%]`, `w-[30%]`) and ratios to create an elegant, non-static visual rhythm.
- **Interactivity**: Static layout. Emphasizes visual distribution and product depth through the weighted image row.

## Source Code

### `hero83.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ButtonType {
  title: string;
  url: string;
  variant: "outline" | "default";
}

const BUTTONS: ButtonType[] = [
  {
    title: "Explore",
    url: "#",
    variant: "default",
  },
  {
    title: "Sign up",
    url: "#",
    variant: "outline",
  },
];

const IMAGES = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "product feature 1",
    ratio: 3 / 4,
    className: "w-[30%] rounded-2xl shadow-xl",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alt: "main product preview",
    ratio: 4 / 3,
    className: "w-[40%] rounded-2xl shadow-2xl relative z-10 scale-110",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    alt: "product feature 2",
    ratio: 3 / 4,
    className: "w-[30%] rounded-2xl shadow-xl",
  },
];

interface Hero83Props {
  className?: string;
}

const Hero83 = ({ className }: Hero83Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-4">
        {/* Editorial Text Center */}
        <div className="flex flex-col items-center justify-center gap-10 pb-20 text-center">
          <Badge variant="secondary" className="px-5 py-1 font-bold rounded-full uppercase tracking-widest text-primary border-primary/20">Announcing our new features</Badge>
          <h1 className="max-w-4xl text-5xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-pretty">
            Achieve More with Elite Access Pro
          </h1>
          <p className="max-w-2xl text-lg lg:text-2xl font-medium text-muted-foreground leading-relaxed">
            Enhance your career hunt with increased visibility, first-look
            opportunities and monetary incentives within our premium network.
          </p>
          <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 md:flex-row mt-4">
            {BUTTONS.map((btn, index) => (
              <Button
                asChild
                variant={btn.variant}
                size="lg"
                className={cn(
                    "w-full px-10 py-7 font-black text-lg rounded-full shadow-xl transition-transform hover:scale-105",
                    btn.variant === "outline" ? "bg-background border-2" : ""
                )}
                key={`hero-btn-${index}`}
              >
                <a href={btn.url}>{btn.title}</a>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Weighted Dynamic Image Visual */}
        <div className="flex w-full items-center justify-center gap-6 mt-10">
          {IMAGES.map((img, index) => (
            <div className={cn(img.className, "transition-transform duration-1000 hover:-translate-y-4 group")} key={`hero-img-${index}`}>
              <AspectRatio ratio={img.ratio} className="overflow-hidden rounded-3xl border border-border/50 bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero83 };
```
