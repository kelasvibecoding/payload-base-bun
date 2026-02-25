# Product List 1

## Metadata
- **Category**: Product List
- **Objective**: Provide a clean, grid-based product discovery layout using standard card structures for high scanability.
- **Use Case**: Main shop categories, "New Arrivals" sections, or related product recommendations.
- **Visual Style**: Classic and trustworthy. Uses Shadcn UI's `Card` system with a distinctive `1.268` aspect ratio to create a unique vertical rhythm.
- **Interactivity**: 
    - Hover Transitions: Subtle `opacity-80` transition on card hover to provide immediate interactive feedback.
    - Dynamic Pricing: Integrated `Price` component that automatically handles sale vs regular price rendering.
    - Contextual Badging: Supports highly visible badges with optional custom color overrides (e.g., oklch colors) for urgent messaging like "Selling fast!".
    - Responsive Grid: Adapts seamlessly from a single-column mobile view to a 2-column tablet layout and a 3-column desktop grid.

## Description
Product List 1 is a foundation-level component for any e-commerce application. It focuses on clarity and information hierarchy, placing the product image in a prominent position while ensuring price and availability (via badges) are immediately obvious. The use of the Shadcn `Card` component ensures it remains consistent with the rest of the UI library while allowing for easy extension. It is designed to be lightweight and fast, making it ideal for pages with a high number of product items.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
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
  badge?: {
    text: string;
    color?: string;
  };
}

type ProductCardProps = Product;

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
];

interface ProductList1Props {
  className?: string;
}

const ProductList1 = ({ className }: ProductList1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-1-card-${index}`} {...item} />
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
    <a
      href={link}
      className="block h-full w-full max-w-md transition-opacity hover:opacity-80"
    >
      <Card className="h-full overflow-hidden p-0">
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

export { ProductList1 };
```
