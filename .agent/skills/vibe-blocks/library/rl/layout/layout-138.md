# Layout 138

## Metadata
- **Category**: Layout
- **Objective**: Blog Grid
- **Use Case**: Article set.
- **Visual Style**: Blog cards.
- **Interactivity**: Read.

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
  logos: ImageProps[];
  buttons: ButtonProps[];
};

export type Layout138Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout138 = (props: Layout138Props) => {
  const { tagline, heading, description, logos, buttons } = {
    ...props,
    ...Layout138Defaults,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
        <p className="mb-5 md:mb-6 md:text-md">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-14" />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout138Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 2" },
  ],
};

Layout138.displayName = 'Layout138';
```

