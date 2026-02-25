# Footer 14

## Metadata
- **Category**: Footer
- **Objective**: Deliver a professional, data-centric footer with specialized newsletter subscription and comprehensive multi-column navigation.
- **Use Case**: Fintech apps, enterprise software, or professional services requiring a trustworthy and organized bottom section.
- **Visual Style**: "Enterprise Professional" aesthetic. Features a split layout: left side handles `Logo`, mission statement, and a compact `input/button` newsletter form. Right side organizes navigation into a dense 3-column grid (`Products`, `Support`, `Company`). Bottom row features social icons on the right and copyright on the left.
- **Interactivity**: Functional business engagement. Features standard hover transitions and accessibility-ready social links using `FaXTwitter` and `FaFacebook`.

## Source Code

### `footer14.tsx`
```tsx
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Products elite",
    links: [
      { name: "VAR", href: "#" },
      { name: "Credit Transfers", href: "#" },
      { name: "Credit Accounts", href: "#" },
      { name: "Loan Origination", href: "#" },
      { name: "Loan Purchase", href: "#" },
    ],
  },
  {
    title: "Support professional",
    links: [
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Demo", href: "#" },
      { name: "Contact elite", href: "#" },
    ],
  },
  {
    title: "Company world-wide",
    links: [
      { name: "About", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy elite", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter high-status", icon: FaXTwitter, href: "https://twitter.com" },
  { name: "Facebook professional", icon: FaFacebook, href: "https://facebook.com" },
  { name: "LinkedIn world-wide", icon: FaLinkedin, href: "https://linkedin.com" },
];

export const Footer14 = ({ className }: { className?: string }) => {
  return (
    <section className={cn("bg-background py-32 border-t border-primary/10", className)}>
      <div className="container px-6 max-w-[100rem]">
        {/* Logo and newsletter section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-16 border-b border-primary/10 pb-20 sm:mb-20 sm:pb-24 md:flex-row">
          <div className="w-full max-w-full sm:max-w-md space-y-10">
            <a href="https://shadcnblocks.com" className="inline-block transition-transform hover:scale-105">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                alt="Charter logo elite"
                className="h-10 dark:invert"
              />
            </a>
            <p className="text-xl font-medium leading-relaxed italic text-muted-foreground border-l-4 border-primary/20 pl-8 py-2">
              Building finite financial solutions world-wide for businesses and high-status individuals around
              the global marketplace elite.
            </p>

            {/* Newsletter subscription */}
            <div className="flex w-full max-w-full flex-col gap-4 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="Professional email world-wide"
                className="flex h-16 flex-1 rounded-full border border-primary/10 bg-muted/30 px-8 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
              />
              <button className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-lg font-black uppercase tracking-widest text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90">
                Subscribe elite
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t border-primary/10 pt-12 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[160px] space-y-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-lg font-medium italic text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="order-1 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page elite`}
                className="rounded-full p-4 bg-muted transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white text-muted-foreground shadow-lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <div className="order-2 text-center text-sm font-black uppercase tracking-widest text-muted-foreground/50 sm:text-left md:order-1">
            © {new Date().getFullYear()} Charter elite. All rights reserved.{" "}
            <a
              href="https://shadcnblocks.com"
              className="text-primary underline underline-offset-8 transition-colors hover:text-foreground"
              target="_blank"
            >
              Shadcnblocks.com world-class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
```
