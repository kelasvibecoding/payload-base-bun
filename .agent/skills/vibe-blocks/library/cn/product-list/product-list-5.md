# Product List 5

## Metadata
- **Category**: Product List
- **Objective**: Implement a "Featured Collection" grid that pairs a strong thematic header with a minimalist, high-density product display.
- **Use Case**: Homepage featured sections, "Editor's Picks," or dedicated collection landing pages for accessories, jewelry, or premium apparel.
- **Visual Style**: Sophisticated and balanced. Features a dual-column header (on desktop) with a descriptive tagline and a `secondary` variant CTA. Product cards use perfect square `AspectRatio` (1) and `rounded-2xl` corners for the imagery.
- **Interactivity**: 
    - Responsive Section Heading: A flexible header layout that centers on mobile and justifies to the edges on desktop, providing a clear call-to-action for the entire collection.
    - Minimalist Product Identity: Cards remove secondary UI noise (`border-none shadow-none`) to focus entirely on the product visual and the collection name.
    - Thematic Grouping: Explicitly includes a `collection` field in the data structure, rendered in `uppercase` to denote brand architecture.
    - Standardized Square Grid: Ensures visual uniformity across all items, making it ideal for products with diverse shapes (like earrings or accessories).

## Description
Product List 5 is designed to showcase "Story-driven" collections. By providing a dedicated space for a section title and tagline, it allows brands to set the context before showing the products. The design is airy and centered, with a heavy emphasis on the "Customer Favorites" or "New Arrivals" theme. The technical implementation is clean and efficient, utilizing a simple grid that scales from 1 to 3 columns, ensuring the images remain large and impactful on all screen sizes.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  price: ProductPrice;
  collection: string;
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
  },
  {
    collection: "Golden Hour",
    name: "Sweetheart Spark earrings",
    link: "#",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Gold-Heart-Earrings-1.png",
      alt: "",
    },
    price: {
      regular: 8000.0,
      sale: 7599.0,
      currency: "USD",
    },
  },
  {
    collection: "Golden Hour",
    name: "Golden Whisper earrings",
    link: "#",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Gold-Hoop-Earrings-on-Ceramic-Dish-1.png",
      alt: "",
    },
    price: {
      regular: 6000.0,
      currency: "USD",
    },
  },
];

interface ProductList5Props {
  className?: string;
}

const ProductList5 = ({ className }: ProductList5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-12 flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-center leading-tight font-medium text-primary md:text-left">
              Where elegance meets everyday.
            </p>
            <h1 className="text-center text-4xl font-semibold md:text-left">
              Customer Favorites
            </h1>
          </div>
          <div className="self-end">
            <Button variant="secondary">See the Collection</Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-5-card-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  name,
  link,
  image,
  price,
  collection,
}: ProductCardProps) => {
  const { regular, sale, currency } = price;

  return (
    <a href={link} className="block h-full w-full min-w-47.5">
      <Card className="group h-full gap-3.5 rounded-none border-none bg-background p-0 shadow-none">
        <CardHeader className="block p-0">
          <AspectRatio ratio={1} className="w-full overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-2 p-0">
          <p className="text-xs text-muted-foreground uppercase">
            {collection}
          </p>
          <CardTitle className="leading-tight font-medium">{name}</CardTitle>
          <Price onSale={sale != null} className="text-lg font-semibold">
            <PriceValue price={regular} currency={currency} variant="regular" />
            <PriceValue price={sale} currency={currency} variant="sale" />
          </Price>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductList5 };
```
