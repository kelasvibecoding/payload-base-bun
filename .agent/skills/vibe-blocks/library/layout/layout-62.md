# Layout 62

## Metadata
- **Category**: Layout
- **Objective**: Overlapping Text Split
- **Use Case**: Editorial feature.
- **Visual Style**: Overlap layout.
- **Interactivity**: Visual interest.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
  icon: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  image: ImageProps;
};

export type Layout62Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout62 = (props: Layout62Props) => {
  const { heading, description, subHeadings, image } = {
    ...Layout62Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <div>
            <p className="mb-6 text-text-alternative md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img src={subHeading.icon.src} className="size-12" alt={subHeading.icon.alt} />
                  </div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] text-text-alternative md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-text-alternative">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout62Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  subHeadings: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 1",
      },
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
        alt: "vibecoding logo 2",
      },
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

Layout62.displayName = 'Layout62';
```

