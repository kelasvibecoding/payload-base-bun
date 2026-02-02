# Layout 189

## Metadata
- **Category**: Layout
- **Objective**: CTA with Logos
- **Use Case**: Partner action.
- **Visual Style**: Logos + Button.
- **Interactivity**: Authority.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  logos: ImageProps[];
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Layout189Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout189 = (props: Layout189Props) => {
  const { tagline, heading, description, buttons, video, videoType, logos } = {
    ...props,
    ...Layout189Defaults,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
        <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          {heading}
        </h2>
        <p className="text-text-alternative md:text-md">{description}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2 md:mt-6">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-14" />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout189Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    {
      title: "Button",
      variant: "secondary-alt",
    },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
  logos: [
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo-white.svg", alt: "Webflow logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo-white.svg", alt: "vibecoding logo 1" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo-white.svg", alt: "Webflow logo 2" },
    { src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo-white.svg", alt: "vibecoding logo 2" },
  ],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};

Layout189.displayName = 'Layout189';
```

