# Layout 354

## Metadata
- **Category**: Layout
- **Objective**: Bento Grid (Stacked Left)
- **Use Case**: Feature mix.
- **Visual Style**: Mixed layout.
- **Interactivity**: Hover.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  image: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  featureSections: FeatureSection[];
};

export type Layout354Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout354 = (props: Layout354Props) => {
  const { featureSections } = {
    ...Layout354Defaults,
    ...props,
  };

  return (
    <section>
      {featureSections.map((section, index) => (
        <div
          key={index}
 className="sticky top-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${section.image.src}")`,
            backgroundPosition: "0 0, 50%",
            backgroundSize: "auto, cover",
            backgroundAttachment: "scroll, fixed",
            zIndex: index + 1,
          }}
>
          <div className="px-[5%]">
            <div className="container">
              <div className="flex min-h-screen max-w-md flex-col justify-center text-text-alternative">
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {section.heading}
                </h2>
                <p className="md:text-md">{section.description}</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  {section.buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const Layout354Defaults: Props = {
  featureSections: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
        alt: "vibecoding placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
        alt: "vibecoding placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
        alt: "vibecoding placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
    },
  ],
};

Layout354.displayName = 'Layout354';
```

