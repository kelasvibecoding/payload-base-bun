# CTA 17

## Metadata
- **Category**: CTA
- **Objective**: Newsletter signup call to action with email capture and social proof badges.
- **Use Case**: Email list building with subscriber testimonials and signup form integration.
- **Visual Style**: Two-column layout with testimonial cards and email capture form.
- **Interactivity**: Email input form with submit button and testimonial card interactions.

## Description
A comprehensive newsletter call to action component featuring email capture functionality, subscriber testimonials with avatar displays, and compelling copy to encourage email list signups. Designed for building email audiences with social proof and trust indicators.

## Features
- Email capture form with input validation
- Subscriber testimonials with avatar displays
- Two-column responsive layout
- Professional form styling with card containers
- Trust-building social proof through testimonials
- Clean typography and spacing hierarchy
- Mobile-friendly form and testimonial design
- Prominent signup button with icon integration
- Avatar stack for testimonial visualization

## Source Code
```tsx
import { ArrowRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Cta17Props {
  className?: string;
}

const Cta17 = ({ className }: Cta17Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Join thousands of satisfied readers
            </h2>
            <p className="text-muted-foreground">
              Get weekly insights, tips, and exclusive content delivered to your inbox.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      "The best newsletter I've ever subscribed to. The content is always relevant and actionable."
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">- John Doe, CEO</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      "I look forward to every issue. The insights have helped me grow my business significantly."
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">- Sarah Miller, Founder</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8">
              <h3 className="mb-2 text-xl font-semibold">Subscribe to our newsletter</h3>
              <p className="mb-6 text-muted-foreground">
                Get weekly insights, tips, and exclusive content.
              </p>
              <form className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button>
                  Subscribe Now
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                Free to subscribe. Unsubscribe anytime.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta17 };
```
