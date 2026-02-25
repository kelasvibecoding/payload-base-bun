# Sidebar 17

## Metadata
- **Category**: Sidebar
- **Objective**: Tabbed sidebar with contextual navigation modes.
- **Use Case**: IDEs, complex dashboards, or creative tools where users need to switch between different functional navigation contexts (e.g., File Explorer, Git/Version Control, Global Settings) within the same sidebar space.
- **Visual Style**: Compact and focused. Utilizes a top tab switcher to toggle between different sets of navigation links.
- **Interactivity**: Tab triggers at the top of the sidebar switch the entire content of the `SidebarContent` area, allowing for quick transitions between deeply different navigation trees.

## Description
A highly efficient organizational pattern for tools that require distinct navigation contexts. By using tabs, it avoids long, scrolling lists and maintains a clean interface while keeping essential tools just one click away.

## Source Code
```tsx
"use client";

import {
  Check,
  ChevronsUpDown,
  FileText,
  FolderTree,
  GitBranch,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Base nav item - used by simple sidebars
type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
  // Optional children for submenus (Sidebar3+)
  children?: NavItem[];
};

// Nav group with optional collapsible state
type NavGroup = {
  title: string;
  items: NavItem[];
  // Optional: default collapsed state (Sidebar2+)
  defaultOpen?: boolean;
};

// User data for footer (Sidebar6+)
type UserData = {
  name: string;
  email: string;
  avatar: string;
};

// Workspace data for switcher (Sidebar7+)
type Workspace = {
  id: string;
  name: string;
  logo: string;
  plan: string;
};

// Complete sidebar data structure
type SidebarData = {
  // Logo/branding (all sidebars)
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  // Main navigation groups (all sidebars)
  navGroups: NavGroup[];
  // Footer navigation group (all sidebars)
  footerGroup: NavGroup;
  // User data for user footer (Sidebar6+)
  user?: UserData;
  // Workspaces for switcher (Sidebar7+)
  workspaces?: Workspace[];
  // Currently active workspace (Sidebar7+)
  activeWorkspace?: string;
};

// Shared sidebar data - works with all sidebar variations
const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Shadcnblocks",
    title: "Shadcnblocks",
    description: "Build your app",
  },
  navGroups: [],
  footerGroup: {
    title: "Support",
    items: [],
  },
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  workspaces: [
    {
      id: "1",
      name: "Shadcnblocks",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Enterprise",
    },
    {
      id: "2",
      name: "Shadcn Templates",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Startup",
    },
    {
      id: "3",
      name: "Shadcn Components",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Free",
    },
  ],
  activeWorkspace: "1",
};

// Helper to get active workspace
const getActiveWorkspace = (data: SidebarData): Workspace | undefined => {
  return data.workspaces?.find((w) => w.id === data.activeWorkspace);
};

// Tab-specific navigation content
const filesNavItems: NavItem[] = [
  { label: "src", icon: FolderTree, href: "#" },
  { label: "components", icon: FolderTree, href: "#" },
  { label: "pages", icon: FolderTree, href: "#" },
  { label: "lib", icon: FolderTree, href: "#" },
  { label: "hooks", icon: FolderTree, href: "#" },
  { label: "package.json", icon: FileText, href: "#" },
  { label: "tsconfig.json", icon: FileText, href: "#" },
  { label: "README.md", icon: FileText, href: "#", isActive: true },
  { label: "tailwind.config.ts", icon: FileText, href: "#" },
  { label: "next.config.js", icon: FileText, href: "#" },
];

const gitNavItems: NavItem[] = [
  { label: "main", icon: GitBranch, href: "#", isActive: true },
  { label: "develop", icon: GitBranch, href: "#" },
  { label: "feature/sidebar", icon: GitBranch, href: "#" },
  { label: "feature/auth", icon: GitBranch, href: "#" },
  { label: "feature/dashboard", icon: GitBranch, href: "#" },
  { label: "fix/bug-123", icon: GitBranch, href: "#" },
  { label: "fix/styling-issues", icon: GitBranch, href: "#" },
  { label: "release/v1.0.0", icon: GitBranch, href: "#" },
];

const settingsNavItems: NavItem[] = [
  { label: "General", icon: Settings, href: "#", isActive: true },
  { label: "Appearance", icon: Settings, href: "#" },
  { label: "Editor", icon: Settings, href: "#" },
  { label: "Keybindings", icon: Settings, href: "#" },
  { label: "Extensions", icon: Settings, href: "#" },
  { label: "Workspaces", icon: Settings, href: "#" },
  { label: "Privacy", icon: Settings, href: "#" },
  { label: "Updates", icon: Settings, href: "#" },
];

const WorkspaceSwitcher = ({
  workspaces,
  activeWorkspace,
}: {
  workspaces: Workspace[];
  activeWorkspace: Workspace;
}) => {
  const [selected, setSelected] = React.useState(activeWorkspace);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                <img
                  src={selected.logo}
                  alt={selected.name}
                  className="size-6 text-primary-foreground invert dark:invert-0"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{selected.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {selected.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Workspaces
            </DropdownMenuLabel>
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onClick={() => setSelected(workspace)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm bg-primary">
                  <img
                    src={workspace.logo}
                    alt={workspace.name}
                    className="size-4 text-primary-foreground invert dark:invert-0"
                  />
                </div>
                <span>{workspace.name}</span>
                {workspace.id === selected.id && (
                  <Check className="ml-auto size-4" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const NavList = ({ items, label }: { items: NavItem[]; label: string }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <a href={item.href}>
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const NavUser = ({ user }: { user: UserData }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const activeWorkspace = getActiveWorkspace(sidebarData);
  const [activeTab, setActiveTab] = React.useState("files");

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {sidebarData.workspaces && activeWorkspace && (
          <WorkspaceSwitcher
            workspaces={sidebarData.workspaces}
            activeWorkspace={activeWorkspace}
          />
        )}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="files" className="flex-1">
              <FolderTree className="size-4" />
            </TabsTrigger>
            <TabsTrigger value="git" className="flex-1">
              <GitBranch className="size-4" />
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">
              <Settings className="size-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </SidebarHeader>
      <SidebarContent>
        {activeTab === "files" && (
          <NavList items={filesNavItems} label="Explorer" />
        )}
        {activeTab === "git" && (
          <NavList items={gitNavItems} label="Branches" />
        )}
        {activeTab === "settings" && (
          <NavList items={settingsNavItems} label="Settings" />
        )}
      </SidebarContent>
      <SidebarFooter>
        {sidebarData.user && <NavUser user={sidebarData.user} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

interface Sidebar17Props {
  className?: string;
}

const Sidebar17 = ({ className }: Sidebar17Props) => {
  return (
    <SidebarProvider className={cn(className)}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Overview</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export { Sidebar17 };
```
