# Product Quick View 6

## Metadata
- **Category**: Product Quick View
- **Objective**: Implement a sidebar-based "Quick View" interface that slides out from the edge of the screen, providing a non-intrusive yet powerful shopping tool.
- **Use Case**: Modern, high-fashion, or design-focused boutiques where a full-screen modal might feel too disruptive. Perfect for quickly comparing items without losing the context of the main collection view.
- **Visual Style**: Sophisticated and High-Contrast. Replaces the standard centered `Dialog` with a `Sheet` (sidebar). Features a narrow, focused layout with large typography and vertical media integration on desktop.
- **Interactivity**: 
    - Sidebar Navigation (`Sheet`): Slides in from the side, allowing the user to still see a portion of the original page, which aids in mental context-preservation.
    - Adaptive Carousel Orientation: Intelligently switches from a vertical carousel (`orientation="vertical"`) on desktop to a standard horizontal carousel on mobile to maximize viewport efficiency.
    - Brand Engagement: Highlights the brand name with a direct link, perfect for multi-brand retailers or marketplaces.
    - Integrated Review Context: Displays star ratings and total reviewer counts with anchor links for deeper research.
    - Advanced Purchase Cluster: Includes a primary "Add to Cart" button flanked by "Wishlist" and "Compare" icons, plus a high-velocity "Buy it Now" button.
    - Precise Quantity Selection: Features a custom `Quantity` component with dedicated increment/decrement triggers and manual input validation.
    - Category Deep-Linking: Provides an inline list of product categories for easy discovery of related items.

## Description
Product Quick View 6 rethinks the "modal" pattern by utilizing a sidebar (`Sheet`). This approach is more modern and feels faster to many users. The technical implementation is standout due to its adaptive carousel—vertical carousels on the side of the screen feel more organic for "scanning" product variations. It also includes comprehensive shopping actions (Compare, Wishlist, Quick Buy) into a single, cohesive interface.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { GitCompareArrows, Heart, Minus, Plus, X } from "lucide-react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Price, PriceValue } from "@/components/price";
import { Rating } from "@/components/rating";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

const STOCK_STATUS = {
  IN_STOCK: "IN_STOCK",
  OUT_OF_STOCK: "OUT_OF_STOCK",
} as const;

type StockStatusCode = keyof typeof STOCK_STATUS;

type Image = {
  src: string;
  alt: string;
};

interface Reviews {
  rate: number;
  totalReviewers: string;
  link: string;
}

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type Product = {
  images: Image[];
  brand: {
    text: string;
    link: string;
  };
  name: string;
  reviews: Reviews;
  price: ProductPrice;
  stockStatusCode: StockStatusCode;
  description: string;
  hinges: Record<FieldName, Hinges>;
  categories: {
    text: string;
    link: string;
  }[];
};

type ProductQuickView6Props = Product;

interface ProductImagesProps {
  images: Image[];
}

type ProductFormType = z.infer<typeof productForm>;
type FieldName = keyof ProductFormType;

interface QuantityProps {
  field: ControllerRenderProps<ProductFormType>;
  max?: number;
  min?: number;
}

const PRODUCT_DETAILS: Product = {
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/pexels-karolina-grabowska-7193566-3.jpg",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/pexels-karolina-grabowska-7193654-3.jpg",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/pexels-karolina-grabowska-7193627-3.jpg",
      alt: "",
    },

    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/pexels-karolina-grabowska-7193650-3.jpg",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/pexels-karolina-grabowska-7193649-3.jpg",
      alt: "",
    },
  ],
  brand: {
    text: "Formara",
    link: "#",
  },
  name: "Arlo Dining Seat",
  reviews: {
    rate: 4.5,
    totalReviewers: "5.8k reviews",
    link: "#",
  },
  price: {
    regular: 499.0,
    sale: 389.0,
    currency: "USD",
  },
  stockStatusCode: "IN_STOCK",
  description:
    "We craft gentle formulas that truly work and bring confidence to your daily ritual",
  hinges: {
    quantity: {
      id: "quantity",
      name: "quantity",
      label: "Quantity",
      min: 1,
      max: 99,
    },
  },
  categories: [
    {
      text: "Furniture",
      link: "#",
    },
    {
      text: "Chair",
      link: "#",
    },
  ],
};

