# Todo List 3

## Metadata
- **Category**: Todo List
- **Objective**: Display active and completed todo items with drag-and-drop and collapsible completed section.
- **Use Case**: Task management list with separate active/completed sections, drag reordering, and completion animation.
- **Visual Style**: Clean layout with separate sections for active and completed tasks, collapsible completed section.
- **Interactivity**: Drag-and-drop reordering, toggle completion with animation, collapsible completed section.

## Description
A comprehensive todo list with separate active/completed sections, drag-and-drop reordering, completion animation for tasks, and collapsible completed section to manage task visibility.

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
import { ChevronDown, GripVertical } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  {
    id: "4",
    title: "Morning workout routine",
    completed: true,
  },
  {
    id: "5",
    title: "Read React documentation",
    completed: false,
  },
  {
    id: "6",
    title: "Update project documentation",
    completed: true,
  },
];

type Todo = (typeof initialTodos)[number];

interface SortableTodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  isAnimating?: boolean;
}

const SortableTodoItem = ({
  todo,
  onToggle,
  isAnimating = false,
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
        variant={todo.completed || isAnimating ? "muted" : "default"}
        className={`cursor-pointer items-center border-b transition-all duration-500 ${
          isAnimating ? "opacity-0" : todo.completed ? "opacity-60" : ""
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
              checked={todo.completed || isAnimating}
              onCheckedChange={() => onToggle(todo.id)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle
            className={`transition-all duration-500 ${
              todo.completed || isAnimating
                ? "text-muted-foreground line-through"
                : ""
            }`}
          >
            {todo.title}
          </ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
};

const Todo3 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [isCompletedExpanded, setIsCompletedExpanded] = useState(true);
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const [animatingTodoId, setAnimatingTodoId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const toggleTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    // If completing a todo, animate first
    if (!todo.completed) {
      setAnimatingTodoId(id);
      setTimeout(() => {
        setTodos((prevTodos) =>
          prevTodos.map((t) => (t.id === id ? { ...t, completed: true } : t)),
        );
        setAnimatingTodoId(null);
      }, 1000);
    } else {
      // If uncompleting, do it immediately
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? { ...t, completed: false } : t)),
      );
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

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Drag & Drop Todo List with Completed Tasks
          </h2>
          <p className="text-muted-foreground">
            Reorder tasks by dragging, toggle completion, and manage completed
            items in a collapsible section
          </p>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex max-w-2xl flex-col gap-6">
            {activeTodos.length > 0 && (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  Active ({activeTodos.length})
                </h3>
                <SortableContext
                  items={activeTodos.map((t) => t.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <ItemGroup>
                    {activeTodos.map((todo) => (
                      <SortableTodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        isAnimating={animatingTodoId === todo.id}
                      />
                    ))}
                  </ItemGroup>
                </SortableContext>
              </div>
            )}

            {completedTodos.length > 0 && (
              <div className="border-border/50 flex flex-col gap-3 border-t pt-6">
                <button
                  onClick={() => setIsCompletedExpanded(!isCompletedExpanded)}
                  className="text-muted-foreground hover:text-foreground group flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <ChevronDown
                    className={`text-muted-foreground size-3.5 transition-transform duration-200 ${
                      isCompletedExpanded ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                  <span>Completed</span>
                  <span className="bg-muted/60 text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-medium">
                    {completedTodos.length}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isCompletedExpanded
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ItemGroup>
                    {completedTodos.map((todo) => (
                      <Item
                        key={todo.id}
                        variant="muted"
                        className="cursor-pointer items-center border-b opacity-60 transition-all duration-500 hover:opacity-80"
                        onClick={() => toggleTodo(todo.id)}
                      >
                        <ItemMedia>
                          <Checkbox
                            checked={todo.completed}
                            onCheckedChange={() => toggleTodo(todo.id)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground line-through">
                            {todo.title}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                    ))}
                  </ItemGroup>
                </div>
              </div>
            )}
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

export { Todo3 };
```
