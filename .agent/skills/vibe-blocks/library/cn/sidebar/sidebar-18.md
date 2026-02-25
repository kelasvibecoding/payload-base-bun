# Sidebar 18

## Metadata
- **Category**: Sidebar
- **Objective**: Community/Communication channel-based sidebar.
- **Use Case**: Discord clones, Slack-like workspaces, or community platforms where navigation revolves around text channels, voice rooms, and direct messaging with user status indicators.
- **Visual Style**: High density with clear status visibility. Groups items into "Text Channels", "Voice Channels", and "Direct Messages".
- **Interactivity**: Navigation between channels, user status badges (online/idle/offline), quick-access tool buttons for mic/headphones/settings in the user footer, and unread notification counts.

## Description
A social-first navigation pattern that prioritizes real-time presence and communication channels. It provides a familiar layout for collaborative environments, including integrated user controls for audio devices.

## Source Code
```tsx
"use client";

import {
  Check,
  ChevronsUpDown,
  Hash,
  Headphones,
  LogOut,
  Mic,
  Plus,
  Settings,
  User,
  Users,
  Volume2,
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
import { Button } from "@/components/ui/button";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Nav group with optional collapsible state
type NavGroup = {
  title: string;
  items: Array<{
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href: string;
    isActive?: boolean;
    children?: Array<{
      label: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      href: string;
      isActive?: boolean;
    }>;
  }>;
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

// Channel-style navigation data
const channels = [
  { id: "1", name: "general", type: "text", unread: 3 },
  { id: "2", name: "announcements", type: "text", unread: 0 },
  { id: "3", name: "random", type: "text", unread: 12 },
  { id: "4", name: "help", type: "text", unread: 0 },
  { id: "5", name: "feedback", type: "text", unread: 1 },
];

const voiceChannels = [
  { id: "v1", name: "General Voice", type: "voice", users: 3 },
  { id: "v2", name: "Meeting Room", type: "voice", users: 0 },
  { id: "v3", name: "Music", type: "voice", users: 1 },
];

const directMessages = [
  {
    id: "dm1",
    name: "Sarah Chen",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    status: "online",
    unread: 2,
  },
  {
    id: "dm2",
    name: "Mike Johnson",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    status: "idle",
    unread: 0,
  },
  {
    id: "dm3",
    name: "Emily Davis",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    status: "offline",
    unread: 0,
  },
  {
    id: "dm4",
    name: "Alex Kim",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    status: "online",
    unread: 5,
  },
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

const NavUser = ({ user }: { user: UserData }) => {
  return (
    <div className="flex items-center gap-2 rounded-md bg-sidebar-accent/50 p-2">
      <Avatar className="size-8">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 truncate">
        <p className="truncate text-sm font-medium">{user.name}</p>
        <p className="truncate text-xs text-muted-foreground">Online</p>
      </div>
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" className="size-8">
          <Mic className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-8">
          <Headphones className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <Settings className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const activeWorkspace = getActiveWorkspace(sidebarData);

  return (
    <Sidebar {...props}>
      {/* Top Section - Workspace */}
      <SidebarHeader>
        {sidebarData.workspaces && activeWorkspace && (
          <WorkspaceSwitcher
            workspaces={sidebarData.workspaces}
            activeWorkspace={activeWorkspace}
          />
        )}
      </SidebarHeader>

      {/* Middle Section - Scrollable channels */}
      <SidebarContent>
        {/* Text Channels */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <span>Text Channels</span>
            <Button variant="ghost" size="icon" className="size-5">
              <Plus className="size-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton isActive={channel.id === "1"}>
                    <Hash className="size-4" />
                    <span>{channel.name}</span>
                    {channel.unread > 0 && (
                      <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {channel.unread}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Voice Channels */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <span>Voice Channels</span>
            <Button variant="ghost" size="icon" className="size-5">
              <Plus className="size-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {voiceChannels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton>
                    <Volume2 className="size-4" />
                    <span>{channel.name}</span>
                    {channel.users > 0 && (
                      <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="size-3" />
                        {channel.users}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Direct Messages */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <span>Direct Messages</span>
            <Button variant="ghost" size="icon" className="size-5">
              <Plus className="size-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {directMessages.map((dm) => (
                <SidebarMenuItem key={dm.id}>
                  <SidebarMenuButton>
                    <div className="relative">
                      <Avatar className="size-6">
                        <AvatarImage src={dm.avatar} alt={dm.name} />
                        <AvatarFallback className="text-[10px]">
                          {dm.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          "absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-sidebar",
                          dm.status === "online" && "bg-green-500",
                          dm.status === "idle" && "bg-yellow-500",
                          dm.status === "offline" && "bg-gray-400",
                        )}
                      />
                    </div>
                    <span>{dm.name}</span>
                    {dm.unread > 0 && (
                      <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {dm.unread}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom Section - User controls (always visible) */}
      <SidebarFooter className="border-t">
        {sidebarData.user && <NavUser user={sidebarData.user} />}
      </SidebarFooter>
    </Sidebar>
  );
};

interface Sidebar18Props {
  className?: string;
}

const Sidebar18 = ({ className }: Sidebar18Props) => {
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

export { Sidebar18 };
```
