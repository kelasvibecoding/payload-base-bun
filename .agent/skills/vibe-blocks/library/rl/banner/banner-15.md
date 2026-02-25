# Banner 15

## Metadata
- **Category**: Banners
- **Objective**: Media-rich marquee with mixed image and text scrolling animation for showcasing logos, client results, and image-based stats
- **Use Case**: Perfect for dynamically showcasing a portfolio of logos, client results, image-based stats, case studies, or visual testimonials. Ideal for adding dynamic visual interest to header sections, footer areas, or dedicated showcase pages. Best for marketing agencies, design studios, e-commerce platforms with client logos, and any website that wants to highlight visual assets in an engaging, animated format.
- **Visual Style**: Mixed image and text marquee layout with smooth scrolling animation. Features high-resolution image display, clean typography, and responsive design that adapts layout and animation speed for mobile. Typically uses consistent spacing between items, optional background contrast to enhance visibility, and alternating image/text sections for visual variety.
- **Interactivity**: Dynamic media loop with text sections featuring smooth scrolling animation, configurable speed and direction, pause-on-hover behavior, and optional click interaction for images/text. Includes responsive design that adjusts animation parameters based on screen size and device capabilities.

## Description
A dynamic media-rich marquee banner optimized for showcasing logos, client results, image-based stats, and visual testimonials. Features mixed image and text scrolling animation designed to create engaging visual interest while highlighting visual assets. Built for marketing agencies, design studios, e-commerce platforms with client logos, and any website that wants to showcase visual content in an animated format. The responsive design ensures smooth performance across all devices while configurable parameters allow customization of animation speed, direction, and behavior. Includes accessibility features and interactive elements for enhanced user engagement.

## Source Code
```tsx
import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Section = {
  title: string;
  image: ImageProps;
};

type Props = {
  sections: Section[];
};

export type Banner15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner15 = (props: Banner15Props) => {
  const { sections } = {
    ...Banner15Defaults,
    ...props,
  };
  return (
    <section className="flex w-screen max-w-full justify-end overflow-hidden">
      <div className="flex justify-end">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
 className="grid animate-marquee-right auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-4"
>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center justify-center whitespace-nowrap px-8 text-center lg:text-left">
                    <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">{section.title}</h1>
                  </div>
                  <div className="relative aspect-[3/2] w-full overflow-hidden object-cover">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
 className="aspect-[3/2] size-full h-16 max-h-24 object-cover md:h-auto"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export const Banner15Defaults: Props = {
  sections: [
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "vibecoding Library",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "vibecoding Library",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "vibecoding Library",
      },
    },
    {
      title: "vibecoding Library",
      image: {
        src: "https://vibecoding-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
        alt: "vibecoding Library",
      },
    },
  ],
};

Banner15.displayName = 'Banner15';
```

