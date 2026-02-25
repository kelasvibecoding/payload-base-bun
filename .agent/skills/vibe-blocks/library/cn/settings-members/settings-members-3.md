# Settings Members 3

## Metadata
- **Category**: Settings Members
- **Objective**: Provide a visually rich, people-centric grid of team member profile cards.
- **Use Case**: Communities, design agencies, or organizations that value "people-first" visibility with prominent avatars and descriptive role badges.
- **Visual Style**: Grid of cards featuring large avatars, role-specific badge coloring (amber for info/admin, blue for member), and secondary metadata like email and join date.
- **Interactivity**: Individual member action menus for role switching and activity tracking, and a centered invite modal with role selection.

## Description
Settings Members 3 moves away from traditional lists/tables towards a grid of distinctive profile cards. This layout is excellent for making a team feel more connected and visual. Each card uses color-coded badges to differentiate roles at a glance and includes a "Joined" timestamp to provide historical context for each member's tenure.

## Source Code

```tsx
"use client";

import { Mail, MoreHorizontal, Shield, UserPlus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member" | "viewer";
  avatar?: string;
  joinedAt: string;
}

interface SettingsMembers3Props {
  heading?: string;
  description?: string;
  members?: Member[];
  className?: string;
}

const roleColors = {
  admin: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  member: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  viewer: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

const SettingsMembers3 = ({
  heading = "Team Members",
  description = "Manage your team members and their access permissions.",
  members = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah.chen@company.io",
      role: "admin",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.jpg",
      joinedAt: "Jan 2024",
    },
    {
      id: "2",
      name: "Marcus Johnson",
      email: "marcus.j@company.io",
      role: "member",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.jpg",
      joinedAt: "Mar 2024",
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      email: "elena.r@company.io",
      role: "member",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.jpg",
      joinedAt: "Apr 2024",
    },
    {
      id: "4",
      name: "David Park",
      email: "david.p@company.io",
      role: "viewer",
      joinedAt: "Jun 2024",
    },
    {
      id: "5",
      name: "Aisha Patel",
      email: "aisha.p@company.io",
      role: "member",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar6.jpg",
      joinedAt: "Aug 2024",
    },
    {
      id: "6",
      name: "Thomas Wright",
      email: "thomas.w@company.io",
      role: "viewer",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar7.jpg",
      joinedAt: "Oct 2024",
    },
  ],
  className,
}: SettingsMembers3Props) => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <div className={cn("space-y-8", className)}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="size-4" />
                  Invite Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>
                    Send an invitation to join your team.
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsInviteOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="colleague@company.io"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="member">
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsInviteOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Send Invite</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <Card key={member.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-sm font-medium">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle className="text-base">
                          {member.name}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className={cn("text-xs", roleColors[member.role])}
                        >
                          <Shield className="mr-1 size-3" />
                          {member.role.charAt(0).toUpperCase() +
                            member.role.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Change role</DropdownMenuItem>
                        <DropdownMenuItem>View activity</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Mail className="size-4" />
                    {member.email}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">
                    Joined {member.joinedAt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SettingsMembers3 };
```
