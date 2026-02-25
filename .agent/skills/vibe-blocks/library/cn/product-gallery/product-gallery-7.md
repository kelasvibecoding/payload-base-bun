# Product Gallery 7

## Metadata
- **Category**: Product Gallery
- **Objective**: Create a wellness-focused image gallery that combines organic visual cues with modern navigation elements for a premium skincare or health product experience.
- **Use Case**: Skincare brands, supplement companies, or organic food retailers where product purity and detail are key.
- **Visual Style**: Clean, soft, and intentional. Uses a `bg-lime-200` badge and subtle `rounded-[0.875rem]` corners. Implements a custom mobile-first progress bar that feels tactile and modern.
- **Interactivity**: 
    - Progress Bar Indicator: A horizontal progress bar on mobile that uses `translateX` to visually track the user's position through the gallery.
    - Contextual Thumbnails: A desktop-specific thumbnail sidebar that remains synchronized with the main carousel via the `CarouselApi`.
    - Dynamic Visibility: Carousel navigation buttons (`Previous`/`Next`) are context-aware, only appearing when there is content to scroll to, and are styled specifically for high visibility in both light and dark modes.
    - Deep Zoom Lightbox: Integration with `PhotoSwipeLightbox` allowing users to inspect product textures and ingredient labels in high resolution.
    - Responsive Metadata: Mobile users see a numerical index badge (`current / total`) to ensure they stay oriented during fast swiping.

## Description
Product Gallery 7 is tailored for products that benefit from a "clean" and "organic" presentation layer. It features a unique mobile progress indicator that provides a more sophisticated feedback loop than traditional dots. The desktop layout is equally thoughtful, utilizing a thumbnail sidebar for quick jumping between shots. It includes advanced responsiveness logic, using `ResizeObserver` and `useMediaQuery` to ensure that even as browser windows are manipulated, the layout remains perfectly balanced and visually appealing.

## Source Code

```tsx
"use client";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useRef, useState } from "react";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProductImages = {
  srcset: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  thumbnail: string;
}[];

interface ProductGallery7Props {
  images: ProductImages;
  galleryID: string;
  className?: string;
}

const PRODUCT_IMAGES: ProductImages = [
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
];

const ProductGallery7 = ({
  images = PRODUCT_IMAGES,
  galleryID = "ProductGallery4",
  className,
}: ProductGallery7Props) => {
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
    <section className={cn("w-full max-w-193", className)}>
      <div className="flex w-full items-start justify-between gap-4">
        <ul
          ref={thumbnailRef}
          className="hidden w-20 shrink-0 grow-0 flex-col gap-2 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex [::-webkit-scrollbar]:hidden"
        >
          {images.map((img, index) => (
            <li
              className="w-full shrink-0"
              key={`product-gallery-7-thumbnail-${index}`}
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
                      key={`product-gallery-7-image-${index}`}
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
    </section>
  );
};

export { ProductGallery7 };
```
