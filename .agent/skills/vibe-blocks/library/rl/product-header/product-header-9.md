# Product Header 9

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
import React from 'react';
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
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiCheck, BiSolidStar, BiSolidStarHalf, BiStar } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import { FaCirclePlay } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type BreadcrumbProps = {
  url: string;
  title: string;
};

type QuestionsProps = {
  title: string;
  answer: string;
};

type RatingProps = {
  review: number;
  starsNumber: number;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  description: string;
  price: string;
  rating: RatingProps;
  buttons: ButtonProps[];
  guarantee: string;
  questions: QuestionsProps[];
  image: ImageProps;
  video: string;
  features: string[];
};

export type ProductHeader9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProductHeader9 = (props: ProductHeader9Props) => {
  const {
    breadcrumbs,
    heading,
    price,
    description,
    rating,
    buttons,
    guarantee,
    questions,
    image,
    video,
    features,
  } = {
    ...ProductHeader9Defaults,
    ...props,
  };
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-[1.25fr_0.5fr] lg:gap-x-20">
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
            <h1 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="my-8 border border-border-primary px-4 py-8 md:px-8">
              <p className="mb-3 font-semibold md:mb-4 md:text-md">Includes:</p>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">More information</h2>
            <Accordion type="multiple">
              {questions.map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger
 className="justify-start py-4 font-semibold md:py-5 md:text-md"
                    icon={
                      <RxChevronDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-text-primary transition-transform duration-300 md:size-6" />
                    }
>
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <div className="lg:sticky lg:top-32">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative mb-5 flex w-full items-center justify-center md:mb-6">
                    <img src={image.src} alt={image.alt} className="size-full object-cover" />
                    <span className="absolute inset-0 z-10 bg-black/50" />
                    <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video={video} />
                </DialogContent>
              </Dialog>
              <div className="mb-7 flex flex-col flex-wrap sm:flex-row md:mb-8">
                <p className="text-2xl font-bold md:text-4xl">{price}</p>
                <div className="mx-4 hidden w-px self-stretch bg-background-alternative sm:block"></div>
                <div className="flex flex-col gap-1">
                  <Star rating={rating.starsNumber} />
                  <p className="text-sm">{`(${rating.starsNumber} stars) • ${rating.review} reviews`}</p>
                </div>
              </div>
              <div className="mb-4 mt-2 flex flex-col gap-y-4">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
              <p className="text-center text-xs">{guarantee}</p>
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

export const ProductHeader9Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "All" },
    { url: "#", title: "Category" },
    { url: "#", title: "Product name" },
  ],
  heading: "Digital product name",
  price: "$55",
  rating: {
    review: 10,
    starsNumber: 3.5,
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttons: [{ title: "Add to cart" }, { title: "Buy now", variant: "secondary" }],
  guarantee: "30-Day Money-Back Guarantee",
  questions: [
    {
      title: "Details One",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Two",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Three",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Four",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Five",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Six",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Seven",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Details Eight",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  features: [
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
    "Feature text goes here",
  ],
};

ProductHeader9.displayName = 'ProductHeader9';
```

