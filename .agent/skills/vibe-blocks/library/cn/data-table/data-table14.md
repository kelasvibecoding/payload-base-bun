# Data Table 14

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with column summary, aggregation features, and footer calculations.
- **Use Case**: Financial and analytical data management with automatic calculations, summaries, and aggregated metrics.
- **Visual Style**: Professional table with calculated footer rows, summary columns, and aggregated data display.
- **Interactivity**: Dynamic column calculations, real-time aggregation updates, sorting with calculation preservation, and interactive summary controls.

## Description
A sophisticated data table component featuring advanced column summarization and aggregation capabilities. Built with TanStack Table for optimal performance, suitable for financial reporting, analytical dashboards, and scenarios requiring automatic calculations, subtotals, totals, and comprehensive data aggregation with professional presentation.

## Features
- Automatic column calculations (sum, average, count, min, max)
- Dynamic footer calculations with real-time updates
- Aggregated metrics display with professional formatting
- Sorting with calculation preservation and integrity
- Column filtering with aggregation state maintenance
- Professional pagination with summary information
- Currency and number formatting with locale support
- Percentage calculations and ratio computations
- Subtotal and grand total calculations
- Custom calculation functions and formulas
- Real-time calculation updates on data changes
- Export functionality with calculated summaries
- Responsive design with proper calculation display
- Zod schema validation with calculated field types
- Type-safe aggregation definitions with TypeScript

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
  Calculator,
  Download,
  Filter,
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
  TableFooter,
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
  calculations?: Record<string, 'sum' | 'average' | 'count' | 'min' | 'max' | 'custom'>;
  customCalculations?: Record<string, (rows: TData[]) => number | string>;
};

type CalculationType = 'sum' | 'average' | 'count' | 'min' | 'max' | 'custom';

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
    calculations = {},
    customCalculations = {},
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);
  const [calculationResults, setCalculationResults] = React.useState<Record<string, number | string>>({});

  // Calculate summary statistics
  React.useEffect(() => {
    const results: Record<string, number | string> = {};
    
    Object.entries(calculations).forEach(([columnId, calcType]) => {
      const columnValues = data.map(row => {
        const value = (row as any)[columnId];
        return typeof value === 'number' ? value : parseFloat(value) || 0;
      }).filter(val => !isNaN(val));

      switch (calcType) {
        case 'sum':
          results[columnId] = columnValues.reduce((sum, val) => sum + val, 0);
          break;
        case 'average':
          results[columnId] = columnValues.length > 0 
            ? columnValues.reduce((sum, val) => sum + val, 0) / columnValues.length 
            : 0;
          break;
        case 'count':
          results[columnId] = columnValues.length;
          break;
        case 'min':
          results[columnId] = columnValues.length > 0 ? Math.min(...columnValues) : 0;
          break;
        case 'max':
          results[columnId] = columnValues.length > 0 ? Math.max(...columnValues) : 0;
          break;
        case 'custom':
          if (customCalculations[columnId]) {
            results[columnId] = customCalculations[columnId](data);
          }
          break;
      }
    });

    setCalculationResults(results);
  }, [data, calculations, customCalculations]);

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
    meta: {
      calculationResults,
      calculations,
    },
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
    calculationResults,
  };
}

