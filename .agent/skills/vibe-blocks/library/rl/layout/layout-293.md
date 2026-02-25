# Layout 293

## Metadata
- **Category**: Layout
- **Objective**: 5-Col Feature Grid
- **Use Case**: Very dense features.
- **Visual Style**: 5-column.
- **Interactivity**: Scanning.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button, ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type SectionProps = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  sections: SectionProps[];
};

export type Layout293Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout293 = (props: Layout293Props) => {
  const { sections } = {
    ...Layout293Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 place-items-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
              <p>{section.description}</p>
              <div className="mt-6 md:mt-8">
                <Button {...section.button}>{section.button.title}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout293Defaults: Props = {
  sections: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
};

Layout293.displayName = 'Layout293';
```

