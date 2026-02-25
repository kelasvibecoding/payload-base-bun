# User Profile 3

## Metadata
- **Category**: User Profile
- **Objective**: Provide an elite, comprehensive social profile card with cover imagery and detailed professional metadata.
- **Use Case**: Advanced customer dashboards, expert directories, or high-fidelity community profiles where the user's "Cover/Branding" is part of their professional expression.
- **Visual Style**: Sophisticated "Social Media" profile architecture. Features a 16:9 cover image with an overlapping Large-Scale Avatar (size-28), high-resolution status/joined-date metadata with iconography, and a specific "Professional Skills" badge cloud. Includes primary and secondary action CTAs (Follow/Message) and a robust 3-point numeric statistic block.
- **Interactivity**: Stateful "Following" button variant switching, hover-animated social links, and responsive layout scaling for cover image aspects.

## Description
User Profile 3 is the "Expert Hub" component. It prioritizes the "Personal Authority & Expertise" brand archetypes by providing a high-fidelity visual identity space (Cover Image) paired with deep professional context (Skills, Joined Date, Detailed Bio). The layout uses architectural spacing and thin border-segmentation to handle high information density without clutter, making it suitable for professional networks or elite community memberships.

## Source Code

```tsx
"use client";

import { Calendar, Github, Globe, Linkedin, MapPin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

interface Stats {
  followers: number;
  following: number;
  contributions: number;
}

interface User {
  name: string;
  avatar?: string;
  coverImage?: string;
  role?: string;
  company?: string;
  bio?: string;
  location?: string;
  joinedAt?: string;
  skills?: string[];
  socialLinks?: SocialLinks;
  stats?: Stats;
  isFollowing?: boolean;
}

interface UserProfile3Props {
  user?: User;
  className?: string;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
};

const UserProfile3 = ({
  user = {
    name: "Sarah Montgomery",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    role: "Principal Infrastructure Architect",
    company: "Systems Labs",
    bio: "Engineering high-performance UI primitives and structural performance across elite production environments. Former lead contributor at Radix UI and Shadcn. Architecting the future of web accessibility through modular code design.",
    location: "New York, NY",
    joinedAt: "March 2021",
    skills: ["Infrastructure", "TypeScript", "Performance", "Architecture", "Design Systems"],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      website: "#",
    },
    stats: {
      followers: 8420,
      following: 312,
      contributions: 1247,
    },
    isFollowing: false,
  },
  className,
}: UserProfile3Props) => {
  const socialIcons = [
    { key: "twitter", icon: Twitter, href: user.socialLinks?.twitter },
    { key: "linkedin", icon: Linkedin, href: user.socialLinks?.linkedin },
    { key: "github", icon: Github, href: user.socialLinks?.github },
    { key: "website", icon: Globe, href: user.socialLinks?.website },
  ].filter((item) => item.href);

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container px-4">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl shadow-black/5">
          {/* Elite Cover Visual */}
          <div className="relative h-44 bg-muted sm:h-52 overflow-hidden group">
            {user.coverImage && (
              <img
                src={user.coverImage}
                alt="Profile Cover"
                className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          {/* Core Identity Content */}
          <div className="relative px-8 pb-10">
            {/* Focal Point Avatar - Overlap Transition */}
            <div className="-mt-14 mb-8 flex items-end justify-between sm:-mt-16">
              <div className="relative group">
                <Avatar className="size-32 border-8 border-card shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 cursor-pointer">
                    <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                    className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold bg-muted">
                    {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2 right-2 bg-primary size-6 rounded-full border-4 border-card" />
              </div>
              
              <div className="flex gap-3 pb-2">
                <Button variant={user.isFollowing ? "outline" : "default"} className="rounded-xl font-bold h-11 px-6 shadow-lg shadow-primary/10">
                  {user.isFollowing ? "Connected" : "Connect"}
                </Button>
                <Button variant="outline" className="rounded-xl font-bold h-11 px-6 border-border hover:bg-muted">
                    Message
                </Button>
              </div>
            </div>

            {/* Authority Metadata */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">{user.name}</h2>
                <p className="text-sm font-bold text-primary uppercase tracking-widest leading-none">
                  {user.role}
                  {user.company && (
                    <span className="text-muted-foreground/60"> — via <span className="text-foreground">{user.company}</span></span>
                  )}
                </p>
              </div>

              {user.bio && (
                <p className="text-base leading-relaxed text-muted-foreground font-medium italic max-w-lg">
                  &ldquo;{user.bio}&rdquo;
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                {user.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary/50" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user.joinedAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="size-3.5 text-primary/50" />
                    <span>Active since {user.joinedAt}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Signal Icons */}
            {socialIcons.length > 0 && (
              <div className="mt-8 flex gap-5 border-y border-border/50 py-4">
                {socialIcons.map(({ key, icon: Icon, href }) => (
                  <a
                    key={key}
                    href={href}
                    className="text-muted-foreground transition-all hover:text-primary hover:scale-110 active:scale-95"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            )}

            {/* Impact Metrics Block */}
            {user.stats && (
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div className="group">
                  <span className="block text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                    {formatNumber(user.stats.followers)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Followers</span>
                </div>
                <div className="group">
                  <span className="block text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                    {formatNumber(user.stats.following)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Network</span>
                </div>
                <div className="group">
                  <span className="block text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                    {formatNumber(user.stats.contributions)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Impact</span>
                </div>
              </div>
            )}

            {/* Core Competencies badges */}
            {user.skills && user.skills.length > 0 && (
              <div className="mt-10 space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">Core Competencies</h3>
                <div className="flex gap-3">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full bg-primary/5 text-primary border-primary/20 px-4 py-1 font-bold text-[10px] uppercase tracking-widest">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { UserProfile3 };
```
