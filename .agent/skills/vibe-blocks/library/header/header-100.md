# Header 100

## Metadata
- **Category**: Header
- **Objective**: Background Video Ultimate
- **Use Case**: Premium video intro.
- **Visual Style**: High-quality video loop.
- **Interactivity**: Passive playback.

## Description
A hero or header section designed to introduce a page with high visual impact.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Header100Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header100 = (props: Header100Props) => {
  const { heading, description, buttons, video, videoType } = {
    ...Header100Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
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
          <video
 className="absolute inset-0 aspect-video size-full object-cover"
            autoPlay
            loop
            muted
>
            <source src={video} type={videoType} />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
};

export const Header100Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "primary" },
    { title: "Button", variant: "secondary-alt" },
  ],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};

Header100.displayName = 'Header100';
```


