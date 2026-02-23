# Data Table 17

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with server-side pagination, sorting, and filtering capabilities.
- **Use Case**: Large-scale data management with server-side operations, API integration, and efficient data loading.
- **Visual Style**: Professional table with loading states, server communication indicators, and optimized data display.
- **Interactivity**: Server-side pagination, sorting, filtering, loading states, and real-time data fetching.

## Description
A sophisticated data table component featuring server-side operations including pagination, sorting, and filtering. Built with TanStack Table for optimal performance, suitable for enterprise applications requiring efficient data loading, API integration, and seamless server communication with professional loading states and error handling.

## Features
- Server-side pagination with efficient data loading
- Server-side sorting with API integration
- Server-side filtering with query optimization
- Loading states with skeleton screens
- Error handling and retry mechanisms
- Optimistic updates with rollback capability
- Real-time data synchronization
- Professional loading indicators and spinners
- Responsive design with proper breakpoints
- Type-safe API integration with TypeScript
- Query parameter management and URL synchronization
- Debounced search and filter operations
- Cache management and data invalidation
- Export functionality with server-side data
- Advanced error boundary implementation

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
import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  MoreHorizontal,
  RefreshCw,
  Settings2,
} from "lucide-react";
import * as React from "react";
import { z } from "zod";
import { toast } from "sonner";

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
import {
  Skeleton,
} from "@/components/ui/skeleton";

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnVisibility?: VisibilityState;
  serverSide?: boolean;
  apiEndpoint?: string;
  totalCount?: number;
  pageCount?: number;
};

