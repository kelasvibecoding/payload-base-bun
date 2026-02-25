# Application Shell 12

## Metadata
- **Category**: Application Shell
- **Objective**: Floating modular layout with sticky top bar and collapsible right sidebar creating clearly defined floating navigation regions with right-side focus
- **Use Case**: Perfect for modern SaaS applications, creative tools, and productivity platforms seeking a contemporary floating interface aesthetic with right-side navigation focus. Ideal for applications where clearly defined, floating navigation regions improve visual hierarchy and user focus, particularly when right-side controls are more intuitive. Best for scenarios requiring sticky navigation behavior with modern, clean visual styling that emphasizes content separation and right-side contextual tools.
- **Visual Style**: Modern floating modular design with sticky top bar that remains visible during scrolling and a collapsible right sidebar with clear visual boundaries. Features distinct background colors, subtle shadows, and borders to create floating appearance. Right sidebar focuses on contextual tools, properties, or controls while sticky top bar houses global controls. Clean, contemporary aesthetic with emphasis on content separation and visual hierarchy, optimized for right-hand interaction patterns.
- **Interactivity**: Sticky top bar behavior that remains fixed during vertical scrolling, collapsible right sidebar with smooth slide animations, modern hover states and transitions, responsive design that adapts sidebar for mobile, click-outside behavior for dropdowns, scroll-aware sticky behavior, and smooth transitions between collapsed/expanded states, with right-hand contextual focus for property controls and tool access

## Description
A contemporary floating modular application shell featuring sticky top bar behavior and a collapsible right sidebar with clearly defined floating navigation regions and right-side focus. The sticky top bar remains visible during scrolling, providing persistent access to global controls and navigation, while the floating right sidebar offers clean, modern navigation with smooth collapse/expand animations. Built for modern SaaS applications and creative tools seeking a clean, floating interface aesthetic with right-side contextual tools. The design emphasizes visual hierarchy through distinct background colors, subtle shadows, and clear boundaries between navigation regions, optimized for right-hand interaction patterns. Responsive design intelligently adapts the sidebar for mobile devices while maintaining sticky behavior on the top bar. Includes smooth transitions, modern hover states, and scroll-aware behaviors that enhance the user experience.

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

export const ApplicationShell12 = () => (
  <AppSidebar>
    <main className="flex-1 bg-background-secondary pt-16 lg:pt-18">
      <Topbar />
      <div className="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
        <span>Click and paste Page Header</span>
      </div>
      <div className="container grid grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[1fr_0.5fr] md:py-10 lg:px-8 lg:py-12">
        <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
          Click and paste Main Content
        </span>
        <span className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] text-center text-black/50">
          Click and paste Secondary Content
        </span>
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

ApplicationShell12.displayName = 'ApplicationShell12';
```

