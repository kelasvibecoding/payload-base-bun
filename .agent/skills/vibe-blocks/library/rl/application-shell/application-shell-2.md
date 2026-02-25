# Application Shell 2

## Metadata
- **Category**: Application Shell
- **Objective**: Collapsible vertical sidebar with accordion navigation, search input, and user profile footer
- **Use Case**: Ideal for dashboard applications, admin panels, and productivity tools where vertical navigation optimizes screen real estate. Best for power users managing complex workflows.
- **Visual Style**: Fixed vertical sidebar with collapsible sections, icon-based navigation with text labels, user profile section in footer with dropdown menu. Clean minimal aesthetic with subtle separators.
- **Interactivity**: Accordion-style nested navigation, collapsible menu sections, search input with icon, user profile dropdown, responsive mobile drawer with overlay

## Description
A streamlined vertical navigation shell optimized for dashboard and admin interfaces. Features accordion-style nested menus with smooth expand/collapse transitions, integrated search functionality in the sidebar header, and a user profile section in the footer with dropdown menu. Built for high-density information display with clean icon-based navigation. The responsive design transforms into a mobile drawer with overlay, maintaining full functionality across devices.

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

export const ApplicationShell2 = () => {
  return (
    <section>
      <AppSidebar>
        <div className="flex-1 bg-background-secondary">
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

ApplicationShell2.displayName = 'ApplicationShell2';
```

