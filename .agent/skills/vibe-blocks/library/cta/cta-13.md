# Cta 13

## Metadata
- **Category**: CTA
- **Objective**: Simple Signup CTA
- **Use Case**: Quick lead gen.
- **Visual Style**: Centered Form.
- **Interactivity**: Form Submit.

## Description
A specialized Call to Action component designed to drive conversions, collect leads, or guide users toward key platform actions.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta13 = (props: Cta13Props) => {
  const { heading, description, buttons } = {
    ...Cta13Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h1>
        <div>
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

export const Cta13Defaults: Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
};
```

