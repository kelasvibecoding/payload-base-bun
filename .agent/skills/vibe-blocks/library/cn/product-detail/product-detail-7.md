# Product Detail 7

## Metadata
- **Category**: Product Detail
- **Objective**: Craft an organic, wellness-focused product detail page for premium serums, emphasizing sustainability and natural ingredients.
- **Use Case**: Natural beauty brands, organic skincare, or eco-conscious lifestyle products.
- **Visual Style**: Soft botanical aesthetic using a combination of "Merriweather" (Serif) for headings and a clean Sans-Serif for density. Incorporates lime-green accents (`bg-lime-200`) and rounded silhouettes (`rounded-[0.875rem]`).
- **Interactivity**: 
    - Sustainability Badge Grid: A dedicated section showcasing value-based icons (Eco-Friendly, Organic, Natural, Ethically Made) with thin stroke styling.
    - Floating Action Button (Mobile): A fixed bottom bar containing the "Add to Cart" button that appears on mobile when the main form scrolls away.
    - Adaptive Thumbnail Sidebar: Vertically stacked thumbnails on desktop that transition to a progress-bar-based indicator on mobile.
    - Progress Bar Carousel (Mobile): A custom multi-segment progress bar at the bottom of the image that tracks carousel navigation.
    - Feature Bullet List: Clean itemization of product benefits using geometric `Circle` markers.
    - Custom Accordion Icons: Replaces default chevron with a synchronized Plus/Minus toggle for product details (Overview, Tips, Ingredients).
    - Status Badging: High-visibility "New" badge in lime-green and a destructive-red "Discount" badge.

## Description
Product Detail 7 is optimized for brands in the "Clean Beauty" and "Wellness" spaces. It balances high-fidelity typography with functional storytelling, dedicating significant space to sustainability icons and product features. The image gallery transitions seamlessly from a sidebar-thumbnail desktop view to a mobile-native experience featuring a custom progress-bar indicator. A key conversion feature is the mobile-only sticky "Add to Cart" button, driven by `IntersectionObserver`, ensuring the purchase action is never more than a tap away. Functional highlights include `PhotoSwipe` integration and `Merriweather` serif headings for a trustworthy, establishment feel.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Circle,
  Flower2,
  Heart,
  Leaf,
  LucideIcon,
  Minus,
  Plus,
  Sprout,
} from "lucide-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { Fragment, useEffect, useRef, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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

interface ProductFeatures {
  features: Array<string>;
}

interface SustainabilitySectionProps {
  sustainability: Array<{
    text: string;
    icon: LucideIcon;
  }>;
}

interface ProductInfoSectionsProps {
  info: Array<{
    title: string;
    content: string;
  }>;
}

interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  discount?: string;
}

interface QuantityProps {
  field: ControllerRenderProps<FormType>;
  max?: number;
  min?: number;
}

interface Hinges {
  label: string;
  id: string;
  name: FieldName;
  min?: number;
  max?: number;
}

interface ProductFormProps {
  availability: boolean;
  hinges: Record<FieldName, Hinges>;
}

type FormType = z.infer<typeof formSchema>;
type FieldName = keyof FormType;

