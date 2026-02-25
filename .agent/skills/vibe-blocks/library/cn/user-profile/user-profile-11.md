# User Profile 11

## Metadata
- **Category**: User Profile
- **Objective**: Provide an immersive, full-bleed visual user card with integrated gradient content overlays for high-impact social presence.
- **Use Case**: Mobile-first social feeds, premium member discovery grids, or vertical-scroll profile cards where visual impact is maximized.
- **Visual Style**: High-contrast "Dynamic Overlay" layout using a full-bleed 3:4 aspect ratio background image. Features a sophisticated bottom-aligned content stack protected by a multi-stop gradient (from-black/70 to-transparent). Includes high-fidelity white typography for accessibility on dark backgrounds, emerald verification badges, and a custom glassmorphic "Follow" button using backdrop-blur and translucency.
- **Interactivity**: Built-in glassmorphism effects (`backdrop-blur-sm`, `bg-white/20`) for the primary action button and high-performance image scaling on hover.

## Description
User Profile 11 is the "Cinematic Social" component. It rejects traditional card boundaries in favor of a cohesive, image-centric identity block that feels modern and alive. The integrated gradient overlay ensures that the user's name, bio, and engagement metrics remain perfectly legible while floating over the immersive background. This profile is specifically optimized for high-end communities or social apps that prioritize personality and high-fidelity situational imagery over structured textual data.

## Source Code

```tsx
"use client";

import { BadgeCheck, LayoutGrid, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  image?: string;
  bio?: string;
  verified?: boolean;
  followers?: number;
  posts?: number;
}

interface UserProfile11Props {
  user?: User;
  className?: string;
}

const UserProfile11 = ({
  user = {
    name: "Sarah Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/Elegant%20Woman%20Portrait.png",
    bio: "Principal UX Engineer crafting intuitive production experiences with code & deep design systems.",
    verified: true,
    followers: 12450,
    posts: 42,
  },
  className,
}: UserProfile11Props) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-xs overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/20 group cursor-default",
        className,
      )}
    >
      {/* Immersive Cinematic Visual */}
      <img
        src={user.image}
        alt={user.name}
        className="aspect-[3/4] w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
      />

      {/* Sophisticated Text Protection Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

      {/* Floating Interactive Content Layer */}
      <div className="absolute inset-x-0 bottom-0 space-y-6 p-8 text-white">
        {/* Identity & Bio Group */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold tracking-tight">{user.name}</h3>
            {user.verified && (
              <BadgeCheck className="size-6 fill-emerald-500 text-white" />
            )}
          </div>
          {user.bio && (
            <p className="text-sm font-medium leading-relaxed text-white/80 italic line-clamp-2">
              &ldquo;{user.bio}&rdquo;
            </p>
          )}
        </div>

        {/* Global Impact Stats and Follow Toggle */}
        <div className="flex items-center justify-between border-t border-white/20 pt-5">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            <span className="flex items-center gap-2 transition-colors hover:text-white">
              <Users className="size-4" />
              {user.followers?.toLocaleString()}
            </span>
            <span className="flex items-center gap-2 transition-colors hover:text-white">
              <LayoutGrid className="size-4" />
              {user.posts}
            </span>
          </div>
          <Button
            size="sm"
            className="h-10 px-5 rounded-xl font-bold gap-2 bg-white/20 text-white backdrop-blur-xl border border-white/10 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all"
          >
            Follow
            <Plus className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { UserProfile11 };
```
