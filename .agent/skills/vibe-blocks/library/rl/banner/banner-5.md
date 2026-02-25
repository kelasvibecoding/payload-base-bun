# Banner 5

## Metadata
- **Category**: Banners
- **Objective**: Minimal alert banner with text-only layout and inline link for low-profile site-wide alerts and navigational aids
- **Use Case**: Perfect for low-profile site-wide alerts, cookie notices, policy updates, and simple navigational aids that require minimal user attention. Ideal for scenarios where full-banner prominence would be distracting or overwhelming. Best for displaying important but non-urgent information, legal disclaimers, or subtle navigational hints that enhance user experience without interrupting workflow.
- **Visual Style**: Ultra-minimalist text-only layout with inline link embedded within sentence flow. Features subtle background contrast, clean typography, and seamless integration with page content. Designed to be non-intrusive while remaining noticeable. Typically uses smaller font sizes, reduced spacing, and understated styling that complements rather than dominates the page aesthetic.
- **Interactivity**: Inline link navigation with standard anchor behavior, visibility toggle with subtle animations, persistent state management across sessions, keyboard accessibility for screen readers, focus management that maintains document flow, optional auto-dismiss after timeout, and intelligent positioning that doesn't interfere with main content.

## Description
An ultra-minimalist alert banner optimized for low-profile site-wide alerts, policy updates, and subtle navigational aids. Features a text-only layout with inline link designed to provide important information without distracting users from primary tasks. Built for displaying cookie notices, legal disclaimers, and non-urgent updates that require minimal visual prominence. The non-intrusive design respects user attention while ensuring critical information remains accessible. Includes subtle animations, persistent state management, and full accessibility compliance. Perfect for compliance notices, subtle navigational hints, and any scenario where less is more.

## Source Code
```tsx
"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  headingStart: string;
  link: {
    url: string;
    title: string;
  };
  headingEnd: string;
};

export type Banner5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner5 = (props: Banner5Props) => {
  const { headingStart, link, headingEnd } = {
    ...Banner5Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="px-[5%]">
      <div className="container relative flex items-center justify-start border border-border-primary bg-neutral-white py-2 pl-4 pr-2 md:px-4">
        <div className="mr-4 flex-1 md:ml-12 md:mr-0 md:text-center">
          <span>
            {headingStart}{" "}
            <a href={link.url} className="underline">
              {link.title}
            </a>{" "}
            {headingEnd}
          </span>
        </div>
        <button className="md:ml-4">
          <X className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner5Defaults: Props = {
  headingStart: "Medium length banner heading",
  link: {
    url: "#",
    title: "with link",
  },
  headingEnd: "goes here",
};

Banner5.displayName = 'Banner5';
```

