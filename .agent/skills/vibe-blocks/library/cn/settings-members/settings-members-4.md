# Settings Members 4

## Metadata
- **Category**: Settings Members
- **Objective**: Provide a high-density team management list with integrated bulk action support.
- **Use Case**: Large organizations or rapidly growing startups that need to manage hundreds of members, track pending invitations, and perform bulk removals efficiently.
- **Visual Style**: Compact list layout within a bordered container, featuring role-distribution badges in the header, selection checkboxes, and a status-aware action bar.
- **Interactivity**: Bulk member selection with indeterminate checkbox state, one-click bulk removal, role-based member statistics, and a status tracker for "pending" vs "active" members.

## Description
Settings Members 4 is built for efficiency at scale. It consolidates member management into a unified interface that provides executive-level summaries (role counts) and granular control (bulk selection). The component effectively handles mixed states, such as pending invitations, by using stylized badges and distinct visual treatments for selected rows.

## Source Code

```tsx
"use client";

import { Trash2, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  role: string;
  avatar?: string;
  status: "active" | "pending";
}

interface SettingsMembers4Props {
  heading?: string;
  description?: string;
  members?: Member[];
  className?: string;
}

const SettingsMembers4 = ({
  heading = "Organization Members",
  description = "Manage who has access to this organization.",
  members = [
    {
      id: "1",
      name: "Nina Kowalski",
      email: "nina.k@startup.co",
      role: "Owner",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.jpg",
      status: "active",
    },
    {
      id: "2",
      name: "James Liu",
      email: "james.l@startup.co",
      role: "Admin",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
      status: "active",
    },
    {
      id: "3",
      name: "Rachel Green",
      email: "rachel.g@startup.co",
      role: "Developer",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar9.jpg",
      status: "active",
    },
    {
      id: "4",
      name: "Omar Hassan",
      email: "omar.h@startup.co",
      role: "Developer",
      status: "pending",
    },
    {
      id: "5",
      name: "Lisa Wang",
      email: "lisa.w@startup.co",
      role: "Designer",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar10.jpg",
      status: "active",
    },
  ],
  className,
}: SettingsMembers4Props) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const allSelected = selectedIds.length === members.length;
  const someSelected = selectedIds.length > 0 && !allSelected;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(members.map((m) => m.id));
    }
  };

  const toggleMember = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const selectedCount = selectedIds.length;

  const roleStats = useMemo(() => {
    const stats: Record<string, number> = {};
    members.forEach((m) => {
      stats[m.role] = (stats[m.role] || 0) + 1;
    });
    return stats;
  }, [members]);

  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        <div className={cn("space-y-6", className)}>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {Object.entries(roleStats).map(([role, count]) => (
              <Badge key={role} variant="outline" className="font-normal">
                {role}: {count}
              </Badge>
            ))}
          </div>

          <div className="rounded-lg border">
            <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={toggleAll}
                  aria-label="Select all"
                  {...(someSelected && { "data-state": "indeterminate" })}
                />
                <span className="text-sm font-medium">
                  {selectedCount > 0
                    ? `${selectedCount} selected`
                    : `${members.length} members`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {selectedCount > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => setSelectedIds([])}
                  >
                    <Trash2 className="size-4" />
                    Remove
                  </Button>
                )}
                <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <UserPlus className="size-4" />
                      Invite
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite Member</DialogTitle>
                      <DialogDescription>
                        Add a new member to your organization.
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
                        <Label htmlFor="invite-email">Email</Label>
                        <Input
                          id="invite-email"
                          type="email"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invite-role">Role</Label>
                        <Select defaultValue="developer">
                          <SelectTrigger id="invite-role">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="designer">Designer</SelectItem>
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
            </div>

            <ul className="divide-y">
              {members.map((member) => (
                <li
                  key={member.id}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 transition-colors",
                    selectedIds.includes(member.id) && "bg-muted/30",
                  )}
                >
                  <Checkbox
                    checked={selectedIds.includes(member.id)}
                    onCheckedChange={() => toggleMember(member.id)}
                    aria-label={`Select ${member.name}`}
                  />
                  <Avatar className="size-9">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-xs">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium">
                        {member.name}
                      </p>
                      {member.status === "pending" && (
                        <Badge
                          variant="secondary"
                          className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        >
                          Pending
                        </Badge>
                      )}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0 font-normal">
                    {member.role}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SettingsMembers4 };
```
