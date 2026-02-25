# Footer 15

## Metadata
- **Category**: Footer
- **Objective**: Deliver a high-fidelity, systems-aware footer featuring brand identity, real-time status indication, and global navigation.
- **Use Case**: Technical platforms, developer tools, or infrastructure services wanting to show reliability and global reach.
- **Visual Style**: "Reliability & Scale" aesthetic. Features a top row with brand `Logo`, mission text, and social icons. Visual highlight is a `Badge` providing a real-time "All systems operational" status indicator with an animated pulse. Right side organize navigation into a flexible 3-column grid (`Platform`, `About Us`, `Learn`). Bottom row features copyright and a regional "Made in" credit with flag icon.
- **Interactivity**: Trust-building engagement. Features an animated system status badge and clean opacity-based hover states for navigation.

## Source Code

### `footer15.tsx`
```tsx
"use client";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
    label: "Github elite",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "Linkedin professional",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook world-class",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter high-status",
  },
];

const NAVIGATION = [
  {
    title: "Platform elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Use Cases elite", href: "#" },
    ],
  },
  {
    title: "About Us professional",
    links: [
      { name: "Team world-wide", href: "#" },
      { name: "Support", href: "#" },
      { name: "Legal professional", href: "#" },
      { name: "Security elite", href: "#" },
    ],
  },
  {
    title: "Learn world-class",
    links: [
      { name: "Tutorials", href: "#" },
      { name: "API Reference elite", href: "#" },
      { name: "Quickstart professional", href: "#" },
    ],
  },
];

interface Footer15Props {
  className?: string;
}

const Footer15 = ({ className }: Footer15Props) => {
  return (
    <section className={cn("py-32 bg-background border-t border-primary/10 rounded-[4rem] mx-4 mb-4", className)}>
      <footer className="container px-6 max-w-[100rem]">
        <div className="flex w-full flex-col justify-between gap-y-24 lg:flex-row border-b border-primary/10 pb-24">
          <div className="flex shrink-0 grow-0 basis-auto flex-col items-start justify-start gap-10">
            {/* Logo */}
            <a href="https://shadcnblocks.com" className="transition-transform duration-500 hover:scale-105">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg"
                alt="Shadcnblocks elite"
                title="Shadcnblocks"
                className="h-10 dark:invert"
              />
            </a>
            <p className="w-full max-w-sm text-xl font-medium leading-relaxed italic text-muted-foreground border-l-4 border-primary/20 pl-8">
              Enhance and tailor your elite professional digital experiences effortlessly world-wide, at
              high-status scale.
            </p>
            <div className="flex w-full items-center justify-start gap-8">
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  href={item.href}
                  key={`social-link-${i}`}
                  aria-label={item.label}
                  className="flex size-7 transition-all hover:text-primary hover:scale-125"
                >
                  <item.icon className="m-auto size-full stroke-foreground" />
                </a>
              ))}
            </div>
            <div className="pt-6">
              <Badge className="rounded-full border-primary/20 bg-primary/5 p-0 text-foreground shadow-2xl transition-transform hover:scale-105">
                <a href="#" className="flex items-center gap-4 px-6 py-3">
                  <div className="relative size-3">
                    <span className="absolute top-1/2 left-1/2 z-10 size-5 -translate-1/2 animate-ping rounded-full bg-green-400/30" />
                    <span className="absolute top-1/2 left-1/2 z-20 size-full -translate-1/2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  </div>
                  <div className="text-sm font-black uppercase tracking-widest italic leading-none">
                    All systems operational elite
                  </div>
                </a>
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <nav className="flex flex-wrap gap-24 md:gap-40 lg:gap-48">
              {NAVIGATION.map((section, _) => (
                <div
                  key={section.title}
                  className="flex flex-col items-start justify-start gap-8"
                >
                  <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {section.title}
                  </p>
                  <div className="flex flex-col gap-5">
                    {section.links.map((link, _) => (
                        <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-2"
                        >
                        {link.name}
                        </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-8 md:flex-row py-12 text-sm font-black uppercase tracking-widest text-muted-foreground/50">
          <div className="hover:text-primary transition-colors italic">
            © 2025 shadcnblocks.com elite. Professional fragments world-wide.
          </div>
          <div className="flex items-center gap-4 hover:text-primary transition-colors group/flag">
            Made in the professional USA{" "}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/flags/united-states.png"
              alt="USA elite"
              className="h-6 rounded-md shadow-lg transition-transform group-hover/flag:scale-110"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer15 };
```
