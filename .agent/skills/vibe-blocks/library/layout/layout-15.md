# Layout 15

## Metadata
- **Category**: Layout
- **Objective**: Alternating List
- **Use Case**: Process or steps.
- **Visual Style**: Zig-zag layout.
- **Interactivity**: Scroll flow.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  logos: ImageProps[];
  image: ImageProps;
};

export type Layout15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout15 = (props: Layout15Props) => {
  const { heading, description, logos, image } = {
    ...Layout15Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-5 md:mb-6 md:text-md">{description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pb-2 pt-4 md:py-2">
              {logos.map((logo, index) => (
                <img key={index} src={logo.src} className="max-h-12" alt={logo.alt} />
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout15Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 2" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

Layout15.displayName = 'Layout15';
```

