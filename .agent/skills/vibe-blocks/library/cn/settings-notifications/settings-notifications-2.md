# Settings Notifications 2

## Metadata
- **Category**: Settings Notifications
- **Objective**: Modern switch-based notification list for a more polished UI experience.
- **Use Case**: Mobile-first or modern dashboard interfaces where a "switch" UI component is preferred over checkboxes.
- **Visual Style**: Similar to Block 1 but uses the Switch component, providing a more "native" feel.
- **Interactivity**: Toggle-based switches for easy on/off interactions.

## Description
Settings Notifications 2 upgrades the standard checklist to a modern switch interface. This layout is highly effective for touch-friendly interfaces and provides a clearer visual cue for "active" vs "inactive" states. It follows the same clean list structure with descriptive text for each notification channel.

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

interface SettingsNotifications2Props {
  heading?: string;
  subHeading?: string;
  className?: string;
  notifications?: NotificationItem[];
}

const SettingsNotifications2 = ({
  heading = "Notifications",
  subHeading = "Choose which notifications you'd like to receive",
  notifications = [
    {
      id: "email-updates",
      title: "Email updates",
      description: "Receive emails about your account activity and security.",
      enabled: true,
    },
    {
      id: "push-notifications",
      title: "Push notifications",
      description: "Receive push notifications on your mobile device.",
      enabled: true,
    },
    {
      id: "weekly-digest",
      title: "Weekly digest",
      description: "Get a weekly summary of your activity and insights.",
      enabled: false,
    },
    {
      id: "marketing-emails",
      title: "Marketing emails",
      description: "Receive tips, product updates, and promotional offers.",
      enabled: false,
    },
  ],
  className,
}: SettingsNotifications2Props) => {
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
              <Switch defaultChecked={notification.enabled} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SettingsNotifications2 };
```
