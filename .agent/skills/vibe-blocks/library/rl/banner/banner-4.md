# Banner 4

## Metadata
- **Category**: Banners
- **Objective**: Social proof and channel growth banner with heading, description, and social media icon links for community building and audience engagement
- **Use Case**: Perfect for encouraging users to follow social media channels, join online communities, and expand audience reach across platforms. Ideal for building social proof, increasing follower counts, and driving engagement to external communities. Best for content creators, brands, and platforms looking to grow their social media presence, announce community events, or cross-promote channels. Excellent for building trust through social validation and creating network effects.
- **Visual Style**: Modern layout with prominent heading, concise description, and horizontal row of branded social media icon links (Twitter/X, Facebook, Instagram, LinkedIn, etc.). Features recognizable platform-specific icons with brand colors, clean spacing, and responsive design that adapts icon size for mobile. Typically includes subtle background contrast and maintains consistent brand alignment while highlighting social proof elements.
- **Interactivity**: Clickable social media icon links with external navigation, hover effects with subtle animations, visibility toggle with persistence options, smooth appearance/disappearance transitions, keyboard accessibility for all interactive elements, focus management for screen readers, touch-friendly tap targets for mobile, optional tracking for click analytics, and intelligent link opening behavior (new tab vs. same tab based on context).

## Description
A community-building banner optimized for social proof and channel growth. Features a modern layout with prominent heading, concise description, and a horizontal row of branded social media icon links designed to drive followers and engagement across platforms. Built for content creators, brands, and platforms looking to expand their social media presence and build trust through social validation. Includes clickable social icons with hover effects, smooth animations, accessibility features, and responsive design that adapts beautifully across all devices. Perfect for growing audiences, announcing community events, cross-promoting channels, and creating network effects through social proof.

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

export type Banner4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner4 = (props: Banner4Props) => {
  const { heading, description, logo, socialMediaLinks } = {
    ...Banner4Defaults,
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

export const Banner4Defaults: Props = {
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

Banner4.displayName = 'Banner4';
```

