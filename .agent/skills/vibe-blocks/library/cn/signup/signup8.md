# Signup 8

## Metadata
- **Category**: Signup
- **Objective**: User registration and authentication
- **Use Case**: Sign up page with Google authentication and email input
- **Visual Style**: Centered layout with Google button and email form
- **Interactivity**: Google sign-up and email submission

## Description
A modern signup page featuring Google authentication as the primary sign-up method with an email-based signup option. Includes a browser window mockup, promotional badge, and form with email input. The layout uses a two-column design with a visual preview card on the right side.

## Source Code
```tsx
import { ChevronRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Signup8Props {
  className?: string;
}

const Signup8 = ({ className }: Signup8Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="relative container flex flex-col items-center">
        <div className="flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border-border p-4 sm:border lg:flex-row lg:p-12">
          {/* Left Content */}
          <div className="flex w-full flex-col gap-8">
            <Badge
              variant="outline"
              className="flex w-fit items-center gap-4 rounded-full px-6 py-2"
            >
              <span className="text-sm font-medium text-muted-foreground">
                Copy paste Blocks for your app
              </span>
              <ChevronRight className="size-4!" />
            </Badge>

            <h1 className="text-7xl font-semibold tracking-tighter">
              Blocks Built
              <br />
              With Shadcn
              <br />
              &amp; Tailwind.
            </h1>

            <p className="text-xl font-normal tracking-tight text-muted-foreground">
              Finely crafted components built with React, Tailwind and Shadcn
              UI. Developers can copy and paste these blocks directly into their
              project.
            </p>

            <div className="flex w-full flex-col gap-4">
              <Button className="text-md h-12 w-full rounded-lg bg-primary text-primary-foreground">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                  alt=""
                  className="size-4"
                />
                Sign up with Google
              </Button>

              <Button
                variant="outline"
                className="text-md h-12 w-full rounded-lg"
              >
                Sign up with email
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              No credit card required
            </p>
          </div>

          {/* Right Content - Browser Window */}
          <div className="w-full">
            <div className="ml-0 flex h-[500px] w-full flex-col items-center justify-center rounded-3xl border-border bg-muted p-2 lg:ml-32">
              <Card className="relative h-full w-full rounded-2xl border">
                <CardContent className="flex h-full w-full items-center justify-center p-0">
                  {/* Browser Window Controls */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="size-3.5 rounded-full bg-red-500" />
                    <div className="size-3.5 rounded-full bg-yellow-500" />
                    <div className="size-3.5 rounded-full bg-green-500" />
                  </div>
                  {/* Browser Window Content */}
                  <img
                    className="size-60"
                    alt="Block Logo"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup8 };