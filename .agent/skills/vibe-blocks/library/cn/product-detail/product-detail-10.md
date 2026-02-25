# Product Detail 10

## Metadata
- **Category**: Product Detail
- **Objective**: High-end furniture/interior design product piece with a focus on craftsmanship markers and multi-faceted variant selection (Material, Color, Size).
- **Use Case**: High-end furniture retailers, artisanal home goods, or bespoke industrial design shops.
- **Visual Style**: Clean, modern, using the `ubuntu` font. Employs a unique horizontal hero ribbon for images and significant whitespace to emphasize premium quality.
- **Interactivity**: 
    - Multi-Image Hero Strip: A `Carousel` that displays a ribbon of images, showing multiple thumbnails adjacent to each other on desktop (`lg:basis-[22%]`) for rapid visual scanning.
    - Craftsmanship Markers: Icon-based indicators (`Award`, `Hammer`, `MapPin`) that highlight product value propositions like material quality and origin.
    - Complex Variadic Form: A three-tier selection system (Material, Color, Size) using `RadioGroup` items that handle out-of-stock states for specific sizes.
    - Dynamic Buying Actions: Prominent "Buy it now" action alongside the variadic form to encourage quick conversion.
    - Structured Detail Accordion: Uses `Accordion` to cleanly separate technical details from logistical information like "Lead time".
    - Rich Prose Support: Integrated rendering of HTML-based product descriptions with styled typography.

## Description
Product Detail 10 is optimized for "Big Ticket" items like furniture or high-end equipment where details like material, hand-crafted status, and regional design are major selling points. The interface is dominated by an expansive horizontal carousel that provides a gallery-like experience. The layout is intentionally spacious, using the `ubuntu` font and subtle icons to create a professional, trustworthy environment. It manages three dimensions of product variants (Material, Color, and Size) in a compact, readable format, ensuring that even complex product offerings remain easy to navigate.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Award, Hammer, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
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
interface ProductImagesProps {
  images: Array<{
    srcset: string;
    sizes: string;
    alt: string;
  }>;
}

interface ProductInfoSectionProps {
  info: Array<{
    title: string;
    content: string;
  }>;
}

type Option = {
  id: string;
  value: string;
  label: string;
  stockInfo: StockInfo;
};

interface Hinges {
  label: string;
  id: string;
  min?: number;
  max?: number;
  name: FieldName;
  options?: Option[];
}

interface ProductForm {
  selected: FormType;
  hinges: Record<FieldName, Hinges>;
}

interface RadioGroupProps {
  options?: Array<Option>;
  id: string;
  field: ControllerRenderProps<FormType>;
}

interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
}

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

