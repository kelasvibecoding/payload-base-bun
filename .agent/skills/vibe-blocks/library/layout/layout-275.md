# Layout 275

## Metadata
- **Category**: Layout
- **Objective**: Intro + 3-Col Feature Grid
- **Use Case**: Feature set.
- **Visual Style**: Intro + 3-col.
- **Interactivity**: Scanning.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button, ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  heading: string;
  description: string;
  icon: ImageProps;
};

type Props = {
  sections: SectionProps[];
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout275Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout275 = (props: Layout275Props) => {
  const { sections, image, tagline, heading, description, buttons } = {
    ...Layout275Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-text-alternative md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex w-full gap-6">
              <img
                src={section.icon.src}
 className="mb-5 size-12 flex-none self-start md:mb-6"
                alt={section.icon.alt}
              />
              <div>
                <h3 className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-text-alternative">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
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

export const Layout275Defaults: Props = {
  sections: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 1",
      },
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 2",
      },
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 3",
      },
    },
  ],
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  buttons: [
    { title: "Button", variant: "secondary-alt" },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
};

Layout275.displayName = 'Layout275';
```

