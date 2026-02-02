# Log In 6

## Metadata
- **Category**: Log In
- **Objective**: General Log In
- **Use Case**: Standard Log In functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A dedicated authentication component for user access, featuring secure input fields, social login options, and clean layout patterns.

## Source Code
```tsx
"use client";

import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import type { ButtonProps, CarouselApi } from '@/components/ui';
import { BiLogoFacebook, BiLogoGoogle, BiLogoApple, BiSolidStar } from 'lucide-react';
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
  logInButton: ButtonProps;
  inputPlaceholderEmail: string;
  inputPlaceholderPassword: string;
  socialLoginButtons: ButtonProps[];
  forgotPassword: {
    text: string;
    url: string;
  };
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  testimonials: Testimonial[];
  footerText: string;
};

const plugins = [
  Autoplay({
    delay: 500000,
  }),
];

export type Login6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Login6 = (props: Login6Props) => {
  const {
    logo,
    title,
    description,
    logInButton,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    socialLoginButtons,
    forgotPassword,
    signUpText,
    signUpLink,
    testimonials,
    footerText,
  } = {
    ...Login6Defaults,
    ...props,
  };

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
    console.log({ email, password });
  };

  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-16 items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="relative mx-[5vw] flex items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-8 text-center md:mb-10 lg:mb-12">
              <h1 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-7xl lg:text-8xl">
                {title}
              </h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <Input
                type="email"
                id="email"
                placeholder={inputPlaceholderEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                placeholder={inputPlaceholderPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant={logInButton.variant}
                size={logInButton.size}
                iconLeft={logInButton.iconLeft}
                iconRight={logInButton.iconRight}
>
                {logInButton.title}
              </Button>
              <div className="my-3 h-px w-full bg-background-alternative md:my-4" />
              {socialLoginButtons.map((button, index) => (
                <Button key={index} {...button} className="gap-x-3">
                  {button.title}
                </Button>
              ))}
            </form>
            <div className="mt-5 w-full text-center md:mt-6">
              <a href={forgotPassword.url} className="underline">
                {forgotPassword.text}
              </a>
            </div>
            <div className="mt-3 flex w-full justify-center gap-x-1 text-center md:mt-4">
              <p>{signUpText}</p>
              <a href={signUpLink.url} className="underline">
                {signUpLink.text}
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
                        <div className="mx-5 hidden w-px self-stretch bg-background-alternative md:block" />
                        <div className="shrink-0">
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
                        "bg-background-alternative": current === index + 1,
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
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center pl-[5%] md:h-18 md:justify-start">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const Login6Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  title: "Log In",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  logInButton: {
    title: "Log in",
  },
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  socialLoginButtons: [
    {
      variant: "secondary",
      title: "Log in with Google",
      iconLeft: <BiLogoGoogle className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Log in with Facebook",
      iconLeft: <BiLogoFacebook className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Log in with Apple",
      iconLeft: <BiLogoApple className="size-6" />,
    },
  ],
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  testimonials: [
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
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position, Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo-v2.svg",
        alt: "Webflow logo 1",
      },
    },
  ],
  footerText: "© 2024 vibecoding",
};
```

