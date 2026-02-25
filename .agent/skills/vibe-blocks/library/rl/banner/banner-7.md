# Banner 7

## Metadata
- **Category**: Banners
- **Objective**: Centered formal announcement banner with balanced text hierarchy and prominent CTA button for official communications
- **Use Case**: Perfect for official site-wide announcements that require a balanced, formal hierarchy, such as policy updates, system maintenance notices, corporate communications, and important organizational messages. Ideal for scenarios where credibility and professionalism are paramount. Best for enterprise applications, corporate websites, and platforms where official communications need to convey authority and trustworthiness while maintaining user engagement.
- **Visual Style**: Centered, symmetrical layout with prominent heading, descriptive text, and primary CTA button arranged in perfect vertical alignment. Features clean, balanced typography with generous whitespace, professional color schemes, and subtle visual hierarchy that emphasizes credibility. Typically uses muted backgrounds with high-contrast text for maximum readability and formal aesthetic.
- **Interactivity**: Centered button CTA with click handling, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard accessibility support, focus management for screen readers, optional auto-dismiss after action, and professional transition effects that maintain formal tone.

## Description
A sophisticated centered announcement banner optimized for official communications and formal site-wide announcements. Features a perfectly balanced, symmetrical layout with centered heading, descriptive text, and prominent CTA button designed to convey authority and professionalism. Built for enterprise applications, corporate websites, and platforms where credibility and trustworthiness are essential. The centered design creates visual balance and draws attention to important official messages while maintaining a formal, credible aesthetic. Includes smooth animations, accessibility features, and responsive design that preserves professional appearance across all devices.

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

export type Banner7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner7 = (props: Banner7Props) => {
  const { heading, description, logo, button } = {
    ...Banner7Defaults,
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
      <div className="flex flex-col justify-start py-4 md:flex-row md:items-center md:justify-center md:py-3">
        <div className="mr-7 flex flex-col items-start md:ml-12 md:mr-0 md:flex-1 md:flex-row md:items-center md:justify-center">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="mr-4 hidden size-8 lg:block" />
          </a>
          <div className="mb-4 md:mb-0 md:mr-6">
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div>
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
        <button className="absolute right-2 top-2 md:static md:ml-4 md:size-8">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner7Defaults: Props = {
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

Banner7.displayName = 'Banner7';
```

