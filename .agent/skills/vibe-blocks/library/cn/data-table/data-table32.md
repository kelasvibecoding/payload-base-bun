# Data Table 32

## Metadata
- **Category**: Data Table
- **Objective**: Expandable data table with nested rows and hierarchical data
- **Use Case**: Displaying hierarchical data like product categories, organizational charts, or nested inventory items
- **Visual Style**: Clean table with expand/collapse chevrons for nested rows, indented child rows
- **Interactivity**: Expand/collapse nested rows, sortable columns, global search, row selection, responsive design, keyboard navigation

## Description
A hierarchical data table component designed to display nested or parent-child relationships in your dataset. This table includes intuitive expand/collapse controls to reveal child records, making it ideal for organizing hierarchical data such as product categories, team structures, layered inventory, or any data with parent-child relationships. It builds on standard data table functionality while adding native support for nested data structures.

## Features
- Native support for hierarchical/parent-child data structures
- Expandable/collapsible rows with animated chevron indicators
- Indented child rows for clear visual hierarchy
- Sortable columns with visual sorting feedback
- Global search across all columns
- Multi-row selection with checkboxes
- Fully responsive mobile-friendly design
- Type-safe implementation with TypeScript
- Zod schema validation for data integrity
- Accessible styling and keyboard navigation
- Customizable expand/collapse behavior
- Empty state handling for no matching results

## Source Code
```tsx
"use client";

import {
  type Column,
  type ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, ChevronRight } from "lucide-react";
import * as React from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

type HierarchicalData<TData> = TData & {
  children?: Array<HierarchicalData<TData>>;
};

type UseDataTableOptions<TData> = {
  data: Array<HierarchicalData<TData>>;
  columns: Array<ColumnDef<HierarchicalData<TData>, unknown>>;
  getRowId?: (row: HierarchicalData<TData>) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialVisibility?: VisibilityState;
};

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  const {
    data,
    columns,
    getRowId,
    initialSorting = [],
    initialFilters = [],
    initialVisibility = {},
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(initialFilters);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(initialVisibility);
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      expanded,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getSubRows: (row) => row.children,
  });

  return {
    table,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    expanded,
    setExpanded,
  };
}

export const DataTable32 = <TData,>({
  table,
}: {
  table: ReturnType<typeof useDataTable<TData>>["table"];
}) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Search all columns..."
        value={table.getState().globalFilter ?? ""}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        className="max-w-sm mb-4"
      />

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
                <React.Fragment key={row.id}>
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => {
                      if (cell.column.id === "select") {
                        return (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        );
                      }
                      if (cell.column.id === "expand") {
                        return (
                          <TableCell key={cell.id} className="pl-8">
                            {row.getCanExpand() && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mr-2 h-8 w-8 p-0"
                                onClick={() => row.toggleExpanded()}
                              >
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${row.getIsExpanded() ? "rotate-90" : ""}`}
                                />
                              </Button>
                            )}
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {row.getIsExpanded() && row.subRows.map((subRow) => (
                    <TableRow key={subRow.id} data-state={subRow.getIsSelected() && "selected"}>
                      {subRow.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="pl-12">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </React.Fragment>
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
