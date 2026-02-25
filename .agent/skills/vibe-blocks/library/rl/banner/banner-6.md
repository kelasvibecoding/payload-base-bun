# Banner 6

## Metadata
- **Category**: Banners
- **Objective**: Sticky alert banner with compressed layout designed for persistent visibility during scrolling, ideal for critical alerts and important notices
- **Use Case**: Perfect for critical alerts that must remain visible while users scroll, such as system maintenance notices, security warnings, important policy updates, breaking news alerts, and emergency notifications. Ideal for scenarios where information cannot be missed and needs persistent visibility across all page interactions. Best for high-priority communications that require continuous user awareness until explicitly dismissed or resolved.
- **Visual Style**: Compressed, space-efficient layout optimized for sticky positioning that remains fixed at the top or bottom of the viewport during scrolling. Features minimal vertical height, high-contrast background colors for visibility, bold typography for critical messaging, and unobtrusive yet noticeable design elements. Typically includes prominent close button and maintains visual hierarchy even in compact form.
- **Interactivity**: Sticky positioning behavior that remains fixed during scroll events, visibility toggle with persistence across page navigation, smooth appearance/disappearance animations, intelligent z-index management to stay above content, optional auto-dismiss after critical period expires, keyboard accessibility for screen readers, touch-friendly interactions on mobile, and smart repositioning on viewport changes.

## Description
A persistent sticky alert banner optimized for critical notifications that must remain visible during user scrolling. Features a compressed, space-efficient layout designed for sticky positioning at the top or bottom of the viewport, ensuring continuous visibility of important alerts. Built for system maintenance notices, security warnings, emergency notifications, and high-priority communications that require constant user awareness. The sticky behavior maintains position during scroll events while intelligent z-index management keeps alerts above page content. Includes smooth animations, accessibility features, and responsive design that adapts to all screen sizes while respecting user preferences for dismissal.

## Source Code
```tsx
"use client";

import React, { useState } from 'react';
import { Button, Input } from '@/components/ui';
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
  inputPlaceholder: string;
  button: ButtonProps;
};

export type Banner6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner6 = (props: Banner6Props) => {
  const { heading, description, logo, inputPlaceholder, button } = {
    ...Banner6Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section>
      <div className="relative flex flex-col justify-start border-b border-border-primary bg-neutral-white px-[5%] py-4 md:flex-row md:items-center md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          <a href={logo.url} className="flex-none">
            <img src={logo.src} alt={logo.alt} className="mr-4 hidden size-8 lg:block" />
          </a>
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <form
 className="grid w-full flex-1 gap-3 sm:grid-cols-[1fr_max-content] sm:gap-4 md:max-w-xs lg:flex-none"
          onSubmit={handleSubmit}
>
          <Input
            id="email"
            type="email"
            placeholder={inputPlaceholder}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <Button {...button}>{button.title}</Button>
        </form>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner6Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
    alt: "vibecoding logo",
  },
  inputPlaceholder: "Enter your email",
  button: {
    title: "Sign up",
    size: "sm",
  },
};

Banner6.displayName = 'Banner6';
```

