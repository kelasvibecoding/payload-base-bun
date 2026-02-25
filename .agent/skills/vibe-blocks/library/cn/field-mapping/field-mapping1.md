# Field Mapping 1

## Metadata
- **Category**: Data Management / Import Tool
- **Objective**: Provide a comprehensive interface for mapping source data columns to destination fields during a file import process.
- **Use Case**: Data migration tools, CRM lead imports, or any SaaS application that allows users to upload CSV/Excel files and needs them to match an internal schema.
- **Visual Style**: Clean "Import Dashboard" aesthetic. Features a full-screen blurred table background with a prominent central call-to-action. The mapping interface is contained within a large `Dialog` (Modal) that uses a split-view: the left side handles the column-to-field mapping using sophisticated `Popover` and `Command` (Combobox) inputs, while the right side provides a real-time `DataPreviewList` of sample values to assist users in making correct mapping decisions. Layout utilizes `Badge`, `Button`, and `Table` components from Shadcn UI.
- **Interactivity**: Highly interactive mapping flow. Features a searchable and extensible "Target Field" dropdown that allows for creating new fields on-the-fly (`onCreateField`). Includes real-time preview updates based on focus, active mapping state tracking, and a "Save" action that transforms dummy data according to user-defined mappings.

## Source Code

### `field-mapping1.tsx`
```tsx
"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Check, ChevronRight, ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InputData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  city: string;
}

const DUMMY_INPUT_DATA: InputData[] = [
  {
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex.morgan@acme.co",
    mobile: "5551234567",
    country: "Germany",
    city: "Berlin",
  },
  {
    firstName: "Taylor",
    lastName: "Chen",
    email: "taylor.chen@acme.co",
    mobile: "5559876543",
    country: "Japan",
    city: "Tokyo",
  },
  {
    firstName: "Jordan",
    lastName: "Patel",
    email: "jordan.patel@acme.co",
    mobile: "5552468135",
    country: "Brazil",
    city: "São Paulo",
  },
  {
    firstName: "Casey",
    lastName: "Kim",
    email: "casey.kim@acme.co",
    mobile: "5551357924",
    country: "France",
    city: "Paris",
  },
  {
    firstName: "Riley",
    lastName: "Santos",
    email: "riley.santos@acme.co",
    mobile: "5558642097",
    country: "Spain",
    city: "Barcelona",
  },
];

interface Column {
  header: string;
  accessorKey: string;
}

const DEFAULT_COLUMNS: Column[] = [
  {
    header: "First Name",
    accessorKey: "firstName",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
];

interface FieldComboboxProps {
  columns: Column[];
  value: string;
  onValueChange: (value: string) => void;
  onCreateField: (fieldName: string) => void;
  onFocus: () => void;
}

const FieldCombobox = ({
  columns,
  value,
  onValueChange,
  onCreateField,
  onFocus,
}: FieldComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleCreate = () => {
    if (
      search &&
      !columns.find((col) => col.header.toLowerCase() === search.toLowerCase())
    ) {
      onCreateField(search);
      onValueChange(search.toLowerCase().replace(/\s+/g, ""));
      setOpen(false);
      setSearch("");
    }
  };

  const selectedColumn = columns.find((col) => col.accessorKey === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild onClick={onFocus}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedColumn ? selectedColumn.header : "Choose field"}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder="Find or add field..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={handleCreate}
              >
                <Plus className="size-4" />
                Add "{search}"
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {columns.map((column) => (
                <CommandItem
                  key={column.accessorKey}
                  value={column.accessorKey}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "size-4",
                      value !== column.accessorKey && "opacity-0",
                    )}
                  />
                  {column.header}
                </CommandItem>
              ))}
            </CommandGroup>
            {search &&
              !columns.find(
                (col) => col.header.toLowerCase() === search.toLowerCase(),
              ) && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem onSelect={handleCreate}>
                      <Plus className="size-4" />
                      Add "{search}"
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface DataPreviewListProps {
  currentFocusedField: string | null;
}

const DataPreviewList = ({ currentFocusedField }: DataPreviewListProps) => {
  if (!currentFocusedField) return null;
  return (
    <div className="space-y-2 border bg-background p-4 shadow-xs">
      <p className="text-sm font-semibold">
        Sample values for {currentFocusedField}
      </p>
      <ul>
        {DUMMY_INPUT_DATA.map((item) => {
          return (
            <li
              key={item.email}
              className="border-b py-2 text-sm first:border-t last:border-b-0"
            >
              {item[currentFocusedField as keyof typeof item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface FieldMapping1Props {
  className?: string;
}

const FieldMapping1 = ({ className }: FieldMapping1Props) => {
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [columns, setColumns] = useState<Column[]>(DEFAULT_COLUMNS);
  const [open, setOpen] = useState(false);
  const [currentFocusedField, setCurrentFocusedField] = useState<string | null>(
    null,
  );
  const [mappings, setMappings] = useState<Record<string, string>>({});

  const handleCreateField = (fieldName: string) => {
    const accessorKey = fieldName.toLowerCase().replace(/\s+/g, "");
    if (!columns.find((col) => col.accessorKey === accessorKey)) {
      setColumns([...columns, { header: fieldName, accessorKey }]);
    }
  };

  const handleMappingChange = (incomingField: string, destField: string) => {
    setMappings((prev) => ({
      ...prev,
      [incomingField]: destField,
    }));
  };

  const handleSave = () => {
    const transformedData = DUMMY_INPUT_DATA.map((item) => {
      const newRow: Record<string, string> = {};

      Object.entries(mappings).forEach(([incomingField, destField]) => {
        if (destField) {
          newRow[destField] = item[incomingField as keyof InputData];
        }
      });

      return newRow;
    });

    setData(transformedData);
    setOpen(false);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="py-32">
      <div className="relative container">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length === 0
              ? Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={`empty-${i}`}>
                    {columns.map((column) => (
                      <TableCell
                        key={`empty-${i}-${column.accessorKey}`}
                        className="h-9"
                      />
                    ))}
                  </TableRow>
                ))
              : table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>

        {data.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/50 backdrop-blur-[1px]">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Drop a file here or browse to begin
            </h3>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Browse files</Button>
              </DialogTrigger>
              <DialogContent
                className={cn(
                  "overflow-hidden p-0 md:!max-w-3xl lg:!max-w-6xl",
                  className,
                )}
                showCloseButton={false}
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>Configure field mapping</DialogTitle>
                  <DialogDescription>
                    Match your data columns to destination fields
                  </DialogDescription>
                </DialogHeader>

                <div>
                  <div className="flex items-center justify-between gap-4 border-b px-6 py-4">
                    <h3 className="text-lg font-semibold md:text-xl">
                      Configure Mapping
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" onClick={() => setOpen(false)}>
                        Exit
                      </Button>
                      <Button
                        disabled={Object.keys(mappings).length === 0}
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-9">
                    <div className="col-span-5 space-y-4 p-6">
                      <p className="text-sm font-semibold md:text-base">
                        Match source columns to target fields
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-muted-foreground uppercase">
                          <p>Source Columns</p>
                          <p>Target Fields</p>
                        </div>

                        <ul className="space-y-6">
                          {Object.keys(DUMMY_INPUT_DATA[0]).map((key) => {
                            return (
                              <li
                                key={`incoming-field-${key}`}
                                className="grid grid-cols-2 gap-4"
                              >
                                <div className="flex items-center justify-between">
                                  <Badge variant="secondary">{key}</Badge>

                                  <ChevronRight className="size-4 text-muted-foreground" />
                                </div>
                                <FieldCombobox
                                  columns={columns}
                                  value={mappings[key] || ""}
                                  onValueChange={(value) =>
                                    handleMappingChange(key, value)
                                  }
                                  onCreateField={handleCreateField}
                                  onFocus={() => setCurrentFocusedField(key)}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 hidden bg-muted p-8 md:block">
                      <DataPreviewList
                        currentFocusedField={currentFocusedField}
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export { FieldMapping1 };
```
