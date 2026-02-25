# Signup 9

## Metadata
- **Category**: Signup
- **Objective**: User registration with social authentication
- **Use Case**: Sign up page with Google authentication and email input
- **Visual Style**: Centered layout with auto-scrolling logos and email input
- **Interactivity**: Form submission and Google sign-up button

## Description
A modern signup page featuring a prominent logo, heading, and Google authentication button. Includes an email input field with a "Continue" button. The layout showcases an auto-scrolling carousel of company logos in the background, creating a dynamic and engaging user experience. Perfect for SaaS applications and modern web services.

## Source Code
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface Signup9Props {
  className?: string;
}

const Signup9 = ({ className }: Signup9Props) => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-6 w-auto",
    },
  ];

  return (
    <section className={cn("bg-background", className)}>
      <div className="container flex min-h-screen items-center justify-center py-4">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              className="h-14 w-12"
              alt="Logo"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            />
          </div>

          <h1 className="mb-8 w-full text-center text-3xl font-medium tracking-tighter text-foreground md:text-4xl">
            Create your free account
          </h1>

          <Button
            variant="outline"
            className="flex h-14 w-full max-w-lg items-center justify-center gap-8 rounded-full border-muted-foreground/30"
          >
            <img
              className="h-5 w-5"
              alt="Google logo"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
            />
            <span className="font-medium">Sign up with Google</span>
          </Button>

          <div className="flex w-full max-w-lg items-center gap-6">
            <Separator className="flex-1" />
            <span className="font-medium tracking-tight">or</span>
            <Separator className="flex-1" />
          </div>

          <div className="w-full max-w-lg">
            <Input
              className="h-14 rounded-full border-none bg-muted px-5 py-4 font-medium"
              placeholder="Enter Your Email"
            />
          </div>

          <Button className="h-14 w-full max-w-lg rounded-full bg-foreground text-background hover:bg-foreground/90">
            <span className="font-medium tracking-tight">Continue</span>
          </Button>

          <p className="mb-8 w-full text-center text-sm tracking-tight text-foreground/40">
            Already a user?{" "}
            <span className="cursor-pointer underline">Log in</span>
          </p>

          <div className="relative mx-auto flex items-center justify-center opacity-20">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true })]}
            >
              <CarouselContent className="ml-0">
                {logos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 justify-center sm:basis-1/4 md:basis-1/5 lg:basis-1/4"
                  >
                    <div className="flex shrink-0 items-center justify-center lg:mx-10">
                      <div>
                        <img
                          src={logo.image}
                          alt={logo.description}
                          className={logo.className}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup9 };