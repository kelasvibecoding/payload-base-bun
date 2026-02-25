# User Profile 1

## Metadata
- **Category**: User Profile
- **Objective**: Provide a compact, centered user profile card for basic identity and contact summary.
- **Use Case**: Simple "Author" profiles at the end of blog posts, member list cards, or quick "Team" directory views.
- **Visual Style**: Clean architectural card layout featuring a centered layout. Combines a large-scale avatar (size-24), bold typography headlines, and high-contrast "Verified" status badges. Metadata (Location, Email) is displayed with secondary icon-pairing for scannability.
- **Interactivity**: Functional "Message" and "Follow" call-to-action buttons with standardized primary and outline variants.

## Description
User Profile 1 is the "Identity Card" component. It prioritizes the "Personal Identity" brand archetype by providing a clear, distraction-free summary of a user's professional persona. The centered layout ensures it works well as a standalone card or within a larger responsive grid. By utilizing neutral card backgrounds and clean Shadcn UI button primitives, it conveys a sense of professional reliability and approachability.

## Source Code

```tsx
"use client";

import { MapPin, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface User {
  name: string;
  avatar?: string;
  role?: string;
  bio?: string;
  location?: string;
  email?: string;
  verified?: boolean;
}

interface UserProfile1Props {
  user?: User;
  className?: string;
}

const UserProfile1 = ({
  user = {
    name: "Alex Morgan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    role: "Senior Infrastructure Architect",
    bio: "Engineering high-performance UI primitives with a focus on structural integrity and performance optimization. Previously at Vercel and Google.",
    location: "San Francisco, CA",
    email: "alex.morgan@expert.com",
    verified: true,
  },
  className,
}: UserProfile1Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container flex justify-center px-4">
        <Card className="w-full max-w-sm text-center border border-border bg-card/50 shadow-xl shadow-black/5 rounded-[2rem] overflow-hidden">
          <CardHeader className="pb-0 pt-10">
            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <Avatar className="size-28 border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                    className="object-cover"
                    />
                    <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
                    {user.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                {user.verified && (
                    <div className="absolute bottom-1 right-1 bg-emerald-500 size-6 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="size-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                )}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{user.name}</h3>
                </div>
                {user.role && (
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{user.role}</p>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-8 px-8">
            {user.bio && (
              <p className="text-sm font-medium leading-relaxed text-muted-foreground italic px-2">
                &ldquo;{user.bio}&rdquo;
              </p>
            )}
            <div className="flex flex-col items-center gap-3 pt-4 border-t border-border/50">
              {user.location && (
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  <MapPin className="size-3.5 text-primary/50" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.email && (
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  <Mail className="size-3.5 text-primary/50" />
                  <span>{user.email}</span>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex gap-3 p-8">
            <Button className="flex-1 h-12 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                Message
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-xl font-bold border-border hover:bg-muted transition-all">
                Follow
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export { UserProfile1 };
```
