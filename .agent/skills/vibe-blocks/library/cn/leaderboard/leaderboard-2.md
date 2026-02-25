# Leaderboard 2

## Metadata
- **Category**: Leaderboard
- **Objective**: Display a ranking of individuals or teams, highlighting their identity and specific achievements.
- **Use Case**: Sales team performance leaderboards, overall user rankings, or employee of the month tracking.
- **Visual Style**: Persona-focused. Uses Shadcn `Avatar` components, numbered ranks, and a two-line layout for name/subtitle to provide more context without cluttering the view.
- **Interactivity**: Read-only presentation. 

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LeaderboardItem {
  name: string;
  subtitle?: string;
  value: string;
  avatar?: string;
}

interface Leaderboard2Props {
  title?: string;
  description?: string;
  items?: LeaderboardItem[];
  className?: string;
}

const defaultItems: LeaderboardItem[] = [
  { name: "Sarah Chen", subtitle: "Sales Team", value: "$48,250", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.jpg" },
  { name: "Marcus Johnson", subtitle: "Sales Team", value: "$42,100", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.jpg" },
  { name: "Emily Rodriguez", subtitle: "Enterprise", value: "$38,750", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.jpg" },
  { name: "David Kim", subtitle: "Sales Team", value: "$35,200", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.jpg" },
  { name: "Lisa Wang", subtitle: "Enterprise", value: "$31,800", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.jpg" },
];

const Leaderboard2 = ({
  title = "Top Performers",
  description = "Sales leaderboard this month",
  items = defaultItems,
  className,
}: Leaderboard2Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="w-6 text-center text-sm font-medium text-muted-foreground">
              {index + 1}
            </span>
            <Avatar className="size-10">
              <AvatarImage src={item.avatar} alt={item.name} className="object-cover" />
              <AvatarFallback>
                {item.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium">{item.name}</p>
              {item.subtitle && (
                <p className="truncate text-sm text-muted-foreground">
                  {item.subtitle}
                </p>
              )}
            </div>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export { Leaderboard2 };
```
