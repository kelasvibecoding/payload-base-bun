# Layout 32

## Metadata
- **Category**: Layout
- **Objective**: Background Split (Right)
- **Use Case**: Immersive split section.
- **Visual Style**: Video/Image BG + Overlay.
- **Interactivity**: Visual immersion.

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

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  featureSections: FeatureSection[];
  image: ImageProps;
  buttons: ButtonProps[];
};

export type Layout32Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout32 = (props: Layout32Props) => {
  const { featureSections, image, buttons } = {
    ...Layout32Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              {featureSections.map((section, index) => (
                <div key={index} className="flex self-start">
                  <div className="mr-6 flex-none self-start">
                    <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
                  </div>
                  <div>
                    <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      {section.heading}
                    </h1>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout32Defaults: Props = {
  featureSections: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 1" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 2" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 3" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
};

Layout32.displayName = 'Layout32';
```

