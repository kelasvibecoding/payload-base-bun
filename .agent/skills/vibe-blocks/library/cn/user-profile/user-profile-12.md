# User Profile 12

## Metadata
- **Category**: User Profile
- **Objective**: Provide a classic "Social Dashboard" profile card with integrated edit controls and engagement statistics.
- **Use Case**: User settings pages, public member profiles on niche social platforms, or "Owner" profile summaries in dashboard headers.
- **Visual Style**: Clean architectural card layout featuring a cover header with an overlapping Focal Avatar (size-28). Features a primary "Edit Profile" utility button placed in the header proximity, a dual-action "Follow/Message" button group, and a centered 3-point statistic row (Posts, Following, Followers).
- **Interactivity**: Built-in verification badges (Sky-500) and functional action triggers with Lucide icon-pairing.

## Description
User Profile 12 is the "Standard Dashboard" component. It prioritizes the "Personal Management" brand archetype by providing a clear, high-utility layout for user identity and engagement tracking. The inclusion of the "Edit Profile" button directly in the profile view makes it an ideal landing state for logged-in users, while the engagement stats provide the necessary social context for external viewers. The layout uses neutral backgrounds and consistent spacing to ensure maximum readability and professional feel.

## Source Code

```tsx
"use client";

import { BadgeCheck, MessageSquare, Pencil, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
}

interface User {
  name: string;
  username: string;
  avatar?: string;
  coverImage?: string;
  bio?: string;
  verified?: boolean;
}

interface UserProfile12Props {
  user?: User;
  stats?: Stat[];
  className?: string;
}

const UserProfile12 = ({
  user = {
    name: "Alex Morgan",
    username: "@alex_architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    bio: "Principal Infrastructure Architect building high-performance UI primitives and modular architectural systems. Open source enthusiast.",
    verified: true,
  },
  stats = [
    { label: "Articles", value: "847" },
    { label: "Network", value: "312" },
    { label: "Innovators", value: "89k" },
  ],
  className,
}: UserProfile12Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("w-full max-w-md overflow-hidden border border-border/50 bg-card/50 shadow-2xl shadow-black/5 rounded-[2.5rem]", className)}>
      {/* Cover Header */}
      <div
        className="h-36 bg-muted bg-cover bg-center grayscale-[20%]"
        style={{
          backgroundImage: user.coverImage
            ? `url(${user.coverImage})`
            : undefined,
        }}
      />

      <CardContent className="relative px-8 pb-8">
        {/* Avatar Focal Point */}
        <div className="relative group/avatar inline-block">
            <Avatar className="-mt-14 size-32 border-8 border-card shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105">
            <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="object-cover"
            />
            <AvatarFallback className="text-3xl font-bold bg-muted">
                {initials}
            </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-2 right-2 bg-emerald-500 size-6 rounded-full border-4 border-card" />
        </div>

        {/* Dynamic Edit Utility */}
        <Button
          variant="outline"
          size="sm"
          className="absolute right-8 top-6 gap-2 rounded-xl font-bold border-border/50 hover:bg-muted transition-all"
        >
          <Pencil className="size-3.5" />
          Manage
        </Button>

        {/* Identity Information */}
        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{user.name}</h2>
            {user.verified && (
              <BadgeCheck className="size-6 fill-sky-500 text-card" />
            )}
          </div>
          <p className="text-sm font-bold text-primary uppercase tracking-widest">{user.username}</p>
        </div>

        {/* Primary Engagement Actions */}
        <div className="mt-6 flex items-center gap-3">
          <Button className="h-11 rounded-xl px-8 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all gap-2">
            <Plus className="size-4" />
            Connect
          </Button>
          <Button variant="outline" size="icon" className="size-11 rounded-xl border-border hover:bg-muted">
            <MessageSquare className="size-4 text-muted-foreground" />
          </Button>
        </div>

        {/* Professional Bio */}
        {user.bio && (
          <p className="mt-8 text-sm font-medium leading-relaxed text-muted-foreground italic">&ldquo;{user.bio}&rdquo;</p>
        )}

        {/* Engagement Statistics */}
        <div className="mt-8 flex items-center justify-around border-t border-border/50 pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { UserProfile12 };
```
