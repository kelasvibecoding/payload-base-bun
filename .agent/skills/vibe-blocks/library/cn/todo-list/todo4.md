# Todo List 4

## Metadata
- **Category**: Todo List
- **Objective**: Display todo items with drag-and-drop reordering and ability to add new tasks.
- **Use Case**: Task management list where users can create new tasks, reorder them, and toggle completion.
- **Visual Style**: Clean layout with expandable add task form and sortable task list.
- **Interactivity**: Drag-and-drop reordering, toggle completion, expandable add task form, keyboard shortcuts for adding/canceling tasks.

## Description
A todo list with expandable add task form, drag-and-drop reordering, completion toggle, and animation for newly added tasks. Includes keyboard shortcuts for efficient task management.

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
import { GripVertical, Plus, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Item,
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
  isNew?: boolean;
}

const SortableTodoItem = ({
  todo,
  onToggle,
  isNew = false,
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
    <div
      ref={setNodeRef}
      style={style}
      className={isNew ? "animate-in fade-in duration-500" : ""}
    >
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
          <ItemTitle
            className={
              todo.completed ? "text-muted-foreground line-through" : ""
            }
          >
            {todo.title}
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
};

const Todo4 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const [newTodoIds, setNewTodoIds] = useState<Set<string>>(new Set());

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
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoIds((prev) => new Set(prev).add(newTodo.id));
      setNewTaskTitle("");
      setIsFormExpanded(false);

      // Remove the "new" flag after animation completes
      setTimeout(() => {
        setNewTodoIds((prev) => {
          const updated = new Set(prev);
          updated.delete(newTodo.id);
          return updated;
        });
      }, 500);
    }
  };

  const handleCancel = () => {
    setNewTaskTitle("");
    setIsFormExpanded(false);
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
            Drag & Drop Todo List with Create Task
          </h2>
          <p className="text-muted-foreground">
            Create new tasks, reorder by dragging, and toggle completion status
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
                      handleCancel();
                    }
                  }}
                  className="text-base font-medium"
                />
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleCancel}
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
                    isNew={newTodoIds.has(todo.id)}
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
    </section>
  );
};

export { Todo4 };
```
