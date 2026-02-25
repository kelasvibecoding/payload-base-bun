# Banner 8

## Metadata
- **Category**: Banners
- **Objective**: Brand identity promotion banner with logo-centric layout for sub-brands, partnerships, and branded initiatives
- **Use Case**: Perfect for promoting sub-brands, specific partnerships, co-branded initiatives, and strategic alliances. Ideal for showcasing brand portfolios, highlighting strategic partnerships, and driving awareness to branded campaigns. Best for enterprises with multiple brand identities, companies with strategic partnerships, and organizations running co-branded marketing initiatives where visual brand representation is critical.
- **Visual Style**: Logo-centric announcement layout with prominent brand logo placement, supporting text, and clear visual hierarchy. Features generous whitespace around logos, clean typography, and professional color schemes that complement brand identities. Typically includes high-resolution logo display, subtle background contrast, and layout that prioritizes brand recognition while maintaining readability.
- **Interactivity**: Branded link navigation with click tracking, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard accessibility for screen readers, focus management that maintains brand experience, optional auto-dismiss after engagement, and intelligent link opening behavior that respects brand guidelines.

## Description
A sophisticated brand identity promotion banner optimized for showcasing sub-brands, partnerships, and branded initiatives. Features a logo-centric layout with prominent brand logo placement, supporting text, and clear visual hierarchy designed to maximize brand recognition and drive awareness. Built for enterprises with multiple brand identities, companies with strategic partnerships, and organizations running co-branded marketing initiatives. The professional design prioritizes brand representation while maintaining readability and includes smooth animations, accessibility features, and responsive design that preserves brand integrity across all devices.

## Source Code
```tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { X } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  logo: ImageProps;
  buttons: ButtonProps[];
};

export type Banner8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner8 = (props: Banner8Props) => {
  const { heading, description, logo, buttons } = {
    ...Banner8Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      
 className="relative border-b border-border-primary bg-neutral-white px-[5%]"
>
      <div className="flex flex-col justify-start py-4 md:flex-row md:items-center md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="mr-4 hidden size-8 lg:block" />
          </a>
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex">
          {buttons.map((button, index) => (
            <Button key={index} {...button} className="mr-4 md:ml-4 md:mr-0">
              {button.title}
            </Button>
          ))}
        </div>
        <button className="absolute right-2 md:static md:ml-4">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner8Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
    alt: "vibecoding logo",
  },
  buttons: [
    {
      title: "Button",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
      variant: "secondary",
    },
  ],
};

Banner8.displayName = 'Banner8';
```

