# Navbar 10

## Metadata
- **Category**: Navigation Bar
- **Objective**: Create a comprehensive, enterprise-level mega menu navigation with multi-column layouts, featured content sections, and mobile-friendly accordion structures.
- **Use Case**: Large-scale applications, SaaS platforms, or corporate websites with deep product hierarchies, extensive resource libraries, and prominent unified CTA sections.
- **Visual Style**: Clean, modern interface combining distinct typography, subtle hover effects, left-aligned icons paired with text, and dedicated highlighted panels for featured content within the dropdowns.
- **Interactivity**: Utilizes Shadcn UI's `NavigationMenu` for hover-triggered desktop dropdowns featuring animated content heights and viewport adjustments. Employs `Sheet` and `Accordion` for a fully responsive, collapsible mobile navigation experience.

## Source Code

```tsx
"use client";
import {
  Book,
  ChevronRight,
  Code,
  Database,
  Globe,
  Layout,
  MenuIcon,
  Monitor,
  Paintbrush,
  Server,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  Users,
  X,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  forwardRef,
  Fragment,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

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
  image?: string;
}

interface MenuItem {
  title: string;
  url?: string;
  links?: MenuLink[];
  featured?: MenuLink;
  bottomLinks?: MenuLink[];
  badges?: MenuLink[];
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
      {
        label: "Analytics",
        description: "Real-time insights and reporting",
        url: "#",
        icon: { component: Globe, color: "#8b5cf6" },
      },
      {
        label: "API Gateway",
        description: "Manage and secure your APIs",
        url: "#",
        icon: { component: Server, color: "#ec4899" },
      },
      {
        label: "Machine Learning",
        description: "AI-powered data analysis",
        url: "#",
        icon: { component: Sparkles, color: "#14b8a6" },
      },
      {
        label: "Settings",
        description: "Configuration and preferences",
        url: "#",
        icon: { component: Settings, color: "#64748b" },
      },
      {
        label: "Collaboration",
        description: "Team workspace and tools",
        url: "#",
        icon: { component: Users, color: "#f97316" },
      },
    ],
    featured: {
      label: "New Release: V2.0",
      description:
        "Experience our fastest and most powerful platform update yet. Featuring enhanced security, improved performance, and an entirely redesigned user interface.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-video-1.svg",
    },
    bottomLinks: [
      {
        label: "View All Products",
        url: "#",
        icon: { component: ChevronRight, color: "#64748b" },
      },
      {
        label: "Product Roadmap",
        url: "#",
        icon: { component: ChevronRight, color: "#64748b" },
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Documentation",
        description: "Comprehensive guides and API references",
        url: "#",
        icon: { component: Book, color: "#3b82f6" },
      },
      {
        label: "SDKs & Libraries",
        description: "Official tools for multiple languages",
        url: "#",
        icon: { component: Code, color: "#10b981" },
      },
      {
        label: "CLI Tool",
        description: "Manage your projects from the terminal",
        url: "#",
        icon: { component: Terminal, color: "#f59e0b" },
      },
    ],
    bottomLinks: [
      {
        label: "GitHub Repository",
        url: "#",
        icon: { component: ChevronRight, color: "#64748b" },
      },
      {
        label: "Developer Forum",
        url: "#",
        icon: { component: ChevronRight, color: "#64748b" },
      },
    ],
  },
  {
    title: "Design",
    links: [
      {
        label: "Figma Kit",
        description: "Official components & styles",
        url: "#",
        icon: { component: Paintbrush, color: "#ec4899" },
      },
      {
        label: "Design System",
        description: "Guidelines and best practices",
        url: "#",
        icon: { component: Layout, color: "#8b5cf6" },
      },
      {
        label: "Icons",
        description: "Custom SVG icon library",
        url: "#",
        icon: { component: Monitor, color: "#14b8a6" },
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
    label: "Sign up",
    url: "#",
    variant: "default" as const,
  },
];

const MOBILE_BREAKPOINT = 1024;

interface Navbar10Props {
  className?: string;
}

const Navbar10 = ({ className }: Navbar10Props) => {
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
              <div className="hidden gap-2 md:flex">
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

interface CustomTriggerProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuTrigger> {
  href?: string;
}

const CustomTrigger = forwardRef<HTMLButtonElement, CustomTriggerProps>(
  ({ href, children, ...props }, ref) => {
    const defaultClick = props.onClick;
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      if (href) {
        e.preventDefault();
        window.location.href = href;
      } else if (defaultClick) {
        defaultClick(e);
      }
    };

    return (
      <NavigationMenuTrigger
        ref={ref}
        {...props}
        onClick={handleClick}
        className={cn(props.className, href && "cursor-pointer")}
        onPointerEnter={(e) => {
          if (href) {
            e.preventDefault();
          }
          if (props.onPointerEnter) {
            props.onPointerEnter(e);
          }
        }}
        onPointerLeave={(e) => {
          if (href) {
            e.preventDefault();
          }
          if (props.onPointerLeave) {
            props.onPointerLeave(e);
          }
        }}
      >
        {children}
      </NavigationMenuTrigger>
    );
  },
);

CustomTrigger.displayName = "CustomTrigger";

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  if (item.links) {
    if (item.featured) {
      return (
        <NavigationMenuItem
          key={`desktop-menu-item-${index}`}
          value={`${index}`}
        >
          <CustomTrigger
            href={item.url}
            className="h-fit bg-transparent font-normal text-foreground focus:!bg-transparent data-[active=true]:!bg-transparent"
          >
            {item.title}
          </CustomTrigger>
          <NavigationMenuContent className="!w-[800px] !p-0">
            <div className="flex">
              <div className="w-2/3 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {item.links.map((link, i) => (
                    <MenuSubLink key={`desktop-nav-sublink-${i}`} link={link} />
                  ))}
                </div>
              </div>
              <div className="w-1/3 bg-muted">
                <div className="flex h-full flex-col">
                  <div className="flex-1 p-6">
                    {item.featured.image && (
                      <div className="mb-4 overflow-hidden rounded-md border text-clip">
                        <img
                          src={item.featured.image}
                          alt={item.featured.label}
                          className="aspect-video w-full object-cover"
                        />
                      </div>
                    )}
                    <h4 className="mb-2 text-sm font-medium text-foreground">
                      {item.featured.label}
                    </h4>
                    {item.featured.description && (
                      <p className="mb-4 text-sm text-muted-foreground">
                        {item.featured.description}
                      </p>
                    )}
                    <Button variant="link" className="h-auto p-0" asChild>
                      <a
                        href={item.featured.url}
                        className="inline-flex items-center gap-1"
                      >
                        Explore <ChevronRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                  {item.bottomLinks && (
                    <div className="border-t p-2">
                      <div className="space-y-1">
                        {item.bottomLinks.map((link, i) => (
                          <MenuSubLink
                            key={`bottom-link-${i}`}
                            link={link}
                            className="p-2 py-3"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <CustomTrigger
          href={item.url}
          className="h-fit bg-transparent font-normal text-foreground focus:!bg-transparent data-[active=true]:!bg-transparent"
        >
          {item.title}
        </CustomTrigger>
        <NavigationMenuContent className="!w-[400px] !p-0">
          <div className="p-4">
            <div className="flex flex-col gap-2">
              {item.links.map((link, i) => (
                <MenuSubLink key={`desktop-nav-sublink-${i}`} link={link} />
              ))}
            </div>
          </div>
          {item.bottomLinks && (
            <div className="border-t bg-muted p-4">
              <div className="grid grid-cols-2 gap-4">
                {item.bottomLinks.map((link, i) => (
                  <MenuSubLink key={`bottom-link-${i}`} link={link} />
                ))}
              </div>
            </div>
          )}
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
        "group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-muted md:hover:bg-background",
        className,
      )}
    >
      <div className="flex w-full items-start gap-3">
        {link.icon && (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background group-hover:bg-muted">
            <link.icon.component
              className="size-5"
              style={{ stroke: link.icon.color }}
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-foreground">
              {link.label}
            </h3>
            {link.icon?.component === ChevronRight && (
              <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground" />
            )}
          </div>
          {link.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {link.description}
            </p>
          )}
        </div>
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
  if (item.links) {
    return (
      <AccordionItem key={item.title} value={`nav-${index}`} className="border-b">
        <AccordionTrigger className="flex font-medium text-foreground hover:no-underline">
          <span className="flex-1 text-left">{item.title}</span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="flex flex-col gap-2 pt-2">
            {item.links.map((subItem) => (
              <MenuSubLink key={subItem.label} link={subItem} />
            ))}
            {item.bottomLinks && (
              <div className="mt-4 flex flex-col gap-2 rounded-xl bg-muted p-2">
                {item.bottomLinks.map((subItem) => (
                  <MenuSubLink key={subItem.label} link={subItem} />
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

export { Navbar10 };
```
