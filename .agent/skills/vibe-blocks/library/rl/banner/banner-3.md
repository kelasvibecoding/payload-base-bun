# Banner 3

## Metadata
- **Category**: Banners
- **Objective**: Dual-action announcement banner with heading, description, and two CTA buttons (primary and secondary) for comprehensive user choices
- **Use Case**: Perfect for general-purpose announcements that require user decision-making, such as product updates with both "Learn More" and "Dismiss" options, cookie consent banners with "Accept" and "Manage Settings" choices, or promotional offers with "Shop Now" and "Remind Me Later" actions. Ideal for scenarios where users benefit from having two clear, distinct choices rather than a single call-to-action.
- **Visual Style**: Balanced layout with prominent heading, descriptive text, and two clearly differentiated CTA buttons (primary and secondary). Features distinct visual hierarchy with primary button using brand accent colors and secondary button using subtle styling. Clean spacing with responsive design that stacks buttons vertically on mobile when needed. Typically includes a close button for dismissal and maintains consistent branding throughout.
- **Interactivity**: Dual-button interaction handling with independent click events, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard navigation support for both buttons, focus management for accessibility, optional auto-dismiss after action, and intelligent button state management (e.g., disabling primary after click). Includes close button functionality and remembers user preferences across sessions.

## Description
A sophisticated dual-action announcement banner optimized for scenarios requiring user choice and comprehensive decision-making. Features a balanced layout with prominent heading, descriptive text, and two clearly differentiated CTA buttons designed to guide users toward preferred actions while providing alternative options. Built for product updates, cookie consent, promotional offers, and any scenario where two distinct choices improve user experience. Includes smart button state management, accessibility features, smooth animations, and persistent user preference handling. Perfect for marketing sites, SaaS platforms, and any application requiring nuanced user interaction.

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

export type Banner3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner3 = (props: Banner3Props) => {
  const { heading, description, logo, buttons } = {
    ...Banner3Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="px-[5%]">
      <div className="container relative flex flex-col justify-start border border-border-primary bg-neutral-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
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
        <button className="absolute right-2 top-2 ml-4 md:static">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner3Defaults: Props = {
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

Banner3.displayName = 'Banner3';
```

