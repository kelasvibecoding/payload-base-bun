# Banner 14

## Metadata
- **Category**: Banners
- **Objective**: Interactive scroll-aware ticker with Framer Motion-powered animation that reacts to user scroll behavior for engaging storytelling
- **Use Case**: Perfect for engaging storytelling where the ticker speed or direction reacts to user scroll, such as narrative websites, interactive marketing campaigns, scrolling animations, and storytelling experiences. Ideal for creating immersive scrolling experiences, guiding users through narratives, and adding interactive elements to long-form content. Best for portfolio websites, marketing landing pages with storytelling elements, and any website that wants to create engaging, interactive scrolling experiences.
- **Visual Style**: Scroll-aware text marquee animation with Framer Motion-powered effects that respond to user scroll behavior. Features clean typography, smooth animations, and responsive design that adapts animation parameters for mobile. Typically uses consistent spacing, readable font sizes, and optional visual indicators to enhance the interactive scrolling experience.
- **Interactivity**: Scroll-triggered speed/direction adjustments with Framer Motion-powered scroll detection, configurable animation parameters based on scroll position, pause-on-hover behavior, visibility toggle with persistence options, keyboard accessibility for screen readers, focus management for screen readers, and responsive design that adjusts animation behavior based on screen size and device capabilities.

## Description
An interactive scroll-aware ticker banner optimized for engaging storytelling and immersive scrolling experiences. Features Framer Motion-powered animation that reacts to user scroll behavior, adjusting speed and direction based on scroll position to create dynamic, interactive storytelling elements. Built for narrative websites, interactive marketing campaigns, and any website that wants to create engaging, interactive scrolling experiences. The scroll-aware behavior creates a unique, immersive experience that guides users through narratives and adds interactive elements to long-form content. Includes smooth animations, accessibility features, responsive design, and configurable animation parameters for customization.

## Source Code
```tsx
"use client";

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  headings: string[];
};

export type Banner14Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner14 = (props: Banner14Props) => {
  const { headings } = {
    ...Banner14Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingTranslate = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section  ref={sectionRef} className="overflow-hidden">
      <div className="flex whitespace-nowrap border-b border-t border-border-primary">
        <div className="flex w-full items-center overflow-hidden whitespace-nowrap py-4">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
 className="ml-12 grid auto-cols-max grid-flow-col grid-cols-[max-content] gap-12"
                style={{ x: headingTranslate }}
>
                {headings.map((heading, headingIndex) => {
                  return (
                    <h1 key={headingIndex} className="text-md font-bold md:text-lg">
                      {heading}
                    </h1>
                  );
                })}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export const Banner14Defaults: Props = {
  headings: [
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
  ],
};

Banner14.displayName = 'Banner14';
```

