# Gallery 8

## Metadata
- **Category**: Gallery
- **Objective**: Portrait Gallery Grid
- **Use Case**: Photography or vertical assets.
- **Visual Style**: Vertical orientation grid.
- **Interactivity**: Link actions.

## Description
A visual-first component designed to showcase images or media in structured grids, sliders, or masonry layouts.

## Source Code
```tsx
import clsx from 'clsx';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery8 = (props: Gallery8Props) => {
  const { heading, description, images } = {
    ...Gallery8Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>

        <div className="gap-x-8 md:columns-2">
          {images.map((image, index) => (
            <a key={index} href={image.url} className="mb-8 inline-block w-full">
              <div
 className={clsx("relative inline-block w-full", {
                  "pt-[100%]": index % 3 === 0,
                  "pt-[66.66%]": index % 3 !== 0,
                })}
>
                <img
                  src={image.src}
                  alt={image.alt}
 className="absolute inset-0 size-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery8Defaults: Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 1",
    },
    {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 2",
    },
    {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 3",
    },
    {
      url: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 4",
    },
  ],
};

Gallery8.displayName = 'Gallery8';
```

