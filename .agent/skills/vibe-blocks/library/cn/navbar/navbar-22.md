# Navbar 22

## Metadata
- **Category**: Navigation Bar
- **Objective**: Provide a clean, minimal header focused on displaying location and a real-time clock alongside core navigation.
- **Use Case**: Agency or studio websites, boutique portfolios where showing global presence or local time adds a premium, bespoke feel.
- **Visual Style**: Hyper-minimalist layout with sparse navigation links featuring a subtle upward sliding text effect upon hover, centered logo, and a live clock widget on the right.
- **Interactivity**: Uses `setInterval` within `useEffect` to constantly update a localized time string. Links use CSS translation for hover states (moving text up to reveal duplicate text below). Mobile navigation is handled by a side-panel `Sheet`.

## Source Code

```tsx
"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Navbar22Props {
  className?: string;
}

const Navbar22 = ({ className }: Navbar22Props) => {
  const [currentTime, setCurrentTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className={cn("bg-background py-4 text-foreground", className)}>
      <div className="container">
        <nav className="w-full border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 md:hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                  className="max-h-8"
                  alt="shadcnblocks.com"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Shadcnblocks.com
                </span>
              </div>

              <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                    className="max-h-8"
                    alt="shadcnblocks.com"
                  />
                  <span className="text-lg font-semibold tracking-tighter">
                    Shadcnblocks.com
                  </span>
                </a>
              </div>
              <div className="hidden items-center space-x-2 text-sm text-muted-foreground md:flex">
                <span className="font-medium">Brisbane</span>
                <span className="text-muted-foreground">/</span>

                <span className="font-medium">{currentTime}</span>
              </div>

              <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative inline-block h-6 overflow-hidden text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute top-full left-0 block w-full border-border text-muted-foreground transition-transform duration-300 group-hover:translate-y-[-100%] group-hover:border-b">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="top" className="h-screen">
                    <SheetTitle></SheetTitle>

                    <div className="m-4 flex flex-col space-y-6">
                      <div className="ml-3">
                        <a
                          href="/"
                          className="flex items-center justify-start gap-2 text-2xl font-bold text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                            className="max-h-8"
                            alt="shadcnblocks.com"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-4 py-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                      <div className="border-t border-border pt-6">
                        <div className="text-center text-sm text-muted-foreground">
                          <div className="font-medium">Brisbane</div>
                          <div className="mt-1">{currentTime}</div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar22 };
```
