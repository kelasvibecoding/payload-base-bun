# Product Card 8

## Metadata
- **Category**: Product Card
- **Objective**: Display a product card with a collapsible detailed selection form.
- **Use Case**: Complex products (e.g., custom apparel) that require multiple attribute selections (size, color, quantity) before adding to cart.
- **Visual Style**: Sleek, ring-bordered card with a secondary image that reveals on hover. Focuses on high-quality imagery with a functional overlay.
- **Interactivity**: 
    - Hover reveals a rating badge and a floating `ShoppingBag` button.
    - Group hover Effect: Swaps between primary and secondary images with a subtle scale transition.
    - Floating button triggers a `Collapsible` overlay containing a full `react-hook-form` with color swatches, size scrolls, and quantity inputs.
    - Infinite scroll prevention: The collapsible form uses its own internal scroll area.

## Description
Product Card 8 is a feature-rich "mini PDP" (Product Detail Page) contained within a single card. It utilizes `Collapsible` to hide a comprehensive configuration form (size, color, quantity) behind a single click. It's perfect for shopping grids where you want to minimize clicks to cart. It features advanced image handling with `srcset` and `sizes` for performance, and a robust form implementation with quantity controls.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, ShoppingBag, Star, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";

const STOCK_STATUS = {
  IN_STOCK: "IN_STOCK",
  OUT_OF_STOCK: "OUT_OF_STOCK",
} as const;

type StockStatusCode = keyof typeof STOCK_STATUS;

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

type Option = {
  id: string;
  label: string;
  value: string;
  stockStatusCode: StockStatusCode;
  color?: string;
};

interface Hinges {
  label: string;
  id: string;
  name: FieldName;
  options?: Option[];
  min?: number;
  max?: number;
}

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
  discount?: string;
}

interface ProductFormProps {
  hinges: Record<FieldName, Hinges>;
  onOpenChange: () => void;
}

interface QuantityProps {
  field: ControllerRenderProps<FormType>;
  max?: number;
  min?: number;
}

type Image = {
  srcset: string;
  sizes: string;
  alt: string;
};

interface RadioGroupProps {
  options?: Array<Option>;
  id: string;
  field: ControllerRenderProps<FormType>;
}

interface Product {
  name: string;
  price: ProductPrice;
  rate: number;
  images: Image[];
  link: string;
  hinges?: Record<FieldName, Hinges>;
}

const PRODUCT_CARD: Product = {
  name: "Vertical striped midi dress",
  price: {
    regular: 99.0,
    sale: 79.0,
    currency: "USD",
    discount: "-20%",
  },
  rate: 5,
  link: "#",
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555009-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555009-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555009-1.jpg 640w",
      alt: "",
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555003-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555003-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-429124762-15555003-1.jpg 640w",
      alt: "",
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
  ],
  hinges: {
    size: {
      label: "Size",
      id: "size",
      name: "size",
      options: [
        {
          id: "xs-1",
          value: "xs",
          label: "xs",
          stockStatusCode: "OUT_OF_STOCK",
        },
        {
          id: "s-1",
          value: "s",
          label: "s",
          stockStatusCode: "OUT_OF_STOCK",
        },
        {
          id: "m-1",
          value: "m",
          label: "m",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "l-1",
          value: "l",
          label: "l",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "xl-1",
          value: "xl",
          label: "xl",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "xxl-1",
          value: "xxl",
          label: "xxl",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "3xl-1",
          value: "3xl",
          label: "3xl",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "4xl-1",
          value: "4xl",
          label: "4xl",
          stockStatusCode: "IN_STOCK",
        },
      ],
    },
    color: {
      label: "Color",
      id: "color",
      name: "color",
      options: [
        {
          id: "black-1",
          label: "Black",
          value: "black",
          color: "#000000",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "blue-1",
          label: "Blue",
          value: "blue",
          color: "#607FC7",
          stockStatusCode: "IN_STOCK",
        },
        {
          id: "red-1",
          label: "Red",
          value: "red",
          color: "#97012e",
          stockStatusCode: "IN_STOCK",
        },
      ],
    },
    quantity: {
      label: "Quantity",
      id: "quantity-1",
      name: "quantity",
      min: 1,
      max: 90,
    },
  },
};

