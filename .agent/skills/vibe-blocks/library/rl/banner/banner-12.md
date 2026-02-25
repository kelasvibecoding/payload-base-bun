# Banner 12

## Metadata
- **Category**: Banners
- **Objective**: High-frequency brand ticker with CSS-powered scrolling animation for displaying brands, keywords, or sponsors
- **Use Case**: Perfect for creating visual movement to display brand portfolios, keyword clouds, sponsor lists, partner logos, or trending topics. Ideal for adding dynamic visual interest to websites, promoting brand partnerships, showcasing client lists, and creating engaging header or footer elements. Best for e-commerce platforms, event websites, marketing agencies, and any website that wants to highlight multiple brands or keywords in an engaging, animated format.
- **Visual Style**: CSS-powered scrolling ticker with continuous horizontal animation loop. Features clean typography, smooth scrolling animation, and responsive design that adapts speed and layout for mobile. Typically uses uniform spacing between items, consistent font sizing, and optional background contrast to enhance visibility while maintaining smooth animation performance.
- **Interactivity**: Continuous horizontal animation loop with configurable speed, direction, and pause-on-hover behavior. Includes smooth CSS-powered animations optimized for performance, visibility toggle with persistence options, keyboard accessibility for screen readers, focus management for screen readers, and responsive design that adjusts animation parameters based on screen size and device capabilities.

## Description
A dynamic high-frequency brand ticker optimized for displaying brand portfolios, sponsor lists, keywords, and trending topics with continuous CSS-powered scrolling animation. Features a clean, performant design with smooth horizontal movement that adds visual interest without distracting from main content. Built for e-commerce platforms, event websites, marketing agencies, and any website that wants to highlight multiple brands or keywords in an engaging, animated format. The CSS-powered animation ensures smooth performance across all devices while configurable parameters allow customization of speed, direction, and behavior. Includes accessibility features, responsive design, and persistence options for user preferences.

## Source Code
```tsx
type Props = {
  headings: string[];
};

export type Banner12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner12 = (props: Banner12Props) => {
  const { headings } = {
    ...Banner12Defaults,
    ...props,
  };

  return (
    <section
      
 className="flex w-screen max-w-full justify-end overflow-hidden border-b border-border-primary"
>
      <div className="flex w-[200vw]">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
 className="flex w-screen animate-marquee-right items-center justify-around py-4"
>
              {headings.map((heading, headingIndex) => {
                const hiddenClass =
                  headingIndex>= 2 && headingIndex < 4
                    ? "hidden lg:flex"
                    : headingIndex === 4
                      ? "hidden md:flex"
                      : "flex";
                return (
                  <div
                    key={headingIndex}
 className={`${hiddenClass} items-center justify-center px-4`}
>
                    <h1 className="text-md font-bold md:text-lg">{heading}</h1>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </section>
  );
};

export const Banner12Defaults: Props = {
  headings: [
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
  ],
};

Banner12.displayName = 'Banner12';
```

