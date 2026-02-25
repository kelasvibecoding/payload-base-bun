# Product Quick View 4

## Metadata
- **Category**: Product Quick View
- **Objective**: Implement a high-performance "Quick View" modal that allows users to make buying decisions and add items to their cart without leaving the current page.
- **Use Case**: E-commerce storefronts where friction reduction is critical. Ideal for clothing, accessories, or any item where color and size are primary variables.
- **Visual Style**: Clean and Minimalist. Features a two-column grid inside a `Dialog`. The left side is dedicated to a full-height image `Carousel`, while the right side focuses on product metadata and selection controls. Uses a neutral palette with consistent `rounded-md` borders.
- **Interactivity**: 
    - Full-Screen Responsive Modal: Adapts from a scrolling mobile view to a fixed-height, dual-pane desktop view using CSS variables (`--dialog-height`).
    - Integrated Image Carousel: Features a synchronized carousel with localized navigation controls for browsing product angles.
    - Image-Based Color Selection: Uses an unconventional but highly effective `RadioGroup` for colors where each option is rendered as a `thumbnail` image swatch rather than a simple color circle.
    - Text-Chip Size Selection: Standardized size chips with built-in validation feedback, including a `line-through` effect for out-of-stock sizes.
    - Wishlist Integration: Includes a secondary "Heart" button for wishlist actions adjacent to the primary "Add to Cart" button.
    - Deep Linking: Provides a prominent "View Product Details" link for users who need more technical specs or long-form descriptions.

## Description
Product Quick View 4 is a refined implementation of the standard e-commerce modal. It prioritizes clarity and speed. By using image-based swatches for color selection, it provides a much more accurate visual representation of the variant than a CSS color value. The technical architecture uses `react-hook-form` to manage selection state, ensuring that the "Add to Cart" action always includes the user's specific choices.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Heart } from "lucide-react";
import { useMemo } from "react";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";

import { Price, PriceValue } from "@/components/price";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const STOCK_STATUS = {
  IN_STOCK: "IN_STOCK",
  OUT_OF_STOCK: "OUT_OF_STOCK",
} as const;

type StockStatusCode = keyof typeof STOCK_STATUS;

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

type Image = {
  src: string;
  alt: string;
};

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type Option = {
  id: string;
  value: string;
  label: string;
  thumbnail?: string;
  stockStatusCode?: StockStatusCode;
};

interface Hinges {
  label: string;
  id: string;
  min?: number;
  max?: number;
  name: FieldName;
  options?: Option[];
}

type Product = {
  images: Image[];
  name: string;
  description: string;
  link: string;
  price: ProductPrice;
  hinges: Record<FieldName, Hinges>;
  variant: {
    color: string;
    size: string;
  };
};

interface ProductImagesProps {
  images: Image[];
}

interface ProductFormProps {
  hinges: Record<FieldName, Hinges>;
  selected?: FormType;
}

interface RadioGroupProps {
  options?: Array<Option>;
  field: ControllerRenderProps<FormType>;
}

type SizeOptionProps = Option;

