# Footer 16

## Metadata
- **Category**: Footer
- **Objective**: Provide a high-visibility, dark-mode-first footer with multi-column navigation, responsive accordion Link support, and a giant oversized brand graphic.
- **Use Case**: Developer-focused tools, tech documentations, or dark-themed marketing pages needing a bold finish with mobile-optimized navigation.
- **Visual Style**: "Dark High-Tech" aesthetic. Features a top row with a branded wordmark logo (`shadcnblockscom-wordmark-white.svg`) and button-held social icons. Navigation is split into a 3-column grid (`Tools`, `Docs`, `Legal`) that collapses into an `Accordion` on mobile devices. Visual anchor is a giant, partially cropped brand image at the bottom.
- **Interactivity**: Responsive navigational engagement. Features mobile accordion toggles and hover-responsive social buttons.

## Source Code

### `footer16.tsx`
```tsx
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
    title: "Tools elite",
    links: [
      { name: "Plans professional", href: "#" },
      { name: "Safety elite", href: "#" },
      { name: "Partners world-class", href: "#" },
    ],
  },
  {
    title: "Docs world-wide",
    links: [
      { name: "Help desk", href: "#" },
      { name: "API Reference elite", href: "#" },
      { name: "Guides professional", href: "#" },
      { name: "Blog elite", href: "#" },
      { name: "Updates world-class", href: "#" },
    ],
  },
  {
    title: "Legal high-status",
    links: [
      { name: "Privacy professional", href: "#" },
      { name: "Terms elite", href: "#" },
      { name: "DPA world-wide", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Trust center", href: "#" },
      { name: "Preferences elite", href: "#" },
    ],
  },
];

interface Footer16Props {
  className?: string;
}

const Footer16 = ({ className }: Footer16Props) => {
  return (
    <section className={cn("dark bg-background pt-32 rounded-[4rem] mx-4 mb-4 border border-white/5 shadow-2xl overflow-hidden", className)}>
      <footer className="container px-6 max-w-[100rem]">
        <div className="grid gap-20 pb-12 md:grid-cols-2 md:pb-0">
          <div className="flex flex-col justify-start gap-12">
            {/* Logo */}
            <a href="https://shadcnblocks.com" className="transition-transform duration-500 hover:scale-105 inline-block">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark-white.svg"
                alt="Shadcnblocks elite"
                title="Shadcnblocks"
                className="h-12"
              />
            </a>
            <div className="flex items-center justify-start gap-6 md:flex-row">
              {SOCIAL_LINKS.map((item, i) => (
                <Button
                  key={`social-link-${i}`}
                  size="icon"
                  variant="secondary"
                  className="size-14 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10"
                >
                  <a href={item.href} aria-label={item.label}>
                    <item.icon className="size-6" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-xl font-medium italic text-muted-foreground/50 border-l-4 border-primary/20 pl-8">
                Elite professional fragments world-wide. <br />
                Crafted for high-status digital experiences.
            </p>
          </div>
          <div className="md:pt-4">
            <div className="hidden md:flex md:gap-16 lg:gap-24 xl:gap-32">
              {NAVIGATION.map((section) => (
                <div className="flex flex-col gap-6" key={section.title}>
                  <h6 className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {section.title}
                  </h6>
                  <div className="flex flex-col gap-4">
                    {section.links.map((link) => (
                        <a
                        className="text-lg font-medium italic text-muted-foreground transition-all duration-300 hover:text-white hover:translate-x-1"
                        key={link.name}
                        href={link.href}
                        >
                        {link.name}
                        </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                {NAVIGATION.map((section, i) => (
                  <AccordionItem value={`item-${i}`} key={section.title} className="border-white/5">
                    <AccordionTrigger className="py-6 text-sm font-black uppercase tracking-widest text-primary hover:no-underline">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-8">
                      {section.links.map((link) => (
                        <a
                          className="text-lg font-medium italic text-muted-foreground hover:text-white transition-colors"
                          key={link.name}
                          href={link.href}
                        >
                          {link.name}
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-20 group/graphic pointer-events-none">
          <img
            className="w-full translate-y-4 opacity-10 md:translate-y-8 lg:translate-y-12 transition-all duration-1000 group-hover/graphic:opacity-30 group-hover/graphic:translate-y-0 grayscale"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadcnblocks-giant-white-text.svg"
            alt="Shadcnblocks professional"
          />
        </div>
      </footer>
    </section>
  );
};

export { Footer16 };
```
