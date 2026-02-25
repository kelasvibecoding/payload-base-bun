# Product Categories 5

## Metadata
- **Category**: Product Categories
- **Objective**: Display highly engaging category call-to-actions using mixed media (video and image) in an asymmetric grid.
- **Use Case**: Homepage features for fashion brands or promotional seasonal campaigns (e.g., "Up to 50% off").
- **Visual Style**: Dynamic, high-impact design with an asymmetric grid (1/3 vs 2/3) and full-bleed media backgrounds.
- **Interactivity**: 
    - Autoplay background video for the primary segment.
    - Gradient overlay for text legibility in the secondary segment.
    - Floating action buttons (`ShoppingBag` icon) for immediate navigation.
    - Responsive height management (`lg:min-h-150`).

## Description
Product Categories 5 is a flagship promotional component that leverages video and high-resolution imagery to drive conversions. The asymmetric layout creates a visual hierarchy where one category (with video) acts as the anchor, while the larger image segment focuses on broad essentials with a specific "See More" Call-to-Action. It uses modern CSS techniques like `bg-gradient-to-t` to ensure text readability over lifestyle imagery without compromising the visual integrity of the media.

## Source Code

```tsx
import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type ImageMedia = {
  type: "image";
  alt: string;
  src: string;
  srcSet?: string;
  sizes?: string;
};

type VideoMedia = {
  type: "video";
  src: string;
};

type MediaItem = ImageMedia | VideoMedia;

interface ProductCategory {
  title: string;
  text: string;
  link: string;
  cta?: {
    link: string;
    text: string;
  };
  media: MediaItem;
}

interface ProductCategories5Props {
  categories: ProductCategory[];
  className?: string;
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Effortless Style",
    text: "Up to 50% off",
    link: "#",
    media: {
      type: "video",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/6764045-hd_720_1280_25fps.mp4",
    },
  },
  {
    title: "Everyday Essentials",
    text: "Up to 50% off",
    cta: {
      link: "#",
      text: "See More",
    },
    link: "#",
    media: {
      type: "image",
      srcSet:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg 1920w, /images/block/ecommerce/clothes/pexels-cottonbro-6764036-2.jpg 1280w, /images/block/ecommerce/clothes/pexels-cottonbro-6764036-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg",
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
      alt: "",
    },
  },
];

const ProductCategories5 = ({
  categories = PRODUCT_CATEGORIES,
  className,
}: ProductCategories5Props) => {
  const category1 = categories[0];
  const category2 = categories[1];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 border lg:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1">
            <div className="relative aspect-square size-full px-10.5 py-8 lg:aspect-auto lg:min-h-150">
              <div className="relative z-10">
                <h2 className="mb-1 text-3xl leading-tight font-semibold text-black sm:text-4xl">
                  {category1.title}
                </h2>
                <p className="text-xl leading-tight text-black sm:text-2xl">
                  {category1.text}
                </p>
              </div>
              <div className="absolute end-4 bottom-4 z-10">
                <Button size="icon" className="size-11 rounded-full" asChild>
                  <a href={category1.link}>
                    <ShoppingBag />
                  </a>
                </Button>
              </div>
              <div className="absolute inset-0">
                <video
                  muted
                  autoPlay
                  loop
                  className="size-full object-cover object-center"
                  src={category1.media.src}
                ></video>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2">
            <div className="relative aspect-square size-full px-10.5 py-8 before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-px before:z-10 before:h-2/3 before:bg-gradient-to-t before:from-white/80 before:to-transparent lg:aspect-auto lg:min-h-150">
              <div className="relative z-20 flex size-full flex-col items-center justify-end gap-3 pb-6.5">
                <div>
                  <h2 className="mb-1 text-center text-3xl leading-tight font-semibold text-black sm:text-4xl">
                    {category2.title}
                  </h2>
                  <p className="text-center text-xl leading-tight text-black sm:text-2xl">
                    {category2.text}
                  </p>
                </div>
                {category2.cta && (
                  <Button size="lg" asChild>
                    <a href={category2.cta.link}> {category2.cta.text}</a>
                  </Button>
                )}
              </div>
              <div className="absolute inset-0">
                {category2.media.type === "image" && (
                  <img
                    sizes={category2.media?.sizes}
                    srcSet={category2.media?.srcSet}
                    src={category2.media.src}
                    alt=""
                    className="size-full object-cover object-[50%_30%]"
                  />
                )}
              </div>
              <div className="absolute end-4 bottom-4 z-10">
                <Button size="icon" className="size-11 rounded-full" asChild>
                  <a href={category2.link}>
                    <ShoppingBag />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCategories5 };
```
