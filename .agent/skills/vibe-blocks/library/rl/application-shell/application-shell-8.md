# Application Shell 8

## Metadata
- **Category**: Application Shell
- **Objective**: Hybrid layout combining global vertical sidebar with right-side secondary panel for contextual tools and properties
- **Use Case**: Perfect for complex creative tools, development environments, and professional applications requiring both global navigation and persistent right-side property panels or inspector views. Ideal for scenarios where users need to adjust properties, view contextual information, or access tool settings while working in the main content area, such as design software, code editors with inspectors, or configuration-heavy applications.
- **Visual Style**: Dual-panel architecture with global vertical sidebar on the far left for primary navigation and a secondary right-side panel for contextual tools, properties, or inspector views. Clear visual hierarchy with distinct background colors and borders separating the global sidebar, main content area, and secondary panel. The design emphasizes the relationship between global navigation and contextual tools while maintaining clear boundaries and optimizing the main content area.
- **Interactivity**: Multi-level vertical navigation in global sidebar with independent state management, contextual right-side panel with property controls and inspector views, responsive design that collapses sidebars on mobile, click-outside behavior for overlays, synchronized state management between global navigation and contextual panel, smooth transitions for collapse/expand states, panel content updates based on main content selection

## Description
An advanced hybrid navigation shell designed for complex creative tools and professional applications. Features a dual-panel architecture with a global vertical sidebar for primary navigation and a secondary right-side panel for contextual tools, property controls, or inspector views. This layout excels in applications where users need to adjust properties, view contextual information, or access tool settings while working in the main content area. The global sidebar provides persistent access to top-level sections, while the secondary right panel offers contextual tools and properties based on the selected content or tool. Built for design software, development environments, and configuration-heavy interfaces. The responsive design intelligently collapses both sidebars on mobile while maintaining state synchronization between the global navigation and contextual panel.

## Source Code
```tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
  Badge,
} from '@/components/ui';
import { BiArchive, BiBarChartAlt2, BiCog, BiDotsHorizontalRounded, BiFile, BiHelpCircle, BiHome, BiLayer, BiPieChartAlt2, BiSearch, BiStar } from 'lucide-react';
import { MdTrendingUp } from 'lucide-react';

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

export const ApplicationShell8 = () => {
  return (
    <section>
      <AppSidebar>
        <div className="bg-background-secondary">
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
        </div>
      </AppSidebar>
    </section>
  );
};

const AppSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar className="py-6">
        <SidebarHeader className="gap-4 pt-6 lg:gap-6 lg:pt-0">
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="vibecoding logo" />
          </a>
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
    </SidebarProvider>
  );
};

ApplicationShell8.displayName = 'ApplicationShell8';
```

