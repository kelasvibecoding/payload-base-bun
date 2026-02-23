# Banner 4

## Metadata
- **Category**: Banner
- **Objective**: Display a centered promotional banner with title and description.
- **Use Case**: Informational announcements, alerts, and updates that require center alignment.
- **Visual Style**: Primary color background with centered text layout.
- **Interactivity**: Dismissible with close button and controlled visibility state.

## Description
A centered promotional banner component featuring a title and description. The banner has a primary color background with white text for high contrast and visibility. It includes a close button to dismiss the banner, and the visibility state is managed using React hooks. The component accepts props for customization of title and description. The layout is centered both horizontally and vertically within the container.

## Source Code
```tsx
"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Banner4Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
  className?: string;
}

const Banner4 = ({
  title = "Black Friday Sale! 🎉",
  description = "Up to 70% off on all components. Limited time only!",
  defaultVisible = true,
  className,
}: Banner4Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className={cn("w-full bg-primary p-4", className)}>
      <div className="container">
        <div className="relative flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 h-8 w-8 md:hidden"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex flex-col items-center gap-3 pt-2 text-primary-foreground md:flex-row md:items-center md:pt-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-sm text-primary-foreground/80">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
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

export { Banner4 };
```
