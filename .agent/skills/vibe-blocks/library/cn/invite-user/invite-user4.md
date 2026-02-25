# Invite User 4

## Metadata
- **Category**: Action Dialog
- **Objective**: Simplify user invitations by providing dual invitation routes (Share Link vs. Email Invite) within a single modal.
- **Use Case**: Best for collaborative tools where users might want to quickly share a link in a chat or send a formal email invitation.
- **Visual Style**: Modern utility-focused aesthetic. Uses a split-aesthetic dialog with a `muted` background for specialized cards. The "Send link" card features its own embedded `Select` for role definition and a high-contrast copy interface. 
- **Interactivity**: Form and clipboard driven. Includes a "Copy" utility with visual feedback state (`copied` state with a checkmark). Uses `Select` for defining link access levels (`Can view`, `Can edit`). 

## Source Code

### `invite-user4.tsx`
```tsx
"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface CopyLinkCardProps {
  inviteLink: string;
}

const CopyLinkCard = ({ inviteLink }: CopyLinkCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(inviteLink);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 rounded-md border bg-muted p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium font-sans">Send link</p>
          <p className="text-sm text-muted-foreground">
            Anyone with link can access
          </p>
        </div>
        <Select defaultValue="view">
          <SelectTrigger className="!bg-background shadow-none">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="view">Can view</SelectItem>
            <SelectItem value="edit">Can edit</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between rounded-sm border bg-background py-1 pr-1 pl-3">
        <p className="text-sm text-foreground/80 truncate pr-4">{inviteLink}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          disabled={copied}
          className="shrink-0"
        >
          {copied ? <Check className="text-green-500 size-4" /> : <Copy className="size-4" />}
        </Button>
      </div>
    </div>
  );
};

const InviteForm = () => {
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-2.5"
    >
      <Label className="text-xs font-medium uppercase text-muted-foreground">Invite by email</Label>
      <div className="flex w-full gap-2">
        <Input
          required
          name="email"
          type="email"
          placeholder="name@example.com"
          className="shadow-none"
        />

        <Button type="submit">Invite</Button>
      </div>
    </form>
  );
};

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

interface InviteUser4Props {
  heading?: string;
  inviteLink?: string;
  className?: string;
}

const InviteUser4 = ({
  heading = "Invite User",
  inviteLink = "https://www.shadcnblocks.com",
  className,
}: InviteUser4Props) => {
  const users: User[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Administrator",
      status: "Active",
    },
    {
      id: 2,
      name: Michael Chen",
      email: "m.chen@company.com",
      role: "Collaborator",
      status: "Invited",
    },
  ];

  return (
    <section className="py-32">
      <div className="container flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Team Members
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage and invite users to your team
          </p>
        </div>

        <UsersTable users={users} />

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit">{heading}</Button>
          </DialogTrigger>
          <DialogContent className={cn("gap-0 overflow-hidden p-0", className)}>
            <DialogTitle className="flex items-center gap-2 border-b bg-muted px-4 py-3 text-base font-medium">
              {heading}
            </DialogTitle>
            <div className="space-y-5 p-4 pt-5">
              <CopyLinkCard inviteLink={inviteLink} />

              <InviteForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { InviteUser4 };
```
