# Banner 13

## Metadata
- **Category**: Banners
- **Objective**: Bold large-scale ticker with Framer Motion-powered scrolling animation for impactful announcements and high-visibility messaging
- **Use Case**: Perfect for bold, high-impact announcements that need to stand out through scale and motion, such as product launches, major event promotions, breaking news alerts, and large-scale marketing campaigns. Ideal for creating immediate visual impact, driving attention to critical messages, and adding dynamic visual interest to header sections. Best for event websites, marketing landing pages, e-commerce platforms with major sales, and any website that wants to deliver high-visibility announcements with maximum visual impact.
- **Visual Style**: Large-scale scrolling text ticker with bold typography, generous spacing, and high-contrast colors for maximum readability and impact. Features Framer Motion-powered animations with smooth scrolling effects, responsive design that adapts font sizes and animation speed for mobile, and optional background contrast to enhance visibility.
- **Interactivity**: High-impact visual loop with configurable animation speed, direction, and pause-on-hover behavior. Includes Framer Motion-powered animations optimized for performance, visibility toggle with persistence options, keyboard accessibility for screen readers, focus management for screen readers, and responsive design that adjusts animation parameters based on screen size and device capabilities.

## Description
A dynamic large-scale ticker banner optimized for high-impact announcements and bold messaging. Features Framer Motion-powered scrolling animation with bold typography and high-contrast colors designed to create immediate visual impact and drive attention to critical messages. Built for product launches, major event promotions, breaking news alerts, and large-scale marketing campaigns where maximum visibility is essential. The Framer Motion-powered animations ensure smooth performance across all devices while configurable parameters allow customization of speed, direction, and behavior. Includes accessibility features, responsive design, and persistence options for user preferences.

## Source Code
```tsx
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  headings: string[];
};

export type Banner13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner13 = (props: Banner13Props) => {
  const { headings } = {
    ...Banner13Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const xPartOne = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <section
      
      ref={sectionRef}
 className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
>
      <div className="flex flex-col whitespace-nowrap">
        {headings.map((heading, index) => (
          <motion.h1
            key={index}
            style={index % 2 === 0 ? { x: xPartOne } : { x: xPartTwo }}
 className={clsx("text-[6rem] font-bold leading-[1.2]", {
              "self-end": index % 2 !== 0,
            })}
>
            {heading}
          </motion.h1>
        ))}
      </div>
    </section>
  );
};

export const Banner13Defaults: Props = {
  headings: ["Medium length banner heading goes here", "Medium length banner heading goes here"],
};

Banner13.displayName = 'Banner13';
```

