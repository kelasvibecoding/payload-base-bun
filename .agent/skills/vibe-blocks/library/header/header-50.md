# Header 50

## Metadata
- **Category**: Header
- **Objective**: Multi-Column Hero
- **Use Case**: Information-dense hero section.
- **Visual Style**: Three-column layout (Text/Image/Text).
- **Interactivity**: Complex layout flow.

## Description
A hero or header section designed to introduce a page with high visual impact.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header50Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header50 = (props: Header50Props) => {
  const { heading, description, buttons, tagline, image } = {
    ...Header50Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <p className="text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header50Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

Header50.displayName = 'Header50';
```

