# Product Detail 5

## Metadata
- **Category**: Product Detail
- **Objective**: Deliver a Western-inspired product detail page with detailed stock messaging, a comprehensive size conversion chart, and a high-end image gallery.
- **Use Case**: Western wear, tailored apparel, or high-end boutiques where international size conversion is critical.
- **Visual Style**: Light, airy aesthetic with uppercase " Dakota WSTN" branding. Thin typography, clean lines, and an animated "Pulse" stock indicator.
- **Interactivity**: 
    - Pulse Stock Status: Dynamic indicators with a `ping` animation that change color (`green` for in stock, `amber` for low stock) and display contextual messages.
    - Modal Size Chart: Integrated `Dialog` containing a `Table` with US, UK, and European size conversions.
    - Custom Gallery Toolbar: `PhotoSwipe` extension with a centered floating toolbar for navigation and closing.
    - Synchronized Slide Indicators: Dot-style navigation that scales and highlights active slides.
    - Smart "Sold Out" Logic: Disables CTA buttons and applies a visual diagonal strike-through on radio options when a variant is out of stock.
    - Dynamic Image Layout: Left-aligned thumbnail strip that hides on mobile, replaced by a center-aligned carousel.

## Description
Product Detail 5 is built for detail-oriented apparel brands. It excels in transparency, providing real-time stock feedback via an eye-catching pulse animation. The inclusion of a robust size-chart dialog makes it ideal for global shipping strategies. The visual design is intentionally minimalist to let the western-tailoring photography shine, utilizing wide gutters and uppercase font treatments for a "Dakota" heritage feel. Technologically, it leverages `ResizeObserver` for responsive height adjustments and `PhotoSwipe` for a customized modal gallery experience.

## Source Code

