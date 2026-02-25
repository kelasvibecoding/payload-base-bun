# Todo List 6

## Metadata
- **Category**: Todo List
- **Objective**: Display todo items with filtering, sorting, and drag-and-drop reordering.
- **Use Case**: Advanced task management list where users can filter tasks by priority/starred status, sort by title/priority, and reorder manually.
- **Visual Style**: Clean layout with filter/sort dropdowns, expandable add task form, and sortable task list with priority badges and starred indicators.
- **Interactivity**: Drag-and-drop reordering, toggle completion, expandable add task form, filter by priority/starred status, sort by title/priority/manual order.

## Description
An advanced todo list with filtering by priority/starred status, sorting by title/priority/manual order, drag-and-drop reordering, expandable add task form, and visual indicators for priority and starred status.

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
import { Filter, GripVertical, Plus, SortAsc, Star, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";

const initialTodos = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
    priority: "high",
    starred: true,
  },
  {
    id: "2",
    title: "Purchase Shadcn blocks from shadcnblocks.com",
    completed: false,
    priority: "medium",
    starred: false,
  },
  {
    id: "3",
    title: "Buy groceries",
    completed: false,
    priority: "low",
    starred: false,
  },
  {
    id: "4",
    title: "Morning workout routine",
    completed: true,
    priority: "medium",
    starred: false,
  },
  {
    id: "5",
    title: "Read React documentation",
    completed: false,
    priority: "high",
    starred: true,
  },
];

type Todo = (typeof initialTodos)[number];
type SortOption = "manual" | "title" | "priority";
type Priority = "high" | "medium" | "low";

interface Filters {
  starredOnly: boolean;
  priorities: Priority[];
}

interface SortableTodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const SortableTodoItem = ({ todo, onToggle }: SortableTodoItemProps) => {
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

  return (
    <div ref={setNodeRef} style={style}>
      <Item
        variant={todo.completed ? "muted" : "default"}
        className={`cursor-pointer items-center border-b transition-opacity ${
          todo.completed ? "opacity-60" : ""
        }`}
        onClick={() => onToggle(todo.id)}
      >
        <ItemMedia>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              {...attributes}
              {...listeners}
              className="cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <GripVertical className="text-muted-foreground size-4" />
            </Button>
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => onToggle(todo.id)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </ItemMedia>
        <ItemContent>
          <div className="flex items-center gap-2">
            <ItemTitle
              className={
                todo.completed ? "text-muted-foreground line-through" : ""
              }
            >
              {todo.title}
            </ItemTitle>
            {todo.starred && (
              <Star className="size-4 fill-amber-500 text-amber-500" />
            )}
            <Badge variant="outline" className="text-xs capitalize">
              {todo.priority}
            </Badge>
          </div>
        </ItemContent>
      </Item>
    </div>
  );
};

