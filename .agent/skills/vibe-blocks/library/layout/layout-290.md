# Layout 290

## Metadata
- **Category**: Layout
- **Objective**: 4-Col Feature Grid
- **Use Case**: Dense features.
- **Visual Style**: 4-column.
- **Interactivity**: Scanning.

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
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type Layout290Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout290 = (props: Layout290Props) => {
  const { sections } = { ...Layout290Defaults, ...props };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-items-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index} className="w-full text-center">
              <div className="mb-5 md:mb-6">
                <img src={section.image.src} alt={section.image.alt} className="size-full" />
              </div>
              <p className="mb-3 font-semibold md:mb-4">{section.tagline}</p>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl ">{section.heading}</h3>
              <p>{section.description}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
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
    </section>
  );
};

export const Layout290Defaults: Props = {
  sections: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "vibecoding placeholder image 1",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "vibecoding placeholder image 2",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "vibecoding placeholder image 3",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "vibecoding placeholder image 3",
      },
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
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

Layout290.displayName = 'Layout290';
```

