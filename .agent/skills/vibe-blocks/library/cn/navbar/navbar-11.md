# Navbar 11

## Metadata
- **Category**: Navigation Bar
- **Objective**: Create an expansive, structured mega menu showcasing features via a dual-pane layout, where sub-menu items are organized systematically alongside highlighted featured links.
- **Use Case**: E-commerce, extensive SAAS solutions, or corporate sites where a large volume of navigation links must be presented cleanly without overwhelming the user.
- **Visual Style**: Clean tabular design offering clear taxonomy through category titles on the left and comprehensive icon-based nested links on the right.
- **Interactivity**: The desktop version utilizes Shadcn UI's `NavigationMenu` to reveal extensive dual-pane dropdowns featuring interactive hover states. Mobile navigation is managed through a full-screen `Sheet` containing an `Accordion` pattern.

## Source Code

```tsx
"use client";
import {
  Book,
  Cloud,
  Code,
  Database,
  Gift,
  Globe,
  Heart,
  Layout,
  MenuIcon,
  Monitor,
  Paintbrush,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface MenuLink {
  label: string;
  description?: string;
  url?: string;
  icon?: {
    component: LucideIcon;
    color: string;
  };
}

interface MenuColumn {
  title?: string;
  links: MenuLink[];
}

interface MenuItem {
  title: string;
  url?: string;
  columns?: MenuColumn[];
  featured?: MenuLink[];
  bottomLinks?: MenuLink[];
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface MenuSubLinkProps {
  link: MenuLink;
  className?: string;
}

const LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    columns: [
      {
        title: "Developer Tools",
        links: [
          {
            label: "UI Components",
            description: "Beautifully designed react components",
            url: "#",
            icon: { component: Layout, color: "#3b82f6" },
          },
          {
            label: "Authentication",
            description: "Secure login and user management",
            url: "#",
            icon: { component: Shield, color: "#10b981" },
          },
          {
            label: "Database",
            description: "High-performance data storage",
            url: "#",
            icon: { component: Database, color: "#f59e0b" },
          },
        ],
      },
      {
        title: "Infrastructure",
        links: [
          {
            label: "Global Edge",
            description: "Deploy globally in milliseconds",
            url: "#",
            icon: { component: Globe, color: "#8b5cf6" },
          },
          {
            label: "Cloud Compute",
            description: "Scalable compute resources",
            url: "#",
            icon: { component: Cloud, color: "#ec4899" },
          },
          {
            label: "Serverless",
            description: "Run code without managing servers",
            url: "#",
            icon: { component: Zap, color: "#14b8a6" },
          },
        ],
      },
    ],
    featured: [
      {
        label: "AI Platform",
        description: "Integrate machine learning into your apps",
        url: "#",
        icon: { component: Sparkles, color: "#f97316" },
      },
      {
        label: "Mobile SDK",
        description: "Build native apps for iOS and Android",
        url: "#",
        icon: { component: Smartphone, color: "#64748b" },
      },
    ],
    bottomLinks: [
      {
        label: "View All Products",
        url: "#",
      },
      {
        label: "Pricing Plans",
        url: "#",
      },
      {
        label: "System Status",
        url: "#",
      },
    ],
  },
  {
    title: "Solutions",
    columns: [
      {
        title: "By Industry",
        links: [
          {
            label: "E-Commerce",
            description: "Tools for online retail",
            url: "#",
            icon: { component: ShoppingCart, color: "#10b981" },
          },
          {
            label: "Healthcare",
            description: "HIPAA compliant infrastructure",
            url: "#",
            icon: { component: Heart, color: "#ef4444" },
          },
          {
            label: "Finance",
            description: "Secure fintech solutions",
            url: "#",
            icon: { component: Shield, color: "#3b82f6" },
          },
        ],
      },
    ],
    featured: [
      {
        label: "Enterprise",
        description: "Advanced security and support",
        url: "#",
        icon: { component: Server, color: "#8b5cf6" },
      },
      {
        label: "Startups",
        description: "Special pricing and credits",
        url: "#",
        icon: { component: Gift, color: "#f59e0b" },
      },
    ],
  },
  {
    title: "Developers",
    columns: [
      {
        links: [
          {
            label: "Documentation",
            description: "Comprehensive guides",
            url: "#",
            icon: { component: Book, color: "#3b82f6" },
          },
          {
            label: "API Reference",
            description: "Endpoint details",
            url: "#",
            icon: { component: Code, color: "#10b981" },
          },
          {
            label: "CLI Tool",
            description: "Terminal management",
            url: "#",
            icon: { component: Terminal, color: "#f59e0b" },
          },
          {
            label: "SDKs",
            description: "Official libraries",
            url: "#",
            icon: { component: Monitor, color: "#ec4899" },
          },
        ],
      },
    ],
    bottomLinks: [
      {
        label: "GitHub",
        url: "#",
      },
      {
        label: "Community",
        url: "#",
      },
    ],
  },
  {
    title: "Pricing",
    url: "#",
  },
];

const BUTTONS = [
  {
    label: "Log in",
    url: "#",
    variant: "ghost" as const,
  },
  {
    label: "Contact Sales",
    url: "#",
    variant: "outline" as const,
  },
  {
    label: "Sign up",
    url: "#",
    variant: "default" as const,
  },
];

const MOBILE_BREAKPOINT = 1024;

interface Navbar11Props {
  className?: string;
}

const Navbar11 = ({ className }: Navbar11Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <Fragment>
      <section className={cn("relative z-50 bg-background", className)}>
        <div className="container h-16 border-b">
          <div className="flex h-full items-center justify-between">
            <a
              href={LOGO.url}
              className="flex items-center gap-2 text-lg font-semibold tracking-tighter"
            >
              <img src={LOGO.src} alt={LOGO.alt} className="size-8" />
              <span className="hidden md:inline-block">{LOGO.title}</span>
            </a>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <div className="hidden gap-2 lg:flex">
                {BUTTONS.map((button, index) => (
                  <Button
                    key={`nav-button-${index}`}
                    variant={button.variant}
                    asChild
                  >
                    <a href={button.url}>{button.label}</a>
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <X className="size-5" />
                ) : (
                  <MenuIcon className="size-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MobileNavigationMenu open={open} setOpen={setOpen} />
    </Fragment>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  if (item.columns || item.featured) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="h-fit bg-transparent font-normal text-foreground focus:!bg-transparent data-[active=true]:!bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!w-[1000px] !p-0">
          <div className="flex">
            <div className="flex w-[70%] p-6">
              {item.columns?.map((column, colIndex) => (
                <div key={`column-${colIndex}`} className="flex-1 pr-6">
                  {column.title && (
                    <h4 className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {column.title}
                    </h4>
                  )}
                  <div className="flex flex-col gap-2">
                    {column.links.map((link, i) => (
                      <MenuSubLink
                        key={`col-link-${i}`}
                        link={link}
                        className="p-2"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {(item.featured || item.bottomLinks) && (
              <div className="w-[30%] border-l bg-muted/50 p-6">
                {item.featured && (
                  <>
                    <h4 className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      Featured
                    </h4>
                    <div className="mb-6 flex flex-col gap-2">
                      {item.featured.map((link, i) => (
                        <MenuSubLink
                          key={`featured-link-${i}`}
                          link={link}
                          className="bg-background p-3 hover:bg-background/80"
                        />
                      ))}
                    </div>
                  </>
                )}
                {item.bottomLinks && (
                  <div className="flex flex-col gap-2">
                    {item.bottomLinks.map((link, i) => (
                      <a
                        key={`bottom-link-${i}`}
                        href={link.url}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          navigationMenuTriggerStyle(),
          "h-fit bg-transparent font-normal text-foreground",
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MenuSubLink = ({ link, className }: MenuSubLinkProps) => {
  return (
    <a
      href={link.url}
      className={cn(
        "group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-muted md:hover:bg-muted/50",
        className,
      )}
    >
      {link.icon && (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background shadow-xs group-hover:bg-muted">
          <link.icon.component
            className="size-5"
            style={{ stroke: link.icon.color }}
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-foreground">{link.label}</h3>
        {link.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {link.description}
          </p>
        )}
      </div>
    </a>
  );
};

const MobileNavigationMenu = ({
  open,
  setOpen,
}: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="top"
        className="inset-0 z-40 h-dvh w-full bg-background pt-20 [&>button]:hidden"
        aria-describedby={undefined}
      >
        <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
          <SheetTitle>Mobile Navigation</SheetTitle>
        </div>
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="container px-4 pb-12">
            <Accordion type="single" collapsible className="w-full">
              {NAVIGATION.map((item, index) =>
                renderMobileMenuItem(item, index),
              )}
            </Accordion>
            <div className="mt-8 flex flex-col gap-4">
              {BUTTONS.map((button, index) => (
                <Button
                  key={`mobile-btn-${index}`}
                  variant={button.variant}
                  asChild
                  className="w-full"
                >
                  <a href={button.url}>{button.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.columns || item.featured) {
    return (
      <AccordionItem key={item.title} value={`nav-${index}`} className="border-b">
        <AccordionTrigger className="flex font-medium text-foreground hover:no-underline">
          <span className="flex-1 text-left">{item.title}</span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="flex flex-col gap-4 pt-2">
            {item.columns?.map((column, colIndex) => (
              <div key={`mob-col-${colIndex}`}>
                {column.title && (
                  <h4 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {column.title}
                  </h4>
                )}
                <div className="flex flex-col gap-2">
                  {column.links.map((link, i) => (
                    <MenuSubLink
                      key={`mob-link-${i}`}
                      link={link}
                      className="p-2"
                    />
                  ))}
                </div>
              </div>
            ))}
            {item.featured && (
              <div className="mt-2 rounded-xl bg-muted/50 p-4">
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Featured
                </h4>
                <div className="flex flex-col gap-2">
                  {item.featured.map((link, i) => (
                    <MenuSubLink
                      key={`mob-feat-${i}`}
                      link={link}
                      className="bg-background p-2"
                    />
                  ))}
                </div>
              </div>
            )}
            {item.bottomLinks && (
              <div className="mt-2 flex flex-col gap-3 px-2 pt-2">
                {item.bottomLinks.map((link, i) => (
                  <a
                    key={`mob-bottom-${i}`}
                    href={link.url}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="flex py-4 font-medium text-foreground transition-colors hover:text-foreground/80"
    >
      {item.title}
    </a>
  );
};

export { Navbar11 };
```
