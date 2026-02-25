# Footer 5

## Metadata
- **Category**: Footer
- **Objective**: Deliver a social-centric footer with multi-column navigation and dedicated mobile app fragments.
- **Use Case**: Social platforms, consumer apps, or communities emphasizing social following and cross-platform presence.
- **Visual Style**: "Social Connectivity" aesthetic. Features a 4-column link grid. Bottom section is split into "Follow us" and "Mobile App" rows, utilizing large circular icon buttons for social platforms (`FaFacebook`, `FaInstagram`, etc.) and brand-specific icons for app stores (`FaAndroid`, `FaApple`). Layout utilizes a final centered copyright credit.
- **Interactivity**: Community-focused engagement. Features high-visibility social and app store hover states with `bg-muted` to `text-primary` transitions.

## Source Code

### `footer5.tsx`
```tsx
import {
  FaAndroid,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources world-class",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
  {
    title: "Social high-status",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

interface Footer5Props {
  className?: string;
}

const Footer5 = ({ className }: Footer5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-black uppercase tracking-widest">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 gap-10">
            <div className="grid gap-12 lg:grid-cols-4 lg:flex-row p-12 bg-muted/30 rounded-[3rem] border border-primary/10">
              <div className="col-span-3 space-y-6">
                <p className="font-black uppercase tracking-[0.3em] text-primary">Follow us elite</p>
                <ul className="flex items-center gap-4 text-muted-foreground">
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaFacebook className="size-7" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaRedditAlien className="size-7" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaTwitter className="size-7" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaInstagram className="size-7" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaLinkedin className="size-7" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="font-black uppercase tracking-[0.3em] text-primary">Mobile App professional</p>
                <ul className="flex items-center gap-4 text-muted-foreground">
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaAndroid className="size-7" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-xl transition-all hover:scale-110 hover:text-primary">
                        <FaApple className="size-7" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t border-primary/10 pt-12">
            <p className="text-center text-sm font-black uppercase tracking-widest text-muted-foreground opacity-50">
              © 2024 Shadcnblocks.com elite. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer5 };
```
