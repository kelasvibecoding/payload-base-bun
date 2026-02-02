# Sign Up 8

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

import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoFacebook, BiLogoGoogle, BiLogoApple } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  signUpButton: ButtonProps;
  inputPlaceholderEmail: string;
  inputPlaceholderPassword: string;
  socialSignupButtons: ButtonProps[];
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  image: ImageProps;
  footerText: string;
};

export type Signup8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup8 = (props: Signup8Props) => {
  const {
    logo,
    title,
    description,
    signUpButton,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    socialSignupButtons,
    logInText,
    logInLink,
    image,
    footerText,
  } = {
    ...Signup8Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section>
      <div className="relative grid grid-cols-1 justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-16 items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="relative mx-[5vw] flex min-h-svh items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-6 text-center md:mb-8">
              <h1 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-7xl lg:text-8xl">
                {title}
              </h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
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
                variant={signUpButton.variant}
                size={signUpButton.size}
                iconLeft={signUpButton.iconLeft}
                iconRight={signUpButton.iconRight}
>
                {signUpButton.title}
              </Button>
              <div className="my-3 h-px w-full bg-border-primary md:my-4" />
              {socialSignupButtons.map((button, index) => (
                <Button key={index} {...button} className="gap-x-3">
                  {button.title}
                </Button>
              ))}
            </form>
            <div className="mt-5 flex w-full justify-center gap-x-1 text-center md:mt-6">
              <p>{logInText}</p>
              <a href={logInLink.url} className="underline">
                {logInLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden bg-background-secondary lg:block">
          <img src={image.src} alt={image.alt} className="size-full object-cover" />
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center px-[5%] md:h-18 md:justify-start">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const Signup8Defaults: Props = {
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
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  socialSignupButtons: [
    {
      variant: "secondary",
      title: "Sign up with Google",
      iconLeft: <BiLogoGoogle className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Facebook",
      iconLeft: <BiLogoFacebook className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Apple",
      iconLeft: <BiLogoApple className="size-6" />,
    },
  ],
  logInText: "Already have an account?",
  logInLink: {
    text: "Log In",
    url: "#",
  },
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  footerText: "© 2024 vibecoding",
};
```

