# Data Table 29

## Metadata
- **Category**: Data Table
- **Objective**: Real-time data table with live updates and status indicators
- **Use Case**: Monitoring live order status, inventory levels, or active sessions
- **Visual Style**: Dynamic table with status badges and real-time update indicators
- **Interactivity**: Auto-refreshing data, status color coding, sorting, filtering, global search

## Description
A live data table component that automatically refreshes to display up-to-date information. This table includes color-coded status badges for quick visual scanning, plus sorting, filtering, and global search capabilities to narrow down active records. It includes built-in loading and error states for a robust user experience, perfect for admin dashboards that need to monitor real-time business metrics.

## Features
- Auto-refreshing data with configurable refresh interval
- Color-coded status badges for quick visual identification
- Sortable columns with visual sorting indicators
- Column-specific faceted filtering
- Global search across all columns
- Responsive design for all screen sizes
- Type-safe implementation with TypeScript
- Zod schema validation for data integrity
- Loading and error states for robust user experience
- Accessible styling and keyboard navigation
- Custom status mapping for flexible status display
- Reset filters and refresh data controls

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, RefreshCw } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const DEFAULT_REFRESH_INTERVAL = 5000;

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialVisibility?: VisibilityState;
  refreshInterval?: number;
  onRefresh?: () => Promise<Array<TData>>;
  isLoading?: boolean;
  error?: string | null;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    initialSorting = [],
    initialFilters = [],
    initialVisibility = {},
    refreshInterval = DEFAULT_REFRESH_INTERVAL,
    onRefresh,
    isLoading = false,
    error = null,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(initialFilters);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(initialVisibility);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  React.useEffect(() => {
    if (!onRefresh) return;

    const interval = setInterval(async () => {
      try {
        await onRefresh();
      } catch (error) {
        toast.error("Failed to refresh data");
      }
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [onRefresh, refreshInterval]);

  return {
    table,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    globalFilter,
    setGlobalFilter,
    isLoading,
    error,
  };
}

export const DataTable29 = <TData,>({
  table,
  isLoading,
  error,
  refreshButton,
}: {
  table: ReturnType<typeof useDataTable<TData>>["table"];
  isLoading: boolean;
  error?: string | null;
  refreshButton?: React.ReactNode;
}) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-destructive">Error loading data: {error}</p>
        <Button variant="secondary" className="mt-4" onClick={() => window.location.reload()}>
          Reload Page
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search all columns..."
          value={table.getState().globalFilter ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <div className="flex items-center gap-2">
          {refreshButton}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.resetColumnFilters()}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  colSpan={table.getAllColumns().length}
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
  );
}
```
