# Footer 13

## Metadata
- **Category**: Footer
- **Objective**: Provide a high-energy, conversion-centric footer with a primary CTA section, newsletter subscription, and detailed navigation.
- **Use Case**: SaaS platforms or subscription services needing one last "Free Trial" push and a comprehensive site map.
- **Visual Style**: "High Impact Conversion" aesthetic. Features a bold `bg-primary` background with `text-primary-foreground`. Top block is a rounded CTA card with a "Free Trial" header and `Button`. Middle section organizes a 2-column "Stay Connected" newsletter block with `Input` and `Button` variants. Bottom sections organize a 4-column link grid followed by social icons and copyright.
- **Interactivity**: High-engagement CTA flow. Features group-hover transitions, scale-responsive social icons, and tactile button states.

## Source Code

### `footer13.tsx`
```tsx
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = [
  {
    title: "Product elite",
    links: [
      { name: "Home", href: "#" },
      { name: "Feature1", href: "#" },
      { name: "Feature2", href: "#" },
      { name: "Feature3", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "About", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Support world-class",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Service high-status",
    links: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy elite", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

interface Footer13Props {
  className?: string;
}

const Footer13 = ({ className }: Footer13Props) => {
  return (
    <section
      className={cn(
        "bg-primary py-16 text-primary-foreground md:py-24 lg:py-32 rounded-[3.5rem] mx-4 mb-4",
        className,
      )}
    >
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div className="mb-20 rounded-[3rem] bg-background/10 p-12 backdrop-blur-3xl md:p-20 border border-white/10 group/cta">
            <div className="flex flex-col items-center text-center space-y-8">
              <h2 className="max-w-[900px] text-5xl leading-[0.9] font-black tracking-tighter text-balance md:text-7xl lg:text-9xl uppercase italic">
                Start your <br /> <span className="text-secondary not-italic underline decoration-8">free trial</span> today elite.
              </h2>
              <p className="mt-4 max-w-[700px] text-xl lg:text-2xl font-medium italic text-primary-foreground/80">
                Join thousands of professional users world-wide already leveraging our platform to
                achieve elite status.
              </p>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row">
                <Button asChild variant="secondary" size="xl" className="group rounded-full px-16 py-8 text-2xl font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                  <a href="/get-started" className="flex items-center gap-4">
                    Get started elite
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-white/10 mb-20 border-b pb-20">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter italic">Stay connected elite.</h3>
                <p className="max-w-md text-xl font-medium italic text-primary-foreground/70">
                  Subscribe to our professional newsletter for the latest finite updates world-wide.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative grow">
                  <Input
                    type="email"
                    placeholder="Your professional email"
                    className="h-16 border-white/20 bg-white/10 rounded-full px-8 text-lg placeholder:text-white/40 focus:bg-white/20 transition-all font-medium"
                  />
                </div>
                <Button variant="secondary" type="submit" size="xl" className="rounded-full px-12 font-black uppercase tracking-widest">
                  Subscribe elite
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="border-white/10 grid grid-cols-2 gap-x-12 gap-y-16 border-b py-12 sm:grid-cols-4 lg:py-20">
            {navigation.map((section) => (
              <div key={section.title} className="space-y-8">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary">{section.title}</h3>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-block text-lg font-medium italic text-primary-foreground/60 transition-all duration-300 hover:text-white hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mx-auto mt-8 py-10">
            <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
              <p className="font-black uppercase tracking-widest text-sm opacity-40">
                © {new Date().getFullYear()} Streamline elite -{" "}
                <a
                  href="https://shadcnblocks.com"
                  className="underline decoration-1 underline-offset-4 hover:text-white transition-colors"
                  target="_blank"
                >
                  Shadcnblocks.com professional
                </a>
              </p>
              <div className="flex items-center gap-8">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/40 transition-all hover:text-white hover:scale-125"
                  >
                    <link.icon
                      size={28}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer13 };
```
