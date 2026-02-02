# Sidebar 6

## Metadata
- **Category**: Sidebar
- **Objective**: General Sidebar
- **Use Case**: Visual Sidebar browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A structural navigation component providing consistent access to application features, tools, and user settings.

## Source Code
```tsx
import React, { useState } from 'react';
import {
  Badge,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui';
import { BiCog, BiFile, BiHelpCircle, BiHome, BiLayer, BiPieChartAlt2, BiStar } from 'lucide-react';
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

export const Sidebar6 = ({ children }: { children: React.ReactNode }) => {
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
        closeButtonClassName="fixed top-4 right-4 text-white"
>
        {isMobile || state === "expanded" ? <ExpandedView /> : <CollapsedView />}
      </Sidebar>
      <main className="min-h-screen w-full">
        <nav className="fixed left-0 right-0 top-0 flex min-h-16 items-center justify-start gap-7 bg-white px-6 lg:hidden">
          <div className="flex items-center">
            <SidebarTrigger />
          </div>
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
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
 className="relative flex items-center justify-center"
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <SidebarHeader className="hidden pt-6 lg:block lg:pt-0">
        <div className="flex items-center justify-between lg:h-10">
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
>
            <SidebarTrigger>
              <SidebarMenuItem className="-mr-2">
                <SidebarMenuButton className="border border-border-alternative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
>
                    <MdKeyboardDoubleArrowLeft className="hidden size-6 lg:block" />
                  </motion.div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarTrigger>
          </motion.div>
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-6">
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
    </>
  );
};

const CollapsedView = () => {
  return (
    <>
      <SidebarHeader className="gap-4 pt-6 lg:pt-0">
        <div className="flex items-center justify-center">
          <LogoTrigger />
        </div>
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
      <SidebarFooter className="pb-6 lg:pb-0">
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
      </SidebarFooter>
    </>
  );
};

Sidebar6.displayName = 'Sidebar6';
```

