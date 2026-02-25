# Logos 13

## Metadata
- **Category**: Logo Grid / Masonry
- **Objective**: Present an ordered, timeline-based or explicitly categorized logo grid with sticky sticky-sidebar alignment.
- **Use Case**: Case studies pages, agency partner timelines, or detailed "About Us" histories where the progression or specific assignment of partners is critical.
- **Visual Style**: Divides the layout into an asymmetric split (`grid-cols-1 lg:grid-cols-6`). The left side (`col-span-2`) features a sticky identifying label ("Our partners") with a decorative block element. The right side (`col-span-4`) constructs a strict grid (`grid w-full grid-cols-2 lg:grid-cols-3`) of tall, uniform cards (`rounded-2xl bg-muted`). Each card anchors the logo in the center and explicitly places a mono-spaced timestamp or metadata label (`absolute right-4 bottom-4 font-mono`) in the corner.
- **Interactivity**: The left-hand navigation label behaves as `lg:sticky` while the user scrolls past the masonry grid of logos.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Logos13Props {
  className?: string;
}

const Logos13 = ({ className }: Logos13Props) => {
  const logos = [
    {
      id: "logo-1",
      description: "/2021",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-2",
      description: "/2022",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-3",
      description: "/2023",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-4",
      description: "/2024",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-5",
      description: "/2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-6",
      description: "/2026",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto dark:invert",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 py-8 lg:sticky">
            <span className="size-3 bg-orange-500" />
            <p className="text-xl text-foreground/30 uppercase lg:text-2xl">
              Our partners
            </p>
          </div>
          <ul className="col-span-4 grid w-full grid-cols-2 gap-2 lg:grid-cols-3">
            {logos.map((logo, index) => (
              <li
                key={index}
                className="relative flex h-72 items-center justify-center rounded-2xl bg-muted"
              >
                <div className="">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>

                <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                  {logo.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Logos13 };
```
