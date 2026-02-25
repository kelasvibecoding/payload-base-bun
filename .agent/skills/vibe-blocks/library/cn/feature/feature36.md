# Feature 36

## Metadata
- **Category**: Feature
- **Objective**: Case study card grid with a large hero card spanning two columns and rows.
- **Use Case**: Content marketing landing pages, agency case study sections, or blog/article listing grids.
- **Visual Style**: "Case Study Bento Grid" aesthetic. `lg:grid-cols-3 gap-5` grid. Hero card: `lg:col-span-2 lg:row-span-2`, `bg-accent`, `p-12 lg:p-20`, with a `Badge`, large `lg:text-5xl` heading, description, and "Continue reading" text. Five smaller cards: `bg-accent p-12`, label + `text-xl` heading + "Continue reading" link. All cards: `border-transparent hover:border-primary` transition using Tailwind `group` pattern.
- **Interactivity**: Hover border highlight (`hover:border-primary`) on all cards. "Continue reading" underlines on group hover.

## Source Code

### `feature36.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Feature36Props {
  className?: string;
}

const Feature36 = ({ className }: Feature36Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <a className="group lg:col-span-2 lg:row-span-2" href="#">
            <Card className="h-full items-start border border-transparent bg-accent p-12 hover:cursor-pointer hover:border-primary lg:p-20">
              <div className="flex flex-col gap-8">
                <Badge className="w-fit">Studies</Badge>
                <div className="flex flex-col gap-6">
                  <p className="text-base lg:text-lg lg:font-medium">
                    Case Study
                  </p>
                  <h3 className="text-xl font-medium lg:text-5xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="lg:text-lg lg:font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat cupiditate dicta accusamus quae nesciunt deserunt
                    cum deleniti atque consequuntur quis!
                  </p>
                </div>
                <p className="font-medium group-hover:underline">
                  Continue reading
                </p>
              </div>
            </Card>
          </a>
          {[...Array(5)].map((_, i) => (
            <a key={i} className="group" href="#">
              <Card className="h-full items-start border border-transparent bg-accent p-12 hover:cursor-pointer hover:border-primary">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <p>Case Study</p>
                    <h3 className="text-xl font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </div>
                  <p className="font-medium group-hover:underline">
                    Continue reading
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature36 };
```
