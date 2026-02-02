# Sign Up Modal 2

## Metadata
- **Category**: Sign Up Modal
- **Objective**: General Sign Up Modal
- **Use Case**: Standard Sign Up Modal functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
An overlay registration component for fast-track user onboarding within the current page context.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import {
  Button,
  Input,
  Dialog,
  DialogTrigger,
  DialogContent,
  useMediaQuery,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoFacebook, BiLogoGoogle, BiLogoApple } from 'lucide-react';

type Props = {
  signUpText: string;
  LoginLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  signupButton: ButtonProps;
  socialSignupButtons: ButtonProps[];

  footerText: string;
};

export type SignupModal2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SignupModal2 = (props: SignupModal2Props) => {
  const { signUpText, LoginLink, title, description, signupButton, socialSignupButtons } = {
    ...SignupModal2Defaults,
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
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant={signupButton.variant}
                  size={signupButton.size}
                  iconLeft={signupButton.iconLeft}
                  iconRight={signupButton.iconRight}
>
                  {signupButton.title}
                </Button>
                <div className="my-3 h-px w-full bg-border-primary md:my-4" />
                {socialSignupButtons.map((button, index) => (
                  <Button key={index} {...button} className="gap-x-3">
                    {button.title}
                  </Button>
                ))}
              </div>
            </form>
            <div className="mt-5 inline-flex justify-center gap-x-1 md:mt-4">
              <p>{signUpText}</p>
              <a href={LoginLink.url} className="underline">
                {LoginLink.text}
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export const SignupModal2Defaults: Props = {
  signUpText: "Already have an account?",
  LoginLink: {
    text: "Log in",
    url: "#",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet.",
  signupButton: {
    title: "Sign up",
    variant: "primary",
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

