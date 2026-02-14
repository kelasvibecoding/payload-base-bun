# Application Shell 8

## Metadata
- **Category**: Application Shell
- **Objective**: Email client layout with folder navigation
- **Use Case**: Email and messaging applications with folder-based organization
- **Visual Style**: Three-column layout with module sidebar, folder navigation, and content area
- **Interactivity**: Module switching, folder navigation, email list, and mobile-responsive design

## Description
An email-client style application shell featuring a three-column layout with module navigation on the left, folder-based email list in the center, and main content area. Includes responsive folder tabs that adapt to screen size and mobile drawer navigation.

## Source Code
```tsx
"use client";

import {
  ArchiveX,
  BadgeCheck,
  Bell,
  Calendar,
  ChevronDown,
  ChevronsUpDown,
  CreditCard,
  File,
  FileSpreadsheet,
  Inbox,
  LogOut,
  Mail,
  MoreHorizontal,
  Send,
  Settings,
  Sparkles,
  StickyNote,
  Trash2,
  Users,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

type FolderId = "inbox" | "sent" | "drafts" | "junk" | "trash";

type Folder = {
  id: FolderId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count?: number;
};

const folders: Folder[] = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "drafts", label: "Drafts", icon: File },
  { id: "sent", label: "Sent", icon: Send },
  { id: "junk", label: "Junk", icon: ArchiveX },
  { id: "trash", label: "Trash", icon: Trash2 },
];

const navTitleToFolderId: Record<string, FolderId> = {
  Inbox: "inbox",
  Drafts: "drafts",
  Sent: "sent",
  Junk: "junk",
  Trash: "trash",
};

type SidebarModule = {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const sidebarModules: SidebarModule[] = [
  { id: "emails", label: "Emails", icon: Mail },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "contacts", label: "Contacts", icon: Users },
  { id: "tasks", label: "Tasks", icon: FileSpreadsheet },
  { id: "notes", label: "Notes", icon: StickyNote },
];

const userData = {
  name: "Jordan Lee",
  email: "jordan@acme.io",
  avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
};

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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      id: "1",
      name: "Sarah Mitchell",
      email: "sarah.mitchell@acme.io",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
      verified: true,
      subject: "Q4 Product Roadmap Review",
      date: "09:30 AM",
      teaser:
        "Hey team, I've put together the draft roadmap for Q4 and would love your input before we finalize it next week...",
      read: false,
      starred: true,
    },
    {
      id: "2",
      name: "GitHub",
      email: "noreply@github.com",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.webp",
      verified: true,
      subject: "[acme/dashboard] PR #847 merged",
      date: "Yesterday",
      teaser:
        "Your pull request has been merged into main. The CI/CD pipeline has started and deployment to staging...",
      read: true,
      starred: false,
    },
    {
      id: "3",
      name: "Alex Thompson",
      email: "alex.t@designstudio.co",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.webp",
      verified: true,
      subject: "New brand assets ready for review",
      date: "Yesterday",
      teaser:
        "Hi! The updated brand guidelines and asset library are now available. I've included the new color palette...",
      read: true,
      starred: false,
    },
    {
      id: "4",
      name: "Stripe",
      email: "notifications@stripe.com",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.webp",
      verified: true,
      subject: "Your December payout has been initiated",
      date: "2 days ago",
      teaser:
        "A payout of $12,450.00 USD has been initiated to your bank account ending in •••• 4521...",
      read: true,
      starred: true,
    },
    {
      id: "5",
      name: "Marcus Johnson",
      email: "marcus@venturecap.fund",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.webp",
      verified: false,
      subject: "Follow-up: Series A discussion",
      date: "3 days ago",
      teaser:
        "Great meeting you at TechCrunch Disrupt last week. I'd love to continue our conversation about your growth...",
      read: true,
      starred: false,
    },
    {
      id: "6",
      name: "Linear",
      email: "notifications@linear.app",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar6.webp",
      verified: true,
      subject: "Weekly project digest",
      date: "3 days ago",
      teaser:
        "Here's your weekly summary: 23 issues completed, 8 in progress, 5 new issues created this week...",
      read: true,
      starred: false,
    },
    {
      id: "7",
      name: "Emma Watson",
      email: "emma.w@clientcorp.com",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar7.webp",
      verified: true,
      subject: "Contract renewal - Action required",
      date: "4 days ago",
      teaser:
        "Our annual contract is coming up for renewal next month. I wanted to discuss the new pricing tiers...",
      read: false,
      starred: false,
    },
    {
      id: "8",
      name: "Vercel",
      email: "notifications@vercel.com",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.webp",
      verified: true,
      subject: "Build failed: acme-dashboard",
      date: "4 days ago",
      teaser:
        "The latest deployment for acme-dashboard failed. Error: Module not found: Can't resolve '@/components/ui'...",
      read: true,
      starred: false,
    },
  ],
};

type NavItem = (typeof data.navMain)[number];
type MailItem = (typeof data.mails)[number];

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      className={cn("size-4 text-[#38bdf8]", className)}
      fill="currentColor"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

interface FolderTabsProps {
  className?: string;
  folders: Folder[];
  activeFolder: FolderId;
  onFolderChange: (folderId: FolderId) => void;
  activeEmailCount: number;
}

function FolderTabs({
  className,
  folders,
  activeFolder,
  onFolderChange,
  activeEmailCount,
}: FolderTabsProps) {
  const mainFolders = folders.slice(0, 5);
  const additionalFolders = folders.slice(5);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Desktop: All folders visible at 2xl */}
      <div className="hidden items-center gap-1 2xl:flex">
        {folders.map((folder) => {
          const Icon = folder.icon;
          const isActive = activeFolder === folder.id;
          return (
            <Button
              key={folder.id}
              variant="ghost"
              size="sm"
              onClick={() => onFolderChange(folder.id)}
              className={cn(
                "h-[30px] gap-1.5",
                isActive && "bg-muted text-foreground hover:bg-muted",
              )}
