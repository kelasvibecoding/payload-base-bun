# Banner 5

## Metadata
- **Category**: Banner
- **Objective**: Display a floating dismissible banner with title, description, and call-to-action button.
- **Use Case**: Floating announcements, notifications, and alerts that appear over content.
- **Visual Style**: Floating card with rounded corners, border, and shadow effect.
- **Interactivity**: Dismissible with close button, clickable button, and controlled visibility state.

## Description
A floating dismissible banner component featuring a title, description, and call-to-action button. The banner appears as a floating card with rounded corners, border, and shadow effect. It is positioned absolutely at the top of the viewport with a maximum width constraint. The banner includes a close button to dismiss it, a clickable button for the call-to-action, and the visibility state is managed using React hooks. The component accepts props for customization of title, description, button text, and button URL.

## Source Code
```tsx
"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Banner5Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
  className?: string;
}

const Banner5 = ({
  title = "Version 2.0 is now available!",
  description = "Check out all the new features.",
  buttonText = "Learn More",
  buttonUrl = "https://shadcnblocks.com",
  defaultVisible = true,
  className,
}: Banner5Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section
      className={cn(
        "absolute top-4 right-0 left-0 z-50 mx-auto max-w-2xl animate-fade-in",
        className,
      )}
    >
      <div className="mx-4">
        <div className="w-full rounded-lg border bg-background p-4 shadow-md">
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 h-8 w-8 md:hidden"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0">
              <div className="flex flex-col gap-1 md:flex-row md:items-center">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto"
                asChild
              >
                <a href={buttonUrl} target="_blank">
                  {buttonText}
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-8 w-8 md:inline-flex"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner5 };
```
