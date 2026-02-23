# Data Table 28

## Metadata
- **Category**: Data Table
- **Objective**: Advanced data table with virtual scrolling, cell selection, and CSV export
- **Use Case**: Display large datasets with interactive cell selection, clipboard export, and column pinning
- **Visual Style**: Modern, accessible table layout with pinned columns and virtualized rows
- **Interactivity**: Sortable columns, row/cell selection, column pinning, CSV copy, keyboard navigation

## Description
A high-performance data table component built for handling large datasets efficiently. This table includes virtual row rendering to keep interactions smooth even with thousands of rows, plus full cell and row selection, CSV export to clipboard, and column pinning for fixed headers and columns. It follows the shadcn/ui design system and is fully type-safe with TypeScript.

## Features
- Virtualized row rendering for optimal performance with large datasets
- Single and multi-cell selection with range support via shift+click
- Copy selected cells directly to clipboard as CSV format
- Left/right column pinning with sticky styling
- Sortable columns with visual sorting indicators
- Responsive design that adapts to mobile and desktop screens
- Type-safe column definitions and data validation with Zod
- Accessible keyboard navigation for full keyboard control
- Custom cell formatting and column metadata support
- Row selection with checkboxes
- Dropdown actions for individual rows

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
  CheckCheckIcon,
  CheckCircle,
  ChevronsUpDown,
  Clock,
  LoaderIcon,
  MoreHorizontal,
  Package,
  PieChart,
  RefreshCcw,
} from "lucide-react";
import type { CSSProperties } from "react";
import * as React from "react";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
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
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DEFAULT_ROW_HEIGHT = 56;
const DEFAULT_OVERSCAN = 8;
const NON_NAVIGABLE_COLUMN_IDS = ["select", "actions"];
const DATA_URL =
  "https://raw.githubusercontent.com/zerostaticthemes/shadcnblocks-library-data/refs/heads/main/data/orders-ecommerce-1000.json";

type ColumnMeta = {
  align?: "left" | "center" | "right";
  headerClassName?: string;
  cellClassName?: string;
  className?: string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
};

type ColumnWithPinning = {
  getIsPinned?: () => "left" | "right" | false;
  getIsLastColumn?: (position: "left" | "right") => boolean;
  getIsFirstColumn?: (position: "left" | "right") => boolean;
  getStart?: (position: "left" | "right") => number;
  getAfter?: (position: "left" | "right") => number;
  getSize?: () => number;
};

type ComputedColumnStyles = {
  baseStyle: CSSProperties;
  pinnedStyle: CSSProperties;
  pinned: "left" | "right" | false;
  lastPinned?: "left" | "right";
  alignClass?: string;
};

