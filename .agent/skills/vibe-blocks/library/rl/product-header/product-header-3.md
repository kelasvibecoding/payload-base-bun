# Product Header 3

## Metadata
- **Category**: Product Header
- **Objective**: Video-First Product Intro
- **Use Case**: Tech or tool promotion.
- **Visual Style**: Video background / Feature header.
- **Interactivity**: Video controls / Link actions.

## Description
A comprehensive header for individual product pages, integrating galleries, variants, reviews, and primary purchase actions.

## Source Code
```tsx
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiSolidStar, BiSolidStarHalf, BiStar } from 'lucide-react';
import clsx from 'clsx';
import { RxPlus } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type BreadcrumbProps = {
  url: string;
  title: string;
};

type GalleryProps = {
  images: ImageProps[];
};

type QuestionsProps = {
  title: string;
  answer: string;
};

type RatingProps = {
  review: number;
  starsNumber: number;
};

type SelectVariant = {
  value: string;
  label: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  images: ImageProps[];
  description: string;
  price: string;
  rating: RatingProps;
  buttons: ButtonProps[];
  options: ButtonProps[];
  quantityInputPlaceholder: string;
  freeShipping: string;
  questions: QuestionsProps[];
  selectVariants: SelectVariant[];
};

export type ProductHeader3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProductHeader3 = (props: ProductHeader3Props) => {
  const {
    breadcrumbs,
    heading,
    images,
    price,
    description,
    rating,
    buttons,
    options,
    quantityInputPlaceholder,
    freeShipping,
    questions,
    selectVariants,
  } = {
    ...ProductHeader3Defaults,
    ...props,
  };
  const [variantInput, setVariantInput] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const [quantityInput, setQuantityInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      variantInput,
      optionInput,
      quantityInput,
    });
  };
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1fr_1.25fr] lg:gap-x-20">
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
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
            <div>
              <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h1>
              <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
                <p className="text-xl font-bold md:text-2xl">{price}</p>
                <div className="mx-4 hidden w-px self-stretch bg-background-alternative sm:block"></div>
                <div className="flex flex-wrap items-center gap-3">
                  <Star rating={rating.starsNumber} />
                  <p className="text-sm">{`(${rating.starsNumber} stars) • ${rating.review} reviews`}</p>
                </div>
              </div>
              <p className="mb-5 md:mb-6">{description}</p>
              <form onSubmit={handleSubmit} className="mb-8">
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
                  <div className="grid grid-cols-[1fr_4rem] gap-x-4">
                    <div className="flex flex-col">
                      <Label className="mb-2">Variant</Label>
                      <Select onValueChange={setVariantInput}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectVariants.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="quantity" className="mb-2">
                        Qty
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
              <Accordion type="multiple">
                {questions.map((question, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger
 className="py-4 font-semibold md:text-md"
                      icon={
                        <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                      }
>
                      {question.title}
                    </AccordionTrigger>
                    <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="order-first lg:order-none">
            <Gallery images={images} />
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

const Gallery = ({ images }: GalleryProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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
    <div className="order-first flex flex-col gap-y-4 md:order-none">
      <div className="overflow-hidden">
        <Carousel
          setApi={setMainApi}
          opts={{
            loop: true,
            align: "start",
          }}
 className="m-0"
>
          <CarouselContent className="m-0">
            {images.map((slide, index) => (
              <CarouselItem key={index} className="basis-full pl-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
 className="aspect-[5/4] size-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden overflow-y-auto md:block">
        <Carousel
          setApi={setThumbApi}
          opts={{
            align: "start",
            containScroll: "keepSnaps",
            dragFree: true,
          }}
 className="m-0"
>
          <CarouselContent className="gap-y-4">
            {images.map((slide, index) => (
              <CarouselItem key={index} className="basis-1/5">
                <button
                  onClick={() => mainApi?.scrollTo(index)}
 className={clsx("block", current === index && "opacity-60")}
>
                  <img
                    src={slide.src}
                    alt={slide.alt}
 className="aspect-[5/4] size-full object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export const ProductHeader3Defaults: Props = {
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  selectVariants: [
    { value: "first-choice", label: "Option One" },
    { value: "second-choice", label: "Option Two" },
    { value: "third-choice", label: "Option Three" },
  ],
  images: [
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
  ],
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
  questions: [
    {
      title: "Details",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Shipping",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Returns",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};

ProductHeader3.displayName = 'ProductHeader3';
```

