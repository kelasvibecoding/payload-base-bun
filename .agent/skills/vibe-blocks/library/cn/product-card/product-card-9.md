# Product Card 9

## Metadata
- **Category**: Product Card
- **Objective**: Display a product card with color variants that transition the product image on hover.
- **Use Case**: Home decor, lifestyle products, or ceramic items where color choice is a primary decision factor.
- **Visual Style**: Minimalist, clean design with rounded-xl corners for images, category branding, and multiple badges for status.
- **Interactivity**: 
    - Hovering over a color swatch updates the main product image (using `startTransition` for performance).
    - Image swap on group hover (switches between primary and secondary image of the selected variant).
    - "Add to cart" button slides up and fades in on desktop hover.
    - Mobile-specific "Shopping Bag" icon for quick actions.
    - Tooltips for color variant names.

## Description
Product Card 9 focuses on visual storytelling through image transitions. It handles variant selection via a `RadioGroup` where hovering over options triggers a non-destructive state update to swap the main image set. This allows users to "preview" different colors without a full click. It also implements a sophisticated "double image" hover effect where the first image fades out to reveal a second angle/lifestyle shot of the same variant.

## Source Code

```tsx
"use client";

import { ShoppingBag } from "lucide-react";
import { startTransition, useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type Badge = {
  text: string;
  color: string;
};

type Image = {
  srcset?: string;
  src: string;
  sizes?: string;
  alt: string;
};

type Variant = {
  color: string;
  value: string;
  id: string;
  label: string;
  link: string;
  images: Array<Image>;
};

interface ProductColorsProps {
  variants: Omit<Variant, "images">[];
  value: string;
  onOptionHover: (value: string) => void;
}

interface BadgesProps {
  badges?: Array<Badge>;
}

interface Product {
  name: string;
  price: ProductPrice;
  category: {
    label: string;
    link: string;
  };
  link: string;
  badges?: Array<Badge>;
  variants: Array<Variant>;
  images: Array<Image>;
}

const PRODUCT_CARD: Product = {
  name: "Ceramic Cup",
  price: {
    regular: 19.0,
    sale: 15.0,
    currency: "USD",
  },
  category: {
    label: "Cups",
    link: "#",
  },
  link: "#",
  badges: [
    {
      text: "Best Choice!",
      color: "oklch(54.6% 0.245 262.881)",
    },
    {
      text: "Sale",
      color: "oklch(57.7% 0.245 27.325)",
    },
  ],
  variants: [
    {
      color: "#A8A081",
      link: "#",
      value: "light_brown",
      id: "light_brown",
      label: "Light Brown",
      images: [
        {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg",
          srcset:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg 640w",
          alt: "",
          sizes:
            "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
        },
        {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg",
          srcset:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg 640w",
          alt: "",
          sizes:
            "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
        },
      ],
    },
    {
      color: "#C2CCCD",
      link: "#",
      value: "light_blue",
      id: "light_blue",
      label: "Light Blue",
      images: [
        {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg",
          srcset:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg 640w",
          alt: "",
          sizes:
            "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
        },
        {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg",
          srcset:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg 640w",
          alt: "",
          sizes:
            "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
        },
      ],
    },
  ],
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg",
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-bWlbcvFMUh4-unsplash-1.jpg 640w",
      alt: "",
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg",
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/cafeconcetto-L2r9L6Llyp4-unsplash-1.jpg 640w",
      alt: "",
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
  ],
};

interface ProductCard9Props {
  className?: string;
}

const ProductCard9 = ({ className }: ProductCard9Props) => {
  const { regular, sale, currency } = PRODUCT_CARD.price;
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [productImages, setProductImages] = useState(PRODUCT_CARD.images);

  const onOptionHover = (value: string) => {
    setSelectedColor(value);
  };

  const selectedVariantImages = useMemo(() => {
    return (
      PRODUCT_CARD.variants.find((v) => v.value === selectedColor)?.images ??
      PRODUCT_CARD.images
    );
  }, [selectedColor]);

  useEffect(() => {
    startTransition(() => {
      setProductImages(selectedVariantImages);
    });
  }, [selectedColor, selectedVariantImages]);

  return (
    <Card
      className={cn(
        "relative block max-w-60 rounded-none border-none bg-background p-0 shadow-none",
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="group relative overflow-hidden">
          <a href={PRODUCT_CARD.link}>
            <AspectRatio ratio={1} className="overflow-hidden rounded-xl">
              {productImages.map((img, index) => (
                <div
                  className="absolute inset-0 size-full transition-opacity duration-700 first:z-20 group-hover:first:opacity-0 last:z-10 first:[&>img]:scale-105 first:[&>img]:delay-50 group-hover:first:[&>img]:scale-100 last:[&>img]:scale-105 group-hover:last:[&>img]:scale-100"
                  key={`product-list-9-card-img-wrapper-${index}`}
                >
                  <img
                    srcSet={img.srcset}
                    src={img.src}
                    alt={img.alt}
                    sizes={img.sizes}
                    className="block size-full object-cover object-center transition-transform duration-700"
                  />
                </div>
              ))}
            </AspectRatio>
          </a>
          <div className="absolute start-2.5 top-2.5 z-60">
            <Badges badges={PRODUCT_CARD.badges} />
          </div>
          <div className="absolute end-2.5 bottom-2.5 z-60 md:hidden">
            <Button variant="secondary" size="icon" className="rounded-full">
              <ShoppingBag />
            </Button>
          </div>
          <div className="absolute inset-x-4 bottom-4 z-60 hidden md:block">
            <Button className="w-full rounded-full opacity-0 duration-700 lg:translate-y-4 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-5">
          <a
            href={PRODUCT_CARD.category.link}
            className="text-xs leading-loose font-bold text-muted-foreground uppercase underline-offset-4 hover:underline"
          >
            {PRODUCT_CARD.category.label}
          </a>
          <a
            href={PRODUCT_CARD.link}
            className="underline-offset-4 hover:underline"
          >
            <CardTitle className="leading-normal">
              {PRODUCT_CARD.name}
            </CardTitle>
          </a>
          <Price
            onSale={sale != null}
            className="text-sm leading-normal font-bold"
          >
            <PriceValue
              price={sale}
              currency={currency}
              variant="sale"
              className="text-red-700"
            />
            <PriceValue price={regular} currency={currency} variant="regular" />
          </Price>
          <ProductColors
            value={selectedColor}
            onOptionHover={onOptionHover}
            variants={PRODUCT_CARD.variants}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const ProductColors = ({
  value,
  onOptionHover,
  variants,
}: ProductColorsProps) => {
  if (!variants) return;

  return (
    <RadioGroup value={value} className="mt-2 flex items-center gap-2">
      {variants.map((item, index) => (
        <Label
          className="relative block pb-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:opacity-0 after:transition-opacity hover:after:opacity-100 has-data-[state=checked]:after:opacity-100"
          htmlFor={item.id}
          key={`product-list-9-color-${index}`}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={item.link}>
                <div
                  style={{
                    backgroundColor: item.color,
                  }}
                  className="size-5.5 border"
                  onMouseEnter={() => onOptionHover(item.value)}
                ></div>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
          <RadioGroupItem value={item.value} id={item.id} className="sr-only" />
        </Label>
      ))}
    </RadioGroup>
  );
};

const Badges = ({ badges }: BadgesProps) => {
  if (!badges) return;

  return (
    <div className="flex flex-col gap-1.5">
      {badges.map((item, index) => (
        <Badge
          style={{ backgroundColor: item.color }}
          key={`product-list-9-badge-${index}`}
          className="rounded-full dark:text-white"
        >
          {item.text}
        </Badge>
      ))}
    </div>
  );
};

export { ProductCard9 };
```
