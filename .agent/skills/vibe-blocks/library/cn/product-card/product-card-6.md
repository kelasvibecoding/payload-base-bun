# Product Card 6

## Metadata
- **Category**: Product Card
- **Objective**: Display a product card with interactive color variants and a "Quick Add" feature.
- **Use Case**: Tech accessories or products with multiple color options where fast purchasing is prioritized.
- **Visual Style**: Clean, grid-aligned layout with small color radio buttons and a hover-revealed "Quick Add" button.
- **Interactivity**: 
    - Color radio group that swaps the main product image on selection.
    - Hover effects that reveal "Quick Add", "Shop Now", and "Quick View" actions.
    - Zod-validated form for handling variant selection before submission.

## Description
Product Card 6 is a highly functional, complex card designed for modern e-commerce. It integrates `react-hook-form` and `Zod` to manage variant states directly within the card. Selecting a color variant non-destructively updates the main image, and the "Quick Add" button allows for immediate cart addition without navigating to the product page. It uses layout transitions to hide/show various actions (Shop Now, Quick View) on hover.

## Source Code

```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ControllerRenderProps,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { Price, PriceValue } from "@/components/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const STOCK_STATUS = {
  IN_STOCK: "IN_STOCK",
  OUT_OF_STOCK: "OUT_OF_STOCK",
} as const;

type StockStatusCode = keyof typeof STOCK_STATUS;

type FieldName = keyof FormType;

type FormType = z.infer<typeof formSchema>;

type Image = {
  src: string;
  alt: string;
};

type Option = {
  id: string;
  label: string;
  color: string;
  value: string;
  image: Image;
};

interface ProductFormProps {
  colorHinges?: {
    name: FieldName;
    options: Omit<Option, "image">[];
  };
  form: UseFormReturn<FormType>;
}

interface RadioGroupProps {
  options?: Omit<Option, "image">[];
  field: ControllerRenderProps<FormType>;
}

type ColorOptionProps = Omit<Option, "image">;

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  collection: {
    label: string;
    link: string;
  };
  name: string;
  variantId: string;
  link: string;
  image: Image;
  price: ProductPrice;
  variants: {
    name: FieldName;
    options: Array<Option>;
  };
  quickAdd: boolean;
  stockStatusCode: StockStatusCode;
}

const PRODUCT_CARD: Product = {
  collection: {
    label: "Abstract Hues",
    link: "#",
  },
  name: "Midnight Streak Case",
  link: "#",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/jascent-leung-CubSQS4iYEE-unsplash-3.jpg",
    alt: "",
  },
  price: {
    regular: 59.0,
    sale: 49.0,
    currency: "USD",
  },
  variants: {
    name: "color",
    options: [
      {
        id: "midnight_black-1",
        label: "Midnight Black",
        color: "#0B0B0B",
        value: "midnight_black",
        image: {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/jascent-leung-CubSQS4iYEE-unsplash-3.jpg",
          alt: "",
        },
      },
      {
        id: "royal_indigo-1",
        label: "Royal Indigo",
        color: "#3B0A45",
        value: "royal_indigo",
        image: {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/jascent-leung-wyEh0ZnwUFM-unsplash-3.jpg",
          alt: "",
        },
      },
      {
        id: "vibrant_tangerine-1",
        label: "Vibrant Tangerine",
        color: "#FF6400",
        value: "vibrant_tangerine",
        image: {
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/other/jascent-leung-kfv-hU9ZVkk-unsplash-3.jpg",
          alt: "",
        },
      },
    ],
  },
  quickAdd: true,
  variantId: "midnight_black",
  stockStatusCode: "IN_STOCK",
};

const formSchema = z.object({
  color: z.string(),
});

interface ProductCard6Props {
  className?: string;
}

const ProductCard6 = ({ className }: ProductCard6Props) => {
  const { regular, sale, currency } = PRODUCT_CARD.price;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: PRODUCT_CARD.variantId,
    },
  });
  const selectedVariant = form.watch("color");
  const currentVariantImage = PRODUCT_CARD.variants.options.find(
    (item) => item.value === selectedVariant,
  )?.image;

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <Card
      className={cn(
        "group max-w-90 gap-2 rounded-none border-none bg-background p-0 shadow-none",
        className,
      )}
    >
      <CardHeader className="gap-0 p-0">
        <AspectRatio ratio={0.76984127} className="overflow-hidden">
          <a href={PRODUCT_CARD.link} className="block size-full">
            {currentVariantImage && (
              <img
                src={currentVariantImage?.src}
                alt={currentVariantImage?.alt}
                className="block size-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </a>
          {PRODUCT_CARD.quickAdd &&
            PRODUCT_CARD.stockStatusCode === STOCK_STATUS.IN_STOCK && (
              <div className="absolute inset-x-5 bottom-5 transition-opacity duration-400 group-hover:opacity-100 xl:opacity-0">
                <Button
                  onClick={() => {
                    form.trigger().then((valid) => {
                      if (valid) {
                        form.handleSubmit(onSubmit)();
                      }
                    });
                  }}
                  className="w-full"
                >
                  Quick Add
                </Button>
              </div>
            )}
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-0">
        {(PRODUCT_CARD.stockStatusCode || PRODUCT_CARD.price?.sale) && (
          <div className="text-sm">
            {PRODUCT_CARD.stockStatusCode === STOCK_STATUS.OUT_OF_STOCK ? (
              <span className="text-muted-foreground">Sold out</span>
            ) : (
              PRODUCT_CARD.price.sale && (
                <span className="text-destructive">Sale</span>
              )
            )}
          </div>
        )}
        <div
          className={`pt-0.5 ${PRODUCT_CARD.stockStatusCode === STOCK_STATUS.IN_STOCK && !PRODUCT_CARD.price?.sale && "mt-5"}`}
        >
          <a className="text-sm font-bold" href={PRODUCT_CARD.collection.link}>
            {PRODUCT_CARD.collection.label}
          </a>
          <div className="flex flex-wrap items-center gap-2 xl:flex-nowrap">
            <CardTitle className="text-sm font-normal">
              {PRODUCT_CARD.name}
            </CardTitle>
            <div className="transition-opacity duration-400 group-hover:opacity-100 xl:opacity-0">
              <ProductForm colorHinges={PRODUCT_CARD.variants} form={form} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="relative mt-1 flex-col items-start gap-3 p-0 xl:flex-row">
        <div className="transition-opacity duration-400 xl:group-hover:opacity-0">
          <Price onSale={sale != null} className="text-sm font-medium">
            <PriceValue price={sale} currency={currency} variant="sale" />
            <PriceValue price={regular} currency={currency} variant="regular" />
          </Price>
        </div>
        <div className="absolute flex items-center gap-3 bg-background opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <Button variant="link" className="h-fit p-0 underline">
            Shop Now
          </Button>
          <Button
            variant="link"
            className="h-fit p-0 text-muted-foreground underline"
          >
            Quick View
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const ProductForm = ({ colorHinges, form }: ProductFormProps) => {
  if (!colorHinges) return;

  return (
    <FormProvider {...form}>
      <form>
        <FormField
          control={form.control}
          name={colorHinges.name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ColorRadioGroup field={field} options={colorHinges.options} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
};

const ColorRadioGroup = ({ options, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={`${field.value}`}
      onValueChange={(value) => {
        if (value != field.value && value) {
          field.onChange(value);
        }
      }}
      className="flex gap-0"
    >
      {options &&
        options.map((item, index) => (
          <FormItem key={`product-list-6-color-input-${index}`}>
            <ColorOption
              label={item.label}
              id={item.id}
              color={item.color}
              value={item.value}
            />
          </FormItem>
        ))}
    </RadioGroup>
  );
};

const ColorOption = ({ id, value, color, label }: ColorOptionProps) => {
  return (
    <FormLabel
      htmlFor={id}
      aria-label={label}
      className="relative flex size-5 cursor-pointer after:pointer-events-none after:absolute after:inset-1/2 after:size-1 after:-translate-1/2 after:rounded-full after:bg-white after:opacity-0 after:transition-opacity has-checked:after:opacity-100"
    >
      <RadioGroupItem id={id} className="sr-only" value={value} />
      <div
        style={{
          backgroundColor: color,
        }}
        className="m-auto size-2.5 rounded-full"
      ></div>
    </FormLabel>
  );
};

export { ProductCard6 };
```
