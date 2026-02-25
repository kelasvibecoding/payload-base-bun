# Todo List 1

## Metadata
- **Category**: Todo List
- **Objective**: Display and manage simple todo items with completion toggle.
- **Use Case**: Basic task management list with click-to-complete functionality.
- **Visual Style**: Clean item group layout with checkbox indicators.
- **Interactivity**: Click to toggle task completion status, checkbox input for toggle.

## Description
A simple todo list component with click-to-complete functionality, visual feedback for completed tasks, and clean item group layout.

## Source Code
```tsx
"use client";

import { useState } from "react";

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

const Todo1 = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Simple Todo List
            </h2>
            <p className="text-muted-foreground">
              Click tasks to toggle completion status with visual feedback
            </p>
          </div>
          <ItemGroup>
            {todos.map((todo) => (
              <Item
                key={todo.id}
                variant={todo.completed ? "muted" : "default"}
                className={`cursor-pointer items-center border-b transition-opacity ${
                  todo.completed ? "opacity-60" : ""
                }`}
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
                  <ItemTitle
                    className={
                      todo.completed ? "text-muted-foreground line-through" : ""
                    }
                  >
                    {todo.title}
                  </ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </section>
  );
};

export { Todo1 };
```
