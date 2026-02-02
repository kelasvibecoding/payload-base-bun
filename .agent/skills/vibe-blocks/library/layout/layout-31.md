# Layout 31

## Metadata
- **Category**: Layout
- **Objective**: Background Split (Left)
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

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout31Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout31 = (props: Layout31Props) => {
  const { features, image } = {
    ...Layout31Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-3 md:mb-4">
                  <img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.heading}</h1>
                <p>{feature.description}</p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  {feature.buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout31Defaults: Props = {
  features: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 1" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 2" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 3" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg", alt: "vibecoding logo 4" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

Layout31.displayName = 'Layout31';
```

