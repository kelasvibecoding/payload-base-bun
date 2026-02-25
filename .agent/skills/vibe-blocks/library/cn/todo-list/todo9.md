# Todo List 9

## Metadata
- **Category**: Todo List
- **Objective**: Display todo items with tag management, search functionality, and drag-and-drop reordering.
- **Use Case**: Task management system where users can add/remove tags, search tasks, filter by tags, and reorder tasks.
- **Visual Style**: Clean layout with search bar, tag filter badges, sortable task list with tag management interface.
- **Interactivity**: Drag-and-drop reordering, toggle task completion, add/remove tags from tasks, real-time search, tag-based filtering.

## Description
A todo list with real-time search functionality, tag-based filtering, ability to add/remove tags from any task, drag-and-drop reordering, and visual tag badges for easy identification.

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
import { GripVertical, Plus, Search, Tag, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  tags: string[];
}

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
    tags: ["work", "urgent", "documentation"],
  },
  {
    id: "2",
    title: "Purchase Shadcn blocks from shadcnblocks.com",
    completed: false,
    tags: ["work", "code-review"],
  },
  {
    id: "3",
    title: "Buy groceries",
    completed: false,
    tags: ["personal", "shopping"],
  },
  {
    id: "4",
    title: "Morning workout routine",
    completed: true,
    tags: ["health", "fitness"],
  },
  {
    id: "5",
    title: "Read React documentation",
    completed: false,
    tags: ["learning", "work"],
  },
];

const availableTags = [
  "work",
  "personal",
  "urgent",
  "shopping",
  "health",
  "fitness",
  "learning",
  "documentation",
  "code-review",
];

interface SortableTodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemoveTag: (id: string, tag: string) => void;
  onAddTag: (id: string, tag: string) => void;
}

const SortableTodoItem = ({
  todo,
  onToggle,
  onRemoveTag,
  onAddTag,
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ItemTitle
                className={
                  todo.completed ? "text-muted-foreground line-through" : ""
                }
              >
                {todo.title}
              </ItemTitle>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {todo.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveTag(todo.id, tag);
                  }}
                >
                  {tag}
                  <X className="ml-1 size-3" />
                </Badge>
              ))}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Plus className="size-3" />
                    <Tag className="size-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2" align="start">
                  <div className="space-y-1">
                    {availableTags
                      .filter((tag) => !todo.tags.includes(tag))
                      .map((tag) => (
                        <Button
                          key={tag}
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => onAddTag(todo.id, tag)}
                        >
                          <Tag className="mr-2 size-3" />
                          {tag}
                        </Button>
                      ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </ItemContent>
      </Item>
    </div>
  );
};

const Todo9 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
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

  const removeTag = (id: string, tag: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, tags: todo.tags.filter((t) => t !== tag) }
          : todo,
      ),
    );
  };

  const addTag = (id: string, tag: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id && !todo.tags.includes(tag)
          ? { ...todo, tags: [...todo.tags, tag] }
          : todo,
      ),
    );
  };

  const toggleTagFilter = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Search filter
      if (
        searchQuery &&
        !todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const hasSelectedTag = selectedTags.some((tag) =>
          todo.tags.includes(tag),
        );
        if (!hasSelectedTag) return false;
      }

      return true;
    });
  }, [todos, searchQuery, selectedTags]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    todos.forEach((todo) => {
      todo.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [todos]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const todo = filteredTodos.find((t) => t.id === active.id);
    setActiveTodo(todo || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = filteredTodos.findIndex((item) => item.id === active.id);
      const newIndex = filteredTodos.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const reorderedFiltered = arrayMove(filteredTodos, oldIndex, newIndex);
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
            Todo List with Search & Tags
          </h2>
          <p className="text-muted-foreground">
            Real-time search, multiple tags per task, tag-based filtering, and
            drag to reorder. Add or remove tags from any task.
          </p>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground text-sm">Filter by tags:</span>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTagFilter(tag)}
                  >
                    <Tag className="mr-1 size-3" />
                    {tag}
                  </Badge>
                ))}
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTags([])}
                  >
                    <X className="mr-1 size-3" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>

            <SortableContext
              items={filteredTodos.map((t) => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <ItemGroup>
                {filteredTodos.length === 0 ? (
                  <div className="text-muted-foreground py-8 text-center text-sm">
                    {searchQuery || selectedTags.length > 0
                      ? "No tasks match your search"
                      : "No tasks"}
                  </div>
                ) : (
                  filteredTodos.map((todo) => (
                    <SortableTodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={toggleTodo}
                      onRemoveTag={removeTag}
                      onAddTag={addTag}
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
                    <Button variant="ghost" size="icon-sm" className="cursor-grabbing">
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

export { Todo9 };
```
