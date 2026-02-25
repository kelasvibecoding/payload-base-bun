# Layout 126

## Metadata
- **Category**: Layout
- **Objective**: Feature Layout Section
- **Use Case**: Content feature highlights.
- **Visual Style**: Grid/List layout.
- **Interactivity**: Standard engagement.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import React from 'react';
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type SectionProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  sections: SectionProps[];
  image: ImageProps;
};

export type Layout126Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout126: React.FC<Layout126Props> = (props: Layout126Props) => {
  const { sections, image } = { ...Layout126Defaults, ...props };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="rb-5 mb-5 text-2xl font-bold leading-[1.4] text-text-alternative md:mb-6 md:text-3xl md:leading-[1.2] lg:text-4xl">
                {section.heading}
              </h2>
              <p className="mb-6 text-base text-text-alternative md:mb-8">{section.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-text-alternative md:mt-8">
                {section.buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout126Defaults: Required<Props> = {
  sections: [
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        {
          title: "Button",
          variant: "link-alt",
          size: "link",
          iconRight: <ChevronRight />,
        },
      ],
    },
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        {
          title: "Button",
          variant: "link-alt",
          size: "link",
          iconRight: <ChevronRight />,
        },
      ],
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding Placeholder image",
  },
};

Layout126.displayName = 'Layout126';
```

