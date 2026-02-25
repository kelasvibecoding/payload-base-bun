# Product List 2

## Metadata
- **Category**: Product List
- **Objective**: Enhance the product grid with direct-to-cart actions while maintaining a highly flexible, auto-fitting responsive layout.
- **Use Case**: Fast-moving consumer goods, electronics shops, or any marketplace where reducing friction to purchase is a priority.
- **Visual Style**: Interactive and action-oriented. Uses Shadcn UI's `CardFooter` to house a full-width "Add to cart" button. Features a smart `auto-fit` grid that optimizes density based on container width.
- **Interactivity**: 
    - Full-Card Clickable Overlay: Uses an `absolute inset-0` anchor tag to make the entire card a link, while maintaining the button's interactivity via `z-10` stacking.
    - Transactional UI: Explicit `CardAction` for "Add to cart" provides a clear path to conversion directly from the list view.
    - Advanced CSS Grid: Leverages `repeat(auto-fit, minmax(var(--container-xs), auto))` for a refined, fluid layout that doesn't rely strictly on fixed breakpoints.
    - Status Indicators: Dynamic badging system for highlighting stock status or sales with custom color support.

## Description
Product List 2 is an evolution of the standard product grid, optimized for conversion-heavy environments. It introduces a persistent "Add to cart" button on every card, encouraging immediate action without needing to visit the product detail page. The technical implementation is particularly clever, utilizing an invisible overlay link for primary navigation while keeping the purchase action functional in the foreground. Its grid logic is more advanced than version 1, providing a "best fit" presentation that scales smoothly across all devices.

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

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  description: string;
  price: ProductPrice;
  badge?: {
    text: string;
    color?: string;
  };
}

type ProductCardProps = Product;

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type ProductList = Array<Product>;

const PRODUCTS_LIST: ProductList = [
  {
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
      color: "oklch(57.7% 0.245 27.325)",
    },
  },
  {
    name: "Urban Chill Jacket",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-2.jpg",
      alt: "",
    },
    link: "#",
    description:
      "A denim puffer with tonal blues, perfect for layering across seasons.",
    price: {
      regular: 180.0,
      currency: "USD",
    },
  },
  {
    name: "Maison Liora Bag",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Tote-Bag-1.png",
      alt: "",
    },
    link: "#",
    description:
      "A refined bag that easily switches from shoulder to crossbody or top-handle.",
    price: {
      regular: 420.0,
      currency: "USD",
    },
    badge: {
      text: "New",
    },
  },
  {
    name: "Vexon TunePods Pro",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/White-Wireless-Earbuds-in-Charging-Case-1.jpeg",
      alt: "White wireless earbuds in charging case",
    },
    link: "#",
    description:
      "The TunePods Pro deliver immersive sound with all-day comfort and fast charging in a sleek, pocket-ready case.",
    price: {
      regular: 129.0,
      sale: 99.0,
      currency: "USD",
    },
  },
  {
    name: "Radiant Glow Serum",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/pexels-alesiakozik-7795810-1.jpg",
      alt: "",
    },
    link: "#",
    description:
      "Lunara's Radiant Glow Serum is a lightweight, fast-absorbing facial serum designed to brighten, hydrate, and even out skin tone.",
    price: {
      regular: 49.0,
      currency: "USD",
    },
  },
  {
    name: "ShadowTone Headphones",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Luxurious-Headphones-1.jpeg",
      alt: "",
    },
    link: "#",
    description:
      "Step into a world where sound flows like liquid velvet—each note sculpted in clarity, every beat a brushstroke of depth.",
    price: {
      regular: 530.0,
      currency: "USD",
    },
  },
];

interface ProductList2Props {
  className?: string;
}

const ProductList2 = ({ className }: ProductList2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-[repeat(auto-fit,minmax(var(--container-xs),auto))]">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-2-card-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  name,
  description,
  link,
  image,
  badge,
  price,
}: ProductCardProps) => {
  const { regular, sale, currency } = price;

  return (
    <Card className="relative h-full w-full max-w-md overflow-hidden p-0">
      <a href={link} className="absolute inset-0 z-10 block size-full"></a>
      <CardHeader className="relative block p-0">
        <AspectRatio ratio={1.268115942} className="overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
        {badge && (
          <Badge
            style={{
              backgroundColor: badge.color,
            }}
            className="absolute start-4 top-4"
          >
            {badge.text}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription className="font-medium text-muted-foreground">
          {description}
        </CardDescription>
        <div className="mt-auto">
          <Price onSale={sale != null} className="text-lg font-semibold">
            <PriceValue price={sale} currency={currency} variant="sale" />
            <PriceValue price={regular} currency={currency} variant="regular" />
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

export { ProductList2 };
```
