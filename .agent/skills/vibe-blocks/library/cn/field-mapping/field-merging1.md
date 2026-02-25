# Field Merging 1

## Metadata
- **Category**: Data Management / Record De-duplication
- **Objective**: Provide an interactive interface for merging multiple duplicate records into a single, unified entry by selecting specific fields from each source record.
- **Use Case**: CRM contact management, address book cleanup, or any administrative dashboard that requires resolving duplicate user/entry data.
- **Visual Style**: Functional "Data Governance" aesthetic. Features a clean, sortable data table (`Table`) with multi-row selection (`Checkbox`). The merging process is handles within a large `Dialog` (Modal) that displays source records as comparable `UserCard` fragments in a grid. A "Result" preview pane on the right shows the live transformation of the merged entry as users select field-level values using `RadioGroup` and `Label` components.
- **Interactivity**: Robust selection-based merging flow. Features state-synchronized field selection where clicking a value in a source card updates the "Result" card. Includes total record counts, role-based field visibility, and a definitive "Merge" action. Utilizes `@tanstack/react-table` for efficient state management and row selection.

## Source Code

### `field-merging1.tsx`
```tsx
"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import { Text } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  firstName?: string;
  lastName?: string;
  image?: string;
  company?: string;
  jobTitle?: string;
  email?: string;
}

const DUMMY_USERS: User[] = [
  {
    firstName: "Olivia",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.jpg",
    company: "Acme Inc",
    jobTitle: "UX Designer",
    email: "olivia.brooks@acme.com",
  },
  {
    firstName: "Nathan",
    lastName: "Park",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.jpg",
    jobTitle: "Backend Engineer",
  },
  {
    firstName: "Maya",
    lastName: "Torres",
    jobTitle: "Creative Director",
    email: "maya@pixelworks.io",
  },
  {
    firstName: "Liam",
    lastName: "Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.jpg",
    company: "Streamline",
  },
  {
    lastName: "Patel",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.jpg",
    company: "CloudNest",
    jobTitle: "Product Manager",
  },
  {
    firstName: "Emma",
    company: "Vendora",
    jobTitle: "Frontend Developer",
    email: "emma.wright@vendora.com",
  },
];

interface LetterAvatarProps {
  children: React.ReactNode;
}

const LetterAvatar = ({ children }: LetterAvatarProps) => {
  return (
    <span className="flex size-6 items-center justify-center rounded-md border bg-muted text-xs">
      {children}
    </span>
  );
};

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    header: "Name",
    accessorKey: "firstName",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {row.original.image ? (
            <img
              src={row.original.image}
              alt={row.original.firstName}
              className="size-6 rounded-md"
            />
          ) : (
            <LetterAvatar>
              {row.original.firstName?.charAt(0).toUpperCase()}
            </LetterAvatar>
          )}

          <span className="font-medium">
            {row.original.firstName} {row.original.lastName}
          </span>
        </div>
      );
    },
  },
  {
    header: "Company",
    cell: ({ row }) =>
      row.original.company && (
        <div className="flex items-center gap-2">
          <LetterAvatar>
            {row.original.company?.charAt(0).toUpperCase()}
          </LetterAvatar>
          <p>{row.original.company}</p>
        </div>
      ),
  },
  {
    header: "Role",
    accessorKey: "jobTitle",
  },
  {
    header: "Email",
    cell: ({ row }) =>
      row.original.email && (
        <Badge variant="outline">{row.original.email}</Badge>
      ),
  },
];

interface UserCardProps {
  user: User;
  variant?: "merged" | "selected";
  onSelect?: (key: string, value: string) => void;
  mergedUser?: User | null;
}

const UserCard = ({
  user,
  variant = "selected",
  onSelect,
  mergedUser,
}: UserCardProps) => {
  const mergeableKeys = [
    "firstName",
    "lastName",
    "jobTitle",
    "email",
    "company",
  ];

  return (
    <div className="w-full border bg-background">
      <div className="flex items-center gap-2 border-b p-3">
        <div
          className={cn(
            "flex size-10 items-center justify-center overflow-hidden rounded-full bg-muted",
            variant === "merged" ? "text-base" : "text-xs",
          )}
        >
          {user.image ? (
            <img src={user.image} alt={user.firstName} className="size-full" />
          ) : (
            <span>{user.firstName?.charAt(0).toUpperCase()}</span>
          )}
        </div>
        <p className="text-sm font-medium">
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div className="space-y-3 p-3">
        {mergeableKeys.map((key) => {
          const value = user[key as keyof User];

          if (!value) return null;

          const id = `${key}-${value}`;

          if (variant === "selected") {
            return (
              <RadioGroup key={id} className="flex items-center gap-2">
                <RadioGroupItem
                  checked={mergedUser?.[key as keyof User] === value}
                  onClick={() => onSelect?.(key, value)}
                  value={id}
                  id={id}
                />
                <Label htmlFor={id} className="font-normal">
                  {value}
                </Label>
              </RadioGroup>
            );
          } else {
            return (
              <div key={id} className="flex items-center gap-2 text-sm">
                <Text className="size-4" />
                {value}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

interface FieldMerging1Props {
  className?: string;
}

const FieldMerging1 = ({ className }: FieldMerging1Props) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [mergedUser, setMergedUser] = useState<User | null>(null);

  useEffect(() => {
    if (Object.entries(rowSelection).length === 0) {
      setMergedUser(null);
    } else {
      setMergedUser(DUMMY_USERS[Number(Object.keys(rowSelection)[0])]);
    }
  }, [rowSelection]);

  const table = useReactTable({
    data: DUMMY_USERS,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <section className="py-32">
      <div className={cn("container space-y-6", className)}>
        <Dialog>
          <DialogTrigger
            asChild
            disabled={Object.entries(rowSelection).length < 2}
          >
            <Button>Merge users</Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="max-h-[95dvh] overflow-y-auto md:!max-w-3xl lg:!max-w-5xl"
          >
            <DialogHeader>
              <DialogTitle>
                Combine {Object.entries(rowSelection).length} selected records
              </DialogTitle>
              <DialogDescription className="sr-only">
                Select fields from each record to create a unified entry
              </DialogDescription>
            </DialogHeader>

            <div className="flex w-full flex-col-reverse items-start lg:flex-row">
              <div className="grid w-full gap-3 bg-muted p-4 lg:flex-2/3 lg:grid-cols-2">
                {Object.keys(rowSelection).map((key) => {
                  const user = DUMMY_USERS[Number(key)];

                  return (
                    <UserCard
                      key={`user-${key}`}
                      user={user}
                      onSelect={(key, value) =>
                        setMergedUser((prev) => ({ ...prev, [key]: value }))
                      }
                      mergedUser={mergedUser}
                    />
                  );
                })}
              </div>
              {mergedUser && (
                <div className="w-full space-y-1 border p-6 lg:flex-1/3">
                  <UserCard user={mergedUser} variant="merged" />
                  <Button className="w-full">Merge</Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { FieldMerging1 };
```
