# Content 22

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

type MetaTagProps = {
  title: string;
  description: string;
};

type Props = {
  children: React.ReactNode;
  heading: string;
  metatags: MetaTagProps[];
};

export type Content22Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content22 = (props: Content22Props) => {
  const { children, heading, metatags } = {
    ...Content22Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.5fr] md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl  lg:text-6xl ">
              {heading}
            </h3>
          </div>
          <div>
            <div className="prose mb-16 md:mb-[5.5rem] lg:mb-24">{children}</div>
            <div>
              {metatags.map((item, index) => (
                <div
                  key={index}
 className="flex items-center justify-between gap-8 border-b border-b-border-primary py-5 first:border-t first:border-t-border-primary"
>
                  <h3 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content22Defaults: Props = {
  heading: "Medium length section heading goes here",
  metatags: [
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
    {
      title: "Label",
      description: "Lorem ipsum",
    },
  ],
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
};

Content22.displayName = 'Content22';
```


