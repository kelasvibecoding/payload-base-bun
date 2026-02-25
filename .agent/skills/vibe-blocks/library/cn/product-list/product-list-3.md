# Product List 3

## Metadata
- **Category**: Product List
- **Objective**: Create a refined, minimalist product grid that uses hover interactions to reveal primary actions, keeping the initial view clean.
- **Use Case**: High-end fashion boutiques, furniture stores, or artisanal shops where aesthetic purity is valued over immediate action prominence.
- **Visual Style**: Clean and modern. Uses a `group` hover state to dynamically inject an "Add to cart" button over the product image. Maintains consistent verticality with Shadcn UI `Card` components.
- **Interactivity**: 
    - Hover Reveal Action: The "Add to cart" button is hidden by default (`md:opacity-0`) and fades in smoothly on desktop hover to prevent visual clutter in the list view.
    - Overlay Trigger: Explicitly positions the purchase action as an `absolute` overlay on the `CardHeader`, ensuring it's prominent when revealed.
    - Natural Mobile Fallback: Designed with a mobile-first approach where the action button is always visible on touch devices (due to `md:opacity-0` constraint).
    - Synchronized Card Link: Wrap the entire `Card` in an anchor tag for predictable navigation while maintaining secondary interaction paths for buttons.

## Description
Product List 3 is a "best of both worlds" component. It provides the high-signal purchasing power of version 2 but hides it behind a graceful hover state to maintain a clean "Gallery" look for users who are just browsing. The technical implementation leverages Tailwind's `group` utility to manage complex child states (opacity and transitions). It also features a robust `auto-fit` grid that ensures cards are consistently sized and centered regardless of the viewport width.

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

interface ProductList3Props {
  className?: string;
}

const ProductList3 = ({ className }: ProductList3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-[repeat(auto-fit,minmax(var(--container-xs),auto))]">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-3-card-${index}`} {...item} />
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
    <a href={link} className="block h-full w-fit">
      <Card className="group h-full w-full max-w-md min-w-xs overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
          <CardAction className="absolute bottom-4 w-full px-4 transition-opacity md:opacity-0 md:group-hover:opacity-100">
            <Button className="w-full">Add to cart</Button>
          </CardAction>
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
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={sale != null} className="text-lg font-semibold">
              <PriceValue price={sale} currency={currency} variant="sale" />
              <PriceValue
                price={regular}
                currency={currency}
                variant="regular"
              />
            </Price>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductList3 };
```
