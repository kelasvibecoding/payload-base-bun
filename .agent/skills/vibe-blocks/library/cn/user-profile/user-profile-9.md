# User Profile 9

## Metadata
- **Category**: User Profile
- **Objective**: Provide a data-intensive user dashboard header with integrated real-time analytics and social connectivity.
- **Use Case**: Creator dashboards, admin profile pages, or social network profile headers where "Activity Trends" and "Growth Metrics" are primary performance indicators.
- **Visual Style**: High-density "Dashboard" architecture featuring a layered header card with professional cover branding and a large-scale focal avatar (size-32). Includes a separate 4-point analytics grid (Views, Followers, Stars, Posts) with color-coded trend indicators (Emerald for growth, Red for decline). Utilizes a horizontal social link bar and a primary dual-action button group.
- **Interactivity**: Dynamic trend percentage auto-calculation with directional Arrow icons and hover-reactive analytics cards.

## Description
User Profile 9 is the "Analytics Hub" component. It prioritizes the "Performance Data & Growth" brand archetype by providing a centralized command center for a user's digital presence. The vertical separation between the identity header and the metric blocks ensures that users can verify their credentials while simultaneously monitoring their influence trends. It is specifically optimized for applications where measuring user impact over time (e.g., "from last month") is critical for engagement.

## Source Code

```tsx
"use client";

import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Eye,
  FileText,
  Github,
  Globe,
  Linkedin,
  MapPin,
  MessageSquare,
  Star,
  Twitter,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  change?: number;
  icon: "eye" | "users" | "star" | "file" | "message";
}

interface User {
  name: string;
  avatar?: string;
  coverImage?: string;
  role?: string;
  company?: string;
  location?: string;
  joinedAt?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

interface UserProfile9Props {
  user?: User;
  stats?: Stat[];
  className?: string;
}

const statIcons = {
  eye: Eye,
  users: Users,
  star: Star,
  file: FileText,
  message: MessageSquare,
};

const UserProfile9 = ({
  user = {
    name: "Alex Morgan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    role: "Senior Infrastructure Engineer",
    company: "Vercel",
    location: "San Francisco, CA",
    joinedAt: "March 2021",
    bio: "Building the future of the web through hyper-optimized UI primitives and modular architectural design. Open source advisor and performance minimalist.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      website: "#",
    },
  },
  stats = [
    { label: "Profile Impressions", value: "12,847", change: 12.5, icon: "eye" },
    { label: "Network Growth", value: "8,420", change: 8.2, icon: "users" },
    { label: "Industry Awards", value: "2,156", change: -3.1, icon: "star" },
    { label: "System Modules", value: "142", change: 24.8, icon: "file" },
  ],
  className,
}: UserProfile9Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("w-full max-w-4xl space-y-6 font-sans", className)}>
      {/* Identity Card */}
      <Card className="overflow-hidden border border-border/50 bg-card/10 shadow-xl shadow-black/5 rounded-[2.5rem]">
        <div
          className="h-32 bg-muted bg-cover bg-center sm:h-44 grayscale-[20%]"
          style={{
            backgroundImage: user.coverImage
              ? `url(${user.coverImage})`
              : undefined,
          }}
        />
        <CardContent className="relative pb-10 px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
            <div className="relative group">
                <Avatar className="-mt-14 size-28 border-8 border-card shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:-mt-20 sm:size-36">
                <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                    className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold bg-muted">
                    {initials}
                </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2 right-2 bg-primary size-6 rounded-full border-4 border-card" />
            </div>
            
            <div className="flex-1 space-y-2 pb-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">{user.name}</h1>
              <p className="text-sm font-bold text-primary uppercase tracking-widest leading-none">
                {user.role}
                {user.company && (
                  <span className="text-muted-foreground/60"> — <span className="text-foreground">{user.company}</span></span>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50 pt-1">
                {user.location && (
                  <span className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary/40" />
                    {user.location}
                  </span>
                )}
                {user.joinedAt && (
                  <span className="flex items-center gap-2">
                    <Calendar className="size-3.5 text-primary/40" />
                    Resident since {user.joinedAt}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-3 pb-2">
              <Button className="h-11 rounded-xl px-8 font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                Follow
              </Button>
              <Button variant="outline" className="h-11 rounded-xl px-8 font-bold border-border hover:bg-muted transition-all">
                Message
              </Button>
            </div>
          </div>

          {user.bio && (
            <p className="mt-8 text-base font-medium leading-relaxed text-muted-foreground italic max-w-2xl px-2">
              &ldquo;{user.bio}&rdquo;
            </p>
          )}

          <div className="mt-8 flex items-center gap-3 border-t border-border/50 pt-6">
            {Object.entries(user.socialLinks || {}).map(([key, href]) => {
                const Icon = key === 'twitter' ? Twitter : key === 'linkedin' ? Linkedin : key === 'github' ? Github : Globe;
                return (
                    <Button key={key} variant="ghost" size="icon" className="size-9 rounded-xl hover:bg-primary/5 group/link" asChild>
                        <a href={href} target="_blank">
                            <Icon className="size-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                        </a>
                    </Button>
                )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = statIcons[stat.icon];
          const isPositive = stat.change && stat.change > 0;
          const isNegative = stat.change && stat.change < 0;

          return (
            <Card key={stat.label} className="border border-border/50 bg-card/30 shadow-sm rounded-3xl group hover:border-primary/20 transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 p-6">
                <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                  {stat.label}
                </CardTitle>
                <Icon className="size-4 text-primary/40 group-hover:text-primary transition-colors" />
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="text-3xl font-bold tracking-tighter text-foreground">{stat.value}</div>
                {stat.change !== undefined && (
                  <p
                    className={cn(
                      "mt-2 flex items-center text-[10px] font-bold uppercase tracking-widest",
                      isPositive && "text-emerald-500",
                      isNegative && "text-red-500",
                      !isPositive && !isNegative && "text-muted-foreground/60",
                    )}
                  >
                    {isPositive ? <ArrowUp className="mr-1.5 size-3" /> : <ArrowDown className="mr-1.5 size-3" />}
                    {Math.abs(stat.change)}% Growth
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export { UserProfile9 };
```
