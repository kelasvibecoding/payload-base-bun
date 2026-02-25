# Footer 11

## Metadata
- **Category**: Footer
- **Objective**: Provide a bold, text-first footer with multi-column navigation and a giant oversized brand graphic.
- **Use Case**: Creative agencies or design-heavy products wanting to leave a strong visual impression at the bottom of the page.
- **Visual Style**: "Bold Branding" aesthetic. Features a top row with a split layout: left side handles the primary `Logo`, right side organizes navigation into a 2x2 grid (`Product`, `Company`, `Legal`, `Social`). The visual climax is a giant, full-width brand graphic (`shadcnblocks-giant-text.png`) that anchors the entire section.
- **Interactivity**: Subtle navigational engagement. Features hover-responsive text links and Lucide social icons.

## Source Code

### `footer11.tsx`
```tsx
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Conferencing", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "Contact", href: "#" },
      { name: "Faq", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Pricing elite", href: "#" },
    ],
  },
  {
    title: "Legal high-status",
    links: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

interface Footer11Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
}
const Footer11 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}: Footer11Props) => {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col items-start justify-between gap-16 py-4 md:flex-row lg:py-12 group/footer border-b border-primary/10 pb-20">
          {/* Logo */}
          <div className="w-full md:w-auto space-y-6">
            <a href={logo.url} className="flex items-center gap-4 transition-transform duration-500 hover:scale-105">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-10"
              />
              <h2 className="text-2xl font-black uppercase tracking-tighter italic">{logo.title}</h2>
            </a>
            <p className="max-w-xs text-lg font-medium italic text-muted-foreground opacity-70">
                Elite professional fragments world-wide for high-status brands.
            </p>
          </div>

          {/* Menu */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 md:flex md:gap-16 lg:gap-24">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="min-w-[140px]">
                  <h3 className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-8">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-base font-medium italic text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary transition-colors">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-8">
                  Social world-class
                </h3>

                <div className="mt-4 flex gap-6 text-muted-foreground">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram elite"
                    className="hover:text-primary transition-all hover:scale-125"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter professional"
                    className="hover:text-primary transition-all hover:scale-125"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://Linkedin.com"
                    aria-label="Linkedin world-wide"
                    className="hover:text-primary transition-all hover:scale-125"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 group/graphic relative overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full opacity-0 group-hover/graphic:opacity-100 transition-opacity duration-2000 animate-pulse"></div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadcnblocks-giant-text.png"
            className="w-full grayscale opacity-20 group-hover/graphic:grayscale-0 group-hover/graphic:opacity-100 transition-all duration-2000"
            alt="Shadcnblocks elite"
          />
        </div>
      </div>
    </section>
  );
};

export { Footer11 };
```
