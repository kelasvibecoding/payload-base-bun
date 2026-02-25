# Sidebar 19

## Metadata
- **Category**: Sidebar
- **Objective**: Provide a community-focused navigation experience with real-time presence, voice channels, and member management.
- **Use Case**: Community platforms, team communication apps, and gaming or social networking dashboards.
- **Visual Style**: Triple-panel layout featuring a Left Sidebar for navigation, a Primary Content Area, and a Right Sidebar for member status. Discord-inspired aesthetic with clean typography and status indicators.
- **Interactivity**: Workspace switcher, collapsible channel categories with unread indicators, voice channel user lists, member presence (online/idle/dnd/offline), and user controls for hardware (Mic/Headphones/Settings) in the footer.

## Description
Sidebar 19 is a comprehensive community management interface. It leverages a dual-sidebar approach to separate structural navigation (channels) from social presence (members). The left sidebar uses a hierarchical structure with specialized text and voice channel items, while the right sidebar displays a categorized list of members with real-time status cues. It's designed for high-density social interaction.

## Source Code

```tsx
"use client";

import {
  Bell,
  Check,
  ChevronsUpDown,
  Hash,
  Headphones,
  Lock,
  Mic,
  MoreHorizontal,
  PencilLine,
  Pin,
  Plus,
  Settings,
  Trash2,
  Volume2,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Types
type TextChannel = {
  id: string;
  name: string;
  type: "text";
  locked: boolean;
  unread: number;
  isActive?: boolean;
};

type VoiceChannel = {
  id: string;
  name: string;
  type: "voice";
  users: string[];
};

type Channel = TextChannel | VoiceChannel;

type ChannelCategory = {
  id: string;
  name: string;
  isOpen: boolean;
  channels: Channel[];
};

type Member = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: "online" | "idle" | "dnd" | "offline";
};

type Workspace = {
  id: string;
  name: string;
  logo: string;
  plan: string;
};

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

// Data
const workspaces: Workspace[] = [
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
];

const currentUser: UserData = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
};

const channelCategories: ChannelCategory[] = [
  {
    id: "cat1",
    name: "Information",
    isOpen: true,
    channels: [
      { id: "1", name: "announcements", type: "text", locked: true, unread: 0 },
      { id: "2", name: "rules", type: "text", locked: true, unread: 0 },
      { id: "3", name: "welcome", type: "text", locked: false, unread: 0 },
    ],
  },
  {
    id: "cat2",
    name: "General",
    isOpen: true,
    channels: [
      {
        id: "4",
        name: "general",
        type: "text",
        locked: false,
        unread: 12,
        isActive: true,
      },
      { id: "5", name: "random", type: "text", locked: false, unread: 3 },
      {
        id: "6",
        name: "introductions",
        type: "text",
        locked: false,
        unread: 0,
      },
    ],
  },
  {
    id: "cat3",
    name: "Development",
    isOpen: true,
    channels: [
      { id: "7", name: "frontend", type: "text", locked: false, unread: 5 },
      { id: "8", name: "backend", type: "text", locked: false, unread: 0 },
      { id: "9", name: "devops", type: "text", locked: false, unread: 1 },
      { id: "10", name: "code-review", type: "text", locked: false, unread: 0 },
    ],
  },
  {
    id: "cat4",
    name: "Voice Channels",
    isOpen: true,
    channels: [
      {
        id: "v1",
        name: "General Voice",
        type: "voice",
        users: ["Sarah", "Mike", "Alex"],
      },
      { id: "v2", name: "Meeting Room", type: "voice", users: [] },
      { id: "v3", name: "Pair Programming", type: "voice", users: ["Emily"] },
    ],
  },
];

const members: Member[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Admin",
    status: "online",
  },
  {
    id: "2",
    name: "Mike Johnson",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Moderator",
    status: "online",
  },
  {
    id: "3",
    name: "Emily Davis",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Member",
    status: "idle",
  },
  {
    id: "4",
    name: "Alex Kim",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Member",
    status: "dnd",
  },
  {
    id: "5",
    name: "Chris Wilson",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Member",
    status: "offline",
  },
  {
    id: "6",
    name: "Jordan Lee",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Member",
    status: "offline",
  },
];

// Helper
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const statusColors: Record<Member["status"], string> = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-400",
};

// Components
const WorkspaceSwitcher = () => {
  const [selected, setSelected] = React.useState(workspaces[0]);

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
                  className="size-6 invert dark:invert-0"
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
                    className="size-4 invert dark:invert-0"
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

const ChannelItem = ({ channel }: { channel: Channel }) => {
  const isText = channel.type === "text";
  const isVoice = channel.type === "voice";

  return (
    <SidebarMenuItem className="group/item">
      <SidebarMenuButton isActive={isText && channel.isActive} className="pr-8">
        {isVoice ? (
          <Volume2 className="size-4 text-muted-foreground" />
        ) : channel.locked ? (
          <Lock className="size-4 text-muted-foreground" />
        ) : (
          <Hash className="size-4 text-muted-foreground" />
        )}
        <span
          className={cn(
            isText && channel.unread > 0 && "font-semibold text-foreground",
          )}
        >
          {channel.name}
        </span>
        {isText && channel.unread > 0 && (
          <Badge
            variant="default"
            className="ml-auto size-5 justify-center rounded-full p-0 text-[10px]"
          >
            {channel.unread}
          </Badge>
        )}
        {isVoice && channel.users.length > 0 && (
          <span className="ml-auto text-xs text-muted-foreground">
            {channel.users.length}
          </span>
        )}
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction className="opacity-0 group-hover/item:opacity-100">
            <MoreHorizontal className="size-3.5" />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DropdownMenuItem>
            <Bell className="mr-2 size-4" />
            Mute Channel
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pin className="mr-2 size-4" />
            Pin Channel
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilLine className="mr-2 size-4" />
            Edit Channel
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <Trash2 className="mr-2 size-4" />
            Delete Channel
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isVoice && channel.users.length > 0 && (
        <div className="mt-1 ml-6 space-y-1">
          {channel.users.map((userName) => (
            <div
              key={userName}
              className="flex items-center gap-2 py-0.5 text-xs text-muted-foreground"
            >
              <div className="size-4 rounded-full bg-muted" />
              <span>{userName}</span>
            </div>
          ))}
        </div>
      )}
    </SidebarMenuItem>
  );
};

const ChannelCategoryGroup = ({ category }: { category: ChannelCategory }) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarGroup className="py-0">
        <SidebarGroupLabel asChild className="group/label">
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <span className="truncate text-xs font-semibold tracking-wider uppercase">
              {category.name}
            </span>
            <Plus className="size-3.5 opacity-0 transition-opacity group-hover/label:opacity-100" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {category.channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

const MemberItem = ({
  member,
  showStatus = true,
}: {
  member: Member;
  showStatus?: boolean;
}) => (
  <button
    className={cn(
      "flex w-full items-center gap-2 rounded-md px-2 py-1.5 hover:bg-muted",
      member.status === "offline" && "opacity-50 hover:opacity-100",
    )}
  >
    <div className="relative">
      <Avatar className="size-8">
        <AvatarImage src={member.avatar} alt={member.name} />
        <AvatarFallback className="text-xs">
          {getInitials(member.name)}
        </AvatarFallback>
      </Avatar>
      {showStatus && member.status !== "offline" && (
        <span
          className={cn(
            "absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background",
            statusColors[member.status],
          )}
        />
      )}
    </div>
    <div className="flex-1 text-left">
      <p className="text-sm font-medium">{member.name}</p>
      <p className="text-xs text-muted-foreground">{member.role}</p>
    </div>
  </button>
);

const MembersList = () => {
  const online = members.filter((m) => m.status !== "offline");
  const offline = members.filter((m) => m.status === "offline");

  return (
    <div className="flex flex-col gap-4 p-2">
      <div>
        <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Online — {online.length}
        </p>
        <div className="space-y-0.5">
          {online.map((member) => (
            <MemberItem key={member.id} member={member} />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Offline — {offline.length}
        </p>
        <div className="space-y-0.5">
          {offline.map((member) => (
            <MemberItem key={member.id} member={member} showStatus={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NavUser = ({ user }: { user: UserData }) => (
  <div className="flex items-center gap-2 rounded-md bg-sidebar-accent/50 p-2">
    <Avatar className="size-8">
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
    <div className="flex-1 truncate">
      <p className="truncate text-sm font-medium">{user.name}</p>
      <p className="truncate text-xs text-muted-foreground">Online</p>
    </div>
    <TooltipProvider delayDuration={0}>
      <div className="flex gap-0.5">
        {[
          { icon: Mic, label: "Mute" },
          { icon: Headphones, label: "Deafen" },
          { icon: Settings, label: "Settings" },
        ].map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <Icon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  </div>
);

const SidebarLeft = (props: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar {...props}>
    <SidebarHeader>
      <WorkspaceSwitcher />
    </SidebarHeader>
    <SidebarContent>
      {channelCategories.map((category) => (
        <ChannelCategoryGroup key={category.id} category={category} />
      ))}
    </SidebarContent>
    <SidebarFooter>
      <NavUser user={currentUser} />
    </SidebarFooter>
  </Sidebar>
);

const SidebarRight = (props: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar
    side="right"
    collapsible="none"
    className="sticky top-0 hidden h-svh w-60 border-l lg:flex"
    {...props}
  >
    <SidebarHeader className="h-16 justify-center border-b">
      <div className="px-2">
        <span className="font-semibold">Members</span>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <MembersList />
    </SidebarContent>
  </Sidebar>
);

interface Sidebar19Props {
  className?: string;
}

const Sidebar19 = ({ className }: Sidebar19Props) => (
  <SidebarProvider className={cn(className)}>
    <SidebarLeft />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Hash className="size-5 text-muted-foreground" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">general</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
    <SidebarRight />
  </SidebarProvider>
);

export { Sidebar19 };
```
