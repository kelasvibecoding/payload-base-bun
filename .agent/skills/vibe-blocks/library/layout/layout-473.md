# Layout 473

## Metadata
- **Category**: Layout
- **Objective**: Feature Split (Tall)
- **Use Case**: Vertical feature.
- **Visual Style**: Tall split.
- **Interactivity**: Scroll.

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
  image1: ImageProps;
  image2: ImageProps;
};

export type Layout473Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout473 = (props: Layout473Props) => {
  const { tagline, heading, description, buttons, image1, image2 } = {
    ...Layout473Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-x-16">
          <div>
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
          <div className="relative flex">
            <div className="absolute bottom-0 left-0 w-3/5">
              <img
                src={image1.src}
 className="aspect-square size-full object-cover"
                alt={image1.alt}
              />
            </div>
            <div className="mb-[15%] ml-[15%]">
              <img
                src={image2.src}
 className="aspect-square size-full object-cover"
                alt={image2.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout473Defaults: Props = {
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
  image1: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png",
    alt: "vibecoding placeholder image 1",
  },
  image2: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image 2",
  },
};

Layout473.displayName = 'Layout473';
```

