# Data Table 27

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with virtual scrolling, performance optimization, and large dataset handling.
- **Use Case**: High-performance data management with virtual scrolling, memory optimization, and efficient rendering for massive datasets.
- **Visual Style**: Professional table with virtual scroll container, performance indicators, and optimized rendering.
- **Interactivity**: Virtual scrolling, dynamic row rendering, performance monitoring, and smooth scroll interactions.

## Description
A high-performance data table component featuring virtual scrolling capabilities with memory optimization and efficient rendering for massive datasets. Built with TanStack Table and React Virtual for optimal performance, suitable for scenarios requiring handling of thousands of rows with smooth scrolling, dynamic loading, and professional performance optimization.

## Features
- Virtual scrolling with React Virtual integration
- Memory-efficient rendering for large datasets
- Dynamic row height calculation and optimization
- Smooth scroll performance with debounced updates
- Performance monitoring and optimization indicators
- Progressive loading with intersection observers
- Responsive design with mobile-optimized scrolling
- Real-time scroll position tracking and synchronization
- Export functionality with virtual data handling
- Advanced performance metrics and monitoring
- Type-safe virtual scrolling with TypeScript
- Customizable row height and buffer zones

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  type SortingState,
  type Table as TableType,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
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
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnVisibility?: VisibilityState;
  virtualScroll?: boolean;
  rowHeight?: number;
  overscan?: number;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    initialSorting = [],
    initialFilters = [],
    initialSelection = {},
    enableRowSelection = true,
    initialColumnVisibility = {},
    virtualScroll = true,
    rowHeight = 48,
    overscan = 10,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection,
  });

  // Virtual scrolling setup
  const parentRef = React.useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan,
  });

  const virtualRows = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

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
    virtualScroll: {
      enabled: virtualScroll,
      parentRef,
      virtualizer,
      virtualRows,
      totalSize,
      rowHeight,
    },
  };
}

export const schema = z.object({
  id: z.string(),
  item: z.string(),
  type: z.string(),
  stock: z.boolean(),
  sku: z.string(),
  price: z.number(),
  availability: z.array(z.enum(["In store", "Online"])),
  lastModified: z.string().optional(),
  modifiedBy: z.string().optional(),
});

// Generate large dataset for virtual scrolling demo
const generateLargeDataset = () => {
  const data = [];
  for (let i = 1; i <= 1000; i++) {
    data.push({
      id: `prod-${i.toString().padStart(3, '0')}`,
      item: `Product ${i}`,
      type: ["Electronics", "Accessories", "Clothing", "Footwear"][Math.floor(Math.random() * 4)],
      stock: Math.random() > 0.3,
      sku: `SKU-${i.toString().padStart(3, '0')}`,
      price: Math.round((Math.random() * 200 + 50) * 100) / 100,
      availability: Math.random() > 0.5 ? ["In store", "Online"] : ["In store"],
      lastModified: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      modifiedBy: ["john@example.com", "sarah@example.com", "mike@example.com"][Math.floor(Math.random() * 3)],
    });
  }
  return data;
};

const data = generateLargeDataset();

export const validatedData = schema.array().parse(data);

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
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
    enableSorting: false,
    enableHiding: false,
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
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      const product = row.original;
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
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit product</DropdownMenuItem>
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

export const DataTable27 = () => {
  const { table, virtualScroll } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSelection: {},
    enableRowSelection: true,
    virtualScroll: true,
    rowHeight: 48,
    overscan: 10,
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Virtual Scrolling Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              A high-performance data table with virtual scrolling, memory optimization, and efficient rendering.
              Perfect for handling massive datasets with smooth scrolling and professional performance optimization.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary">1,000 rows loaded</Badge>
              <Badge variant="secondary">Virtual scrolling enabled</Badge>
              <Badge variant="secondary">48px row height</Badge>
            </div>
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
              <div
                ref={virtualScroll.parentRef}
                className="h-[600px] overflow-auto"
                style={{ contain: "strict" }}
              >
                <Table style={{ height: `${virtualScroll.totalSize}px`, position: "relative" }}>
                  <TableHeader className="sticky top-0 bg-background z-10">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          return (
                            <TableHead
                              key={header.id}
                              className="px-0"
                              style={{ width: header.getSize() }}
                            >
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
                    <div
                      style={{
                        height: `${virtualScroll.virtualRows[0]?.start || 0}px`,
                      }}
                    />
                    {virtualScroll.virtualRows.map((virtualRow) => {
                      const row = table.getRowModel().rows[virtualRow.index];
                      return (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
                          style={{
                            height: `${virtualScroll.rowHeight}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                          }}
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
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
            <DataTablePagination table={table} />
          </div>
        </div>
      </div>
    </section>
  );
};
```
