# Layout 187

## Metadata
- **Category**: Layout
- **Objective**: CTA with Countdown
- **Use Case**: Urgency.
- **Visual Style**: Timer.
- **Interactivity**: Urgency.

## Description
A general layout component designed content sections, feature highlights, and information display.

## Source Code
```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  video: string;
  videoType: string;
};

export type Layout187Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout187 = (props: Layout187Props) => {
  const { heading, description, video, videoType, icon } = {
    ...props,
    ...Layout187Defaults,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="rb-5 mb-5 flex md:mb-6">
            <img src={icon.src} className="size-12" alt={icon.alt} />
          </div>
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <p className="mt-5 text-text-alternative md:mt-6 md:text-md">{description}</p>
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

export const Layout187Defaults: Props = {
  icon: {
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon-white.svg",
    alt: "vibecoding logo 1",
  },
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};

Layout187.displayName = 'Layout187';
```

