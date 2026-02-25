# Application Shell 4

## Metadata
- **Category**: Application Shell
- **Objective**: Three-zone modular layout with persistent top bar, collapsible sidebar, and dedicated content region
- **Use Case**: Perfect for enterprise applications, admin dashboards, and complex SaaS platforms where clear separation between navigation and content improves usability. Ideal for apps with multiple navigation levels that need to remain accessible while users focus on content tasks.
- **Visual Style**: Three-zone architecture with persistent top bar housing search and notifications, collapsible vertical sidebar with accordion navigation, and dedicated content region with clear visual boundaries. Modular design emphasizes separation of concerns with distinct background colors and borders.
- **Interactivity**: Persistent top bar with global search and notification dropdown, collapsible sidebar with accordion-style nested menus, mobile search overlay, responsive sidebar that transforms to drawer on mobile, click-outside behavior for all overlays, smooth transitions for collapse/expand states

## Description
A sophisticated modular application shell featuring a three-zone layout architecture: persistent top bar for global functions, collapsible sidebar for navigation hierarchy, and dedicated content region. The persistent top bar provides always-accessible search and notifications, while the collapsible sidebar with accordion menus supports deep navigation structures. Built for enterprise-grade applications requiring clear separation between navigation and content areas. The responsive design maintains full functionality across devices, with the sidebar transforming into a mobile drawer while keeping the top bar persistent. Includes smooth transitions, click-outside behavior, and comprehensive dropdown menus.

## Source Code
```tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInput,
} from '@/components/ui';
import { BiArchive, BiBarChartAlt2, BiBell, BiCog, BiFile, BiHelpCircle, BiHome, BiLayer, BiPieChartAlt2, BiSearch, BiStar } from 'lucide-react';
import { MdTrendingUp } from 'lucide-react';
import { ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const menuItems = [
  { title: "Home", url: "#", icon: BiHome },
  { title: "Saved", url: "#", icon: BiStar, badge: "24" },
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
  { title: "Projects", url: "#", icon: BiLayer },
  { title: "Documents", url: "#", icon: BiFile },
];

const footerItems = [
  { title: "Support", url: "#", icon: BiHelpCircle },
  { title: "Settings", url: "#", icon: BiCog },
];

export const ApplicationShell4 = () => (
  <AppSidebar>
    <main className="flex-1 bg-background-secondary pt-16 lg:pt-18">
      <Topbar />
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
    </main>
  </AppSidebar>
);

const Topbar = () => {
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex min-h-16 w-full items-center border-b border-border-primary bg-white px-4 md:min-h-18 md:px-8">
      <div className="mx-auto grid size-full grid-cols-2 items-center justify-between gap-4 lg:grid-cols-[1fr_1.5fr_1fr]">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden" />
          <a href="#" className="justify-self-start">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="vibecoding logo"
 className="shrink-0"
            />
          </a>
        </div>
        <div className="hidden lg:block lg:w-full lg:max-w-md lg:justify-self-center">
          <SidebarInput
 className="w-full"
            placeholder="Search"
            icon={<BiSearch className="size-6" />}
          />
        </div>
        <TopbarActions
          isSearchIconClicked={isSearchIconClicked}
          setIsSearchIconClicked={setIsSearchIconClicked}
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
 className="absolute bottom-0 left-0 right-0 top-16 flex min-h-16 max-w-md items-center justify-center border-b border-border-primary bg-white px-6 lg:hidden"
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
    </header>
  );
};

const TopbarActions = ({
  isSearchIconClicked,
  setIsSearchIconClicked,
}: {
  isSearchIconClicked: boolean;
  setIsSearchIconClicked: (value: boolean) => void;
}) => {
  return (
    <div className="flex items-center gap-2 justify-self-end md:gap-4">
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
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center p-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
            alt="Avatar"
 className="size-10 rounded-full object-cover"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={0} className="mt-1.5 px-0 py-2">
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

const AppSidebar = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <Sidebar className="py-6" closeButtonClassName="fixed top-4 right-4 text-white">
      <SidebarContent className="pt-6 lg:pt-18">
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
 className="flex items-center p-2 pl-[2.75rem] text-center text-base"
>
                        <a href={subItem.url} className="flex w-full items-center gap-3">
                          <subItem.icon className="size-6 shrink-0" />
                          <span>{subItem.title}</span>
                        </a>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex w-full items-center gap-3 p-2">
                    <item.icon className="size-6 shrink-0" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <div>
          {footerItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex w-full items-center gap-3 p-2">
                  <item.icon className="size-6 shrink-0" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
      </SidebarFooter>
    </Sidebar>
    {children}
  </SidebarProvider>
);

ApplicationShell4.displayName = 'ApplicationShell4';
```

