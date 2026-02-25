# Sidebar 5

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
import {
  Badge,
  Button,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui';
import { BiArchive, BiBarChartAlt2, BiCog, BiHelpCircle, BiHome, BiStar } from 'lucide-react';
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
    subItems: [
      { title: "Trends", url: "#", icon: MdTrendingUp },
      { title: "Analytics", url: "#", icon: BiBarChartAlt2 },
      { title: "Historical", url: "#", icon: BiArchive },
    ],
  },
  {
    title: "Settings",
    subItems: [
      { title: "Support", url: "#", icon: BiHelpCircle },
      { title: "Settings", url: "#", icon: BiCog },
    ],
  },
];

export const Sidebar5 = ({ children }: { children: React.ReactNode }) => {
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
                {item.subItems ? (
                  <div className="mt-2 flex flex-col">
                    <p className="p-2 text-base font-semibold">{item.title}</p>
                    {item.subItems.map((subItem, subIndex) => (
                      <SidebarMenuButton asChild key={subIndex}>
                        <a href={subItem.url} className="flex w-full items-center">
                          <subItem.icon />
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuButton>
                    ))}
                  </div>
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
          <div className="flex w-full flex-col border border-border-primary p-4">
            <p className="mb-2 font-semibold">Short heading here</p>
            <p className="mb-3 text-sm lg:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button size="sm">Button</Button>
          </div>
        </SidebarFooter>
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
    </SidebarProvider>
  );
};

Sidebar5.displayName = 'Sidebar5';
```

