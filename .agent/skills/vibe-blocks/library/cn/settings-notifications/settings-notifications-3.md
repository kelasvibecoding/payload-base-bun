# Settings Notifications 3

## Metadata
- **Category**: Settings Notifications
- **Objective**: Categorized notification management for complex applications.
- **Use Case**: Large platforms with multiple notification domains (Activity, Updates, Account) that require grouping.
- **Visual Style**: Grouped cards with uppercase status categories and bordered containers for each group.
- **Interactivity**: Switch-based toggles within logical data categories.

## Description
Settings Notifications 3 is designed for applications with a high volume of configurable alerts. It organizes preferences into distinct categories (Activity, Updates, Account) with prominent headers. Each category is enclosed in a bordered container with internal dividers, creating a high-end, structured appearance that aids in information hierarchy.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Switch } from "@/components/ui/switch";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

interface NotificationCategory {
  id: string;
  title: string;
  notifications: NotificationItem[];
}

interface SettingsNotifications3Props {
  heading?: string;
  subHeading?: string;
  className?: string;
  categories?: NotificationCategory[];
}

const SettingsNotifications3 = ({
  heading = "Notifications",
  subHeading = "Manage how you receive notifications across different areas",
  categories = [
    {
      id: "activity",
      title: "Activity",
      notifications: [
        {
          id: "comments",
          title: "Comments",
          description: "When someone comments on your posts or replies to you.",
          enabled: true,
        },
        {
          id: "mentions",
          title: "Mentions",
          description: "When someone mentions you in a comment or post.",
          enabled: true,
        },
        {
          id: "follows",
          title: "New followers",
          description: "When someone starts following your account.",
          enabled: false,
        },
      ],
    },
    {
      id: "updates",
      title: "Updates",
      notifications: [
        {
          id: "product-updates",
          title: "Product updates",
          description: "News about new features and improvements.",
          enabled: true,
        },
        {
          id: "tips",
          title: "Tips and tutorials",
          description: "Helpful content to get the most out of the platform.",
          enabled: false,
        },
      ],
    },
    {
      id: "account",
      title: "Account",
      notifications: [
        {
          id: "security",
          title: "Security alerts",
          description: "Important alerts about your account security.",
          enabled: true,
        },
        {
          id: "billing",
          title: "Billing updates",
          description: "Notifications about payments and invoices.",
          enabled: true,
        },
      ],
    },
  ],
  className,
}: SettingsNotifications3Props) => {
  return (
    <section className="py-32">
      <div
        className={cn("container max-w-2xl space-y-10 tracking-tight", className)}
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{heading}</h3>
          <p className="font-medium text-muted-foreground">{subHeading}</p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {category.title}
              </h4>
              <div className="divide-y rounded-lg border">
                {category.notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between gap-4 p-4"
                  >
                    <div className="space-y-0.5">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                    <Switch defaultChecked={notification.enabled} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SettingsNotifications3 };
```
