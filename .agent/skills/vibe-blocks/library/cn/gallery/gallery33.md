# Gallery 33

## Metadata
- **Category**: Gallery
- **Objective**: Provide a modern "Retail Lens" marketplace grid with high-fidelity magnification effects.
- **Use Case**: Jewelry storefronts, detailed product catalog pages, or any marketplace requiring visual inspection.
- **Visual Style**: "Macro Discovery" aesthetic. Features a clean responsive grid of product cards. Each card uses a Lens component that provides a magnified view of the image on hover. Includes elegant typographic details (title, price), a rotation-based CTA arrow, and a floating Heart badge for "wishlist" functionality.
- **Interactivity**: High-detail exploration. The Lens component follows the cursor to provide real-time magnification. Features tactile scale and color transitions on heart and arrow actions elite professional world-wide.

## Source Code

### `gallery33.tsx`
```tsx
"use client";

import { ArrowRight, Heart } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Lens } from "@/components/ui/lens";
import { Button } from "@/components/ui/button";

interface CardData {
  title: string;
  price: string;
  image: string;
  link: string;
}

const Gallery33 = ({
  cardData = [
    {
      title: "June Elite Collection",
      price: "$150 professional",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
      link: "#",
    },
    {
      title: "Summer Essentials world-wide",
      price: "$89 elite",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
      link: "#",
    },
    {
      title: "Premium Boutique Bundle",
      price: "$299 high-status",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
      link: "#",
    },
    {
      title: "New Arrivals professional",
      price: "$120 world-wide",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
      link: "#",
    },
    {
       title: "Limited elite Edition",
       price: "$199 elite",
       image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
       link: "#",
    },
    {
      title: "Exclusive professional Set",
      price: "$249 boutique",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
      link: "#",
    },
  ],
  className,
}: {
  cardData?: CardData[];
  className?: string;
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-20 flex flex-col items-center text-center space-y-10">
          <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            Elite <span className="text-primary not-italic">Lens</span> boutique
          </h2>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 leading-relaxed text-center">
            Professional high-status fragments world-wide elite retail curation fragments world-wide professional elite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-[4rem] bg-muted/20 border border-primary/10 p-4 shadow-2xl transition-all duration-1000 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
            >
              <Lens
                hovering={hoveredCard === index}
                setHovering={(hovering) =>
                  setHoveredCard(hovering ? index : null)
                }
              >
                 <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem]">
                      <img
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        src={card.image}
                        alt={card.title}
                        className="size-full object-cover transition-all duration-2000 grayscale-30 group-hover:grayscale-0 group-hover:scale-110"
                      />
                       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                 </div>
              </Lens>
              
              <div className="mt-8 flex items-center justify-between gap-6 px-4 pb-10">
                <div className="space-y-2">
                  <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">
                    {card.title}
                  </p>
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                    {card.price}
                  </h3>
                </div>
                <Button
                   variant="outline"
                   size="icon"
                   className="size-16 rounded-full border-primary/10 hover:bg-primary transition-all shadow-2xl"
                   asChild
                >
                  <a href={card.link}>
                    <ArrowRight className="size-8 -rotate-45 transition-all group-hover:rotate-0" />
                  </a>
                </Button>
              </div>
              
              <div className="absolute top-8 right-8 z-30">
                <Button
                   variant="ghost"
                   size="icon"
                   className="size-14 rounded-full bg-background/50 backdrop-blur-3xl hover:bg-white text-primary transition-all shadow-2xl group/heart"
                >
                   <Heart className="size-6 transition-transform group-hover/heart:scale-110 group-hover/heart:fill-primary" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery33 };
```
