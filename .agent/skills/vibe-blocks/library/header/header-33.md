# Header 33

## Metadata
- **Category**: Header
- **Objective**: Background Video Split
- **Use Case**: Video background + split content.
- **Visual Style**: Video bg + split overlay.
- **Interactivity**: Overlay CTAs.

## Description
A hero or header section designed to introduce a page with high visual impact.

## Source Code
```tsx
import { Button, ButtonProps } from '@/components/ui';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Header33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header33 = (props: Header33Props) => {
  const { heading, description, buttons, video, videoType } = {
    ...Header33Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%]">
      <div className="container relative z-10 max-w-lg">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
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

export const Header33Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};

Header33.displayName = 'Header33';
```

