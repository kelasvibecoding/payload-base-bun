# Log In 8

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
  image: ImageProps;
  footerText: string;
};

export type Login8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Login8 = (props: Login8Props) => {
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
    image,
    footerText,
  } = {
    ...Login8Defaults,
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

export const Login8Defaults: Props = {
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
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  footerText: "© 2024 vibecoding",
};
```

