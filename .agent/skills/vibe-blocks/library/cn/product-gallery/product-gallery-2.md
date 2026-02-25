# Product Gallery 2

## Metadata
- **Category**: Product Gallery
- **Objective**: Deliver a high-fidelity, interactive gallery experience that pairs deep-zoom capabilities with custom-branded lightbox controls.
- **Use Case**: High-end fashion collections, jewelry showcases, or technical product catalogs where detail and brand consistency are paramount.
- **Visual Style**: Sophisticated and minimalist. Leverages Shadcn UI's `badgeVariants` and `buttonVariants` to create a seamless, cohesive UI for the extended `PhotoSwipe` lightbox.
- **Interactivity**: 
    - Full-Screen Immersion: Deep integration with `PhotoSwipeLightbox` providing hardware-accelerated zoom and pan.
    - Custom Branded UI: Hand-tailored lightbox interface replacing standard controls with Shadcn-styled close, navigation, and pagination elements.
    - Responsive Transition: Automatically switches from a mobile-first carousel with Chevron navigation to a 2-column grid layout on desktop.
    - State Synchronization: Bi-directional sync ensuring the background carousel position always matches the current slide in the lightbox.
    - Interactive Indicators: A `ZoomIn` icon badge on mobile visually communicates the deep-zoom capability to users.

## Description
Product Gallery 2 is built for brands that view product photography as a core part of their storytelling. It moves beyond standard image display by providing a highly customized `PhotoSwipe` experience. The code includes complex UI registration that injects custom SVG-based controls into the lightbox, ensuring that even when a user is in full-screen mode, the brand's aesthetic (driven by Shadcn UI) remains present. The component handles responsive layout shifts elegantly, maintaining a structured grid on large screens while offering a fluid, paginated experience on mobile.

## Source Code

```tsx
"use client";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useCallback, useEffect, useRef, useState } from "react";

import "photoswipe/style.css";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
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

interface ProductGallery2Props {
  images: ProductImages;
  galleryID: string;
  className?: string;
}

const PRODUCT_IMAGES: ProductImages = [
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Professional-Woman-&-Tote-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Professional-Woman-&-Tote-1.png 427w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Professional-Woman-&-Tote-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Elegant-Professional-Look-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Elegant-Professional-Look-1.png 427w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Elegant-Professional-Look-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-1-with-Tote-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-1-with-Tote-1.png 427w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-1-with-Tote-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Fashion-Look-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Fashion-Look-1.png 427w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Fashion-Look-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Leather-Tote-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Leather-Tote-1.png 800w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Leather-Tote-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Tote-Bag-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Tote-Bag-2.png 800w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Tote-Bag-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
  {
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-in-Interior-2.png 800w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-in-Interior-1.png 800w",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Woman-in-Interior-2.png",
    alt: "",
    width: 800,
    height: 1200,
    sizes: "(min-width: 800px) 800px, 100vw",
  },
];

const ProductGallery2 = ({
  galleryID = "ProductGallery2",
  images = PRODUCT_IMAGES,
  className,
}: ProductGallery2Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
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
    <section className={cn("max-w-170", className)}>
      <div className="flex flex-col gap-3" id={galleryID}>
        <Carousel
          setApi={setApi}
          opts={{
            breakpoints: {
              "(min-width: 768px)": {
                active: false,
              },
            },
          }}
        >
          <CarouselContent className="gap-2 md:m-0 md:grid md:grid-cols-2">
            {images.map((img, index) => (
              <CarouselItem
                className="first:col-span-2 md:p-0"
                key={`product-gallery-2-image-${index}`}
              >
                <AspectRatio ratio={1} className="overflow-hidden">
                  <a
                    href={img.src}
                    data-pswp-width={img.width}
                    data-pswp-height={img.height}
                    target="_blank"
                    rel="noreferrer"
                    data-cropped="true"
                    className="hover:cursor-zoom-in"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block size-full object-cover object-center"
                    />
                    <Badge
                      className="pointer-events-none absolute top-3 left-3 size-8 rounded-full bg-background p-1.5 text-xs shadow md:hidden"
                      variant="secondary"
                    >
                      <ZoomIn className="!size-3.5 stroke-muted-foreground" />
                    </Badge>
                  </a>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center gap-2.5 md:hidden">
          <Button
            disabled={!canScrollPrev}
            size="icon"
            variant="ghost"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="size-3 stroke-1" />
          </Button>
          <p className="text-xs text-muted-foreground">
            {current}/{images.length}
          </p>
          <Button
            disabled={!canScrollNext}
            size="icon"
            variant="ghost"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="size-3 stroke-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ProductGallery2 };
```
