# Banner 11

## Metadata
- **Category**: Banners
- **Objective**: Micro feature highlight banner with icon + feature link layout for quickly linking users to new content and trending topics
- **Use Case**: Perfect for quickly linking users to new blog posts, feature announcements, trending topics, and recently published content. Ideal for driving traffic to new content, highlighting key features, and keeping users informed about recent updates. Best for content-driven platforms, blogs, SaaS applications with frequent feature updates, and any website that wants to promote new content without overwhelming users with full banners.
- **Visual Style**: Icon + Feature link layout featuring prominent icon paired with concise feature link text. Features clean, compact design with minimal visual elements, clear visual hierarchy, and responsive design that adapts to all screen sizes. Typically uses recognizable icons that represent content types (e.g., blog, feature, trending) paired with short, engaging link text.
- **Interactivity**: Deep linking navigation to new content and features, visibility toggle with persistence options, smooth appearance/disappearance animations, keyboard accessibility for screen readers, focus management for screen readers, touch-friendly tap targets on mobile, optional tracking for click analytics, and intelligent link opening behavior (new tab vs. same tab based on content type).

## Description
A compact micro feature highlight banner optimized for quickly linking users to new content, feature announcements, and trending topics. Features an icon + feature link layout designed to drive traffic to new content without overwhelming users with full banners. Built for content-driven platforms, blogs, SaaS applications with frequent updates, and any website that wants to keep users informed about recent changes. The compact design respects user attention while ensuring important content is easily discoverable. Includes smooth animations, accessibility features, and responsive design that adapts beautifully across all devices.

## Source Code
```tsx
import clsx from 'clsx';

type Props = {
  headings: string[];
};

export type Banner11Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner11 = (props: Banner11Props) => {
  const { headings } = {
    ...Banner11Defaults,
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
 className="flex w-screen animate-marquee-left items-center justify-around py-4"
>
              {headings.map((heading, headingIndex) => (
                <div
                  key={headingIndex}
 className={clsx(
                    "items-center justify-center px-4",
                    headingIndex>= 2 && headingIndex < 4 && "hidden lg:flex",
                    headingIndex === 4 && "hidden md:flex",
                  )}
>
                  <h1 className="text-md font-bold md:text-lg">{heading}</h1>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export const Banner11Defaults: Props = {
  headings: [
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
    "vibecoding Library",
  ],
};

Banner11.displayName = 'Banner11';
```

