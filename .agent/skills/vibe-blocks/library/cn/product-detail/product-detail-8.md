# Product Detail 8

## Metadata
- **Category**: Product Detail
- **Objective**: Create a highly informative and trust-focused product detail page for premium apparel (western-wear), featuring detailed stock status communication and visual color selection.
- **Use Case**: Fashion, equestrian gear, or any niche apparel brand requiring detailed variant information and stock transparency.
- **Visual Style**: Clean, editorial aesthetic with a focus on high-fidelity star ratings and clear, tiered stock messaging. Uses consistent typography and bold accents for pricing.
- **Interactivity**: 
    - Vertical Image Gallery: A sophisticated `Carousel` layout that switches to a stacked vertical alignment on desktop, integrated with `PhotoSwipe` for deep zoom.
    - Visual Color Picker: Radio-group based selection using actual product thumbnails that update labels on hover/select.
    - Real-time Stock Communication: Dynamic messages (In Stock, Low Stock, Out of Stock) that shift based on the selected size.
    - Tiered CTAs: Swapping "Add to cart" with "Pre-order" when an item is out of stock.
    - Star Rating Engine: A custom-rendered star rating component supporting full, half, and empty stars with reviewer counts.
    - Multi-Section Accordion: For organized delivery of description, fabric care, and shipping details.

## Description
Product Detail 8 is designed for apparel brands that prioritize transparency and customer trust. It features a robust variant management system where stock status (including specific "Low Stock" counts) is communicated immediately upon selecting a size. The visual color picker uses high-fidelity thumbnails to help users distinguish between subtle shade variations. Desktop users benefit from a vertically scrolling image gallery that maximizes screen real estate, while mobile users get a swipeable carousel with clear pagination. The "Pre-order" fallback for out-of-stock items ensures that demand is captured even when local inventory is zero.

## Source Code

