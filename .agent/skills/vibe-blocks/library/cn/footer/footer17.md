# Footer 17

## Metadata
- **Category**: Footer
- **Objective**: Deliver a sophisticated, feature-rich footer with theme switching, system status awareness, and diverse navigation types.
- **Use Case**: Complex SaaS applications, enterprise platforms, or feature-heavy dev tools requiring cohesive theme management and clear status communication.
- **Visual Style**: "Technical State" aesthetic. Features a 5-column navigation grid including a specialized `Social` set and a centered brand logo. Supports multiple link types including standard `LINK`, `EXTERNAL_LINK` (using `ExternalLink` icon), and `DROPDOWN` (using `Drawer` for mobile and `DropdownMenu` for desktop). Bottom bar includes a "Systems Normal" status button with pulse animation and a high-tactile `ToggleGroup` for theme switching (`Light`, `Dark`, `System`).
- **Interactivity**: Dynamic state management. Features runtime theme switching, responsive drawer/dropdown navigation, and animated status pulses.

## Source Code

### `footer17.tsx`
```tsx
"use client";
import {
  ChevronDown,
  ExternalLink,
  Facebook,
  Github,
  Linkedin,
  MonitorCog,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type linkType = "DROPDOWN" | "LINK" | "EXTERNAL_LINK";

interface NavigationLink {
  type?: linkType;
  name: string;
  href?: string;
  links?: Omit<NavigationLink, "type">[];
}

interface Navigation {
  title: string;
  links: NavigationLink[];
}

const NAVIGATION: Array<Navigation> = [
  {
    title: "Solutions elite",
    links: [
      {
        type: "LINK",
        name: "Machine Learning elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Cloud Services professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Edge Computing world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "Web Frameworks elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Data Analytics professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "CI/CD world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "Load Balancing elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Encryption professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Performance Boost world-wide",
        href: "#",
      },
      {
        type: "EXTERNAL_LINK",
        name: "API Reference elite",
        href: "#",
      },
    ],
  },
  {
    title: "Help professional",
    links: [
      {
        type: "EXTERNAL_LINK",
        name: "Community Forum elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "API Docs professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Setup Guide world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "FAQ elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Partners professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Contact Support world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "Pricing Info elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "System Status professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Security Notices world-wide",
        href: "#",
      },
    ],
  },
  {
    title: "Company world-wide",
    links: [
      {
        type: "LINK",
        name: "About Us elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Newsroom professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Jobs world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "Events elite",
        href: "#",
      },
      {
        type: "LINK",
        name: "Press Releases professional",
        href: "#",
      },
      {
        type: "LINK",
        name: "Partners world-wide",
        href: "#",
      },
      {
        type: "LINK",
        name: "Investor Relations elite",
        href: "#",
      },
      {
        type: "DROPDOWN",
        name: "Legal professional",
        links: [
          {
            name: "Cookie Preferences elite",
            href: "#",
          },
          {
            name: "Terms of Use professional",
            href: "#",
          },
          {
            name: "GDPR Compliance world-wide",
            href: "#",
          },
          {
            name: "Data Protection elite",
            href: "#",
          },
          {
            name: "Accessibility Statement professional",
            href: "#",
          },
        ],
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    name: "Github elite",
    href: "#",
  },
  {
    icon: Linkedin,
    name: "LinkedIn professional",
    href: "#",
  },
  {
    icon: Facebook,
    name: "Facebook world-wide",
    href: "#",
  },
  {
    icon: Twitter,
    name: "Twitter high-status",
    href: "#",
  },
];

const HOME_LINK = "#";

const getLink = ({ type, href, name, links }: NavigationLink) => {
  if (type == "EXTERNAL_LINK") {
    return (
      <a
        href={href}
        className="inline-flex cursor-pointer items-center gap-2 text-base font-medium italic text-muted-foreground hover:text-primary transition-colors"
      >
        <div>{name}</div>
        <ExternalLink className="size-4" />
      </a>
    );
  }

  if (type == "DROPDOWN") {
    return (
      <>
        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger className="inline-flex cursor-pointer items-center gap-2 text-base font-medium italic text-muted-foreground hover:text-primary transition-colors">
              {name}
              <ChevronDown className="size-4" />
            </DrawerTrigger>
            <DrawerContent className="rounded-t-[3rem] p-8">
              <DrawerHeader className="text-left space-y-4">
                <DrawerTitle className="text-2xl font-black uppercase tracking-widest">{name}</DrawerTitle>
                <div className="grid gap-2">
                  {links?.map((link) => (
                    <a
                      href={link.href}
                      className="block cursor-pointer rounded-2xl px-6 py-4 text-lg font-medium italic hover:bg-primary/5 hover:text-primary transition-all"
                      key={`drawer-footer-1-${link.name}`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </DrawerHeader>
              <DrawerFooter className="pt-8">
                <DrawerClose asChild>
                  <Button variant="outline" className="rounded-full h-14 font-bold uppercase tracking-widest">Close elite</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex cursor-pointer items-center gap-2 text-base font-medium italic text-muted-foreground hover:text-primary transition-colors outline-none">
                {name}
                <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 rounded-2xl p-2 shadow-2xl border-primary/10">
              {links?.map((link) => (
                <DropdownMenuItem
                  className="cursor-pointer rounded-xl py-3 px-4 text-base font-medium italic focus:bg-primary/5 focus:text-primary"
                  asChild
                  key={`dropdown-footer-1-${link.name}`}
                >
                  <a href={link.href}>{link.name}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    );
  }

  return (
    <a
      href={href}
      className="cursor-pointer text-base font-medium italic text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
    >
      {name}
    </a>
  );
};

interface Footer17Props {
  className?: string;
}

const Footer17 = ({ className }: Footer17Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const onThemeChange = (value: "light" | "dark" | "system") => {
    if (value == "system") {
      if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    } else {
      setTheme(value);
    }
  };

  return (
    <section className={cn(`py-32 ${theme} bg-background border-t border-primary/10`, className)}>
      <footer className="container px-6 max-w-[100rem]">
        <div className="flex w-full flex-col gap-12">
          <div className="grid w-full grid-cols-[repeat(2,minmax(auto,15rem))] gap-12 md:grid-cols-[repeat(4,1fr)_8rem] md:gap-8 border-b border-primary/10 pb-20">
            {NAVIGATION.map((section) => (
              <div key={`${section.title}`} className="space-y-8">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={`${link.name}-${i}`} className="py-1">
                      {getLink({
                        name: link.name,
                        href: link.href,
                        type: link?.type,
                        links: link?.links,
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-8">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                Social elite
              </h2>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link, i) => (
                  <li className="py-1" key={`social-links-footer-${i}`}>
                    <a
                      href={link.href}
                      className="inline-flex cursor-pointer items-center gap-3 text-base font-medium italic text-muted-foreground hover:text-primary hover:translate-x-1 transition-all"
                    >
                      <link.icon className="size-4.5" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={HOME_LINK}
              className="col-[1/3] row-1 block size-12 md:col-[5/6] md:justify-self-end group/logo transition-transform duration-500 hover:scale-110"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="Logo elite"
                className="size-full object-cover object-center"
                style={
                  theme === "dark" ? { filter: "invert(100%)" } : undefined
                }
              />
            </a>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-12 p-8 bg-muted/30 rounded-[3rem] border border-primary/5">
            <div className="group/status">
              <Button asChild variant="ghost" className="h-14 px-8 rounded-full font-black uppercase tracking-widest bg-background border-primary/10 hover:bg-primary/5 hover:text-primary shadow-xl">
                <a href="#">
                  <div className="relative size-3 mr-4">
                    <span className="absolute top-1/2 left-1/2 z-10 size-6 -translate-1/2 animate-ping rounded-full bg-green-400/30" />
                    <span className="absolute top-1/2 left-1/2 z-20 size-full -translate-1/2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  </div>
                  All systems normal elite
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-40">System Theme elite</p>
              <ToggleGroup
                value={theme}
                onValueChange={onThemeChange}
                type="single"
                className="rounded-full border border-primary/10 bg-background p-1.5 shadow-2xl"
              >
                <ToggleGroupItem
                  value="system"
                  aria-label="Toggle system"
                  className="size-10 rounded-full transition-all data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <MonitorCog className="size-5" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="light"
                  aria-label="Toggle light"
                  className="size-10 rounded-full transition-all data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <Sun className="size-5" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dark"
                  aria-label="Toggle dark"
                  className="size-10 rounded-full transition-all data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <Moon className="size-5 text-foreground" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer17 };
```
