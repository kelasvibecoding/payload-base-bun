# Integration 7

## Metadata
- **Category**: Feature Section
- **Objective**: Display ecosystem connectivity through an organic, pill-based list that feels integrated into the background.
- **Use Case**: Best for secondary sections on application landing pages or AI agent capabilities lists.
- **Visual Style**: "Integrated pill" aesthetic. Uses a grid with a defined min-width for the label column (`minmax(18.75rem, 25rem)`). Integrations are rendered as rounded-full horizontal pills containing a smaller circular bg-background icon and text. Includes decorative colorful gradient pills (`linear-to-br from-yellow-500`) that act as visual breaks.
- **Interactivity**: Primarily layout-driven. Features two staggered rows of pills (`list1` and `list2`) to create a naturally uneven, flowing edge.

## Source Code

### `integration7.tsx`
```tsx
import { cn } from "@/lib/utils";

const list1: Array<itemType> = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
    text: "Brave",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
    text: "Facebook",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
    text: "Figma",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
    text: "Gatsby",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
    text: "Astro",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
    text: "Linkedin",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
    text: "Notion",
  },
  {
    src: "",
    text: "",
    className: "bg-linear-to-br from-yellow-500 to-yellow-300",
  },
];

const list2: Array<itemType> = [
  {
    src: "",
    text: "",
    className: "bg-linear-to-br from-green-500 to-green-300",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    text: "Spotify",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    text: "Google",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
    text: "Sketch",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
    text: "Product Hunt",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    text: "Slack",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg",
    text: "X / Twitter",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/netflix-icon.svg",
    text: "Netflix",
  },
];

type itemType = { src: string; text: string; className?: string };

const List = ({ list }: { list: Array<itemType> }) => {
  return (
    <div className="flex gap-3">
      {list.map((item, i) =>
        item.src ? (
          <div
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1"
            key={`list-item-${i}`}
          >
            <div className="flex size-8 overflow-hidden rounded-full bg-background p-2">
              <img
                src={item.src}
                alt=""
                className="m-auto block size-full object-contain object-center"
              />
            </div>
            <p className="pr-2 text-sm font-medium">{item.text}</p>
          </div>
        ) : (
          <div
            className={`h-10 w-[6.25rem] shrink-0 rounded-full ${item?.className}`}
            key={`list-item-${i}`}
          ></div>
        ),
      )}
    </div>
  );
};

interface Integration7Props {
  className?: string;
}

const Integration7 = ({ className }: Integration7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid w-full grid-cols-1 items-start justify-between overflow-hidden rounded-3xl border border-muted bg-background pr-0 md:grid-cols-[minmax(18.75rem,25rem)_1fr] md:p-8">
          <div className="order-2 flex flex-col gap-2 p-6 pt-10 md:order-1 md:p-0">
            <h3 className="text-lg leading-relaxed font-medium tracking-tight">
              Seamlessly integrates with your tools!
            </h3>
            <p className="text-sm leading-relaxed tracking-tight">
              Connect diverse data sources to enhance your agent's intelligence
              and performance.
            </p>
          </div>
          <div className="relative order-1 p-4 pb-0 md:order-2 md:p-0">
            <List list={list1} />
            <div className="ml-8 pt-3">
              <List list={list2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration7 };
```
