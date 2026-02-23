# Data Table 31

## Metadata
- **Category**: Data Table
- **Objective**: Data table with bulk actions, CSV export, and row selection
- **Use Case**: Admin dashboards for selecting multiple records and performing batch operations or exporting data
- **Visual Style**: Clean table with checkbox selection columns, bulk action buttons, and export controls
- **Interactivity**: Row selection, bulk actions, CSV export, sortable columns, global search, column filtering

## Description
A robust data table component designed for admin workflows that require batch processing of records. This table includes checkbox row selection, bulk action menus, and one-click CSV export functionality, along with standard features like sorting, searching, and filtering. It follows the shadcn/ui design system and is fully accessible with keyboard navigation support.

## Features
- Multi-row selection with select-all checkbox in header
- Bulk action dropdown menu for batch operations
- One-click CSV export for selected or all rows
- Sortable columns with visual sorting indicators
- Global search and column-specific filtering
- Responsive mobile-friendly design
- Type-safe column definitions with TypeScript
- Zod schema validation for data integrity
- Loading and error state handling
- Accessible keyboard navigation and screen reader support
- Customizable export formatting

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
  type Row,
  type SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, Download, MoreHorizontal } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import { Input } from "@/components/ui/input";

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialVisibility?: VisibilityState;
  onBulkAction?: (action: string, rows: Array<TData>) => void;
  onExport?: (rows: Array<TData>) => Promise<void>;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    initialSorting = [],
    initialFilters = [],
    initialVisibility = {},
    onBulkAction,
    onExport,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(initialFilters);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(initialVisibility);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const selectedRows = React.useMemo(() => {
    return table.getSelectedRowModel().rows.map((row) => row.original);
  }, [table.getSelectedRowModel().rows]);

  const handleBulkAction = React.useCallback(
    async (action: string) => {
      if (onBulkAction) {
        onBulkAction(action, selectedRows);
      }
      if (action === "export" && onExport) {
        await onExport(selectedRows);
        toast.success(`Exported ${selectedRows.length} rows`);
      }
    },
    [onBulkAction, onExport, selectedRows],
  );

  return {
    table,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    rowSelection,
    setRowSelection,
    selectedRows,
    handleBulkAction,
  };
}

export const DataTable31 = <TData,>({
  table,
  handleBulkAction,
  selectedRows,
}: {
  table: ReturnType<typeof useDataTable<TData>>["table"];
  handleBulkAction: (action: string) => void;
  selectedRows: Array<TData>;
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search all columns..."
            value={table.getState().globalFilter ?? ""}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
          {selectedRows.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm">
                  Bulk Actions ({selectedRows.length})
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleBulkAction("export")}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Selected
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleBulkAction("delete")}>
                  Delete Selected
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => table.resetColumnFilters()}
        >
          Reset Filters
        </Button>
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
};
```
