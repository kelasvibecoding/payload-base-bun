# Sidebar 3

## Metadata
- **Category**: Sidebar
- **Objective**: Search-Integrated Sidebar
- **Use Case**: Resource-heavy apps.
- **Visual Style**: Search top + Categorized links.
- **Interactivity**: Real-time search input.

## Description
A structural navigation component providing consistent access to application features, tools, and user settings.

## Source Code
```tsx
import React, { useState } from 'react';
import {
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui';
import { BiCog, BiDotsHorizontalRounded, BiFile, BiHelpCircle, BiHome, BiLayer, BiPieChartAlt2, BiSearch, BiStar } from 'lucide-react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const menuItems = [
  { title: "Home", url: "#", icon: BiHome },
  { title: "Saved", url: "#", icon: BiStar },
  { title: "Dashboard", url: "#", icon: BiPieChartAlt2 },
  { title: "Projects", url: "#", icon: BiLayer },
  { title: "Documents", url: "#", icon: BiFile },
];

const footerItems = [
  {
    title: "Support",
    url: "#",
    icon: BiHelpCircle,
    tooltip: "Support",
  },
  {
    title: "Settings",
    url: "#",
    icon: BiCog,
    tooltip: "Settings",
  },
];

export const Sidebar3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={{ "--sidebar-width-icon": "4.5rem" } as React.CSSProperties}
>
      <SidebarWrapper>{children}</SidebarWrapper>
    </SidebarProvider>
  );
};

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { state, isMobile } = useSidebar();
  return (
    <>
      <Sidebar
 className="py-6"
        collapsible={isMobile ? "offcanvas" : state === "collapsed" ? "icon" : "offcanvas"}
>
        {isMobile || state === "expanded" ? <ExpandedView /> : <CollapsedView />}
      </Sidebar>
      <main className="min-h-screen w-full">
        <nav className="fixed inset-x-0 top-0 z-10 flex min-h-16 items-center justify-between border-b border-border-primary bg-white px-6 lg:hidden">
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
          <div className="flex items-center">
            <SidebarTrigger />
          </div>
        </nav>
        <div className="w-full pt-16 lg:pt-0">{children}</div>
      </main>
    </>
  );
};

const LogoTrigger = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
 className="relative flex size-10 items-center justify-center"
>
      <SidebarTrigger className="flex size-10 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {isHovered ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
 className="absolute"
>
              <SidebarMenuItem>
                <SidebarMenuButton className="border border-border-alternative">
                  <MdKeyboardDoubleArrowRight className="size-5" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
 className="absolute self-start"
>
              <img
 className="size-8"
                src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg"
                alt="vibecoding logo"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </SidebarTrigger>
    </motion.div>
  );
};

const ExpandedView = () => {
  return (
    <>
      <SidebarHeader className="flex flex-col gap-4 pt-6 lg:gap-6 lg:pt-0">
        <div className="flex items-center justify-between lg:h-10">
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
          <SidebarTrigger>
            <SidebarMenuItem className="-mr-2">
              <SidebarMenuButton className="border border-border-alternative">
                <MdKeyboardDoubleArrowLeft className="hidden size-5 lg:block" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarTrigger>
        </div>
        <SidebarInput
          placeholder="Search"
          icon={<BiSearch className="size-6" />}
          iconPosition="left"
 className="pl-12"
        />
      </SidebarHeader>
      <SidebarContent className="mt-4 lg:mt-6">
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} className="flex w-full items-center justify-between">
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
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-4 pb-6 lg:gap-6 lg:pb-0">
        <SidebarSeparator />
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
        <SidebarSeparator />
        <div className="flex items-center justify-between">
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                alt="Avatar"
 className="size-10 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Name Surname</p>
              <p className="text-sm">hello@vibecoding.io</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsHorizontalRounded className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50" align="end" sideOffset={0}>
              <DropdownMenuLabel>My Profile</DropdownMenuLabel>
              <DropdownMenuLabel>Profile Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </>
  );
};

const CollapsedView = () => {
  return (
    <>
      <SidebarHeader className="flex flex-col gap-6 pt-6 lg:pt-0">
        <div className="flex items-center justify-center">
          <LogoTrigger />
        </div>
        <SidebarTrigger>
          <SidebarMenuItem className="h-[44px]">
            <SidebarMenuButton tooltip="Search">
              <BiSearch className="size-6" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent className="mt-6">
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} className="flex w-full items-center justify-between">
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex w-full items-center">
                  <item.icon />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-4 pb-6 lg:gap-6 lg:pb-0">
        <SidebarSeparator />
        <div>
          {footerItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild tooltip={item.tooltip}>
                <a href={item.url} className="flex w-full items-center">
                  <item.icon />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
        <SidebarSeparator />
        <SidebarMenuButton size="lg" tooltip="Profile">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
            alt="Avatar"
 className="size-10 rounded-full object-cover"
          />
        </SidebarMenuButton>
      </SidebarFooter>
    </>
  );
};

Sidebar3.displayName = 'Sidebar3';
```

