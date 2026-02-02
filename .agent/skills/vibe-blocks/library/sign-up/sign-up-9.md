# Sign Up 9

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

import React, { useState } from 'react';
import {
  Button,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoGoogle } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SignupForm = {
  title: string;
  description: string;
  signUpButton: ButtonProps;
  signUpWithGoogleButton: ButtonProps;
};

type LoginForm = {
  title: string;
  description: string;
  logInButton: ButtonProps;
  logInWithGoogleButton: ButtonProps;
  forgotPassword: {
    text: string;
    url: string;
  };
};

type Props = {
  logo: ImageProps;
  signupTab: {
    value: string;
    trigger: string;
    form: SignupForm;
  };
  loginTab: {
    value: string;
    trigger: string;
    form: LoginForm;
  };
  footerText: string;
};

export type Signup9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Signup9 = (props: Signup9Props) => {
  const { logo, signupTab, loginTab, footerText } = {
    ...Signup9Defaults,
    ...props,
  };

  return (
    <section className="px-[5%]">
      <div className="relative flex min-h-svh flex-col overflow-auto py-24 lg:pb-20 lg:pt-24">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-16 items-center justify-center md:h-18 lg:justify-between">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <Tabs defaultValue={signupTab.value} className="flex flex-col justify-start">
            <TabsList className="no-scrollbar mb-8 flex w-full items-center overflow-auto md:justify-center md:overflow-hidden">
              <TabsTrigger
                value={signupTab.value}
 className="w-1/2 border-x-0 border-b border-t-0 border-transparent px-6 py-3 data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
>
                {signupTab.trigger}
              </TabsTrigger>
              <TabsTrigger
                value={loginTab.value}
 className="w-1/2 border-x-0 border-b border-t-0 border-transparent px-6 py-3 data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
>
                {loginTab.trigger}
              </TabsTrigger>
            </TabsList>
            <TabsContent
              key={signupTab.value}
              value={signupTab.value}
 className="data-[state=active]:animate-tabs"
>
              <SignupForm formData={signupTab.form} />
            </TabsContent>
            <TabsContent
              key={loginTab.value}
              value={loginTab.value}
 className="data-[state=active]:animate-tabs"
>
              <LoginForm formData={loginTab.form} />
            </TabsContent>
          </Tabs>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center md:h-18">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

const SignupForm: React.FC<{ formData: SignupForm }> = ({ formData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <React.Fragment>
      <div className="mb-6 text-center md:mb-8">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          {formData.title}
        </h1>
        <p className="md:text-md">{formData.description}</p>
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
            variant={formData.signUpButton.variant}
            size={formData.signUpButton.size}
            iconLeft={formData.signUpButton.iconLeft}
            iconRight={formData.signUpButton.iconRight}
>
            {formData.signUpButton.title}
          </Button>
          <Button
            variant={formData.signUpWithGoogleButton.variant}
            size={formData.signUpWithGoogleButton.size}
            iconLeft={formData.signUpWithGoogleButton.iconLeft}
            iconRight={formData.signUpWithGoogleButton.iconRight}
 className="gap-x-3"
>
            {formData.signUpWithGoogleButton.title}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

const LoginForm: React.FC<{ formData: LoginForm }> = ({ formData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <React.Fragment>
      <div className="mb-6 text-center md:mb-8">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          {formData.title}
        </h1>
        <p className="md:text-md">{formData.description}</p>
      </div>
      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
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
          <div className="flex justify-between">
            <Label htmlFor="password" className="mb-2">
              Password*
            </Label>
            <a href={formData.forgotPassword.url} className="underline">
              {formData.forgotPassword.text}
            </a>
          </div>
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
            variant={formData.logInButton.variant}
            size={formData.logInButton.size}
            iconLeft={formData.logInButton.iconLeft}
            iconRight={formData.logInButton.iconRight}
>
            {formData.logInButton.title}
          </Button>
          <Button
            variant={formData.logInWithGoogleButton.variant}
            size={formData.logInWithGoogleButton.size}
            iconLeft={formData.logInWithGoogleButton.iconLeft}
            iconRight={formData.logInWithGoogleButton.iconRight}
 className="gap-x-3"
>
            {formData.logInWithGoogleButton.title}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export const Signup9Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  signupTab: {
    value: "sign-up",
    trigger: "Sign Up",
    form: {
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
    },
  },
  loginTab: {
    value: "log-in",
    trigger: "Login",
    form: {
      title: "Log In",
      description: "Lorem ipsum dolor sit amet.",
      logInButton: {
        title: "Log in",
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
    },
  },
  footerText: "© 2024 vibecoding",
};
```

