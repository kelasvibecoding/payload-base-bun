# Layout 448

## Metadata
- **Category**: Layout
- **Objective**: Empty State
- **Use Case**: No data.
- **Visual Style**: Empty illustration.
- **Interactivity**: Action.

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

export type Layout448Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout448 = (props: Layout448Props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage } = {
    ...Layout448Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 ml-[5%] max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="mb-12 grid gap-6 md:gap-8 lg:gap-16">
          <img
            src={firstImage.src}
 className="aspect-[3/2] size-full max-w-[60rem] justify-self-end object-cover"
            alt={firstImage.alt}
          />
          <img
            src={secondImage.src}
 className="aspect-[3/2] size-full max-w-md object-cover"
            alt={secondImage.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const Layout448Defaults: Props = {
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
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image 2",
  },
};

Layout448.displayName = 'Layout448';
```