const Todo6 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("manual");
  const [filters, setFilters] = useState<Filters>({
    starredOnly: false,
    priorities: [],
  });
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        completed: false,
        priority: "medium",
        starred: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTaskTitle("");
      setIsFormExpanded(false);
    }
  };

  const togglePriorityFilter = (priority: Priority) => {
    setFilters((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
  };

  const clearFilters = () => {
    setFilters({
      starredOnly: false,
      priorities: [],
    });
  };

  const activeFilterCount =
    (filters.starredOnly ? 1 : 0) + filters.priorities.length;

  const filteredAndSortedTodos = useMemo(() => {
    let filtered = todos.filter((todo) => {
      if (filters.starredOnly && !todo.starred) return false;
      if (
        filters.priorities.length > 0 &&
        !filters.priorities.includes(todo.priority as Priority)
      )
        return false;
      return true;
    });

    if (sortBy === "title") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "priority") {
      const priorityOrder: Record<Priority, number> = {
        high: 1,
        medium: 2,
        low: 3,
      };
      filtered = [...filtered].sort(
        (a, b) =>
          priorityOrder[a.priority as Priority] -
          priorityOrder[b.priority as Priority],
      );
    }

    return filtered;
  }, [todos, filters, sortBy]);

  const getSortBadge = (sort: SortOption): string => {
    switch (sort) {
      case "manual":
        return "M";
      case "title":
        return "A";
      case "priority":
        return "P";
      default:
        return "";
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const todo = filteredAndSortedTodos.find((t) => t.id === active.id);
    setActiveTodo(todo || null);
    if (sortBy !== "manual") {
      setSortBy("manual");
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = filteredAndSortedTodos.findIndex(
        (item) => item.id === active.id,
      );
      const newIndex = filteredAndSortedTodos.findIndex(
        (item) => item.id === over.id,
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        const reorderedFiltered = arrayMove(
          filteredAndSortedTodos,
          oldIndex,
          newIndex,
        );
        const reorderedIds = reorderedFiltered.map((t) => t.id);
        setTodos((items) => {
          const sortedItems = [...items].sort((a, b) => {
            const aIndex = reorderedIds.indexOf(a.id);
            const bIndex = reorderedIds.indexOf(b.id);
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;
            return aIndex - bIndex;
          });
          return sortedItems;
        });
      }
    }

    setActiveTodo(null);
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Drag & Drop Todo List with Filtering and Sorting
          </h2>
          <p className="text-muted-foreground">
            Create tasks, reorder by dragging, filter by priority and starred
            status, and sort by title or priority
          </p>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                    Filter
                    {activeFilterCount > 0 && (
                      <Badge variant="secondary" className="px-1.5 py-0">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={filters.starredOnly}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({ ...prev, starredOnly: checked }))
                    }
                  >
                    <Star className="h-4 w-4" />
                    Starred only
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs">
                    Priority
                  </DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.priorities.includes("high")}
                    onCheckedChange={() => togglePriorityFilter("high")}
                  >
                    High
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.priorities.includes("medium")}
                    onCheckedChange={() => togglePriorityFilter("medium")}
                  >
                    Medium
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.priorities.includes("low")}
                    onCheckedChange={() => togglePriorityFilter("low")}
                  >
                    Low
                  </DropdownMenuCheckboxItem>
                  {activeFilterCount > 0 && (
                    <>
                      <DropdownMenuSeparator />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={clearFilters}
                      >
                        <X className="h-4 w-4" />
                        Clear filters
                      </Button>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="h-8" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SortAsc className="h-4 w-4" />
                    Sort
                    <Badge variant="secondary" className="px-1.5 py-0">
                      {getSortBadge(sortBy)}
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value as SortOption)}
                  >
                    <DropdownMenuRadioItem value="manual">
                      Manual Order
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="title">
                      Title (A-Z)
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="priority">
                      Priority
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="text-muted-foreground ml-auto text-sm">
                {filteredAndSortedTodos.length}{" "}
                {filteredAndSortedTodos.length === 1 ? "task" : "tasks"}
              </div>
            </div>

            {!isFormExpanded ? (
              <Button
                variant="ghost"
                size="lg"
                className="w-full justify-start gap-2"
                onClick={() => setIsFormExpanded(true)}
              >
                <Plus className="h-4 w-4" />
                Add New Task
              </Button>
            ) : (
              <div className="flex flex-col gap-2 rounded-lg border p-4">
                <Input
                  autoFocus
                  placeholder="Task title"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newTaskTitle.trim()) {
                      handleAddTask();
                    }
                    if (e.key === "Escape") {
                      setNewTaskTitle("");
                      setIsFormExpanded(false);
                    }
                  }}
                  className="text-base font-medium"
                />
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setNewTaskTitle("");
                      setIsFormExpanded(false);
                    }}
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAddTask}
                    disabled={!newTaskTitle.trim()}
                  >
                    <Plus className="h-4 w-4" />
                    Add task
                  </Button>
                </div>
              </div>
            )}

            <SortableContext
              items={filteredAndSortedTodos.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <ItemGroup>
                {filteredAndSortedTodos.length === 0 ? (
                  <div className="text-muted-foreground py-8 text-center text-sm">
                    No tasks match your filters
                  </div>
                ) : (
                  filteredAndSortedTodos.map((todo) => (
                    <SortableTodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={toggleTodo}
                    />
                  ))
                )}
              </ItemGroup>
            </SortableContext>
          </div>
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
                  <div className="flex items-center gap-2">
                    <ItemTitle
                      className={
                        activeTodo.completed
                          ? "text-muted-foreground line-through"
                          : ""
                      }
                    >
                      {activeTodo.title}
                    </ItemTitle>
                    {activeTodo.starred && (
                      <Star className="size-4 fill-amber-500 text-amber-500" />
                    )}
                    <Badge variant="outline" className="text-xs capitalize">
                      {activeTodo.priority}
                    </Badge>
                  </div>
                </ItemContent>
              </Item>
            ) : null}
          </DragOverlay>
        </DndContext>
        </div>
      </div>
    </section>
  );
};

export { Todo6 };
```
