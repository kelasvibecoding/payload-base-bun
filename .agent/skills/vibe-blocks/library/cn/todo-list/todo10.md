# Todo List 10

## Metadata
- **Category**: Todo List
- **Objective**: Display comprehensive todo items with advanced task management features including subtasks, projects, priorities, due dates, and drag-and-drop reordering.
- **Use Case**: Enterprise-grade task management system where users can create tasks with subtasks, assign to projects, set priorities/due dates, star favorites, and manage task lifecycle.
- **Visual Style**: Clean, minimal layout with expandable subtask sections, project labels, priority indicators, due date badges, and context menu for advanced actions.
- **Interactivity**: Drag-and-drop reordering, toggle task completion, toggle subtask completion, expand/collapse subtask sections, add/edit/delete tasks, set priorities/due dates, star favorite tasks, filter/sort tasks.

## Description
An enterprise-grade todo list with comprehensive task management features including subtasks, project assignment, priority levels, due dates, star favorites, context menu for advanced actions, drag-and-drop reordering, and expandable subtask sections.

## Source Code
```tsx
"use client";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Copy,
  Flag,
  GripVertical,
  List,
  MoreVertical,
  Move,
  Plus,
  Puzzle,
  SendHorizonal,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Priority = "P1" | "P2" | "P3" | "P4";
type SortOption =
  | "manual"
  | "dueDate"
  | "priority"
  | "title"
  | "createdAt"
  | "updatedAt";

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Project {
  id: string;
  name: string;
  color?: string;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  projectId: string;
  priority?: Priority;
  dueDate?: Date;
  starred?: boolean;
  subtasks: Subtask[];
  createdAt: Date;
  updatedAt: Date;
}

interface TodoFilters {
  projects: string[];
  priorities: string[];
  starredOnly: boolean;
}

const projects: Project[] = [
  { id: "personal", name: "Personal Tasks 🏠", color: "#3b82f6" },
  { id: "work", name: "Work Projects 💼", color: "#8b5cf6" },
  { id: "shopping", name: "Shopping List 🛒", color: "#10b981" },
  { id: "learning", name: "Learning Goals 📚", color: "#ec4899" },
];

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
    projectId: "work",
    priority: "P1",
    dueDate: new Date(2025, 9, 25),
    starred: true,
    subtasks: [
      { id: "s1", title: "Write API documentation", completed: true },
      { id: "s2", title: "Add code examples", completed: false },
    ],
    createdAt: new Date(2025, 9, 15),
    updatedAt: new Date(2025, 9, 20),
  },
  {
    id: "2",
    title: "Purchase Shadcn blocks from shadcnblocks.com",
    completed: false,
    projectId: "work",
    priority: "P2",
    subtasks: [],
    createdAt: new Date(2025, 9, 18),
    updatedAt: new Date(2025, 9, 20),
  },
  {
    id: "3",
    title: "Buy groceries",
    completed: false,
    projectId: "shopping",
    priority: "P3",
    subtasks: [],
    createdAt: new Date(2025, 9, 20),
    updatedAt: new Date(2025, 9, 20),
  },
  {
    id: "4",
    title: "Morning workout routine",
    completed: true,
    projectId: "personal",
    priority: "P2",
    subtasks: [],
    createdAt: new Date(2024, 9, 19),
    updatedAt: new Date(2024, 9, 23),
  },
  {
    id: "5",
    title: "Read React documentation",
    completed: false,
    projectId: "learning",
    priority: "P4",
    starred: true,
    subtasks: [],
    createdAt: new Date(2025, 9, 16),
    updatedAt: new Date(2025, 9, 20),
  },
  {
    id: "6",
    title: "Prepare presentation for team meeting",
    completed: false,
    projectId: "work",
    priority: "P2",
    dueDate: new Date(2025, 10, 5),
    subtasks: [
      { id: "s3", title: "Create slide deck", completed: false },
      { id: "s4", title: "Prepare demo environment", completed: false },
    ],
    createdAt: new Date(2025, 9, 30),
    updatedAt: new Date(2025, 9, 30),
  },
  {
    id: "7",
    title: "Plan weekend hiking trip",
    completed: false,
    projectId: "personal",
    priority: "P3",
    dueDate: new Date(2025, 10, 8),
    starred: true,
    subtasks: [
      { id: "s5", title: "Check weather forecast", completed: false },
      { id: "s6", title: "Pack gear", completed: false },
    ],
    createdAt: new Date(2025, 9, 30),
    updatedAt: new Date(2025, 9, 30),
  },
  {
    id: "8",
    title: "Review pull request #234",
    completed: true,
    projectId: "work",
    priority: "P2",
    subtasks: [],
    createdAt: new Date(2024, 9, 22),
    updatedAt: new Date(2024, 9, 23),
  },
  {
    id: "9",
    title: "Update project documentation",
    completed: true,
    projectId: "work",
    priority: "P3",
    subtasks: [],
    createdAt: new Date(2024, 9, 22),
    updatedAt: new Date(2024, 9, 23),
  },
  {
    id: "10",
    title: "Fix responsive design issues",
    completed: true,
    projectId: "work",
    priority: "P1",
    subtasks: [],
    createdAt: new Date(2024, 9, 21),
    updatedAt: new Date(2024, 9, 22),
  },
];

const priorityColors: Record<Priority, string> = {
  P1: "text-red-500",
  P2: "text-orange-500",
  P3: "text-yellow-500",
  P4: "text-gray-500",
};

const priorityLabels: Record<Priority, string> = {
  P1: "P1 - Urgent",
  P2: "P2 - High",
  P3: "P3 - Medium",
  P4: "P4 - Low",
};

function sortTodos(todos: Todo[], sortBy: SortOption): Todo[] {
  if (sortBy === "manual") return todos;

  return [...todos].sort((a, b) => {
    switch (sortBy) {
      case "dueDate":
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();

      case "priority": {
        const priorityOrder = { P1: 1, P2: 2, P3: 3, P4: 4 };
        const aPriority = a.priority ? priorityOrder[a.priority] : 5;
        const bPriority = b.priority ? priorityOrder[b.priority] : 5;
        return aPriority - bPriority;
      }

      case "title":
        return a.title.localeCompare(b.title);

      case "createdAt":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case "updatedAt":
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );

      default:
        return 0;
    }
  });
}

function filterTodos(todos: Todo[], filters: TodoFilters): Todo[] {
  let result = [...todos];

  if (filters.starredOnly) {
    result = result.filter((todo) => todo.starred);
  }
  if (filters.projects.length > 0) {
    result = result.filter((todo) => filters.projects.includes(todo.projectId));
  }
  if (filters.priorities.length > 0) {
    result = result.filter((todo) =>
      todo.priority ? filters.priorities.includes(todo.priority) : false,
    );
  }

  return result;
}

interface TodoActionsDropdownProps {
  todo: Todo;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete?: (id: string) => void;
  onUpdate?: (todo: Todo) => void;
  onToggleStar?: (id: string) => void;
  project?: Project;
}

const TodoActionsDropdown = ({
  todo,
  isOpen,
  onOpenChange,
  onDelete,
  onUpdate,
  onToggleStar,
}: TodoActionsDropdownProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const dateOptions = [
    { type: "today" as const, label: "Today", color: "text-blue-500" },
    { type: "tomorrow" as const, label: "Tomorrow", color: "text-green-500" },
    { type: "next-week" as const, label: "Next week", color: "text-cyan-500" },
    {
      type: "next-month" as const,
      label: "Next month",
      color: "text-orange-500",
    },
    { type: "no-date" as const, label: "No date", color: "text-yellow-500" },
  ];

  const getPresetDate = (
    type: "today" | "tomorrow" | "next-week" | "next-month" | "no-date",
  ): Date | undefined => {
    const now = new Date();
    switch (type) {
      case "today":
        return now;
      case "tomorrow": {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
      }
      case "next-week": {
        const nextWeek = new Date(now);
        nextWeek.setDate(nextWeek.getDate() + 7);
        return nextWeek;
      }
      case "next-month": {
        const nextMonth = new Date(now);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return nextMonth;
      }
      case "no-date":
        return undefined;
    }
  };

  const setDate = (
    dateType: "today" | "tomorrow" | "next-week" | "next-month" | "no-date",
  ) => {
    if (!onUpdate) return;
    const newDate = getPresetDate(dateType);
    onUpdate({ ...todo, dueDate: newDate });
  };

  const setPriority = (priority: Priority) => {
    if (!onUpdate) return;
    onUpdate({ ...todo, priority });
  };

  const handleCopyLink = () => {
    const taskUrl = `${window.location.origin}/task/${todo.id}`;
    navigator.clipboard.writeText(taskUrl);
  };

  return (
    <>
      <DropdownMenu modal={false} open={isOpen} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={(e) => {
              e.stopPropagation();
            }}
            aria-label="More actions"
            className={cn(
              "-mr-2 transition-all duration-200 ease-out",
              "-translate-x-2 scale-50 opacity-0",
              "group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
              isOpen && "translate-x-0 scale-100 opacity-100",
            )}
          >
            <MoreVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          onClick={(e) => e.stopPropagation()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="w-64"
        >
          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
            <ArrowUp className="size-4" />
            Add task above
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
            <ArrowDown className="size-4" />
            Add task below
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <div className="px-2 py-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Date</span>
              <span className="text-muted-foreground text-xs">T</span>
            </div>
            <TooltipProvider delayDuration={300}>
              <div className="mt-1 flex items-center gap-3">
                {dateOptions.map((option) => (
                  <Tooltip key={option.type}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDate(option.type);
                        }}
                        className="hover:bg-accent cursor-pointer rounded p-1 transition-colors"
                      >
                        <Calendar className={`${option.color} size-4`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{option.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          <div className="px-2 py-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Priority</span>
              <span className="text-muted-foreground text-xs">Y</span>
            </div>
            <TooltipProvider delayDuration={300}>
              <div className="mt-1 flex items-center gap-3">
                {(["P1", "P2", "P3", "P4"] as Priority[]).map((priority) => (
                  <Tooltip key={priority}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPriority(priority);
                        }}
                      >
                        <Circle
                          className={cn("size-4", priorityColors[priority])}
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{priorityLabels[priority]}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
            <Move className="size-4" />
            Move to...
            <span className="text-muted-foreground ml-auto text-xs">V</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
            <Plus className="size-4" />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              handleCopyLink();
            }}
          >
            <Copy className="size-4" />
            Copy link to task
            <span className="text-muted-foreground ml-auto text-xs">⇧ ⌘ L</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
            <Puzzle className="size-4" />
            Add extension...
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {!todo.completed && (
            <>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleStar?.(todo.id);
                }}
              >
                <Star
                  className={cn(
                    "size-4",
                    todo.starred &&
                      "fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400",
                  )}
                />
                {todo.starred ? "Remove from favorites" : "Add to favorites"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}

          <DropdownMenuItem
            variant="destructive"
            onClick={(e) => {
              e.stopPropagation();
              onOpenChange(false);
              setShowDeleteDialog(true);
            }}
          >
            <Trash2 className="size-4" />
            Delete
            <span className="text-muted-foreground ml-auto text-xs">⌘ ⌫</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete task?</DialogTitle>
            <DialogDescription>
              The task <strong>{todo.title}</strong> will be permanently
              deleted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(todo.id);
                setShowDeleteDialog(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

interface SortableTodoItemProps {
  todo: Todo;
  project?: Project;
  onToggle: (id: string) => void;
  onToggleSubtask: (todoId: string, subtaskId: string) => void;
  onToggleExpand: (id: string) => void;
  onDelete?: (id: string) => void;
  onUpdate?: (todo: Todo) => void;
  onToggleStar?: (id: string) => void;
  isExpanded: boolean;
}

const SortableTodoItem = ({
  todo,
  project,
  onToggle,
  onToggleSubtask,
  onToggleExpand,
  onDelete,
  onUpdate,
  onToggleStar,
  isExpanded,
}: SortableTodoItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const completedSubtasks = todo.subtasks.filter((st) => st.completed).length;
  const totalSubtasks = todo.subtasks.length;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div ref={setNodeRef} style={style} className="w-full">
      <Item
        variant={todo.completed ? "muted" : "default"}
        className={cn(
          "border-border group cursor-pointer items-start rounded-none border-0 border-b",
          todo.completed ? "py-1 opacity-60 hover:opacity-80" : "py-2",
        )}
        onClick={() => onToggle(todo.id)}
      >
        <ItemMedia>
          <div className="flex items-center gap-0.5">
            <div className="relative flex items-center">
              {todo.subtasks.length > 0 && !todo.completed && (
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleExpand(todo.id);
                  }}
                  className="absolute -left-8"
                >
                  <ChevronRight
                    className={cn(
                      "text-muted-foreground size-4 transition-transform duration-200",
                      isExpanded && "rotate-90",
                    )}
                  />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon-sm"
                {...attributes}
                {...listeners}
                className={cn(
                  "absolute -translate-x-1 scale-50 cursor-grab opacity-0 transition-all active:cursor-grabbing group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
                  todo.subtasks.length > 0 ? "-left-14" : "-left-8",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <GripVertical className="text-muted-foreground size-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(todo.id);
              }}
              className={cn(
                "shrink-0 rounded-full transition-all duration-200",
                "-ml-1",
                todo.completed && "-mr-2",
              )}
            >
              <div className="relative">
                {!todo.completed ? (
                  <Circle
                    className={cn(
                      "size-5",
                      todo.priority && priorityColors[todo.priority],
                    )}
                  />
                ) : (
                  <CheckCircle2
                    className="text-muted-foreground size-5"
                    strokeWidth={2}
                  />
                )}
              </div>
            </Button>
          </div>
        </ItemMedia>
        <ItemContent className="min-w-0">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <ItemTitle
                className={cn(
                  "flex-1",
                  todo.completed && "text-muted-foreground line-through",
                )}
              >
                {todo.title}
              </ItemTitle>
              <div className="flex shrink-0 items-center gap-1">
                {todo.dueDate && !todo.completed && (
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Calendar className="size-3" />
                    {formatDate(todo.dueDate)}
                  </div>
                )}
                {!todo.completed && (
                  <div
                    className={cn(
                      todo.completed
                        ? "opacity-0 transition-opacity group-hover:opacity-100"
                        : "",
                    )}
                  >
                    <TodoActionsDropdown
                      todo={todo}
                      isOpen={isDropdownOpen}
                      onOpenChange={setIsDropdownOpen}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      onToggleStar={onToggleStar}
                      project={project}
                    />
                  </div>
                )}
              </div>
            </div>
            {project && !todo.completed && (
              <div className="text-muted-foreground/60 mt-0.5 flex items-center gap-1 text-xs">
                <span>{project.name}</span>
                {totalSubtasks > 0 && (
                  <>
                    <span>·</span>
                    <span>{totalSubtasks}</span>
                  </>
                )}
              </div>
            )}
            {isExpanded && todo.subtasks.length > 0 && !todo.completed && (
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="mt-1.5 space-y-0.5">
                  {todo.subtasks.map((subtask) => (
                    <div
                      key={subtask.id}
                      className="group/subtask hover:bg-accent/20 -ml-1 flex items-center gap-1.5 rounded px-1 py-0.5 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSubtask(todo.id, subtask.id);
                      }}
                    >
                      <button
                        className={cn(
                          "flex size-3.5 shrink-0 items-center justify-center rounded border transition-all",
                          subtask.completed
                            ? "bg-primary border-primary"
                            : "border-muted-foreground/30 hover:border-primary/50",
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSubtask(todo.id, subtask.id);
                        }}
                      >
                        {subtask.completed && (
                          <Check
                            className="text-primary-foreground size-2.5"
                            strokeWidth={3}
                          />
                        )}
                      </button>
                      <span
                        className={cn(
                          "line-clamp-1 cursor-pointer select-none text-xs transition-all",
                          subtask.completed
                            ? "text-muted-foreground line-through"
                            : "text-muted-foreground",
                        )}
                      >
                        {subtask.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ItemContent>
      </Item>
    </div>
  );
};

interface AddTaskFormProps {
  projects: Project[];
  selectedProjectId: string;
  onAddTask: (
    title: string,
    projectId: string,
    dueDate?: Date,
    priority?: Priority,
  ) => void;
  onProjectChange: (projectId: string) => void;
}

const AddTaskForm = ({
  projects,
  selectedProjectId,
  onAddTask,
  onProjectChange,
}: AddTaskFormProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [priority, setPriority] = useState<Priority | undefined>();
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title.trim(), selectedProjectId, date, priority);
      setTitle("");
      setDate(undefined);
      setPriority(undefined);
      setIsExpanded(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDate(undefined);
    setPriority(undefined);
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <Button
        variant="ghost"
        size="lg"
        className="w-full justify-start gap-2"
        onClick={() => setIsExpanded(true)}
      >
        <Plus className="h-4 w-4" />
        Add New Task
      </Button>
    );
  }

  return (
    <InputGroup>
      <InputGroupInput
        autoFocus
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title.trim()) {
            e.preventDefault();
            handleAddTask();
          }
          if (e.key === "Escape") {
            handleCancel();
          }
        }}
        className="py-3 text-base font-medium"
      />
      <InputGroupAddon align="block-end" className="flex-wrap">
        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
          <PopoverTrigger asChild>
            <InputGroupButton size="sm" className={date ? "text-blue-500" : ""}>
              <Calendar className="h-4 w-4" />
              {date ? (
                <span className="text-xs">{formatDate(date)}</span>
              ) : (
                "Date"
              )}
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <div className="space-y-2">
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(new Date());
                    setDatePickerOpen(false);
                  }}
                >
                  Today
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    setDate(tomorrow);
                    setDatePickerOpen(false);
                  }}
                >
                  Tomorrow
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    const nextWeek = new Date();
                    nextWeek.setDate(nextWeek.getDate() + 7);
                    setDate(nextWeek);
                    setDatePickerOpen(false);
                  }}
                >
                  Next week
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(undefined);
                    setDatePickerOpen(false);
                  }}
                >
                  No date
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <InputGroupButton
              size="sm"
              className={priority ? priorityColors[priority] : ""}
            >
              {priority ? (
                <Circle className={cn("h-4 w-4", priorityColors[priority])} />
              ) : (
                <Flag className="h-4 w-4" />
              )}
              {priority || "Priority"}
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2" align="start">
            <div className="space-y-1">
              {(["P1", "P2", "P3", "P4"] as Priority[]).map((p) => (
                <Button
                  key={p}
                  variant={priority === p ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => setPriority(p)}
                >
                  <Circle className={cn("h-3.5 w-3.5", priorityColors[p])} />
                  {priorityLabels[p]}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setPriority(undefined)}
              >
                No priority
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
      <InputGroupAddon align="block-end">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupButton size="sm" className="gap-2">
              {selectedProject ? selectedProject.name : "Select Project"}
              <ChevronDown className="h-3.5 w-3.5" />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="start">
            <div className="space-y-1">
              {projects.map((project) => (
                <Button
                  key={project.id}
                  variant={
                    selectedProjectId === project.id ? "secondary" : "ghost"
                  }
                  className="w-full justify-start"
                  onClick={() => onProjectChange(project.id)}
                >
                  {project.name}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <InputGroupButton
          size="sm"
          onClick={handleCancel}
          variant="secondary"
          className="ms-auto"
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Cancel</span>
        </InputGroupButton>
        <InputGroupButton
          size="sm"
          onClick={handleAddTask}
          disabled={!title.trim()}
          variant="default"
        >
          <SendHorizonal className="h-4 w-4" />
          <span className="hidden sm:inline">Add task</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

const Todo10 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [sortBy, setSortBy] = useState<SortOption>("manual");
  const [filters, setFilters] = useState<TodoFilters>({
    projects: [],
    priorities: [],
    starredOnly: false,
  });
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects[0].id,
  );
  const [isCompletedExpanded, setIsCompletedExpanded] = useState(true);
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const [expandedTodos, setExpandedTodos] = useState<Set<string>>(
    new Set(
      initialTodos
        .filter((t) => t.subtasks.length > 0 && !t.completed)
        .map((t) => t.id),
    ),
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, filters);
  }, [todos, filters]);

  const { filteredActiveTodos, filteredCompletedTodos } = useMemo(() => {
    const completedTasks = filteredTodos.filter((todo) => todo.completed);
    const activeTasks = filteredTodos.filter((todo) => !todo.completed);

    const sortedActive = sortTodos(activeTasks, sortBy);
    const sortedCompleted = sortTodos(completedTasks, sortBy);

    return {
      filteredActiveTodos: sortedActive,
      filteredCompletedTodos: sortedCompleted,
    };
  }, [filteredTodos, sortBy]);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const toggleSubtask = (todoId: string, subtaskId: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              subtasks: todo.subtasks.map((st) =>
                st.id === subtaskId ? { ...st, completed: !st.completed } : st,
              ),
            }
          : todo,
      ),
    );
  };

  const toggleExpand = (id: string) => {
    setExpandedTodos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const addTask = (
    title: string,
    projectId: string,
    dueDate?: Date,
    priority?: Priority,
  ) => {
    const newTodo: Todo = {
      id: `todo-${Date.now()}`,
      title,
      completed: false,
      projectId,
      dueDate,
      priority,
      subtasks: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleUpdate = (updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id
          ? { ...updatedTodo, updatedAt: new Date() }
          : todo,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleStar = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, starred: !todo.starred } : todo,
      ),
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const todo = todos.find((t) => t.id === active.id);
    setActiveTodo(todo || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id && sortBy === "manual") {
      const oldIndex = todos.findIndex((item) => item.id === active.id);
      const newIndex = todos.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        setTodos((items) => arrayMove(items, oldIndex, newIndex));
      }
    }

    setActiveTodo(null);
  };

  const hasTodos = todos.length > 0;

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
        {!hasTodos ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <List />
              </EmptyMedia>
              <EmptyTitle>No tasks yet</EmptyTitle>
              <EmptyDescription>
                Get started by adding your first task
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <AddTaskForm
                projects={projects}
                selectedProjectId={selectedProjectId}
                onAddTask={addTask}
                onProjectChange={setSelectedProjectId}
              />
            </EmptyContent>
          </Empty>
        ) : (
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="2xl text-lg font-semibold">
                All Tasks ({filteredActiveTodos.length})
              </h3>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={filteredActiveTodos.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <ItemGroup className="w-full">
                  {filteredActiveTodos.map((todo) => {
                    const project = projects.find(
                      (p) => p.id === todo.projectId,
                    );
                    return (
                      <SortableTodoItem
                        key={todo.id}
                        todo={todo}
                        project={project}
                        onToggle={toggleTodo}
                        onToggleSubtask={toggleSubtask}
                        onToggleExpand={toggleExpand}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                        onToggleStar={handleToggleStar}
                        isExpanded={expandedTodos.has(todo.id)}
                      />
                    );
                  })}
                </ItemGroup>
              </SortableContext>

              <AddTaskForm
                projects={projects}
                selectedProjectId={selectedProjectId}
                onAddTask={addTask}
                onProjectChange={setSelectedProjectId}
              />

              {filteredCompletedTodos.length > 0 && (
                <div className="border-border/50 space-y-3 border-t pt-6">
                  <button
                    onClick={() => setIsCompletedExpanded(!isCompletedExpanded)}
                    className="text-muted-foreground hover:text-foreground group flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <ChevronDown
                      className={cn(
                        "text-muted-foreground size-3.5 transition-transform duration-200",
                        isCompletedExpanded ? "rotate-0" : "-rotate-90",
                      )}
                    />
                    <span>Completed</span>
                    <span className="bg-muted/60 text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-medium">
                      {filteredCompletedTodos.length}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isCompletedExpanded
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <ItemGroup className="w-full">
                      {filteredCompletedTodos.map((todo) => {
                        const project = projects.find(
                          (p) => p.id === todo.projectId,
                        );
                        return (
                          <SortableTodoItem
                            key={todo.id}
                            todo={todo}
                            project={project}
                            onToggle={toggleTodo}
                            onToggleSubtask={toggleSubtask}
                            onToggleExpand={toggleExpand}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            onToggleStar={handleToggleStar}
                            isExpanded={expandedTodos.has(todo.id)}
                          />
                        );
                      })}
                    </ItemGroup>
                  </div>
                </div>
              )}

              <DragOverlay>
                {activeTodo ? (
                  <Item
                    variant={activeTodo.completed ? "muted" : "default"}
                    className="cursor-grabbing items-center border-b opacity-90 shadow-lg"
                  >
                    <ItemMedia>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="cursor-grabbing"
                        >
                          <GripVertical className="text-muted-foreground size-4" />
                        </Button>
                        <Checkbox checked={activeTodo.completed} />
                      </div>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle
                        className={
                          activeTodo.completed
                            ? "text-muted-foreground line-through"
                            : ""
                        }
                      >
                        {activeTodo.title}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                ) : null}
              </DragOverlay>
            </DndContext>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export { Todo10 };
```
