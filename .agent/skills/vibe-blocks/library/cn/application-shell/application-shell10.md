# Application Shell 10

## Metadata
- **Category**: Application Shell
- **Objective**: Help desk/ticketing system layout with inbox management
- **Use Case**: Customer support and ticketing applications
- **Visual Style**: Three-panel layout with navigation, ticket list, and detailed view
- **Interactivity**: Inbox management, ticket selection, search/command palette, and AI-powered inbox assistant

## Description
A comprehensive help desk application shell featuring a three-panel layout for ticketing systems. Includes navigation sidebar, ticket list panel, detailed conversation view, and an AI-powered inbox assistant panel. Features command palette search, mobile-responsive design with drawers, and real-time ticket status management.

## Source Code
```tsx
"use client";

import {
  Archive,
  ArrowLeft,
  Bug,
  ChevronDown,
  Clock,
  CommandIcon,
  File,
  Inbox,
  Lightbulb,
  MailOpen,
  MessageSquare,
  MoreHorizontal,
  PanelRight,
  Plus,
  Search,
  Send,
  Sparkles,
  Trash2,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { LogoImage } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";

type NavItemId =
  | "inbox"
  | "unassigned"
  | "assigned"
  | "drafts"
  | "archived"
  | "spam";

type BucketId = "support" | "bugs" | "features" | "internal";

type TicketStatus = "active" | "pending" | "closed";

type NavItem = {
  id: NavItemId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count?: number;
};

type Bucket = {
  id: BucketId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role?: string;
};

type Customer = {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  avatar: string;
  isHighValue: boolean;
};

type Message = {
  id: string;
  sender: User | Customer;
  content: string;
  timestamp: string;
  date: string;
  isStaff: boolean;
};

type Ticket = {
  id: string;
  subject: string;
  preview: string;
  timestamp: string;
  read: boolean;
  customer: Customer;
  assignee?: User;
  status: TicketStatus;
  messages: Message[];
  respondingUser?: User;
};

type PreviousConversation = {
  id: string;
  subject: string;
  timestamp: string;
};

const navItems: NavItem[] = [
  { id: "inbox", label: "Inbox", icon: Inbox, count: 6 },
  { id: "unassigned", label: "Unassigned", icon: MailOpen, count: 10 },
  { id: "assigned", label: "Assigned", icon: UserCheck, count: 3 },
  { id: "drafts", label: "Drafts", icon: File, count: 1 },
  { id: "archived", label: "Archived", icon: Archive },
  { id: "spam", label: "Spam", icon: Trash2 },
];

const buckets: Bucket[] = [
  { id: "support", label: "Support requests", icon: MessageSquare },
  { id: "bugs", label: "Bug reports", icon: Bug },
  { id: "features", label: "Feature requests", icon: Lightbulb },
  { id: "internal", label: "Internal", icon: Users },
];

const staffUsers: User[] = [
  {
    id: "peter",
    name: "Peter Lann",
    email: "peter.lann@cloudstar.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.webp",
    role: "Support Agent",
  },
  {
    id: "alex",
    name: "Alex Chen",
    email: "alex.chen@cloudstar.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.webp",
    role: "Support Agent",
  },
];

const mockCustomers: Customer[] = [
  {
    id: "sarah",
    name: "Sarah Tran",
    email: "sarah.tran@example.com",
    company: "BrightWave Marketing",
    role: "Ops Manager",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
    isHighValue: true,
  },
  {
    id: "mike",
    name: "Mike Johnson",
    email: "mike.j@techcorp.io",
    company: "TechCorp",
    role: "Developer",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.webp",
    isHighValue: false,
  },
];

const mockTickets: Ticket[] = [
  {
    id: "1",
    subject: "Trouble connecting Slack integration",
    preview:
      "Our team is trying to connect Slack with CloudStar, but the authorization process fails with...",
    timestamp: "6h ago",
    read: false,
    customer: mockCustomers[0],
    assignee: staffUsers[0],
    status: "active",
    respondingUser: staffUsers[0],
    messages: [
      {
        id: "m1",
        sender: mockCustomers[0],
        content: `Hi CloudStar Support,

Our team is trying to connect Slack with CloudStar, but the authorization process fails with the following error message: "OAuth token invalid."

We've tried reconnecting a couple of times and even restarted the workspace, but no luck.

Could you help us get this integration working?

Thanks,
Sarah Tran
Ops Manager, BrightWave Marketing`,
        timestamp: "8:03 AM",
        date: "Aug 29",
        isStaff: false,
      },
      {
        id: "m2",
        sender: staffUsers[0],
        content: `Hi Sarah,

Thanks for reaching out — happy to help! That error usually happens when Slack doesn't grant CloudStar the right permissions during the connection step. Here are a few things to try:

