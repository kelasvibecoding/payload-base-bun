# Application Shell 13

## Metadata
- **Category**: Application Shell
- **Objective**: Modern header with organization switcher and nested navigation
- **Use Case**: Business applications requiring organization management and hierarchical navigation
- **Visual Style**: Clean header with organization branding, search, and dropdown navigation
- **Interactivity**: Mobile navigation, organization switching, search, and bottom navigation

## Description
A modern application shell featuring a header with organization branding, search functionality, and hierarchical navigation. Includes mobile navigation, organization switcher, and bottom navigation for mobile devices. The layout supports nested navigation items and provides a comprehensive navigation structure.

## Source Code
```tsx
"use client";

import {
  BadgeCheck,
  BarChart3,
  Bell,
  Briefcase,
  ChevronDown,
  ChevronsUpDown,
  ClipboardList,
  Clock3,
  FileText,
  Folder,
  Globe2,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Sparkles,
  Star,
  Users,
  User,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
  children?: NavItem[];
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const data = {
  brand: {
    name: "Arcadia",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
  },
  user: {
    name: "Joh Doe",
    email: "joh@arcadia.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  organization: {
    name: "Shadcnblocks",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
  },
};

const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "#",
        isActive: true,
      },
      { label: "Tasks", icon: ClipboardList, href: "#" },
      { label: "Roadmap", icon: BarChart3, href: "#" },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        label: "Active Projects",
        icon: Briefcase,
        href: "#",
        children: [
          { label: "Project Alpha", icon: FileText, href: "#" },
          { label: "Project Beta", icon: FileText, href: "#" },
          { label: "Project Gamma", icon: FileText, href: "#" },
        ],
      },
      {
        label: "Archived",
        icon: Folder,
        href: "#",
        children: [
          { label: "2024 Archive", icon: FileText, href: "#" },
          { label: "2023 Archive", icon: FileText, href: "#" },
        ],
      },
    ],
  },
  {
    title: "Team",
    items: [
      { label: "Members", icon: Users, href: "#" },
      { label: "Sprints", icon: Clock3, href: "#" },
      { label: "Approvals", icon: BadgeCheck, href: "#" },
      { label: "Reviews", icon: Star, href: "#" },
    ],
  },
  {
    title: "Workspace",
    items: [
      { label: "Integrations", icon: Globe2, href: "#" },
      { label: "Automations", icon: Sparkles, href: "#" },
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function OrganizationSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-between gap-2 px-2">
          <span className="flex min-w-0 items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded bg-neutral-200">
              <img
                src={data.organization.logo}
                alt={data.organization.name}
                width={16}
                height={16}
                className="size-4"
              />
            </span>
            <span className="truncate text-sm font-medium text-neutral-900">
              {data.organization.name}
            </span>
          </span>
          <ChevronDown className="size-4 text-neutral-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Organizations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded bg-neutral-200">
              <img
                src={data.organization.logo}
                alt={data.organization.name}
                width={16}
                height={16}
                className="size-4"
              />
            </span>
            <span>{data.organization.name}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Create organization</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NavDropdown = ({ group }: { group: NavGroup }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          {group.title}
          <ChevronDown className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {group.items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label}>
              <DropdownMenuItem asChild>
                <a href={item.href} className="flex items-center gap-2">
                  <Icon className="size-4" />
                  {item.label}
                </a>
              </DropdownMenuItem>
              {item.children?.map((child) => {
                const ChildIcon = child.icon;
                return (
                  <DropdownMenuItem key={child.label} asChild className="pl-6">
                    <a href={child.href} className="flex items-center gap-2">
                      <ChildIcon className="size-4" />
                      {child.label}
                    </a>
                  </DropdownMenuItem>
                );
              })}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded bg-neutral-900">
              <img
                src={data.brand.logo}
                alt={data.brand.name}
                width={20}
                height={20}
                className="size-5 invert"
              />
            </span>
            <span className="text-base font-semibold">{data.brand.name}</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <OrganizationSwitcher />
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {group.title}
              </div>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted",
                          item.isActive && "bg-muted font-medium",
                        )}
                      >
                        <Icon className="size-4" />
                        {item.label}
                      </a>
                      {item.children?.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm hover:bg-muted"
                          >
                            <ChildIcon className="size-4" />
                            {child.label}
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function SearchField({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="h-9 w-full pl-8"
        aria-label="Search"
      />
    </div>
  );
}

function NavUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2 px-2">
          <Avatar className="size-8">
            <AvatarImage src={data.user.avatar} alt={data.user.name} />
            <AvatarFallback className="text-xs">
              {getInitials(data.user.name)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium md:inline">
            {data.user.name}
          </span>
          <ChevronsUpDown className="hidden size-4 md:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{data.user.name}</p>
            <p className="text-xs text-muted-foreground">{data.user.email}</p>
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
  );
}

interface ApplicationShell13Props {
  className?: string;
}

export function ApplicationShell13({ className }: ApplicationShell13Props) {
  return (
    <div className={cn("flex min-h-svh flex-col bg-neutral-50", className)}>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white">
        <div className="mx-auto grid h-14 w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <MobileNav />
            <a href="#" className="flex items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                <img
                  src={data.brand.logo}
                  alt={data.brand.name}
                  width={20}
                  height={20}
                  className="size-5 text-primary-foreground invert dark:invert-0"
                />
              </div>
              <span className="font-semibold">{data.brand.name}</span>
            </a>
          </div>
          <div className="hidden w-full justify-self-center md:block md:max-w-md">
            <SearchField />
          </div>
          <div className="flex items-center gap-2 justify-self-end">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
            <NavUser />
          </div>
        </div>
        <div className="border-t border-neutral-200 md:hidden">
          <div className="px-4 py-3">
            <SearchField />
          </div>
        </div>
        <div className="hidden border-t border-neutral-200 md:block">
          <div className="mx-auto flex items-center gap-3 overflow-x-auto px-4 py-2 lg:px-6">
            <nav className="flex items-center gap-1">
              {navGroups.map((group) => (
                <NavDropdown key={group.title} group={group} />
              ))}
            </nav>
            <div className="ml-auto w-52">
              <OrganizationSwitcher />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 pb-24 md:pb-6 lg:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="min-h-[360px]" />
        </div>
      </main>
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

const bottomNavItems = [
  { label: "Overview", icon: LayoutDashboard, href: "#", isActive: true },
  { label: "Projects", icon: Briefcase, href: "#" },
  { label: "Team", icon: Users, href: "#" },
  { label: "Workspace", icon: Globe2, href: "#" },
];

function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white md:hidden">
      <div className="grid grid-cols-4">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-2 text-xs",
                item.isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="size-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
