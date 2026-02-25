# Header 134

## Metadata
- **Category**: Header
- **Objective**: Event Header
- **Use Case**: Conference/Event intro.
- **Visual Style**: Date/Time/Location focus.
- **Interactivity**: RSVP action.

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
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Header134Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header134 = (props: Header134Props) => {
  const { heading, description, buttons, firstImage, secondImage } = {
    ...Header134Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            {buttons.map((button: ButtonProps, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="relative flex">
          <div className="mt-[10%] w-full">
            <img
 className="aspect-[3/2] size-full object-cover"
              src={firstImage.src}
              alt={firstImage.alt}
            />
          </div>
          <div className="absolute right-[10%] top-0 w-[30%]">
            <img
 className="aspect-[2/3] size-full object-cover"
              src={secondImage.src}
              alt={secondImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header134Defaults: Props = {
  heading: "Long heading is what you see here in this header section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png",
    alt: "vibecoding placeholder image 2",
  },
};

Header134.displayName = 'Header134';
```

