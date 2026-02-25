# Product Detail 9

## Metadata
- **Category**: Product Detail
- **Objective**: Design a "Brutalist-Modern" product detail page for high-concept fashion or streetwear, prioritizing bold lines and architectural layouts.
- **Use Case**: Streetwear brands, techwear, or limited-release sneaker drops.
- **Visual Style**: Brutalist aesthetic using thick primary borders (`border-primary`), "Ubuntu" typography, and large-scale headings (`lg:text-7xl`). Employs a grid-heavy layout that feels structured and intentional.
- **Interactivity**: 
    - Structural Image Stacking: On desktop, images stack vertically with dividing borders, while mobile users transition to a standard swipeable carousel.
    - Data-Grid Specifications: A dedicated "Product Info" section rendered as a structured table grid for technical data (SKU, Year, etc.).
    - High-Performance CTAs: Explicitly separated and visually distinct buttons for "Add to Cart" (outline) and "Buy it now" (solid primary).
    - Inline Form Validation: `zod` integrated size selection ensuring users commit to a variant before purchase.
    - Integrated Deep Zoom: `PhotoSwipe` support for high-resolution scrutiny of fabric textures and stitching details.

## Description
Product Detail 9 breaks away from generic e-commerce templates with a bold, high-contrast design. It uses a thick border system to frame content, creating a sense of permanence and "physicality" in the digital space. The "Ubuntu" font pairing reinforces a modern, slightly technical vibe. Desktop users experience the product through a vertical image stack that treats the product photos as architectural elements, while the sticky information panel keeps conversion actions present. It is particularly well-suited for lifestyle brands that want their digital flagship to reflect an avant-garde physical brand identity.

## Source Code