```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ruler, ZoomIn } from "lucide-react";
import PhotoSwipeLightbox, { PhotoSwipe } from "photoswipe/lightbox";
import { useEffect, useMemo, useRef, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type StockStatusCode = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";

interface StockInfo {
  stockStatusCode: StockStatusCode;
  stockQuantity?: number;
}

interface StockMessageProps {
  stockInfo?: StockInfo;
}

type sizeChartData = Array<{
  label: string;
  usa: string;
  uk: string;
  europe: string;
}>;

type Option = {
  id: string;
  label: string;
  stockInfo: StockInfo;
  value: string;
};

interface Hinges {
  label: string;
  name: FieldName;
  id: string;
  sizeChart?: sizeChartData;
  options?: Option[];
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
  text?: string;
}

interface SizeChartProps {
  data?: sizeChartData;
}

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

interface ProductForm {
  hinges: Record<FieldName, Hinges>;
  selected: FormType;
}

interface ProductImagesProps {
  images: Array<{
    srcset: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
    thumbnail: string;
  }>;
  galleryID: string;
}

const PRODUCT_DETAILS = {
  id: "1",
  name: "Dakota WSTN Embroidered Horse Shirt",
  description:
    "Channel timeless Western charm with a feminine twist in this beautifully tailored button-up shirt. Featuring delicate horse-inspired detailing, a flattering silhouette, and classic button closures, this piece blends rugged spirit with everyday elegance. Perfect for everything from a countryside getaway to a city stroll, it's designed for women who love a touch of the wild with their wardrobe staples.",
  price: {
    regular: 59,
    currency: "USD",
    sale: 49,
  },
  size: "medium",
  color: "white",
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-3.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-txJ1QCOaiso-unsplash-1.jpg",
      alt: "",
      width: 2400,
      height: 1600,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-3.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-ssLfwjxKlfE-unsplash-1.jpg",
      alt: "",
      width: 2400,
      height: 3600,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-3.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-uNolnOrSQi8-unsplash-1.jpg",
      alt: "",
      width: 2400,
      height: 3598,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-jOBjbCCru98-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-jOBjbCCru98-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-jOBjbCCru98-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-jOBjbCCru98-unsplash-3.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-jOBjbCCru98-unsplash-1.jpg",
      alt: "",
      width: 2400,
      height: 3600,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-cFeX9z3STS4-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-cFeX9z3STS4-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-cFeX9z3STS4-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-cFeX9z3STS4-unsplash-3.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/rydale-clothing-cFeX9z3STS4-unsplash-1.jpg",
      alt: "",
      width: 2400,
      height: 3600,
    },
  ],
  hinges: {
    size: {
      label: "Size",
      id: "size",
      name: "size" as const,
      sizeChart: [
        {
          usa: "0",
          label: "Extra Small",
          uk: "4",
          europe: "32",
        },
        {
          usa: "4",
          label: "Small",
          uk: "6",
          europe: "34",
        },
        {
          usa: "6",
          label: "Small",
          uk: "8",
          europe: "36",
        },
        {
          usa: "8",
          label: "Medium",
          uk: "10",
          europe: "38",
        },
        {
          usa: "10",
          label: "Large",
          uk: "12",
          europe: "40",
        },
      ],
      options: [
        {
          id: "small",
          value: "small",
          label: "S",
          stockInfo: {
            stockStatusCode: "LOW_STOCK" as StockStatusCode,
            stockQuantity: 10,
          },
        },
        {
          id: "medium",
          value: "medium",
          label: "M",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "large",
          value: "large",
          label: "L",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
      ],
    },
    color: {
      label: "Color",
      id: "color",
      name: "color" as const,
      options: [
        {
          id: "white",
          value: "white",
          label: "White",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "gray",
          value: "gray",
          label: "Gray",
          stockInfo: {
            stockStatusCode: "IN_STOCK" as StockStatusCode,
          },
        },
        {
          id: "black",
          value: "black",
          label: "Black",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK" as StockStatusCode,
          },
        },
      ],
    },
  } as Record<FieldName, Hinges>,
};

const STATUS_CONFIG = {
  IN_STOCK: {
    color: "green",
    message: "In stock, ready to ship",
  },
  LOW_STOCK: {
    color: "amber",
    getMessage: (qty?: number) => `Low stock - ${qty ?? "a few"} items left`,
  },
};

interface ProductDetail5Props {
  className?: string;
}

const ProductDetail5 = ({ className }: ProductDetail5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="mx-auto w-full max-w-[93.75rem] lg:px-12">
        <div className="relative grid w-full grid-cols-1 justify-between gap-2.5 lg:grid-cols-5 lg:gap-15.5">
          <div className="top-5 self-start lg:sticky lg:col-span-3">
            <ProductImages
              images={PRODUCT_DETAILS.images}
              galleryID="gallery-5"
            />
          </div>
          <div className="justify-self-center lg:col-span-2">
            <div className="flex max-w-150 flex-col gap-6 px-4 lg:max-w-full lg:px-0">
              <h1 className="text-3xl leading-tight font-light uppercase lg:text-4xl">
                {PRODUCT_DETAILS.name}
              </h1>
              <Price {...PRODUCT_DETAILS.price} />
              <Separator />
              <ProductForm
                hinges={PRODUCT_DETAILS.hinges}
                selected={{
                  size: PRODUCT_DETAILS.size,
                  color: PRODUCT_DETAILS.color,
                }}
              />
              <p className="text-muted-foreground">
                {PRODUCT_DETAILS.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductImages = ({ images, galleryID }: ProductImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLUListElement>(null);
  const isDesktop = useMediaQuery("(width >= 1024px)");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      bgOpacity: 1,
      wheelToZoom: true,
      arrowPrev: false,
      arrowNext: false,
      close: false,
      zoom: false,
      counter: false,
      mainClass: "[&>div:first-child]:!bg-background",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    lightboxRef.current = lightbox;

    lightbox.on("uiRegister", () => {
      if (lightbox?.pswp?.ui) {
        lightbox.pswp.ui.registerElement({
          name: "custom-toolbar",
          order: 10,
          isButton: false,
          appendTo: "root",
          className:
            "absolute bottom-7.5 left-1/2 transform -translate-x-1/2 z-50 flex gap-3 items-center gap-7 animate-fade-in",
          html: `
        <button id="pswp-prev" class=" !bg-white flex !size-12 border text-white p-2 rounded-full">
        <svg class="stroke-black m-auto size-6 stroke-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button id="pswp-close" class=" !bg-white flex !size-15.5 border text-white p-2 rounded-full">
        <svg class="stroke-black m-auto size-7.5 stroke-1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
        <button id="pswp-next" class=" !bg-white flex !size-12 border text-white p-2 rounded-full">
        <svg class="stroke-black m-auto size-6 stroke-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      `,
          onInit: (el, pswp) => {
            el.querySelector("#pswp-prev")?.addEventListener("click", () =>
              pswp.prev(),
            );
            el.querySelector("#pswp-next")?.addEventListener("click", () =>
              pswp.next(),
            );
            el.querySelector("#pswp-close")?.addEventListener("click", () =>
              pswp.close(),
            );

            (
              pswp as PhotoSwipe & { customToolbarEl?: HTMLElement }
            ).customToolbarEl = el;
          },
        });
      }
    });

    lightbox.on("close", () => {
      const pswp = lightbox.pswp as PhotoSwipe & {
        customToolbarEl?: HTMLElement;
      };
      if (pswp?.customToolbarEl) {
        pswp.customToolbarEl.remove();
        pswp.customToolbarEl = undefined;
      }
    });

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
  }, [api, current]);

  useEffect(() => {
    if (!previewRef.current || !thumbnailRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (!isDesktop && thumbnailRef.current) {
        thumbnailRef.current.style.height = `${entry.contentRect.height}px`;
      }
    });

    if (!isDesktop) {
      observer.observe(previewRef.current);
    }

    return () => observer.disconnect();
  }, [isDesktop]);

  if (!images) return;

  return (
    <div className="flex w-full items-start gap-4">
      <ul
        ref={thumbnailRef}
        className="hidden shrink-0 grow-0 flex-col gap-4.5 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:flex [::-webkit-scrollbar]:hidden"
      >
        {images.map((img, index) => (
          <li
            className="w-full shrink-0 grow-0"
            key={`product-detail-5-image-thumbnail-${index}`}
          >
            <button
              onClick={() => api?.scrollTo(index)}
              data-state={index + 1 === current ? "active" : "inactive"}
              type="button"
              className="relative block aspect-[0.76] w-20 overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-10 after:block after:size-full after:inset-ring-2 after:inset-ring-transparent after:transition-shadow after:duration-200 after:content-[''] data-[state=active]:after:inset-ring-current"
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
      <div className="w-full">
        <div
          id={galleryID}
          className="group/product-photos relative h-fit w-full"
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center", startIndex: 0 }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {images.map((img, index) => (
                <CarouselItem
                  key={`product-detail-5-image-${index}`}
                  className="w-full max-w-[75%] pl-1 lg:max-w-full"
                >
                  <AspectRatio
                    ref={previewRef}
                    ratio={0.8}
                    className="w-full overflow-hidden bg-muted"
                  >
                    <a
                      href={img.src}
                      data-pswp-width={img.width}
                      data-pswp-height={img.height}
                      data-pswp-srcset={img.srcset}
                      target="_blank"
                      rel="noreferrer"
                      data-cropped="true"
                    >
                      <img
                        srcSet={img.srcset}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes={img.sizes}
                        className="block size-full object-cover object-center"
                      />
                      {index + 1 === current ? (
                        <Badge
                          className="pointer-events-none absolute right-2.5 bottom-2.5 size-8.5 rounded-full bg-background p-1.5 text-xs lg:hidden"
                          variant="secondary"
                        >
                          <ZoomIn className="!size-6.5" />
                        </Badge>
                      ) : null}
                    </a>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:hidden">
          <ol className="my-2.5 flex items-center justify-center gap-0.5">
            {images.map((_, index) => (
              <button
                onClick={() => api?.scrollTo(index)}
                data-current={index + 1 === current}
                key={`product-detail-5-image-indicator-${index}`}
                className="block size-4 data-[current=true]:[&>span]:scale-150 data-[current=true]:[&>span]:bg-primary"
              >
                <span className="block size-1.5 rounded-full bg-primary/50"></span>
              </button>
            ))}
          </ol>
        </div>
      </div>
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
    <div className="flex items-start gap-2">
      {sale && (
        <div
          data-sale={!!sale}
          aria-label="sale price"
          className="text-lg leading-tight"
        >
          {formatCurrency(sale, currency)}
        </div>
      )}
      <div
        data-sale={!!sale}
        aria-label="regular price"
        className="text-lg leading-tight data-[sale=true]:line-through"
      >
        {formatCurrency(regular, currency)}
      </div>
    </div>
  );
};

const formSchema = z.object({
  color: z.string(),
  size: z.string(),
});

const ProductForm = ({ hinges, selected }: ProductForm) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: selected.color,
      size: selected.size,
    },
  });

  const sizeHinges = hinges?.size;
  const colorHinges = hinges?.color;

  const sizeValue = form.watch("size");
  const stockInfo = useMemo(() => {
    return sizeHinges?.options?.find((item) => item.value === sizeValue)
      ?.stockInfo;
  }, [sizeHinges?.options, sizeValue]);

  const isOutOfStock = stockInfo?.stockStatusCode === "OUT_OF_STOCK";

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-7"
      >
        {sizeHinges && (
          <FormField
            control={form.control}
            name={sizeHinges.name}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel
                    asChild
                    className="font-light text-muted-foreground"
                  >
                    <h2>{sizeHinges.label}</h2>
                  </FormLabel>
                  <SizeChart data={sizeHinges.sizeChart} />
                </div>
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
        {colorHinges && (
          <FormField
            control={form.control}
            name={colorHinges.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild className="font-light text-muted-foreground">
                  <h2>{colorHinges.label}</h2>
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
        <StockMessege stockInfo={stockInfo} />
        <div className="flex flex-col gap-2.5">
          <Button variant="outline" size="lg" disabled={isOutOfStock}>
            {isOutOfStock ? "Sold Out" : "Add to cart"}
          </Button>
          {!isOutOfStock && <Button size="lg">Buy it now</Button>}
        </div>
      </form>
    </Form>
  );
};

const StatusDot = ({ color }: { color: string }) => (
  <span className="relative size-6">
    <span
      style={{
        backgroundColor: `var(--color-${color}-600)`,
      }}
      className="absolute top-1/2 left-1/2 block size-2 -translate-1/2 animate-ping rounded-full opacity-75"
    />
    <span
      style={{
        backgroundColor: `var(--color-${color}-500)`,
      }}
      className="absolute top-1/2 left-1/2 block size-2 -translate-1/2 rounded-full"
    />
  </span>
);

const StockMessege = ({ stockInfo }: StockMessageProps) => {
  if (!stockInfo) return;

  const { stockStatusCode, stockQuantity } = stockInfo;

  if (stockStatusCode === "IN_STOCK" || stockStatusCode === "LOW_STOCK") {
    return (
      <div className="flex items-center gap-2.5">
        <StatusDot color={STATUS_CONFIG[stockStatusCode].color} />
        <p className="text-base leading-[1.4] font-light">
          {stockStatusCode === "IN_STOCK"
            ? STATUS_CONFIG.IN_STOCK.message
            : STATUS_CONFIG.LOW_STOCK.getMessage(stockQuantity)}
        </p>
      </div>
    );
  }

  return null;
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
      className="flex w-full flex-wrap gap-2"
    >
      {options &&
        options.map((item, index) => (
          <FormItem key={`product-detail-5-input-${index}-${id}`}>
            <FormLabel
              htmlFor={item.id}
              className="relative h-9 items-center justify-center rounded-md border-1 px-4 py-2 font-normal shadow-xs ring-primary has-checked:ring has-data-[disabled=true]:text-muted-foreground has-data-[disabled=true]:has-checked:text-muted-foreground"
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
  );
};

const SizeChart = ({ data }: SizeChartProps) => {
  if (!data) return;

  const cellClass = "border px-4 py-2.5 text-base font-light";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="link"
          className="h-fit text-xs text-muted-foreground"
          size="sm"
        >
          — Size chart
          <Ruler />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-100 p-11">
        <DialogHeader className="sr-only">
          <DialogTitle>Size Conversion Guide</DialogTitle>
          <DialogDescription>
            Use this chart to find your equivalent size across US, UK, and EU
            standards.
          </DialogDescription>
        </DialogHeader>

        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead colSpan={2} className={`${cellClass} font-semibold`}>
                United States
              </TableHead>
              <TableHead className={`${cellClass} font-semibold`}>UK</TableHead>
              <TableHead className={`${cellClass} font-semibold`}>
                Europe
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((sizes, index) => (
              <TableRow key={`product-detail-5-row-${index}`}>
                <TableCell className={cellClass}>{sizes.usa}</TableCell>
                <TableCell className={cellClass}>{sizes.label}</TableCell>
                <TableCell className={cellClass}>{sizes.uk}</TableCell>
                <TableCell className={cellClass}>{sizes.europe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export { ProductDetail5 };
```
