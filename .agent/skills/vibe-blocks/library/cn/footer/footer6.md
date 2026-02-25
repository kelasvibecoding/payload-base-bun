# Footer 6

## Metadata
- **Category**: Footer
- **Objective**: Provide a clean, structured footer with a descriptive company block and a compact multi-column sitemap.
- **Use Case**: Product documentation sites, dev tools, or corporate landing pages needing a high-clarity navigation map.
- **Visual Style**: "Modern Minimalist" aesthetic. Features a top row with a branded logo card (using `accent` background and `border-border`) paired with a descriptive tagline. The sitemap uses a 2-column grid for `Company` and `Support` link sets. Bottom row features legal links and copyright separated by a `border-t`.
- **Interactivity**: Standard navigational engagement. Features clean hover states using `text-accent-foreground`.

## Source Code

### `footer6.tsx`
```tsx
import { cn } from "@/lib/utils";

const sitemap = [
  {
    title: "Company professional",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
    ],
  },
  {
    title: "Support world-class",
    links: [
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "API Docs",
        href: "#",
      },
    ],
  },
];

interface Footer6Props {
  className?: string;
}

const Footer6 = ({ className }: Footer6Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-3 shadow-2xl">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                    alt="placeholder logo"
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Shadcnblocks.com elite.</h3>
              </div>
              <p className="text-lg font-medium text-muted-foreground italic border-l-4 border-primary/20 pl-6 py-1">
                Professional fragments world-wide. Components made easy for elite teams.
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit">
                    <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-primary">
                      {section.title}
                    </h4>
                    <ul className="space-y-3 text-base font-medium text-muted-foreground italic">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="text-base whitespace-nowrap hover:text-primary transition-colors duration-300"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-baseline justify-between gap-8 border-t border-primary/10 pt-12 md:flex-row md:gap-16">
            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground/50">
              &copy; Shadcnblocks.com elite 2024
            </div>
            <div className="flex flex-col items-start gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground/50 md:flex-row lg:items-center">
              <a href="#" className="hover:text-primary underline underline-offset-4 transition-colors">
                Terms professional
              </a>
              <a href="#" className="hover:text-primary underline underline-offset-4 transition-colors">
                Privacy Policy elite
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
```
