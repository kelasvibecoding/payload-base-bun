# Log In 4

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
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  inputPlaceholderEmail: string;
  inputPlaceholderPassword: string;
  logInButton: ButtonProps;
  socialLoginButtons: ButtonProps[];
  forgotPassword: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type Login4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Login4 = (props: Login4Props) => {
  const {
    logo,
    signUpText,
    signUpLink,
    title,
    description,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    logInButton,
    socialLoginButtons,
    forgotPassword,
    footerText,
  } = {
    ...Login4Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:py-20">
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
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center md:h-18">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const Login4Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  title: "Log In",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  logInButton: {
    title: "Log in",
  },
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
  footerText: "© 2024 vibecoding",
};
```