const PRODUCT_DETAILS = {
  brand: "Lunara Botanicals",
  name: "Radiant Glow Serum",
  new: true,
  availability: true,
  price: {
    regular: 55,
    currency: "USD",
    sale: 46,
    discount: "-15%",
  },
  hinges: {
    quantity: {
      label: "Quantity",
      id: "quantity",
      name: "quantity",
      min: 1,
      max: 99,
    },
  } as Record<FieldName, Hinges>,
  features: [
    "Boosts skin radiance and hydration",
    "Enriched with vitamin C and hyaluronic acid",
    "Suitable for all skin types, including sensitive",
    "Dermatologist-tested and non-comedogenic",
    "Absorbs quickly with no sticky residue",
  ],
  sustainability: [
    {
      text: "Eco-Friendly",
      icon: Leaf,
    },
    {
      text: "Organic",
      icon: Flower2,
    },
    {
      text: "Natural",
      icon: Sprout,
    },
    {
      text: "Ethically Made",
      icon: Heart,
    },
  ],
  accordion: [
    {
      title: "Product Overview",
      content:
        "Lunara's Radiant Glow Serum is a lightweight, fast-absorbing facial serum designed to brighten, hydrate, and even out skin tone. Formulated with 10% vitamin C and botanical extracts, it’s perfect for restoring a natural glow while protecting against environmental stressors.",
    },
    {
      title: "Application Tips",
      content:
        "Apply 2–3 drops to clean, dry skin each morning. Gently massage into the face and neck before moisturizer or sunscreen. For external use only.",
    },
    {
      title: "Full Ingredient List",
      content:
        "Aqua (Water), Ascorbic Acid (Vitamin C), Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Glycerin, Niacinamide, Tocopherol (Vitamin E), Citrus Aurantium Dulcis (Orange) Peel Oil, Potassium Sorbate, Sodium Benzoate.",
    },
    {
      title: "Shipping & Returns",
      content:
        "Standard shipping is free on orders over $50. Returns are accepted within 30 days of purchase for unopened and unused products. Visit our website for full return details.",
    },
  ],
  images: [
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-3.jpg 2160w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-3.jpg",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-1.jpg",
      sizes: "(min-width: 2160px) 2160px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
      width: 2160,
      height: 2700,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/brittney-weng-CSquI0aw_Rg-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/brittney-weng-CSquI0aw_Rg-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/brittney-weng-CSquI0aw_Rg-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/brittney-weng-CSquI0aw_Rg-unsplash-3.jpg",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/brittney-weng-CSquI0aw_Rg-unsplash-1.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
      width: 2400,
      height: 3000,
    },
    {
      srcset:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/kadarius-seegars-Mxy5gokl8mE-unsplash-3.jpg 2400w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/kadarius-seegars-Mxy5gokl8mE-unsplash-2.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/kadarius-seegars-Mxy5gokl8mE-unsplash-1.jpg 640w",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/kadarius-seegars-Mxy5gokl8mE-unsplash-3.jpg",
      thumbnail:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/kadarius-seegars-Mxy5gokl8mE-unsplash-1.jpg",
      sizes: "(min-width: 2400px) 2400px, (min-width: 1920px) 1920px, 100vw",
      alt: "",
      width: 2400,
      height: 3600,
    },
  ],
};

interface ProductDetail7Props {
  className?: string;
}

const ProductDetail7 = ({ className }: ProductDetail7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="mx-auto w-full max-w-375 px-4 font-sans">
        <div className="relative flex w-full flex-col items-start justify-center gap-6 md:flex-row md:gap-8 xl:gap-20">
          <div className="top-4 w-full flex-1 self-start md:sticky lg:top-32">
            <ProductImages
              images={PRODUCT_DETAILS.images}
              galleryID="gallery-7"
            />
          </div>
          <div className="w-full shrink-0 md:w-[42%]">
            <div className="flex flex-col gap-1">
              <div className="text-xs leading-normal tracking-widest text-muted-foreground uppercase">
                {PRODUCT_DETAILS.brand}
              </div>
              <h1 className="font-serif text-[2rem] leading-tight">
                {PRODUCT_DETAILS.name}
              </h1>
            </div>
            <div className="py-3">
              <Price {...PRODUCT_DETAILS.price} />
            </div>
            <ProductForm
              hinges={PRODUCT_DETAILS.hinges}
              availability={PRODUCT_DETAILS.availability}
            />
            <ProductFeatures features={PRODUCT_DETAILS.features} />
            <SustainabilitySection
              sustainability={PRODUCT_DETAILS.sustainability}
            />
            <ProductInfoSections info={PRODUCT_DETAILS.accordion} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Price = ({ regular, sale, currency, discount }: PriceProps) => {
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
    <div className="flex flex-wrap items-center gap-2.5">
      {sale ? (
        <div
          data-sale={!!sale}
          aria-label="sale price"
          className="text-xl leading-normal font-medium text-red-600"
        >
          {formatCurrency(sale, currency)}
        </div>
      ) : null}
      <div
        data-sale={!!sale}
        aria-label="regular price"
        className="text-xl leading-normal font-medium data-[sale=true]:font-normal data-[sale=true]:text-muted-foreground data-[sale=true]:line-through"
      >
        {formatCurrency(regular, currency)}
      </div>
      {discount && <Badge variant="destructive">{discount}</Badge>}
    </div>
  );
};

