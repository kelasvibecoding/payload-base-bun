# Sign Up 4

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
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  inputPlaceholderEmail: string;
  inputPlaceholderPassword: string;
  signUpButton: ButtonProps;
  socialSignupButtons: ButtonProps[];
  footerText: string;
};

export type Signup4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup4 = (props: Signup4Props) => {
  const {
    logo,
    logInText,
    logInLink,
    title,
    description,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    signUpButton,
    socialSignupButtons,
    footerText,
  } = {
    ...Signup4Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section
      
 className="relative flex min-h-svh flex-col justify-center overflow-auto px-[5%] py-24 lg:py-20"
>
      <div className="absolute left-0 right-0 top-0 flex h-16 items-center justify-center md:h-18">
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} />
        </a>
      </div>
      <div className="mx-auto w-full max-w-sm border border-border-primary px-6 py-8 sm:px-8 md:p-12">
        <div className="mb-6 text-center md:mb-8">
          <h1 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
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
      <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center md:h-18">
        <p className="text-sm">{footerText}</p>
      </footer>
    </section>
  );
};

export const Signup4Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log in",
    url: "#",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  signUpButton: {
    title: "Sign up",
  },
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
  footerText: "© 2024 vibecoding",
};
```

