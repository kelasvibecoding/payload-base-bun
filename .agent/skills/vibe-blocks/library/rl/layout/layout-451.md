# Layout 451

## Metadata
- **Category**: Layout
- **Objective**: Split with Image Collage
- **Use Case**: Visual impact.
- **Visual Style**: Split + Collage.
- **Interactivity**: View.

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
  thirdImage: ImageProps;
};

export type Layout451Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout451 = (props: Layout451Props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...Layout451Defaults,
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
        <div className="mb-12 grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8 md:gap-16 lg:grid-cols-2">
          <img
            src={firstImage.src}
 className="aspect-square w-full object-cover"
            alt={firstImage.alt}
          />
          <div className="grid gap-6 sm:gap-8 md:gap-16">
            <img
              src={secondImage.src}
 className="aspect-square w-full max-w-[10rem] object-cover lg:max-w-[15rem]"
              alt={secondImage.alt}
            />
            <img
              src={thirdImage.src}
 className="aspect-[3/2] w-full object-cover"
              alt={thirdImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout451Defaults: Props = {
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
  thirdImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image 3",
  },
};

Layout451.displayName = 'Layout451';
```

