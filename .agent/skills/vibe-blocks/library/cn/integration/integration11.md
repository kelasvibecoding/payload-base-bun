# Integration 11

## Metadata
- **Category**: App Management Dashboard
- **Objective**: Provide a robust interface for users to filter, view, and manage the connection state of multiple third-party tools.
- **Use Case**: Core administrative screens in SaaS platforms where integration management is a key user workflow.
- **Visual Style**: Industrial/Professional dashboard design. Features a `Tabs` navigation for filtering and categorical headers for grouping integrations. Uses a 3-column responsive grid (`lg:grid-cols-3`) for integration cards. Each card contains metadata, a "Details" button, and a logical `Switch` toggle.
- **Interactivity**: Advanced state management. Includes filtering logic based on connection status (`toggles` state) and real-time UI updates (grouped and filtered views using `groupByCategory` utility). Cards feature transition states (`duration-300`, `shadow-md` on hover).

## Source Code

### `integration11.tsx`
```tsx
"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Integration {
  id: number;
  icon: string;
  title: string;
  description: string;
  category: string;
  categoryDescription: string;
  connected: boolean;
}

const INTEGRATIONS: Integration[] = [
  {
    id: 1,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    title: "Google",
    description:
      "Offers tools for lead generation, email marketing, and customer service.",
    category: "Sales & Marketing Tools",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of your sales and marketing activities",
    connected: true,
  },
  {
    id: 2,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    title: "Github",
    description:
      "Provides comprehensive sales and customer relationship management.",
    category: "Sales & Marketing Tools",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of your sales and marketing activities",
    connected: false,
  },
  {
    id: 3,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    title: "Spotify",
    description:
      "Focuses on sales pipeline management with a visual pipeline management tool.",
    category: "Sales & Marketing Tools",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of your sales and marketing activities",
    connected: false,
  },
  {
    id: 4,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    title: "Slack",
    description:
      "Enables real-time collaboration and updates on CRM activities.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: true,
  },
  {
    id: 5,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    title: "Google",
    description: "Enhances communication and scheduling within the CRM.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: true,
  },
  {
    id: 6,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    title: "Github",
    description: "Supports seamless integrated CRM inside Microsoft Teams.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: false,
  },
  {
    id: 7,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    title: "Spotify",
    description:
      "Provides a unified view of customer interactions and schedules.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: false,
  },
  {
    id: 8,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    title: "Github",
    description:
      "Tracks and manages customer support activities and performance.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: false,
  },
  {
    id: 9,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
    title: "Figma",
    description: "Streamlines customer support and ticketing within the CRM.",
    category: "Communication & Collaboration",
    categoryDescription:
      "Enhancing the efficiency and effectiveness of team interactions and workflows",
    connected: false,
  },
];

const TABS = [
  { label: "All Applications", value: "all" },
  { label: "Connected", value: "connected" },
  { label: "Disconnected", value: "disconnected" },
];

type CategoryGroup = {
  category: string;
  categoryDescription: string;
  integrations: Integration[];
};

function groupByCategory(data: Integration[]): CategoryGroup[] {
  const map = new Map<string, CategoryGroup>();
  data.forEach((item) => {
    if (!map.has(item.category)) {
      map.set(item.category, {
        category: item.category,
        categoryDescription: item.categoryDescription,
        integrations: [],
      });
    }
    map.get(item.category)!.integrations.push(item);
  });
  return Array.from(map.values());
}

interface Integration11Props {
  className?: string;
}

const Integration11 = ({ className }: Integration11Props) => {
  const [tab, setTab] = useState<string>("all");
  const [toggles, setToggles] = useState<Record<number, boolean>>(() => {
    const state: Record<number, boolean> = {};
    INTEGRATIONS.forEach((i) => {
      state[i.id] = i.connected;
    });
    return state;
  });

  let filtered: Integration[] = INTEGRATIONS;
  if (tab === "connected") filtered = INTEGRATIONS.filter((i) => toggles[i.id]);
  if (tab === "disconnected")
    filtered = INTEGRATIONS.filter((i) => !toggles[i.id]);
  const grouped = groupByCategory(filtered);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-6 text-2xl font-bold">Integrations</h1>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-8">
            {TABS.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="px-4 py-2 text-sm font-medium"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TABS.map((t) => (
            <TabsContent key={t.value} value={t.value}>
              {grouped.map((group) => (
                <div key={group.category} className="mb-10">
                  <h2 className="mb-1 text-lg font-semibold">
                    {group.category}
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {group.categoryDescription}
                  </p>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.integrations.map((integration) => (
                      <div
                        key={integration.id}
                        className="flex min-h-[170px] flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition hover:shadow-md"
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 flex-grow-0 items-center justify-center rounded-md bg-muted p-2">
                            <img
                              src={integration.icon}
                              alt={integration.title}
                              width={32}
                              height={32}
                              className="h-8 w-8 flex-shrink-0 flex-grow-0 object-contain"
                            />
                          </div>
                          <div>
                            <div className="text-base leading-tight font-medium">
                              {integration.title}
                            </div>
                            <div className="text-xs leading-snug text-muted-foreground">
                              {integration.description}
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto flex items-center justify-between gap-2">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                          </div>
                          <Switch
                            checked={toggles[integration.id]}
                            onCheckedChange={(checked: boolean) =>
                              setToggles((prev) => ({
                                ...prev,
                                [integration.id]: checked,
                              }))
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Integration11 };
```
