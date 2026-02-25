# Product Header 7

## Metadata
- **Category**: Product Header
- **Objective**: General Product Header
- **Use Case**: Visual Product Header browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A comprehensive header for individual product pages, integrating galleries, variants, reviews, and primary purchase actions.

## Source Code
```tsx
import React, { useEffect, useState } from 'react';
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

type ListProps = {
  title: string;
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
  list: ListProps[];
  selectVariants: SelectVariant[];
};

export type ProductHeader7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProductHeader7 = (props: ProductHeader7Props) => {
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
    list,
    selectVariants,
  } = {
    ...ProductHeader7Defaults,
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
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1.25fr_1fr] lg:gap-x-20">
          <div className="order-first md:order-none">
            <div className="lg:sticky lg:inset-y-[10vh]">
              <Gallery images={images} />
            </div>
          </div>
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink
 className={clsx({ "font-semibold": index === breadcrumbs.length - 1 })}
                        href={item.url}
>
                        {item.title}
                      </BreadcrumbLink>
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
              <p>{description}</p>
              <ul className="mb-5 mt-4 list-inside list-disc md:mb-6">
                {list.map((item, index) => (
                  <li key={index} className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                    {item.title}
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-1 gap-6">
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
              <div className="space-y-5 md:space-y-6">
                {questions.map((question, index) => (
                  <div key={index}>
                    <p className="mb-2 font-semibold md:text-md">{question.title}</p>
                    <p>{question.answer}</p>
                    {index < questions.length - 1 && (
                      <div className="mt-5 h-px w-full bg-black md:mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
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
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!mainApi) {
      return;
    }
    setCurrent(mainApi.selectedScrollSnap() + 1);
    mainApi.on("select", () => {
      setCurrent(mainApi.selectedScrollSnap() + 1);
    });
  }, [mainApi]);
  return (
    <div className="flex flex-col gap-y-4">
      <div className="group overflow-hidden">
        <Carousel
          setApi={setMainApi}
          opts={{
            loop: true,
            align: "start",
          }}
 className="relative m-0"
>
          <CarouselContent className="relative m-0 pt-[120%] lg:pt-0">
            {images.map((slide, index) => (
              <CarouselItem
                key={index}
 className="absolute inset-0 size-full basis-full pl-0 lg:static"
>
                <img
                  src={slide.src}
                  alt={slide.alt}
 className="size-full object-cover lg:h-[80vh]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex" />
          <CarouselNext className="right-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex" />
          <div className="absolute bottom-[26px] left-0 flex w-full items-center justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => mainApi?.scrollTo(index)}
 className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                  "bg-black": current === index + 1,
                  "bg-neutral-darker/40": current !== index + 1,
                })}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export const ProductHeader7Defaults: Props = {
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
  list: [
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
  ],
};

ProductHeader7.displayName = 'ProductHeader7';
```

