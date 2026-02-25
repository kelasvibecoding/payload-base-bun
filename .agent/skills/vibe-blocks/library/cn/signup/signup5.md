# Signup 5

## Metadata
- **Category**: Signup
- **Objective**: User registration with social login options
- **Use Case**: Sign up page with email/password form and social authentication
- **Visual Style**: Centered layout with social login buttons (Google, Facebook, GitHub)
- **Interactivity**: Form submission and social login buttons

## Description
A comprehensive signup form featuring email and password input fields with social login integration. Includes Google, Facebook, and GitHub authentication options, logo display, and a link to login for existing users. The form uses a clean, centered layout with a bordered card container.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Signup5Props {
  className?: string;
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  githubText?: string;
  facebookText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup5 = ({
  className,
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  facebookText = "Facebook",
  googleText = "Google",
  githubText = "Github",
  signupText = "Already a user?",
  signupUrl = "#",
}: Signup5Props) => {
  return (
    <section className={cn("h-screen", className)}>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-sm flex-col items-center gap-y-8">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <a href="https://shadcnblocks.com">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12"
                />
              </a>
            </div>
            <h1 className="text-2xl font-semibold">{heading}</h1>
          </div>
          <div className="flex w-full flex-col gap-8 rounded-md bg-muted px-6 py-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-background"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-background"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-2 w-full">
              {buttonText}
            </Button>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                  className="size-5"
                  alt="Google"
                />
                {googleText}
              </Button>
              <Button variant="outline" className="w-full">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg"
                  className="size-5"
                  alt="Google"
                />
                {githubText}
              </Button>
              <Button variant="outline" className="w-full">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg"
                  className="size-5"
                  alt="Facebook"
                />
                {facebookText}
              </Button>
            </div>
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

export { Signup5 };