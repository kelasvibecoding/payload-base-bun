# Layout 190

## Metadata
- **Category**: Layout
- **Objective**: CTA Immersive Overlay
- **Use Case**: High impact action.
- **Visual Style**: Dark overlay.
- **Interactivity**: Focus.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { ButtonProps, Button } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout190Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout190 = (props: Layout190Props) => {
  const { tagline, description, buttons, image } = {
    ...props,
    ...Layout190Defaults,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
        <p className="text-lg font-bold leading-[1.4] text-text-alternative md:text-2xl">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="h-full w-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout190Defaults: Props = {
  tagline: "Tagline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding Placeholder image",
  },
  buttons: [
    {
      title: "Button",
      variant: "secondary-alt",
    },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
};

Layout190.displayName = 'Layout190';
```

