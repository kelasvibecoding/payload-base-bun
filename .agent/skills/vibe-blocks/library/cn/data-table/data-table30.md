# Data Table 30

## Metadata
- **Category**: Data Table
- **Objective**: Advanced virtualized data table with search, filtering, column pinning, and row selection.
- **Use Case**: Large dataset management with virtual scrolling, search functionality, and advanced column controls.
- **Visual Style**: Professional table with virtual scrolling, column pinning, and comprehensive search/filter UI.
- **Interactivity**: Global search, column filtering, row selection, column pinning, and virtual scrolling for performance.

## Description
A high-performance data table component featuring virtual scrolling for large datasets, comprehensive search functionality, column filtering, row selection, and column pinning capabilities. Built with TanStack Table and React Virtual for optimal performance with thousands of rows, suitable for enterprise-level data management scenarios.

## Features
- Virtual scrolling for handling large datasets efficiently
- Global search functionality with real-time filtering
- Column-specific filtering with faceted values
- Row selection with checkbox controls
- Column pinning (left/right) with sticky positioning
- Comprehensive search UI with match highlighting
- Professional pagination and navigation controls
- Zod schema validation for data integrity
- Type-safe column definitions with TypeScript
- Performance-optimized rendering with virtualization

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  ColumnFiltersState,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  RowSelectionState,
  type SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  LoaderIcon,
  MoreHorizontal,
  Search,
  X,
} from "lucide-react";
import type { CSSProperties } from "react";
import * as React from "react";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ColumnStyleMeta = {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
};

type ColumnWithPinning = Column<unknown, unknown> & {
  getIsPinned?: () => "left" | "right" | false;
  getStart?: (position: "left" | "right") => number;
  getAfter?: (position: "left" | "right") => number;
  getIsFirstColumn?: (position: "left" | "right") => boolean;
  getIsLastColumn?: (position: "left" | "right") => boolean;
  getSize?: () => number;
  getIsResizing?: () => boolean;
  getResizeHandler?: () => (event: unknown) => void;
};

