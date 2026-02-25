# Signup 3

## Metadata
- **Category**: Signup
- **Objective**: User registration and authentication
- **Use Case**: Signup form with social authentication options
- **Visual Style**: Centered layout with form inputs and social login buttons
- **Interactivity**: Form submission and social login integration

## Description
A comprehensive signup form featuring email and password inputs with labels. Includes social authentication options for Google, GitHub, and Facebook with corresponding icons. The layout is centered with a clean, modern design featuring a logo, heading, and login link for existing users.

## Source Code
```tsx
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface Signup3Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  buttonText?: string;
  googleText?: string;
  githubText?: string;
  facebookText?: string;
  loginText?: string;
  loginUrl?: string;
  className?: string;
}

const Signup3 = ({
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  googleText = "Google",
  githubText = "Github",
  facebookText = "Facebook",
  className,
}: Signup3Props) => {
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
                  required
                  className="bg-background"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  className="bg-background"
                />
              </div>
              <Button type="submit" className="mt-2 w-full">
                {buttonText}
              </Button>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full">
                  <FaGoogle className="size-4" />
                  {googleText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FaGithub className="size-4" />
                  {githubText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FaFacebook className="size-4" />
                  {facebookText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup3 };