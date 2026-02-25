# Settings Integrations 4

## Metadata
- **Category**: Settings Integrations
- **Objective**: Provide a categorized, action-oriented integration management interface using tabs.
- **Use Case**: Applications with a diverse ecosystem where users need to manage connections across different functional areas like Communication, Storage, and Payments.
- **Visual Style**: Clean layout featuring a tabbed navigation bar for categories and detailed integration cards with connection status badges and primary action buttons.
- **Interactivity**: Dynamic filtering by category through tab switching, and state-aware primary buttons that toggle between "Connect" and "Disconnect" states with immediate visual feedback.

## Description
Settings Integrations 4 is built for manageable complexity. By organizing integrations into logical categories via tabs, it prevents user overwhelm while providing high-density information for each tool. The explicit "Connect/Disconnect" buttons make the management lifecycle clear, ensuring users feel in control of their external data flows.

## Source Code

```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <img
        src={integration.image}
        alt={integration.title}
        className={cn("size-10 shrink-0", integration.className)}
      />
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <p className="font-medium">{integration.title}</p>
          {integration.isConnected && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Connected
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {integration.description}
        </p>
      </div>
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          integration.isConnected
            ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            : "bg-primary text-primary-foreground shadow hover:bg-primary/90"
        )}
        onClick={() => onToggle?.(integration.title)}
      >
        {integration.isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

interface SettingsIntegrations4Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  integrations?: IntegrationItem[];
}

const SettingsIntegrations4 = ({
  className,
  heading = "Integrations",
  subHeading = "Connect your favorite tools and services to streamline your workflow.",
  integrations: initialIntegrations = [
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      title: "Slack",
      description: "Send notifications and updates to your team channels.",
      isConnected: true,
      category: "communication",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/discord-icon.svg",
      title: "Discord",
      description: "Connect your Discord server for real-time alerts.",
      category: "communication",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/microsoft-teams-icon.svg",
      title: "Microsoft Teams",
      description: "Integrate with Teams for seamless collaboration.",
      category: "communication",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
      title: "Google Drive",
      description: "Access and sync files from your Google Drive.",
      isConnected: true,
      category: "storage",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
      title: "Dropbox",
      description: "Store and share files securely in the cloud.",
      category: "storage",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/microsoft-onedrive-icon.svg",
      title: "OneDrive",
      description: "Sync your Microsoft OneDrive files and folders.",
      category: "storage",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      title: "GitHub",
      description: "Connect repositories and automate workflows.",
      isConnected: true,
      category: "development",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gitlab-icon.svg",
      title: "GitLab",
      description: "Integrate with GitLab for CI/CD pipelines.",
      category: "development",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
      title: "Vercel",
      description: "Deploy and preview your web applications.",
      category: "development",
      className: "dark:invert",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/stripe-icon.svg",
      title: "Stripe",
      description: "Process payments and manage subscriptions.",
      isConnected: true,
      category: "payments",
    },
    {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/paypal-icon.svg",
      title: "PayPal",
      description: "Accept PayPal payments from customers.",
      category: "payments",
    },
  ],
}: SettingsIntegrations4Props) => {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  const categories = [...new Set(integrations.map((i) => i.category))];

  const handleToggle = (title: string) => {
    setIntegrations((prev) =>
      prev.map((i) =>
        i.title === title ? { ...i, isConnected: !i.isConnected } : i
      )
    );
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-4xl">
        <div className="space-y-2 border-b pb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
          <p className="text-sm text-muted-foreground">{subHeading}</p>
        </div>

        <Tabs defaultValue={categories[0]} className="mt-6">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {getCategoryLabel(category)}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="space-y-4">
                {integrations
                  .filter((i) => i.category === category)
                  .map((integration) => (
                    <IntegrationCard
                      key={integration.title}
                      integration={integration}
                      onToggle={handleToggle}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { SettingsIntegrations4 };
```