const PRODUCT_DETAILS: Product = {
  name: "Stylish Light Brown Hat",
  description:
    "We craft gentle formulas that truly work and bring confidence to your daily ritual",
  link: "#",
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Hat-and-Sunglasses-2.png",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Portrait-hat-2.png",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Modern-Look-2.png",
      alt: "",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Fashionable-Pose-2.png",
      alt: "",
    },
  ],
  price: {
    regular: 499.0,
    sale: 389.0,
    currency: "USD",
  },
  variant: {
    color: "light-brown",
    size: "size-1",
  },
  hinges: {
    color: {
      label: "Color",
      id: "color",
      name: "color",
      options: [
        {
          id: "light-brown",
          value: "light-brown",
          label: "Light Brown",
          thumbnail:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Beige-Fedora-1.png",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "dark-brown",
          value: "dark-brown",
          label: "Dark Brown",
          thumbnail:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Fedora-Hat-1.png",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "black",
          value: "black",
          label: "Black",
          thumbnail:
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Black-Fedora-Hat-1.png",
          stockStatusCode: "OUT_OF_STOCK",
        },
      ],
    },
    size: {
      label: "Hat Size",
      id: "size",
      name: "size",
      options: [
        {
          id: "size-1",
          value: "size-1",
          label: "6⅝",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "size-2",
          value: "size-2",
          label: "6¾",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "size-3",
          value: "size-3",
          label: "6⅞",
          stockStatusCode: "OUT_OF_STOCK",
        },
        {
          id: "size-4",
          value: "size-4",
          label: "7",
          stockStatusCode: "OUT_OF_STOCK",
        },
        {
          id: "size-5",
          value: "size-5",
          label: "7⅛",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "size-6",
          value: "size-6",
          label: "7¼",
          stockStatusCode: "OUT_OF_STOCK",
        },
        {
          id: "size-7",
          value: "size-7",
          label: "7⅜",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "size-8",
          value: "size-8",
          label: "7½",
          stockStatusCode: "IN_STOCK",
        },
      ],
    },
  },
};

