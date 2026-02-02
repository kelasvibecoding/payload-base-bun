# Banner 4

## Metadata
- **Category**: Banners
- **Objective**: Social Proof & Channel Growth
- **Use Case**: Encouraging users to follow social channels or join a community.
- **Visual Style**: Heading + description + social icon links.
- **Interactivity**: Social link interactions, Visibility toggle.

## Description
A versatile banner component designed for site-wide announcements, lead generation, or visual motion at the top of a page.

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