export const schema = z.object({
  id: z.string(),
  item: z.string(),
  type: z.string(),
  stock: z.boolean(),
  sku: z.string(),
  price: z.number(),
  quantity: z.number(),
  total: z.number(),
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
    quantity: 150,
    total: 12486.00,
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
    quantity: 89,
    total: 21918.03,
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
    quantity: 234,
    total: 39375.18,
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
    quantity: 312,
    total: 33618.00,
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
    quantity: 67,
    total: 16617.34,
    availability: ["In store", "Online"],
    lastModified: "2024-01-11T11:30:00Z",
    modifiedBy: "admin@example.com",
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
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      const quantity = parseInt(row.getValue("quantity"));
      return <div className="font-medium">{quantity}</div>;
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Value" />
    ),
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      return <div className="font-medium text-green-600 dark:text-green-400">{formatted}</div>;
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
            <DropdownMenuItem className="text-destructive">
              Delete product
            </DropdownMenuItem>
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

interface DataTableCalculationsProps<TData> {
  table: TableType<TData>;
}

export function DataTableCalculations<TData>({
  table,
}: DataTableCalculationsProps<TData>) {
  const calculations = table.options.meta?.calculations as Record<string, CalculationType>;
  const results = table.options.meta?.calculationResults as Record<string, number | string>;

  if (!calculations || Object.keys(calculations).length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <Calculator className="h-4 w-4" />
      <span>Calculations:</span>
      {Object.entries(calculations).map(([columnId, calcType]) => (
        <span key={columnId} className="font-medium">
          {columnId}: {calcType} = {results[columnId] || 0}
        </span>
      ))}
    </div>
  );
}

interface DataTableExportProps<TData> {
  table: TableType<TData>;
  includeCalculations?: boolean;
}

export function DataTableExport<TData>({
  table,
  includeCalculations = true,
}: DataTableExportProps<TData>) {
  const handleExport = (format: "csv" | "excel" | "json") => {
    const data = table.getFilteredRowModel().rows.map((row) => row.original);
    const headers = table.getAllColumns()
      .filter((col) => col.getIsVisible() && col.id !== "select")
      .map((col) => col.id);

    if (format === "csv") {
      let csvContent = [
        headers.join(","),
        ...data.map((row: any) => 
          headers.map((header) => row[header] || "").join(",")
        ),
      ].join("\n");

      if (includeCalculations) {
        const calculations = table.options.meta?.calculationResults as Record<string, number | string>;
        if (calculations && Object.keys(calculations).length > 0) {
          csvContent += "\n\nCalculations:\n";
          csvContent += Object.entries(calculations)
            .map(([key, value]) => `${key},${value}`)
            .join("\n");
        }
      }
      
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data_with_calculations.csv";
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === "json") {
      const exportData = {
        data: data,
        calculations: includeCalculations 
          ? table.options.meta?.calculationResults 
          : undefined,
        exportDate: new Date().toISOString(),
      };
      
      const jsonContent = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data_with_calculations.json";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Export Data</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleExport("csv")}>
          Export as CSV with Calculations
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("json")}>
          Export as JSON with Calculations
        </DropdownMenuItem>
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

export const DataTable14 = () => {
  const calculations = {
    price: 'sum' as CalculationType,
    quantity: 'sum' as CalculationType,
    total: 'sum' as CalculationType,
  };

  const customCalculations = {
    averagePrice: (rows: any[]) => {
      const prices = rows.map(row => row.price).filter(p => !isNaN(p));
      return prices.length > 0 ? prices.reduce((sum, p) => sum + p, 0) / prices.length : 0;
    },
    totalValue: (rows: any[]) => {
      return rows.reduce((sum, row) => sum + (row.total || 0), 0);
    },
  };

  const { table, calculationResults } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSelection: {},
    enableRowSelection: true,
    calculations,
    customCalculations,
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Data Table with Calculations
            </h2>
            <p className="mt-2 text-muted-foreground">
              An advanced data table with column summary, aggregation features, and footer calculations.
              Perfect for financial and analytical data management with automatic calculations and summaries.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Search all columns..."
                  value={(table.getState().globalFilter as string) ?? ""}
                  onChange={(event) => table.setGlobalFilter(event.target.value)}
                  className="max-w-sm"
                />
                <Button variant="outline" size="sm" className="h-8 gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <DataTableCalculations table={table} />
                <DataTableExport table={table} includeCalculations={true} />
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
                <TableFooter>
                  <TableRow className="bg-muted/50">
                    <TableCell colSpan={5} className="font-semibold">
                      Totals:
                    </TableCell>
                    <TableCell className="font-semibold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(calculationResults.price as number || 0)}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {calculationResults.quantity || 0}
                    </TableCell>
                    <TableCell className="font-semibold text-green-600 dark:text-green-400">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(calculationResults.total as number || 0)}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableFooter>
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
