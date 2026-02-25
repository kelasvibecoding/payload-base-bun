# Product List 4

## Metadata
- **Category**: Product List
- **Objective**: Deliver a dynamic "mixed content" grid that integrates high-impact promotional units directly within the product discovery flow.
- **Use Case**: Seasonal campaign launches, curated "Editor's Choice" lists, or category landing pages that require a blend of brand storytelling and commerce.
- **Visual Style**: Modern-Editorial. Features "floating" product cards with no borders or shadows, paired with a rich, background-image-driven `PromoCard`. Utilizes uppercase typography for branding and vibrant yellow for `Rating` highlights.
- **Interactivity**: 
    - Hybrid Component Grid: Combines functional `ProductCard` units with a decorative `PromoCard`, utilizing `col-span` logic to create an asymmetrical visual interest.
    - Immersive Promo Unit: The `PromoCard` features a `gradient-to-br` white overlay for legibility against dynamic background imagery and a prominent primary CTA.
    - Performance Rating: Integrated `Rating` component providing immediate social proof through a 5-star visual system.
    - Clean Typography Hierachy: Distinctive brand identification via `uppercase` muted text, followed by strong product naming and pricing.

## Description
Product List 4 is an editorialized take on the standard e-commerce grid. By breaking the repetitive nature of product lists with a large-format promotional card, it keeps the user engaged and provides a natural entry point for specific marketing campaigns. The product cards themselves are minimalist, removing all "box" containers (`border-none shadow-none`) to create a gallery-like feeling where the imagery takes center stage. It is particularly effective for lifestyle-driven categories where the brand's aesthetic is as important as the individual items.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { Rating } from "@/components/rating";
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
  brand: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  price: ProductPrice;
  rate: number;
}

interface PromoCard {
  image: string;
  title: string;
  cta: {
    label: string;
    link: string;
  };
  tagline: string;
}

type PromoCardProps = PromoCard;

type ProductCardProps = Product;

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type ProductList = Array<Product>;

const PROMO_CARD: PromoCard = {
  image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Summer-Fashion-Duo-1.png",
  title: "Summer Fashion Collection",
  tagline: "Light layers, heavy impact.",
  cta: {
    label: "See What’s New",
    link: "#",
  },
};

const PRODUCTS_LIST: ProductList = [
  {
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Sporty-Casual-Portrait-1.png",
      alt: "Pink cropped top with chic design",
    },
    name: "Rosé Cut Crop Top",
    brand: "Rosé Atelier",
    link: "#",
    price: {
      regular: 59.0,
      currency: "USD",
    },
    rate: 5,
  },
  {
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-in-Embroidered-Blue-Top-1.png",
      alt: "Sleeveless blue embroidered shirt",
    },
    name: "Azure Bloom Sleeveless",
    brand: "Rosé Atelier",
    link: "#",
    price: {
      regular: 78.0,
      sale: 60.0,
      currency: "USD",
    },
    rate: 4,
  },
  {
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Person-in-Activewear-1.png",
      alt: "Green sporty workout crop top",
    },
    name: "PulseFlex Active Crop",
    brand: "Rosé Active",
    link: "#",
    price: {
      regular: 79.0,
      currency: "USD",
    },
    rate: 4,
  },
];

interface ProductList4Props {
  className?: string;
}

const ProductList4 = ({ className }: ProductList4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container grid w-full gap-7 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-3 lg:col-span-1">
          <PromoCard {...PROMO_CARD} />
        </div>
        {PRODUCTS_LIST.map((item, index) => (
          <ProductCard key={`product-list-4-card-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
};

const PromoCard = ({ image, title, cta, tagline }: PromoCardProps) => {
  return (
    <Card
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="relative flex h-full min-h-105 w-full min-w-47.5 flex-col justify-between gap-5 overflow-hidden rounded-md bg-cover bg-center bg-no-repeat p-7 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:to-transparent lg:max-w-80 lg:bg-top"
    >
      <CardHeader className="z-10 p-0">
        <CardTitle className="mb-2.5 max-w-40 text-xl leading-tight font-medium dark:text-black">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-foreground dark:text-black">
          {tagline}
        </CardDescription>
      </CardHeader>
      <CardAction className="z-10 w-full">
        <Button asChild className="w-full">
          <a href={cta.link}>{cta.label}</a>
        </Button>
      </CardAction>
    </Card>
  );
};

const ProductCard = ({
  name,
  link,
  image,
  price,
  brand,
  rate,
}: ProductCardProps) => {
  const { regular, sale, currency } = price;

  return (
    <a href={link} className="block h-full w-full min-w-47.5 md:max-w-80">
      <Card className="group h-full min-h-105 gap-3.5 rounded-none border-none bg-background p-0 shadow-none">
        <CardHeader className="block p-0">
          <div className="h-80 w-full overflow-hidden rounded-md">
            <img
              src={image.src}
              alt={image.alt}
              className="block size-full object-cover object-center"
            />
          </div>
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-2 p-0">
          <div className="mb-1.5 flex justify-between gap-2">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              {brand}
            </div>
            <Rating
              rate={rate}
              className="[&_svg]:size-3.5 [&_svg]:fill-yellow-500 [&_svg]:stroke-yellow-500 [&>div]:size-3.5"
            />
          </div>
          <CardTitle className="text-lg leading-tight font-semibold">
            {name}
          </CardTitle>
          <Price onSale={sale != null} className="text-lg font-semibold">
            <PriceValue price={regular} currency={currency} variant="regular" />
            <PriceValue price={sale} currency={currency} variant="sale" />
          </Price>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductList4 };
```