const ProductQuickView6 = ({
  images = PRODUCT_DETAILS.images,
  brand = PRODUCT_DETAILS.brand,
  name = PRODUCT_DETAILS.name,
  price = PRODUCT_DETAILS.price,
  reviews = PRODUCT_DETAILS.reviews,
  stockStatusCode = PRODUCT_DETAILS.stockStatusCode,
  description = PRODUCT_DETAILS.description,
  hinges = PRODUCT_DETAILS.hinges,
  categories = PRODUCT_DETAILS.categories,
}: ProductQuickView6Props) => {
  const { regular, sale, currency } = price;

  return (
    <Sheet defaultOpen>
      <SheetContent className="w-full max-md:!max-w-[calc(100dvw-3rem)] md:max-w-180 lg:max-w-200 [&>button]:hidden">
        <div className="absolute end-2 top-2 z-10">
          <SheetClose asChild>
            <Button size="icon-lg" className="rounded-full" variant="secondary">
              <X />
            </Button>
          </SheetClose>
        </div>
        <div className="h-full p-4 max-md:overflow-auto md:p-6">
          <div className="flex h-full gap-6 max-md:flex-col lg:gap-10">
            <div className="h-full basis-5/12">
              <ProductImages images={images} />
            </div>
            <div className="h-full basis-7/12 pb-10">
              <div className="hide-scrollbar h-full overflow-auto md:mt-10">
                <a
                  href={brand.link}
                  className="mb-3 block text-xs font-semibold text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {brand.text}
                </a>
                <SheetTitle className="text-xl leading-tight md:text-2xl lg:text-4xl">
                  {name}
                </SheetTitle>
                <div className="mt-2.5 flex flex-wrap items-center">
                  <Rating
                    className="mr-1 gap-0.5 [&_svg]:size-3.5 [&>div]:size-3.5"
                    rate={reviews.rate}
                  />
                  <a
                    href={reviews.link}
                    className="text-sm text-muted-foreground"
                  >
                    ({reviews.totalReviewers})
                  </a>
                </div>
                <Price
                  onSale={sale != null}
                  className="mt-5 text-lg font-medium lg:text-xl"
                >
                  <PriceValue
                    price={regular}
                    currency={currency}
                    variant="regular"
                  />
                  <PriceValue price={sale} currency={currency} variant="sale" />
                </Price>
                <Badge className="my-3 uppercase">
                  {stockStatusCode === STOCK_STATUS.IN_STOCK
                    ? "in stock"
                    : "out of stock"}
                </Badge>
                <SheetDescription className="text-base leading-relaxed">
                  {description}
                </SheetDescription>
                <Separator className="my-4" />
                <div className="flex flex-col gap-5">
                  <ProductForm
                    selected={{
                      quantity: 1,
                    }}
                    hinges={hinges}
                  />
                  <div>
                    <Separator className="my-4" />
                    <p className="text-sm">
                      Categories:{" "}
                      {categories.map((item) => (
                        <a
                          href={item.link}
                          key={crypto.randomUUID()}
                          className="mx-0.5 underline-offset-3 hover:underline"
                        >
                          {item.text}
                        </a>
                      ))}
                    </p>
                    <Separator className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ProductImages = ({ images }: ProductImagesProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!images) return;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation={isDesktop ? "vertical" : "horizontal"}
      className="md:h-[calc(100dvh-3rem)] md:[&>div]:h-full"
    >
      <CarouselContent className="max-md:-ml-3 md:-mt-6 md:h-full">
        {images.map((img) => (
          <CarouselItem
            className="basis-50 max-md:pl-3 md:basis-100 md:pt-6"
            key={crypto.randomUUID()}
          >
            <AspectRatio ratio={0.75} className="overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="block size-full object-cover object-center"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

interface Hinges {
  label: string;
  id: string;
  name: FieldName;
  min?: number;
  max?: number;
}

interface ProductFormProps {
  hinges: Record<FieldName, Hinges>;
  selected?: ProductFormType;
}

const productForm = z.object({
  quantity: z.number(),
});

const ProductForm = ({ hinges, selected }: ProductFormProps) => {
  const form = useForm({
    resolver: zodResolver(productForm),
    defaultValues: {
      quantity: selected?.quantity ?? 1,
    },
  });

  function onSubmit(values: ProductFormType) {
    console.log(values);
  }

  const quantityHinges = hinges?.quantity;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name={quantityHinges.name}
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Quantity
                    field={field}
                    min={quantityHinges?.min}
                    max={quantityHinges?.max}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button className="flex-1 rounded-full">Add to Cart</Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Heart />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <GitCompareArrows />
              </Button>
            </div>
            <Button variant="secondary" className="w-full rounded-full">
              Buy it Now
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

const Quantity = ({ field, max, min }: QuantityProps) => {
  return (
    <div
      className="flex h-9 w-full max-w-40 min-w-28 items-center overflow-hidden rounded-full border shadow-xs"
      aria-label="quantity"
    >
      <Button
        onClick={() =>
          field.onChange(Math.max(min || 1, Number(field.value || 1) - 1))
        }
        variant="ghost"
        type="button"
        size="icon"
        className="shrink-0 rounded-none"
      >
        <Minus />
      </Button>
      <Input
        {...field}
        value={field.value ?? ""}
        onChange={(e) => {
          const raw = e.target.value;
          const parsed = parseInt(raw, 10);

          // Accept empty string for typing, but validate if not a number
          if (raw === "") {
            field.onChange("");
          } else if (!isNaN(parsed)) {
            field.onChange(parsed);
          }
        }}
        type="number"
        min={min ? min : 1}
        max={max ? max : 99}
        className="w-full min-w-10 flex-1 [appearance:textfield] rounded-none border-0 !bg-background px-1 text-center shadow-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        onClick={() =>
          field.onChange(Math.min(max || 99, Number(field.value || 1) + 1))
        }
        variant="ghost"
        type="button"
        size="icon"
        className="shrink-0 rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

export { ProductQuickView6 };
```
