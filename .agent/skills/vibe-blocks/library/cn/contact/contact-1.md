# Contact 1

## Metadata
- **Category**: Contact
- **Objective**: Demo booking form with social proof and background effects.
- **Use Case**: Contact page for booking demos with team avatars, expected benefits, and partner logos.
- **Visual Style**: Two-column layout with gradient background effects.
- **Interactivity**: Form submission with multiple input fields and selects.

## Description
A comprehensive demo booking section featuring a form with company details, country and company size selectors, alongside social proof elements including team avatars, expected benefits checklist, and partner logos.

## Source Code
```tsx
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Contact1Props {
  className?: string;
}

const Contact1 = ({ className }: Contact1Props) => {
  return (
    <section className={cn("relative py-32", className)}>
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-medium lg:text-5xl">
              Book free demo now
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              In non libero bibendum odio pellentesque ullamcorper. Aenean
              condimentum, dolor commodo pulvinar bibendum.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="mt-16 flex overflow-hidden">
                  <Avatar className="size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold">What you can expect:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">
                      Detailed product presentation tailored to you
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">
                      Consulting on your messaging strategy
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">
                      Answers to all the questions you have
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                  alt="placeholder"
                  className="h-6 dark:invert"
                />
