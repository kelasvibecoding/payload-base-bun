# Signup 6

## Metadata
- **Category**: Signup
- **Objective**: User registration with Google authentication
- **Use Case**: Sign up page with Google OAuth and email/password form
- **Visual Style**: Centered layout with social login button and form inputs
- **Interactivity**: Form submission and social authentication

## Description
A signup form featuring Google OAuth integration alongside traditional email and password authentication. The layout includes a branded logo, Google signup button, separator divider, and labeled form inputs with a clean, modern design on a light background.

## Source Code
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Signup6Props {
  className?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup6 = ({
  className,
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  googleText = "Signup with Google",
  signupText = "Already a user?",
  signupUrl = "https://shadcnblocks.com",
}: Signup6Props) => {
  return (
    <section className={cn("h-screen bg-background", className)}>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* Logo */}
          <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
          </a>
          <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-lg border px-6 py-12">
            <Button className="w-full">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                className="mr-2 size-4"
                alt="Google"
              />
              {googleText}
            </Button>

            <div className="relative flex w-full items-center justify-center py-6">
              <div className="absolute h-[1px] w-full border-t border-border"></div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="bg-background text-sm"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                className="bg-background text-sm"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Password"
                className="bg-background text-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full" variant="secondary">
              {buttonText}
            </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup6 };
```