1. Make sure you're logged into the correct Slack workspace before starting the connection.
2. When prompted, grant all requested permissions to CloudStar (sometimes "Deny" is clicked accidentally).
3. Try using a private/incognito browser window to rule out cached credentials.

Let me know if that helps or if you're still seeing the error!`,
        timestamp: "12:56 PM",
        date: "Aug 29",
        isStaff: true,
      },
    ],
  },
  {
    id: "2",
    subject: "Missing files in shared workspace",
    preview:
      "Yesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...",
    timestamp: "6h ago",
    read: false,
    customer: mockCustomers[1],
    status: "active",
    respondingUser: staffUsers[1],
    messages: [],
  },
  {
    id: "3",
    subject: "Billing discrepancy on latest invoice",
    preview:
      "Our invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...",
    timestamp: "8h ago",
    read: true,
    customer: mockCustomers[0],
    status: "pending",
    messages: [],
  },
  {
    id: "4",
    subject: "Can't reset my password",
    preview:
      'I tried to reset my CloudStar password using the "Forgot Password" link, but the reset email never...',
    timestamp: "12h ago",
    read: true,
    customer: mockCustomers[1],
    status: "active",
    messages: [],
  },
  {
    id: "5",
    subject: "Dashboard analytics not updating",
    preview:
      "The analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t...",
    timestamp: "1d ago",
    read: true,
    customer: mockCustomers[0],
    status: "closed",
    messages: [],
  },
  {
    id: "6",
    subject: "Request for HIPAA compliance details",
    preview:
      "Before we move forward with onboarding, our legal team would like documentation on CloudSt...",
    timestamp: "2w ago",
    read: true,
    customer: mockCustomers[1],
    status: "pending",
    messages: [],
  },
];

const previousConversations: PreviousConversation[] = [
  {
    id: "prev1",
    subject: "Trouble connecting Slack integration",
    timestamp: "6h ago",
  },
  {
    id: "prev2",
    subject: "API token expiry",
    timestamp: "2w ago",
  },
];

function getInitials(name: string) {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U"
  );
}

function getStatusColor(status: TicketStatus) {
  switch (status) {
    case "active":
      return "bg-emerald-500";
    case "pending":
      return "bg-amber-500";
    case "closed":
      return "bg-muted-foreground";
    default:
      return "bg-muted-foreground";
  }
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeNavItem: NavItemId;
  activeBucket: BucketId | null;
  onNavItemChange: (id: NavItemId) => void;
  onBucketChange: (id: BucketId | null) => void;
  onSearchClick: () => void;
}

function AppSidebar({
  activeNavItem,
  activeBucket,
  onNavItemChange,
  onBucketChange,
  onSearchClick,
  className,
  ...props
}: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar
      collapsible="offcanvas"
      variant="inset"
      className={cn(className)}
      {...props}
    >
      <SidebarHeader
        className={cn("flex h-14 flex-row items-center justify-between")}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <div className="flex w-full items-center group-data-[collapsible=icon]:justify-center">
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex h-auto items-center gap-3 p-0! hover:bg-transparent"
                  >
                    <LogoImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                      alt="Zerostatic Studio"
                      className="h-8 w-8 rounded-sm bg-muted p-1"
                    />
                    {!isCollapsed && (
                      <>
                        <span className="font-semibold">Shadcnblocks</span>
                        <ChevronDown className="size-3 text-muted-foreground" />
                      </>
                    )}
                  </Button>
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Workspace settings</DropdownMenuItem>
                  <DropdownMenuItem>Invite teammates</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <Button variant="ghost" size="icon" className="size-7">
          <MoreHorizontal className="size-4" />
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="py-2">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={onSearchClick} className="px-2">
                  <Search className="size-4" />
                  <span>Search</span>
                  <kbd className="ml-auto hidden items-center justify-center rounded-md font-mono font-medium text-muted-foreground/70 sm:flex">
                    <CommandIcon
                      className="size-3 font-medium"
                      strokeWidth={1.5}
                    />
                    <span>K</span>
                  </kbd>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="py-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  activeNavItem === item.id && activeBucket === null;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        onNavItemChange(item.id);
                        onBucketChange(null);
                      }}
                      isActive={isActive}
                      className="px-2"
                    >
                      <Icon className="size-4" />
                      <span>{item.label}</span>
                      {item.count !== undefined && (
                        <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Buckets</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {buckets.map((bucket) => {
                const Icon = bucket.icon;
                return (
                  <SidebarMenuItem key={bucket.id}>
                    <SidebarMenuButton
                      onClick={() => onBucketChange(bucket.id)}
                      isActive={activeBucket === bucket.id}
                      className="px-2"
                    >
                      <Icon className="size-4" />
                      <span>{bucket.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

interface TicketListPanelProps {
  tickets: Ticket[];
  selectedTicketId: string | null;
  onTicketSelect: (ticketId: string) => void;
  activeNavItem: NavItemId