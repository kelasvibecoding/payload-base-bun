# Waitlist 1

## Metadata
- **Category**: Waitlist
- **Objective**: Provide a high-impact, visual "Coming Soon" or product launch waitlist capture section with social proof.
- **Use Case**: Pre-launch marketing pages for new SaaS features, products, or limited-access communities where building hype and capturing early interest is critical.
- **Visual Style**: Immersive architectural hero section featuring "BackgroundLines" for sophisticated visual depth, an ultra-bold (8xl) typographic headline, and a high-density "Social Proof" block with overlapping user avatars and a join counter.
- **Interactivity**: Minimalist, high-performance email capture input with a primary "Join" CTA, optimized for high conversion in a centered layout.

## Description
Waitlist 1 is the quintessential "Hype" component. By utilizing the `BackgroundLines` primitive, it creates a sense of movement and professional polish without distracting from the primary goal: capturing email addresses. The inclusion of a social proof avatar stack (the "+1000 people" counter) builds immediate trust and "fear of missing out" (FOMO), making it highly effective for early-stage startup launches.

## Source Code

```tsx
"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Waitlist1Props {
  className?: string;
}

const Waitlist1 = ({ className }: Waitlist1Props) => {
  return (
    <section
      className={cn(
        "flex h-full min-h-screen w-screen items-center justify-center overflow-hidden py-32 bg-background font-sans",
        className,
      )}
    >
      <BackgroundLines className="container flex w-full flex-col items-center justify-center px-4 md:h-full">
        <h2 className="relative z-20 py-2 text-center text-foreground text-5xl font-bold tracking-tighter md:py-10 lg:text-8xl">
          Join the Waitlist
        </h2>
        <p className="text-lg mx-auto max-w-xl text-center text-muted-foreground lg:text-xl font-medium">
          Secure your spot in the next generation of digital excellence. Join thousands of innovators already on the list.
        </p>

        {/* Capture Input */}
        <div className="relative z-20 mt-12 flex w-full max-w-md items-center gap-2 rounded-2xl bg-muted/30 border border-border p-1.5 focus-within:border-primary/50 transition-colors shadow-sm">
          <Input
            className="h-10 w-full border-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none placeholder:text-muted-foreground/60 font-medium"
            placeholder="Enter your professional email"
          />
          <Button className="h-10 rounded-xl px-8 font-bold shadow-lg hover:shadow-primary/20 transition-all">
            Join Now
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center -space-x-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <Avatar key={index} className="size-10 border-4 border-background shadow-md">
                  <AvatarImage
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar${index + 1}.png`}
                    alt="Waitlist Member"
                  />
                </Avatar>
              ))}
            </span>
            <div className="ml-2 flex flex-col items-start leading-none gap-1">
              <span className="text-sm font-bold text-foreground">+1.2k innovators</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Already Joined</span>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export { Waitlist1 };
```
