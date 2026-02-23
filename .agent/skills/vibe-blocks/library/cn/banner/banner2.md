# Banner 2

## Metadata
- **Category**: Banner
- **Objective**: Display a dismissible announcement banner with a title, description, and link within a container.
- **Use Case**: Announcements, release notes, promotions, and important updates that require user attention within a contained layout.
- **Visual Style**: Full-width banner with muted background, container padding, and close button.
- **Interactivity**: Dismissible with close button, clickable link, and controlled visibility state.

## Description
A dismissible announcement banner component featuring a title, description, and clickable link. The banner spans the full width of the container with a muted background for subtle visibility. It includes a close button to dismiss the banner, and the visibility state is managed using React hooks. The component accepts props for customization of title, description, link text, and link URL.

## Source Code
```tsx
"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Banner2Props {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  defaultVisible?: boolean;
  className?: string;
}

const Banner2 = ({
  title = "Version 2.0 is now available!",
  description = "Read the full release notes",
  linkText = "here",
  linkUrl = "#",
  defaultVisible = true,
  className,
}: Banner2Props) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className={cn("w-full bg-muted px-4 py-3", className)}>
      <div className="container">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <span className="text-sm">
              <span className="font-medium">{title}</span>{" "}
              <span className="text-muted-foreground">
                {description}{" "}
                <a
                  href={linkUrl}
                  className="underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                >
                  {linkText}
                </a>
                .
              </span>
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 h-8 w-8 flex-none"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Banner2 };
```
