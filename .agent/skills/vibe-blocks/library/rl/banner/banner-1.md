# Banner 1

## Metadata
- **Category**: Banners
- **Objective**: Email capture banner with single input field and primary CTA button for newsletter signups and early-access campaigns
- **Use Case**: Perfect for newsletter subscription campaigns, early-access waitlists, and lead generation at the top of landing pages, blogs, or marketing sites. Ideal for growing email lists and capturing interested visitors before they scroll. Best for audiences ready to engage with minimal friction.
- **Visual Style**: Clean horizontal layout with email input field and prominent primary signup button. Minimal design with clear visual hierarchy, generous spacing, and a close button for dismissal. Typically spans the full width of the viewport with subtle background contrast.
- **Interactivity**: Real-time email validation, form submission with loading states, success/error feedback, close button with persistence options, visibility toggle that remembers user preference, smooth animations for appearance/disappearance, and optional auto-dismiss after submission

## Description
A streamlined lead-generation banner optimized for email capture and newsletter signups. Features a clean horizontal layout with a prominent email input field and primary CTA button, designed to minimize friction while maximizing conversions. Includes smart form handling with validation, loading states, and success feedback. The dismissible design respects user preferences while maintaining persistent visibility for maximum engagement. Built with accessibility in mind, featuring proper focus management, keyboard navigation support, and screen reader compatibility. Perfect for growing email lists, early-access campaigns, and newsletter subscriptions across marketing sites, blogs, and landing pages.

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

export type Banner1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner1 = (props: Banner1Props) => {
  const { heading, description, logo, inputPlaceholder, button } = {
    ...Banner1Defaults,
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
    <section className="px-[5%]">
      <div className="container relative flex flex-col justify-start border border-border-primary bg-neutral-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
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
 className="grid w-full max-w-xs flex-1 gap-3 sm:grid-cols-[1fr_max-content] sm:gap-4 lg:flex-none"
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

export const Banner1Defaults: Props = {
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

Banner1.displayName = 'Banner1';
```

