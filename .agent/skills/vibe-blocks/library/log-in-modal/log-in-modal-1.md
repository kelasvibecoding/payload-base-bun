# Log In Modal 1

## Metadata
- **Category**: Log In Modal
- **Objective**: General Log In Modal
- **Use Case**: Standard Log In Modal functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
An overlay authentication component for seamless user access without page redirection, ideal for conversion-focused sites.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import {
  Button,
  Input,
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
  useMediaQuery,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoGoogle } from 'lucide-react';

type Props = {
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  logInButton: ButtonProps;
  logInWithGoogleButton: ButtonProps;
  forgotPassword: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type LoginModal1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LoginModal1 = (props: LoginModal1Props) => {
  const {
    signUpText,
    signUpLink,
    title,
    description,
    logInButton,
    logInWithGoogleButton,
    forgotPassword,
  } = {
    ...LoginModal1Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isTablet = useMediaQuery("(max-width: 767px)");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open modal</Button>
          </DialogTrigger>
          <DialogContent
            closeIconPosition={isTablet ? "inside" : "outside"}
            overlayClassName="bg-black/25"
 className="fixed left-1/2 top-1/2 flex h-screen flex-col overflow-y-scroll border-t bg-neutral-white px-[5%] pb-28 pt-12 md:h-auto md:max-h-[80vh] md:w-[90%] md:p-12 lg:w-full lg:max-w-sm lg:p-12"
>
            <div className="mb-6 text-center md:mb-8">
              <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p>{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
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
              <div className="grid w-full items-center">
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
                  variant={logInButton.variant}
                  size={logInButton.size}
                  iconLeft={logInButton.iconLeft}
                  iconRight={logInButton.iconRight}
>
                  {logInButton.title}
                </Button>
                <Button
                  variant={logInWithGoogleButton.variant}
                  size={logInWithGoogleButton.size}
                  iconLeft={logInWithGoogleButton.iconLeft}
                  iconRight={logInWithGoogleButton.iconRight}
 className="gap-x-3"
>
                  {logInWithGoogleButton.title}
                </Button>
              </div>
            </form>
            <div className="mt-5 w-full text-center md:mt-6">
              <a href={forgotPassword.url} className="underline">
                {forgotPassword.text}
              </a>
            </div>
            <div className="mt-3 inline-flex justify-center gap-x-1 md:mt-4">
              <p>{signUpText}</p>
              <a href={signUpLink.url} className="underline">
                {signUpLink.text}
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export const LoginModal1Defaults: Props = {
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign Up",
    url: "#",
  },
  title: "Log In",
  description: "Lorem ipsum dolor sit amet.",
  logInButton: {
    title: "Log in",
    variant: "primary",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  footerText: "© 2024 vibecoding",
};

LoginModal1.displayName = 'LoginModal1';
```

