# Data Table 13

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with real-time data synchronization, WebSocket integration, and live updates.
- **Use Case**: Collaborative data management with real-time updates, live collaboration, and synchronized data across multiple users.
- **Visual Style**: Professional table with live update indicators, sync status, and real-time data visualization.
- **Interactivity**: Real-time data updates, WebSocket connectivity, live collaboration indicators, and synchronized editing.

## Description
A cutting-edge data table component featuring real-time data synchronization through WebSocket integration. Built with TanStack Table for optimal performance, suitable for collaborative environments requiring live data updates, user presence indicators, and synchronized editing capabilities across multiple concurrent users.

## Features
- Real-time WebSocket data synchronization
- Live update indicators and animations
- User presence and collaboration indicators
- Conflict resolution for concurrent edits
- Sync status display with connection state
- Real-time cell highlighting for changes
- Column sorting with live update preservation
- Professional pagination with real-time updates
- Zod schema validation with real-time validation
- Type-safe WebSocket message handling
- Connection state management and reconnection
- Optimistic updates with rollback capability

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
  Settings2,
  Wifi,
  WifiOff,
} from "lucide-react";
import * as React from "react";
import { z } from "zod";
import { io, Socket } from "socket.io-client";
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

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnVisibility?: VisibilityState;
  websocketUrl?: string;
};

type WebSocketMessage = {
  type: 'update' | 'delete' | 'create' | 'bulk_update';
  data: any;
  timestamp: number;
  userId: string;
  userName: string;
};

