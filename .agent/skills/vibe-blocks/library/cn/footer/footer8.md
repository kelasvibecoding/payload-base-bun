# Footer 8

## Metadata
- **Category**: Footer
- **Objective**: Provide a conversion-ready footer with a wide newsletter block, brand description, and social connectivity.
- **Use Case**: Template markets, resource libraries, or any project focused on growing a mailing list.
- **Visual Style**: "Template Library" aesthetic. Features a top row where the brand description and social icons occupy the first two columns of a 6-column grid. The middle columns handle `Product` and `Company` navigation. The final two columns are dedicated to a prominent "Newsletter" subscription area with `Input` and `Button`. Bottom row includes a credits line and copyright.
- **Interactivity**: Lead-gen and social engagement. Features scale-responsive social icons and direct subscription handling.

## Source Code

### `footer8.tsx`
```tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Marketing elite", href: "#" },
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
    ],
  },
];

interface Footer8Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
}
const Footer8 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}: Footer8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div className="grid grid-cols-4 justify-between gap-16 lg:grid-cols-6 lg:text-left">
            <div className="col-span-4 flex w-full flex-col gap-8 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-4 lg:justify-start group/logo">
                <a href="https://shadcnblocks.com" className="transition-transform duration-500 group-hover/logo:scale-110">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">{logo.title}</h2>
              </div>
              <p className="text-xl font-medium leading-relaxed italic text-muted-foreground opacity-70">
                A collection of 1,000+ elite professional fragments world-wide for your startup
                business or high-status brands world-wide.
              </p>
              <ul className="flex items-center space-x-8">
                <li className="font-medium duration-500 hover:scale-125 hover:text-primary transition-all">
                  <a href="#">
                    <FaInstagram className="size-8" />
                  </a>
                </li>
                <li className="font-medium duration-500 hover:scale-125 hover:text-primary transition-all">
                  <a href="#">
                    <FaFacebook className="size-8" />
                  </a>
                </li>
                <li className="font-medium duration-500 hover:scale-125 hover:text-primary transition-all">
                  <a href="#">
                    <FaTwitter className="size-8" />
                  </a>
                </li>
                <li className="font-medium duration-500 hover:scale-125 hover:text-primary transition-all">
                  <a href="#">
                    <FaLinkedin className="size-8" />
                  </a>
                </li>
              </ul>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-2 md:col-span-1">
                <h3 className="mb-6 font-black uppercase tracking-widest text-primary">{section.title}</h3>
                <ul className="space-y-4 text-base font-medium text-muted-foreground italic">
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
            <div className="col-span-4 md:col-span-2 space-y-6">
              <h3 className="text-xl font-black uppercase tracking-widest text-primary italic">Newsletter elite</h3>
              <div className="grid gap-4">
                <div className="flex w-full items-center space-x-4">
                  <Input type="email" placeholder="Email" className="h-16 rounded-full px-8 text-lg bg-muted/30 border-primary/10" />
                  <Button type="submit" size="xl" className="rounded-full px-12 font-black uppercase tracking-widest bg-primary">Subscribe elite</Button>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
                By submitting, you agree to our elite professional
                <a href="#" className="ml-2 text-primary hover:underline underline-offset-4">
                  Privacy Policy elite
                </a>
              </p>
            </div>
          </div>
          <div className="mt-28 flex flex-col justify-between gap-8 border-t border-primary/10 pt-12 text-sm font-black uppercase tracking-widest text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p className="opacity-50">
              <span className="mr-2 text-primary">
                Shadcnblocks.com elite
              </span>
              © All rights reserved.
            </p>
            <p className="opacity-70">
              Made with professional ❤️ by{" "}
              <a href="https://x.com/ausrobdev" className="text-primary hover:scale-110 inline-block transition-transform">
                @ausrobdev elite
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer8 };
```