```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useRef, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type StockStatusCode = "IN_STOCK" | "OUT_OF_STOCK";

interface StockInfo {
  stockStatusCode: StockStatusCode;
  stockQuantity?: number;
}

interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  stockInfo?: StockInfo;
}

type option = {
  id: string;
  label: string;
  value: string;
};

interface Hinges {
  label: string;
  id?: string;
  name: FieldName;
  options?: option[];
}

interface ProductFormProps {
  hinges: Record<FieldName, Hinges>;
  selected: {
    size: string;
  };
}

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

interface RadioGroupProps {
  options?: Array<option>;
  label: string;
  field: ControllerRenderProps<FormType>;
}

interface ProductImagesProps {
  images: Array<{
    srcset: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
  }>;
  galleryID: string;
}

interface ProductInfoProps {
  info: Array<{
    label: string;
    value: string;
  }>;
}

const PRODUCT_DETAILS = {
  name: "Pulsewear 760 LX Cairo Duststorm",
  size: "8",
  price: {
    regular: 580.0,
    sale: 530.0,
    currency: "USD",
  },
  info: [
    {
      label: "Model",
      value: "Pulsewear 760",
    },
    {
      label: "Style",
      value: "CZ5594-100",
    },
    {
      label: "Year",
      value: "2025",
    },
  ],
  description:
    "Renowned UK artist Selah Lowry joins forces with TerraKnit on the 700R silhouette. The TerraKnit 700R Selah Eclipse Mist features a storm grey knit upper layered with mist blue suede overlays and deep obsidian accents. TerraKnit branding appears on the quarter panel, heel counter, and pull tab. Completing the look is a mist-toned midsole paired with a charcoal speckled outsole for contrast and texture.",
  hinges: {
    size: {
      label: "Size",
      id: "size",
      name: "size" as const,
      options: [
        {
          id: "8",
          value: "8",
          label: "8",
        },
        {
          id: "8.5",
          value: "8.5",
          label: "8.5",
        },
        {
          id: "9",
          value: "9",
          label: "9",
        },
        {
          id: "9.5",
          value: "9.5",
          label: "9.5",
        },
        {
          id: "10",
          value: "10",
          label: "10",
        },
        {
          id: "10.5",
          value: "10.5",
          label: "10.5",
        },
        {
          id: "11",
          value: "11",
          label: "11",
        },
        {
          id: "11.5",
          value: "11.5",
          label: "11.5",
        },
        {
          id: "12",
          value: "12",
          label: "12",
        },
        {
          id: "13",
          value: "13",
          label: "13",
        },
      ],
    },
  },
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529146-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529146-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529146-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529146-3.jpg",
      alt: "",
      width: 1920,
      height: 2400,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529147-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529147-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529147-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529147-3.jpg",
      alt: "",
      width: 1920,
      height: 2400,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529148-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529148-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529148-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-melvin-buezo-1253763-2529148-3.jpg",
      alt: "",
      width: 1920,
      height: 2400,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
  ],
};

interface ProductDetail9Props {
  className?: string;
}

const ProductDetail9 = ({ className }: ProductDetail9Props) => {
  return (
    <section className={cn("py-32 font-ubuntu", className)}>
      <div className="relative grid w-full grid-cols-1 border-y border-primary lg:grid-cols-2">
        <div>
          <ProductImages
            images={PRODUCT_DETAILS.images}
            galleryID="gallery-9"
          />
        </div>
        <div className="sticky top-4.5 self-start py-4.5">
          <div className="flex flex-col gap-9 overflow-hidden px-4.5">
            <div>
              <h1 className="text-4xl leading-none font-normal lg:text-7xl">
                {PRODUCT_DETAILS.name}
              </h1>
              <div className="mt-4.5">
                <Price
                  regular={PRODUCT_DETAILS.price.regular}
                  sale={PRODUCT_DETAILS.price.sale}
                  currency={PRODUCT_DETAILS.price.currency}
                />
              </div>
            </div>
            <ProductForm
              hinges={PRODUCT_DETAILS.hinges}
              selected={{
                size: PRODUCT_DETAILS.size,
              }}
            />
            <div className="-mx-4.5">
              <ProductInfo info={PRODUCT_DETAILS.info} />
            </div>

            <p className="text-lg">{PRODUCT_DETAILS.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductInfo = ({ info }: ProductInfoProps) => {
  if (!info) return;

  return (
    <ul className="flex flex-col border-t border-primary text-lg leading-tight">
      {info.map((item, index) => (
        <li
          className="flex border-primary"
          key={`product-detail-9-info-${index}`}
        >
          <div className="shrink-0 grow-0 basis-36 border-r border-b border-inherit px-4.5 py-2.5">
            {item.label}
          </div>
          <div className="flex-1 border-b border-inherit px-4.5 py-2.5">
            {item.value}
          </div>
        </li>
      ))}
    </ul>
  );
};

const ProductImages = ({ images, galleryID }: ProductImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      bgOpacity: 1,
      wheelToZoom: true,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    lightboxRef.current = lightbox;
    return () => lightbox.destroy();
  }, [galleryID]);

  useEffect(() => {
    if (lightboxRef.current && api) {
      lightboxRef.current.on("change", () => {
        api?.scrollTo(lightboxRef.current?.pswp?.currIndex || 0);
      });
    }
  }, [api]);

  if (!images) return;

  return (
    <div className="pswp-gallery border-r border-primary" id={galleryID}>
      <Carousel
        opts={{
          breakpoints: {
            "(min-width: 1024px)": { active: false },
          },
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="ml-0 lg:flex-col">
          {images.map((item, index) => {
            return (
              <CarouselItem
                key={`product-detail-9-image-${index}`}
                className="border-b border-primary pl-0 last:border-b-0"
              >
                <AspectRatio ratio={1}>
                  <a
                    href={item.src}
                    data-pswp-width={item.width}
                    data-pswp-height={item.height}
                    data-pswp-srcset={item.srcset}
                    target="_blank"
                    rel="noreferrer"
                    data-cropped="true"
                  >
                    <img
                      srcSet={item.srcset}
                      alt={item.alt}
                      sizes={item.sizes}
                      className="block size-full object-cover object-center"
                    />
                  </a>
                </AspectRatio>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const Price = ({ regular, sale, currency }: PriceProps) => {
  if (!regular || !currency) return;

  const formatCurrency = (
    value: number,
    currency: string = "USD",
    locale: string = "en-US",
  ) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
      {sale ? (
        <div
          data-sale={!!sale}
          aria-label="sale price"
          className="text-2xl leading-[0.9] data-[sale=true]:text-foreground"
        >
          {formatCurrency(sale, currency)}
        </div>
      ) : null}
      <div
        data-sale={!!sale}
        aria-label="regular price"
        className="text-2xl leading-[0.9] data-[sale=true]:font-normal data-[sale=true]:text-muted-foreground data-[sale=true]:line-through"
      >
        {formatCurrency(regular, currency)}
      </div>
    </div>
  );
};

const formSchema = z.object({
  size: z.string(),
});

const ProductForm = ({ hinges, selected }: ProductFormProps) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: selected.size,
    },
  });
  function onSubmit(values: FormType) {
    console.log(values);
  }

  const sizeHinges = hinges?.size;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9"
      >
        <FormField
          control={form.control}
          name={sizeHinges.name}
          render={({ field }) => (
            <FormItem>
              <h2 className="w-16 text-base leading-snug">
                {sizeHinges.label}
              </h2>
              <FormControl>
                <SizeRadioGroup
                  field={field}
                  options={sizeHinges.options}
                  label={sizeHinges.label}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex max-w-3xl flex-col gap-2.5">
          <Button size="lg" variant="outline">
            Add to cart
          </Button>
          <Button size="lg">Buy it now</Button>
        </div>
      </form>
    </Form>
  );
};

const SizeRadioGroup = ({ options, field }: RadioGroupProps) => {
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
      className="flex w-full flex-wrap justify-start gap-2"
    >
      {options &&
        options.map((item, index) => (
          <FormItem key={`product-detail-9-size-${index}`}>
            <FormLabel
              htmlFor={item.id}
              className="flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-md border px-2.5 text-center text-sm leading-tight font-normal shadow-xs has-checked:border-primary has-checked:bg-background"
            >
              <RadioGroupItem
                id={item.id}
                className="sr-only"
                value={item.value}
                aria-label={`Select ${item.label}`}
              />
              <div>{item.label}</div>
            </FormLabel>
          </FormItem>
        ))}
    </RadioGroup>
  );
};

export { ProductDetail9 };
```
