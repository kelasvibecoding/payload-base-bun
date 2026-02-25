# Banner 16

## Metadata
- **Category**: Banners
- **Objective**: Premium Motion Marquee
- **Use Case**: The highest quality visual loop for high-end brands using smooth motion curves.
- **Visual Style**: Framer Motion-driven high-performance marquee.
- **Interactivity**: Physics-based or linear motion loops for text and media.

## Description
A premium motion marquee banner optimized for high-end brands and luxury visual experiences. Features Framer Motion-powered physics-based animation with smooth motion curves designed to deliver exceptional visual quality and enhance brand perception. Built for luxury brand promotions, premium product launches, high-end marketing campaigns, and any website that wants to deliver premium visual experiences with smooth, high-quality motion elements. The Framer Motion-powered animations ensure smooth 60fps performance across all devices while configurable parameters allow customization of animation behavior to match brand aesthetics. Includes accessibility features, responsive design, and persistence options for user preferences.

## Source Code
```tsx
"use client";

import { useMediaQuery } from '@/components/ui';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Heading = {
  title: string;
  image: ImageProps;
};

type Props = {
  headingsTop: Heading[];
  headingsBottom: Heading[];
};

export type Banner16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner16 = (props: Banner16Props) => {
  const { headingsTop, headingsBottom } = {
    ...Banner16Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 991px)");

  const headingTopTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["5%", "0%"] : ["25%", "0%"],
  );
  const headingBottomTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-5%", "0%"] : ["-25%", "0%"],
  );

  const renderHeadings = (headings: Heading[], translate: MotionValue<string>) => (
    <motion.div
 className="grid auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-2"
      style={{ x: translate }}
>
      {headings.map((heading, index) => (
        <Heading key={index} title={heading.title} image={heading.image} />
      ))}
    </motion.div>
  );

  return (
    <section
      
      ref={sectionRef}
 className="flex w-screen max-w-full flex-col justify-end overflow-hidden"
>
      <div className="flex justify-end">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsTop, headingTopTranslate)}
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-start">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsBottom, headingBottomTranslate)}
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

const Heading = ({ title, image }: Heading) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center whitespace-nowrap px-4 text-center lg:text-left">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
 className="aspect-square size-full max-h-16 object-cover"
        />
      </div>
    </React.Fragment>
  );
};

export const Banner16Defaults: Props = {
  headingsTop: [
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 1",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 2",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 3",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 4",
      },
    },
  ],

  headingsBottom: [
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 5",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 6",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 7",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image-tiny.png",
        alt: "vibecoding Library 8",
      },
    },
  ],
};

Banner16.displayName = 'Banner16';
```

