# Footer 23

## Metadata
- **Category**: Footer
- **Objective**: Provide a modern, interactive footer featuring a split layout with navigation and a 3D-styled Globe visual.
- **Use Case**: Global platforms, SaaS, or international brands wanting to emphasize their worldwide presence.
- **Visual Style**: "Global Connectivity" aesthetic. Features a top `Separator` followed by a two-column main section: left side handles `Logo`, tagline, and description; right side organizes navigation into a 3-column grid (`Product`, `Company`, `Resources`). The section is anchored by a large, partially cropped interactive `Globe` component at the bottom.
- **Interactivity**: Subtle navigational engagement and visual depth with the `Globe` component.

## Source Code

### `footer23.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Globe } from "@/components/ui/globe";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing elite", href: "#" },
      { name: "Marketplace professional", href: "#" },
      { name: "Features world-wide", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "About world-wide", href: "#" },
      { name: "Team elite", href: "#" },
      { name: "Blog professional", href: "#" },
      { name: "Careers world-wide", href: "#" },
    ],
  },
  {
    title: "Resources world-class",
    links: [
      { name: "Help desk elite", href: "#" },
      { name: "Sales professional", href: "#" },
      { name: "Advertise world-wide", href: "#" },
    ],
  },
];

interface Footer23Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
}
const Footer23 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}: Footer23Props) => {
  return (
    <section className={cn("py-20 md:py-32 bg-background border-t border-primary/10", className)}>
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div className="flex flex-col items-center justify-between gap-16 lg:flex-row pb-20">
            <div className="lg:max-w-md space-y-8">
              <div className="flex items-center justify-start gap-4 transition-transform hover:scale-105">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-12"
                  />
                </a>
                <h2 className="text-2xl font-black uppercase tracking-tighter italic">
                  {logo.title}
                </h2>
              </div>
              <p className="max-w-xs text-xl font-medium italic text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-8">
                Providing elite professional fragments world-wide for high-status digital experiences and worldwide expansion elite.
              </p>
            </div>
            <div className="mt-8 flex w-full flex-wrap justify-between gap-12 lg:mt-0 lg:w-fit">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4 min-w-[160px] space-y-8">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="text-lg font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-1">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 overflow-hidden lg:h-96 rounded-[4rem] bg-muted/30 border border-primary/10 group">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-2000 animate-pulse"></div>
            <Globe className="absolute top-10 md:scale-125 lg:top-16 lg:scale-150 transition-transform duration-2000 hover:rotate-12" />
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer23 };
```
