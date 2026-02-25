# Settings Integrations 1

## Metadata
- **Category**: Settings Integrations
- **Objective**: Provide a searchable and filterable directory of available third-party integrations.
- **Use Case**: Platforms with a medium to large marketplace of integrations where users need to quickly find specific tools by name or category (e.g., Communication, Storage, Payments).
- **Visual Style**: Clean grid of interactive cards featuring service logos, titles, and categories, integrated with a prominent search bar and a category-based filter popover.
- **Interactivity**: Real-time search by integration name, multi-select category filtering via a popover menu, and hover-sensitive cards that indicate connectivity.

## Description
Settings Integrations 1 is a user-friendly marketplace interface. It prioritizes discovery by combining robust search functionality with intuitive category filters. The grid layout ensures that many options can be displayed simultaneously without overwhelming the user, making it ideal for software suites that rely on a diverse range of external connections.

## Source Code

```tsx
"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IntegrationItem {
  image: string;
  title: string;
  category: string;
  className?: string;
}

interface IntegrationCardProps {
  integration: IntegrationItem;
  className?: string;
}

const IntegrationCard = ({ integration, className }: IntegrationCardProps) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-xl border p-3 hover:shadow-md",
        className,
      )}
    >
      <img
        src={integration.image}
        alt={integration.title}
        className={cn("size-8", integration.className)}
      />
      <div className="space-y-1 text-sm">
        <p>{integration.title}</p>
        <p className="text-xs">{integration.category}</p>
      </div>
    </div>
  );
};

interface SettingsIntegrations1Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  title?: string;
  integrations?: IntegrationItem[];
}

const SettingsIntegrations1 = ({
  className,
  heading = "Integrations",
  subHeading = "Seamlessly connect with your favorite apps and services.",
  title = "Browse Integrations",
  integrations = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      title: "Slack",
      category: "Communication",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/drive.svg",
      title: "Google Drive",
      category: "Storage",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      title: "Notion",
      category: "Productivity",
      className: "dark:invert",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/jira.svg",
      title: "Jira",
      category: "Project Management",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/asana.svg",
      title: "Asana",
      category: "Project Management",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
      title: "Dropbox",
      category: "Storage",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      category: "Design",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      title: "GitHub",
      category: "Development",
      className: "dark:invert",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/stripe.svg",
      title: "Stripe",
      category: "Payments",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/confluence.svg",
      title: "Confluence",
      category: "Productivity",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/monday.svg",
      title: "Monday",
      category: "Project Management",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/excel.svg",
      title: "Excel",
      category: "Productivity",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
      title: "Vercel",
      category: "Development",
      className: "dark:invert",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg",
      title: "Retool",
      category: "Development",
      className: "dark:invert",
    },
  ],
}: SettingsIntegrations1Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    return [...new Set(integrations.map((i) => i.category))];
  }, [integrations]);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = integration.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(integration.category);
      return matchesSearch && matchesCategory;
    });
  }, [integrations, searchValue, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <section className="py-32">
      <div className="container max-w-4xl">
        <div className={cn("flex flex-col", className)}>
          <div className="space-y-2 border-b pb-6">
            <h3 className="text-2xl font-semibold tracking-tight">{heading}</h3>
            <p className="text-sm font-medium text-muted-foreground">
              {subHeading}
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-lg font-semibold tracking-tight">{title}</p>
            <div className="flex items-center gap-4">
              <div className="relative w-full">
                <Search className="absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-7"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter
                      className={cn(
                        "size-3",
                        selectedCategories.length > 0 && "fill-primary",
                      )}
                    />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-56">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Categories</p>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Label
                          key={category}
                          className="cursor-pointer font-normal"
                        >
                          <Checkbox
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <span className="text-sm">{category}</span>
                        </Label>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredIntegrations.length > 0 ? (
                filteredIntegrations.map((integration, i) => {
                  return (
                    <IntegrationCard
                      key={`integration-${i}-${integration.title}`}
                      integration={integration}
                    />
                  );
                })
              ) : (
                <p className="text-sm">No Integrations Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SettingsIntegrations1 };
```