const PRODUCT_DETAILS = {
  id: "1",
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-1BQySo2Pnfc-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-1BQySo2Pnfc-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-1BQySo2Pnfc-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },

    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-dOfuTQp6PiI-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-dOfuTQp6PiI-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-dOfuTQp6PiI-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-XE5vVNRbkOk-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-XE5vVNRbkOk-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-XE5vVNRbkOk-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/lucas-de-moura-uNZpPRPEnY4-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/lucas-de-moura-uNZpPRPEnY4-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/lucas-de-moura-uNZpPRPEnY4-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-GpKO8VYYWrA-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-GpKO8VYYWrA-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/ozgur-ivo-GpKO8VYYWrA-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/john-black-RV9T8txb2uY-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/john-black-RV9T8txb2uY-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/john-black-RV9T8txb2uY-unsplash-1.jpg 640w",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
    },
  ],
  hinges: {
    material: {
      label: "Material",
      id: "material",
      name: "material",
      options: [
        {
          id: "light-brown-leather",
          value: "light-brown-leather",
          label: "Light Brown Leather",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "dark-brown-leather",
          value: "dark-brown-leather",
          label: "Dark Brown Leather",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
      ],
    },
    color: {
      label: "Color",
      id: "color",
      name: "color",
      options: [
        {
          id: "light-brown",
          value: "light-brown",
          label: "Light Brown",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "dark-brown",
          value: "dark-brown",
          label: "Dark Brown",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
      ],
    },
    size: {
      label: "Size",
      id: "size",
      name: "size",
      options: [
        {
          id: "90-inch",
          value: "90-inch",
          label: '90" Wide',
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
        {
          id: "80-inch",
          value: "80-inch",
          label: '80" Wide',
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
      ],
    },
    quantity: {
      label: "Quantity",
      id: "quantity",
      name: "quantity",
      min: 1,
      max: 90,
    },
  } as Record<FieldName, Hinges>,
  material: "light-brown-leather",
  color: "light-brown",
  size: "80-inch",
  price: { regular: 1899, sale: 1599, currency: "USD" },
  stockInfo: {
    stockStatusCode: "IN_STOCK" as StockStatusCode,
  },
  name: "Brixton Genuine Leather Sofa",
  location: "Los Angeles, CA",
  accordion: [
    {
      title: "Details",
      content:
        "Crafted with kiln-dried hardwood and upholstered in premium light brown leather, the Brixton sofa blends mid-century elegance with everyday comfort. Its supportive cushions and durable construction make it ideal for any living space.",
    },
    {
      title: "Lead time",
      content:
        "Ships in 5–7 business days. Delivery times may vary depending on your location.",
    },
  ],
  description:
    "<p>Discover the timeless appeal of the Brixton Sofa, now featured in our Leather Collection. Designed for comfort and built to last, this piece elevates any living space.</p><p>Crafted with precision and attention to detail, each piece undergoes rigorous quality testing to ensure it meets our exacting standards. The premium materials and expert construction techniques result in furniture that not only looks stunning but also stands the test of time.</p><p>Our commitment to excellence extends beyond the product itself. From the initial design concept to the final delivery, we work closely with skilled artisans who share our passion for creating exceptional furniture that brings both beauty and functionality to your home.</p>",
};

interface ProductDetail10Props {
  className?: string;
}

const ProductDetail10 = ({ className }: ProductDetail10Props) => {
  return (
    <section className={cn("py-32 font-ubuntu", className)}>
      <div className="flex flex-col gap-7">
        <ProductImages images={PRODUCT_DETAILS.images} />
        <div className="flex w-full flex-col gap-8 px-4 lg:grid lg:grid-cols-3">
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm">
                <Award className="size-5 stroke-1" />
                Genuine Leather
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Hammer className="size-5 stroke-1" />
                Hand Crafted
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="size-5 stroke-1" />
                Designed in {PRODUCT_DETAILS.location}
              </li>
            </ul>
            <ProductInfoSection info={PRODUCT_DETAILS.accordion} />
          </div>
          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg leading-none font-semibold">
                  Full Hurdle Chair
                </h2>
                <Price {...PRODUCT_DETAILS.price} />
              </div>
              <Button>Buy it now</Button>
            </div>

            <ProductForm
              hinges={PRODUCT_DETAILS.hinges}
              selected={{
                material: PRODUCT_DETAILS.material,
                color: PRODUCT_DETAILS.color,
                size: PRODUCT_DETAILS.size,
              }}
            />
          </div>
          <div className="order-3 flex flex-col gap-4 text-muted-foreground">
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: PRODUCT_DETAILS.description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductImages = ({ images }: ProductImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap() + 1);
    updateCurrent();

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  if (!images) return;

  return (
    <div>
      <Carousel
        opts={{ loop: true, align: "start", startIndex: 0 }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="m-0">
          {images.map((img, index) => (
            <CarouselItem
              key={`product-detail-10-image-${index}`}
              className="basis-full p-0 lg:basis-[22%]"
            >
              <AspectRatio ratio={1} className="overflow-hidden">
                <img
                  srcSet={img.srcset}
                  sizes={img.sizes}
                  alt={img.alt}
                  className="block size-full object-cover object-center"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-2 grid grid-cols-2 items-center justify-between px-4">
        <ul
          data-show-dots={images.length >= 6}
          className="flex w-fit items-center data-[show-dots=false]:lg:hidden"
        >
          {images.map((_, index) => (
            <li key={`product-detail-10-indicator-${index}`}>
              <button
                aria-current={index + 1 === current ? "true" : undefined}
                data-state={index + 1 === current ? "active" : "inactive"}
                onClick={() => api?.scrollTo(index)}
                type="button"
                className="group flex size-4 shrink-0"
              >
                <div className="m-auto size-2 rounded-full border border-primary group-data-[state=active]:bg-primary"></div>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex w-fit items-center justify-self-end">
          <Button size="icon" variant="ghost" onClick={() => api?.scrollPrev()}>
            <ArrowLeft />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => api?.scrollNext()}>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductInfoSection = ({ info }: ProductInfoSectionProps) => {
  if (!info) return;

  return (
    <Accordion type="multiple" className="w-full">
      {info.map((item, index) => (
        <AccordionItem
          value={`product-info-10-${index}`}
          key={`product-detail-10-info-${index}`}
        >
          <AccordionTrigger className="text-sm font-normal text-foreground">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-balance text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
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
          className="text-base data-[sale=true]:text-foreground"
        >
          {formatCurrency(sale, currency)}
        </div>
      ) : null}
      <div
        data-sale={!!sale}
        aria-label="regular price"
        className="text-base data-[sale=true]:font-normal data-[sale=true]:text-muted-foreground data-[sale=true]:line-through"
      >
        {formatCurrency(regular, currency)}
      </div>
    </div>
  );
};

const formSchema = z.object({
  material: z.string(),
  color: z.string(),
  size: z.string(),
});

const ProductForm = ({ hinges, selected }: ProductForm) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      material: selected.material,
      color: selected.color,
      size: selected.size,
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  const materialHinges = hinges?.material;
  const colorHinges = hinges?.color;
  const sizeHinges = hinges?.size;

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {materialHinges && (
          <FormField
            control={form.control}
            name={materialHinges.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild>
                  <h2>{materialHinges.label}:</h2>
                </FormLabel>
                <FormControl>
                  <OptionGroup
                    field={field}
                    options={materialHinges.options}
                    id={materialHinges.id}
                  />
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
                <FormLabel asChild>
                  <h2>{colorHinges.label}:</h2>
                </FormLabel>
                <FormControl>
                  <OptionGroup
                    field={field}
                    options={colorHinges.options}
                    id={colorHinges.id}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
        {sizeHinges && (
          <FormField
            control={form.control}
            name={sizeHinges.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild>
                  <h2>{sizeHinges.label}:</h2>
                </FormLabel>
                <FormControl>
                  <OptionGroup
                    field={field}
                    options={sizeHinges.options}
                    id={sizeHinges.id}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
};

const OptionGroup = ({ options, id, field }: RadioGroupProps) => {
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
      className="flex w-full flex-wrap items-start gap-2"
    >
      {options &&
        options.map((item, index) => (
          <FormItem key={`product-detail-10-input-${id}-${index}`}>
            <FormLabel
              htmlFor={item.id}
              className="flex h-8 max-w-fit items-center justify-center rounded-md border border-muted bg-background px-3 text-xs font-normal shadow-xs has-checked:border-primary has-disabled:bg-muted has-disabled:text-muted-foreground"
            >
              <RadioGroupItem
                id={item.id}
                className="sr-only"
                value={item.value}
                aria-label={`Select ${item.label}`}
                disabled={item.stockInfo.stockStatusCode === "OUT_OF_STOCK"}
              />
              <div>{item.label}</div>
            </FormLabel>
          </FormItem>
        ))}
    </RadioGroup>
  );
};

export { ProductDetail10 };
```
