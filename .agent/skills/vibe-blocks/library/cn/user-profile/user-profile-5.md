# User Profile 5

## Metadata
- **Category**: User Profile
- **Objective**: Provide a vertically-oriented, "Actionable Professional" profile card with department-specific branding and direct communication triggers.
- **Use Case**: Company "Who's Who" directories, internal people finders, or customer service agent profiles in helpdesk portals.
- **Visual Style**: Integrated architectural card design featuring a 1/3 cover photo header with an overlapping "Department" badge label. Features a centered avatar placement, bold typographic identity, and a primary dual-action button group (Email/Call) for immediate contact.
- **Interactivity**: Direct `mailto:` and `tel:` link integration with Lucide icon-pairing and responsive shadow-transitions.

## Description
User Profile 5 is the "Corporate Contact" component. It prioritizes the "Operational Efficiency" brand archetype by reducing the distance between identifying a professional and contacting them. The vertical split between the cover visual (which carries department/location context) and the action-oriented content ensures that users can quickly associate a face with a function and take the necessary next step.

## Source Code

```tsx
"use client";

import { Mail, Phone } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  avatar?: string;
  coverImage?: string;
  role?: string;
  department?: string;
  email?: string;
  phone?: string;
}

interface UserProfile5Props {
  user?: User;
  className?: string;
}

const UserProfile5 = ({
  user = {
    name: "Alex Morgan",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    coverImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    role: "Senior Product Architect",
    department: "Infrastructure Division",
    email: "alex.morgan@company.com",
    phone: "+1 (555) 123-4567",
  },
  className,
}: UserProfile5Props) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("w-full max-w-xs overflow-hidden border border-border/50 bg-card/50 shadow-xl shadow-black/5 rounded-[2.5rem]", className)}>
      <div
        className="relative h-28 bg-muted bg-cover bg-center group"
        style={{
          backgroundImage: user.coverImage
            ? `url(${user.coverImage})`
            : undefined,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
          {user.department}
        </span>
      </div>
      <CardContent className="-mt-12 flex flex-col items-center px-10 pb-10">
        <div className="relative group">
            <Avatar className="size-24 border-8 border-card shadow-2xl transition-transform duration-500 group-hover:scale-110">
            <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="object-cover"
            />
            <AvatarFallback className="text-2xl font-bold bg-muted">
                {initials}
            </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 size-5 bg-emerald-500 rounded-full border-4 border-card" />
        </div>
        
        <div className="mt-6 text-center space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-foreground">{user.name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{user.role}</p>
        </div>

        <div className="mt-10 flex w-full gap-3">
          {user.email && (
            <Button variant="outline" size="sm" className="flex-1 h-11 rounded-xl border-border hover:bg-muted font-bold transition-all" asChild>
              <a href={`mailto:${user.email}`}>
                <Mail className="mr-2 size-4 text-primary" />
                Email
              </a>
            </Button>
          )}
          {user.phone && (
            <Button variant="outline" size="sm" className="flex-1 h-11 rounded-xl border-border hover:bg-muted font-bold transition-all" asChild>
              <a href={`tel:${user.phone}`}>
                <Phone className="mr-2 size-4 text-primary" />
                Call
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { UserProfile5 };
```
