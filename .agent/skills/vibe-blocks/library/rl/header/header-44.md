# Header 44

## Metadata
- **Category**: Header
- **Objective**: Left-Aligned Text Only
- **Use Case**: Minimal left-aligned hero.
- **Visual Style**: Clean left typography.
- **Interactivity**: Text engagement.

## Description
A hero or header section designed to introduce a page with high visual impact.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Header44Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header44 = (props: Header44Props) => {
  const { heading, description, buttons, tagline } = {
    ...Header44Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
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
    </section>
  );
};

export const Header44Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
};

Header44.displayName = 'Header44';
```