```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Star, StarHalf } from "lucide-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  ControllerRenderProps,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z } from "zod";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type StockStatusCode = "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK";

interface StockInfo {
  stockStatusCode: StockStatusCode;
  stockQuantity?: number;
}

interface StockMessageProps {
  stockInfo?: StockInfo;
}

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

interface ReviewsProps {
  rate: number;
  totalReviewers: string;
}

type Option = {
  label: string;
  id: string;
  value: string;
  stockInfo: StockInfo;
  image?: {
    src: string;
    alt: string;
  };
};

interface SizeRadioGroupProps {
  options?: Array<Option>;
  label: string;
  field: ControllerRenderProps<FormType>;
}

interface ColorRadioGroupProps {
  options?: Array<Option>;
  label: string;
  field: ControllerRenderProps<FormType>;
}

interface Hinges {
  label: string;
  id: string;
  name: FieldName;
  options?: Option[];
}

interface ProductForm {
  hinges: Record<FieldName, Hinges>;
  onSubmit: (data: FormType) => void;
  stockInfo?: StockInfo;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

interface ProductInfoSectionProps {
  info: Array<{
    title: string;
    content: string;
  }>;
}

interface ProductImagesProps {
  images: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    srcset: string;
    sizes: string;
    thumbnail: string;
  }>;
  galleryID: string;
  availability?: boolean;
  discount?: string;
}

const MAX_STARS = 5;

const STATUS_CONFIG = {
  IN_STOCK: {
    color: "green",
    message: "In stock - Order today before 11 PM, shipped today",
  },
  LOW_STOCK: {
    color: "amber",
    getMessage: (qty?: number) => `Low stock - ${qty ?? "a few"} items left`,
  },
  OUT_OF_STOCK: {
    color: "red",
    message: "Out of stock, Delivery within 14 days",
  },
};

const PRODUCT_DETAILS = {
  name: "Dakota WSTN Embroidered Horse Shirt",
  color: "white",
  size: "34",
  reviews: {
    rate: 3.5,
    totalReviewers: "5.8k",
  },
  price: {
    regular: 100.0,
    sale: 30.0,
    currency: "USD",
    discount: "-70%",
  },
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-3.jpg",
      alt: "",
      width: 2400,
      height: 1600,
      sizes: "(max-width: 1240px) 100vw, 60vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-1.jpg",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-3.jpg",
      alt: "",
      width: 2400,
      height: 3600,
      sizes: "(max-width: 1240px) 100vw, 60vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-1.jpg",
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-3.jpg",
      alt: "",
      width: 2400,
      height: 3598,
      sizes: "(max-width: 1240px) 100vw, 60vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-1.jpg",
    },
  ],
  hinges: {
    size: {
      label: "Size",
      id: "size",
      name: "size",
      options: [
        {
          id: "34",
          value: "34",
          label: "34",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "36",
          value: "36",
          label: "36",
          stockInfo: {
            stockStatusCode: "LOW_STOCK" as StockStatusCode,
          },
        },
        {
          id: "38",
          value: "38",
          label: "38",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
        {
          id: "40",
          value: "40",
          label: "40",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
        {
          id: "42",
          value: "42",
          label: "42",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
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
          id: "white",
          value: "white",
          label: "White",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-thumbnail-white.png",
            alt: "",
          },
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "pink",
          value: "pink",
          label: "Pink",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-thumbnail-pink.png",
            alt: "",
          },
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "blue",
          value: "blue",
          label: "Blue",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-thumbnail-blue.png",
            alt: "",
          },
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
      ],
    },
  } as Record<FieldName, Hinges>,
  summary:
    "Transform your ensemble from daywear to evening attire instantly, adapting to every occasion with ease.",
  services: [
    "Free shipping when you spend more than €50",
    "Get it by tomorrow with next-day delivery",
  ],
  accordion: [
    {
      title: "Description",
      content:
        "Channel timeless Western charm with a feminine twist in this beautifully tailored button-up shirt. Featuring delicate horse-inspired detailing, a flattering silhouette, and classic button closures, this piece blends rugged spirit with everyday elegance. Perfect for everything from a countryside getaway to a city stroll, it's designed for women who love a touch of the wild with their wardrobe staples.",
    },
    {
      title: "Fabric & Care Instructions",
      content:
        "This garment is made from 80% viscose and 20% polyester. To keep it in the best condition, we recommend hand washing it in cold water. Avoid using bleach, and instead of machine drying, lay the piece flat to dry. Do not tumble dry. If needed, iron at a low temperature. The item is also suitable for delicate dry cleaning.",
    },
    {
      title: "Shipping & Returns",
      content:
        "Learn about our shipping times, return policy, and what to do if you need to exchange an item. We’ve got you covered every step of the way.",
    },
  ],
};

interface ProductDetail8Props {
  className?: string;
}

const ProductDetail8 = ({ className }: ProductDetail8Props) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: PRODUCT_DETAILS.color,
      size: PRODUCT_DETAILS.size,
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  const size = form.watch("size");

  const hinges = PRODUCT_DETAILS.hinges;
  const stockInfo = useMemo(() => {
    return hinges?.size?.options?.find((item) => item.value === size)
      ?.stockInfo;
  }, [hinges, size]);

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
    <section className={cn("py-32", className)}>
      <div className="mx-auto w-full max-w-415 px-7.5">
        <div className="relative mt-5.5 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-18.5">
          <div className="lg:col-span-3">
            <ProductImages
              images={PRODUCT_DETAILS.images}
              galleryID="product-detail-8-gallery"
              availability={!(stockInfo?.stockStatusCode === "OUT_OF_STOCK")}
              discount={PRODUCT_DETAILS.price.discount}
            />
          </div>
          <div className="sticky top-10 self-start lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <h1 className="text-2xl leading-normal font-bold">
                  {PRODUCT_DETAILS.name}
                </h1>
                <Reviews
                  rate={PRODUCT_DETAILS.reviews.rate}
                  totalReviewers={PRODUCT_DETAILS.reviews.totalReviewers}
                />
              </div>
              <div className="flex flex-wrap items-baseline gap-1 text-lg">
                <div
                  data-sale={!!PRODUCT_DETAILS.price.sale}
                  aria-label="regular price"
                  className="data-[sale=true]:text-red-600 data-[sale=true]:line-through"
                >
                  {formatCurrency(
                    PRODUCT_DETAILS.price.regular,
                    PRODUCT_DETAILS.price.currency,
                  )}
                </div>
                {PRODUCT_DETAILS.price.sale ? (
                  <div aria-label="sale price" className="text-primary">
                    {formatCurrency(
                      PRODUCT_DETAILS.price.sale,
                      PRODUCT_DETAILS.price.currency,
                    )}
                  </div>
                ) : null}
              </div>
              <p className="text-sm leading-[1.8]">{PRODUCT_DETAILS.summary}</p>
              <ProductForm
                hinges={PRODUCT_DETAILS.hinges}
                form={form}
                onSubmit={onSubmit}
                stockInfo={stockInfo}
              />
              <ServicesList services={PRODUCT_DETAILS.services} />
              <ProductInfoSection info={PRODUCT_DETAILS.accordion} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductImages = ({
  images,
  galleryID,
  availability,
  discount,
}: ProductImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap() + 1);
    updateCurrent();
    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    if (lightboxRef.current && api) {
      lightboxRef.current.on("change", () => {
        api?.scrollTo(lightboxRef.current?.pswp?.currIndex || 0);
      });
    }
  }, [api]);

  if (!images) return;

  return (
    <div className="pswp-gallery" id={galleryID}>
      <div className="relative">
        <Carousel
          opts={{
            loop: true,
            breakpoints: {
              "(min-width: 1024px)": {
                active: false,
                align: "start",
                loop: false,
              },
            },
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-mt-2 lg:flex-col">
            {images.map((img, index) => (
              <CarouselItem
                key={`product-detail-8-image-${index}`}
                className="pt-2 lg:basis-1/3"
              >
                <AspectRatio ratio={0.797938144} className="overflow-hidden">
                  <a
                    href={img.src}
                    data-pswp-width={img.width}
                    data-pswp-height={img.height}
                    data-pswp-srcset={img.srcset}
                    target="_blank"
                    rel="noreferrer"
                    data-cropped="true"
                    className="hover:cursor-zoom-in"
                  >
                    <img
                      srcSet={img.srcset}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes={img.sizes}
                      className="block size-full object-cover object-center"
                    />
                  </a>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="lg:hidden">
            <CarouselPrevious className="left-4 size-11 border-0 bg-primary/20 hover:bg-primary/30 [&>svg]:!size-7 [&>svg]:stroke-primary-foreground" />
            <CarouselNext className="right-4 size-11 border-0 bg-primary/20 hover:bg-primary/30 [&>svg]:!size-7 [&>svg]:stroke-primary-foreground" />
          </div>
        </Carousel>
        <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2">
          <Badge variant="destructive">Sale {discount}</Badge>
          {availability === false ? <Badge>Pre-order</Badge> : null}
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex items-center justify-center md:hidden">
          {images.map((_, index) => (
            <li
              className="shrink-0"
              key={`product-detail-8-indicator-${index}`}
            >
              <button
                onClick={() => api?.scrollTo(index)}
                data-state={index + 1 === current ? "active" : "inactive"}
                type="button"
                className="flex size-4 duration-200 data-[state=active]:[&>span]:bg-primary"
              >
                <span className="m-auto size-2 rounded-full bg-primary/30"></span>
              </button>
            </li>
          ))}
        </ul>
        <ul className="hidden w-full max-w-full items-center justify-center gap-2 overflow-auto py-0.5 md:flex lg:hidden">
          {images.map((img, index) => (
            <li
              className="h-16 shrink-0 grow-0 basis-13.5"
              key={`product-detail-8-thumbnail-${index}`}
            >
              <button
                onClick={() => api?.scrollTo(index)}
                data-state={index + 1 === current ? "active" : "inactive"}
                type="button"
                className="block size-full ring-foreground transition-shadow duration-200 data-[state=active]:ring-2"
              >
                <img
                  src={img.thumbnail}
                  alt={img.alt}
                  className="block size-full object-cover object-center"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Reviews = ({ rate, totalReviewers }: ReviewsProps) => {
  const renderStars = () => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`product-detail-8-star-full-${i}`}
          className="size-3.5 fill-black stroke-black"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="product-detail-8-half-star" className="relative size-3.5">
          <StarHalf className="absolute top-0 right-0 size-full fill-black stroke-black dark:invert" />
          <StarHalf className="absolute top-0 left-0 size-full -scale-x-100 fill-black/15 stroke-black/15 dark:invert" />
        </div>,
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`product-detail-8-star-empty-${i}`}
          className="size-3.5 fill-black/15 stroke-black/15 dark:invert"
        />,
      );
    }

    return stars;
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-0.5">{renderStars()}</div>
        <Button
          variant="link"
          className="h-fit p-0 leading-none font-normal text-muted-foreground"
        >
          {totalReviewers} Reviewers
        </Button>
      </div>
    </div>
  );
};

const formSchema = z.object({
  color: z.string(),
  size: z.string(),
});

const ProductForm = ({ hinges, form, onSubmit, stockInfo }: ProductForm) => {
  const sizeHinges = hinges?.size;
  const colorHinges = hinges?.color;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-7"
      >
        {colorHinges && (
          <FormField
            control={form.control}
            name={colorHinges.name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ColorRadioGroup
                    field={field}
                    options={colorHinges.options}
                    label={colorHinges.label}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name={sizeHinges.name}
          render={({ field }) => (
            <FormItem>
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

        <StockMessege stockInfo={stockInfo} />
        <div className="flex w-full shrink-0 basis-full flex-col gap-6">
          {stockInfo?.stockStatusCode === "OUT_OF_STOCK" ? (
            <Fragment>
              <Button size="lg">Pre-order</Button>
            </Fragment>
          ) : (
            <Button size="lg">Add to cart</Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

const SizeRadioGroup = ({ options, label, field }: SizeRadioGroupProps) => {
  if (!options) return;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2.5">
        <div className="flex w-full items-baseline justify-between gap-1">
          <h2 className="text-sm leading-[1.8] font-semibold">{label}</h2>
        </div>
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
              <FormItem key={`product-detail-8-size-${index}`}>
                <FormLabel
                  htmlFor={item.id}
                  className="relative flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-md border-1 text-sm leading-snug font-normal shadow-xs has-checked:ring has-data-[disabled=true]:text-muted-foreground has-checked:has-data-[disabled=true]:text-muted-foreground"
                >
                  <RadioGroupItem
                    id={item.id}
                    className="sr-only"
                    value={item.value}
                    aria-label={`Select ${item.label}`}
                    data-disabled={
                      item.stockInfo.stockStatusCode === "OUT_OF_STOCK"
                    }
                  />
                  <div>{item.label}</div>
                  {item.stockInfo.stockStatusCode === "OUT_OF_STOCK" && (
                    <span className="absolute top-0 bottom-0 left-1/2 z-10 block h-full w-0 rotate-45 border-l"></span>
                  )}
                </FormLabel>
              </FormItem>
            ))}
        </RadioGroup>
      </div>
    </div>
  );
};

const ColorRadioGroup = ({ options, label, field }: ColorRadioGroupProps) => {
  const colorRef = useRef<HTMLDivElement>(null);

  const getColorName = (id: string) =>
    options?.find((item) => item.id === id)?.label;

  if (!options) return;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2.5">
        <h2 className="text-sm leading-[1.8] font-semibold">
          {label} <span ref={colorRef} className="text-sm font-normal"></span>
        </h2>
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
              <FormItem key={`product-detail-8-color-${index}`}>
                <FormLabel
                  htmlFor={item.id}
                  data-disabled={
                    item.stockInfo.stockStatusCode === "OUT_OF_STOCK"
                  }
                  onMouseOver={() => {
                    if (colorRef.current) {
                      colorRef.current.innerHTML = item.label;
                    }
                  }}
                  onMouseLeave={() => {
                    if (colorRef.current) {
                      colorRef.current.innerHTML =
                        getColorName(field.value) || "";
                    }
                  }}
                  aria-label={`Select ${item.label}`}
                  className="relative h-16 w-12.5 overflow-hidden rounded-md text-base leading-snug font-normal shadow-xs has-checked:ring-2"
                >
                  <RadioGroupItem
                    id={item.id}
                    className="sr-only"
                    value={item.value}
                    aria-label={`Select ${item.label}`}
                  />
                  <img
                    src={item?.image?.src}
                    alt={item?.image?.alt}
                    className="block size-full object-cover object-center"
                  />
                  {item.stockInfo.stockStatusCode === "OUT_OF_STOCK" && (
                    <span className="absolute top-0 bottom-0 left-1/2 z-10 block h-full w-0 rotate-45 border-l"></span>
                  )}
                </FormLabel>
              </FormItem>
            ))}
        </RadioGroup>
      </div>
    </div>
  );
};

const StockMessege = ({ stockInfo }: StockMessageProps) => {
  if (!stockInfo) return;

  const { stockStatusCode, stockQuantity } = stockInfo;
  const statusColor = STATUS_CONFIG?.[stockStatusCode].color;

  return (
    <div className="inline-flex items-center gap-2.5">
      <p
        className="text-sm leading-[1.4]"
        style={{
          color: `var(--color-${statusColor}-600)`,
        }}
      >
        {stockStatusCode === "LOW_STOCK"
          ? STATUS_CONFIG.LOW_STOCK.getMessage(stockQuantity)
          : STATUS_CONFIG[stockStatusCode].message}
      </p>
    </div>
  );
};

const ServicesList = ({ services }: { services: string[] }) => {
  if (!services) return;

  return (
    <ul className="flex flex-col">
      {services.map((text, index) => (
        <li
          className="flex items-center gap-1.5"
          key={`product-detail-8-service-${index}`}
        >
          <Check className="size-4 stroke-3" />
          <p className="text-sm leading-[1.8]">{text}</p>
        </li>
      ))}
    </ul>
  );
};

const ProductInfoSection = ({ info }: ProductInfoSectionProps) => {
  if (!info) return;

  return (
    <Accordion type="multiple" className="w-full border-t">
      {info.map((item, index) => (
        <AccordionItem
          value={item.title}
          key={`product-detail-8-info-${index}`}
        >
          <AccordionTrigger className="text-sm leading-[1.2] hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-base text-balance">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { ProductDetail8 };
```
