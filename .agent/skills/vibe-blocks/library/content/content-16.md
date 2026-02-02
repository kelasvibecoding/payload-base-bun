# Content 16

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
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import { CgSpinner } from 'lucide-react';
import { FaCirclePlay } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type MetaTagProps = {
  title: string;
  description: string;
};

type Props = {
  children: React.ReactNode;
  metatags: MetaTagProps[];
  image: ImageProps;
  video: string;
};

export type Content16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content16 = (props: Content16Props) => {
  const { children, metatags, image, video } = {
    ...Content16Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative flex w-full items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
 className="aspect-video size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </button>
            </DialogTrigger>
            <DialogContent>
              {!isIframeLoaded && <CgSpinner className="mx-auto size-16 animate-spin text-white" />}
              <iframe
 className={clsx(
                  "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                  {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  },
                )}
                src={video}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoaded(true)}
></iframe>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mx-auto max-w-lg">
          <div className="mb-8 grid grid-cols-2 gap-6 md:mb-10 md:grid-cols-4 md:gap-8 lg:mb-12">
            {metatags.map((item, index) => (
              <div key={index}>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content16Defaults: Props = {
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
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316216244aee67_Placeholder%20Video%20-%20Landscape.svg",
    alt: "vibecoding placeholder image",
  },
};

Content16.displayName = 'Content16';
```


