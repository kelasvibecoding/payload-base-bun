# CTA 12

## Metadata
- **Category**: CTA
- **Objective**: Newsletter signup call to action with email capture and social proof.
- **Use Case**: Email list building with subscriber count and signup form.
- **Visual Style**: Two-column layout with signup form and subscriber statistics.
+- **Interactivity**: Email input form with submit button and social proof display.

## Description
A newsletter-focused call to action component featuring email capture functionality, subscriber count social proof, and compelling copy to encourage email list signups. Designed for building email audiences with trust indicators.

## Features
- Email capture form with input validation
- Subscriber count social proof
- Two-column responsive layout
- Professional form styling
- Trust-building statistics
- Clean typography and spacing
- Mobile-friendly form design
- Prominent signup button

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Cta12Props {
  className?: string;
}

const Cta12 = ({ className }: Cta12Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Stay in the loop
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join our newsletter and get the latest updates delivered to your inbox.
            </p>
          </div>
          <Card className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Subscribe now</h3>
                <p className="text-muted-foreground">
                  Get weekly insights, tips, and exclusive content.
                </p>
              </div>
              <form className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                />
                <Button>
                  Subscribe
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Join 10,000+ subscribers</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Cta12 };
```
