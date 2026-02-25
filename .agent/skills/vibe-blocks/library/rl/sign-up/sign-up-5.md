# Sign Up 5

## Metadata
- **Category**: Sign Up
- **Objective**: General Sign Up
- **Use Case**: Standard Sign Up functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A user registration component designed to facilitate account creation through intuitive forms and social authentication paths.

## Source Code
```tsx
"use client";

import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Label,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import type { ButtonProps, CarouselApi } from '@/components/ui';
import { BiLogoGoogle, BiSolidStar } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import clsx from 'clsx';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo: ImageProps;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  testimonials: Testimonial[];
  footerText: string;
};

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

export type Signup5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup5 = (props: Signup5Props) => {
  const {
    logo,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    logInText,
    logInLink,
    testimonials,
    footerText,
  } = {
    ...Signup5Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute left-0 right-0 z-10 flex h-16 items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="relative flex items-center justify-center px-[5%] pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mx-auto mb-6 w-full max-w-lg text-center md:mb-8">
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <Label htmlFor="name" className="mb-2">
                  Name*
                </Label>
                <Input
                  type="email"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1">
                <Label htmlFor="email" className="mb-2">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1">
                <Label htmlFor="password" className="mb-2">
                  Password*
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant={signUpButton.variant}
                  size={signUpButton.size}
                  iconLeft={signUpButton.iconLeft}
                  iconRight={signUpButton.iconRight}
>
                  {signUpButton.title}
                </Button>
                <Button
                  variant={signUpWithGoogleButton.variant}
                  size={signUpWithGoogleButton.size}
                  iconLeft={signUpWithGoogleButton.iconLeft}
                  iconRight={signUpWithGoogleButton.iconRight}
 className="gap-x-3"
>
                  {signUpWithGoogleButton.title}
                </Button>
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{logInText}</p>
              <a href={logInLink.url} className="underline">
                {logInLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-background-secondary px-[5vw] pb-20 pt-16 md:pb-24 md:pt-20 lg:pb-20">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={plugins}
 className="overflow-hidden"
>
            <div className="relative pb-12 md:pb-20">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="max-w-full">
                    <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                      <div className="flex">
                        {Array(testimonial.numberOfStars)
                          .fill(null)
                          .map((_, starIndex) => (
                            <BiSolidStar key={starIndex} className="size-5" />
                          ))}
                      </div>
                      <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
                        <div className="mb-4 shrink-0 md:mb-0 md:mr-5">
                          <img
                            src={testimonial.avatar.src}
                            alt={testimonial.avatar.alt}
 className="size-14 rounded-full object-cover"
                          />
                        </div>
                        <div className="mb-4 md:mb-0">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p>{testimonial.position}</p>
                        </div>
                        <div className="mx-5 hidden w-px self-stretch bg-black md:block" />
                        <div>
                          <img
                            src={testimonial.logo.src}
                            alt={testimonial.logo.alt}
 className="max-h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-0 flex w-full items-center justify-center gap-12">
                <CarouselPrevious
 className="static hidden h-12 -translate-y-0 bg-transparent md:flex"
                  variant="link"
                />
                <div className="flex h-12 items-center justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
 className={clsx("mx-[3px] size-2 rounded-full", {
                        "bg-black": current === index + 1,
                        "bg-neutral-darker/40": current !== index + 1,
                      })}
                    />
                  ))}
                </div>
                <CarouselNext
 className="static hidden h-12 -translate-y-0 bg-transparent md:flex"
                  variant="link"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center px-[5%] md:h-18 md:justify-start">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const Signup5Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  signUpButton: {
    title: "Sign up",
  },
  signUpWithGoogleButton: {
    variant: "secondary",
    title: "Sign up with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log in",
    url: "#",
  },
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position, Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo-v2.svg",
        alt: "Webflow logo 1",
      },
    },
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position, Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 2",
      },
    },
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position, Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 3",
      },
    },
  ],
  footerText: "© 2024 vibecoding",
};
```

