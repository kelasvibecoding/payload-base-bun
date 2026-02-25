# Settings Integrations 9

## Metadata
- **Category**: Settings Integrations
- **Objective**: Provide a transparent, management-focused list of active integrations including authorship and activity tracking.
- **Use Case**: Collaborative teams where it's important to know which user connected a specific service and when it was last active (e.g., "Connected by Alex Morgan", "Last commit 2h ago").
- **Visual Style**: Professional card-based list featuring large shadowed cards, detailed avatars for authorship, status indicators, and subtle "group-hover" action menus.
- **Interactivity**: Contextual dropdown menus for each integration (Open settings, Reconnect, Remove), authorship display with avatars, and real-time status/activity labels.

## Description
Settings Integrations 9 is optimized for accountability and operational transparency. Unlike marketplace-style directories, it focuses on the "live" state of connections within a team. By displaying who initiated the connection and the most recent activity data, it serves as a powerful audit and management tool for complex workspaces where multiple users manage external service integrations.

## Source Code

```tsx
"use client";

import { ExternalLink, MoreHorizontal, RefreshCw, Trash2 } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IntegrationItem {
  image: string;
  title: string;
  description: string;
  status: "active" | "inactive" | "error";
  connectedBy?: {
    name: string;
    avatar: string;
  };
  lastActivity?: string;
  className?: string;
}

interface SettingsIntegrations9Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  integrations?: IntegrationItem[];
}

const SettingsIntegrations9 = ({
  className,
  heading = "Connected Integrations",
  subHeading = "Manage your active integrations and their permissions.",
  integrations: initialIntegrations = [
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      title: "Slack",
      description: "Workspace notifications and alerts",
      status: "active",
      connectedBy: {
        name: "Alex Morgan",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-1.webp",
      },
      lastActivity: "Active now",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
      title: "Google Drive",
      description: "File sync and backup",
      status: "active",
      connectedBy: {
        name: "Jordan Lee",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-2.webp",
      },
      lastActivity: "Synced 5 min ago",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      title: "GitHub",
      description: "Repository webhooks",
      status: "active",
      connectedBy: {
        name: "Sam Chen",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-3.webp",
      },
      lastActivity: "Last commit 2h ago",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      title: "Notion",
      description: "Documentation sync",
      status: "error",
      connectedBy: {
        name: "Taylor Kim",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-4.webp",
      },
      lastActivity: "Sync failed",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      description: "Design file imports",
      status: "inactive",
      connectedBy: {
        name: "Casey Park",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-5.webp",
      },
      lastActivity: "Paused",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/stripe-icon.svg",
      title: "Stripe",
      description: "Payment processing",
      status: "active",
      connectedBy: {
        name: "Riley Johnson",
        avatar:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar-6.webp",
      },
      lastActivity: "12 transactions today",
    },
  ],
}: SettingsIntegrations9Props) => {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  const handleRemove = (title: string) => {
    setIntegrations((prev) => prev.filter((i) => i.title !== title));
  };

  const getStatusBadge = (status: IntegrationItem["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active
          </Badge>
        );
      case "inactive":
        return <Badge variant="secondary">Paused</Badge>;
      case "error":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Error
          </Badge>
        );
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-4xl">
        <div className="mb-8 flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
            <p className="text-muted-foreground">{subHeading}</p>
          </div>
          <Button>Add Integration</Button>
        </div>

        <div className="space-y-4">
          {integrations.map((integration) => (
            <div
              key={integration.title}
              className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border bg-muted/50">
                  <img
                    src={integration.image}
                    alt={integration.title}
                    className={cn("size-8", integration.className)}
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{integration.title}</h3>
                        {getStatusBadge(integration.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {integration.description}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <ExternalLink className="mr-2 size-4" />
                          Open settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 size-4" />
                          Reconnect
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => handleRemove(integration.title)}
                        >
                          <Trash2 className="mr-2 size-4" />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {integration.connectedBy && (
                      <div className="flex items-center gap-2">
                        <div className="size-5 overflow-hidden rounded-full">
                          <img
                            src={integration.connectedBy.avatar}
                            alt={integration.connectedBy.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <span>Connected by {integration.connectedBy.name}</span>
                      </div>
                    )}
                    {integration.lastActivity && (
                      <>
                        <span>•</span>
                        <span>{integration.lastActivity}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {integrations.length === 0 && (
          <div className="rounded-xl border border-dashed py-12 text-center">
            <p className="text-muted-foreground">
              No integrations connected yet.
            </p>
            <Button className="mt-4">Browse Integrations</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { SettingsIntegrations9 };
```
