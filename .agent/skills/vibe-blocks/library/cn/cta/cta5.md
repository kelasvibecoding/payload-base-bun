# CTA 5

## Metadata
- **Category**: CTA
- **Objective**: Split-screen call to action with image background and form overlay.
- **Use Case**: Lead generation section with background image and email capture form.
- **Visual Style**: Two-column layout with image background and form card overlay.
- **Interactivity**: Email input form with submit button and responsive layout.

## Description
A modern call to action component featuring a split-screen layout with a background image on one side and a form card overlay for email capture on the other. Designed for lead generation with professional styling and responsive design.

## Features
- Split-screen layout with image background
- Form card overlay with email input
- Professional form styling with proper validation
- Responsive two-column design
- Background image with proper aspect ratio
- Clean form input and button styling
- Professional typography and spacing
- Card-based form container with shadow effects

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Cta5Props {
  className?: string;
}

const Cta5 = ({ className }: Cta5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest news and updates delivered to your inbox.
            </p>
            <Card className="p-6">
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
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta5 };
```
