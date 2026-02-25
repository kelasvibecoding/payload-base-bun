# Settings Members 1

## Metadata
- **Category**: Settings Members
- **Objective**: Provide a classic table-based team management interface with advanced search and filtering.
- **Use Case**: Organizations managing medium to large teams that require structured data display and the ability to filter members by specific roles.
- **Visual Style**: Professional table layout with an integrated search input, a role-based filter popover, and a clean typography hierarchy.
- **Interactivity**: Real-time member search (filtering by name or email), multi-select role filtering via popover, and a modal-based dialog for inviting new members with role assignment.

## Description
Settings Members 1 is a robust solution for team administration. It utilizes a standard table pattern to display member details, roles, and invitation statuses clearly. The component includes a sophisticated filtering system that allows administrators to quickly locate specific members or groups of members based on their access levels. The "Add Member" flow is handled via an accessible dialog, ensuring a focused interaction for expanding the team.

## Source Code

```tsx
"use client";

import {
  CornerDownLeft,
  Search,
  SlidersHorizontal,
  UserRoundPlus,
} from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  name?: string;
  email: string;
  accessLevel: string;
  status?: string;
}

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="flex max-w-56 items-center gap-2 font-medium">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-background">
                {user.name ? user.name.charAt(0) : "?"}
              </span>
              {user.name}
              <span className="text-muted-foreground">{user.email}</span>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{user.accessLevel}</Badge>
            </TableCell>
            <TableCell>
              {user.status === "Invite pending" && (
                <Badge className="bg-blue-100 text-blue-800">
                  {user.status}
                </Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const InviteUserForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserRoundPlus /> Add Member
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0">
        <DialogTitle className="flex items-center gap-2 border-b p-4 text-sm font-medium">
          <UserRoundPlus className="size-4" />
          Add New Member
        </DialogTitle>
        <form
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 bg-muted pt-4"
        >
          <div className="flex flex-col gap-4 px-4">
            <div className="space-y-1">
              <Label className="text-xs">Email address</Label>
              <Input
                placeholder="colleague@company.com"
                className="bg-background"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Assign role</Label>
              <Select defaultValue="editor">
                <SelectTrigger className="w-full bg-background">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="border-t bg-background px-4 py-3">
            <Button size="sm" type="submit">
              Send Invite <CornerDownLeft />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface SettingsMembers1Props {
  heading?: string;
  subHeading?: string;
  className?: string;
  users?: User[];
}

const SettingsMembers1 = ({
  heading = "Team Members",
  subHeading = "View and manage your team members. Control permissions and roles for each user in your organization.",
  users = [
    {
      name: "Emily Watson",
      email: "emily.w@acme.io",
      accessLevel: "Owner",
    },
    {
      email: "john.d@acme.io",
      accessLevel: "Editor",
      status: "Invite pending",
    },
    {
      name: "Michael Park",
      email: "michael.p@acme.io",
      accessLevel: "Viewer",
    },
    {
      email: "lisa.t@acme.io",
      accessLevel: "Editor",
      status: "Invite pending",
    },
  ],
  className,
}: SettingsMembers1Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedAccessLevels, setSelectedAccessLevels] = useState<string[]>(
    [],
  );

  const accessLevels = useMemo(() => {
    return Array.from(new Set(users.map((user) => user.accessLevel)));
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const isAccessLevelSelected =
        selectedAccessLevels.length === 0 ||
        selectedAccessLevels.includes(user.accessLevel);
      const isSearchMatch =
        user.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase());
      return isAccessLevelSelected && isSearchMatch;
    });
  }, [users, selectedAccessLevels, searchValue]);

  const toggleAccessLevel = (accessLevel: string) => {
    setSelectedAccessLevels((prev) => {
      if (prev.includes(accessLevel)) {
        return prev.filter((level) => level !== accessLevel);
      }
      return [...prev, accessLevel];
    });
  };

  return (
    <section className="py-32">
      <div className="container max-w-4xl">
        <div className={cn("flex flex-col gap-8", className)}>
          <div className="space-y-3 border-b pb-8">
            <h3 className="text-2xl font-semibold tracking-tight">{heading}</h3>
            <p className="text-sm font-medium text-muted-foreground">
              {subHeading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
            <div className="relative w-full min-w-20">
              <Search className="absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-7"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Role</p>
                  <div className="space-y-2">
                    {accessLevels.map((accessLevel) => (
                      <Label
                        key={accessLevel}
                        className="cursor-pointer font-normal"
                      >
                        <Checkbox
                          checked={selectedAccessLevels.includes(accessLevel)}
                          onCheckedChange={() => toggleAccessLevel(accessLevel)}
                        />
                        <span className="text-sm">{accessLevel}</span>
                      </Label>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <InviteUserForm />
          </div>

          <UsersTable users={filteredUsers} />
        </div>
      </div>
    </section>
  );
};

export { SettingsMembers1 };
```
