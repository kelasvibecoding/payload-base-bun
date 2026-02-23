# CTA 1

## Metadata
- **Category**: CTA
- **Objective**: Simple card-based call to action with image and button.
- **Use Case**: Basic promotional section with headline, description, and action button.
- **Visual Style**: Card layout with image and content side-by-side on desktop, stacked on mobile.
- **Interactivity**: Single action button with hover effects.

## Description
A clean and simple call to action component featuring a card layout with an image placeholder, headline, description text, and a prominent action button. The layout adapts responsively from side-by-side on desktop to stacked on mobile devices.

## Features
- Card-based container with border styling
- Responsive flex layout (column on mobile, row on desktop)
- Image placeholder with aspect-video ratio
- Icon decoration with Sparkles icon
- Primary action button with arrow icon
- Professional typography with proper spacing
- Muted background styling

## Source Code
```tsx
import { ArrowRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta1Props {
  className?: string;
}

const Cta1 = ({ className }: Cta1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Card className="flex flex-col justify-between border-muted pb-0 md:flex-row md:py-6">
          <div className="p-6 md:max-w-96">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-muted">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </span>
              <h4 className="text-2xl font-bold">Call to Action</h4>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <Button className="mt-8">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="aspect-video object-cover md:max-w-96"
          />
        </Card>
      </div>
    </section>
  );
};

export { Cta1 };
```
