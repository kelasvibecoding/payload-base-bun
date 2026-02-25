# Footer 4

## Metadata
- **Category**: Footer
- **Objective**: Deliver a responsive, high-fidelity footer with specialized mobile/desktop logo handling and a wide newsletter section.
- **Use Case**: Professional brands with distinct mobile identities requiring a robust, informative footer across all device segments.
- **Visual Style**: "High Fidelity Brand" aesthetic. Features a top row with split-brand identity (using `LogoImageDesktop` and `LogoImageMobile`) and prioritized social links. Middle section consists of a 3-column link grid. Visual separator is a wide newsletter subscription area with `text-4xl` headers. Bottom row contains legal links and copyright.
- **Interactivity**: Social and lead-gen engagement. Features responsive logo switching and a direct subscription interface.

## Source Code

### `footer4.tsx`
```tsx
import { FaDiscord, FaTwitter } from "react-icons/fa";

import { cn } from "@/lib/utils";

import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
];

interface Footer4Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    srcMobile: string;
  };
  className?: string;
}
const Footer4 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg",
    srcMobile: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}: Footer4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 flex h-full items-center justify-between md:items-start lg:col-span-3 lg:flex-col">
              <Logo url="https://shadcnblocks.com">
                <LogoImageDesktop
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12"
                />
                <LogoImageMobile
                  src={logo.srcMobile}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10"
                />
              </Logo>
              <ul className="flex items-center space-x-8 text-muted-foreground mt-8">
                <li className="font-medium hover:text-primary transition-colors">
                  <a href="#">
                    <FaDiscord className="size-8" />
                  </a>
                </li>

                <li className="font-medium hover:text-primary transition-colors">
                  <a href="#">
                    <FaTwitter className="size-8" />
                  </a>
                </li>
              </ul>
            </div>
            <Separator className="col-span-2 my-6 lg:hidden" />
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
          <Separator className="my-14 lg:my-20 opacity-50" />
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center p-12 bg-muted/30 rounded-[3rem] border border-primary/10">
            <div className="space-y-4">
              <p className="text-4xl lg:text-6xl font-black tracking-tighter uppercase italic">
                Join our newsletter elite
              </p>
              <p className="text-xl font-medium italic text-muted-foreground">
                Get exclusive professional news, finite features, and high-status updates world-wide.
              </p>
            </div>
            <div className="flex w-full max-w-md items-center space-x-4">
              <Input type="email" placeholder="Email" className="h-16 rounded-full px-8 text-lg" />
              <Button type="submit" size="xl" className="rounded-full px-12 font-black uppercase tracking-widest bg-primary">Subscribe elite</Button>
            </div>
          </div>
          <Separator className="my-14 lg:my-20 opacity-50" />
          <div className="flex flex-col justify-between gap-4 text-sm font-black uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
            <ul className="flex gap-8">
              <li className="underline hover:text-primary transition-colors">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="underline hover:text-primary transition-colors">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
            <p>© 2024 Shadcnblocks.com elite. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer4 };
```
