# Sidebar 2

## Metadata
- **Category**: Sidebar
- **Objective**: Condensed Icon Sidebar
- **Use Case**: Minimalist creative toolbars.
- **Visual Style**: Icon-only vertical strip.
- **Interactivity**: Hover tooltips / Menu toggle.

## Description
A structural navigation component providing consistent access to application features, tools, and user settings.

## Source Code
```tsx
import {
  Badge,
  Button,
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
} from '@/components/ui';
import { BiArchive, BiBarChartAlt2, BiCog, BiDotsHorizontalRounded, BiHelpCircle, BiHome, BiSearch, BiStar } from 'lucide-react';
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

export const Sidebar2 = ({ children }: { children: React.ReactNode }) => {
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
        <SidebarContent className="pt-4 lg:pt-6">
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
        <SidebarFooter className="flex flex-col gap-4 pb-6 lg:gap-6 lg:pb-0">
          <SidebarSeparator />
          <div className="flex w-full flex-col border border-border-primary p-4">
            <p className="mb-2 font-semibold">Short heading here</p>
            <p className="mb-3 text-sm lg:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button size="sm">Button</Button>
          </div>
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

Sidebar2.displayName = 'Sidebar2';
```

