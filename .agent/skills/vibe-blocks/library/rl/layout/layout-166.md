# Layout 166

## Metadata
- **Category**: Layout
- **Objective**: Standard Layout Component
- **Use Case**: General content section.
- **Visual Style**: Standard layout.
- **Interactivity**: Standard engagement.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Dialog, DialogContent, DialogTrigger, VideoIframe } from '@/components/ui';
import { FaCirclePlay } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  logos: ImageProps[];
  video: string;
  image: ImageProps;
};

export type Layout166Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout166 = (props: Layout166Props) => {
  const { heading, description, logos, image, video } = {
    ...Layout166Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center">
              <img src={image.src} alt={image.alt} className="size-full object-cover" />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video={video} />
            </DialogContent>
          </Dialog>
          <div className="rb-12 mt-12 md:mt-18 lg:mt-20">
            <div className="mx-auto max-w-lg text-center">
              <div className="flex flex-col items-center justify-start">
                <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  {heading}
                </h3>
                <p className="md:text-md">{description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2 md:mt-6">
                  {logos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="max-h-14" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout166Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo.svg", alt: "vibecoding logo 2" },
  ],
};

Layout166.displayName = 'Layout166';
```

