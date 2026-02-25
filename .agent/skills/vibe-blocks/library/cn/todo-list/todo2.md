# Todo List 2

## Metadata
- **Category**: Todo List
- **Objective**: Display and manage todo items with drag-and-drop reordering.
- **Use Case**: Task management list where users can reorder tasks by dragging.
- **Visual Style**: Clean item group layout with grip handles for drag-and-drop.
- **Interactivity**: Drag-and-drop reordering, toggle task completion status.

## Description
A drag-and-drop todo list component with grip handles for reordering tasks, visual feedback for completed items, and smooth drag animations.

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
import { GripVertical } from "lucide-react";
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
];

type Todo = (typeof initialTodos)[number];

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

const Todo2 = () => {
  const [todos, setTodos] = useState(initialTodos);
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
              Drag & Drop Todo List
            </h2>
            <p className="text-muted-foreground">
              Reorder tasks by dragging with grip handle, toggle completion
              status
            </p>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todos.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <ItemGroup className="max-w-2xl">
                {todos.map((todo) => (
                  <SortableTodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                  />
                ))}
              </ItemGroup>
            </SortableContext>
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

export { Todo2 };
```
