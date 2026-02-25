# Sign Up Modal 3

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
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
  useMediaQuery,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiLogoGoogle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';

type SignUpFormProps = {
  signUp: {
    signupButton: ButtonProps;
    signupWithGoogleButton: ButtonProps;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

type LogInFormProps = {
  logIn: {
    logInButton: ButtonProps;
    logInWithGoogleButton: ButtonProps;
    forgotPassword: {
      text: string;
      url: string;
    };
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

type SignUpProps = {
  loginText: string;
  loginLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  signupButton: ButtonProps;
  signupWithGoogleButton: ButtonProps;
  footerText: string;
};

type LogInProps = {
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

type Props = {
  signUp: SignUpProps;
  logIn: LogInProps;
};

export type SignupModal3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SignupModal3 = (props: SignupModal3Props) => {
  const { signUp, logIn } = {
    ...SignupModal3Defaults,
    ...props,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isTablet = useMediaQuery("(max-width: 767px)");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Modal</Button>
          </DialogTrigger>
          <DialogContent
            closeIconPosition={isTablet ? "inside" : "outside"}
            overlayClassName="bg-black/25"
 className="fixed left-1/2 top-1/2 flex h-screen flex-col overflow-y-scroll border-t bg-neutral-white px-[5%] pb-28 pt-12 md:h-auto md:max-h-[80vh] md:w-[90%] md:p-12 lg:w-full lg:max-w-sm lg:p-12"
>
            <Tabs defaultValue="signup">
              <TabsList className="mb-8 flex w-full self-center">
                <TabsTrigger
                  value="signup"
 className="w-1/2 border-0 px-6 py-3 text-center data-[state=active]:border-b-[1.5px] data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
>
                  Sign Up
                </TabsTrigger>
                <TabsTrigger
                  value="login"
 className="w-1/2 border-0 px-6 py-3 text-center data-[state=active]:border-b-[1.5px] data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
>
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signup">
                <SignUpForm
                  signUp={signUp}
                  handleSubmit={handleSubmit}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              </TabsContent>
              <TabsContent value="login">
                <LogInForm
                  logIn={logIn}
                  handleSubmit={handleSubmit}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const SignUpForm: React.FC<SignUpFormProps> = ({
  signUp,
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
    <div className="grid w-full items-center">
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
      <Button {...signUp.signupButton}>{signUp.signupButton.title}</Button>
      <Button {...signUp.signupWithGoogleButton} className="gap-x-3">
        {signUp.signupWithGoogleButton.title}
      </Button>
    </div>
  </form>
);

const LogInForm: React.FC<LogInFormProps> = ({
  logIn,
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
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
      <div className="mb-2 flex w-full items-center justify-between">
        <Label htmlFor="password" className="text-base">
          Password*
        </Label>
        <a href={logIn.forgotPassword.url} className="underline">
          {logIn.forgotPassword.text}
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
      <Button {...logIn.logInButton}>{logIn.logInButton.title}</Button>
      <Button {...logIn.logInWithGoogleButton} className="gap-x-3">
        {logIn.logInWithGoogleButton.title}
      </Button>
    </div>
  </form>
);

export const SignupModal3Defaults: Props = {
  signUp: {
    title: "Create your account",
    description: "Sign up to start using our platform.",
    loginText: "Already have an account?",
    loginLink: {
      text: "Log In",
      url: "#",
    },
    signupButton: {
      title: "Sign Up",
      variant: "primary",
    },
    signupWithGoogleButton: {
      variant: "secondary",
      title: "Sign up with Google",
      iconLeft: <BiLogoGoogle className="size-6" />,
    },
    footerText: "© 2024 vibecoding",
  },
  logIn: {
    title: "Log in to your account",
    description: "Enter your credentials to access your account.",
    signUpText: "Don't have an account?",
    signUpLink: {
      text: "Sign Up",
      url: "#",
    },
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
  },
};
```

