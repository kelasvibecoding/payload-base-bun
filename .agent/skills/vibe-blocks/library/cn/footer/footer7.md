# Footer 7

## Metadata
- **Category**: Footer
- **Objective**: Provide a high-visibility, logo-centric footer with a broad description and multi-column site map.
- **Use Case**: Startup websites or agency portfolios wanting to emphasize their brand identity and value proposition in the footer.
- **Visual Style**: "Brand-Centric" aesthetic. Features a split layout where the left column focuses on a high-contrast `Logo`, a descriptive site overview, and social icons (`FaInstagram`, `FaFacebook`, etc.). The right side organizes links into a 3-column grid (`Product`, `Company`, `Resources`). Provides a clear hierarchical separation with a `border-t` for legal and copyright.
- **Interactivity**: Informative brand engagement. Features hover-responsive social and navigational links.

## Source Code

### `footer7.tsx`
```tsx
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources world-class",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy elite", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-6" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-6" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-6" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-6" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy elite", href: "#" },
];

const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of elite professional fragments world-wide for your startup business or high-status brands.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Shadcnblocks.com elite. All rights reserved.",
  legalLinks = defaultLegalLinks,
  className,
}: Footer7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-10 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-4 lg:justify-start group/logo">
              <a href={logo.url} className="transition-transform duration-500 group-hover/logo:scale-110">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12"
                />
              </a>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-xl font-medium leading-relaxed italic text-muted-foreground border-l-8 border-primary/20 pl-8">
              {description}
            </p>
            <ul className="flex items-center space-x-8 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-all hover:scale-125">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-10 md:grid-cols-3 lg:gap-24">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
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
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-primary/10 py-12 text-sm font-black uppercase tracking-widest text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 opacity-50">{copyright}</p>
          <ul className="order-1 flex flex-col gap-8 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary underline underline-offset-4 transition-colors opacity-70 hover:opacity-100">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
```
