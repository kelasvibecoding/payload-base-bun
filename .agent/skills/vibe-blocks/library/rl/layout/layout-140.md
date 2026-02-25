# Layout 140

## Metadata
- **Category**: Layout
- **Objective**: Process Steps (Horizontal)
- **Use Case**: Linear process.
- **Visual Style**: Horizontal flow.
- **Interactivity**: Sequence.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type Props = {
  tagline: string;
  description: string;
  buttons: ButtonProps[];
};

export type Layout140Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout140 = (props: Layout140Props) => {
  const { tagline, description, buttons } = {
    ...props,
    ...Layout140Defaults,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <p className="mb-5 text-lg font-bold leading-[1.4] md:mb-6 md:text-2xl">{description}</p>
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

export const Layout140Defaults: Props = {
  tagline: "Tagline",
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
};

Layout140.displayName = 'Layout140';
```

