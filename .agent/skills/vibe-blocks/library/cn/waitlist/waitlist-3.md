# Waitlist 3

## Metadata
- **Category**: Waitlist
- **Objective**: Provide a split-layout early access registration portal with corporate branding and high-fidelity social proof.
- **Use Case**: B2B SaaS launches, developer tool betas, or enterprise software early access programs where the "Launch Partner" identity is central.
- **Visual Style**: Clean, modern split-grid architecture. Features a left-aligned data column with company logo integration, high-contrast badges, typographic headings, and an interactive signup form. Includes an overlapping "Stack-style" avatar group for social proof. The right column features a full-bleed architectural/geometric image to convey stability and structure.
- **Interactivity**: Stateful registration form with email validation, dynamic copyright year auto-calculation, and hover-responsive links for company attribution.

## Description
Waitlist 3 is the "Enterprise Beta" component. It prioritizes the "Professional Authority" brand archetype by providing a clear, structured portal for early adopters. The split layout creates a sense of scale and importance, while the inclusion of the company logo and "Coming Soon" badge builds high-intent anticipation. The avatar stack provides the necessary community consensus needed for B2B conversion, showing that industry peers are already on board.

## Source Code

```tsx
"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Waitlist3Props {
  companyLogo?: string;
  badge?: string;
  heading?: string;
  description?: string;
  joinedPeople?: number;
  avatars?: string[];
  companyName?: string;
  companyUrl?: string;
  image?: string;
  className?: string;
}

const DEFAULT_AVATARS = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
];

const Waitlist3 = ({
  companyLogo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  badge = "COMING SOON - Q4 2024",
  heading = "Deploying the next-generation of infrastructure?",
  description = "Join our exclusive early access program to get early-mover advantage on our cutting-edge development primitives and be the first to experience the future of high-performance architecture.",
  joinedPeople = 1240,
  avatars = DEFAULT_AVATARS,
  companyName = "Infrastructure Pro",
  companyUrl = "#",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/Geometric Staircase and Concrete Wall.jpeg",
  className,
}: Waitlist3Props) => {
  return (
    <section className={cn("py-24 lg:h-screen lg:min-h-[800px] bg-background font-sans", className)}>
      <div className="container h-full">
        <div className="grid h-full grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-12">
          {/* Form & Context Column */}
          <div className="col-span-1 flex h-full flex-col items-start justify-between gap-16 py-8">
            <img
              src={companyLogo}
              alt="Brand Logo"
              className="w-36 dark:invert brightness-0 dark:brightness-200"
            />

            <div className="flex max-w-sm flex-col gap-6 sm:max-w-full lg:max-w-md">
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1 text-[10px] font-bold tracking-[0.2em] border-primary/20 bg-primary/5 text-primary">
                {badge}
              </Badge>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground leading-[1.1]">
                {heading}
              </h1>

              <p className="max-w-md text-lg font-medium leading-relaxed text-muted-foreground italic">
                &ldquo;{description}&rdquo;
              </p>

              <div className="mt-4 space-y-6">
                <form className="flex w-full max-w-sm items-center space-x-2">
                    <Input 
                        type="email" 
                        required 
                        placeholder="engineering@company.com" 
                        className="h-12 rounded-xl border-border bg-muted/30 font-medium focus:ring-primary/20"
                    />
                    <Button type="submit" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        Join Access
                    </Button>
                </form>

                <div className="flex items-center gap-6">
                  <div className="relative flex items-center h-10">
                    {avatars.map((avatar, index) => (
                        <div 
                            key={`waitlist-avatar-${index}`}
                            className="size-10 rounded-full border-2 border-background ring-2 ring-primary/5 overflow-hidden transition-transform hover:scale-110 hover:z-50"
                            style={{
                                marginLeft: index === 0 ? 0 : "-12px",
                                zIndex: index,
                            }}
                        >
                            <img
                            src={avatar}
                            alt="User"
                            className="size-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span className="text-foreground">{joinedPeople}+</span> engineers enrolled
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
              © {new Date().getFullYear()} —{" "}
              <a
                href={companyUrl}
                className="text-primary hover:underline transition-all"
              >
                {companyName}
              </a>{" "}
              — Architectural Excellence Guaranteed.
            </p>
          </div>

          {/* Immersive Vision Column */}
          <div className="col-span-1 relative flex h-full flex-col items-start justify-between overflow-hidden rounded-[3rem] border border-border/50 shadow-2xl">
            <img
              src={image}
              alt="Product Vision"
              className="h-full w-full object-cover grayscale-[40%] brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Waitlist3 };
```
