# Data Table 5

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with expandable rows and nested data display.
- **Use Case**: Hierarchical data management with expandable row details and nested information.
- **Visual Style**: Professional table with expandable row sections and nested data presentation.
- **Interactivity**: Row expansion, nested data display, sorting, and filtering capabilities.

## Description
An advanced data table component featuring expandable rows for displaying hierarchical or nested data. Built with TanStack Table for optimal performance, suitable for scenarios requiring detailed row information and nested data presentation with professional styling.

## Features
- Expandable rows with nested data display
- Row expansion controls with visual indicators
- Nested data presentation within expanded sections
- Column sorting with visual indicators
- Professional table styling with proper spacing
- Responsive design with proper breakpoints
- Zod schema validation for data integrity
- Type-safe column definitions with TypeScript
- Hierarchical data structure support
- Clean expansion animation and transitions

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  type Row,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowRight, ArrowUp, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  getSubRows?: (row: TData) => Array<TData> | undefined;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const { data, columns, getRowId, initialSorting = [], getSubRows } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const table = useReactTable({
    data,
    columns,
    getRowId,
    getSubRows,
    state: { sorting, expanded },
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return {
    table,
    sorting,
    setSorting,
    expanded,
    setExpanded,
  };
}

type DataTableColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>;
  title: string;
};

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const canSort = column.getCanSort();
  const sorted = column.getIsSorted();

  if (!canSort) {
    return (
      <span className="flex h-8 items-center text-sm font-medium text-foreground">
        {title}
      </span>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex h-8 items-center gap-2 px-0 text-sm font-medium text-foreground"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      <span>{title}</span>
      {sorted === "desc" ? (
        <ArrowDown className="h-4 w-4" />
      ) : sorted === "asc" ? (
        <ArrowUp className="h-4 w-4" />
      ) : (
        <ChevronsUpDown className="h-4 w-4 opacity-50" />
      )}
    </Button>
  );
};

export const schema = z.object({
  id: z.string(),
  item: z.string(),
  type: z.string(),
  stock: z.boolean(),
  sku: z.string(),
  price: z.number(),
  availability: z.array(z.enum(["In store", "Online"])),
  subRows: z.array(z.object({
    id: z.string(),
    item: z.string(),
    type: z.string(),
    stock: z.boolean(),
    sku: z.string(),
    price: z.number(),
    availability: z.array(z.enum(["In store", "Online"])),
  })).optional(),
});

const data = [
  {
    id: "prod-001",
    item: "Tablet Case",
    type: "Electronics",
    stock: true,
    sku: "TC-001",
    price: 83.24,
    availability: ["In store", "Online"],
    subRows: [
      {
        id: "prod-001-a",
        item: "Tablet Case - Black",
        type: "Electronics",
        stock: true,
        sku: "TC-001-BK",
        price: 83.24,
        availability: ["In store", "Online"],
      },
      {
        id: "prod-001-b",
        item: "Tablet Case - White",
        type: "Electronics",
        stock: false,
        sku: "TC-001-WH",
        price: 83.24,
        availability: ["Online"],
      },
    ],
  },
  {
    id: "prod-002",
    item: "Smart Watch",
    type: "Electronics",
    stock: true,
    sku: "SW-002",
    price: 246.27,
    availability: ["In store", "Online"],
    subRows: [
      {
        id: "prod-002-a",
        item: "Smart Watch - Sport",
        type: "Electronics",
        stock: true,
        sku: "SW-002-SPT",
        price: 246.27,
        availability: ["In store", "Online"],
      },
    ],
  },
  {
    id: "prod-003",
    item: "Wool Sweater",
    type: "Accessories",
    stock: true,
    sku: "WS-003",
    price: 168.27,
    availability: ["In store"],
  },
];

export const validatedData = schema.array().parse(data);

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          variant="ghost"
          size="sm"
          className="p-0"
          onClick={row.getToggleExpandedHandler()}
        >
          {row.getIsExpanded() ? (
            <ArrowDown className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </Button>
      ) : null;
    },
    enableSorting: false,
    enableHiding: false,
    meta: {
      width: 40,
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "item",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("item")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="In Stock" />
    ),
    cell: ({ row }) => {
      const inStock: boolean = row.getValue("stock");
      return inStock ? "Yes" : "No";
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div className="font-medium">{formatted}</div>;
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "availability",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Available In" />
    ),
    cell: ({ row }) => {
      const availability: ("In store" | "Online")[] =
        row.getValue("availability");
      return (
        <div className="flex space-x-2">
          {availability.map((location) => (
            <Badge key={location} variant="secondary">
              {location}
            </Badge>
          ))}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export const DataTable5 = () => {
  const { table } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    getSubRows: (row) => row.subRows,
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Expandable Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              An advanced data table with expandable rows for displaying hierarchical data.
              Perfect for nested data structures and detailed information display.
            </p>
          </div>
          <div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="px-0">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
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
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow
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
                      {row.getIsExpanded() && (
                        <TableRow>
                          <TableCell colSpan={columns.length} className="bg-muted/50">
                            <div className="p-4">
                              <h4 className="mb-2 font-semibold">Sub-items:</h4>
                              <div className="space-y-2">
                                {row.original.subRows?.map((subRow) => (
                                  <div
                                    key={subRow.id}
                                    className="flex items-center justify-between rounded-md border p-3"
                                  >
                                    <div className="flex items-center gap-4">
                                      <span className="text-sm font-medium">
                                        {subRow.item}
                                      </span>
                                      <Badge variant="secondary">{subRow.sku}</Badge>
                                    </div>
                                    <div className="flex items-center gap-4">
                                      <span className="text-sm">
                                        {new Intl.NumberFormat("en-US", {
                                          style: "currency",
                                          currency: "USD",
                                        }).format(subRow.price)}
                                      </span>
                                      <Badge
                                        variant={subRow.stock ? "default" : "destructive"}
                                      >
                                        {subRow.stock ? "In Stock" : "Out of Stock"}
                                      </Badge>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};
```
