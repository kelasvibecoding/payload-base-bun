# Header 64

## Metadata
- **Category**: Header
- **Objective**: Image BG Minimal
- **Use Case**: Pure visual impact.
- **Visual Style**: Image bg, minimal text.
- **Interactivity**: Links only.

## Description
A hero or header section designed to introduce a page with high visual impact.

## Source Code
```tsx
type Props = {
  heading: string;
  description: string;
};

export type Header64Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header64 = (props: Header64Props) => {
  const { heading, description } = {
    ...Header64Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
      </div>
    </section>
  );
};

export const Header64Defaults: Props = {
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
};

Header64.displayName = 'Header64';
```

