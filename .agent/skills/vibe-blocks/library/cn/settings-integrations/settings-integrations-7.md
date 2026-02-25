# Settings Integrations 7

## Metadata
- **Category**: Settings Integrations
- **Objective**: Provide a premium, featured-card directory with persistent status visibility and categorization.
- **Use Case**: High-end SaaS platforms or creative suites where the "marketplace" is a key feature and users need both search and at-a-glance connection tracking.
- **Visual Style**: High-contrast cards with distinct "body" and "footer" sections, utilizing shadowed transitions, categorical footers, and icon badges for a professional look.
- **Interactivity**: Dynamic search with empty-state results, persistent "connected count" tracker, and interactive "Connect/Connected" buttons that use checkmarks and state-aware styling.

## Description
Settings Integrations 7 represents a premium directory experience. By using larger cards with distinct functional areas (content in the body, metadata in the footer), it elevates each integration to a "feature" status. The integration of a global search bar and a connection counter makes it highly navigable and informative, providing users with a clear sense of how much of the ecosystem they are currently utilizing.

## Source Code

```tsx
"use client";

import { Check, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IntegrationItem {
  image: string;
  title: string;
  description: string;
  isConnected?: boolean;
  category: string;
  className?: string;
}

interface IntegrationCardProps {
  integration: IntegrationItem;
  onToggle?: (title: string) => void;
}

const IntegrationCard = ({ integration, onToggle }: IntegrationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border bg-background">
            <img
              src={integration.image}
              alt={integration.title}
              className={cn("size-8", integration.className)}
            />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold">{integration.title}</h3>
            <p className="text-sm text-muted-foreground">
              {integration.description}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t bg-muted/30 px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {integration.category}
          </span>
          <Button
            size="sm"
            variant={integration.isConnected ? "secondary" : "default"}
            className="h-8"
            onClick={() => onToggle?.(integration.title)}
          >
            {integration.isConnected ? (
              <>
                <Check className="size-3.5" />
                Connected
              </>
            ) : (
              <>
                <Plus className="size-3.5" />
                Connect
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface SettingsIntegrations7Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  integrations?: IntegrationItem[];
}

const SettingsIntegrations7 = ({
  className,
  heading = "App Integrations",
  subHeading = "Connect your favorite tools to supercharge your workflow.",
  integrations: initialIntegrations = [
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      title: "Slack",
      description: "Get real-time notifications in your channels.",
      isConnected: true,
      category: "Communication",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/discord-icon.svg",
      title: "Discord",
      description: "Send alerts to your Discord server.",
      category: "Communication",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
      title: "Google Drive",
      description: "Sync and backup files automatically.",
      isConnected: true,
      category: "Storage",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
      title: "Dropbox",
      description: "Access your Dropbox files seamlessly.",
      category: "Storage",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      title: "GitHub",
      description: "Link repositories and track commits.",
      isConnected: true,
      category: "Development",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gitlab-icon.svg",
      title: "GitLab",
      description: "Connect GitLab for CI/CD integration.",
      category: "Development",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      title: "Notion",
      description: "Sync pages and databases bidirectionally.",
      category: "Productivity",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linear-icon.svg",
      title: "Linear",
      description: "Create and manage issues from here.",
      isConnected: true,
      category: "Productivity",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/stripe-icon.svg",
      title: "Stripe",
      description: "Process payments and subscriptions.",
      isConnected: true,
      category: "Payments",
    },
  ],
}: SettingsIntegrations7Props) => {
  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [searchValue, setSearchValue] = useState("");

  const filteredIntegrations = useMemo(() => {
    if (!searchValue) return integrations;
    return integrations.filter(
      (i) =>
        i.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        i.category.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [integrations, searchValue]);

  const handleToggle = (title: string) => {
    setIntegrations((prev) =>
      prev.map((i) =>
        i.title === title ? { ...i, isConnected: !i.isConnected } : i
      )
    );
  };

  const connectedCount = integrations.filter((i) => i.isConnected).length;

  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
            <p className="text-muted-foreground">{subHeading}</p>
            <p className="text-sm text-muted-foreground">
              {connectedCount} of {integrations.length} integrations connected
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search integrations..."
              className="pl-9"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((integration) => (
            <IntegrationCard
              key={integration.title}
              integration={integration}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No integrations matching &quot;{searchValue}&quot; found
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { SettingsIntegrations7 };
```
