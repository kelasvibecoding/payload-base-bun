# Sign Up 1

## Metadata
- **Category**: Sign Up
- **Objective**: Quick Brand Sign-up
- **Use Case**: General user onboarding.
- **Visual Style**: Centered minimal stack.
- **Interactivity**: Form registration / Google OAuth.

## Description
A user registration component designed to facilitate account creation through intuitive forms and social authentication paths.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import { Button, Input, Label } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoGoogle } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  loginText: string;
  loginLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
  footerText: string;
};

export type Signup1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup1 = (props: Signup1Props) => {
  const {
    logo,
    loginText,
    loginLink,
    title,
    description,
    signUpButton,
    signUpWithGoogleButton,
    footerText,
  } = {
    ...Signup1Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:pb-24 lg:pt-16">
        <div className="absolute left-0 right-0 top-0 flex h-16 items-center justify-between md:h-18">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
          <div className="inline-flex gap-x-1">
            <p className="hidden md:block">{loginText}</p>
            <a href={loginLink.url} className="underline">
              {loginLink.text}
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
            <p className="md:text-md">{description}</p>
          </div>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1">
              <Label htmlFor="name" className="mb-2">
                Name*
              </Label>
              <Input
                type="text"
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
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center md:h-18">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const Signup1Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  loginText: "Already have an account?",
  loginLink: {
    text: "Log In",
    url: "/login",
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
  footerText: "© 2024 vibecoding",
};
```

