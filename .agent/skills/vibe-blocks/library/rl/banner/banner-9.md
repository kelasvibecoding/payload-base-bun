# Banner 9

## Metadata
- **Category**: Banners
- **Objective**: Community engagement banner with social media icons and descriptive text for promoting social following and community joins
- **Use Case**: Perfect for promoting social media following, community joins, and audience engagement across platforms. Ideal for building social proof, increasing follower counts, and driving engagement to external communities. Best for content creators, brands, and platforms looking to grow their social media presence, announce community events, or cross-promote channels. Excellent for building trust through social validation and creating network effects.
- **Visual Style**: Social icons with descriptive text layout featuring prominent social media platform icons (Twitter/X, Facebook, Instagram, LinkedIn, etc.) paired with engaging descriptive text. Features recognizable platform-specific icons with brand colors, clean typography, and responsive design that adapts icon sizes for mobile. Typically includes subtle background contrast and maintains consistent brand alignment while highlighting social proof elements.
- **Interactivity**: Social link interactions with external navigation to social platforms, hover effects with subtle animations, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard accessibility for screen readers, focus management for screen readers, touch-friendly tap targets on mobile, optional tracking for click analytics, and intelligent link opening behavior (new tab vs. same tab based on platform best practices).

## Description
A community-focused engagement banner optimized for promoting social media following and community joins. Features a layout with prominent social media platform icons paired with engaging descriptive text, designed to drive followers and engagement across platforms. Built for content creators, brands, and platforms looking to grow their social media presence and build trust through social validation. The interactive design includes clickable social icons, hover effects, smooth animations, accessibility features, and responsive design that adapts beautifully across all devices. Perfect for growing audiences, announcing community events, cross-promoting channels, and creating network effects through social proof.

## Source Code
```tsx
"use client";

import React, { useState } from 'react';
import { FaXTwitter } from 'lucide-react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare } from 'lucide-react';
import { X } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SocialMediaLink = {
  url: string;
  icon: React.ReactNode;
};

type Props = {
  heading: string;
  description: string;
  logo: ImageProps;
  socialMediaLinks: SocialMediaLink[];
};

export type Banner9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner9 = (props: Banner9Props) => {
  const { heading, description, logo, socialMediaLinks } = {
    ...Banner9Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      
 className="relative border-b border-border-primary  bg-neutral-white px-[5%]"
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
        <div className="flex items-center gap-3">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.icon}
            </a>
          ))}
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner9Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
    alt: "vibecoding logo",
  },
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebook className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
  ],
};

Banner9.displayName = 'Banner9';
```

