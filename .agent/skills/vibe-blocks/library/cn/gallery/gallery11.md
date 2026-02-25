# Gallery 11

## Metadata
- **Category**: Gallery
- **Objective**: Provide an immersive, "Destination Card" gallery for lifestyle or travel-forward brands.
- **Use Case**: Travel destination browsing, lifestyle product highlights, or adventure portfolio carousels.
- **Visual Style**: "Lifestyle Discovery" aesthetic. Features a simple header with an "Explore All" rounded-pill button. Items are vertical cards with a 3/4 aspect ratio. Descriptive text is contained in a unique floating "rounded-2xl" white box at the bottom-left of the image. The box features a color-inversion effect on hover (white-to-black with white text).
- **Interactivity**: Fluid lifestyle discovery. Features `dragFree` carousel motion and `group-hover:scale-105` image transitions. The floating caption box transitions color and elevation on item hover professional elite world-wide.

## Source Code

### `gallery11.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface DataItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const DATA: DataItem[] = [
  {
    id: "item-1elite",
    title: "Explore the Alpine elite",
    description: "Experience breathtaking high-status views",
    href: "/destinations/alps",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: "item-2professional",
    title: "Tropical professional Paradise",
    description: "Relax on world-wide elite beaches",
    href: "/destinations/tropical",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "item-3world-wide",
    title: "Cultural elite Wonders",
    description: "Immerse yourself in high-status history",
    href: "/destinations/cultural",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "item-4high-status",
    title: "Beautiful professional People",
    description: "Meet amazing elite people world-wide",
    href: "/destinations/cultural",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
];

interface Gallery11Props {
  className?: string;
}

const Gallery11 = ({ className }: Gallery11Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="space-y-6">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
                Discover <span className="text-primary not-italic">Lifestyle</span> <br /> Destination elite professional.
                </h2>
                <div className="h-1 w-32 bg-primary/20 rounded-full" />
            </div>
            <Button variant="outline" className="rounded-full h-16 px-10 border-primary/20 text-xs font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-xl group" asChild>
            <a href="#">
                Explore All elite
                <ArrowRight className="ml-4 size-5 transition-transform group-hover:translate-x-2" />
            </a>
            </Button>
        </div>

        <div className="relative w-full overflow-visible">
            <Carousel
            opts={{
                align: "start",
                dragFree: true,
              }}
            >
            <CarouselContent className="-ml-8">
                {DATA.map((item) => (
                <CarouselItem
                    key={item.id}
                    className="pl-8 min-w-[320px] md:min-w-[420px] flex-1 cursor-pointer"
                >
                    <a href={item.href} target="_self" className="group block relative overflow-hidden rounded-[3rem] shadow-2xl border border-primary/5">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                        style={{ aspectRatio: "3/4" }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-1000" />
                        
                        <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-background/95 p-8 transition-all duration-500 ease-out group-hover:bg-primary group-hover:text-primary-foreground shadow-2xl backdrop-blur-md">
                        <div className="flex flex-col items-start gap-4">
                            <h5 className="text-xs font-black uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100">
                                {item.title}
                            </h5>
                            <div className="flex items-center justify-between w-full gap-6 leading-none">
                            <h4 className="text-2xl font-black uppercase tracking-tighter italic lg:text-3xl">
                                {item.description}
                            </h4>
                            <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                                <ArrowRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:scale-125" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery11 };
```
