# Layout 305

## Metadata
- **Category**: Layout
- **Objective**: Feature Grid with Intro (Stats)
- **Use Case**: Data grid.
- **Visual Style**: Intro + Stats.
- **Interactivity**: Data.

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
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout305Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout305 = (props: Layout305Props) => {
  const { heading, sections } = {
    ...Layout305Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index} className="flex gap-6">
              <div className="min-h-12 min-w-12">
                <img src={section.icon.src} alt={section.icon.alt} />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
                <p>{section.description}</p>
                <div className="mt-6 md:mt-8">
                  <Button {...section.button}>{section.button.title}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout305Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding logo 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding logo 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
};

Layout305.displayName = 'Layout305';
```

