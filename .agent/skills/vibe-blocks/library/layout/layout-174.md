# Layout 174

## Metadata
- **Category**: Layout
- **Objective**: Feature Cards (3-Col)
- **Use Case**: Standard features.
- **Visual Style**: Card grid.
- **Interactivity**: Card hover.

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
  video: string;
  videoType: string;
};

export type Layout174Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout174: React.FC<Layout174Props> = (props: Layout174Props) => {
  const { sections, video, videoType } = { ...Layout174Defaults, ...props };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center justify-start text-center">
              <h3 className="rb-5 mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p className="text-text-alternative">{section.description}</p>
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
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout174Defaults: Props = {
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
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};

Layout174.displayName = 'Layout174';
```

