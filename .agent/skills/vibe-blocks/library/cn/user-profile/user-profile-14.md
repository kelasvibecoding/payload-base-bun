# User Profile 14

## Metadata
- **Category**: User Profile
- **Objective**: Provide an immersive, cinematic "Global Provider" card with full-bleed situational imagery and high-contrast professional data overlays.
- **Use Case**: Expert discovery feeds, mobile-first service marketplaces, or high-end member spotlight cards where atmospheric visual context is maximized alongside performance data.
- **Visual Style**: Sophisticated "Immersive Overlay" architecture using a full-bleed background image with a deep-bottom multi-stop gradient (from-black/90 to-transparent). Features a white-on-dark data layer with overlapping avatars, emerald status indicators, amber star ratings, and a primary "Glassmorphic" CTA button. Includes a smart "Skill Badge" system optimized for dark overlays.
- **Interactivity**: Built-in "Online" glow effect, hover-reactive bookmark triggers, and high-performance layout scaling for atmospheric backgrounds.

## Description
User Profile 14 is the "Cinematic Expert" component. It rejects the standard card-and-box workflow in favor of a cohesive, atmospheric window into a professional's identity. The use of full-bleed imagery (e.g., architectural or lifestyle context) paired with sharp, high-contrast performance data ensures that the user feels premium and authoritative. It is specifically optimized for applications that prioritize storytelling and "Vibe" as part of the professional selection process, while still maintaining strictly structured performance metrics (Rating, Projects, Rate).

## Source Code

```tsx
"use client";

import { Bookmark, Briefcase, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UserData {
  name: string;
  role: string;
  avatar?: string;
  coverImage?: string;
  isOnline?: boolean;
  skills?: string[];
  rating?: number;
  projects?: number;
  hourlyRate?: number;
}

interface UserProfile14Props {
  user?: UserData;
  className?: string;
}

const UserProfile14 = ({
  user = {
    name: "Alex Morgan",
    role: "Senior Lead Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    isOnline: true,
    skills: ["Infrastructure", "TypeScript", "Performance", "Architectural UX"],
    rating: 4.95,
    projects: 142,
    hourlyRate: 150,
  },
  className,
}: UserProfile14Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const extraSkills = user.skills && user.skills.length > 3 ? user.skills.length - 3 : 0;
  const displayedSkills = user.skills?.slice(0, 3) || [];

  return (
    <div
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/20 group cursor-default h-[500px]",
        className,
      )}
    >
      {/* Immersive Atmospheric Context */}
      <img
        src={user.coverImage}
        alt="Atmospheric Background"
        className="absolute inset-0 size-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />

      {/* Sophisticated Multi-Stop Protection Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* Floating Content Interface */}
      <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
        {/* Identity Focal Group */}
        <div className="flex items-start justify-between">
          <div className="relative group/avatar">
            <Avatar className="size-24 border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105">
              <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-white/20 text-2xl font-bold text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            {user.isOnline && (
              <span className="absolute bottom-1 right-1 size-5 rounded-full border-4 border-black/50 bg-emerald-500 animate-pulse" />
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/20 transition-all group/bookmark"
          >
            <Bookmark className="size-5 transition-transform group-hover/bookmark:scale-110" />
          </Button>
        </div>

        {/* Professional Metrics and conversion */}
        <div className="space-y-6">
            <div className="space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">{user.name}</h3>
                <p className="text-sm font-bold text-white/60 uppercase tracking-[0.2em]">{user.role}</p>
            </div>

            {/* Performance Hub */}
            <div className="flex items-center justify-between border-y border-white/10 py-5">
                <div className="flex flex-col items-center gap-1 group">
                    <div className="flex items-center gap-1.5 text-amber-400">
                        <Star className="size-4 fill-amber-400 stroke-amber-400" />
                        <span className="text-lg font-bold tracking-tighter tabular-nums text-white">{user.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">Rating</span>
                </div>
                
                <div className="h-8 w-[1px] bg-white/10" />

                <div className="flex flex-col items-center gap-1 group">
                    <div className="flex items-center gap-1.5 text-white/80">
                        <Briefcase className="size-4" />
                        <span className="text-lg font-bold tracking-tighter tabular-nums text-white">{user.projects}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">Systems</span>
                </div>
                
                <div className="h-8 w-[1px] bg-white/10" />

                <div className="flex flex-col items-center gap-1 group">
                    <div className="text-lg font-bold tracking-tighter tabular-nums text-white">${user.hourlyRate}</div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">Rate/Hr</span>
                </div>
            </div>

            {/* Competency tags */}
            <div className="flex flex-wrap gap-2">
                {displayedSkills.map((skill) => (
                    <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/10 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm px-4 py-1"
                    >
                    {skill}
                    </Badge>
                ))}
            </div>

            {/* Core Action Trigger */}
            <Button
                className="w-full h-14 rounded-2xl bg-white text-black font-bold text-lg hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-black/40"
                size="lg"
            >
                Connect Architect
            </Button>
        </div>
      </div>
    </div>
  );
};

export { UserProfile14 };
```
