# Application Shell 6

## Metadata
- **Category**: Application Shell
- **Objective**: Split layout with top navigation, right-side secondary panel for contextual information, and main content area
- **Use Case**: Perfect for creative applications, development tools, and complex interfaces where contextual information, property panels, or help documentation needs to be visible alongside main content. Ideal for scenarios where users need to reference information or adjust properties while working in the main view, such as design tools, code editors with sidebars, or applications with inspector panels.
- **Visual Style**: Three-panel layout with top navigation bar, spacious main content area in the center, and right-side secondary panel for contextual information or controls. Clear visual hierarchy with distinct background colors and borders separating each zone. Panel proportions favor the main content area while keeping the right panel accessible for quick reference. The right panel is optimized for forms, property inspectors, help text, or supplementary information.
- **Interactivity**: Top-level navigation with dropdown menus, right-side panel with contextual controls and information, responsive design that stacks panels vertically on mobile, click-outside behavior for dropdowns, panel content updates based on main content selection

## Description
A sophisticated split-layout application shell designed for creative tools and complex interfaces. Features a three-panel architecture with top navigation for global controls, a spacious main content area for primary work, and a right-side secondary panel for contextual information, property controls, or help documentation. The right panel provides quick access to supplementary information while keeping the main content area focused. Built for applications requiring reference materials or adjustable properties alongside the main view, such as design tools, code editors, or inspector-based interfaces. The responsive design intelligently adapts the panel layout on mobile devices while maintaining full functionality. Includes comprehensive dropdown menus in the top navigation and contextual controls within the right panel.

## Source Code
```tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  useMediaQuery,
} from '@/components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { RxChevronDown, ChevronRight, X } from 'lucide-react';
import { BiBell, BiSearch } from 'lucide-react';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
};

export type ApplicationShell6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ApplicationShell6 = (props: ApplicationShell6Props) => {
  const { logo, navLinks } = {
    ...ApplicationShell6Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 991px)");
  useEffect(() => {
    if (!isSearchIconClicked) {
      return;
    }
    const handleClickOutside = (event: PointerEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsSearchIconClicked(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isSearchIconClicked]);

  useEffect(() => {
    if (!menuRef) {
      return;
    }
    const handleClickOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isSearchIconClicked]);

  return (
    <section>
      <div className="sticky top-0 z-40 flex w-full flex-wrap items-center justify-between border-b border-border-primary bg-background-primary px-6 lg:px-8">
        <div className="flex min-h-16 items-center md:min-h-18">
          <button
 className="-ml-4 mr-4 flex size-12 flex-col items-center justify-center lg:hidden"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsSearchIconClicked(false);
            }}
>
            <motion.span
 className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
 className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
 className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="ml-auto flex flex-row items-center gap-4 lg:order-last">
          <div className="hidden w-full max-w-md lg:block">
            <Input className="w-full" placeholder="Search" icon={<BiSearch className="size-6" />} />
          </div>
          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchIconClicked(!isSearchIconClicked);
              }}
 className="p-2 lg:hidden"
>
              <BiSearch className="size-6" />
            </button>
            <AnimatePresence>
              {isSearchIconClicked && (
                <motion.div
                  ref={searchBarRef}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  exit="hidden"
                  animate={isSearchIconClicked ? "visible" : "hidden"}
 className="absolute bottom-0 left-0 right-0 top-16 mt-px flex h-16 max-w-md items-center justify-center border-b border-border-primary bg-white px-6 lg:hidden"
>
                  <Input
 className="h-fit w-full"
                    placeholder="Search"
                    icon={<BiSearch className="size-6" />}
                  />
                  <button onClick={() => setIsSearchIconClicked(!isSearchIconClicked)}>
                    <X className="ml-4 size-6" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <DropdownMenu>
              <DropdownMenuTrigger className="relative">
                <div className="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-black outline outline-[3px] outline-offset-0 outline-white" />
                <BiBell className="size-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-[19rem] px-0" align="end" sideOffset={0}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-2">
                    <DropdownMenuLabel className="p-0">Notifications</DropdownMenuLabel>
                    <a href="#">Mark as read</a>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="h-full max-h-[14rem] overflow-auto px-2 py-1">
                    <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                      <div className="flex size-full flex-col items-start justify-start">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg"
                          alt="Avatar"
 className="size-6"
                        />
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="mt-2 text-sm">11 Jan 2022</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                      <div className="flex size-full flex-col items-start justify-start">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg"
                          alt="Avatar"
 className="size-6"
                        />
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="mt-2 text-sm">11 Jan 2022</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <div className="flex w-full items-end justify-end px-4 py-2">
                  <Button variant="link" size="link" iconRight={<ChevronRight />} asChild>
                    <a href="#">View All</a>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center p-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Avatar"
 className="size-10 rounded-full object-cover"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={0}
 className="mt-1.5 min-w-32 px-0 py-2 md:min-w-48"
>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <a href="#">My Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#">Profile Settings</a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="mx-4" />
                  <DropdownMenuItem>
                    <a href="#">Log Out</a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <motion.div
          ref={menuRef}
          variants={{
            open: {
              height: "var(--height-open, auto)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
 className="w-full overflow-hidden lg:order-2 lg:ml-6 lg:w-auto lg:grow lg:[--height-closed:auto] lg:[--height-open:auto]"
>
          <div className="pb-8 pt-4 lg:flex lg:items-center lg:py-0">
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length> 0 ? (
                <SubMenu key={index} navLink={navLink} isMobile={isMobile} />
              ) : (
                <a key={index} href={navLink.url} className="block py-3 lg:px-4 lg:py-2">
                  {navLink.title}
                </a>
              ),
            )}
          </div>
        </motion.div>
      </div>
      <main className="bg-background-secondary">
        <div className="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
          <span>Click and paste Page Header</span>
        </div>
        <div className="container grid grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[1fr_0.5fr] md:py-10 lg:px-0 lg:py-12">
          <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
            Click and paste Main Content
          </span>
          <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
            Click and paste Secondary Content
          </span>
        </div>
      </main>
    </section>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
>
      <button
 className="flex w-full items-center justify-between gap-2 py-3 text-left lg:flex-none lg:justify-start lg:px-4 lg:py-2"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
>
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
>
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
 className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
>
            {navLink.subMenuLinks?.map((navLink, index) => (
              <a key={index} href={navLink.url} className="block px-4 py-2">
                {navLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const ApplicationShell6Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subMenuLinks: [
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

ApplicationShell6.displayName = 'ApplicationShell6';
```