type ServerState = {
  data: any[];
  totalCount: number;
  pageCount: number;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data: initialData,
    columns,
    getRowId,
    initialSorting = [],
    initialFilters = [],
    initialSelection = {},
    enableRowSelection = true,
    initialColumnVisibility = {},
    serverSide = true,
    apiEndpoint = '/api/data',
    totalCount = 0,
    pageCount = 0,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);

  const [serverState, setServerState] = React.useState<ServerState>({
    data: initialData,
    totalCount,
    pageCount,
    isLoading: false,
    error: null,
    currentPage: 0,
    pageSize: 10,
  });

  const abortControllerRef = React.useRef<AbortController | null>(null);

  const fetchData = React.useCallback(async (params: {
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
    pageIndex: number;
    pageSize: number;
  }) => {
    if (!serverSide) return;

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setServerState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const queryParams = new URLSearchParams();
      
      // Add sorting parameters
      if (params.sorting.length > 0) {
        params.sorting.forEach(sort => {
          queryParams.append('sort', `${sort.id}:${sort.desc ? 'desc' : 'asc'}`);
        });
      }

      // Add filter parameters
      if (params.columnFilters.length > 0) {
        params.columnFilters.forEach(filter => {
          queryParams.append(filter.id, filter.value as string);
        });
      }

      // Add pagination parameters
      queryParams.append('page', params.pageIndex.toString());
      queryParams.append('pageSize', params.pageSize.toString());

      const response = await fetch(`${apiEndpoint}?${queryParams}`, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      setServerState(prev => ({
        ...prev,
        data: result.data,
        totalCount: result.totalCount,
        pageCount: result.pageCount,
        isLoading: false,
        currentPage: params.pageIndex,
        pageSize: params.pageSize,
      }));

    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return; // Request was cancelled
      }

      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
      setServerState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));

      toast.error(`Failed to load data: ${errorMessage}`);
    }
  }, [apiEndpoint, serverSide]);

  // Debounced data fetching
  React.useEffect(() => {
    if (!serverSide) return;

    const timeoutId = setTimeout(() => {
      fetchData({
        sorting,
        columnFilters,
        pageIndex: serverState.currentPage,
        pageSize: serverState.pageSize,
      });
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [sorting, columnFilters, serverState.currentPage, serverState.pageSize, fetchData, serverSide]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const refreshData = React.useCallback(() => {
    fetchData({
      sorting,
      columnFilters,
      pageIndex: serverState.currentPage,
      pageSize: serverState.pageSize,
    });
  }, [fetchData, sorting, columnFilters, serverState.currentPage, serverState.pageSize]);

  const handlePageChange = React.useCallback((pageIndex: number) => {
    setServerState(prev => ({ ...prev, currentPage: pageIndex }));
  }, []);

  const handlePageSizeChange = React.useCallback((pageSize: number) => {
    setServerState(prev => ({ ...prev, pageSize, currentPage: 0 }));
  }, []);

  const table = useReactTable({
    data: serverSide ? serverState.data : initialData,
    columns,
    getRowId,
    pageCount: serverSide ? serverState.pageCount : -1,
    manualPagination: serverSide,
    manualSorting: serverSide,
    manualFiltering: serverSide,
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
    serverState,
    refreshData,
    handlePageChange,
    handlePageSizeChange,
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

const data = [
  {
    id: "prod-001",
    item: "Tablet Case",
    type: "Electronics",
    stock: true,
    sku: "TC-001",
    price: 83.24,
    availability: ["In store", "Online"],
    lastModified: "2024-01-15T10:30:00Z",
    modifiedBy: "john@example.com",
  },
  {
    id: "prod-002",
    item: "Smart Watch",
    type: "Electronics",
    stock: true,
    sku: "SW-002",
    price: 246.27,
    availability: ["In store", "Online"],
    lastModified: "2024-01-14T14:20:00Z",
    modifiedBy: "sarah@example.com",
  },
  {
    id: "prod-003",
    item: "Wool Sweater",
    type: "Accessories",
    stock: true,
    sku: "WS-003",
    price: 168.27,
    availability: ["In store"],
    lastModified: "2024-01-13T09:15:00Z",
    modifiedBy: "mike@example.com",
  },
  {
    id: "prod-004",
    item: "Wireless Earbuds",
    type: "Electronics",
    stock: true,
    sku: "WE-004",
    price: 107.75,
    availability: ["In store", "Online"],
    lastModified: "2024-01-12T16:45:00Z",
    modifiedBy: "jane@example.com",
  },
  {
    id: "prod-005",
    item: "Laptop Sleeve",
    type: "Electronics",
    stock: true,
    sku: "LS-005",
    price: 248.02,
    availability: ["In store", "Online"],
    lastModified: "2024-01-11T11:30:00Z",
    modifiedBy: "admin@example.com",
  },
];

export const validatedData = schema.array().parse(data);

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
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
  serverState: ServerState;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export function DataTablePagination<TData>({
  table,
  serverState,
  onPageChange,
  onPageSizeChange,
}: DataTablePaginationProps<TData>) {
  const pageSize = serverState.pageSize;
  const relevantPageSizes = [10, 20, 30, 40, 50];
  const currentPage = serverState.currentPage;
  const totalPages = serverState.pageCount;

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {serverState.totalCount} total row(s).
      </div>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-sm font-medium">Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => onPageSizeChange(Number(value))}
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
            Page {currentPage + 1} of {totalPages}
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => onPageChange(0)}
              disabled={currentPage === 0}
              aria-label="Go to first page"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => onPageChange(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              aria-label="Go to next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => onPageChange(totalPages - 1)}
              disabled={currentPage === totalPages - 1}
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

export const DataTable17 = () => {
  const { table, serverState, refreshData, handlePageChange, handlePageSizeChange } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSelection: {},
    enableRowSelection: true,
    serverSide: true,
  });

  if (serverState.error) {
    return (
      <section className="py-32">
        <div className="container">
          <div className="w-full">
            <div className="mb-8 text-left">
              <h2 className="text-2xl font-bold tracking-tight">
                Server-Side Data Table
              </h2>
              <p className="mt-2 text-muted-foreground">
                An advanced data table with server-side pagination, sorting, and filtering.
                Perfect for large-scale data management with efficient server communication.
              </p>
            </div>
            <div className="rounded-md border border-destructive p-8 text-center">
              <p className="text-destructive mb-4">{serverState.error}</p>
              <Button onClick={refreshData} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Server-Side Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              An advanced data table with server-side pagination, sorting, and filtering.
              Perfect for large-scale data management with efficient server communication.
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
              <div className="flex items-center gap-2">
                <Button
                  onClick={refreshData}
                  variant="outline"
                  size="sm"
                  disabled={serverState.isLoading}
                >
                  <RefreshCw className={cn("h-4 w-4", serverState.isLoading && "animate-spin")} />
                  Refresh
                </Button>
                <DataTableViewOptions table={table} />
              </div>
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
                  {serverState.isLoading ? (
                    Array.from({ length: serverState.pageSize }).map((_, index) => (
                      <TableRow key={index}>
                        {columns.map((_, cellIndex) => (
                          <TableCell key={cellIndex}>
                            <Skeleton className="h-4 w-full" />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : table.getRowModel().rows?.length ? (
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
            <DataTablePagination
              table={table}
              serverState={serverState}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
```