const ProductImages = ({ images, galleryID }: ProductImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLUListElement>(null);
  const isDesktop = useMediaQuery("(width >= 900px)");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      bgOpacity: 1,
      wheelToZoom: true,
      mainClass:
        "[&>div:first-child]:!bg-background [&_*]:!text-foreground [&_*]:!text-shadow-none",
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
    <Fragment>
      <div className="flex w-full items-start justify-between gap-4">
        <ul
          ref={thumbnailRef}
          className="hidden w-20 shrink-0 grow-0 flex-col gap-2 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex [::-webkit-scrollbar]:hidden"
        >
          {images.map((img, index) => (
            <li
              className="w-full shrink-0"
              key={`product-detail-7-thumbnail-${index}`}
            >
              <button
                onClick={() => api?.scrollTo(index)}
                data-state={index + 1 === current ? "active" : "inactive"}
                type="button"
                className="relative block size-20 overflow-hidden rounded-[0.875rem] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:block after:size-full after:rounded-[0.875rem] after:inset-ring-2 after:inset-ring-transparent after:transition-shadow after:duration-200 after:content-[''] data-[state=active]:after:inset-ring-current"
              >
                <img
                  src={img.thumbnail}
                  alt={img.alt}
                  className="block size-full object-cover object-center"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full md:max-w-2xl">
          <div className="group/product-photos relative h-fit w-full">
            <Badge className="absolute top-4 left-4 z-10 rounded-full bg-lime-200 px-4 py-1 text-base leading-snug text-black">
              New
            </Badge>
            <div className="pswp-gallery" id={galleryID}>
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent className="-ml-2">
                  {images.map((img, index) => (
                    <CarouselItem
                      key={`product-detail-7-image-${index}`}
                      className="w-full pl-2"
                    >
                      <AspectRatio
                        ref={previewRef}
                        ratio={0.8}
                        className="w-full overflow-hidden rounded-[0.875rem] bg-muted"
                      >
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
                            className="block size-full rounded-[0.875rem] object-cover object-center"
                          />
                        </a>
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden opacity-0 group-hover/product-photos:opacity-100 md:block">
                  {current > 1 && (
                    <CarouselPrevious className="left-0 ml-6 size-11 dark:bg-white dark:hover:bg-white dark:[&>svg]:stroke-black" />
                  )}
                  {current < images.length && (
                    <CarouselNext className="right-0 mr-6 size-11 dark:bg-white dark:hover:bg-white dark:[&>svg]:stroke-black" />
                  )}
                </div>
              </Carousel>
            </div>
            <Badge
              className="absolute bottom-4 left-4 rounded-full bg-background py-1.5 text-xs xl:hidden"
              variant="secondary"
            >
              {current || 1} / {images.length}
            </Badge>
          </div>
          <div className="relative my-2 h-[0.1875rem] w-full overflow-hidden rounded-[0.625rem] bg-muted xl:hidden">
            <div
              style={{
                width: `calc(100% / ${images.length})`,
                transform: `translateX(calc(100%*${current - 1}))`,
              }}
              className="absolute h-full bg-foreground transition-transform duration-300"
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const formSchema = z.object({
  quantity: z.number().min(1),
});

const ProductForm = ({ availability, hinges }: ProductFormProps) => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const stickyButtonWrapperRef = useRef<HTMLDivElement>(null);
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (stickyButtonWrapperRef.current) {
            stickyButtonWrapperRef.current.classList.toggle(
              "opacity-0",
              entry.isIntersecting,
            );
          }
        });
      },
      {
        threshold: 0.02,
      },
    );
    if (submitButtonRef.current) {
      observer.observe(submitButtonRef.current);
    }
  }, []);

  const quantityHinges = hinges?.quantity;

  return (
    <Form {...form}>
      <form
        className="flex flex-wrap items-center gap-4 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Quantity
                  field={field}
                  min={quantityHinges.min}
                  max={quantityHinges.max}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          size="lg"
          type="submit"
          className="flex-1"
          ref={submitButtonRef}
          disabled={!availability}
        >
          {availability ? "Add to cart" : "Sold Out"}
        </Button>
        {availability && (
          <div
            ref={stickyButtonWrapperRef}
            className="fixed bottom-0 left-0 z-10 w-full bg-background p-4 opacity-0 transition-opacity duration-300 md:hidden"
          >
            <Button
              size="lg"
              type="submit"
              className="w-full"
              disabled={!availability}
            >
              Add to cart
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};

const Quantity = ({ field, max, min }: QuantityProps) => {
  return (
    <div className="flex h-10 w-32 shrink-0 items-center justify-between overflow-hidden rounded-md border shadow-xs">
      <Button
        onClick={() =>
          field.onChange(Math.max(min || 1, Number(field.value || 1) - 1))
        }
        variant="ghost"
        type="button"
        size="icon"
        className="size-10 shrink-0 rounded-none"
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
        min={min ? min : 1}
        max={max ? max : 99}
        className="h-10 w-full [appearance:textfield] rounded-none border-0 !bg-background px-1 text-center shadow-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        onClick={() =>
          field.onChange(Math.min(max || 99, Number(field.value || 1) + 1))
        }
        variant="ghost"
        type="button"
        size="icon"
        className="size-10 shrink-0 rounded-none"
      >
        <Plus />
      </Button>
    </div>
  );
};

const ProductFeatures = ({ features }: ProductFeatures) => {
  if (!features) return;
  return (
    <ul className="mt-2 mb-6 flex flex-col gap-1">
      {features.map((text, index) => (
        <li
          className="flex items-center gap-3"
          key={`product-detail-7-features-${index}`}
        >
          <Circle className="size-1 fill-foreground stroke-foreground" />
          {text}
        </li>
      ))}
    </ul>
  );
};

const SustainabilitySection = ({
  sustainability,
}: SustainabilitySectionProps) => {
  if (!sustainability) return;
  return (
    <div className="flex flex-wrap gap-10 pt-1 pb-8">
      {sustainability.map((item, index) => (
        <div
          key={`product-detail-7-sustainability-${index}`}
          className="flex flex-col flex-wrap items-center gap-1"
        >
          <item.icon className="size-9 stroke-foreground stroke-1" />
          <div className="text-xs font-light">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

const ProductInfoSections = ({ info }: ProductInfoSectionsProps) => {
  if (!info) return;

  return (
    <Accordion type="multiple" className="w-full border-t">
      {info.map((item, index) => (
        <AccordionItem
          value={`product-info-${index}`}
          key={`product-detail-7-info-${index}`}
        >
          <AccordionTrigger className="group/trigger py-5 font-merriweather text-xl hover:no-underline [&>svg:last-of-type]:hidden">
            {item.title}
            <div className="relative size-5">
              <Plus className="absolute top-0 left-0 size-full stroke-1 transition-opacity duration-300 group-data-[state=open]/trigger:opacity-0" />
              <Minus className="absolute top-0 left-0 size-full stroke-1 opacity-0 transition-opacity duration-300 group-data-[state=open]/trigger:opacity-100" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base text-balance">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { ProductDetail7 };
```
