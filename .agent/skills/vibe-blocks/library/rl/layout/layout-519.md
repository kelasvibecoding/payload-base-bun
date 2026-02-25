# Layout 519

## Metadata
- **Category**: Layout
- **Objective**: Interactive Pricing Switcher
- **Use Case**: Cost compare.
- **Visual Style**: Switch toggle.
- **Interactivity**: Toggle.

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

type CardProps = {
  image: ImageProps;
  logo: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cards: CardProps[];
};

export type Layout519Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout519 = (props: Layout519Props) => {
  const { tagline, heading, description, cards } = {
    ...Layout519Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ image, logo, heading, description, buttons }) => (
  <div className="relative p-6 md:p-8 lg:p-12">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/50" />
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
    </div>
    <div className="relative z-10">
      <div className="mb-5 md:mb-6">
        <img src={logo.src} className="size-12" alt={logo.alt} />
      </div>
      <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
        {heading}
      </h3>
      <p className="text-text-alternative">{description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
  </div>
);

const card = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
    alt: "vibecoding logo",
  },
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [
    { title: "Button", variant: "secondary-alt" },
    { title: "Button", variant: "link-alt", size: "link", iconRight: <ChevronRight /> },
  ],
};

export const Layout519Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cards: [card, card],
};

Layout519.displayName = 'Layout519';
```