const ProductQuickView4 = ({
  images = PRODUCT_DETAILS.images,
  name = PRODUCT_DETAILS.name,
  description = PRODUCT_DETAILS.description,
  link = PRODUCT_DETAILS.link,
  price = PRODUCT_DETAILS.price,
  hinges = PRODUCT_DETAILS.hinges,
  variant = PRODUCT_DETAILS.variant,
}) => {
  const { regular, sale, currency } = price;

  return (
    <Dialog defaultOpen>
      <DialogContent
        style={
          {
            "--dialog-height": "calc(100dvh - 2.5rem)",
            "--dialog-max-height": "38.75rem",
          } as React.CSSProperties
        }
        className="block h-dvh w-full max-w-240! rounded-none border-none p-0 md:h-[var(--dialog-height)] md:max-h-[var(--dialog-max-height)]"
      >
        <div className="max-md:hide-scrollbar grid overflow-auto max-md:h-full md:grid-cols-2 md:overflow-hidden">
          <div>
            <ProductImages images={images} />
          </div>
          <div>
            <div className="hide-scrollbar h-full space-y-5 px-8 py-10 md:h-[var(--dialog-height)] md:max-h-[var(--dialog-max-height)] md:overflow-auto md:px-15 md:py-18">
              <div className="space-y-2">
                <DialogTitle className="text-2xl leading-normal font-semibold">
                  {name}
                </DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </div>
              <Price
                onSale={sale != null}
                className="items-end text-xl font-semibold"
              >
                <PriceValue price={sale} currency={currency} variant="sale" />
                <PriceValue
                  price={regular}
                  currency={currency}
                  variant="regular"
                />
              </Price>
              <ProductForm
                hinges={hinges}
                selected={{
                  color: variant?.color,
                  size: variant?.size,
                }}
              />
              <Button variant="link" className="px-0" asChild>
                <a href={link}>View Product Details</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProductImages = ({ images }: ProductImagesProps) => {
  if (!images) return;

  return (
    <Carousel className="h-full md:[&>div]:h-full">
      <CarouselContent className="-ml-0 md:h-full">
        {images.map((img, index) => (
          <CarouselItem
            className="w-full pl-0 md:h-[var(--dialog-height)] md:max-h-[var(--dialog-max-height)]"
            key={index}
          >
            <div className="size-full overflow-hidden max-md:aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="block size-full object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1.5" />
      <CarouselNext className="right-1.5" />
    </Carousel>
  );
};

const formSchema = z.object({
  color: z.string(),
  size: z.string(),
});

const ProductForm = ({ hinges, selected }: ProductFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: selected?.color ?? "",
      size: selected?.size ?? "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  const colorHinges = hinges?.color;
  const sizeHinges = hinges?.size;

  const selectedColorValue = form.watch("color");
  const selectedSizeValue = form.watch("size");

  const currentColor = useMemo(
    () =>
      colorHinges?.options?.find((item) => item.value === selectedColorValue)
        ?.label ?? "",
    [selectedColorValue, colorHinges],
  );

  const currentSize = useMemo(
    () =>
      sizeHinges?.options?.find((item) => item.value === selectedSizeValue)
        ?.label ?? "",
    [selectedSizeValue, sizeHinges],
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="space-y-5">
        {colorHinges && (
          <Controller
            control={form.control}
            name={colorHinges.name}
            render={({ field }) => (
              <FieldSet className="gap-2">
                <FieldLegend className="text-sm leading-normal">
                  <h2>
                    {colorHinges.label}:{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      {currentColor}
                    </span>
                  </h2>
                </FieldLegend>
                <ColorRadioGroup field={field} options={colorHinges.options} />
              </FieldSet>
            )}
          />
        )}
        {sizeHinges && (
          <Controller
            control={form.control}
            name={sizeHinges.name}
            render={({ field }) => (
              <FieldSet className="gap-2">
                <FieldLegend className="text-sm leading-normal">
                  <h2>
                    {sizeHinges.label}:{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      {currentSize}
                    </span>
                  </h2>
                </FieldLegend>
                <SizeRadioGroup field={field} options={sizeHinges.options} />
              </FieldSet>
            )}
          />
        )}
        <div className="flex gap-3">
          <Button size="lg">Add to Cart</Button>
          <Button size="icon-lg" variant="outline">
            <Heart />
          </Button>
        </div>
      </div>
    </form>
  );
};

const ColorRadioGroup = ({ options, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={field.value}
      onValueChange={field.onChange}
      className="flex flex-wrap items-center gap-3"
    >
      {options.map((item, index) => (
        <Field key={index} className="shrink-0 basis-10!">
          <FieldLabel
            htmlFor={item.id}
            className="size-10! cursor-pointer overflow-hidden rounded-md border p-0.5 duration-400 has-checked:ring has-disabled:opacity-60"
          >
            <RadioGroupItem
              id={item.id}
              className="sr-only"
              value={item.value}
              aria-label={`Select ${item.label}`}
              disabled={item.stockStatusCode === STOCK_STATUS.OUT_OF_STOCK}
            />
            <div
              style={{
                backgroundImage: `url(${item.thumbnail})`,
              }}
              className="size-full overflow-hidden rounded-sm bg-cover bg-center bg-no-repeat"
            ></div>
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  );
};

const SizeRadioGroup = ({ options, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={field.value}
      onValueChange={field.onChange}
      className="flex w-full flex-wrap justify-start gap-2"
    >
      {options &&
        options.map((item) => (
          <Field className="shrink-0 basis-10" key={crypto.randomUUID()}>
            <SizeOption
              stockStatusCode={item.stockStatusCode}
              id={item.id}
              label={item.label}
              value={item.value}
            />
          </Field>
        ))}
    </RadioGroup>
  );
};

const SizeOption = ({ id, label, stockStatusCode, value }: SizeOptionProps) => {
  return (
    <FieldLabel
      htmlFor={id}
      className="h-10 min-w-10 cursor-pointer rounded-md border-1 px-5 py-2.5 text-center text-sm leading-none uppercase not-has-disabled:hover:ring has-checked:bg-primary! has-checked:text-primary-foreground has-disabled:cursor-not-allowed has-disabled:bg-muted has-disabled:text-muted-foreground has-disabled:line-through"
    >
      <RadioGroupItem
        id={id}
        className="sr-only"
        value={value}
        aria-label={`Select ${label}`}
        disabled={stockStatusCode === STOCK_STATUS.OUT_OF_STOCK}
      />
      <div className="m-auto">{label}</div>
    </FieldLabel>
  );
};

export { ProductQuickView4 };
```
