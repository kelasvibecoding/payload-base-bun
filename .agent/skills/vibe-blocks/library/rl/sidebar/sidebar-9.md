# Sidebar 9

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

export const Sidebar9 = ({ children }: { children: React.ReactNode }) => {
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
        <nav className="fixed left-0 right-0 top-0 flex min-h-16 items-center justify-start bg-white px-6 lg:hidden">
          <SidebarTrigger />
        </nav>
        <div className="w-full pt-16 lg:pt-0">{children}</div>
      </main>
    </>
  );
};

const ExpandedView = () => {
  return (
    <>
      <SidebarHeader className="hidden pt-6 lg:block lg:pt-0">
        <div className="flex items-center justify-between">
          <div />
          <SidebarTrigger>
            <SidebarMenuItem className="-mr-2">
              <SidebarMenuButton className="size-10 border border-border-alternative">
                <MdKeyboardDoubleArrowLeft className="hidden size-6 lg:block" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-6 lg:mt-2">
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
      <SidebarHeader className="pt-6 lg:pt-0">
        <SidebarTrigger className="flex items-center justify-center">
          <SidebarMenuItem>
            <SidebarMenuButton className="size-10 border border-border-alternative">
              <MdKeyboardDoubleArrowRight className="size-6 lg:block" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent className="mt-6 lg:mt-2">
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
 className="flex size-10 items-center justify-center"
                asChild
                tooltip={item.title}
>
                <a href={item.url}>
                  <item.icon className="size-5" />
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
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
      </SidebarFooter>
    </>
  );
};

Sidebar9.displayName = 'Sidebar9';
```

