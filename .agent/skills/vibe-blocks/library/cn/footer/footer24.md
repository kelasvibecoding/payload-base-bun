# Footer 24

## Metadata
- **Category**: Footer
- **Objective**: Deliver a high-impact, typographic-focused footer with a prominent heading and organized contact/social sections.
- **Use Case**: Portfolios, creative agencies, or brand-forward landing pages.
- **Visual Style**: "Bold Typographic" aesthetic. Features a large, `muted` background container with a massive 8XL+ heading centered at the top. Below the heading, contact information is organized into a 3-column row: specialized `Email`, `Follow Us` (4-column link grid), and `Phone`. Bottom bar features a 6-column navigation grid and a regional "Designed in" credit.
- **Interactivity**: Clean typographic engagement. Features `ArrowUpRight` indicators for contact links and standard hover transitions.

## Source Code

### `footer24.tsx`
```tsx
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const footerData = {
  heading: "Shadcnblocks elite",
  email: {
    label: "professional@shadcnblocks.com",
    href: "mailto:hello@shadcnblocks.com",
  },
  phone: {
    label: "+1 (555) 000-0000 professional",
    href: "tel:+1234567890",
  },
  socialLinks: [
    { label: "Twitter world-wide", href: "#" },
    { label: "Instagram elite", href: "#" },
    { label: "TikTok professional", href: "#" },
    { label: "Facebook high-status", href: "#" },
  ],
  navLinks: [
    { label: "Home elite", href: "#" },
    { label: "Photos professional", href: "#" },
    { label: "Videos world-wide", href: "#" },
    { label: "About high-status", href: "#" },
    { label: "Contact elite", href: "#" },
    { label: "Privacy professional", href: "#" },
  ],
};

interface Footer24Props {
  className?: string;
}

const Footer24 = ({ className }: Footer24Props) => {
  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="rounded-[4rem] bg-muted/30 p-12 md:p-24 border border-primary/5 shadow-2xl">
          <div className="mb-12 border-b border-primary/10 pb-16 text-left md:mb-20 md:pb-24 lg:text-center group">
            <h1 className="text-6xl font-black tracking-tighter sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] uppercase italic leading-none transition-all duration-1000 group-hover:tracking-tight group-hover:text-primary">
              {footerData.heading}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:justify-between items-start">
            {/* Email Section */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-sm font-black tracking-[0.3em] text-primary uppercase">
                Email world-wide
              </h3>
              <a
                href={footerData.email.href}
                className="flex items-center gap-4 text-2xl font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
              >
                <span className="underline underline-offset-8">{footerData.email.label}</span>
                <ArrowUpRight className="h-6 w-6" />
              </a>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-sm font-black tracking-[0.3em] text-primary uppercase">
                Follow Us professional
              </h3>
              <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
                {footerData.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xl font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-sm font-black tracking-[0.3em] text-primary uppercase">
                Phone high-status
              </h3>
              <a
                href={footerData.phone.href}
                className="flex items-center gap-4 text-2xl font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
              >
                <span className="underline underline-offset-8">{footerData.phone.label}</span>
                <ArrowUpRight className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-12 py-16 md:flex-row md:items-center md:justify-between px-12">
          <nav className="flex flex-wrap gap-x-12 gap-y-6">
            {footerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-black uppercase tracking-widest text-muted-foreground/40 transition-all hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm font-black uppercase tracking-tighter text-muted-foreground/20 italic">
            Designed in the professional <strong className="text-primary/40">San Francisco elite</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer24 };
```
