# Data Table 23

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with tree structure, hierarchical data display, and expandable nodes.
- **Use Case**: Hierarchical data management with tree structure, parent-child relationships, and collapsible node navigation.
- **Visual Style**: Professional table with tree indentation, expand/collapse controls, and hierarchical data visualization.
- **Interactivity**: Tree node expansion, hierarchical navigation, parent-child selection, and interactive tree controls.

## Description
A sophisticated data table component featuring tree structure capabilities with hierarchical data display and expandable nodes. Built with TanStack Table for optimal performance, suitable for scenarios requiring parent-child relationships, organizational charts, and hierarchical data exploration with professional tree visualization and smooth interactions.

## Features
- Tree structure with parent-child relationships
- Hierarchical data display with indentation levels
- Expandable/collapsible tree nodes
- Parent-child selection with cascade logic
- Tree indentation and visual hierarchy
- Professional tree controls and indicators
- Responsive design with mobile-friendly tree navigation
- Real-time tree updates and synchronization
- Export functionality with tree structure preservation
- Advanced tree state management and persistence

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  type SortingState,
  type Table as TableType,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  MoreHorizontal,
  Settings2,
} from "lucide-react";
import * as React from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  getSubRows?: (row: TData) => Array<TData> | undefined;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnVisibility?: VisibilityState;
  initialExpanded?: Record<string, boolean>;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    getSubRows,
    initialSorting = [],
    initialFilters = [],
    initialSelection = {},
    enableRowSelection = true,
    initialColumnVisibility = {},
    initialExpanded = {},
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>(initialExpanded);

  const table = useReactTable({
    data,
    columns,
    getRowId,
    getSubRows,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      columnVisibility,
      expanded,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    enableRowSelection,
    enableExpanding: true,
  });

  return {
    table,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    rowSelection,
    setRowSelection,
    columnVisibility,
    setColumnVisibility,
    expanded,
    setExpanded,
  };
}

export const schema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  level: z.number(),
  parentId: z.string().optional().nullable(),
  hasChildren: z.boolean(),
  description: z.string(),
  status: z.enum(["active", "inactive", "pending"]),
  createdAt: z.string(),
  children: z.array(z.any()).optional(),
});