interface ProductCard8Props {
  className?: string;
}

const ProductCard8 = ({ className }: ProductCard8Props) => {
  const [open, setOpen] = useState(false);
  const { regular, sale, currency } = PRODUCT_CARD.price;

  const onOpenChange = () => {
    if (PRODUCT_CARD.hinges) {
      setOpen(!open);
    }
  };

  return (
    <Card
      className={cn(
        "group relative block max-w-120 rounded-none border-none py-5 shadow-none ring ring-border",
        className,
      )}
    >
      <a
        href={PRODUCT_CARD.link}
        className="absolute inset-0 z-50 size-full"
      ></a>
      <CardContent>
        <div className="relative overflow-hidden">
          <AspectRatio
            ratio={0.833342901}
            className="overflow-hidden rounded-[1.25rem]"
          >
            {PRODUCT_CARD.images.map((img, index) => (
              <div
                className="absolute inset-0 size-full transition-opacity duration-350 first:z-20 group-hover:first:opacity-0 last:z-10 first:[&>img]:scale-110 first:[&>img]:delay-50 group-hover:first:[&>img]:scale-100 last:[&>img]:scale-110 group-hover:last:[&>img]:scale-100"
                key={`product-card-8-card-img-${index}`}
              >
                <img
                  srcSet={img.srcset}
                  alt={img.alt}
                  sizes={img.sizes}
                  className="block size-full object-cover object-center transition-transform duration-350"
                />
              </div>
            ))}
          </AspectRatio>
          <Badge
            variant="outline"
            className="absolute start-4 top-4 z-30 rounded-full bg-background font-bold opacity-0 transition-opacity duration-350 group-hover:opacity-100"
          >
            <Star className="fill-inherit" />
            {PRODUCT_CARD.rate}
          </Badge>
          {PRODUCT_CARD.price.discount && (
            <Badge
              variant="outline"
              className="absolute end-4 top-4 z-30 rounded-full bg-background font-bold text-red-600 transition-opacity duration-350"
            >
              {PRODUCT_CARD.price.discount}
            </Badge>
          )}
          <Button
            size="icon"
            onClick={onOpenChange}
            className="absolute end-4 bottom-4 z-60 rounded-full lg:translate-y-[calc(100%+1rem)] lg:group-hover:translate-y-0"
          >
            <ShoppingBag />
          </Button>
        </div>
        <div className="space-y-0.5 pt-3.5">
          <CardTitle className="leading-relaxed">{PRODUCT_CARD.name}</CardTitle>
          <Price onSale={sale != null}>
            <PriceValue price={sale} currency={currency} variant="sale" />
            <PriceValue price={regular} currency={currency} variant="regular" />
          </Price>
        </div>
      </CardContent>
      {PRODUCT_CARD.hinges && (
        <Collapsible open={open} onOpenChange={onOpenChange}>
          <CollapsibleContent className="absolute inset-0 z-70 size-full bg-background">
            <ProductForm
              onOpenChange={onOpenChange}
              hinges={PRODUCT_CARD.hinges}
            />
          </CollapsibleContent>
        </Collapsible>
      )}
    </Card>
  );
};

const formSchema = z.object({
  size: z.string(),
  color: z.string(),
  quantity: z.number(),
});

