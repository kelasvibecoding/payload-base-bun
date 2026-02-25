# Links 12

## Metadata
- **Category**: Links
- **Objective**: General Links
- **Use Case**: Visual Links browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A versatile component for organizing multiple external or internal links, often styled for personal branding pages or resource directories.

## Source Code
```tsx
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Input,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import type { ButtonProps, CarouselApi } from '@/components/ui';
import { MdLocationOn } from 'lucide-react';
import { FaXTwitter } from 'lucide-react';
import { Mail, BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'lucide-react';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt?: string;
};

type AuthorDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  position: string;
  location: string;
};

enum CategoryLinkType {
  Button = "button",
  Card = "card",
}

type CategoryLinkProps = {
  button: ButtonProps;
  image?: ImageProps;
  variant?: string;
  type: CategoryLinkType;
};

type CategoryProps = {
  heading?: string;
  isGrid?: boolean;
  links: CategoryLinkProps[];
  cta?: ButtonProps;
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

type NewsletterProps = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  submitButton: ButtonProps;
  termsAndConditions: string;
};

type Props = {
  author: AuthorDetailsProps;
  categories: CategoryProps[];
  button: ButtonProps;
  newsLetter: NewsletterProps;
  socialLinks: SocialLinkProps[];
};

export type Links12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Links12 = (props: Links12Props) => {
  const { author, categories, button, newsLetter, socialLinks } = {
    ...Links12Defaults,
    ...props,
  };
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-md">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14 lg:mb-16">
          <img
            src={author.avatar.src}
            alt={author.avatar.alt}
 className="mb-5 size-24 rounded-full object-cover md:mb-6"
          />
          <h2 className="mb-2 text-xl font-bold md:text-2xl">{author.fullName}</h2>
          <p>{author.position}</p>
          <div className="mt-3 flex items-center justify-center gap-2 md:mt-4">
            <MdLocationOn className="size-5" />
            <p>{author.location}</p>
          </div>
        </div>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
 className="w-full gap-4 whitespace-normal border border-border-primary p-4 text-left"
                {...button}
              />
            </DialogTrigger>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-black/25"
 className="flex size-full flex-col justify-center bg-white px-[5%] pb-28 pt-12 md:size-auto md:w-[90%] md:px-12 md:py-12 lg:max-w-sm"
>
              <div className="mb-8 text-center md:mb-12">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  {newsLetter.heading}
                </h2>
                <p>{newsLetter.description}</p>
              </div>
              <form className="mb-4 flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <Input
                  id="email"
                  type="email"
                  placeholder={newsLetter.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button {...newsLetter.submitButton}>{newsLetter.submitButton.title}</Button>
              </form>
              <div dangerouslySetInnerHTML={{ __html: newsLetter.termsAndConditions }} />
            </DialogContent>
          </Dialog>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Category = ({ ...category }: CategoryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const cardLinks = category.links.filter((link) => link.type === CategoryLinkType.Card);
  const buttonLinks = category.links.filter((link) => link.type === CategoryLinkType.Button);
  const regularButtons = cardLinks.length> 0 ? buttonLinks.slice(0, -1) : buttonLinks;
  const storeButton = cardLinks.length> 0 ? buttonLinks[buttonLinks.length - 1] : null;
  return (
    <div className="flex flex-col gap-4 text-center">
      {category.heading && (
        <h3 className="red-500 text-md font-bold leading-[1.4] md:text-xl">{category.heading}</h3>
      )}
      <div className="relative grid grid-cols-1 gap-4">
        {regularButtons.map((link, index) => (
          <Button key={index} {...link.button} asChild>
            <a href={link.button.url}>{link.button.title}</a>
          </Button>
        ))}
        {cardLinks.length> 0 && (
          <div className="border border-border-primary px-4 py-6 md:px-6">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
              }}
 className="-mx-4 mb-[26px] overflow-hidden px-2 md:-mx-9 md:px-3 lg:-mx-6"
>
              <div className="relative">
                <CarouselContent className="ml-0">
                  {cardLinks.map((slide, index) => (
                    <CarouselItem key={index} className="basis-[46.5%] px-2 md:basis-1/3 md:px-3">
                      <div className="flex flex-col gap-2">
                        <div>
                          <img
                            src={slide.image?.src}
                            alt={slide.image?.alt}
 className="aspect-square size-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <p>{slide.button.title}</p>
                          <p className="font-semibold md:text-md">{slide.button.price}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-1 hidden md:-mt-[4.5%] md:ml-4 md:flex md:size-12 lg:ml-1" />
                <CarouselNext className="mr-1 hidden md:-mt-[4.5%] md:mr-4 md:flex md:size-12 lg:mr-1" />
              </div>
              <div className="mt-[30px] flex items-center justify-center">
                {cardLinks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
 className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                      "bg-black": current === index + 1,
                      "bg-neutral-darker/40": current !== index + 1,
                    })}
                  />
                ))}
              </div>
            </Carousel>
            {storeButton && (
              <Button {...storeButton.button} className="w-full" asChild>
                <a href={storeButton.button.url}>{storeButton.button.title}</a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const Links12Defaults: Props = {
  author: {
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
      alt: "vibecoding placeholder avatar",
    },
    fullName: "Name Surname",
    position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Location",
  },
  categories: [
    {
      links: [
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link one",
            variant: "secondary",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link two",
            variant: "secondary",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link three",
            variant: "secondary",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Link four",
            variant: "secondary",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 1",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 2",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 3",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 4",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 5",
          },
        },
        {
          type: CategoryLinkType.Card,
          button: {
            url: "#",
            title: "Product name",
            price: "$55",
            variant: "link",
          },
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            alt: "vibecoding placeholder image 6",
          },
        },
        {
          type: CategoryLinkType.Button,
          button: {
            url: "#",
            title: "Go to the store",
            variant: "secondary",
          },
        },
      ],
    },
  ],
  button: {
    variant: "secondary",
    children: (
      <>
        <Mail className="size-8 shrink-0" />
        <span className="flex grow flex-col items-start">
          <span className="font-semibold md:text-md">Join our newsletter</span>
          <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </span>
      </>
    ),
  },
  newsLetter: {
    heading: "Join our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    inputPlaceholder: "Enter your email",
    submitButton: {
      title: "Subscribe",
    },
    termsAndConditions: `
		<p class='text-xs'>
			By subscribing you agree to with our  
			<a href='#' class='underline'>Privacy Policy</a> and provide consent to receive updates from our company.
		</p>
  `,
  },
  socialLinks: [
    { href: "#", icon: <BiLogoFacebookCircle className="size-8" /> },
    { href: "#", icon: <BiLogoInstagram className="size-8" /> },
    { href: "#", icon: <FaXTwitter className="size-8" /> },
    { href: "#", icon: <BiLogoLinkedinSquare className="size-8" /> },
    { href: "#", icon: <BiLogoYoutube className="size-8" /> },
  ],
};

Links12.displayName = 'Links12';
```

