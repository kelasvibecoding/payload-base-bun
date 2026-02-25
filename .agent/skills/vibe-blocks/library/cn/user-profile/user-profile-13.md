# User Profile 13

## Metadata
- **Category**: User Profile
- **Objective**: Provide a conversion-optimized "Freelance Provider" card with integrated rating metrics, project volume, and professional rate disclosures.
- **Use Case**: Expert marketplaces, freelance talent grids, or service provider directories where "Price" and "Performance" are primary customer filters.
- **Visual Style**: Clean architectural card architecture featuring a 1/3 cover header with an overlapping Focal Avatar (size-20) and emerald "Online" indicator. Includes a top-right Bookmark utility, a primary 3-point performance grid (Rating, Projects, Hourly Rate), and a full-width "Hire Me" call-to-action button. Features a smart "Skill Badge" system with overflow handling (+N).
- **Interactivity**: Built-in "Online Status" lighting effects and a responsive bookmark toggle.

## Description
User Profile 13 is the "Service Authority" component. It prioritizes the "Commercial Trust" brand archetype by placing essential transactional data (Hourly Rate, Rating) front and center. The layout is designed to help customers make split-second decisions about quality and cost, while the "Hire Me" CTA provides a direct conversion path. The use of skill labels and project counts ensures that professional competence is backed by verifiable data.

## Source Code

```tsx
"use client";

import { Bookmark, Briefcase, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

interface UserProfile13Props {
  user?: UserData;
  className?: string;
}

const UserProfile13 = ({
  user = {
    name: "Alex Morgan",
    role: "Senior Full Stack Architect",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    isOnline: true,
    skills: ["Infrastructure", "TypeScript", "Performance", "React", "Node.js"],
    rating: 4.95,
    projects: 142,
    hourlyRate: 150,
  },
  className,
}: UserProfile13Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const extraSkills = user.skills && user.skills.length > 3 ? user.skills.length - 3 : 0;
  const displayedSkills = user.skills?.slice(0, 3) || [];

  return (
    <Card className={cn("w-full max-w-sm overflow-hidden border border-border/50 bg-card/50 shadow-xl shadow-black/5 rounded-[2.5rem]", className)}>
      {/* Cover Context */}
      <div
        className="h-32 bg-muted bg-cover bg-center grayscale-[20%]"
        style={{
          backgroundImage: user.coverImage
            ? `url(${user.coverImage})`
            : undefined,
        }}
      />

      <CardContent className="relative px-8 pb-8 pt-2">
        {/* Avatar & Status Engine */}
        <div className="relative -mt-12 inline-block group">
          <Avatar className="size-24 border-8 border-card shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="object-cover"
            />
            <AvatarFallback className="text-2xl font-bold bg-muted">
              {initials}
            </AvatarFallback>
          </Avatar>
          {user.isOnline && (
            <span className="absolute bottom-2 right-2 size-5 rounded-full border-4 border-card bg-emerald-500 animate-pulse" />
          )}
        </div>

        {/* Global Save Utility */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-8 top-4 size-10 rounded-full border-border/50 hover:bg-muted group/save"
        >
          <Bookmark className="size-4 text-muted-foreground group-hover/save:text-primary transition-colors" />
        </Button>

        {/* Identity & Department */}
        <div className="mt-4 space-y-0.5">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{user.name}</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{user.role}</p>
        </div>

        {/* Competency Cloud */}
        <div className="mt-6 flex flex-wrap gap-2">
          {displayedSkills.map((skill) => (
            <Badge key={skill} variant="secondary" className="rounded-full bg-primary/5 text-primary border-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest">
              {skill}
            </Badge>
          ))}
          {extraSkills > 0 && (
            <Badge variant="outline" className="rounded-full border-border bg-transparent px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              +{extraSkills} More
            </Badge>
          )}
        </div>

        {/* Performance Grid */}
        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border/50 pt-8">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-foreground">
                <Star className="size-3.5 fill-yellow-400 stroke-yellow-400" />
                <span className="text-lg font-bold tracking-tighter tabular-nums">{user.rating}</span>
            </div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Rating</span>
          </div>
          
          <div className="text-center space-y-1 border-x border-border/50">
            <div className="flex items-center justify-center gap-1.5 text-foreground">
                <Briefcase className="size-3.5 text-primary/40" />
                <span className="text-lg font-bold tracking-tighter tabular-nums">{user.projects}</span>
            </div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Projects</span>
          </div>
          
          <div className="text-center space-y-1">
            <div className="text-lg font-bold tracking-tighter text-foreground tabular-nums">${user.hourlyRate}</div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Per Hour</span>
          </div>
        </div>

        {/* Core Conversion Switch */}
        <Button className="mt-10 w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all" size="lg">
          Secure Services
        </Button>
      </CardContent>
    </Card>
  );
};

export { UserProfile13 };
```
