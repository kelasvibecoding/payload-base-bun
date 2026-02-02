# Banner 12

## Metadata
- **Category**: Banners
- **Objective**: High-Frequency Brand Ticker
- **Use Case**: Creating movement to display a list of brands, keywords, or sponsors.
- **Visual Style**: CSS-powered scrolling ticker.
- **Interactivity**: Continuous horizontal animation loop.

## Description
A versatile banner component designed for site-wide announcements, lead generation, or visual motion at the top of a page.

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

