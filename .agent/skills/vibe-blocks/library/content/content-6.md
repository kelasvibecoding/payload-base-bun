# Content 6

## Metadata
- **Category**: Content
- **Objective**: General Content
- **Use Case**: Visual Content browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A fundamental section component for presenting narrative text, formatted prose, and supporting media in cohesive layouts.

## Source Code
```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  images: ImageProps[];
  children: React.ReactNode;
};

export type Content6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content6 = (props: Content6Props) => {
  const { heading, children, images } = {
    ...Content6Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 md:gap-y-20 lg:grid-cols-[1.5fr_1fr] lg:gap-x-20">
          <div className="order-2 grid grid-cols-1 gap-6 md:gap-8 lg:order-1">
            {images.map((img, index) => (
              <div key={index}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="static order-1 lg:sticky lg:top-20 lg:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content6Defaults: Props = {
  heading: "Short heading goes here",
  children: (
    <div>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
        ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
        consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
        tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis
        lobortis at sit dictum eget nibh tortor commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna
        nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
        consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
      </p>
    </div>
  ),
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "vibecoding placeholder image 3",
    },
  ],
};

Content6.displayName = 'Content6';
```


