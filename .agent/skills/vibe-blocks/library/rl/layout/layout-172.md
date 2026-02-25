# Layout 172

## Metadata
- **Category**: Layout
- **Objective**: Icon Feature List (Horizontal)
- **Use Case**: Quick benefits.
- **Visual Style**: Horizontal row.
- **Interactivity**: Scanning.

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

type Props = {
  sections: SectionProps[];
};

export type Layout172Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout172: React.FC<Layout172Props> = (props: Layout172Props) => {
  const { sections } = { ...Layout172Defaults, ...props };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center justify-start text-center">
              <h3 className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p>{section.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {section.buttons.map((button, buttonIndex) => (
                  <Button key={buttonIndex} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout172Defaults: Props = {
  sections: [
    {
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        {
          title: "Button",
          variant: "link",
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
          variant: "link",
          size: "link",
          iconRight: <ChevronRight />,
        },
      ],
    },
  ],
};

Layout172.displayName = 'Layout172';
```

