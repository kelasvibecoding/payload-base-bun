# Layout 234

## Metadata
- **Category**: Layout
- **Objective**: Feature Grid with Images
- **Use Case**: Visual features.
- **Visual Style**: Image grid.
- **Interactivity**: Visual browsing.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  icon: ImageProps;
};

type Props = {
  sections: SectionProps[];
};

export type Layout234Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout234 = (props: Layout234Props) => {
  const { sections } = { ...props, ...Layout234Defaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-none">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <div>
                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p>{section.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {section.buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout234Defaults: Props = {
  sections: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 1" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <ChevronRight />,
        },
      ],
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 2" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <ChevronRight />,
        },
      ],
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 3" },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
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

Layout234.displayName = 'Layout234';
```

