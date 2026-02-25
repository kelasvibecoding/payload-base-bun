# User Profile 10

## Metadata
- **Category**: User Profile
- **Objective**: Provide a visually-dominant, portrait-focused user card for aesthetic and creative professional identification.
- **Use Case**: Expert lists on high-end fashion, art, or design platforms where the "Professional Aesthetic" is a primary trust signal.
- **Visual Style**: Architectural "Portrait" layout utilizing a vertical aspect ratio (4:5) for a full-bleed large-scale image. Features an integrated content footer with emerald "BadgeCheck" verification, high-density iconographic stats (Followers, Posts), and a primary "Follow-Add" CTA button with icon pairing.
- **Interactivity**: Clean hover-responsive image scaling and a functional "Plus-integrated" follow trigger for rapid network acquisition.

## Description
User Profile 10 is the "Visual Authority" component. It prioritizes the "Aesthetic Excellence" brand archetype by dedicating 80% of the visual space to the user's high-fidelity portrait. This layout conveys immediate personality and status, making it highly effective for industries where individual personal branding and visual presence (e.g., influencers, creative directors, elite consultants) are essential components of the professional value proposition.

## Source Code

```tsx
"use client";

import { BadgeCheck, LayoutGrid, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  image?: string;
  bio?: string;
  verified?: boolean;
  followers?: number;
  posts?: number;
}

interface UserProfile10Props {
  user?: User;
  className?: string;
}

const UserProfile10 = ({
  user = {
    name: "Sarah Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/Elegant%20Woman%20Portrait.png",
    bio: "Principal UX Engineer crafting hyper-optimized production interfaces with architectural code and design precision.",
    verified: true,
    followers: 12450,
    posts: 42,
  },
  className,
}: UserProfile10Props) => {
  return (
    <Card
      className={cn(
        "w-full max-w-xs overflow-hidden border border-border/50 bg-card/50 shadow-2xl shadow-black/5 rounded-[2.5rem] group",
        className,
      )}
    >
      {/* Immersive Vertical Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={user.image}
          alt={user.name}
          className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardContent className="space-y-6 p-8">
        {/* Authority Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{user.name}</h3>
            {user.verified && (
              <BadgeCheck className="size-6 fill-emerald-500 text-card" />
            )}
          </div>
          {user.bio && (
            <p className="text-sm font-medium leading-relaxed text-muted-foreground italic">&ldquo;{user.bio}&rdquo;</p>
          )}
        </div>

        {/* Global Stats & Call-to-Action */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            <span className="flex items-center gap-2">
              <Users className="size-4 text-primary/40" />
              {user.followers?.toLocaleString()}
            </span>
            <span className="flex items-center gap-2">
              <LayoutGrid className="size-4 text-primary/40" />
              {user.posts}
            </span>
          </div>
          <Button size="sm" className="h-10 px-5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all gap-2">
            Follow
            <Plus className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { UserProfile10 };
```
