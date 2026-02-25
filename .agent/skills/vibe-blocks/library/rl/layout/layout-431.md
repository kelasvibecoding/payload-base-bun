# Layout 431

## Metadata
- **Category**: Layout
- **Objective**: Multi-Step Form
- **Use Case**: Onboarding.
- **Visual Style**: Wizard.
- **Interactivity**: Steps.

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

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Layout431Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout431 = (props: Layout431Props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage } = {
    ...Layout431Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-md">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-end gap-x-16 gap-y-12 md:grid-cols-[1fr_0.75fr]">
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <img src={firstImage.src} className="w-full object-cover" alt={firstImage.alt} />
            <img
              src={secondImage.src}
 className="mt-[25%] w-full object-cover"
              alt={secondImage.alt}
            />
          </div>
          <div>
            <div className="ml-[5%] mr-[10%]">
              <p className="md:text-md">{description}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout431Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image 2",
  },
};

Layout431.displayName = 'Layout431';
```

