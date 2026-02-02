# Layout 334

## Metadata
- **Category**: Layout
- **Objective**: BG Video Stats
- **Use Case**: Motion data.
- **Visual Style**: Video BG + Stats.
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
  image: ImageProps;
};

export type Layout334Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout334 = (props: Layout334Props) => {
  const { heading, sections, image } = {
    ...Layout334Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 max-w-lg gap-5 md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 flex md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-alternative md:mb-4 md:text-2xl">
                {section.heading}
              </h3>
              <p className="text-text-alternative">{section.description}</p>
              <div className="mt-6 flex md:mt-8">
                <Button key={index} {...section.button}>
                  {section.button.title}
                </Button>
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

export const Layout334Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link-alt",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

Layout334.displayName = 'Layout334';
```

