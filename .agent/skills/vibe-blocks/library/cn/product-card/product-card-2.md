# Product Card 2

## Metadata
- **Category**: Product Card
- **Objective**: Display a product card with an explicit "Add to cart" button.
- **Use Case**: Direct sales oriented product listings where immediate action is encouraged.
- **Visual Style**: Clean card layout, structured headers and content, with a dedicated footer for actions.
- **Interactivity**: The entire card area links to the product page via an absolute positioned anchor, with a high Z-index "Add to cart" button for direct interaction.

## Description
Product Card 2 builds on the standard card layout by adding a dedicated `CardFooter` for an "Add to cart" button. It maintains a clean hierarchy with a badge, title, and price, but provides a clear call to action while still allowing the user to click through to the product page by clicking anywhere else on the card.

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
  CardFooter,
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

interface ProductCard2Props {
  className?: string;
}

const ProductCard2 = ({ className }: ProductCard2Props) => {
  const { regular, sale, currency } = PRODUCT_CARD.price;

  return (
    <Card className={cn("relative max-w-md overflow-hidden p-0", className)}>
      <a
        href={PRODUCT_CARD.link}
        className="absolute inset-0 z-10 block size-full"
      ></a>
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <img
            src={PRODUCT_CARD.image.src}
            alt={PRODUCT_CARD.image.alt}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
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
      <CardContent className="flex h-full flex-col gap-4">
        <CardTitle className="text-xl font-semibold">
          {PRODUCT_CARD.name}
        </CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {PRODUCT_CARD.description}
        </CardDescription>
        <div className="mt-auto">
          <Price onSale={sale != null} className="text-lg font-semibold">
            <PriceValue price={regular} currency={currency} variant="regular" />
            <PriceValue price={sale} currency={currency} variant="sale" />
          </Price>
        </div>
      </CardContent>
      <CardFooter className="pb-6">
        <CardAction className="w-full">
          <Button className="relative z-10 w-full">Add to cart</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export { ProductCard2 };
```
