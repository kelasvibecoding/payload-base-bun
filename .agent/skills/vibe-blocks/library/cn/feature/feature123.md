# Feature 123

## Metadata
- **Category**: Feature
- **Objective**: Minimalist side-aligned capability list with high-contrast gradient separators.
- **Use Case**: Narrative capability sections, product philosophy explainers, or high-end agency "Principles" sections.
- **Visual Style**: "Linear Gradient Pillar" aesthetic. `lg:flex-row` container split. Left: sticky narrative block with an uppercase `muted-foreground` label ("Build with blocks") and extrabold heading. Right: dynamic vertical list of features. Each feature point is anchored by an `absolute` left border (`w-1`) featuring a vibrant `bg-linear-to-b from-blue-500 to-purple-500` gradient, creating a distinct visual "scroll timeline" feel.
- **Interactivity**: Static layout. High informational clarity.

## Source Code

### `feature123.tsx`
```tsx
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Performance",
    description: "Lorem ipsum dolor sit amet...",
  },
  // ... more items
];

const Feature123 = ({ className }: Feature123Props) => {
  return (
    <section className={cn("container flex flex-col gap-20 py-32 lg:flex-row", className)}>
      <div className="w-full max-w-[400px]">
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Build with blocks</span>
        <h2 className="mt-4 mb-8 text-3xl font-extrabold italic tracking-tighter">Built with the latest stack</h2>
        <p className="text-xl text-muted-foreground italic">Lorem ipsum...</p>
      </div>
      <div className="flex flex-col gap-14 lg:gap-20">
        {items.map((item) => (
          <div className="relative pl-7 transition-all hover:translate-x-1" key={item.title}>
            {/* Visual Indicator */}
            <div className="absolute top-0 left-0 h-full w-1.5 bg-linear-to-b from-blue-500 to-purple-500 shadow-lg rounded-full" />
            <p className="mb-1 text-xl font-bold italic tracking-tight">{item.title}</p>
            <p className="text-base text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Feature123 };
```