const ProductForm = ({ onOpenChange, hinges }: ProductFormProps) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
      size: "",
      quantity: 1,
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  const sizeHinges = hinges?.size;
  const colorHinges = hinges?.color;
  const quantityHinges = hinges?.quantity;

  const currentColorId = form.watch("color");
  const currentColor = useMemo(
    () =>
      colorHinges?.options?.find((item) => item.value === currentColorId)
        ?.label ?? "",
    [currentColorId, colorHinges],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
        <div className="relative h-full">
          <ScrollArea className="h-full pb-30 lg:pb-17">
            <div className="flex size-full flex-col gap-6">
              <div className="relative space-y-5 p-4">
                <Button
                  size="icon"
                  variant="ghost"
                  type="button"
                  onClick={onOpenChange}
                  className="absolute end-2 top-2 rounded-full"
                >
                  <X />
                </Button>
                {sizeHinges && (
                  <FormField
                    control={form.control}
                    name={sizeHinges.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className="text-base leading-normal font-bold"
                          asChild
                        >
                          <h2>{sizeHinges.label}</h2>
                        </FormLabel>
                        <FormControl>
                          <div className="relative -mr-4 overflow-hidden after:pointer-events-none after:absolute after:end-0 after:top-0 after:block after:h-full after:w-10.5 after:bg-gradient-to-r after:from-transparent after:to-background after:content-['']">
                            <SizeRadioGroup
                              field={field}
                              options={sizeHinges.options}
                              id={sizeHinges.id}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}
                {colorHinges && (
                  <FormField
                    control={form.control}
                    name={colorHinges.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className="text-base leading-normal font-bold"
                          asChild
                        >
                          <h2>{colorHinges.label}</h2>
                        </FormLabel>
                        <FormControl>
                          <ColorRadioGroup
                            field={field}
                            options={colorHinges.options}
                            id={colorHinges.id}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">
                          {currentColor
                            ? currentColor
                            : `${colorHinges.options?.length} colors available`}
                        </p>
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>
          </ScrollArea>
          <div className="absolute inset-x-0 bottom-0">
            <div className="flex flex-col items-center gap-4 bg-background p-4 lg:flex-row">
              {quantityHinges && (
                <FormField
                  control={form.control}
                  name={quantityHinges.name}
                  render={({ field }) => (
                    <FormItem className="self-stretch">
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
              )}
              <div className="flex-1 self-stretch">
                <Button
                  disabled={!form.getValues("color") && !form.getValues("size")}
                  className="w-full rounded-full"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

const SizeRadioGroup = ({ options, id, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={`${field.value}`}
      id={id}
      onValueChange={(value) => {
        if (value != field.value && value) {
          field.onChange(value);
        }
      }}
      className="flex w-full items-center gap-2 overflow-x-auto p-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((item, index) => (
        <FormItem
          className="shrink-0 last:pr-14.5"
          key={`product-card-8-size-${index}`}
        >
          <FormLabel
            htmlFor={item.id}
            className="h-9 cursor-pointer overflow-hidden rounded-full border px-4.5 py-3 text-center leading-none font-normal uppercase ring-primary duration-400 not-has-disabled:hover:ring-1 has-checked:ring has-checked:hover:ring has-disabled:opacity-25"
          >
            <RadioGroupItem
              id={item.id}
              className="sr-only"
              value={item.value}
              aria-label={`Select ${item.label}`}
              disabled={item.stockStatusCode === STOCK_STATUS.OUT_OF_STOCK}
            />
            {item.label}
          </FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
};

const ColorRadioGroup = ({ options, id, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={`${field.value}`}
      id={id}
      onValueChange={(value) => {
        if (value != field.value && value) {
          field.onChange(value);
        }
      }}
      className="flex w-full flex-wrap items-center gap-2 overflow-x-auto p-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((item, index) => (
        <FormItem key={`product-card-8-color-${index}`}>
          <FormLabel
            htmlFor={item.id}
            className="relative flex size-9 cursor-pointer overflow-hidden rounded-full border ring-primary duration-400 not-has-disabled:hover:ring has-checked:ring has-disabled:opacity-25"
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
                backgroundColor: item.color,
              }}
              className="m-auto size-7.5 rounded-full"
            ></div>
            {item.stockStatusCode === STOCK_STATUS.OUT_OF_STOCK && (
              <span className="absolute top-0 bottom-0 left-1/2 z-10 block h-full w-0 rotate-45 border-l"></span>
            )}
          </FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
};

const Quantity = ({ field, max, min }: QuantityProps) => {
  return (
    <div
      className="flex h-9 w-full min-w-34 items-center overflow-hidden rounded-full border shadow-xs"
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

          if (raw === "") {
            field.onChange("");
          } else if (!isNaN(parsed)) {
            field.onChange(parsed);
          }
        }}
        type="number"
        min={Math.max(min ?? 1, 1)}
        max={max ?? 99}
        className="h-full w-full min-w-10 flex-1 [appearance:textfield] rounded-none border-0 px-1 text-center shadow-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
```
