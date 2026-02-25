# Product Gallery 3

## Metadata
- **Category**: Product Gallery
- **Objective**: Provide a clean, impactful image gallery with an emphasis on mobile-first navigation and sophisticated desktop grid layouts.
- **Use Case**: Fashion brands or lifestyle products where a large featured image needs to be paired with secondary detail shots.
- **Visual Style**: Minimalist and high-contrast. Uses sharp aspect ratios (`ratio={0.8}`) and deep-black indicators on mobile to maintain a premium feel.
- **Interactivity**: 
    - Full-Screen Lightbox: Integrated `PhotoSwipeLightbox` with custom controls (Close, Indicator, Pagination) registered via the `uiRegister` API for a brand-consistent experience.
    - Contextual Layout: A responsive grid that expands the first image to `col-span-2` on larger screens while collapsing into a dots-paginated carousel on mobile.
    - Synchronized State: Continuous sync between the `PhotoSwipe` active index and the background `Carousel` to prevent visual disconnects.
    - Custom Touch Indicators: Bespoke dot-pagination for mobile users providing clear feedback on gallery depth.

## Description
Product Gallery 3 is optimized for high-impact visual storytelling. It features a robust desktop grid that prioritizes a "Lead" image while maintaining accessibility to secondary photos. The component is particularly strong on mobile, where it replaces navigation chevrons with a sleek dot-based pagination system, maximizing horizontal screen space. The inclusion of a highly customized `PhotoSwipe` integration ensures that the deep-zoom experience feels like a native part of the application rather than a third-party plugin.

## Source Code

```tsx
"use client";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useCallback, useEffect, useRef, useState } from "react";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ProductImages = {
  srcset: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}[];

interface ProductGallery3Props {
  images: ProductImages;
  galleryID: string;
  className?: string;
}

const PRODUCT_IMAGES: ProductImages = [
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-1.jpg 640w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg",
    alt: "",
    width: 1920,
    height: 2880,
    sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 640w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg",
    alt: "",
    width: 1920,
    height: 2880,
    sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg 1920w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-2.jpg 1280w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-1.jpg 640w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg",
    alt: "",
    width: 1920,
    height: 2880,
    sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
  },
];

const ProductGallery3 = ({
  images = PRODUCT_IMAGES,
  galleryID = "ProductGallery3",
  className,
}: ProductGallery3Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
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
    const buttonClassName = cn(
      buttonVariants({
        variant: "outline",
        size: "icon",
        className: "rounded-full",
      }),
    );
    const indicatorClassName = cn(badgeVariants({ variant: "secondary" }));

    lightbox.on("uiRegister", () => {
      if (lightbox?.pswp?.ui) {
        lightbox.pswp.ui.registerElement({
          name: "custom-close-btn",
          order: 10,
          isButton: false,
          appendTo: "root",
          className: "absolute top-5 right-5",
          html: `
              <button type="button" id="pswp-close" class="${buttonClassName}">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
            `,
          onInit: (el, pswp) => {
            el.querySelector("#pswp-close")?.addEventListener("click", () =>
              pswp.close(),
            );
          },
        });
      }

      if (lightbox?.pswp?.ui) {
        lightbox.pswp.ui.registerElement({
          name: "custom-indicator-btn",
          order: 10,
          isButton: false,
          appendTo: "root",
          className: "absolute top-5 left-5",
          html: `
              <div id="pswp-indicator" class="${indicatorClassName} h-8.5 px-4 !rounded-full">
              </div>
            `,
          onInit: (el, pswp) => {
            const indicatorElem = el.querySelector("#pswp-indicator");
            let prevIndex = -1;

            pswp.on("change", () => {
              prevIndex = pswp.currIndex;
              if (indicatorElem) {
                indicatorElem.innerHTML = `${prevIndex + 1} / ${pswp.getNumItems()}`;
              }
            });
          },
        });
      }

      if (lightbox?.pswp?.ui) {
        lightbox.pswp.ui.registerElement({
          name: "custom-next-prev-btns",
          order: 10,
          isButton: false,
          appendTo: "root",
          className: "absolute top-1/2 inset-x-0 -translate-y-1/2",
          html: `
            <div class="flex items-center justify-between px-4">
              <button id="pswp-prev" class="${buttonClassName}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button id="pswp-next" class="${buttonClassName}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
              
            `,
          onInit: (el, pswp) => {
            el.querySelector("#pswp-prev")?.addEventListener("click", () =>
              pswp.prev(),
            );
            el.querySelector("#pswp-next")?.addEventListener("click", () =>
              pswp.next(),
            );
          },
        });
      }
    });

    return () => lightbox.destroy();
  }, [galleryID]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (lightboxRef.current && api) {
      lightboxRef.current.on("change", () => {
        api?.scrollTo(lightboxRef.current?.pswp?.currIndex || 0);
      });
    }
  }, [api, current]);

  if (!images) return;

  return (
    <section className={cn("max-w-228", className)}>
      <div id={galleryID} className="flex flex-col gap-5">
        <Carousel
          setApi={setApi}
          opts={{
            breakpoints: {
              "(min-width: 768px)": {
                active: false,
              },
            },
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0 grid-cols-2 md:grid">
            {images.map((img, index) => (
              <CarouselItem
                className="pl-0 md:first:col-span-2"
                key={`product-gallery-3-image-${index}`}
              >
                <AspectRatio ratio={0.8} className="overflow-hidden">
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
                      sizes={img.sizes}
                      className="block size-full object-cover object-center"
                    />
                  </a>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:hidden">
            <ol className="my-3 flex items-center justify-center">
              {images.map((_, index) => (
                <button
                  onClick={() => api?.scrollTo(index)}
                  data-current={index + 1 === current}
                  key={`product-detail-3-image-indicator-${index}`}
                  className="flex size-4 data-[current=true]:[&>span]:bg-primary"
                >
                  <span className="m-auto block size-2 rounded-full bg-primary/50"></span>
                </button>
              ))}
            </ol>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { ProductGallery3 };
```
