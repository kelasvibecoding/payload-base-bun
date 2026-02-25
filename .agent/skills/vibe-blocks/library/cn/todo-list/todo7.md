# Todo List 7

## Metadata
- **Category**: Todo List
- **Objective**: Display todo items with comprehensive task creation, filtering, sorting, and drag-and-drop reordering.
- **Use Case**: Advanced task management system where users can create tasks with due dates, priorities, reminders, and project assignments, plus filter/sort/reorder tasks.
- **Visual Style**: Clean layout with advanced task creation form, filter/sort dropdowns, and sortable task list with priority badges, project labels, and due date indicators.
- **Interactivity**: Drag-and-drop reordering, toggle completion, comprehensive task creation form (title, due date, priority, reminders, project), filter by priority/starred/project, sort by title/priority/manual order.

## Description
An advanced todo list with comprehensive task creation form (due date, priority, reminders, project assignment), filtering by priority/starred/project, sorting by title/priority/manual order, drag-and-drop reordering, and visual indicators for priority, project, and due date.

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
import { format } from "date-fns";
import {
  Bell,
  Calendar,
  ChevronDown,
  Filter,
  Flag,
  GripVertical,
  Plus,
  SendHorizonal,
  SortAsc,
  Star,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
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
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "personal",
    name: "Personal Tasks 🏠",
    color: "#3b82f6",
  },
  {
    id: "work",
    name: "Work Projects 💼",
    color: "#8b5cf6",
  },
  {
    id: "shopping",
    name: "Shopping List 🛒",
    color: "#10b981",
  },
  {
    id: "fitness",
    name: "Health & Fitness 💪",
    color: "#f59e0b",
  },
  {
    id: "learning",
    name: "Learning Goals 📚",
    color: "#ec4899",
  },
];

type Priority = "P1" | "P2" | "P3" | "P4";

const priorities: Array<{ value: Priority; label: string; color: string }> = [
  { value: "P1", label: "P1 - Urgent", color: "text-red-500" },
  { value: "P2", label: "P2 - High", color: "text-orange-500" },
  { value: "P3", label: "P3 - Medium", color: "text-yellow-500" },
  { value: "P4", label: "P4 - Low", color: "text-blue-500" },
];

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  priority?: Priority;
  starred: boolean;
  projectId: string;
  dueDate?: Date;
};

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
    priority: "P2",
    starred: true,
    projectId: "work",
    dueDate: new Date(2025, 9, 25),
  },
  {
    id: "2",
    title: "Purchase Shadcn blocks from shadcnblocks.com",
    completed: false,
    priority: "P3",
    starred: false,
    projectId: "work",
  },
  {
    id: "3",
    title: "Buy groceries",
    completed: false,
    priority: "P4",
    starred: false,
    projectId: "shopping",
  },
];
type SortOption = "manual" | "title" | "priority";

interface Filters {
  starredOnly: boolean;
  priorities: Priority[];
  projects: string[];
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

  const priority = priorities.find((p) => p.value === todo.priority);
  const project = projects.find((p) => p.id === todo.projectId);

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
              <GripVertical className="size-4 text-muted-foreground" />
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
            {priority && (
              <Badge variant="outline" className={`text-xs ${priority.color}`}>
                {priority.value}
              </Badge>
            )}
            {project && (
              <Badge variant="outline" className="text-xs">
                {project.name}
              </Badge>
            )}
            {todo.dueDate && (
              <span className="text-xs text-muted-foreground">
                {format(todo.dueDate, "MMM d")}
              </span>
            )}
          </div>
        </ItemContent>
      </Item>
    </div>
  );
};

