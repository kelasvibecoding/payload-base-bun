# Navbar 29

## Metadata
- **Category**: Navigation Bar
- **Objective**: Deliver an animated, full-screen takeover mega menu dropping down smoothly from the top.
- **Use Case**: Highly stylized corporate or creative agency websites where navigation opens a robust, multi-pane overlay containing deep links.
- **Visual Style**: Top nav holds bare essentials. When toggled, a massive menu pushes down revealing deep links, multi-column secondary navigation, and embedded footer links.
- **Interactivity**: Uses `framer-motion` to animate the menu's drop-down clipping path (`inset(0% 0 0 0)`). Features a customized hamburger-to-X toggle icon consisting of animated `div` elements rotating dynamically on state change. Hover states use translations (`translate-y-2` to `0`) and opacity shifts for `ArrowUpRight` icons.

## Source Code

```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Blocks", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Contact", href: "#" },
];

const MEGA_MENU_ITEMS = [
  [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  [
    { label: "Feature", href: "#" },
    { label: "Components", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Examples", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Support", href: "#" },
  ],
  [
    { label: "Pricing", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Partnerships", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Legal", href: "#" },
  ],
  [
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Discord", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
];

const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Sign In", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const COMPANY_LINKS = [
  { label: "+1 (120) 233-01231", href: "#" },
  { label: "2025© Shadcnblocks.com", href: "#" },
];

interface Navbar29Props {
  className?: string;
}

const Navbar29 = ({ className }: Navbar29Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cn("", className)}>
      <nav className="relative">
        <ul className="relative z-1 flex w-full items-center justify-between gap-4 p-6 text-lg font-semibold tracking-tight">
          <li className="w-35">Shadcnblocks</li>
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className="hidden w-32 lg:block">
              <a
                href={item.href}
                className="transition-colors hover:text-foreground/70"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="lg:w-14">
            <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
          </li>
        </ul>

        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              className="absolute top-0 w-full bg-muted px-6 pt-30 pb-10"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              <div className="flex lg:hidden">
                <ul className="flex flex-col gap-5 text-2xl font-semibold tracking-tight">
                  {MOBILE_NAV_ITEMS.map((item, index) => (
                    <li key={index}>{item.label}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden w-full items-center justify-between gap-4 lg:flex">
                <div className="w-35 opacity-0">Shadcnblocks</div>
                {MEGA_MENU_ITEMS.map((section, sectionIndex) => (
                  <ul key={sectionIndex} className="space-y-5">
                    {section.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={cn(
                          "group flex w-32 items-center gap-1 text-foreground/40 hover:text-foreground",
                        )}
                      >
                        <a href={item.href}>{item.label}</a>
                        <ArrowUpRight className="size-4 translate-y-2 opacity-0 transition-all ease-out group-hover:translate-y-0 group-hover:opacity-100" />
                      </li>
                    ))}
                  </ul>
                ))}
                <div className="w-14" />
              </div>
              <div className="mt-40 flex w-full flex-col items-center justify-between gap-2 text-sm lg:flex-row lg:gap-4 lg:text-base">
                <div className="flex items-center gap-4 lg:gap-10">
                  {COMPANY_LINKS.map((item, index) => (
                    <p key={index}>{item.label}</p>
                  ))}
                </div>
                <div className="flex items-center gap-4 lg:gap-10">
                  {FOOTER_LINKS.map((item, index) => (
                    <p key={index}>{item.label}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
};

export { Navbar29 };

const Menu = ({
  className,
  setIsOpen,
  isOpen,
}: {
  className?: string;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  isOpen: boolean;
}) => {
  return (
    <button
      className={cn(
        "relative flex h-2 w-8 flex-col items-center justify-center gap-2 after:absolute after:h-12 after:w-full lg:w-14",
        className,
      )}
      onClick={() => setIsOpen((x: boolean) => !x)}
    >
      <motion.div
        animate={{ y: isOpen ? 0 : 5, rotate: isOpen ? 45 : 0 }}
        className="absolute h-0.5 w-full bg-foreground"
      />
      <motion.div
        animate={{ y: isOpen ? 0 : -5, rotate: isOpen ? -45 : 0 }}
        className="absolute h-0.5 w-full bg-foreground"
      />
    </button>
  );
};
```
