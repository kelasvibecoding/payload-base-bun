# User Profile 2

## Metadata
- **Category**: User Profile
- **Objective**: Provide a data-driven personal landing page summary with integrated social identity and engagement metrics.
- **Use Case**: Community dashboard profiles, developer portfolio headers, or influencer information snippets where stats (Followers/Projects) are key value indicators.
- **Visual Style**: Modern minimalistic profile architecture featuring a left-aligned identity block with integrated social iconography. Highlights include a bold 3-point statistic row (Followers, Following, Projects) with high-fidelity formatting (12.4K+ scale), a deep-content bio section, and primary action CTAs.
- **Interactivity**: Social links with hover-reactive Lucide icons and high-performance numeric formatting for engagement metrics.

## Description
User Profile 2 is the "Influencer Insight" component. It addresses the "Social Consensus" brand archetype by prioritizing high-level engagement metrics alongside a descriptive bio and professional links. The layout is optimized for clarity and rapid information consumption, making it ideal for social networks, professional directories, or collaborative platforms where gauging a user's status and network size is essential for trust.

## Source Code

```tsx
"use client";

import { Github, Globe, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  projects: number;
}

interface User {
  name: string;
  avatar?: string;
  role?: string;
  company?: string;
  bio?: string;
  socialLinks?: SocialLinks;
  stats?: Stats;
}

interface UserProfile2Props {
  user?: User;
  className?: string;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
};

const UserProfile2 = ({
  user = {
    name: "Sarah Montgomery",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    role: "Senior Lead Architect",
    company: "Infrastructure Pro",
    bio: "Scaling early-stage startups through hyper-optimized UI architecture and structural performance primitives. Open source advisor and TypeScript minimalist.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      website: "#",
    },
    stats: {
      followers: 12450,
      following: 890,
      projects: 56,
    },
  },
  className,
}: UserProfile2Props) => {
  const socialIcons = [
    { key: "twitter", icon: Twitter, href: user.socialLinks?.twitter },
    { key: "linkedin", icon: Linkedin, href: user.socialLinks?.linkedin },
    { key: "github", icon: Github, href: user.socialLinks?.github },
    { key: "website", icon: Globe, href: user.socialLinks?.website },
  ].filter((item) => item.href);

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container flex justify-center px-4">
        <div className="w-full max-w-md space-y-8 bg-card/10 p-8 rounded-[2.5rem] border border-border/50 shadow-sm transition-all hover:bg-card/20">
          <div className="flex items-start gap-6">
            <Avatar className="size-20 shrink-0 border-2 border-primary/20 shadow-xl transition-transform hover:rotate-6">
              <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-muted">
                {user.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-1 pt-1">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{user.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                {user.role}
                {user.company && (
                  <> at <span className="text-primary font-bold">{user.company}</span></>
                )}
              </p>
              {socialIcons.length > 0 && (
                <div className="flex gap-4 pt-3">
                  {socialIcons.map(({ key, icon: Icon, href }) => (
                    <a
                      key={key}
                      href={href}
                      className="text-muted-foreground transition-all hover:text-primary hover:scale-110 active:scale-95"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {user.bio && (
            <p className="text-sm leading-relaxed text-muted-foreground font-medium italic">
              &ldquo;{user.bio}&rdquo;
            </p>
          )}

          {user.stats && (
            <div className="grid grid-cols-3 gap-4 border-y border-border/50 py-6">
              <div className="text-center group border-r border-border/50 last:border-none">
                <p className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {formatNumber(user.stats.followers)}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Followers</p>
              </div>
              <div className="text-center group border-r border-border/50 last:border-none">
                <p className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {formatNumber(user.stats.following)}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Following</p>
              </div>
              <div className="text-center group border-r border-border/50 last:border-none">
                <p className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {formatNumber(user.stats.projects)}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Systems</p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button className="flex-1 h-12 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Connect
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-xl font-bold border-border hover:bg-muted transition-all">
                Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { UserProfile2 };
```
