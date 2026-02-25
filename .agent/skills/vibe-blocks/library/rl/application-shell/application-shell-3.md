# Application Shell 3

## Metadata
- **Category**: Application Shell
- **Objective**: Hybrid layout combining vertical sidebar navigation with persistent top bar containing global search, notifications, and user controls
- **Use Case**: Perfect for complex business applications, SaaS platforms, and enterprise tools requiring both deep navigation hierarchy and persistent access to search and notifications. Ideal for power users who need global features always visible.
- **Visual Style**: Dual-layer architecture with fixed vertical sidebar for primary navigation and persistent horizontal top bar for global functions. Clean separation of concerns with sidebar containing navigation tree and top bar housing search, notifications, and user profile.
- **Interactivity**: Global search input accessible from anywhere, notification dropdown with live badge counter, user profile dropdown, collapsible sidebar with accordion navigation, responsive design with mobile drawer, click-outside behavior for all overlays, persistent top bar remains visible during scrolling

## Description
A sophisticated hybrid navigation shell combining the best of both worlds: a vertical sidebar for deep navigation hierarchy and a persistent top bar for global functions. Features a fixed sidebar with accordion-style nested menus, integrated search functionality, and a persistent top bar providing always-accessible search, notifications, and user controls. The responsive design transforms the sidebar into a mobile drawer while keeping the top bar persistent across all screen sizes. Built for complex business applications requiring both comprehensive navigation and immediate access to global features.

## Source Code
```tsx
"use client";

import {
  Badge,
  Button,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Input,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiArchive, BiBarChartAlt2, BiBell, BiCog, BiFile, BiHelpCircle, BiHome, BiLayer, BiPieChartAlt2, BiSearch, BiStar } from 'lucide-react';
import { MdTrendingUp } from 'lucide-react';
import { RxChevronDown, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

const menuItems = [
  {
    title: "Home",
    url: "#",
    icon: BiHome,
  },
  {
    title: "Saved",
    url: "#",
    icon: BiStar,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: BiPieChartAlt2,
    subItems: [
      { title: "Trends", icon: MdTrendingUp, url: "#" },
      { title: "Analytics", icon: BiBarChartAlt2, url: "#" },
      { title: "Historical", icon: BiArchive, url: "#" },
    ],
  },
  {
    title: "Projects",
    url: "#",
    icon: BiLayer,
  },
  {
    title: "Documents",
    url: "#",
    icon: BiFile,
  },
];

const footerItems = [
  {
    title: "Support",
    url: "#",
    icon: BiHelpCircle,
  },
  {
    title: "Settings",
    url: "#",
    icon: BiCog,
  },
];

export const ApplicationShell3 = () => {
  return (
    <section>
      <AppSidebar>
        <div className="relative flex-1 bg-background-secondary">
          <Topbar />
          <div className="h-[calc(100vh-4.5rem)] overflow-auto">
            <div className="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
              <h1>Click and paste Page Header</h1>
            </div>
            <div className="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
              <div className="grid grid-cols-1 gap-12">
                <div className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
                  <h2>Click and paste Main Content</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppSidebar>
    </section>
  );
};

const Topbar = () => {
  const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 z-30 hidden h-auto min-h-16 w-full items-center border-b border-border-primary bg-white px-6 md:min-h-18 lg:flex lg:px-8">
        <div className="mx-auto grid size-full grid-cols-1 items-center justify-end justify-items-end gap-4 lg:grid-cols-[1fr_max-content] lg:justify-between lg:justify-items-stretch">
          <div className="hidden w-full max-w-md lg:block">
            <Input className="w-full" placeholder="Search" icon={<BiSearch className="size-6" />} />
          </div>
          <TopbarActions
            isSearchIconClicked={isSearchIconClicked}
            setIsSearchIconClicked={setIsSearchIconClicked}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      </div>

      <div className="fixed left-0 right-0 top-0 z-30 flex min-h-16 w-full items-center justify-between border-b border-border-primary bg-white px-6 lg:hidden">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <a href="#" className="flex items-center">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
        </div>
        <TopbarActions
          isSearchIconClicked={isSearchIconClicked}
          setIsSearchIconClicked={setIsSearchIconClicked}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>

      <AnimatePresence>
        {isSearchIconClicked && (
          <motion.div
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            exit="hidden"
            animate={isSearchIconClicked ? "visible" : "hidden"}
 className="fixed left-0 right-0 top-16 z-20 flex min-h-16 w-full items-center justify-center border-b border-border-primary bg-white px-6 lg:hidden"
>
            <Input
 className="h-fit w-full"
              placeholder="Search"
              icon={<BiSearch className="size-6" />}
            />
            <button onClick={() => setIsSearchIconClicked(false)}>
              <X className="ml-4 size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TopbarActions = ({
  isSearchIconClicked,
  setIsSearchIconClicked,
  isDropdownOpen,
  setIsDropdownOpen,
}: {
  isSearchIconClicked: boolean;
  setIsSearchIconClicked: (value: boolean) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
}) => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <button
        onClick={() => setIsSearchIconClicked(!isSearchIconClicked)}
 className="p-2 lg:hidden"
>
        <BiSearch className="size-6" />
      </button>
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
      <DropdownMenu onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}>
        <DropdownMenuTrigger className="flex items-center p-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
            alt="Avatar"
 className="size-10 rounded-full object-cover"
          />
          <div className="ml-3 hidden md:flex md:items-center md:gap-2">
            <p>Name Surname</p>
            <RxChevronDown
 className={clsx("shrink-0 text-text-primary transition-transform duration-300", {
                "rotate-180": isDropdownOpen,
                "rotate-0": !isDropdownOpen,
              })}
            />
          </div>
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
  );
};

const AppSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar className="py-6" closeButtonClassName="fixed top-4 right-4 text-white">
        <SidebarHeader className="hidden lg:block">
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
        </SidebarHeader>
        <SidebarContent className="mt-6">
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                {item.title === "Dashboard" ? (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="dashboard" className="border-none">
                      <AccordionTrigger className="p-2 text-base font-normal [&>svg]:size-4">
                        <span className="flex items-center gap-3">
                          <item.icon className="size-6 shrink-0" />
                          <p>{item.title}</p>
                        </span>
                      </AccordionTrigger>
                      {item.subItems?.map((subItem, subIndex) => (
                        <AccordionContent
                          key={subIndex}
 className="flex items-center p-0 pl-9 text-center text-base"
>
                          <SidebarMenuItem className="w-full">
                            <SidebarMenuButton asChild>
                              <a href={subItem.url} className="flex w-full items-center">
                                <subItem.icon className="size-6 shrink-0" />
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex w-full items-center">
                      <item.icon />
                      <span>{item.title}</span>
                      {index === 1 && (
                        <Badge variant="outline" className="ml-auto">
                          24
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="pb-6 lg:pb-0">
          <div>
            {footerItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex w-full items-center">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarFooter>
      </Sidebar>
      <main className="min-h-screen w-full pt-16 lg:pt-0">{children}</main>
    </SidebarProvider>
  );
};

ApplicationShell3.displayName = 'ApplicationShell3';
```