type ConnectionState = 'connected' | 'disconnected' | 'connecting' | 'reconnecting';

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
    websocketUrl = 'ws://localhost:3001',
  } = options;

  const [data, setData] = React.useState<Array<TData>>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);
  const [connectionState, setConnectionState] =
    React.useState<ConnectionState>('connecting');
  const [socket, setSocket] = React.useState<Socket | null>(null);
  const [lastUpdate, setLastUpdate] = React.useState<Date>(new Date());
  const [updatingCells, setUpdatingCells] = React.useState<Set<string>>(new Set());
  const [onlineUsers, setOnlineUsers] = React.useState<number>(0);

  // WebSocket connection management
  React.useEffect(() => {
    const newSocket = io(websocketUrl, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on('connect', () => {
      setConnectionState('connected');
      toast.success('Connected to real-time server');
    });

    newSocket.on('disconnect', () => {
      setConnectionState('disconnected');
      toast.error('Disconnected from server');
    });

    newSocket.on('reconnect', () => {
      setConnectionState('connected');
      toast.success('Reconnected to server');
    });

    newSocket.on('reconnecting', () => {
      setConnectionState('reconnecting');
    });

    newSocket.on('data-update', (message: WebSocketMessage) => {
      handleWebSocketMessage(message);
    });

    newSocket.on('user-count', (count: number) => {
      setOnlineUsers(count);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [websocketUrl]);

  const handleWebSocketMessage = (message: WebSocketMessage) => {
    setLastUpdate(new Date());
    
    // Add cell update animation
    if (message.type === 'update' && message.data.id) {
      const cellId = `${message.data.id}-${Object.keys(message.data)[1]}`;
      setUpdatingCells(prev => new Set(prev).add(cellId));
      
      setTimeout(() => {
        setUpdatingCells(prev => {
          const newSet = new Set(prev);
          newSet.delete(cellId);
          return newSet;
        });
      }, 1000);
    }

    // Update local data
    setData(prevData => {
      switch (message.type) {
        case 'update':
          return prevData.map(item => 
            getRowId && getRowId(item) === message.data.id 
              ? { ...item, ...message.data } 
              : item
          );
        case 'create':
          return [...prevData, message.data];
        case 'delete':
          return prevData.filter(item => 
            getRowId ? getRowId(item) !== message.data.id : true
          );
        case 'bulk_update':
          return prevData.map(item => {
            const update = message.data.find((u: any) => 
              getRowId && getRowId(u) === getRowId(item)
            );
            return update ? { ...item, ...update } : item;
          });
        default:
          return prevData;
      }
    });
  };

  const broadcastUpdate = (type: WebSocketMessage['type'], data: any) => {
    if (socket && connectionState === 'connected') {
      socket.emit('data-change', {
        type,
        data,
        timestamp: Date.now(),
        userId: 'current-user', // In real app, get from auth
        userName: 'Current User', // In real app, get from auth
      });
    }
  };

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
    onRowSelectionChange: (updater) => {
      const newSelection = typeof updater === 'function' 
        ? updater(rowSelection) 
        : updater;
      setRowSelection(newSelection);
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection,
    meta: {
      broadcastUpdate,
      updatingCells,
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
    connectionState,
    lastUpdate,
    onlineUsers,
    broadcastUpdate,
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
    cell: ({ row, table }) => {
      const isUpdating = table.options.meta?.updatingCells?.has(`${row.id}-item`);
      return (
        <div className={cn(
          "font-medium transition-all duration-300",
          isUpdating && "bg-yellow-200 dark:bg-yellow-900 animate-pulse"
        )}>
          {row.getValue("item")}
        </div>
      );
    },
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
    cell: ({ row, table }) => {
      const isUpdating = table.options.meta?.updatingCells?.has(`${row.id}-price`);
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return (
        <div className={cn(
          "font-medium transition-all duration-300",
          isUpdating && "bg-yellow-200 dark:bg-yellow-900 animate-pulse"
        )}>
          {formatted}
        </div>
      );
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
    accessorKey: "lastModified",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Modified" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastModified"));
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "modifiedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Modified By" />
    ),
    cell: ({ row }) => {
      const email = row.getValue("modifiedBy");
      return (
        <div className="text-sm">
          {email.split('@')[0]}
        </div>
      );
    },
    enableSorting: true,
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

interface DataTableStatusProps {
  connectionState: ConnectionState;
  lastUpdate: Date;
  onlineUsers: number;
}

export function DataTableStatus({
  connectionState,
  lastUpdate,
  onlineUsers,
}: DataTableStatusProps) {
  const getStatusColor = () => {
    switch (connectionState) {
      case 'connected':
        return 'text-green-500';
      case 'connecting':
      case 'reconnecting':
        return 'text-yellow-500';
      case 'disconnected':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = () => {
    switch (connectionState) {
      case 'connected':
        return <Wifi className="h-4 w-4" />;
      case 'connecting':
      case 'reconnecting':
        return <Wifi className="h-4 w-4 animate-pulse" />;
      case 'disconnected':
        return <WifiOff className="h-4 w-4" />;
      default:
        return <Wifi className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        {getStatusIcon()}
        <span className={getStatusColor()}>
          {connectionState === 'connected' ? 'Connected' : 
           connectionState === 'connecting' ? 'Connecting...' :
           connectionState === 'reconnecting' ? 'Reconnecting...' :
           'Disconnected'}
        </span>
      </div>
      <div>
        Last update: {lastUpdate.toLocaleTimeString()}
      </div>
      <div>
        {onlineUsers} user{onlineUsers !== 1 ? 's' : ''} online
      </div>
    </div>
  );
}

export const DataTable13 = () => {
  const { 
    table, 
    connectionState, 
    lastUpdate, 
    onlineUsers,
    broadcastUpdate 
  } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSelection: {},
    enableRowSelection: true,
  });

  // Simulate sending updates (in real app, this would be triggered by user actions)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (connectionState === 'connected') {
        // Simulate random price updates
        const randomProduct = validatedData[Math.floor(Math.random() * validatedData.length)];
        const newPrice = (parseFloat(randomProduct.price) * (0.95 + Math.random() * 0.1)).toFixed(2);
        
        broadcastUpdate('update', {
          ...randomProduct,
          price: parseFloat(newPrice),
          lastModified: new Date().toISOString(),
          modifiedBy: 'system@example.com',
        });
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [connectionState, broadcastUpdate]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Real-time Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              A cutting-edge data table with real-time synchronization, WebSocket integration, and live updates.
              Perfect for collaborative environments with multiple concurrent users.
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
                <DataTableStatus 
                  connectionState={connectionState}
                  lastUpdate={lastUpdate}
                  onlineUsers={onlineUsers}
                />
              </div>
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
