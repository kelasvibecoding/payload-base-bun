# Application Shell 12

## Metadata
- **Category**: Application Shell
- **Objective**: Two-tier sidebar with organization switcher and notifications
- **Use Case**: Complex business applications requiring organization management and notifications
- **Visual Style**: Dub.sh-inspired layout with rail navigation and collapsible panels
- **Interactivity**: Keyboard shortcuts, organization switching, notifications, and responsive design

## Description
A sophisticated two-tier sidebar application shell featuring a rail navigation with icons, organization switcher, notification system, and collapsible panels. Includes keyboard shortcuts (Cmd/Ctrl+B), mobile navigation, and comprehensive navigation structure with configuration sections.

## Source Code
```tsx
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  HelpCircle,
  Home,
  type LucideIcon,
  MessageSquare,
  PanelLeft,
  PanelLeftClose,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
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
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SIDEBAR_WIDTH = 304;
const SIDEBAR_RAIL_WIDTH = 64;
const SIDEBAR_PANEL_WIDTH = SIDEBAR_WIDTH - SIDEBAR_RAIL_WIDTH;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextValue {
  isPanelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  togglePanel: () => void;
  panelState: "expanded" | "collapsed";
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function SidebarProvider({ defaultOpen = true, children }: SidebarProviderProps) {
  const [_isPanelOpen, _setIsPanelOpen] = React.useState(defaultOpen);
  const isPanelOpen = _isPanelOpen;

  const setPanelOpen = React.useCallback((open: boolean) => {
    _setIsPanelOpen(open);
  }, []);

  const togglePanel = React.useCallback(() => {
    setPanelOpen(!isPanelOpen);
  }, [isPanelOpen, setPanelOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        togglePanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePanel]);

  const panelState = isPanelOpen ? "expanded" : "collapsed";

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      isPanelOpen,
      setPanelOpen,
      togglePanel,
      panelState,
    }),
    [isPanelOpen, setPanelOpen, togglePanel, panelState]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

interface NavItemConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

interface NavSectionConfig {
  id: string;
  label?: string;
  items: NavItemConfig[];
}

interface NavModuleConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  defaultPath: string;
  sections: NavSectionConfig[];
}

interface RailIconConfig {
  moduleId: string;
  label: string;
  icon: LucideIcon;
  defaultPath: string;
}

const data = {
  user: {
    name: "Jordan Lee",
    email: "jordan@example.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.jpg",
  },
  organization: {
    name: "Acme Inc",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
  },
  railIcons: [
    { moduleId: "home", label: "Home", icon: Home, defaultPath: "#" },
    { moduleId: "projects", label: "Projects", icon: FileText, defaultPath: "#" },
    { moduleId: "calendar", label: "Calendar", icon: Calendar, defaultPath: "#" },
    { moduleId: "team", label: "Team", icon: Users, defaultPath: "#" },
  ] as RailIconConfig[],
  modules: [
    {
      id: "home",
      label: "Home",
      icon: Home,
      defaultPath: "#",
      sections: [
        {
          id: "main",
          items: [
            { id: "overview", label: "Overview", icon: Home, path: "#" },
            { id: "documents", label: "Documents", icon: FileText, path: "#" },
            { id: "messages", label: "Messages", icon: MessageSquare, path: "#" },
          ],
        },
        {
          id: "library",
          label: "Library",
          items: [
            { id: "guides", label: "Guides", icon: BookOpen, path: "#" },
            { id: "resources", label: "Resources", icon: FileText, path: "#" },
          ],
        },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: FileText,
      defaultPath: "#",
      sections: [
        {
          id: "main",
          items: [
            { id: "all-projects", label: "All Projects", icon: FileText, path: "#" },
            { id: "recent", label: "Recent", icon: Calendar, path: "#" },
            { id: "starred", label: "Starred", icon: BookOpen, path: "#" },
          ],
        },
      ],
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: Calendar,
      defaultPath: "#",
      sections: [
        {
          id: "main",
          items: [
            { id: "schedule", label: "Schedule", icon: Calendar, path: "#" },
            { id: "events", label: "Events", icon: MessageSquare, path: "#" },
          ],
        },
      ],
    },
    {
      id: "team",
      label: "Team",
      icon: Users,
      defaultPath: "#",
      sections: [
        {
          id: "main",
          items: [
            { id: "members", label: "Members", icon: Users, path: "#" },
            { id: "activity", label: "Activity", icon: MessageSquare, path: "#" },
          ],
        },
      ],
    },
  ] as NavModuleConfig[],
  utilities: [
    { id: "help", label: "Help & Support", icon: HelpCircle, path: "#" },
  ] as NavItemConfig[],
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

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { showTooltip?: boolean }
>(({ className, onClick, showTooltip = true, ...props }, ref) => {
  const { isPanelOpen, togglePanel } = useSidebar();

  const button = (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn("size-8", className)}
      onClick={(event) => {
        onClick?.(event);
        togglePanel();
      }}
      aria-label={isPanelOpen ? "Collapse sidebar" : "Expand sidebar"}
      aria-expanded={isPanelOpen}
      {...props}
    >
      {isPanelOpen ? (
        <PanelLeftClose className="size-4" />
      ) : (
        <PanelLeft className="size-4" />
      )}
    </Button>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        <span>{isPanelOpen ? "Collapse" : "Expand"}</span>
        <kbd className="ml-2 rounded bg-neutral-200 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600">
          {"\u2318"}B
        </kbd>
      </TooltipContent>
    </Tooltip>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

interface SidebarRailProps {
  railIcons: RailIconConfig[];
  activeModuleId: string;
  onModuleChange: (moduleId: string) => void;
}

function SidebarRail({
  railIcons,
  activeModuleId,
  onModuleChange,
}: SidebarRailProps) {
  return (
    <div className="flex h-full w-16 flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-3 p-2">
        <div className="pb-1 pt-2">
          <a
            href="#"
            className="block rounded-lg px-1 py-4 outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-black/50"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
              alt="Logo"
              width={80}
              height={20}
              className="h-5"
            />
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          {railIcons.map((item) => {
            const isActive = item.moduleId === activeModuleId;
            return (
              <Tooltip key={item.moduleId}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => onModuleChange(item.moduleId)}
                    aria-label={item.label}
                    className={cn(
                      "relative flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-black/50",
                      isActive
                        ? "bg-white text-neutral-900"
                        : "text-neutral-600 hover:bg-black/5 active:bg-black/10"
                    )}
                  >
                    <item.icon className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 py-3">
        <SidebarTrigger className="size-11 text-neutral-600 hover:bg-black/5 active:bg-black/10" />

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex size-11 items-center justify-center">
              <UserMenu />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={8}>
            Account
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

function UserMenu() {
  const { user } = data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex size-11 items-center justify-center rounded-lg hover:bg-black/5 active:bg-black/10 focus-visible:ring-2 focus-visible:ring-black/50"
          aria-label="Account"
        >
          <Avatar className="size-7">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles className="mr-2 size-4" />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck className="mr-2 size-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 size-4" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 size-4" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function OrganizationSwitcher() {
  const { organization } = data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex min-w-0 flex-1 items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-black/5">
          <div className="flex size-6 items-center justify-center rounded bg-neutral-200">
            <img
              src={organization.logo}
              alt={organization.name}
              width={16}
              height={16}
              className="size-4"
            />
          </div>
          <span className="flex-1 truncate text-sm font-medium text-neutral-900">
            {organization.name}
          </span>
          <ChevronDown className="size-4 text-neutral-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Organizations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-neutral-200">
              <img
                src={organization.logo}
                alt={organization.name}
                width={16}
                height={16}
                className="size-4"
              />
            </div>
            <span>{organization.name}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Plus className="mr-2 size-4"