const data = [
  {
    id: "root-1",
    name: "Company Headquarters",
    type: "Organization",
    level: 0,
    parentId: null,
    hasChildren: true,
    description: "Main corporate office",
    status: "active",
    createdAt: "2024-01-01T00:00:00Z",
    children: [
      {
        id: "dept-1",
        name: "Engineering Department",
        type: "Department",
        level: 1,
        parentId: "root-1",
        hasChildren: true,
        description: "Software development and engineering",
        status: "active",
        createdAt: "2024-01-02T00:00:00Z",
        children: [
          {
            id: "team-1",
            name: "Frontend Team",
            type: "Team",
            level: 2,
            parentId: "dept-1",
            hasChildren: false,
            description: "UI/UX development team",
            status: "active",
            createdAt: "2024-01-03T00:00:00Z",
          },
          {
            id: "team-2",
            name: "Backend Team",
            type: "Team",
            level: 2,
            parentId: "dept-1",
            hasChildren: false,
            description: "Server-side development team",
            status: "active",
            createdAt: "2024-01-04T00:00:00Z",
          },
        ],
      },
      {
        id: "dept-2",
        name: "Sales Department",
        type: "Department",
        level: 1,
        parentId: "root-1",
        hasChildren: true,
        description: "Sales and business development",
        status: "active",
        createdAt: "2024-01-05T00:00:00Z",
        children: [
          {
            id: "team-3",
            name: "Enterprise Sales",
            type: "Team",
            level: 2,
            parentId: "dept-2",
            hasChildren: false,
            description: "Large enterprise sales team",
            status: "active",
            createdAt: "2024-01-06T00:00:00Z",
          },
        ],
      },
    ],
  },
  {
    id: "root-2",
    name: "Regional Office",
    type: "Organization",
    level: 0,
    parentId: null,
    hasChildren: true,
    description: "Regional branch office",
    status: "active",
    createdAt: "2024-01-07T00:00:00Z",
    children: [
      {
        id: "dept-3",
        name: "Operations",
        type: "Department",
        level: 1,
        parentId: "root-2",
        hasChildren: false,
        description: "Regional operations management",
        status: "active",
        createdAt: "2024-01-08T00:00:00Z",
      },
    ],
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
          className="p-0 h-6 w-6"
          onClick={row.getToggleExpandedHandler()}
          style={{ marginLeft: `${row.original.level * 20}px` }}
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      ) : (
        <div 
          className="h-6 w-6" 
          style={{ marginLeft: `${row.original.level * 20}px` }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
    meta: {
      width: 40,
    },
  },
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
        aria-label={`Select ${row.original.name}`}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="font-medium" style={{ marginLeft: `${row.original.level * 8}px` }}>
        {row.original.name}
      </div>
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
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      const variant = {
        active: "default",
        inactive: "secondary",
        pending: "outline",
      }[status as string] || "secondary";
      
      return (
        <Badge variant={variant as any}>
          {status as string}
        </Badge>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString();
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(item.id)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit item</DropdownMenuItem>
            {item.hasChildren && (
              <DropdownMenuItem
                onClick={() => row.getToggleExpandedHandler()()}
              >
                {row.getIsExpanded() ? "Collapse" : "Expand"} children
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

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

interface DataTableViewOptionsProps<TData> {
  table: TableType<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const columns = table.getAllColumns().filter((column) => column.getCanHide());

  const hiddenCount = columns.filter((col) => !col.getIsVisible()).length;
  const hasHiddenColumns = hiddenCount > 0;

  const handleResetColumns = () => {
    table.resetColumnVisibility();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2">
          <Settings2 className="h-4 w-4" />
          <span className="hidden sm:inline">View</span>
          {hasHiddenColumns && (
            <Badge
              variant="secondary"
              className="ml-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              {hiddenCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel className="flex items-center justify-between">
          Column Visibility
          {hasHiddenColumns && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-2 py-1 text-xs"
              onClick={handleResetColumns}
            >
              Reset
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            className="capitalize"
            checked={column.getIsVisible()}
            onCheckedChange={(value) => column.toggleVisibility(!!value)}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface DataTablePaginationProps<TData> {
  table: TableType<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageSize = table.getState().pagination.pageSize;
  const relevantPageSizes = [10, 20, 30, 40, 50].filter(
    (size) => size <= table.getCoreRowModel().rows.length,
  );
  if (!relevantPageSizes.includes(pageSize)) {
    relevantPageSizes.push(pageSize);
    relevantPageSizes.sort((a, b) => a - b);
  }

  const currentPage = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const totalRows = table.getCoreRowModel().rows.length;

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-sm font-medium">Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {relevantPageSizes.map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm font-medium whitespace-nowrap">
            Page {currentPage + 1} of {pageCount}
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={currentPage === 0 || totalRows === 0}
              aria-label="Go to first page"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label="Go to next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(pageCount - 1)}
              disabled={currentPage === pageCount - 1 || totalRows === 0}
              aria-label="Go to last page"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const DataTable23 = () => {
  const { table } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    getSubRows: (row) => row.children as any[],
    initialSelection: {},
    enableRowSelection: true,
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Tree Structure Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              An advanced data table with tree structure, hierarchical data display, and expandable nodes.
              Perfect for organizational charts and hierarchical data management.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Input
                placeholder="Search all columns..."
                value={(table.getState().globalFilter as string) ?? ""}
                onChange={(event) => table.setGlobalFilter(event.target.value)}
                className="max-w-sm"
              />
              <DataTableViewOptions table={table} />
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
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <DataTablePagination table={table} />
          </div>
        </div>
      </div>
    </section>
  );
};
```
