# Signup 7

## Metadata
- **Category**: Signup
- **Objective**: User registration and account creation
- **Use Case**: Sign up page with Google authentication and feature highlights
- **Visual Style**: Two-column grid layout with feature cards and icons
- **Interactivity**: Form submission with Google SSO option

## Description
A comprehensive signup page featuring a two-column grid layout. The left column includes a Google authentication button, email signup option, and Enterprise SSO link. The right column displays feature highlights with icons showing workspace organization, task tracking, and team collaboration capabilities. Includes a placeholder image and terms/privacy policy links.

## Source Code
```tsx
import { CheckSquare, FolderKanban, Users } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Signup7Props {
  className?: string;
}

const Signup7 = ({ className }: Signup7Props) => {
  return (
    <section className={cn("bg-muted/60 py-32 2xl:bg-background", className)}>
      <div className="container lg:max-w-[1400px] lg:px-0 2xl:px-8">
        <div className="grid rounded-2xl border-border lg:grid-cols-2 lg:bg-muted/30 2xl:border 2xl:py-10">
          <div className="mx-auto flex max-w-xl flex-col justify-between lg:px-20">
            <div className="lg:mt-24">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                  Create your account today
                </h1>
                <p className="font-medium text-muted-foreground">
                  Basic plan for personal use. Premium plans for teams and
                  businesses.
                </p>
              </div>
              <div className="mt-16 flex flex-col gap-6">
                <Button>
                  <FcGoogle />
                  Continue with Google
                </Button>
                <div className="flex items-center gap-2">
                  <Separator className="flex-1" />
                  <span className="text-sm text-muted-foreground">or</span>
                  <Separator className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline">Continue with Email</Button>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary"
                  >
                    or Enterprise SSO
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm text-muted-foreground">
                Already a user?{" "}
                <a href="/#" className="text-primary">
                  Log in
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="/#" className="text-primary">
                  Terms{" "}
                </a>
                and{" "}
                <a href="/#" className="text-primary">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-l-2xl border-border pt-14 lg:border-y lg:border-l lg:bg-muted/60 lg:py-8 lg:pl-12">
            <div className="mx-auto flex max-w-xl justify-between gap-4 lg:mx-0 lg:max-w-none lg:justify-start lg:gap-8">
              <div className="flex flex-row items-center gap-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-monthly.svg"
                  alt="g2 monthly"
                  className="h-10"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-badge.png"
                  alt="g2"
                  className="h-10"
                />
              </div>
            </div>
            <div className="mt-6 hidden rounded-l-xl border-y border-l border-dashed border-border bg-muted py-1.5 pl-1.5 lg:block">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="placeholder"
                className="max-h-[450px] w-full rounded-l-xl border-y border-l border-border object-cover"
              />
            </div>
            <div className="mt-8 mr-3 hidden grid-cols-3 gap-3 lg:grid">
              <div>
                <FolderKanban className="mb-1 size-4" />
                <p className="text-sm font-medium">Organize your workspaces</p>
                <p className="text-sm text-muted-foreground">
                  Keep all your work organized in one centralized dashboard.
                </p>
              </div>
              <div>
                <CheckSquare className="mb-1 size-4" />
                <p className="text-sm font-medium">Track tasks and deadlines</p>
                <p className="text-sm text-muted-foreground">
                  Set priorities and monitor progress across all your projects.
                </p>
              </div>
              <div>
                <Users className="mb-1 size-4" />
                <p className="text-sm font-medium">
                  Collaborate with your team
                </p>
                <p className="text-sm text-muted-foreground">
                  Share documents and communicate with teammates in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup7 };
```
