# Product Header 2

## Metadata
- **Category**: Product Header
- **Objective**: Minimal Store Hero
- **Use Case**: Single-product showcase.
- **Visual Style**: Large visual focus.
- **Interactivity**: Add to Cart action.

## Description
A comprehensive header for individual product pages, integrating galleries, variants, reviews, and primary purchase actions.

## Source Code
```tsx
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogTrigger,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiSolidStar, BiSolidStarHalf, BiStar } from 'lucide-react';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt?: string;
};

type BreadcrumbProps = {
  url: string;
  title: string;
};

type RatingProps = {
  review: number;
  starsNumber: number;
};

type GalleryDialogProps = {
  images: ImageProps[];
  showAllButton: ButtonProps;
};

type GallerySheetProps = GalleryDialogProps & {
  setSelectedSlide: Dispatch<SetStateAction<number>>;
  selectedSlide: number;
};

type LightboxProps = {
  images: ImageProps[];
  selectedSlide: number;
};

type ListProps = {
  title: string;
};

type TabProps = {
  value: string;
  trigger: string;
  description: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  galleryImages: ImageProps[];
  description: string;
  price: string;
  rating: RatingProps;
  showAllButton: ButtonProps;
  buttons: ButtonProps[];
  options: ButtonProps[];
  quantityInputPlaceholder: string;
  freeShipping: string;
  list: ListProps[];
  defaultTabValue: string;
  tabs: TabProps[];
};

export type ProductHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProductHeader2 = (props: ProductHeader2Props) => {
  const {
    breadcrumbs,
    heading,
    galleryImages,
    price,
    description,
    rating,
    showAllButton,
    buttons,
    options,
    quantityInputPlaceholder,
    freeShipping,
    list,
    tabs,
  } = {
    ...ProductHeader2Defaults,
    ...props,
  };
  const [optionInput, setOptionInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      optionInput,
      quantityInput,
    });
  };
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-8 flex flex-col gap-6 md:mb-12">
          <Breadcrumb className="order-last flex flex-wrap items-center text-sm md:order-none">
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <GalleryDialog images={galleryImages} showAllButton={showAllButton} />
        </div>

        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_16rem] md:gap-x-12 md:gap-y-10 lg:gap-12 xl:grid-cols-[1fr_0.5fr] xl:gap-x-20">
          <div>
            <h1 className="hidden text-4xl font-bold leading-[1.2] md:mb-8 md:block md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p>{description}</p>
            <ul className="mb-6 mt-4 list-inside list-disc md:mb-8">
              {list.map((item, index) => (
                <li key={index} className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  {item.title}
                </li>
              ))}
            </ul>
            <InformationTabs tabs={tabs} />
          </div>
          <div className="order-first md:order-none">
            <h1 className="mb-4 text-4xl font-bold leading-[1.2] md:hidden">{heading}</h1>
            <p className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">{price}</p>
            <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
              <Star rating={rating.starsNumber} />
              <p className="text-sm">{`(${rating.starsNumber} stars) • ${rating.review} reviews`}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <Label className="mb-2">Variant</Label>
                  <div className="flex flex-wrap gap-4">
                    {options.map((option, index) => (
                      <Button
                        key={index}
 className="px-4 py-2"
                        asChild
                        onClick={() => setOptionInput(option.title || "")}
                        {...option}
>
                        <a
                          href={option.url}
 className={clsx({
                            "pointer-events-none opacity-25": option.disabled,
                          })}
>
                          {option.title}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="quantity" className="mb-2">
                    Quantity
                  </Label>
                  <Input
                    type="number"
                    id="quantity"
                    placeholder={quantityInputPlaceholder}
 className="w-16"
                    value={quantityInput}
                    onChange={(e) => setQuantityInput(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 mt-8 flex flex-col gap-y-4">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
              <p className="text-center text-xs">{freeShipping}</p>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

const Star = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? <BiSolidStar /> : isHalfStar ? <BiSolidStarHalf /> : <BiStar />}
          </div>
        );
      })}
    </div>
  );
};

const GalleryDialog = ({ images, showAllButton }: GalleryDialogProps) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  return (
    <div className="relative">
      <Dialog>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
          <div>
            <DialogTrigger asChild>
              <button className="block size-full" onClick={() => setSelectedSlide(0)}>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
 className="aspect-[5/4] size-full object-cover"
                />
              </button>
            </DialogTrigger>
          </div>
          <div className="hidden md:grid md:grid-cols-2 md:gap-4">
            {images.slice(1, 5).map((image, index) => (
              <DialogTrigger key={index} asChild>
                <button className="block w-full" onClick={() => setSelectedSlide(index + 1)}>
                  <img
                    src={image.src}
                    alt={image.alt}
 className="aspect-[5/4] size-full object-cover"
                  />
                </button>
              </DialogTrigger>
            ))}
          </div>
        </div>
        <DialogContent
          onCloseAutoFocus={(e: Event) => e.preventDefault()}
          closeIconPosition="inside"
          closeIconClassName="text-text-alternative"
>
          <Lightbox images={images} selectedSlide={selectedSlide} />
        </DialogContent>
      </Dialog>
      <GallerySheet
        images={images}
        showAllButton={showAllButton}
        setSelectedSlide={setSelectedSlide}
        selectedSlide={selectedSlide}
      />
    </div>
  );
};

const GallerySheet = ({
  images,
  showAllButton,
  selectedSlide,
  setSelectedSlide,
}: GallerySheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          {...showAllButton}
 className="absolute bottom-4 right-4 z-10 border-border-alternative"
>
          {showAllButton.title}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="size-full px-4">
        <SheetClose />
        <div className="container">
          <div className="mx-auto max-w-lg">
            <Dialog>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <DialogTrigger key={index} asChild>
                    <button onClick={() => setSelectedSlide(index)} className="first:col-span-2">
                      <img
                        src={image.src}
                        alt={image.alt}
 className="aspect-[5/4] size-full object-cover"
                        onClick={() => setSelectedSlide(index)}
                      />
                    </button>
                  </DialogTrigger>
                ))}
              </div>
              <DialogContent
                onCloseAutoFocus={(e: Event) => e.preventDefault()}
                closeIconPosition="inside"
                closeIconClassName="text-text-alternative"
>
                <Lightbox images={images} selectedSlide={selectedSlide} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Lightbox = ({ images, selectedSlide }: LightboxProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(selectedSlide);
  useEffect(() => {
    setCurrent(selectedSlide);
  }, [selectedSlide]);
  useEffect(() => {
    if (!mainApi || !thumbApi) {
      return;
    }
    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setCurrent(index);
      thumbApi.scrollTo(index);
    });
  }, [mainApi, thumbApi]);
  return (
    <div className="relative flex h-screen flex-col">
      <div className="flex grow items-center justify-center pb-[12vh]">
        <div className="mx-auto max-w-[1000px]">
          <div className="overflow-hidden">
            <Carousel
              setApi={setMainApi}
              opts={{
                loop: true,
                align: "start",
              }}
 className="static m-0"
>
              <CarouselContent className="m-0">
                {images.map((slide, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <button onClick={() => mainApi?.scrollTo(index + 1)} className="block w-full">
                      <img
                        src={slide.src}
                        alt={slide.alt}
 className="max-w-screen mx-auto max-h-[86vh] w-full md:max-h-[84vh] md:max-w-[82.3vw]"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
              <CarouselNext className="right-6 hidden rounded-none border-none bg-transparent text-text-alternative md:flex md:size-12 lg:size-14" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden p-[1vh]">
        <Carousel
          setApi={setThumbApi}
          opts={{
            align: "start",
            dragFree: true,
            loop: true,
          }}
 className="m-0"
>
          <CarouselContent className="m-0 block whitespace-nowrap text-center">
            {images.map((slide, index) => (
              <CarouselItem key={index} className="inline-block max-w-[12vh] pl-[2vh]">
                <button
                  onClick={() => mainApi?.scrollTo(index)}
 className={clsx("block", current === index && "opacity-30")}
>
                  <img src={slide.src} alt={slide.alt} className="w-full" />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

const InformationTabs = ({ tabs }: { tabs: TabProps[] }) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList className="mb-5 flex-wrap items-center gap-6 md:mb-6">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.value}
 className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
>
            {tab.trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.value} className="data-[state=active]:animate-tabs">
          <p>{tab.description}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export const ProductHeader2Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "Shop all" },
    { url: "#", title: "Category" },
    { url: "#", title: "Product name" },
  ],
  heading: "Product name",
  price: "$55",
  rating: {
    review: 10,
    starsNumber: 3.5,
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.adsmad",
  galleryImages: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 6",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 7",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 8",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 9",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 10",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 11",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 12",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 13",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 14",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 15",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 16",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 17",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 18",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 19",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 20",
    },
  ],
  showAllButton: {
    title: "Show all photos",
    variant: "secondary",
    size: "sm",
  },
  buttons: [{ title: "Add to cart" }, { title: "Buy now", variant: "secondary" }],
  options: [
    {
      title: "Option one",
      url: "#",
    },
    { title: "Option two", url: "#", variant: "secondary" },
    { title: "Option three", url: "#", variant: "secondary", disabled: true },
  ],
  quantityInputPlaceholder: "1",
  freeShipping: "Free shipping over $50",
  list: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  defaultTabValue: "tab-details",
  tabs: [
    {
      value: "tab-details",
      trigger: "Details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      value: "tab-shipping",
      trigger: "Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      value: "tab-returns",
      trigger: "Returns",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};

ProductHeader2.displayName = 'ProductHeader2';
```

