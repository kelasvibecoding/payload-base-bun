# Layout 167

## Metadata
- **Category**: Layout
- **Objective**: Standard Layout Component
- **Use Case**: General content section.
- **Visual Style**: Standard layout.
- **Interactivity**: Standard engagement.

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
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout167Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout167 = (props: Layout167Props) => {
  const { tagline, description, buttons, image } = {
    ...props,
    ...Layout167Defaults,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <p className="text-lg font-bold leading-[1.4] md:text-2xl">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout167Defaults: Props = {
  tagline: "Tagline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
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
};

Layout167.displayName = 'Layout167';
```

