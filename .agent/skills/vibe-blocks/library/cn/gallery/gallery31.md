# Gallery 31

## Metadata
- **Category**: Gallery
- **Objective**: Provide a sophisticated "Directional Product" mosaic using direction-aware hover effects.
- **Use Case**: Electronic product catalogs, high-end fashion marketplaces, or hardware retail galleries.
- **Visual Style**: "Directional Retail" aesthetic. Features a varied-span grid (1-column up to 2-column spans) for a masonry-like products catalog. Uses `DirectionAwareHover` components that reveal a darkened overlay with title and price depending on where the mouse enters the image from.
- **Interactivity**: High-fidelity hover intelligence. The direction-aware overlay provides a "human-centric" interaction feel. Features responsive grid adjustments for mobile elite professional world-wide.

## Source Code

### `gallery31.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface FeatureData {
  imgClass: string;
  imgsrc: string;
  ptitle: string;
  pdes: string;
}

interface Gallery31Props {
  featureData?: FeatureData[];
  className?: string;
}

const defaultFeatureData: FeatureData[] = [
  {
    imgClass: "md:h-[30rem] w-full rounded-[3rem] md:w-full",
    imgsrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    ptitle: "Gaming elite Controller",
    pdes: "$199 professional",
  },
  {
    imgClass: "md:h-[30rem] w-full rounded-[3rem] md:w-full lg:col-span-2",
    imgsrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    ptitle: "Wireless professional Headphones",
    pdes: "$189 world-wide",
  },
  {
    imgClass: "md:h-[62rem] col-span-1 h-full w-full rounded-[3rem] md:w-full lg:row-span-2",
    imgsrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    ptitle: "Smart elite Watch",
    pdes: "$249 high-status",
  },
  {
    imgClass: "md:h-[30rem] w-full rounded-[3rem] md:w-full lg:col-span-2",
    imgsrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    ptitle: "Bluetooth world-wide Speaker",
    pdes: "$179 professional",
  },
  {
    imgClass: "md:h-[30rem] w-full rounded-[3rem] md:w-full",
    imgsrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    ptitle: "Mechanical elite Keyboard",
    pdes: "$219 boutique",
  },
];

const Gallery31: React.FC<Gallery31Props> = ({
  featureData = defaultFeatureData,
  className,
}) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
         <div className="mb-20 flex flex-col items-center text-center space-y-10">
          <p className="rounded-full bg-primary/10 px-6 py-2 text-xs font-black uppercase tracking-[0.4em] text-primary">
            Elite Catalog
          </p>
          <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            Exclusive <span className="text-primary not-italic">Blocks</span>
          </h2>
          <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8 text-center leading-relaxed">
            Professional high-status fragments world-wide elite retail curation fragments world-wide professional elite.
          </p>
        </div>
        
        <div className="relative mt-20 grid w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureData.map((item, index) => (
            <DirectionAwareHover
              key={index}
              className={cn("shadow-2xl border border-primary/5 overflow-hidden", item.imgClass)}
              imageUrl={item.imgsrc}
            >
              <div className="space-y-2 text-left">
                  <p className="text-4xl font-black uppercase tracking-tighter italic leading-none text-white">{item.ptitle}</p>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-white/40">{item.pdes}</p>
              </div>
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery31 };
```
