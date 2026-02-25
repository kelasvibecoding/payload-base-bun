# Promo Banner 2

## Metadata
- **Category**: Promo Banner
- **Objective**: Display a simple, minimalist announcement or sale banner.
- **Use Case**: General sales, basic announcements, or site-wide alerts where complexity isn't needed.
- **Visual Style**: Clean, text-only layout with a primary background. It breaks the text into logical chunks: message, sub-message (discount), and a CTA link with a subtle `ArrowRight`.
- **Interactivity**: Includes a simple hover state on the anchor link (underline).

## Description
Promo Banner 2 is the most standard, ubiquitous top-bar banner. It gets straight to the point without any icons or progress bars, making it extremely lightweight and universally applicable to any website type (SaaS, e-commerce, or content).

## Source Code

```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface PromoBanner2Props {
  message?: string;
  discount?: string;
  link?: string;
  linkText?: string;
  className?: string;
}

const PromoBanner2 = ({
  message = "Winter Sale",
  discount = "Up to 50% off",
  link = "#",
  linkText = "Shop Now",
  className,
}: PromoBanner2Props) => {
  return (
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-sm">
          <span className="font-semibold">{message}</span>
          <span className="hidden sm:inline">·</span>
          <span>{discount}</span>
          <a
            href={link}
            className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:no-underline"
          >
            {linkText}
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { PromoBanner2 };
```
