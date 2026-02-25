# User Profile 4

## Metadata
- **Category**: User Profile
- **Objective**: Provide a minimalist, inline "Active User" pill for real-time status indication and quick identification.
- **Use Case**: Real-time collaboration headers, active member lists, or "Online Now" status pills in larger community dashboards.
- **Visual Style**: Ultra-compact, pill-shaped architecture (rounded-full) featuring a size-8 avatar with an integrated "Presence Indicator" (Online/Offline/Away/Busy) dot. Includes a dual-line metadata stack (Name, Role) in a high-density, small-scale layout.
- **Interactivity**: Built-in state colors (Emerald/Amber/Red/Slate) for instant visual presence status communication.

## Description
User Profile 4 is the "Live Presence" component. It prioritizes the "Real-Time Utility" brand archetype by providing the smallest possible footprint for a full identity entry. The use of the "Status Dot" overlay transforms a simple avatar into a living, responsive interface element. It is specifically designed for high-density UI environments where showing multiple active members or an individual's current availability is required without taking up significant lateral space.

## Source Code

```tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  avatar?: string;
  role?: string;
  status?: "online" | "offline" | "away" | "busy";
}

interface UserProfile4Props {
  user?: User;
  className?: string;
  showStatus?: boolean;
}

const statusColors = {
  online: "bg-emerald-500",
  offline: "bg-muted-foreground",
  away: "bg-amber-500",
  busy: "bg-red-500",
};

const UserProfile4 = ({
  user = {
    name: "Alex Morgan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    role: "Core Contributor",
    status: "online",
  },
  className,
  showStatus = true,
}: UserProfile4Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "inline-flex max-w-xs items-center gap-3 rounded-full border border-border bg-card/50 py-1.5 pl-1.5 pr-5 shadow-sm transition-all hover:bg-card hover:border-primary/20 group cursor-default",
        className,
      )}
    >
      <div className="relative">
        <Avatar className="size-9 border border-border/50 group-hover:scale-105 transition-transform">
          <AvatarImage
            src={user.avatar}
            alt={user.name}
            className="object-cover"
          />
          <AvatarFallback className="text-xs font-bold bg-muted text-muted-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        {showStatus && user.status && (
          <span
            className={cn(
              "absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-background shadow-sm ring-1 ring-black/5",
              statusColors[user.status],
            )}
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm font-bold leading-none text-foreground tracking-tight">{user.name}</span>
        {user.role && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-0.5">{user.role}</span>
        )}
      </div>
    </div>
  );
};

export { UserProfile4 };
```
