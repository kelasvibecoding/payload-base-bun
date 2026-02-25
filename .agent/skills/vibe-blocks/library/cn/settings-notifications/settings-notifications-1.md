# Settings Notifications 1

## Metadata
- **Category**: Settings Notifications
- **Objective**: Simple checkbox-based notification list for basic preference settings.
- **Use Case**: Standard user settings where a list of simple toggles is sufficient for notification management.
- **Visual Style**: Clean, single-column layout with a divided list. Uses checkboxes for interaction.
- **Interactivity**: Basic checkbox toggling for multiple notification types.

## Description
Settings Notifications 1 provides a straightforward list of notification preferences. It uses a vertical layout with a clear heading and subdomain description. Each notification type includes a title and a brief explanation, paired with a standard checkbox for binary selection. This pattern is ideal for minimal setup requirements.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

interface SettingsNotifications1Props {
  heading?: string;
  subHeading?: string;
  className?: string;
  notifications?: NotificationItem[];
}

const SettingsNotifications1 = ({
  heading = "Notifications",
  subHeading = "Choose which notifications you'd like to receive",
  notifications = [
    {
      id: "mentions",
      title: "Direct mentions",
      description: "Get alerted when someone tags you using @.",
      enabled: true,
    },
    {
      id: "comments",
      title: "Comments",
      description: "Receive updates when someone comments on your posts.",
      enabled: true,
    },
    {
      id: "updates",
      title: "Product updates",
      description: "News about new features and improvements.",
      enabled: false,
    },
    {
      id: "marketing",
      title: "Marketing emails",
      description: "Tips, offers, and promotional content.",
      enabled: false,
    },
  ],
  className,
}: SettingsNotifications1Props) => {
  return (
    <section className="py-32">
      <div
        className={cn("container max-w-2xl space-y-8 tracking-tight", className)}
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{heading}</h3>
          <p className="font-medium text-muted-foreground">{subHeading}</p>
        </div>

        <div className="divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="space-y-0.5">
                <p className="font-medium">{notification.title}</p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
              <Checkbox defaultChecked={notification.enabled} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SettingsNotifications1 };
```