function computeColumnStyles(
  meta: ColumnMeta,
  columnWithPinning: ColumnWithPinning,
): ComputedColumnStyles {
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

  const pinned = columnWithPinning.getIsPinned?.() ?? false;
  const pinnedStyle: CSSProperties = {};
  let lastPinned: "left" | "right" | undefined;

  if (pinned) {
    pinnedStyle.position = "sticky";
    pinnedStyle.zIndex = 20;

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

  const alignClass =
    meta.align === "center"
      ? "text-center"
      : meta.align === "right"
        ? "text-right"
        : meta.align === "left"
          ? "text-left"
          : undefined;

  return {
    baseStyle,
    pinnedStyle,
    pinned,
    lastPinned,
    alignClass,
  };
}

type CellPosition = {
  rowIndex: number;
  columnId: string;
};

type SelectionRange = {
  start: CellPosition;
  end: CellPosition;
};

type SelectionState = {
  selectedCells: Set<string>;
  selectionRange: SelectionRange | null;
};

type UseDataTableOptions<TData> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, unknown>>;
  getRowId?: (row: TData) => string;
  initialSorting?: SortingState;
  initialGlobalFilter?: string;
  initialFilters?: ColumnFiltersState;
  initialVisibility?: VisibilityState;
  initialSelection?: RowSelectionState;
  initialColumnPinning?: ColumnPinningState;
  enableRowSelection?: boolean;
  rowHeight?: number;
  overscan?: number;
  onLoadingChange?: (loading: boolean) => void;
  onErrorChange?: (error: string | null) => void;
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
    onLoadingChange,
    onErrorChange,
  } = options;

  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);

  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>(initialSelection);
  const [columnPinning, setColumnPinning] =
    React.useState<ColumnPinningState>(initialColumnPinning);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const [focusedCell, setFocusedCell] = React.useState<CellPosition | null>(
    null,
  );
  const [selectionState, setSelectionState] = React.useState<SelectionState>({
    selectedCells: new Set(),
    selectionRange: null,
  });

  const table = useReactTable({
    data,
    columns,
    getRowId,
    state: {
      sorting,
      columnPinning,
      rowSelection,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnPinningChange: setColumnPinning,
    enableRowSelection,
  });

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => rowHeight,
    overscan,
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
  });

  const columnIds = React.useMemo(() => {
    return columns
      .map((column) => {
        if (column.id) return column.id;
        if ("accessorKey" in column && column.accessorKey) {
          return column.accessorKey.toString();
        }
        return undefined;
      })
      .filter((id): id is string => Boolean(id));
  }, [columns]);

  const navigableColumnIds = React.useMemo(() => {
    return columnIds.filter((id) => !NON_NAVIGABLE_COLUMN_IDS.includes(id));
  }, [columnIds]);

  const getCellKey = React.useCallback(
    (rowIndex: number, columnId: string) => `${rowIndex}:${columnId}`,
    [],
  );

  const clearSelection = React.useCallback(() => {
    setSelectionState({ selectedCells: new Set(), selectionRange: null });
  }, []);

  const selectSingleCell = React.useCallback(
    (position: CellPosition) => {
      const cellKey = getCellKey(position.rowIndex, position.columnId);
      setSelectionState({
        selectedCells: new Set([cellKey]),
        selectionRange: {
          start: { ...position },
          end: { ...position },
        },
      });
    },
    [getCellKey],
  );

  const selectRange = React.useCallback(
    (start: CellPosition, end: CellPosition) => {
      const startIndex = columnIds.indexOf(start.columnId);
      const endIndex = columnIds.indexOf(end.columnId);
      if (startIndex === -1 || endIndex === -1) return;

      const minRow = Math.min(start.rowIndex, end.rowIndex);
      const maxRow = Math.max(start.rowIndex, end.rowIndex);
      const minCol = Math.min(startIndex, endIndex);
      const maxCol = Math.max(startIndex, endIndex);

      const selected = new Set<string>();
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          const columnId = columnIds[col];
          if (!columnId) continue;
          selected.add(getCellKey(row, columnId));
        }
      }

      setSelectionState({
        selectedCells: selected,
        selectionRange: { start: { ...start }, end: { ...end } },
      });
    },
    [columnIds, getCellKey],
  );

  const toggleCellSelection = React.useCallback(
    (position: CellPosition) => {
      const cellKey = getCellKey(position.rowIndex, position.columnId);
      setSelectionState((prev) => {
        const next = new Set(prev.selectedCells);
        if (next.has(cellKey)) {
          next.delete(cellKey);
        } else {
          next.add(cellKey);
        }
        return {
          selectedCells: next,
          selectionRange: {
            start: { ...position },
            end: { ...position },
          },
        };
      });
    },
    [getCellKey],
  );

  const focusCell = React.useCallback(
    (rowIndex: number, columnId: string) => {
      setFocusedCell({ rowIndex, columnId });
      rowVirtualizer.scrollToIndex(rowIndex, { align: "auto" });
    },
    [rowVirtualizer],
  );

  const isCellSelected = React.useCallback(
    (rowIndex: number, columnId: string) => {
      return selectionState.selectedCells.has(getCellKey(rowIndex, columnId));
    },
    [selectionState.selectedCells, getCellKey],
  );

  const ensureContainerFocus = React.useCallback(() => {
    const el = tableContainerRef.current;
    if (el && document.activeElement !== el) {
      el.focus();
    }
  }, []);

  const escapeCsvValue = React.useCallback((value: unknown) => {
    if (value === null || value === undefined) return "";
    const str = typeof value === "string" ? value : String(value);
    if (/[",\n]/.test(str)) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }, []);

  const copySelectionToClipboard = React.useCallback(async () => {
    const selectedKeys = Array.from(selectionState.selectedCells);
    if (selectedKeys.length === 0) {
      toast("Select one or more cells to copy.");
      return;
    }

    const parsed = selectedKeys
      .map((key) => {
        const [rowIndexStr, columnId] = key.split(":");
        const rowIndex = Number.parseInt(rowIndexStr, 10);
        return Number.isFinite(rowIndex) && columnId
          ? { rowIndex, columnId }
          : null;
      })
      .filter((entry): entry is { rowIndex: number; columnId: string } =>
        Boolean(entry),
      );

    if (parsed.length === 0) {
      toast("Select one or more cells to copy.");
      return;
    }

    const rowModel = table.getRowModel().rows;
    const selectedRowIndexes = Array.from(
      new Set(parsed.map((item) => item.rowIndex)),
    ).sort((a, b) => a - b);
    const selectedColumnIds = columnIds.filter((id) =>
      parsed.some((item) => item.columnId === id),
    );

    if (selectedRowIndexes.length === 0 || selectedColumnIds.length === 0) {
      toast("Select one or more cells to copy.");
      return;
    }

    const headerRow = selectedColumnIds.join(",");
    const dataRows = selectedRowIndexes
      .map((rowIndex) => {
        const row = rowModel[rowIndex];
        if (!row) return null;

        const values = selectedColumnIds.map((columnId) => {
          const value = row.getValue(columnId);
          return escapeCsvValue(value);
        });

        return values.join(",");
      })
      .filter((row): row is string => Boolean(row));

    const csv = [headerRow, ...dataRows].join("\n");

    try {
      if (
        typeof navigator === "undefined" ||
        !navigator.clipboard ||
        typeof navigator.clipboard.writeText !== "function"
      ) {
        toast.error("Clipboard is not available in this browser");
        return;
      }
      await navigator.clipboard.writeText(csv);
      toast.success(
        `Copied ${selectedKeys.length} selected cell${selectedKeys.length === 1 ? "" : "s"} as CSV`,
      );
    } catch (error) {
      console.error("Failed to copy selection", error);
      toast.error("Could not copy cells to clipboard");
    }
  }, [selectionState.selectedCells, table, columnIds, escapeCsvValue]);

  const handleCellClick = React.useCallback(
    (
      rowIndex: number,
      columnId: string,
      event?: React.MouseEvent<HTMLTableCellElement>,
    ) => {
      const position = { rowIndex, columnId };
      ensureContainerFocus();
      focusCell(position.rowIndex, position.columnId);

      if (event?.shiftKey) {
        const start = selectionState.selectionRange?.start ||
          focusedCell || { ...position };
        selectRange(start, position);
        return;
      }

      if (event?.metaKey || event?.ctrlKey) {
        toggleCellSelection(position);
        return;
      }

      selectSingleCell(position);
    },
    [
      ensureContainerFocus,
      focusCell,
      selectionState.selectionRange,
      focusedCell,
      selectRange,
      toggleCellSelection,
      selectSingleCell,
    ],
  );

  const navigateCell = React.useCallback(
    (direction: "up" | "down" | "left" | "right" | "home" | "end") => {
      if (!focusedCell) return null;
      const rowCount = table.getRowModel().rows.length;
      const currentColIndex = navigableColumnIds.indexOf(focusedCell.columnId);

      let nextRow = focusedCell.rowIndex;
      let nextColId = focusedCell.columnId;

      switch (direction) {
        case "up":
          nextRow = Math.max(0, focusedCell.rowIndex - 1);
          break;
        case "down":
          nextRow = Math.min(rowCount - 1, focusedCell.rowIndex + 1);
          break;
        case "left":
          if (currentColIndex > 0) {
            nextColId = navigableColumnIds[currentColIndex - 1] ?? nextColId;
          }
          break;
        case "right":
          if (currentColIndex < navigableColumnIds.length - 1) {
            nextColId = navigableColumnIds[currentColIndex + 1] ?? nextColId;
          }
          break;
        case "home":
          if (navigableColumnIds.length > 0) {
            nextColId = navigableColumnIds[0]!;
          }
          break;
        case "end":
          if (navigableColumnIds.length > 0) {
            nextColId = navigableColumnIds[navigableColumnIds.length - 1]!;
          }
          break;
      }

      return { rowIndex: nextRow, columnId: nextColId };
    },
    [focusedCell, navigableColumnIds, table],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key.toLowerCase() === "c" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        copySelectionToClipboard();
        return;
      }

      if (!focusedCell) return;

      const { key, shiftKey } = event;
      let direction: Parameters<typeof navigateCell>[0] | null = null;

      switch (key) {
        case "ArrowUp":
          direction = "up";
          break;
        case "ArrowDown":
          direction = "down";
          break;
        case "ArrowLeft":
          direction = "left";
          break;
        case "ArrowRight":
          direction = "right";
          break;
        case "Home":
          direction = "home";
          break;
        case "End":
          direction = "end";
          break;
        case "Escape":
          clearSelection();
          return;
        default:
          return;
      }

      if (!direction) return;

      const next = navigateCell(direction);
      if (!next) return;

      event.preventDefault();
      focusCell(next.rowIndex, next.columnId);
    },
    [focusedCell, navigateCell, table],
  );

  // Remaining component code truncated for brevity - full source available in data-table28.tsx
```
