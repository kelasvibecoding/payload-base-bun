# Todo List 5

## Metadata
- **Category**: Todo List
- **Objective**: Display todo items with full CRUD functionality and drag-and-drop reordering.
- **Use Case**: Comprehensive task management list where users can create, read, update, delete, and reorder tasks.
- **Visual Style**: Clean layout with expandable add task form, sortable task list, and context menu for edit/delete actions.
- **Interactivity**: Drag-and-drop reordering, toggle completion, expandable add task form, edit task functionality, delete task with confirmation dialog, keyboard shortcuts.

## Description
A comprehensive todo list with full CRUD functionality, drag-and-drop reordering, edit task functionality, delete task with confirmation dialog, and expandable add task form. Includes keyboard shortcuts for efficient task management.

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
import { Check, Edit, GripVertical, MoreVertical, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

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
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const initialTodos = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
  },
  {
    id: "2",
    title: "Purchase Shadcn blocks from shadcnblocks.com",
    completed: false,
  },
  {
    id: "3",
    title: "Buy groceries",
    completed: false,
  },
];

type Todo = (typeof initialTodos)[number];

interface SortableTodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  editingTodo: string | null;
  editTitle: string;
  onStartEdit: (todo: Todo) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onEditTitleChange: (title: string) => void;
  onDeleteClick: (id: string) => void;
}

const SortableTodoItem = ({
  todo,
  onToggle,
  editingTodo,
  editTitle,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTitleChange,
  onDeleteClick,
}: SortableTodoItemProps) => {
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
        className={`group cursor-pointer items-center border-b transition-opacity ${
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
          {editingTodo === todo.id ? (
            <Input
              value={editTitle}
              onChange={(e) => onEditTitleChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSaveEdit();
                }
                if (e.key === "Escape") {
                  onCancelEdit();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="text-base font-medium"
              autoFocus
            />
          ) : (
            <ItemTitle
              className={
                todo.completed ? "text-muted-foreground line-through" : ""
              }
            >
              {todo.title}
            </ItemTitle>
          )}
        </ItemContent>
        <ItemActions>
          {editingTodo === todo.id ? (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onSaveEdit();
                }}
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onCancelEdit();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartEdit(todo);
                  }}
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(todo.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ItemActions>
      </Item>
    </div>
  );
};

const Todo5 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<string | null>(null);
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
      const newTodo = {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTaskTitle("");
      setIsFormExpanded(false);
    }
  };

  const handleStartEdit = (todo: (typeof initialTodos)[number]) => {
    setEditingTodo(todo.id);
    setEditTitle(todo.title);
  };

  const handleSaveEdit = () => {
    if (editingTodo && editTitle.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodo ? { ...todo, title: editTitle.trim() } : todo,
        ),
      );
      setEditingTodo(null);
      setEditTitle("");
    }
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditTitle("");
  };

  const handleDeleteClick = (id: string) => {
    setTodoToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (todoToDelete) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoToDelete));
      setDeleteDialogOpen(false);
      setTodoToDelete(null);
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const todo = todos.find((t) => t.id === active.id);
    setActiveTodo(todo || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTodos((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveTodo(null);
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Drag & Drop Todo List with Edit and Delete
          </h2>
          <p className="text-muted-foreground">
            Create, reorder, edit, and delete tasks with drag and drop support
          </p>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex flex-col gap-4 max-w-2xl">
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
            <div className="flex flex-col gap-2 border rounded-lg p-4">
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
              items={todos.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <ItemGroup>
                {todos.map((todo) => (
                  <SortableTodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    editingTodo={editingTodo}
                    editTitle={editTitle}
                    onStartEdit={handleStartEdit}
                    onSaveEdit={handleSaveEdit}
                    onCancelEdit={handleCancelEdit}
                    onEditTitleChange={setEditTitle}
                    onDeleteClick={handleDeleteClick}
                  />
                ))}
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
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete task?</DialogTitle>
            <DialogDescription>
              This task will be permanently deleted. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export { Todo5 };
```
