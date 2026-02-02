# Content 8

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
import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
};

export type Content8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content8 = (props: Content8Props) => {
  const { heading, children, image } = {
    ...Content8Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-16 md:mb-[5.5rem] lg:mb-24">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <div className="prose">{children}</div>
          </div>
        </div>
        <div>
          <img src={image.src} className="aspect-video w-full object-cover" alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export const Content8Defaults: Props = {
  heading: "Short heading goes here",
  children: (
    <React.Fragment>
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
    </React.Fragment>
  ),
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
};

Content8.displayName = 'Content8';
```


