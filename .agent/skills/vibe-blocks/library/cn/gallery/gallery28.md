# Gallery 28

## Metadata
- **Category**: Gallery
- **Objective**: Deliver an elegant "Interior Showcase" with oversized navigation buttons and high-contrast styling.
- **Use Case**: Real estate listings, interior design portfolios, or architectural lookbooks.
- **Visual Style**: "Editorial Interiors" aesthetic. Features high-aspect-ratio portraits (`aspect-[3.8/5]`) in a `basis-1/2` carousel layout (showing two at a time on desktop). Includes large, semi-transparent black circles for `CarouselPrevious/Next` controls shifted into the image area for a "cinema" feel. Centered typographic header ("Beautiful Interiors") with subtle descriptive text.
- **Interactivity**: Bold navigation focus. Emphasizes the use of the `Carousel` controls as a primary interaction point. Features clean looping elite professional world-wide.

## Source Code

### `gallery28.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alex-tyson-2Fv_otxbGtg-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jason-leung-6uoj7DL6BFk-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jonathan-borba-UisC7KLAWjs-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jean-philippe-delberghe-fnIIuaEHvII-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jonathan-borba-YdomJdFdbDo-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jose-angel-rios-ux9cu6FLsFE-unsplash.jpg",
];

interface Gallery28Props {
  className?: string;
}

const Gallery28 = ({ className }: Gallery28Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col items-center justify-center text-center space-y-12 mb-24">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
                Elite <span className="text-primary not-italic">Interiors</span> boutique.
            </h2>
            <p className="max-w-2xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 text-left leading-relaxed">
                Professional high-status world-wide interiors curated for elite fragments world-wide professional elite professional high-status.
            </p>
        </div>
        
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent
              className="-ml-8"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-8 md:basis-1/2">
                  <div className="relative overflow-hidden rounded-[4rem] border border-primary/10 shadow-3xl bg-muted/20 aspect-[3.8/5]">
                      <img
                        src={image}
                        alt={`Elite Interior ${index + 1}`}
                        className="size-full object-cover transition-all duration-2000 hover:scale-110 grayscale-20 hover:grayscale-0"
                      />
                       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
                       <div className="absolute bottom-10 right-10 size-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white italic font-black text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                            {index + 1}
                       </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-y-0 left-0 -translate-x-12 md:-translate-x-20 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                <CarouselPrevious className="relative h-20 w-20 translate-x-0 translate-y-0 rounded-full border-primary/20 bg-background/50 backdrop-blur-3xl p-0 flex items-center justify-center shadow-2xl hover:bg-primary transition-all md:scale-120" />
            </div>
            <div className="absolute inset-y-0 right-0 translate-x-12 md:translate-x-20 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                <CarouselNext className="relative h-20 w-20 translate-x-0 translate-y-0 rounded-full border-primary/20 bg-background/50 backdrop-blur-3xl p-0 flex items-center justify-center shadow-2xl hover:bg-primary transition-all md:scale-120" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-24 h-0.5 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export { Gallery28 };
```
