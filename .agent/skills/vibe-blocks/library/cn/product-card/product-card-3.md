# Product Card 3

## Metadata
- **Category**: Product Card
- **Objective**: Implement a product card with a specialized hover-to-reveal action.
- **Use Case**: Premium e-commerce sites where a clean look is desired, only showing actions when the user is interested.
- **Visual Style**: Minimalist until hovered, then reveals a call to action over the image.
- **Interactivity**: Uses a React group hover effect; the "Add to cart" button is hidden on desktop by default (`md:opacity-0`) and fades in on card hover (`md:group-hover:opacity-100`).

## Description
Product Card 3 is an interactive variant that keeps the layout clean. The "Add to cart" button is positioned absolutely at the bottom of the image area and becomes visible on hover. This technique reduces visual clutter while maintaining core functionality. It splits the card into two logical link areas: the image/button and the text content.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  description: string;
  price: ProductPrice;
  badge: {
    text: string;
    backgroundColor?: string;
  };
}

const PRODUCT_CARD: Product = {
  name: "Vexon CoreStep '08 LX",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
    alt: "",
  },
  link: "#",
  description:
    "Everyday comfort meets bold tri-color style in this performance-driven design.",
  price: {
    regular: 499.0,
    sale: 399.0,
    currency: "USD",
  },
  badge: {
    text: "Selling fast!",
    backgroundColor: "oklch(50.5% 0.213 27.518)",
  },
};

interface ProductCard3Props {
  className?: string;
}

const ProductCard3 = ({ className }: ProductCard3Props) => {
  const { regular, sale, currency } = PRODUCT_CARD.price;

  return (
    <Card className={cn("group max-w-md gap-0 overflow-hidden p-0", className)}>
      <CardHeader className="relative block p-0">
        <a href={PRODUCT_CARD.link}>
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <img
              src={PRODUCT_CARD.image.src}
              alt={PRODUCT_CARD.image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </a>
        <CardAction className="absolute inset-x-0 bottom-4 z-100 w-full px-4 transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <Button className="w-full">Add to cart</Button>
        </CardAction>
        {PRODUCT_CARD.badge && (
          <Badge
            style={{
              background: PRODUCT_CARD.badge.backgroundColor,
            }}
            className="absolute start-4 top-4"
          >
            {PRODUCT_CARD.badge.text}
          </Badge>
        )}
      </CardHeader>
      <a href={PRODUCT_CARD.link} className="block w-fit">
        <CardContent className="flex h-full flex-col gap-4 py-6">
          <CardTitle className="text-xl font-semibold">
            {PRODUCT_CARD.name}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {PRODUCT_CARD.description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={sale != null} className="text-lg font-semibold">
              <PriceValue
                price={regular}
                currency={currency}
                variant="regular"
              />
              <PriceValue price={sale} currency={currency} variant="sale" />
            </Price>
          </div>
        </CardContent>
      </a>
    </Card>
  );
};

export { ProductCard3 };
```
