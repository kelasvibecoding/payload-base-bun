# Application Shell 6

## Metadata
- **Category**: Application Shell
- **Objective**: Multi-module sidebar with rail navigation
- **Use Case**: Applications with distinct modules requiring separate navigation contexts
- **Visual Style**: Dual-sidebar layout with icon rail and module-specific panels
- **Interactivity**: Icon rail for module switching, collapsible panels, and mobile drawer navigation

## Description
An advanced application shell featuring a dual-sidebar layout with an icon rail for module navigation and collapsible panels for each module's specific navigation. Includes smooth transitions and mobile-responsive design.

## Source Code
```tsx
"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Calendar,
  Clapperboard,
  FileText,
  Handshake,
  Home,
  Images,
  Inbox,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Receipt,
  Settings,
  Wallet,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { LogoImage, LogoText } from "@/components/logo";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

type ModuleId =
  | "overview"
  | "sales"
  | "production"
  | "deliverables"
  | "finance";

type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  badge?: string;
  active?: boolean;
};

type NavSection = {
  title?: string;
  items: NavItem[];
};

type NavModule = {
  id: ModuleId;
  label: string;
  icon: NavItem["icon"];
  sections: NavSection[];
};

const navModules: NavModule[] = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard,
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Home", icon: Home, href: "#", active: true },
          { label: "Dashboard", icon: Activity, href: "#" },
          { label: "Inbox", icon: Inbox, href: "#", badge: "3" },
        ],
      },
      {
        title: "Tasks",
        items: [
          { label: "My Tasks", icon: ListTodo, href: "#", badge: "5" },
          { label: "Calendar", icon: Calendar, href: "#" },
        ],
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    icon: Handshake,
    sections: [
      {
        title: "Pipeline",
        items: [
          { label: "Lead Inbox", icon: Inbox, href: "#", active: true },
          { label: "Quotes", icon: FileText, href: "#" },
          { label: "Bookings", icon: Calendar, href: "#" },
        ],
      },
      {
        title: "Reports",
        items: [{ label: "Sales Dashboard", icon: Activity, href: "#" }],
      },
    ],
  },
  {
    id: "production",
    label: "Production",
    icon: Clapperboard,
    sections: [
      {
        title: "Pipeline",
        items: [
          { label: "Shoots Board", icon: Kanban, href: "#", active: true },
          { label: "Shot Lists", icon: ListTodo, href: "#" },
        ],
      },
      {
        title: "Crew",
        items: [{ label: "Assignments", icon: Inbox, href: "#" }],
      },
    ],
  },
  {
    id: "deliverables",
    label: "Deliverables",
    icon: Images,
    sections: [
      {
        title: "Galleries",
        items: [
          { label: "All Galleries", icon: Images, href: "#", active: true },
          { label: "Approvals", icon: Inbox, href: "#", badge: "2" },
        ],
      },
      {
        title: "Exports",
        items: [{ label: "Download Center", icon: FileText, href: "#" }],
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    icon: Wallet,
    sections: [
      {
        title: "Billing",
        items: [
          { label: "Invoices", icon: Receipt, href: "#", active: true },
          { label: "Payments", icon: Wallet, href: "#" },
        ],
      },
      {
        title: "Reports",
        items: [{ label: "P&L", icon: Activity, href: "#" }],
      },
    ],
  },
];

const utilities: NavItem[] = [{ label: "Settings", icon: Settings, href: "#" }];

interface ModulePanelProps {
  className?: string;
  module: NavModule;
}

function ModulePanel({ className, module }: ModulePanelProps) {
  return (
    <div className={cn("space-y-4 px-4 py-3 text-sm", className)}>
      {module.sections.map((section, index) => (
        <div className="space-y-2" key={section.title ?? index}>
          {section.title && (
            <SidebarGroupLabel className="mb-1 text-xs font-medium tracking-wide text-muted-foreground">
              {section.title}
            </SidebarGroupLabel>
          )}
          <SidebarMenu>
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem
                  key={item.label}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <SidebarMenuButton
                    asChild
                    isActive={item.active}
                    className="px-2"
                  >
                    <a href={item.href}>
                      <Icon className="size-4" />
                      {item.badge && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      ))}

      <div className="border-t pt-3">
        <SidebarGroupLabel className="mb-2 text-xs font-medium tracking-wide text-muted-foreground">
          Studio
        </SidebarGroupLabel>
        <SidebarMenu className="text-sm">
          {utilities.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  className="gap-2.5 px-2 text-muted-foreground hover:text-foreground"
                >
                  <a href={item.href}>
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </div>
    </div>
  );
}

interface AppSidebarProps extends Omit<
  React.ComponentProps<typeof Sidebar>,
  "className"
> {
  className?: string;
  activeKey: ModuleId;
  onNavChange: (key: ModuleId) => void;
}

export function AppSidebar({
  className,
  activeKey,
  onNavChange,
  ...props
}: AppSidebarProps) {
  const { state, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";
  const showFooter = isCollapsed || isMobile;

  const activeModule =
    navModules.find((module) => module.id === activeKey) ?? navModules[0];
  const activeNavLabel = activeModule.label;

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        "overflow-hidden *:data-[sidebar=sidebar]:flex-row",
        className,
      )}
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader className="h-14 border-b">
          <SidebarMenu className="my-auto">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <LogoImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                      alt="Shadcnblocks"
                      className="h-8 w-8 rounded-sm bg-muted p-1"
                    />
                  </div>
                  <LogoText>Shadcnblocks</LogoText>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {" "}
                <SidebarMenuItem>
                  <motion.div
                    key={isCollapsed ? "h-collapsed" : "h-expanded"}
                    className={cn(
                      isCollapsed
                        ? "hidden items-center justify-center sm:flex"
                        : "hidden",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <SidebarTrigger />
                  </motion.div>
                </SidebarMenuItem>
                {navModules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <SidebarMenuItem key={module.id}>
                      <SidebarMenuButton
                        tooltip={{
                          children: module.label,
                          hidden: isMobile,
                        }}
                        onClick={() => {
                          onNavChange(module.id);
                          setOpen(true);
                        }}
                        isActive={activeKey === module.id}
                        aria-label={module.label}
                        className="px-2.5 md:px-2"
                      >
                        <Icon className="size-4" />
                        <span>{module.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className={cn(showFooter ? "flex" : "hidden")}>
          <SidebarGroup className="p-0">
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {utilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        tooltip={{
                          children: item.label,
                          hidden: isMobile,
                        }}
                        className="px-2.5 md:px-2"
                        aria-label={item.label}
                      >
                        <a href={item.href}>
                          <Icon className="size-4" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>{" "}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>

      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="h-14 gap-3.5 border-b px-4">
          <div className="my-auto flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeNavLabel}
            </div>
            <div className="hidden sm:block">
              <SidebarTrigger />
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <ModulePanel module={activeModule} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}

interface ApplicationShell6Props {
  className?: string;
}

export function ApplicationShell6({ className }: ApplicationShell6Props) {
  const [activeKey, setActiveKey] = React.useState<ModuleId>(navModules[0].id);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = React.useState(false);

  const activeModule =
    navModules.find((module) => module.id === activeKey) ?? navModules[0];
  const activeNavLabel = activeModule.label;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
      className={cn(className)}
    >
      <div className="hidden md:block">
        <AppSidebar activeKey={activeKey} onNavChange={setActiveKey} />
      </div>

      <SidebarInset className="pb-20 md:pb-0">
        <div className="flex flex-1 flex-col gap-4">
          <div className="sticky top-0 z-40 flex h-14 items-center border-b bg-background px-4 md:hidden">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="text-base font-semibold text-foreground">
              {activeNavLabel}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </div>
      </SidebarInset>

      <Drawer
        open={isMobilePanelOpen}
        onOpenChange={setIsMobilePanelOpen}
        dismissible
      >
        <DrawerContent className="md:hidden">
          <DrawerHeader>
            <DrawerTitle>{activeNavLabel}</DrawerTitle>
          </DrawerHeader>
          <div className="pb-6">
            <ModulePanel module={activeModule} />
          </div>
        </DrawerContent>
      </Drawer>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-5">
          {navModules.map((module) => {
            const Icon = module.icon;
            const isActive = module.id === activeKey;
            return (
              <button
                key={module.id}
                type="button"
                onClick={() => {
                  setActiveKey(module.id);
                  setIsMobilePanelOpen(true);
                }}
                className={`flex flex-col items-center gap-1 py-2 text-xs ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={module.label}
              >
                <Icon className="h-5 w-5" />
                <span>{module.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </SidebarProvider>
  );
}