const Todo7 = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    dueDate: undefined as Date | undefined,
    priority: null as Priority | null,
    reminders: [] as Date[],
    projectId: projects[0].id,
  });
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("manual");
  const [filters, setFilters] = useState<Filters>({
    starredOnly: false,
    priorities: [],
    projects: [],
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
    if (formData.title.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        completed: false,
        priority: formData.priority ?? undefined,
        starred: false,
        projectId: formData.projectId,
        dueDate: formData.dueDate,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setFormData({
        title: "",
        dueDate: undefined,
        priority: null,
        reminders: [],
        projectId: projects[0].id,
      });
      setIsFormExpanded(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      dueDate: undefined,
      priority: null,
      reminders: [],
      projectId: projects[0].id,
    });
    setIsFormExpanded(false);
  };

  const togglePriorityFilter = (priority: Priority) => {
    setFilters((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
  };

  const toggleProjectFilter = (projectId: string) => {
    setFilters((prev) => ({
      ...prev,
      projects: prev.projects.includes(projectId)
        ? prev.projects.filter((p) => p !== projectId)
        : [...prev.projects, projectId],
    }));
  };

  const clearFilters = () => {
    setFilters({
      starredOnly: false,
      priorities: [],
      projects: [],
    });
  };

  const activeFilterCount =
    (filters.starredOnly ? 1 : 0) +
    filters.priorities.length +
    filters.projects.length;

  const filteredAndSortedTodos = useMemo(() => {
    let filtered = todos.filter((todo) => {
      if (filters.starredOnly && !todo.starred) return false;
      if (
        filters.priorities.length > 0 &&
        todo.priority &&
        !filters.priorities.includes(todo.priority as Priority)
      )
        return false;
      if (
        filters.projects.length > 0 &&
        !filters.projects.includes(todo.projectId)
      )
        return false;
      return true;
    });

    if (sortBy === "title") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "priority") {
      const priorityOrder: Record<Priority, number> = {
        P1: 1,
        P2: 2,
        P3: 3,
        P4: 4,
      };
      filtered = [...filtered].sort(
        (a, b) =>
          (priorityOrder[(a.priority || "P4") as Priority] || 4) -
          (priorityOrder[(b.priority || "P4") as Priority] || 4),
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

  const selectedProject = projects.find((p) => p.id === formData.projectId);
  const selectedPriority = priorities.find(
    (p) => p.value === formData.priority,
  );

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Advanced Todo List with Full Task Creation
            </h2>
            <p className="text-muted-foreground">
              Create tasks with date, priority, reminders, and project
              assignment. Drag to reorder, filter, and sort your tasks.
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
                        setFilters((prev) => ({
                          ...prev,
                          starredOnly: checked,
                        }))
                      }
                    >
                      <Star className="h-4 w-4" />
                      Starred only
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className="text-xs">
                      Priority
                    </DropdownMenuLabel>
                    {priorities.map((priority) => (
                      <DropdownMenuCheckboxItem
                        key={priority.value}
                        checked={filters.priorities.includes(priority.value)}
                        onCheckedChange={() =>
                          togglePriorityFilter(priority.value)
                        }
                      >
                        <Flag className={`h-4 w-4 ${priority.color}`} />
                        {priority.value}
                      </DropdownMenuCheckboxItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className="text-xs">
                      Projects
                    </DropdownMenuLabel>
                    {projects.map((project) => (
                      <DropdownMenuCheckboxItem
                        key={project.id}
                        checked={filters.projects.includes(project.id)}
                        onCheckedChange={() => toggleProjectFilter(project.id)}
                      >
                        {project.name}
                      </DropdownMenuCheckboxItem>
                    ))}
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

                <div className="ml-auto text-sm text-muted-foreground">
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
                <InputGroup className="flex-col">
                  <InputGroupInput
                    autoFocus
                    placeholder="Task title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && formData.title.trim()) {
                        handleAddTask();
                      }
                      if (e.key === "Escape") {
                        handleCancel();
                      }
                    }}
                    className="py-3 text-base font-medium"
                  />
                  <InputGroupAddon
                    align="block-end"
                    className="flex-wrap border-t"
                  >
                    <Popover
                      open={datePickerOpen}
                      onOpenChange={setDatePickerOpen}
                    >
                      <PopoverTrigger asChild>
                        <InputGroupButton
                          size="sm"
                          className={formData.dueDate ? "text-chart-1" : ""}
                        >
                          <Calendar className="h-4 w-4" />
                          {formData.dueDate ? (
                            <span className="text-xs">
                              {format(formData.dueDate, "MMM d")}
                            </span>
                          ) : (
                            "Date"
                          )}
                        </InputGroupButton>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={formData.dueDate}
                          onSelect={(date) => {
                            setFormData((prev) => ({ ...prev, dueDate: date }));
                            if (date) {
                              setDatePickerOpen(false);
                            }
                          }}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <InputGroupButton
                          size="sm"
                          className={
                            selectedPriority ? selectedPriority.color : ""
                          }
                        >
                          {selectedPriority ? (
                            <Flag
                              className={`h-4 w-4 ${selectedPriority.color}`}
                            />
                          ) : (
                            <Flag className="h-4 w-4" />
                          )}
                          {selectedPriority?.value || "Priority"}
                        </InputGroupButton>
                      </PopoverTrigger>
                      <PopoverContent className="w-48 p-2" align="start">
                        <div className="space-y-1">
                          {priorities.map((priority) => (
                            <Button
                              key={priority.value}
                              variant={
                                formData.priority === priority.value
                                  ? "secondary"
                                  : "ghost"
                              }
                              className="w-full justify-start gap-2"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  priority: priority.value,
                                }))
                              }
                            >
                              <Flag
                                className={`h-3.5 w-3.5 ${priority.color}`}
                              />
                              {priority.label}
                            </Button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    <InputGroupButton
                      size="sm"
                      className={
                        formData.reminders.length > 0 ? "text-chart-2" : ""
                      }
                    >
                      <Bell className="h-4 w-4" />
                      {formData.reminders.length > 0
                        ? `${formData.reminders.length}`
                        : "Reminders"}
                    </InputGroupButton>
                  </InputGroupAddon>
                  <InputGroupAddon align="block-end" className="border-t">
                    <Popover>
                      <PopoverTrigger asChild>
                        <InputGroupButton size="sm" className="gap-2">
                          {selectedProject
                            ? selectedProject.name
                            : "Select Project"}
                          <ChevronDown className="h-3.5 w-3.5" />
                        </InputGroupButton>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-2" align="start">
                        <div className="space-y-1">
                          {projects.map((project) => (
                            <Button
                              key={project.id}
                              variant={
                                formData.projectId === project.id
                                  ? "secondary"
                                  : "ghost"
                              }
                              className="w-full justify-start"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  projectId: project.id,
                                }))
                              }
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
                      disabled={!formData.title.trim()}
                      variant="default"
                    >
                      <SendHorizonal className="h-4 w-4" />
                      <span className="hidden sm:inline">Add task</span>
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              )}

              <SortableContext
                items={filteredAndSortedTodos.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                <ItemGroup>
                  {filteredAndSortedTodos.length === 0 ? (
                    <div className="py-8 text-center text-sm text-muted-foreground">
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
                        <GripVertical className="size-4 text-muted-foreground" />
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
                      {activeTodo.priority && (
                        <Badge variant="outline" className="text-xs">
                          {activeTodo.priority}
                        </Badge>
                      )}
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

export { Todo7 };
```
