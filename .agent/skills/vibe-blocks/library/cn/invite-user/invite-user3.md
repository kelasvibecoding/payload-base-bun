# Invite User 3

## Metadata
- **Category**: Specialist Feature Page
- **Objective**: Deliver a full-page, high-engagement invitation workflow powered by intelligent multi-select autocomplete.
- **Use Case**: Best for the primary "Invite People" screen in modern collaboration tools (like Slack, Notion, or Linear).
- **Visual Style**: Sophisticated developer-centric aesthetic. Centers on a large `max-w-3xl` container. Features a prominent company logo, clear typographic hierarchy, and a dedicated "Already invited users" table with status-specific colored badges (e.g., green for `Accepted`, yellow for `Pending`).
- **Interactivity**: Advanced multi-select experience. Uses the `Tags` component (powered by `cmdk` and Radix) to allow users to search for existing connections or "Create" a new email invitation directly from the input. Includes a `DropdownMenu` for administrative actions like "Remove access."

## Source Code

### `invite-user3.tsx`
```tsx
"use client";

import { Check, MailIcon, MoreHorizontal, UserIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@/components/kibo-ui/tags";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  status?: "Pending" | "Accepted";
}

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  const columns = [
    {
      label: "Name",
      icon: UserIcon,
    },
    {
      label: "Email",
      icon: MailIcon,
    },
  ];

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium sm:text-base">Already invited users</p>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column, i) => (
              <TableHead key={`col-${column.label}-${i}`}>
                <div className="flex items-center gap-1 text-xs text-muted-foreground uppercase">
                  <column.icon className="size-3.5" />
                  <span>{column.label}</span>
                </div>
              </TableHead>
            ))}
            <TableHead />
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={`user-${user.id}`}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                  "font-medium",
                    user.status === "Accepted"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-yellow-100 text-yellow-800 border-yellow-200"
                  )}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem variant="destructive">
                      Remove access
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

interface InviteUserFormProps {
  value: string[];
  options: {
    value: string;
    label: string;
  }[];
  onToggle: (value: string) => void;
}

const InviteUserForm = ({ value, options, onToggle }: InviteUserFormProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleCreateEmail = () => {
    if (searchValue.trim() && !value.includes(searchValue.trim())) {
      onToggle(searchValue.trim());
      setSearchValue("");
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className="space-y-2"
    >
      <p className="text-sm font-medium sm:text-base">Invite user</p>
      <div className="flex flex-wrap items-start gap-2 sm:flex-nowrap">
        <Tags>
          <TagsTrigger>
            {value.map((tagValue) => {
              const option = options.find((opt) => opt.value === tagValue);
              return (
                <TagsValue key={tagValue} onRemove={() => onToggle(tagValue)}>
                  {option?.label || tagValue}
                </TagsValue>
              );
            })}
          </TagsTrigger>
          <TagsContent>
            <TagsInput
              placeholder="Search users..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <TagsList>
              <TagsEmpty>
                {searchValue.trim() && (
                  <Button
                    variant="ghost"
                    onClick={handleCreateEmail}
                    className="m-1 w-full justify-start"
                  >
                    Create &quot;{searchValue.trim()}&quot;
                  </Button>
                )}
              </TagsEmpty>

              <TagsGroup>
                {options.map((option) => (
                  <TagsItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => onToggle(option.value)}
                    className="justify-start"
                  >
                    <Check
                      className={cn(
                        "size-4 opacity-0",
                        value.includes(option.value) && "opacity-100",
                      )}
                    />
                    {option.label}
                  </TagsItem>
                ))}
              </TagsGroup>
            </TagsList>
          </TagsContent>
        </Tags>
        <Button
          type="submit"
          className="w-full sm:h-10 sm:w-auto"
          disabled={value.length === 0}
        >
          Invite users
        </Button>
      </div>
    </form>
  );
};

interface InviteUser3Props {
  heading?: string;
  description?: string;
  companyLogo?: string;
  className?: string;
  nonInvitedConnections?: User[];
  invitedUsers?: User[];
}

const InviteUser3 = ({
  heading = "Invite people to your workspace",
  description = "We'll email them an invite to join you on your workspace.",
  companyLogo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.png",
  className,
  nonInvitedConnections = [
    {
      id: 3,
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
    },
    {
      id: 13,
      name: "Kevin Hart",
      email: "kevin.hart@example.com",
    },
    {
      id: 15,
      name: "Michael Scott",
      email: "michael.scott@example.com",
    },
    {
      id: 17,
      name: "Oscar Wilde",
      email: "oscar.wilde@example.com",
    },
  ],
  invitedUsers = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Accepted",
    },
    {
      id: 6,
      name: "Diana Ross",
      email: "diana.ross@example.com",
      status: "Accepted",
    },
  ],
}: InviteUser3Props) => {
  const [value, setValue] = useState<string[]>([]);

  const options = nonInvitedConnections.map((user) => ({
    value: user.email,
    label: user.name,
  }));

  const handleToggle = (selectedValue: string) => {
    setValue((prev) =>
      prev.includes(selectedValue)
        ? prev.filter((v) => v !== selectedValue)
        : [...prev, selectedValue],
    );
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className={cn("mx-auto max-w-3xl space-y-12", className)}>
          <img
            src={companyLogo}
            alt="company logo"
            className="w-56 sm:w-68 dark:invert font-bold"
          />

          <div>
            <p className="text-xl font-medium sm:text-2xl">{heading}</p>
            <p className="text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
          <div className="space-y-8">
            <InviteUserForm
              value={value}
              options={options}
              onToggle={handleToggle}
            />
            <UsersTable users={invitedUsers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { InviteUser3 };
```
