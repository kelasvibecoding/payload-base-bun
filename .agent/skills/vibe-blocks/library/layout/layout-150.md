# Layout 150

## Metadata
- **Category**: Layout
- **Objective**: Search Result List
- **Use Case**: Query set.
- **Visual Style**: Result cards.
- **Interactivity**: Filter.

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

export type Layout150Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout150 = (props: Layout150Props) => {
  const { heading, logos, description, image } = {
    ...Layout150Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="flex flex-col items-center justify-start">
              <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">{description}</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
                {logos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} className="max-h-14" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export const Layout150Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",

  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 2" },
  ],
};

Layout150.displayName = 'Layout150';
```

