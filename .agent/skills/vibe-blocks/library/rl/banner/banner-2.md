# Banner 2

## Metadata
- **Category**: Banners
- **Objective**: Simple product announcement banner with heading, description, and single primary CTA button for alerts and sale notices
- **Use Case**: Perfect for short product alerts, seasonal sale notices, feature announcements, and time-sensitive promotions that require immediate user attention. Ideal for e-commerce sites, SaaS platforms, and marketing campaigns where a single, clear call-to-action drives conversions. Best for scenarios where users need to be informed quickly without overwhelming them with choices.
- **Visual Style**: Clean, focused layout with prominent heading, concise description text, and a single primary CTA button. Minimalist design with strong visual hierarchy, generous whitespace, and attention-grabbing button styling. Typically features contrasting colors to draw attention while maintaining brand consistency.
- **Interactivity**: Single primary button with click handling, visibility toggle with persistence options, smooth appearance/disappearance animations, optional auto-dismiss after action, and keyboard accessibility support. Includes focus management for screen readers and touch-friendly tap targets.

## Description
A streamlined announcement banner optimized for product alerts, seasonal sales, and time-sensitive promotions. Features a clean, focused layout with heading, description, and single primary CTA button designed to capture attention without overwhelming users. Built for e-commerce, SaaS platforms, and marketing campaigns where clear, concise messaging drives action. The dismissible design respects user preferences while maintaining visibility for maximum impact. Includes smooth animations, accessibility features, and responsive design that adapts to all screen sizes.

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
  button: ButtonProps;
};

export type Banner2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner2 = (props: Banner2Props) => {
  const { heading, description, logo, button } = {
    ...Banner2Defaults,
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
        <div>
          <Button {...button}>{button.title}</Button>
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner2Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
    alt: "vibecoding logo",
  },
  button: {
    title: "Button",
    size: "sm",
  },
};

Banner2.displayName = 'Banner2';
```

