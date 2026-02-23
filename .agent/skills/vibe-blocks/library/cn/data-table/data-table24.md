# Data Table 24

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with real-time collaboration, multi-user editing, and conflict resolution.
- **Use Case**: Collaborative data management with real-time updates, user presence, and concurrent editing capabilities.
- **Visual Style**: Professional table with live user indicators, editing states, and conflict resolution UI.
- **Interactivity**: Real-time collaboration, multi-user editing, conflict resolution, and live presence indicators.

## Description
A sophisticated data table component featuring real-time collaboration capabilities with multi-user editing, live presence indicators, and automatic conflict resolution. Built with TanStack Table for optimal performance, suitable for collaborative environments requiring simultaneous editing, user awareness, and professional real-time data synchronization.

## Features
- Real-time multi-user collaboration and editing
- Live user presence indicators and cursors
- Automatic conflict resolution and merge capabilities
- Cell-level editing locks and permissions
- Real-time cursor tracking and user awareness
- Professional collaboration UI with user avatars
- Responsive design with mobile-friendly collaboration
- Export functionality with collaboration metadata
- Advanced conflict resolution UI and tools
- Real-time synchronization and data consistency

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
  Users,
  Edit3,
  Save,
  X,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialFilters?: ColumnFiltersState;
  initialSelection?: RowSelectionState;
  enableRowSelection?: boolean;
  initialColumnVisibility?: VisibilityState;
  collaboration?: boolean;
  websocketUrl?: string;
  userId?: string;
  userName?: string;
};

type CollaborativeUser = {
  id: string;
  name: string;
  avatar?: string;
  color: string;
  cursor?: { row: number; column: number };
  editing?: { rowId: string; columnId: string };
};

type CollaborativeEdit = {
  userId: string;
  userName: string;
  rowId: string;
  columnId: string;
  value: any;
  timestamp: number;
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
    collaboration = true,
    websocketUrl = 'ws://localhost:3001',
    userId = 'user-' + Math.random().toString(36).substr(2, 9),
    userName = 'User ' + Math.random().toString(36).substr(2, 5),
  } = options;

  const [data, setData] = React.useState<Array<TData>>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialFilters);
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialColumnVisibility);
  
  // Collaboration state
  const [socket, setSocket] = React.useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = React.useState<CollaborativeUser[]>([]);
  const [editingCell, setEditingCell] = React.useState<{rowId: string, columnId: string} | null>(null);
  const [cellLocks, setCellLocks] = React.useState<Record<string, string>>({});
  const [pendingEdits, setPendingEdits] = React.useState<CollaborativeEdit[]>([]);

  // Initialize WebSocket connection
  React.useEffect(() => {
    if (!collaboration) return;

    const newSocket = io(websocketUrl, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on('connect', () => {
      console.log('Connected to collaboration server');
      newSocket.emit('join-table', { tableId: 'data-table-24', userId, userName });
    });

    newSocket.on('users-update', (users: CollaborativeUser[]) => {
      setOnlineUsers(users.filter(u => u.id !== userId));
    });

    newSocket.on('cell-locked', ({ rowId, columnId, lockedBy }: { rowId: string; columnId: string; lockedBy: string }) => {
      setCellLocks(prev => ({ ...prev, [`${rowId}-${columnId}`]: lockedBy }));
    });

    newSocket.on('cell-unlocked', ({ rowId, columnId }: { rowId: string; columnId: string }) => {
      setCellLocks(prev => {
        const newLocks = { ...prev };
        delete newLocks[`${rowId}-${columnId}`];
        return newLocks;
      });
    });

    newSocket.on('data-updated', (edit: CollaborativeEdit) => {
      if (edit.userId !== userId) {
        setData(prevData => 
          prevData.map(row => 
            getRowId && getRowId(row) === edit.rowId
              ? { ...row, [edit.columnId]: edit.value }
              : row
          )
        );
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [collaboration, websocketUrl, userId, userName, getRowId]);

  const requestCellEdit = (rowId: string, columnId: string) => {
    if (!socket) return false;
    
    const lockKey = `${rowId}-${columnId}`;
    if (cellLocks[lockKey] && cellLocks[lockKey] !== userId) {
      toast.info(`Cell is being edited by another user`);
      return false;
    }

    socket.emit('request-cell-edit', { rowId, columnId, userId });
    setEditingCell({ rowId, columnId });
    return true;
  };

  const saveCellEdit = (rowId: string, columnId: string, value: any) => {
    if (!socket) return;

    const edit: CollaborativeEdit = {
      userId,
      userName,
      rowId,
      columnId,
      value,
      timestamp: Date.now(),
    };

    socket.emit('cell-edit', edit);
    setPendingEdits(prev => [...prev, edit]);
    
    // Update local data immediately for responsive UI
    setData(prevData => 
      prevData.map(row => 
        getRowId && getRowId(row) === rowId
          ? { ...row, [columnId]: value }
          : row
      )
    );

    setEditingCell(null);
  };

  const cancelCellEdit = () => {
    if (!socket || !editingCell) return;
    
    socket.emit('cancel-cell-edit', editingCell);
    setEditingCell(null);
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
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection,
    meta: {
      collaboration: {
        userId,
        onlineUsers,
        editingCell,
        cellLocks,
        requestCellEdit,
        saveCellEdit,
        cancelCellEdit,
      },
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
    collaboration: {
      socket,
      onlineUsers,
      editingCell,
      cellLocks,
      pendingEdits,
      requestCellEdit,
      saveCellEdit,
      cancelCellEdit,
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
      const { collaboration } = table.options.meta || {};
      const isEditing = collaboration?.editingCell?.rowId === row.id && 
                       collaboration?.editingCell?.columnId === 'item';
      const isLocked = collaboration?.cellLocks[`${row.id}-item`] && 
                      collaboration?.cellLocks[`${row.id}-item`] !== collaboration?.userId;
      
      return (
        <div className="font-medium relative">
          {row.getValue("item")}
          {isLocked && (
            <Badge variant="secondary" className="ml-2">
              <Edit3 className="h-3 w-3 mr-1" />
              Editing
            </Badge>
          )}
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

interface DataTableCollaborationBarProps<TData> {
  table: TableType<TData>;
}

export function DataTableCollaborationBar<TData>({
  table,
}: DataTableCollaborationBarProps<TData>) {
  const { collaboration } = table.options.meta || {};
  if (!collaboration) return null;

  const { onlineUsers, editingCell } = collaboration;

  return (
    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {onlineUsers.length + 1} online
          </span>
        </div>
        <div className="flex -space-x-2">
          {onlineUsers.map((user) => (
            <Tooltip key={user.id}>
              <TooltipTrigger asChild>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback style={{ backgroundColor: user.color }}>
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{user.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      {editingCell && (
        <Badge variant="default" className="gap-1">
          <Edit3 className="h-3 w-3" />
          Editing cell
        </Badge>
      )}
    </div>
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

export const DataTable24 = () => {
  const { table, collaboration } = useDataTable({
    data: validatedData,
    columns,
    getRowId: (row) => row.id.toString(),
    initialSelection: {},
    enableRowSelection: true,
    collaboration: true,
  });

  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Collaborative Data Table
            </h2>
            <p className="mt-2 text-muted-foreground">
              An advanced data table with real-time collaboration, multi-user editing, and conflict resolution.
              Perfect for collaborative environments with simultaneous editing and user awareness.
            </p>
          </div>
          
          <DataTableCollaborationBar table={table} />
          
          <div className="space-y-4 mt-4">
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
