# Banner 10

## Metadata
- **Category**: Banners
- **Objective**: Inline mini-notification banner with small, inline-ready announcement text for status updates and informational snippets
- **Use Case**: Perfect for very small status updates, informational snippets, cookie notices, policy updates, and non-intrusive alerts that don't require a full banner feel. Ideal for displaying important but non-urgent information in a compact, space-efficient format. Best for scenarios where minimal visual disruption is desired while still conveying critical information to users.
- **Visual Style**: Small, inline-ready announcement text with compact layout, minimal vertical height, and efficient use of space. Features subtle background contrast, clean typography sized for inline display, and professional styling that integrates seamlessly with surrounding content. Typically uses smaller font sizes and reduced spacing to maintain minimal footprint while ensuring readability.
- **Interactivity**: Minimal link interaction with inline navigation, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard accessibility for screen readers, focus management that maintains document flow, optional auto-dismiss after timeout, and intelligent positioning that doesn't interfere with main content flow.

## Description
An ultra-compact inline mini-notification banner optimized for displaying small status updates, informational snippets, and non-intrusive alerts. Features a space-efficient layout with inline-ready announcement text designed to convey important information with minimal visual disruption. Built for cookie notices, policy updates, system status messages, and any scenario where compact communication is preferred. The minimal design respects user attention while ensuring critical information remains accessible. Includes smooth animations, accessibility features, and responsive design that adapts to all screen sizes while maintaining minimal footprint.

## Source Code
```tsx
"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  link: {
    url: string;
    title: string;
  };
  headingStart: string;
  headingEnd: string;
};

export type Banner10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner10 = (props: Banner10Props) => {
  const { headingStart, link, headingEnd } = {
    ...Banner10Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="border-b border-border-primary bg-neutral-white px-[5%]">
      <div className="relative flex items-center justify-start py-2">
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

export const Banner10Defaults: Props = {
  headingStart: "Medium length banner heading",
  link: {
    url: "#",
    title: "with link",
  },
  headingEnd: "goes here",
};

Banner10.displayName = 'Banner10';
```