function getColumnLayoutStyles(
  meta: ColumnStyleMeta,
  columnWithPinning: ColumnWithPinning,
) {
  const baseStyle: CSSProperties = {};
  if (meta.width !== undefined) {
    baseStyle.width =
      typeof meta.width === "number" ? `${meta.width}px` : meta.width;
  }
  if (meta.minWidth !== undefined) {
    baseStyle.minWidth =
      typeof meta.minWidth === "number" ? `${meta.minWidth}px` : meta.minWidth;
  }
  if (meta.maxWidth !== undefined) {
    baseStyle.maxWidth =
      typeof meta.maxWidth === "number" ? `${meta.maxWidth}px` : meta.maxWidth;
  }
  if (
    baseStyle.width === undefined &&
    typeof columnWithPinning.getSize === "function"
  ) {
    const computedWidth = columnWithPinning.getSize();
    if (typeof computedWidth === "number" && Number.isFinite(computedWidth)) {
      baseStyle.width = `${computedWidth}px`;
    }
  }

  const pinned = columnWithPinning.getIsPinned?.();
  const pinnedStyle: CSSProperties = {};
  let lastPinned: "left" | "right" | undefined;

  if (pinned) {
    pinnedStyle.position = "sticky";
    pinnedStyle.zIndex = 1;

    if (pinned === "left") {
      const start = columnWithPinning.getStart?.("left") ?? 0;
      pinnedStyle.left = `${start}px`;
      if (columnWithPinning.getIsLastColumn?.("left")) {
        lastPinned = "left";
      }
    }

    if (pinned === "right") {
      const after = columnWithPinning.getAfter?.("right") ?? 0;
      pinnedStyle.right = `${after}px`;
      if (columnWithPinning.getIsFirstColumn?.("right")) {
        lastPinned = "right";
      }
    }

    const resolvedWidth =
      baseStyle.width ??
      (typeof columnWithPinning.getSize === "function"
        ? columnWithPinning.getSize()
        : undefined);
    if (resolvedWidth !== undefined) {
      pinnedStyle.width =
        typeof resolvedWidth === "number"
          ? `${resolvedWidth}px`
          : resolvedWidth;
    }
  }

  return { baseStyle, pinnedStyle, pinned, lastPinned };
}

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnPinning?: ColumnPinningState;
  rowHeight?: number;
  overscan?: number;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    initialSorting = [],
    initialSelection = {},
    enableRowSelection = true,
    initialColumnPinning = {},
    rowHeight = DEFAULT_ROW_HEIGHT,
    overscan = DEFAULT_OVERSCAN,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnPinning, setColumnPinning] =
    React.useState<ColumnPinningState>(initialColumnPinning);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchMatches, setSearchMatches] = React.useState<CellMatch[]>([]);
  const [matchIndex, setMatchIndex] = React.useState(-1);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      rowSelection,
      columnPinning,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    enableRowSelection,
  });

  // Virtual scrolling setup
  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => rowHeight,
    overscan,
  });

  // Search functionality
  React.useEffect(() => {
    if (!searchQuery) {
      setSearchMatches([]);
      setMatchIndex(-1);
      return;
    }

    const matches: CellMatch[] = [];
    table.getRowModel().rows.forEach((row, rowIndex) => {
      row.getAllCells().forEach((cell) => {
        const value = String(cell.getValue()).toLowerCase();
        if (value.includes(searchQuery.toLowerCase())) {
          matches.push({ rowIndex, cellId: cell.id });
        }
      });
    });

    setSearchMatches(matches);
    setMatchIndex(matches.length > 0 ? 0 : -1);
  }, [searchQuery, table]);

  const handleSearchNext = () => {
    if (searchMatches.length === 0) return;
    const nextIndex = (matchIndex + 1) % searchMatches.length;
    setMatchIndex(nextIndex);
    scrollToMatch(searchMatches[nextIndex]);
  };

  const handleSearchPrevious = () => {
    if (searchMatches.length === 0) return;
    const prevIndex = matchIndex === 0 ? searchMatches.length - 1 : matchIndex - 1;
    setMatchIndex(prevIndex);
    scrollToMatch(searchMatches[prevIndex]);
  };

  const scrollToMatch = (match: CellMatch) => {
    const element = document.querySelector(`[data-cell-id="${match.cellId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("search-highlight");
      setTimeout(() => element.classList.remove("search-highlight"), 2000);
    }
  };

  return {
    table,
    sorting,
    setSorting,
    rowSelection,
    setRowSelection,
    columnPinning,
    setColumnPinning,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    searchMatches,
    matchIndex,
    handleSearchNext,
    handleSearchPrevious,
    rowVirtualizer,
    tableContainerRef,
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
  createdAt: z.string(),
  updatedAt: z.string(),
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
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "prod-002",
    item: "Smart Watch",
    type: "Electronics",
    stock: true,
    sku: "SW-002",
    price: 246.27,
    availability: ["In store", "Online"],
    createdAt: "2024-01-14T14:20:00Z",
    updatedAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "prod-003",
    item: "Wool Sweater",
    type: "Accessories",
    stock: true,
    sku: "WS-003",
    price: 168.27,
    availability: ["In store"],
    createdAt: "2024-01-13T09:15:00Z",
    updatedAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "prod-004",
    item: "Wireless Earbuds",
    type: "Electronics",
    stock: true,
    sku: "WE-004",
    price: 107.75,
    availability: ["In store", "Online"],
    createdAt: "2024-01-12T16:45:00Z",
    updatedAt: "2024-01-12T16:45:00Z",
  },
  {
    id: "prod-005",
    item: "Laptop Sleeve",
    type: "Electronics",
    stock: true,
    sku: "LS-005",
    price: 248.02,
    availability: ["In store", "Online"],
    createdAt: "2024-01-11T11:30:00Z",
    updatedAt: "2024-01-11T11:30:00Z",
  },
];

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
    meta: {
      width: 40,
      minWidth: 40,
      maxWidth: 40,
    },
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SKU" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      width: 100,
      minWidth: 80,
      maxWidth: 150,
    },
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
    meta: {
      width: 200,
      minWidth: 150,
      maxWidth: 300,
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      width: 120,
      minWidth: 100,
      maxWidth: 200,
    },
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
    meta: {
      width: 80,
      minWidth: 60,
      maxWidth: 100,
    },
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
    meta: {
      width: 100,
      minWidth: 80,
      maxWidth: 150,
    },
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
    meta: {
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
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
    meta: {
      width: 50,
      minWidth: 50,
      maxWidth: 50,
    },
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

type CellMatch = {
  rowIndex: number;
  cellId: string;
};

const DEFAULT_ROW_HEIGHT = 48;
const DEFAULT_OVERSCAN = 10;

export const DataTable30 = () => {
  const {
    table,
    sorting,
    setSorting,
    rowSelection,
    setRowSelection,
    columnPinning,
    setColumnPinning,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    searchMatches,
    matchIndex,
    handleSearchNext,
    handleSearchPrevious,
    rowVirtualizer,
    tableContainerRef,
  } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSorting: [],
    initialSelection: {},
    enableRowSelection: true,
    initialColumnPinning: {},
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Virtualized Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              A high-performance data table with virtual scrolling, search, filtering, and column pinning.
              Perfect for handling large datasets with thousands of rows.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="max-w-sm"
                />
                {searchMatches.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {matchIndex + 1} of {searchMatches.length}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSearchPrevious}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSearchNext}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setColumnPinning({})}
                >
                  Reset Pinning
                </Button>
              </div>
            </div>
            <div
              ref={tableContainerRef}
              className="relative overflow-auto rounded-md border"
              style={{ height: "400px" }}
            >
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        const { baseStyle, pinnedStyle, pinned, lastPinned } =
                          getColumnLayoutStyles(
                            (header.column.columnDef.meta as ColumnStyleMeta) ?? {},
                            header.column as ColumnWithPinning,
                          );
                        return (
                          <TableHead
                            key={header.id}
                            className={cn(
                              "relative px-0",
                              pinned && "bg-background",
                              lastPinned === "left" && "border-r",
                              lastPinned === "right" && "border-l",
                            )}
                            style={{
                              ...baseStyle,
                              ...pinnedStyle,
                            }}
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
                      height: `${rowVirtualizer.getTotalSize()}px`,
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                      const row = table.getRowModel().rows[virtualRow.index];
                      return (
                        <TableRow
                          key={row.id}
                          data-index={virtualRow.index}
                          ref={(node) => rowVirtualizer.measureElement(node)}
                          data-state={row.getIsSelected() && "selected"}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${virtualRow.size}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                          }}
                        >
                          {row.getVisibleCells().map((cell) => {
                            const { baseStyle, pinnedStyle, pinned, lastPinned } =
                              getColumnLayoutStyles(
                                (cell.column.columnDef.meta as ColumnStyleMeta) ?? {},
                                cell.column as ColumnWithPinning,
                              );
                            return (
                              <TableCell
                                key={cell.id}
                                data-cell-id={cell.id}
                                className={cn(
                                  "relative",
                                  pinned && "bg-background",
                                  lastPinned === "left" && "border-r",
                                  lastPinned === "right" && "border-l",
                                )}
                                style={{
                                  ...baseStyle,
                                  ...pinnedStyle,
                                }}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext(),
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </div>
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRowSelection({})}
                >
                  Clear Selection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```
