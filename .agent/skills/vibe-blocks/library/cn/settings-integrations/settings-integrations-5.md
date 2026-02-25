# Settings Integrations 5

## Metadata
- **Category**: Settings Integrations
- **Objective**: Provide a simplified account-level integration list with binary (switch-based) connection management.
- **Use Case**: User settings pages where users can quickly toggle access for third-party apps they've previously authorized.
- **Visual Style**: Compact list within a single bordered container, utilizing switch controls for connection management and square, bordered logo containers for a technical, consistent look.
- **Interactivity**: Binary connection toggling via switches, with immediate state persistence and a clean, single-column scanning experience.

## Description
Settings Integrations 5 is designed for administrative simplicity. By using switches instead of buttons, it communicates a "persistent connection" state that users can easily manage with a single click. The contained list design is perfect for integration into existing settings layouts without occupying excessive vertical space.

## Source Code

```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Switch } from "@/components/ui/switch";

interface IntegrationItem {
  image: string;
  title: string;
  description: string;
  isConnected?: boolean;
  className?: string;
}

interface IntegrationRowProps {
  integration: IntegrationItem;
  onToggle?: (title: string) => void;
}

const IntegrationRow = ({ integration, onToggle }: IntegrationRowProps) => {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg border bg-muted/50">
          <img
            src={integration.image}
            alt={integration.title}
            className={cn("size-7", integration.className)}
          />
        </div>
        <div className="space-y-0.5">
          <p className="font-medium">{integration.title}</p>
          <p className="text-sm text-muted-foreground">
            {integration.description}
          </p>
        </div>
      </div>
      <Switch
        checked={integration.isConnected}
        onCheckedChange={() => onToggle?.(integration.title)}
      />
    </div>
  );
};

interface SettingsIntegrations5Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  integrations?: IntegrationItem[];
}

const SettingsIntegrations5 = ({
  className,
  heading = "Connected Apps",
  subHeading = "Manage which applications have access to your account.",
  integrations: initialIntegrations = [
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      title: "Slack",
      description: "Receive notifications in your Slack workspace",
      isConnected: true,
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
      title: "Google Drive",
      description: "Sync documents and files automatically",
      isConnected: true,
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      title: "Notion",
      description: "Export data to your Notion workspace",
      isConnected: false,
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      title: "GitHub",
      description: "Connect repositories for issue tracking",
      isConnected: true,
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      description: "Import designs directly from Figma",
      isConnected: false,
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/jira-icon.svg",
      title: "Jira",
      description: "Sync tasks and issues with Jira projects",
      isConnected: true,
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linear-icon.svg",
      title: "Linear",
      description: "Create and track issues in Linear",
      isConnected: false,
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/stripe-icon.svg",
      title: "Stripe",
      description: "Process payments and view transactions",
      isConnected: true,
    },
  ],
}: SettingsIntegrations5Props) => {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  const handleToggle = (title: string) => {
    setIntegrations((prev) =>
      prev.map((i) =>
        i.title === title ? { ...i, isConnected: !i.isConnected } : i
      )
    );
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-2xl">
        <div className="rounded-lg border">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">{heading}</h2>
            <p className="text-sm text-muted-foreground">{subHeading}</p>
          </div>
          <div className="divide-y px-6">
            {integrations.map((integration) => (
              <IntegrationRow
                key={integration.title}
                integration={integration}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SettingsIntegrations5 };
```
