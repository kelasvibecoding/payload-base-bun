# Product Card 5

## Metadata
- **Category**: Product Card
- **Objective**: Implement a jewelry-focused, square product card.
- **Use Case**: Jewelry, cosmetics, or high-end accessory marketplaces.
- **Visual Style**: Perfect square aspect ratio for the image, soft typography, and a "collection" tag.
- **Interactivity**: Navigational link card with no extra hover effects beyond standard browser behavior.

## Description
Product Card 5 is specifically optimized for small, detailed items like jewelry. It uses a 1:1 `AspectRatio` and a larger border radius for the image container to create a soft, inviting aesthetic. It also includes a "collection" label to categorize items within a specific brand line.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  collection: string;
  price: ProductPrice;
}

const PRODUCT_CARD: Product = {
  collection: "Golden Hour",
  name: "Bloom & Gleam earrings",
  link: "#",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Floral-Earrings-1.png",
    alt: "",
  },
  price: {
    regular: 4000.0,
    currency: "USD",
  },
};

interface ProductCard5Props {
  className?: string;
}

const ProductCard5 = ({ className }: ProductCard5Props) => {
  const { regular, currency } = PRODUCT_CARD.price;

  return (
    <a
      href={PRODUCT_CARD.link}
      className={cn("block w-full max-w-108 min-w-47.5", className)}
    >
      <Card className="group gap-3.5 rounded-md border-none bg-card p-2 shadow-none">
        <CardHeader className="block p-0">
          <AspectRatio ratio={1} className="w-full overflow-hidden rounded-2xl">
            <img
              src={PRODUCT_CARD.image.src}
              alt={PRODUCT_CARD.image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-2 px-2 pb-1">
          <p className="text-xs text-muted-foreground uppercase">
            {PRODUCT_CARD.collection}
          </p>
          <CardTitle className="leading-tight font-medium">
            {PRODUCT_CARD.name}
          </CardTitle>
          <Price className="text-lg font-semibold">
            <PriceValue price={regular} currency={currency} variant="regular" />
            <PriceValue currency={currency} variant="sale" />
          </Price>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductCard5 };
```
