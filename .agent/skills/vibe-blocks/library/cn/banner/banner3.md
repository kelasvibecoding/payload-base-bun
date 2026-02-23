# Banner 3

## Metadata
- **Category**: Banner
- **Objective**: Display a promotional banner with title, description, and call-to-action button.
- **Use Case**: Sales promotions, special offers, and marketing announcements.
- **Visual Style**: Primary color background with white text and secondary button.
- **Interactivity**: Dismissible with close button, clickable button, and controlled visibility state.

## Description
A promotional banner component featuring a title, description, and call-to-action button. The banner has a primary color background with white text for high contrast and visibility. It includes a close button to dismiss the banner, a clickable button for the call-to-action, and the visibility state is managed using React hooks. The component accepts props for customization of title, description, button text, and button URL.

## Source Code
```tsx
"use client";

import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Banner3Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
  className?: string;
}

const Banner3 = ({
  title = "Black Friday Sale! 🎉",
  description = "Up to 70% off on all components. Limited time only!",
  buttonText = "Shop Now",
  buttonUrl = "https://shadcnblocks.com",
  defaultVisible = true,
  className,
}: Banner3Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className={cn("w-full bg-primary p-4", className)}>
      <div className="container">
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 h-8 w-8 md:hidden"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex flex-col items-start gap-3 pt-2 text-primary-foreground md:flex-row md:items-center md:pt-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-sm text-primary-foreground/80">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="dark w-full md:w-auto"
              variant="secondary"
              asChild
            >
              <a href={buttonUrl} target="_blank">
                {buttonText}
                <ShoppingBag className="mr-2 h-3 w-3" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-8 w-8 invert md:inline-flex"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner3 };
```
