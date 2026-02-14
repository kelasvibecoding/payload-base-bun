# Application Shell 14

## Metadata
- **Category**: Application Shell
- **Objective**: Cryptocurrency exchange interface with wallet integration
- **Use Case**: Crypto trading platforms requiring wallet management and token navigation
- **Visual Style**: Modern crypto exchange layout with wallet connection and token favorites
- **Interactivity**: Wallet connection, token favorites, notifications, search, and mobile navigation

## Description
A cryptocurrency exchange application shell featuring wallet integration, token favorites, search functionality, and comprehensive navigation. Includes wallet menu with balance display, token swapping capabilities, favorites system, notifications, and mobile-responsive design with bottom navigation.

## Source Code
```tsx
"use client";

import {
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  Copy,
  Gift,
  HelpCircle,
  LayoutGrid,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Star,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

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

type NavLink = {
  label: string;
  href: string;
  isActive?: boolean;
  icon: LucideIcon;
};

type TokenItem = {
  name: string;
  symbol: string;
  color: string;
};

type NotificationItem = {
  title: string;
  detail: string;
  time: string;
  tone: string;
};

const data = {
  brand: {
    name: "NexoChain",
  },
  user: {
    name: "Johndoe",
    email: "john@shadcncoins.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  wallet: {
    address: "0x1cf2...9a56",
    balance: "$460,890.02",
    status: "Connected",
  },
};

const navLinks: NavLink[] = [
  { label: "Overview", href: "#", isActive: true, icon: LayoutGrid },
  { label: "Markets", href: "#", icon: BarChart3 },
  { label: "Trade", href: "#", icon: ArrowLeftRight },
  { label: "Rewards", href: "#", icon: TrendingUp },
];

const favorites: TokenItem[] = [
  { name: "Bitcoin", symbol: "BTC", color: "bg-orange-500" },
  { name: "Ethereum", symbol: "ETH", color: "bg-indigo-500" },
  { name: "XRP", symbol: "XRP", color: "bg-neutral-900" },
  { name: "TetherUS", symbol: "USDT", color: "bg-emerald-500" },
  { name: "Tron", symbol: "TRX", color: "bg-red-500" },
  { name: "Solana", symbol: "SOL", color: "bg-violet-500" },
  { name: "USDC", symbol: "USDC", color: "bg-blue-500" },
  { name: "BNB", symbol: "BNB", color: "bg-yellow-500" },
  { name: "Avalanche", symbol: "AVAX", color: "bg-rose-500" },
  { name: "Cardano", symbol: "ADA", color: "bg-sky-500" },
];

const walletAssets: TokenItem[] = [
  { name: "Bitcoin", symbol: "BTC", color: "bg-orange-500" },
  { name: "Ethereum", symbol: "ETH", color: "bg-indigo-500" },
  { name: "XRP", symbol: "XRP", color: "bg-neutral-900" },
  { name: "TetherUS", symbol: "USDT", color: "bg-emerald-500" },
];

const notifications: NotificationItem[] = [
  {
    title: "Enable 2FA to secure your account",
    detail: "Chrome on macOS, Istanbul",
    time: "5 min",
    tone: "text-rose-500",
  },
  {
    title: "Swap completed",
    detail: "0.5 BTC - 12,350 USDC",
    time: "Now",
    tone: "text-emerald-500",
  },
  {
    title: "You earned 15 USDC in trading rewards",
    detail: "Awaiting block confirmation",
    time: "1 hr",
    tone: "text-emerald-500",
  },
  {
    title: "New login",
    detail: "Chrome on macOS, Istanbul",
    time: "10 min",
    tone: "text-orange-500",
  },
  {
    title: "Scheduled maintenance",
    detail: "03:00 UTC tomorrow",
    time: "Yesterday",
    tone: "text-muted-foreground",
  },
];

function TokenBadge({ item }: { item: TokenItem }) {
  return (
    <span
      className={cn(
        "flex size-6 items-center justify-center rounded-full text-[11px] font-semibold text-white",
        item.color,
      )}
    >
      {item.symbol.slice(0, 1)}
    </span>
  );
}

function HeaderTab({ item }: { item: NavLink }) {
  return (
    <a
      href={item.href}
      className={cn(
        "rounded-full px-3 py-1 text-sm",
        item.isActive
          ? "bg-neutral-100 text-neutral-900"
          : "text-muted-foreground hover:bg-neutral-50 hover:text-neutral-900",
      )}
    >
      {item.label}
    </a>
  );
}

function SearchField({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search tokens or pairs..."
        className="h-9 w-full rounded-full bg-neutral-50 pl-9"
        aria-label="Search tokens"
      />
      <span className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] text-muted-foreground">
        /
      </span>
    </div>
  );
}

function WalletMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2 rounded-full border border-neutral-200 bg-white px-3"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Wallet className="size-3.5" />
          </span>
          <span className="text-sm font-medium text-neutral-900">
            {data.wallet.address}
          </span>
          <ChevronDown className="size-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Wallet className="size-4" />
            </span>
            <div>
              <div className="text-sm font-medium text-neutral-900">
                {data.wallet.address}
              </div>
              <div className="text-xs text-primary">{data.wallet.status}</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-7 gap-1">
            <Copy className="size-3" />
            Copy
          </Button>
        </div>
        <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2">
          <div className="text-xs text-muted-foreground">Total balance</div>
          <div className="mt-1 text-2xl font-semibold text-neutral-900">
            {data.wallet.balance}
          </div>
          <Button variant="outline" size="sm" className="mt-2 h-7 gap-1">
            <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              E
            </span>
            ETH
            <ChevronDown className="size-3" />
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ArrowLeftRight className="size-3.5" />
            Swap
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ArrowDownRight className="size-3.5" />
            Buy
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ArrowUpRight className="size-3.5" />
            Send
          </Button>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Top assets</span>
          <span className="text-primary">View all</span>
        </div>
        <div className="mt-2 space-y-2">
          {walletAssets.map((asset) => (
            <div
              key={asset.symbol}
              className="flex items-center justify-between rounded-md px-2 py-1 text-sm hover:bg-neutral-50"
            >
              <div className="flex items-center gap-2">
                <TokenBadge item={asset} />
                <span>
                  {asset.name}
                  <span className="ml-1 text-xs text-muted-foreground">
                    {asset.symbol}
                  </span>
                </span>
              </div>
              <span className="text-xs text-muted-foreground">0.0095</span>
            </div>
          ))}
        </div>
        <DropdownMenuSeparator className="my-3" />
        <DropdownMenuItem className="flex items-center justify-between">
          <div>
            <div className="text-sm">2FA Verify</div>
            <div className="text-xs text-muted-foreground">
              Add 2FA for extra security
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
            Verify
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Wallet settings</DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500">
          Disconnect wallet
        </DropdownMenuItem>
        <div className="mt-2 text-[11px] text-muted-foreground">
          v1.5.69 - Terms & Conditions
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FavoritesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Star className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">My favorites (4)</span>
          <button className="text-xs text-muted-foreground">Clear</button>
        </div>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search tokens..."
            className="h-8 pl-8 text-sm"
            aria-label="Search tokens"
          />
        </div>
        <div className="mt-3 max-h-56 space-y-2 overflow-auto pr-1">
          {favorites.map((token) => (
            <div
              key={token.symbol}
              className="flex items-center justify-between rounded-md px-2 py-1 text-sm hover:bg-neutral-50"
            >
              <div className="flex items-center gap-2">
                <TokenBadge item={token} />
                <span>
                  {token.name}
                  <span className="ml-1 text-xs text-muted-foreground">
                    {token.symbol}
                  </span>
                </span>
              </div>
              <Star className="size-3 text-amber-400" />
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NotificationsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Notifications</span>
          <button className="text-xs text-primary">Mark all as read</button>
        </div>
        <div className="mt-3 space-y-2">
          {notifications.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2 rounded-md border border-neutral-100 px-2 py-2"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-1 flex size-7 items-center justify-center rounded-full bg-neutral-100 text-xs",
                  item.tone,
                )}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-neutral-900">
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.detail}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-md border border-neutral-200 py-1 text-xs text-muted-foreground">
          View all notification
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full border border-transparent px-2 py-1 text-sm hover:bg-neutral-50">
          <Avatar className="size-7">
            <AvatarImage src={data.user.avatar} alt={data.user.name} />
            <AvatarFallback className="text-xs">
              {data.user.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-3">
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarImage src={data.user.avatar} alt={data.user.name} />
            <AvatarFallback className="text-xs">
              {data.user.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium text-neutral-900">
              {data.user.name}
            </div>
            <div className="text-xs text-muted-foreground">
              {data.user.email}
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="gap-2">
          <Moon className="size-4" />
          Dark mode
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Settings className="size-4" />
          Account settings
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Wallet className="size-4" />
          Preferences
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <HelpCircle className="size-4" />
          Help center
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Gift className="size-4" />
          Community
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="gap-2 text-rose-500">
          <LogOut className="size-4" />
          Sign out
        </DropdownMenuItem>
        <div className="mt-2 text-[11px] text-muted-foreground">
          v2.8.69 - Terms & Conditions
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Wallet className="size-4" />
            </span>
            {data.brand.name}
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                link.isActive
                  ? "bg-neutral-100 font-medium"
                  : "text-muted-foreground hover:bg-neutral-50",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-6">
          <WalletMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-30 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white px-4 py-2 shadow-lg md:hidden">
      <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1",
                link.isActive && "text-primary",
              )}
            >
              <span
                className={cn(
                  "flex size-7 items-center justify-center rounded-full",
                  link.isActive ? "bg-primary/10" : "bg-neutral-100",
                )}
              >
                <Icon className="size-3.5" />
              </span>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

interface ApplicationShell14Props {
  className?: string;
}

export function ApplicationShell14({ className }: ApplicationShell14Props) {
  return (
    <div className={cn("min-h-svh bg-white", className)}>
      <div className="min-h-svh w-full bg-white">
        <div className="border-b border-neutral-100">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-2 text-xs text-muted-foreground">
              <div />
              <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                <Gift className="size-3.5 text-primary" />
                <span>Claim your $25 welcome bonus on first swap</span>
                <button className="text-primary">Claim now</button>
              </div>
              <div className="flex justify-end">
                <button className="text-muted-foreground" aria-label="Dismiss">
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-neutral-100">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-2 md:gap-3">
                <MobileMenu />
                <div className="hidden size-9 items-center justify-center rounded-full bg-primary/10 text-primary md:flex">
                  <Wallet className="size-5" />
                </div>
                <nav className="hidden items-center gap-1 md:flex">
                  {navLinks.map((link) => (
                    <HeaderTab key={link.label} item={link} />
                  ))}
                </nav>
              </div>
              <div className="hidden w-full justify-self-center md:block md:max-w-md">
                <SearchField />
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <WalletMenu />
                <FavoritesMenu />
                <NotificationsMenu />
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-neutral-100 md:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-3">
            <SearchField />
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="min-h-[360px]" />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}